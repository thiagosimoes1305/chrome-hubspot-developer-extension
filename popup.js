/**
 * Created by

 * Thiago Simões <thiagosimoes1305@gmail.com>
 * Carolina Batista <carolbatista2@gmail.com>
 */
function removeCache(){
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
    const urlTab = new URL(tabs[0].url);
    const params = new URLSearchParams(urlTab.search);
    const randomNum = Math.floor(Math.random() * 99999) + 1;

    params.set("hsCacheBuster", randomNum);

    chrome.tabs.update(tabs[0].id, { url: urlTab.origin + urlTab.pathname + '?' + params.toString() });
    window.close();
  });
}

function debugMode(){
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
    const urlTab = new URL(tabs[0].url);
    const params = new URLSearchParams(urlTab.search);
    const debugParam = "hsDebug";

    if ( params.has(debugParam) ){
      params.delete(debugParam);
    }
    else {
      params.append(debugParam, "true");
    }

    chrome.tabs.update(tabs[0].id, { url: urlTab.origin + urlTab.pathname + '?' + params.toString() });
    window.close();
  });
}

function developerMode(){
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
    const urlTab = new URL(tabs[0].url);
    const params = new URLSearchParams(urlTab.search);
    const debugParam = "developerMode";

    if ( params.has(debugParam) ){
      params.delete(debugParam);
    }
    else {
      params.append(debugParam, "true");
    }

    chrome.tabs.update(tabs[0].id, { url: urlTab.origin + urlTab.pathname + '?' + params.toString() });
    window.close();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("removeCache").addEventListener("click", removeCache);
  document.getElementById("debugMode").addEventListener("click", debugMode);
  document.getElementById("developerMode").addEventListener("click", developerMode);
});