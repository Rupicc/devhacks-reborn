// Anti Tamper
window.addEventListener("resize", function () {
  if (
    window.outerWidth - window.innerWidth > 150 ||
    window.outerHeight - window.innerHeight > 150
  ) {
    document.documentElement.innerHTML = `<!DOCTYPE html><html><head><style>body{background-color:#4a235a;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:'Courier New',monospace}.error-container{max-width:500px;padding:40px;background-color:#333333;box-shadow:0 15px 30px rgba(0,0,0,.6);border-radius:8px;text-align:center}h1{color:#d35400;font-size:72px;margin:0;text-shadow:2px 2px 4px rgba(0,0,0,.8)}p{color:#fff;font-size:24px;margin:20px 0;text-shadow:1px 1px 2px rgba(0,0,0,.8)}.animated-text{animation:pulsate 1s ease-in-out infinite}@keyframes pulsate{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}<\/style><link href="https://fonts.googleapis.com/css?family=Courier+New" rel="stylesheet"><\/head><body><div class="error-container"><h1 class="animated-text">Restricted!<\/h1><p>DevHaxx highly restricts Inspect!\<\/p><\/div><\/body><\/html>`;
  }
});

window["Date.now"] = Date.now;

ATint = setInterval(() => {
  const beforeDebug = window["Date.now"]();
  eval("debugger;");
  if (window["Date.now"]() - beforeDebug > 300) {
    document.documentElement.innerHTML = `<!DOCTYPE html><html><head><style>body{background-color:#4a235a;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:'Courier New',monospace}.error-container{max-width:500px;padding:40px;background-color:#333333;box-shadow:0 15px 30px rgba(0,0,0,.6);border-radius:8px;text-align:center}h1{color:#d35400;font-size:72px;margin:0;text-shadow:2px 2px 4px rgba(0,0,0,.8)}p{color:#fff;font-size:24px;margin:20px 0;text-shadow:1px 1px 2px rgba(0,0,0,.8)}.animated-text{animation:pulsate 1s ease-in-out infinite}@keyframes pulsate{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}<\/style><link href="https://fonts.googleapis.com/css?family=Courier+New" rel="stylesheet"><\/head><body><div class="error-container"><h1 class="animated-text">Restricted!<\/h1><p>DevHaxx highly restricts Inspect!\<\/p><\/div><\/body><\/html>`;
  }
}, 15);

document.addEventListener("keyup", (event) => {
  if (!(event.key === "D" && event.ctrlKey && event.shiftKey)) {
    return;
  }
  event.preventDefault();
  clearInterval(ATint);
  ATint = null;
});
