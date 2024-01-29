import React, { Component } from 'react';
class Footer extends Component {
  componentDidMount() {
    const body = document.querySelector("body"),
          nav = document.querySelector("nav"),
          modeToggle = document.querySelector(".dark-light"),
          searchToggle = document.querySelector(".searchToggle"),
          sidebarOpen = document.querySelector(".sidebarOpen"),
          sidebarClose = document.querySelector(".siderbarClose");
          
    let getMode = localStorage.getItem("mode");
    
    if (getMode && getMode === "dark-mode") {
      body.classList.add("dark");
    }

    // js code to toggle dark and light mode
    modeToggle.addEventListener("click", () => {
      modeToggle.classList.toggle("active");
      body.classList.toggle("dark");
      // js code to keep user selected mode even page refresh or file reopen
      if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
      } else {
        localStorage.setItem("mode", "dark-mode");
      }
    });

    // js code to toggle search box
    searchToggle.addEventListener("click", () => {
      searchToggle.classList.toggle("active");
    });

    // js code to toggle sidebar
    sidebarOpen.addEventListener("click", () => {
      nav.classList.add("active");
    });

    body.addEventListener("click", (e) => {
      let clickedElm = e.target;
      if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
      }
    });
  }
  render() {
    return (
        <footer>
        
          <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <script src="/assets/script.js"></script>
          <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
          <script>
            {`
              window.botpressWebChat.init({
                "composerPlaceholder": "Chat with ELECTRODE",
                "botConversationDescription": "ELECTRODE Bot",
                "botId": "3f328e32-1df4-43db-8995-1cbc0b4f7122",
                "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
                "messagingUrl": "https://messaging.botpress.cloud",
                "clientId": "3f328e32-1df4-43db-8995-1cbc0b4f7122",
                "webhookId": "cbcaed66-5d91-4c16-831b-363edae23f05",
                "lazySocket": true,
                "themeName": "prism",
                "frontendVersion": "v1",
                "useSessionStorage": true,
                "enableConversationDeletion": true,
                "showPoweredBy": true,
                "theme": "prism",
                "themeColor": "#2563eb"
              });
            `}
          </script>
        
      </footer>
    );
  }
}

export default Footer;