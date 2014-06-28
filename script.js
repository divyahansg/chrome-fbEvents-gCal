chrome.extension.onMessage.addListener(function(request, sender) {
	chrome.extension.getBackgroundPage().console.log('THIS IS A TEST');
	chrome.extension.getBackgroundPage().console.log(request.greeting)
	
    });

chrome.tabs.executeScript(null, { file: "jquery-1.11.1.min.js" }, function() {
	chrome.tabs.executeScript(null, { file: "getData.js" });
    });
