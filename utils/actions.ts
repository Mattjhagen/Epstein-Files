// Utility to simulate file downloads
export const triggerDownload = (filename: string) => {
  // Create dummy content based on file extension to simulate a real file
  const extension = filename.split('.').pop()?.toLowerCase();
  let content = `[FORENSIC ARCHIVE SIMULATION]\n\nFile: ${filename}\nDate: ${new Date().toISOString()}\n\nThis is a placeholder file generated for the forensic analysis demo. In a production environment, this would serve the actual binary data from a secure bucket.`;
  let mimeType = "text/plain";

  // Adjust mime type strictly for browser behavior (though content remains text for this demo)
  if (extension === 'csv') mimeType = "text/csv";
  if (extension === 'pdf') mimeType = "application/pdf";
  if (extension === 'json') mimeType = "application/json";

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Utility to handle sharing
export const shareReport = async (title: string, text: string) => {
  const url = window.location.href;
  
  // Try Native Web Share API (Mobile/Modern Browsers)
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return;
    } catch (error) {
      console.log('User cancelled share or API error:', error);
    }
  }

  // Fallback to Clipboard
  try {
    await navigator.clipboard.writeText(url);
    alert('Report URL copied to clipboard.');
  } catch (err) {
    console.error('Failed to copy:', err);
    alert('Could not copy link. Please manually copy the URL.');
  }
};

// Social Intent Links
export const openSocialShare = (platform: 'twitter' | 'facebook' | 'linkedin', title: string) => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(title);
  let shareUrl = '';

  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
      break;
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
};
