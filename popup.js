document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("openProfiles").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "openProfiles" });
  });
});

