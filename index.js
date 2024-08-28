const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());
app.post('/summarize', async (req, res) => {
    try {
        console.log(req.body);
        const { post } = req.body;
        console.log(post);

        // Ollama API runs on port 11434 by default on Windows.
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: 'llama3', // use the model name installed locally
            prompt: `${post}`,
        });
        console.log(response);
        // const summary = response.data.text;
        // const summary = response.data;
        // const summary = response.data.response;
        const summary = getResponseSentence(response.data);

        res.json({ summary });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

function getResponseSentence(data) {
    // Split the data into individual JSON strings
    const jsonStrings = data.split('\n').filter(item => item.trim() !== '');

    // Extract the responses
    const responses = jsonStrings.map(item => JSON.parse(item).response);

    // Join the responses to form a sentence
    const sentence = responses.join('');

    // Return the sentence
    return sentence;
}

