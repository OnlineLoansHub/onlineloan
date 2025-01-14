const webAppUrl = 'https://script.google.com/macros/s/AKfycby4CJO9qsw-Pk2Gr4RGQsSlvxcQRT4OCSgY27Id7YlJbSQt5weD-3wTZZ-5eVge2B91/exec'; // Replace with your Web App URL
const now = new Date();
const date = now.toLocaleDateString();
const time = now.toLocaleTimeString();
const urlParams = new URLSearchParams(window.location.search);
const gclid = urlParams.get('gclid') || 'N/A';
const domain = window.location.hostname;
const fullRequest = window.location.href;
const params = {};
const subs = {};
let index = 1;
urlParams.forEach((value, key) => {
    subs[`sub${index}`] = `${value}`;
    index++;
});
const logData = {
    date: date,
    time: time,
    gclid: gclid,
    domain: domain,
    fullRequest: fullRequest,
    actionType: "",
    ipAddress: "",
    payout: "",
    ...subs
};

function logRequestDetails() {
    logData.actionType = "request"
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
}
logRequestDetails();

function logLinkClick(event) {
    logData.actionType = "lpClick"
    console.log(event.target.hostname);
    logData.offer = event.target.hostname || "Uknown"
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
}

document.querySelectorAll('a.trackable-link').forEach(link => {
    link.addEventListener('click', logLinkClick);
});