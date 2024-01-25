"use strict";

import "./packages/guiAssets.js"
import "./packages/antiTamper.js"
import "./packages/iModal.js"
import "./bridge.js";

// thingies
window.farming = false
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

const copyrightDiv=document.createElement("div");copyrightDiv.style.cssText="position: fixed; bottom: 10px; width: 100%; color: white; font-size: 12px; text-align: center;",copyrightDiv.textContent="Copyright \xa9 DevTech 2023 All Rights Reserved",document.body.appendChild(copyrightDiv);const username=document.querySelector(".css-1lvadjd-Typography-Username.e15psnz0");username&&showToast(`Welcome back to DevHaxx, ${username.innerHTML.charAt(0).toUpperCase()+username.innerHTML.slice(1).toLowerCase()}!`);const originalXhr=XMLHttpRequest;window.XMLHttpRequest=function(){let e=new originalXhr,n=e.open;return e.open=function(e,t){if("POST"===e&&t.includes("logger")){showToast("DevHaxx has prevented a log that would have banned your account.","orange");return}n.apply(this,arguments)},e};const originalFetch=fetch;window.fetch=function(e,n){return e.includes("logger")||JSON.stringify(n).includes("logger")?(showToast("DevHaxx has prevented a log that would have banned your account.","orange"),Promise.reject(Error("DH"))):originalFetch.apply(this,arguments)}

//modal
iModal.showModal({
  "useInnerHTML": true,
  "title" : "DevHaxx",
  "description" : "DevHaxx Created by discord.gg/haxx | devhaxx.xyz",
  "width" : "610px",
  "callback" : iModal.closeModal,
});

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
      <span id="skip" style="font-family: 'Roboto', sans-serif; letter-spacing: 0.8px; font-weight: 300;">Lesson Skipper</span>
    </div>
    </div>

    <div style="padding: 0.8pt; background: linear-gradient(to left, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); margin-bottom: 8px; border-radius: 10px;">
    <div class="modMenuItem" style="cursor: pointer; padding:8px; background-color: rgba(16, 16, 24, 255); border-radius: 12px; text-align: center; transition: all .2s ease-out;">
      <span id="farm" style="font-family: 'Roboto', sans-serif; letter-spacing: 0.8px; font-weight: 300;">Minute Farmer</span>
    </div>
    </div>

    <div style="padding: 0.8pt; background: linear-gradient(to left, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); margin-bottom: 8px; border-radius: 10px;">
    <div class="modMenuItem" style="cursor: pointer; padding:8px; background-color: rgba(16, 16, 24, 255); border-radius: 12px; text-align: center; transition: all .2s ease-out;">
      <span id="admin" style="font-family: 'Roboto', sans-serif; letter-spacing: 0.8px; font-weight: 300;">Dashboard Exploit</span>
    </div>
    </div>
    
    <div style="font-weight: bold; font-size: 12px; background: text-align: left;color: white">
        devhaxx.xyz | discord.gg/haxx
    </div>
</div>
`;

// Zack was here

document.body.appendChild(UI);
window.dragElement(UI.firstElementChild, UI);

document.getElementById("skip").addEventListener("click",() => {
  if (document.getElementById("html5Iframe") && !document.getElementById("html5-lesson-splash")) {
    if (html5Iframe.src.includes("TUTORIAL") || html5Iframe.src.includes("PRACTICE")) {
      lessonBridge.setScore(69)
      return
    }
  showPrompt("Enter a score between 1 and 100:","Score...",
    (scoreValue) => {
      const score = parseInt(scoreValue);
      if (!isNaN(score) && score >= 1 && score <= 100) {
        showToast("Skipping lesson... Do NOT close this tab, just wait for the skipper to finish.", 'purple')
        lessonBridge.utils.context.document.getElementById("lesson").style.display = 'none';
        lessonBridge.setScore(score)
      } else {showToast("Please enter a value between 1 and 100.","red");}
    }
  );
  } else {showToast("go in lesson dummy", "red")}
})

document.getElementById("farm").addEventListener("click", () => {
  if (document.getElementById("html5-splash-card")){
    if (window.farming) {
      document.getElementById("farm").innerText = "Minute Farmer"
      // min farmer main
      lessonBridge.pauseTimeOnTask()
      lessonBridge.close()
      // end main
      window.farming = false
      showToast("stopped farming!", "pink")
    } else {
      if (document.getElementById("lesson-splash-continue-button-button")) {
      document.getElementsByClassName("css-17awnnt-Box eny8iue0")[3].remove()
      document.getElementById("lesson-splash-close-button").remove()
      document.getElementById("farm").innerText = "Stop Farming"
      // min farmer main
      lessonBridge.start()
      lessonBridge.resumeTimeOnTask()
      // end main
      window.farming = true
      showToast("Started farming process. Do NOT close this tab. Click this button again to stop farming", "pink")
      } else {showToast("ait until button is green, then click this again!", "orange")}
    }
  }else{showToast("go to lesson loading page!")}
})

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
