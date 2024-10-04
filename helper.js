// helper.js

const baseUrl = 'https://2d80f1eb-d228-43ee-a76d-97fafa7e2e80-00-qmzb144eqw8t.janeway.replit.dev'; // Your Replit dev URL

async function signAndInstall(ipaFile, certFile) {
    const formData = new FormData();
    formData.append('ipa', ipaFile);
    formData.append('cert', certFile);

    try {
        const response = await fetch(`${baseUrl}/sign-and-install`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during signing process:', error);
        throw error;  // Rethrow for handling in the calling function
    }
}

function updateFeedback(message) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerText = message;
}

export { signAndInstall, updateFeedback };
