chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: "https://www.google.com/analytics/web/#report/visitors-overview/"};
    },
    {
        urls: [
            "http://www.google.com/analytics/"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);