window.dragElement=e=>{fade=e;var t=0,n=0,o=0,l=0;function u(e){fade.style.opacity="0.9",(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=s,document.onmousemove=i}function i(u){(u=u||window.event).preventDefault(),t=o-u.clientX,n=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function s(){document.onmouseup=null,document.onmousemove=null,fade.style.opacity="1"}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=u:e.onmousedown=u};

showToast = (message, backgroundColor) => {
    const notification = document.createElement("div");
    const notificationText = document.createElement("div");
    
    notification.style.cssText = `position: fixed; bottom: -100px; right: 20px; background-color: ${backgroundColor || "purple"}; color: white; border-radius: 10px; z-index: 9999; transition: bottom 0.5s ease-in-out; max-width: 300px; padding: 10px;`;
    notificationText.style.cssText = `font-size: 18px; word-wrap: break-word;`;
    notificationText.textContent = message;
    
    notification.appendChild(notificationText);
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.style.bottom = "20px";
    }, 100);
  
    setTimeout(() => {
      notification.style.bottom = `-${notification.offsetHeight + 20}px`;
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500);
    }, Math.max(3000, message.length * 50));
  }

showPrompt = (message, answerPlaceholder, callback, color) => {
  const o = document.createElement("div");
  const d = document.createElement("div");
  const answerBox = document.createElement("input");
  o.style.cssText = `position: fixed; top: 20px; left: -100%; background: linear-gradient(to right, ${color || "purple"} 5px, rgba(20, 20, 20, 0.8) 5px); color: white; z-index: 9999; opacity: 0; transition: left 0.5s ease-in-out, opacity 0.5s ease-in-out; max-width: 300px; padding: 10px;`;
  d.style.cssText = `font-size: 18px; word-wrap: break-word;`;
  d.textContent = message;
  answerBox.setAttribute("type", "text");
  answerBox.setAttribute("placeholder", answerPlaceholder || "");
  answerBox.style.cssText = `width: 100%; padding: 5px; background-color: rgba(0, 0, 0, 0.5); border: none; color: white; margin-top: 10px;`;
  answerBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const answerValue = answerBox.value;
      if (callback && typeof callback === "function") {
        callback(answerValue);
      }
      o.style.transition = "left 0.5s ease-in-out, opacity 0.5s ease-in-out";
      o.style.left = "-100%";
      o.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(o);
      }, 500);
    }
  });
  o.appendChild(d);
  o.appendChild(answerBox);
  document.body.appendChild(o);
  setTimeout(() => {
    o.style.left = "0";
    o.style.opacity = "1";
  }, 100);
};