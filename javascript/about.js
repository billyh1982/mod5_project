document.addEventListener("DOMContentLoaded", function () {
    // Create a hyperlink element for TikTok
    const tiktokLink = document.createElement('a');
    tiktokLink.href = 'https://www.tiktok.com'; // Set the URL for the link
    tiktokLink.textContent = 'TikTok'; // Set the text content for the link
    tiktokLink.target = '_blank'; // Open the link in a new tab

    // Get the container element where the links will be added
    const linksContainer = document.getElementById('linksContainer');
    
    // Append the Meta link to the container
    linksContainer.appendChild(document.createTextNode(' | '));
    
    // Append the TikTok link to the container
    linksContainer.appendChild(tiktokLink);
});
