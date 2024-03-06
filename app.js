// Specify the base url and parameters
const baseUrl = 'https://api.ValidEmail.net/';
const params = new URLSearchParams({
	email: 'tapiaalagbaychaben24@gmail.com', // Replace with the email you want to verify
	token: 'f32a95626e4e461eb8b47aecd6d6cc05' // Replace with your actual API key
});

console.log(`${baseUrl}?${params}`);

// Make the GET request
fetch(`${baseUrl}?${params}`)
	.then(response => response.json())
	.then(data => {
		// Handle the response

		// Print whether the email is valid
		console.log(`Email is valid: ${data.IsValid}`);

		// Print the score
		console.log(`Score: ${data.Score}`);

		// Print the email state
		console.log(`Email State: ${data.State}`);

		// Print the reason
		console.log(`Reason: ${data.Reason}`);

		// Extract additional information about the email
		const additionalInfo = data.EmailAdditionalInfo;
		for (const info of additionalInfo) {
			console.log(`${info.Key}: ${info.Value}`);
		}
	})
	.catch(error => {
		// Handle any errors
		console.error('Error:', error);
	});
