function triggerPipeline() {
  const statusText = document.getElementById("status-text");
  statusText.innerText = "⏳ Running automated build and deployment...";
  statusText.style.color = "#e6b800";

  setTimeout(() => {
    statusText.innerText = "✅ Deployment successful! Application is live on AWS.";
    statusText.style.color = "#28a745";
  }, 3000);
}
