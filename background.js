function redirect(tab, tabId) {
    let newUrl = tab.url.replace("youtube.com/shorts", "youtube.com/watch");
    if (newUrl != tab.url) {
        chrome.tabs.update(tabId, { url: newUrl });
        console.log(`Redirected from ${tab.url} to ${newUrl}!`);
    }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (/^https?:\/\/(www\.)?youtube\.com\/shorts(?:\/.*)?$/gm.test(tab.url)) {
        redirect(tab, tabId);
    }
})