function redirect(){
    console.log("Redirected!");
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        console.log(tabs[0].url);
        let newUrl = tabs[0].url.replace("youtube.com/shorts/", "youtube.com/watch/");
        if(newUrl != tabs[0].url){
            chrome.tabs.update(undefined, { url: newUrl });
        }
    });
}

window.onload=function(){
    document.getElementById("redirect_button").onclick = function(){redirect()};
}