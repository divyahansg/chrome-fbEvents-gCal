chrome.extension.onMessage.addListener(function(request, sender) {
	chrome.extension.getBackgroundPage().console.log('THIS IS A TEST');
	chrome.extension.getBackgroundPage().console.log("date = " + request.date);
	var regex = /([0-9])?[0-9]:[0-9][0-9](am|pm)/g;
	var times = request.time.match(regex);
	
	chrome.extension.getBackgroundPage().console.log("time = " + request.time.match(regex));
	chrome.extension.getBackgroundPage().console.log(request.title);
	document.getElementsByName("title")[0].value = request.title;
	document.getElementsByName("start")[0].value = times[0];
	document.getElementsByName("date")[0].value = request.date;
    });

chrome.tabs.executeScript(null, { file: "jquery-1.11.1.min.js" }, function() {
	chrome.tabs.executeScript(null, { file: "getData.js" });
    });
