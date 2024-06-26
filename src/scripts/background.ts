///<reference types="chrome"/>

chrome.action.onClicked.addListener(async tab => {
  if (!tab.id) return

  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['clearPageContent.js'],
  })

  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['reactMain.js'],
  })
})
