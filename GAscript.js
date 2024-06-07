function getAnalyticsCode() {
    const myDomain = "nicolasurdaneta.github.io"; // Replace with your actual domain
    const analyticsCode = "G-13QLKQVPKC"; // Replace with your GA4 Measurement ID
    const currentDomain = window.location.hostname;

    if (currentDomain.includes(myDomain)) {
        return analyticsCode;
    } else {
        return "X";
    }
}

function insertAnalyticsScript() {
    const analyticsCode = getAnalyticsCode();
    console.log("Analytics Code:", analyticsCode);

    // Insert the GA4 script dynamically if the domain matches
    if (analyticsCode !== "X") {
        const script1 = document.createElement('script');
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsCode}`;
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsCode}');
        `;
        document.head.appendChild(script2);
    }
}

// Automatically run the script when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertAnalyticsScript);
