function logRequestDetails() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get('gclid') || 'N/A'; // Get gclid if present
    const domain = window.location.hostname;
    const fullRequest = window.location.href;
    const params = {};

    // Extract all query parameters
    urlParams.forEach((value, key) => {
        params[key] = value;
    });

    // Fetch IP Address
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const logData = {
                date: date,
                time: time,
                gclid: gclid,
                domain: domain,
                fullRequest: fullRequest,
                params: params
            };

            // Send data to Google Sheet
            const webAppUrl = 'https://script.google.com/macros/s/AKfycbx6eUYcvGVLWz4dAWXiYl3wGL669nUghtp_9LkIbA-xx2VNreaMEwDhtdx6SIPiccb2/exec'; // Replace with your Web App URL
            fetch(webAppUrl, {
                redirect: "follow",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Data saved to Google Sheet:', data);
            })
            .catch(err => console.error('Error saving data:', err));
        })
        .catch(err => console.error('Failed to fetch IP:', err));
}

// Call the function to log details
logRequestDetails();
