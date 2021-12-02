window.link 
chrome.runtime.onMessage.addListener(reciever)
function reciever (request, sender, sendResponse){
  console.log(request)
  window.link = request
} 