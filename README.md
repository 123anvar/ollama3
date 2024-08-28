# ollama3
How to setup and run ollama (llama3) on windows. Then use node to create api end point to call the ollama.

1. Install Ollama https://ollama.com/
2. Install node and npm.
3. Install postman for testing the api.

4. Test Ollama installation as in below using command prompt.
   ollama run <installed llama version>
   eg:
   ollama run llama3

   <img width="393" alt="image" src="https://github.com/user-attachments/assets/ea280123-5b5f-43f8-b6dc-94a3e6e2a3e7">

6. Create the npm project in a folder and install dependencies.
npm init -y
npm install express
npm install axios

7. Use the index.js file in the repo, put in the same folder as the app was initialized in step 5 and try to start the server by running below command.
node index.js

8. Use postman to call the api using POST and sent the query in post body as in below image.

<img width="389" alt="image" src="https://github.com/user-attachments/assets/40bca04c-a1f9-499c-8adf-40e2de1db284">
