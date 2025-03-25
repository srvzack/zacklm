import axios from 'axios'

export async function generateTokens(prompt: string) {
    const response = await axios.post('http://localhost:8020/chat/completions', {
        model: 'deepseek-r1',
        messages: [{ role: 'user', content: prompt }],
        stream: true
    })

    return new Promise((resolve, reject) => {
        const chunks: Buffer[] = []
        response.data.on('end', () => resolve(Buffer.concat(chunks)))
        response.data.on('error', reject)
    })
}