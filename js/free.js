"use strict";

import "./packages/guiAssets.js"
import "./packages/antiTamper.js"
import "./packages/iModal.js"

// Anti-Logger
const originalXhr = window.XMLHttpRequest;
window.XMLHttpRequest = function () {
  const xhr = new originalXhr();
  const originalOpen = xhr.open;
  xhr.open = function (method, url) {
    if (method === "POST" && url.includes("logger")) {
      showToast(
        "DevHaxx has detected a silent log. This would mean your account is banned but DevHaxx has prevented this. Stay safe!",
        "orange"
      );
      return;
    }
    originalOpen.apply(this, arguments);
  };
  return xhr;
};

const originalFetch = window.fetch;
window.fetch = function (url, options) {
  if (url.includes("logger") || JSON.stringify(options).includes("logger")) {
    showToast(
      "DevHaxx has detected a silent log. This would mean your account is banned but DevHaxx has prevented this. Stay safe!",
      "orange"
    );
    return Promise.reject(new Error("DevHaxx AntiLog"));
  }
  return originalFetch.apply(this, arguments);
};

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Watermark
var copyrightDiv = document.createElement("div");
copyrightDiv.style.cssText =
  "position: fixed; bottom: 10px; width: 100%; color: white; font-size: 12px; text-align: center;";
copyrightDiv.textContent = "Copyright © DevTech 2023 All Rights Reserved";
document.body.appendChild(copyrightDiv);

//modal
iModal.showModal({
  "useInnerHTML": true,
  "title" : "DevHaxx",
  "description" : "DevHaxx Created by discord.gg/haxx | devhaxx.xyz",
  "width" : "610px",
  "callback" : iModal.closeModal,
});

// Welcome Toast
if (
  document.getElementsByClassName("css-1lvadjd-Typography-Username e15psnz0")[0]
) {
  showToast(
    "Welcome back to DevHaxx, " +
      document.getElementsByClassName(
        "css-1lvadjd-Typography-Username e15psnz0"
      )[0].outerText +
      "!",
    "green"
  );
}

// Gui
var UI = document.createElement("div");
UI.innerHTML = `<div id="devhaxx" style="position: absolute; top: 158px; left: 122px; padding: 3pt; background: linear-gradient(to top, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); font-size: 13px; backdrop-filter: blur(5px); z-index: 9999; border-radius: 17pt; box-shadow: rgba(50, 50, 50, 0.7) 0px 0px 10px; width: 200px; display: block;">
<div class="dh-box" style="background-color: rgba(16, 16, 24, 255); border-radius: 15pt; backdrop-filter: blur(5px); padding: 25px;">


    <div class="devhaxxheader" style="
    font-weight: bold; text-align: center; font-size: 45px; cursor: move; background: linear-gradient(to left, rgba(128, 128, 128), rgb(128, 0, 128)); color: transparent; font-family: 'Roboto', sans-serif; font-weight: 500; 
        -webkit-background-clip: text; line-height:80px; margin-top:-25px; text-align: center;">
      HAXX
    </div>

    <div style="font-weight: bold; font-size: 10px; background: text-align: left;color: white">
        RSHIFT TO HIDE
    </div>
  <br>
  
    <div style="padding: 0.8pt; background: linear-gradient(to left, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); margin-bottom: 8px; border-radius: 10px;">
    <div class="modMenuItem" style="cursor: pointer; padding:8px; background-color: rgba(16, 16, 24, 255); border-radius: 12px; text-align: center; transition: all .2s ease-out;">
      <span id="skip" style="font-family: 'Roboto', sans-serif; letter-spacing: 0.8px; font-weight: 300;">Question Skipper</span>
    </div>
    </div>

    <div style="padding: 0.8pt; background: linear-gradient(to left, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); margin-bottom: 8px; border-radius: 10px;">
    <div class="modMenuItem" style="cursor: pointer; padding:8px; background-color: rgba(16, 16, 24, 255); border-radius: 12px; text-align: center; transition: all .2s ease-out;">
      <span id="admin" style="font-family: 'Roboto', sans-serif; letter-spacing: 0.8px; font-weight: 300;">Toggle Dash Admin</span>
    </div>
    </div>
    
    <div style="font-weight: bold; font-size: 12px; background: text-align: left;color: white">
        devhaxx.xyz | discord.gg/haxx
    </div>
</div>
`;

// Zack was here

document.body.appendChild(UI);
window.dragElement(UI.firstElementChild);

document.getElementById("skip").addEventListener("click", () => {
  if (!document.getElementById("html5Iframe")) {
    showToast("Not in a lesson!", "red");
  } else {
    if (html5Iframe.src.includes("QUIZ")) {
      showToast("Quiz Skipper is a DevHaxx premium feature", "orange");
    } else {
      Object.values(html5Iframe.contentWindow.document.getElementById("nav-forward"))[1].onClick();
      showToast("Skipped Question!", "purple");
    }
  }
});

let admin = false;

document.getElementById("admin").addEventListener("click", () => {
  if (admin === false) {
    Object.values(document.getElementById("StudentDashboard-g38"))[1].children[0]._owner.stateNode.props.dispatchToggleCheatButtonsAction();
    showToast("You have access to the admin menu! Be careful as some buttons/functions could cause harm", "cyan");
    admin = true;
  } else {
    Object.values(document.getElementById("StudentDashboard-g38"))[1].children[0]._owner.stateNode.props.dispatchToggleCheatButtonsAction();
    showToast("You no longer have access to the admin menu.", "cyan");
    admin = false;
  }
});

// hide The Menu (i think)

window.isMenuVisible = true;
document.addEventListener("keydown", (event) => {
  if (event.code === "ShiftRight") {
    if (isMenuVisible) {
      // destroy
      window.isMenuVisible = false;
      document.getElementById("devhaxx").style.display = "none";
    } else {
      // spare
      window.isMenuVisible = true;
      document.getElementById("devhaxx").style.display = "block";
    }
  }
});
