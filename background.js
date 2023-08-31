chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openProfiles") {
      const profileLinks = [
        "https://www.linkedin.com/in/priyanka-maity-460b1420a",
        "https://www.linkedin.com/in/ayan-sarkar-8151ab276",
        "https://www.linkedin.com/in/dipanjana-mondal-54bb41270"
      ];
  
      profileLinks.forEach(link => {
        chrome.tabs.create({ url: link });
      });
    }
  });
  