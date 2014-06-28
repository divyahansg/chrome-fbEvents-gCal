
chrome.tabs.onUpdated.addListener(function(id, info, tab){
	if(tab.url.indexOf("www.facebook.com/events/") > -1) {
	    chrome.pageAction.show(tab.id);
	}
	chrome.extension.getBackgroundPage().console.log('foo');
});
