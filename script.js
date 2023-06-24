//your JS code here. If required.

let browserDetails=navigator;

let info="You are using "+browserDetails.appName+" version "+browserDetails.appVersion;

document.getElementById("browser-info").innerText=info;