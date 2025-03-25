// app/api/llm/stream.js
export async function GET(request: Request) {
    const stream = new ReadableStream({
      async pull(controller) {
        try {
          // Connect to local Ollama
          const response = await fetch('http://localhost:9000/chat/completions', {
            method: 'POST',
            body: JSON.stringify({
              model: 'deepseek-r1',
              messages: [{ role: 'user', content: 'Your prompt here' }],
              stream: true
            })
          })
  
          // Stream tokens incrementally
          if (!response.body) {
            throw new Error('Response body is null');
          }
          const reader = response.body.getReader()
          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            controller.enqueue(value)
          }
        } catch (error) {
          controller.error(error)
        } finally {
          controller.close()
        }
      }
    })
  
    return new Response(stream, {
      headers: { 'Content-Type': 'text/event-stream' }
    })
  }
  