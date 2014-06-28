
/*
function checkFacebookURL(tabID, changeInfo, tab) {
    alert(tab.url);
    if(tab.url.indexOf('https://www.facebook.com') == 0) {
	    chrome.pageAction.show(tabID);
    }
}

chrome.tabs.onUpdated.addListener(checkFacebookURL);
*/
chrome.tabs.onUpdated.addListener(function(id, info, tab){
	chrome.pageAction.show(tab.id);
});
