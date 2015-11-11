// Copyright (c) 2015 Lynn Li. All rights reserved.
// Use of this source code is governed by a WTFPL license.


//Run our script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  mylog("in DOMContentLoaded");
  chrome.tabs.executeScript(null,{file:"jquery-1.11.3.min.js"});
  chrome.tabs.executeScript(null,{file:"sort.js"});
 //  var btn=$("#btn");
 //  btn.click(function(){
 //    mylog("in btn click");
 //    chrome.tabs.executeScript(null,{file:"jquery-1.11.3.min.js"});
 //    chrome.tabs.executeScript(null,{file:"sort.js"});
	// });
});

//log the message for debug
function mylog(str){
  $("#fdbk").append(str+"<br/>");
}