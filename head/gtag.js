export var GA_TRACKING_ID = 'UA-96981965-1';

var environment = process.env.NODE_ENV
var isDevelopment = environment === 'development'
if (isDevelopment) {
    GA_TRACKING_ID = 'DEV';
} else {
    GA_TRACKING_ID = 'UA-96981965-1';
}
console.log(environment)

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};


// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};