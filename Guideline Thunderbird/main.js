// Sections Data
const sections = [
  {
    title: "",
    content: "",
    image: "",
  },
  {
    title: "1. Download and Install Thunderbird",
    content:
      "Visit the official Mozilla Thunderbird website and download the latest version. Follow the installation instructions to install the app on your device.",
    image: "first.jpg",
  },
  {
    title: "2. Automatic Email Setup",
    content:
      "Open Thunderbird. If it's your first time, the setup page will appear. Enter your name, full email address, and password. Then click 'Continue'.",
    image: "Automatic Email Setup.jpg",
  },
  {
    title: "3. Automatic Server Detection",
    content:
      "Thunderbird will auto-fill the incoming and outgoing mail server settings. Choose IMAP or POP and click 'Done'.",
    image: "Automatic Server Detection.jpg",
  },
  {
    title: "4. Account Successfully Configured",
    content:
      "A confirmation page will appear once the email is successfully added. Click 'Finish' to open your mailbox.",
    image: " Account Successfully Configured.jpg",
  },
  {
    title: "5. Add Another Email (Optional)",
    content:
      "Click your email on the left sidebar, then click 'Email' in the Set Up Another Account section to add more emails.",
    image: "Add Another Email (Optional).jpg",
  },
  {
    title: "6. Manual Email Setup (Advanced Users)",
    content:
      "Click the menu icon (≡), then go to New → Existing Mail Account. Fill in your name, email address, and password. Then click 'Configure manually'.",
    image: "Manual Email Setup (Advanced Users).jpg",
  },
  {
    title: "7. Enter Manual Settings",
    content:
      "Fill in your name, email, and password again. Then click 'Configure manually'.",
    image: "Thunderbird-configure-manually.jpg",
  },
  {
    title: "8. Configure Incoming Mail (IMAP)",
    content:
      "Use imap.hostinger.com as the server, port 993, with SSL/TLS and Normal password.",
    image: "Thunderbird-manual-configuration-IMAP-1.jpg",
  },
  {
    title: "9. Configure Outgoing Mail (SMTP)",
    content:
      "Use smtp.hostinger.com as the server, port 465, with SSL/TLS and Normal password.",
    image: "465.jpg",
  },
  {
    title: "10. Test Manual Configuration",
    content:
      "Click 'Re-test' to verify settings. If successful, click 'Done', then 'Finish'.",
    image: "Thunderbird-quick-response.webp",
  },
  {
    title: "11. Send a Test Email",
    content:
      "Click 'Write' in Thunderbird. Compose a message and send it to your own email address to make sure everything works.",
    image: "send-test.jpg",
  },
  {
    title: "12. Check Notifications",
    content:
      "Make sure notifications are enabled so you don't miss new emails.To get alerts for new emails, go to Thunderbird Settings → General → and enable 'New Mail Notification'.",
    image: "notification-settings.jpg",
  },
  {
    title: "Thunderbird Setup Complete!",
    content:
      "You're all set! Thunderbird is ready for use. Explore features like folders, filters, calendar, and themes.",
    image: "final.webp",
    success: true,
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
