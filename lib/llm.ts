// lib/llm.ts
export async function generateTokens(prompt: string) {
    const response = await fetch('https://api.example.com/llm/stream', {
      method: 'POST',
      body: JSON.stringify({
        prompt,
        temperature: 0.7, // Faster generation
        max_tokens: 1000,
        stream: true
      })
    })

    return new Promise((resolve, reject) => {
        const stream = new Readable({
          read() {
            this.push(response.body)
          }
        })
    
        const chunks = []
        stream.on('data', (chunk) => {
          chunks.push(chunk)
        })
        stream.on('end', () => resolve(Buffer.concat(chunks)))
        stream.on('error', reject)
      })
  }
  