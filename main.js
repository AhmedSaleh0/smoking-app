var newDayBtn = document.getElementsByClassName('myBtn')[0],
circle = document.getElementsByClassName('circle')[0],
timeSpan = document.getElementById('timeSpan'),
totalSpan = document.getElementById('totalSpan'),
dateSpan = document.getElementById('dateSpan'),
clearLocal = document.getElementById('clearLocal'),
currentCigs,
totalCigs,
lastCig;

setVars();
newDayBtn.addEventListener('click',resetDay);
clearLocal.addEventListener('click',clearLocalStorage);
circle.addEventListener('click',update);


function update() {
  lastCig = moment();

  updateVars();
  if (totalCigs == 1) {
    setDate();
  }
  saveVars();
  updateView();
}

function updateView() {
  /*update circle */
  circle.innerHTML = currentCigs;
  /*uodate total */
  totalSpan.innerHTML = totalCigs;
  if (localStorage.startingDate)
  dateSpan.innerHTML = localStorage.startingDate;
  setInterval(() => {
    if (lastCig) {
      timeSpan.innerHTML = lastCig.fromNow();
    }else{
      timeSpan.innerHTML = 'Never';
    }
  },1000);

}

function setVars() {
  if (localStorage.currentCigs) {
    currentCigs = localStorage.currentCigs;
  }else {
    currentCigs = 0;
  };
  if (localStorage.totalCigs) {
    totalCigs = localStorage.totalCigs;
  }else {
    totalCigs = 0;
  };
  if (localStorage.lastCig) {
    lastCig = moment(localStorage.lastCig);
  }else {
    lastCig = 0;
  }


  updateView();
}




function resetDay() {
  localStorage.currentCigs = 0;
  setVars();
}


function saveVars() {
  localStorage.currentCigs = currentCigs;
  localStorage.totalCigs = totalCigs;
  localStorage.lastCig = lastCig;
  console.log(totalCigs);
}

function updateVars() {
  currentCigs++;
  totalCigs++;
}

function setDate() {
  localStorage.startingDate = new Date().toDateString();
  dateSpan.innerHTML = localStorage.startingDate;
}

function clearLocalStorage(){
  localStorage.clear();
  location.reload();
}