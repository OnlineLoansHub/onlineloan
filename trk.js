function logRequestDetails() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get('gclid') || 'N/A'; // Get gclid if present
    const domain = window.location.hostname;
    const fullRequest = window.location.href;
    const params = {};


      // Map query parameters to sub1, sub2, sub3, etc.
      const subs = {};
      let index = 1;
    // Extract all query parameters
    urlParams.forEach((value, key) => {
        subs[`sub${index}`] = `${value}`;
        index++;
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
                ...subs,
                actionType: "request"
            };

            // Send data to Google Sheet
            const webAppUrl = 'https://script.google.com/macros/s/AKfycby4CJO9qsw-Pk2Gr4RGQsSlvxcQRT4OCSgY27Id7YlJbSQt5weD-3wTZZ-5eVge2B91/exec'; // Replace with your Web App URL
            fetch(webAppUrl, {
                method: "POST",
                redirect: "follow",
                headers: new Headers({
                  "Content-Type": "text/plain;charset=utf-8",
                }),
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
