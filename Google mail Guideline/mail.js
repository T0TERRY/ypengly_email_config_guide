// Sections Data
const sections = [
 
  {
    title: "1. Download Gmail App (Optional)",
    content:
      "If you're using a mobile device, download the Gmail app from the Google Play Store or Apple App Store. This allows you to access Gmail on the go.",
    image: "download-app.jpg",
  },
  {
    title: "2. Sign In or Create a Gmail Account",
    content:
      "Go to https://mail.google.com/ on your browser or open the Gmail app. Click 'Create account' if you don't have one, or sign in with your Google credentials.",
    image: "signin.jpg",
  },
  {
    title: "3. Open Gmail Settings",
    content:
      "Click the gear icon (⚙) in the top right. Then click 'See all settings' to begin customizing your Gmail.",
    image: "first step.png",
  },
  {
    title: "4. Add Another Email Address",
    content:
      "Go to the 'Accounts and Import' tab. Under 'Send mail as', click 'Add another email address'. Enter the name and email you want to send from. Click 'Next Step'.",
    image: "add another email.png",
  },
  {
    title: "5. Configure SMTP Server",
    content:
      "Enter the SMTP settings for the added email:\n\n- SMTP Server: smtp.gmail.com\n- Port: 587 (TLS) or 465 (SSL)\n- Username: Your full email\n- Password: App password if 2FA is enabled\n\nClick 'Add Account'.",
    image: "confirm 2 verify.png",
  },
  {
    title: "6. Verify Ownership",
    content:
      "Check your inbox for a verification email. Click the confirmation link or enter the code in Gmail settings to confirm ownership.",
    image: "confirm2.png",
  },
  {
    title: "7. Send a Test Email",
    content:
      "Click 'Compose' in Gmail. Use the 'From' dropdown to select your newly added address. Send a test email to yourself or a friend.",
    image: "send-test.jpg",
  },
  {
    title: "8. Enable Notifications",
    content:
      "Go to Gmail settings → General → scroll to 'Desktop notifications'. Turn them on to get alerts for new emails.",
    image: "notification-settings.jpg",
  },
  {
    title: "9. You're All Set!",
    content:
      "You’ve now successfully set up Gmail and added another email address. You can now send and receive messages from multiple accounts in one place.",
    image: "final.jpg",
    success: true,
  },
  {
    title: "Enjoy your conversation !!",
    content: "Highlight",
    image: "Gif.gif",
  },
];

// Get container
const container = document.getElementById("sections-container");

// Populate sections dynamically
sections.forEach((section, index) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("section");

  // Add success class if it's the last step
  if (section.success) {
    sectionDiv.classList.add("success");
  }

  sectionDiv.innerHTML = `
              <h2>${section.title}</h2>
              <p>${section.content}</p>
              <img src="${section.image}" alt="${section.title}">
          `;

  // Apply animation delay
  sectionDiv.style.animationDelay = `${index * 0.1}s`;

  container.appendChild(sectionDiv);
});
