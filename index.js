const arr = {
  20: "Fetching Files from Google Drive...",
  40: "Triggering SAP Automation",
  60: "Processing files in SAP",
  80: "Connectiong to AWS S3",
  100: "Files deliverd to PCE ✅",
};

var newWindow;

function start() {
  const progressEl = document.querySelector(".progress-bar");
  const statusTextEl = document.querySelector(".status-text");
  const startBtn = document.querySelector(".btn-start");
  const iconBorderSelector = document.querySelectorAll(".google-drive-wrapper");
  const arrowSelector = document.querySelectorAll(".arrow");
  let initialWidth = 0;
  let incWidth = 20;
  let cWidth = 0;

  // initial state
  startBtn.disabled = true;
  progressEl.style.width = `${cWidth}%`;
  iconBorderSelector[0].style.border = '2px dashed gray';
  iconBorderSelector[1].style.border = '2px dashed gray';
  iconBorderSelector[2].style.border = '2px dashed gray';
  arrowSelector[0].style.backgroundColor = 'rgb(189, 189, 189)';
  arrowSelector[1].style.borderLeftColor = 'rgb(189, 189, 189)';
  arrowSelector[2].style.backgroundColor = 'rgb(189, 189, 189)';
  arrowSelector[3].style.borderLeftColor = 'rgb(189, 189, 189)';

  var interval = setInterval(() => {

    cWidth = initialWidth + incWidth;
    progressEl.style.width = `${cWidth}%`;
    statusTextEl.innerText = `${arr[cWidth]}`;
    initialWidth = cWidth;

    switch (cWidth) {
      case 20:
        iconBorderSelector[0].style.border = '2px solid var(--clr-primary-low-nav-bg)';
        break;
      case 40:
        arrowSelector[0].style.backgroundColor = 'var(--clr-primary-low-nav-bg)';
        arrowSelector[1].style.borderLeftColor = 'var(--clr-primary-low-nav-bg)';
        openWindow();
        break;
      case 60:
        iconBorderSelector[1].style.border = '2px solid var(--clr-primary-low-nav-bg)';
        //openWindow();
        break;
      case 80:
        arrowSelector[2].style.backgroundColor = 'var(--clr-primary-low-nav-bg)';
        arrowSelector[3].style.borderLeftColor = 'var(--clr-primary-low-nav-bg)';
        //closeWindow();
        break;
      case 100:
        iconBorderSelector[2].style.border = '2px solid var(--clr-primary-low-nav-bg)';
        clearInterval(interval);
        setTimeout(() => {
            startBtn.disabled = false;
            startBtn.textContent = "Import again!";
        }, 500);
        break;

      default:
        break;
    }
    
  }, 1500);
}


function openWindow() {
    //console.log('open winddow');
    newWindow = window.open("https://www.google.com/", "", "width=200,height=100, top=400, left=0");
    //console.log({newWindow});
  
  }
  
  function closeWindow() {
    //console.log({newWindow});
    //console.log('closeWindow');
     newWindow.close()
  }

async function apiCall() {
  try {
    const resp = await fetch("https://www.google.com/");
    console.log(resp);
  } catch (error) {
    console.error(error);
  }
}
