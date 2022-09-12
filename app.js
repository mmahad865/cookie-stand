'use strict';

let storeArray = [];

let storesHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let cookieTable = document.getElementById('cookies');

function Store(minCustPerHour, maxCustPerHour, avgCookiePerSale, location){
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.location = location;
  this.StoreSales = [];
  this.dailySalesTotals = 0;
  storeArray.unshift(this);
}

function storestoreHours(){

  let thElement = document.createElement('th');
  thElement.textContent = 'Locations';
  cookieTable.appendChild(thElement);

  //use for loop to push storeHours array to table header
  for (let i = 0; i < storesHours.length; i++) {
    thElement = document.createElement('th');
    //create th content
    thElement.textContent = storesHours[i];
    //append th to table in DOM
    cookieTable.appendChild(thElement);
  }
  //create daily totals column
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Totals';
  cookieTable.appendChild(thElement);
}


// Create the new store instances
new Store(23, 65, 6.3, 'Seattle');
new Store(3, 24, 1.2, 'Tokyo');
new Store(11, 38, 3.7, 'Dubai');
new Store(20, 38, 2.3, 'Paris');
new Store(2, 16, 4.6, 'Lima');



Store.prototype.numsOfCustomer = function (){

  for (let i = 0; i < storesHours.length; i++) {

    let avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

    this.StoreSales.push(avgCookiePerHour);

    this.dailySalesTotals = avgCookiePerHour += this.dailySalesTotals;
  }
};

//render method defined here
Store.prototype.render = function (){

  this.numsOfCustomer();

  //create tr
  let trElement = document.createElement('tr');
  let tdElement = document.createElement('td');
  tdElement.textContent = this.location;
  trElement.appendChild(tdElement);

  for (let i = 0; i < storesHours.length; i++) {

    //create td
    tdElement = document.createElement('td');
    // create td content
    tdElement.textContent = this.StoreSales[i];
    // append td to tr
    trElement.appendChild(tdElement);
  }

  // totals sales for each location for the day
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailySalesTotals;
  trElement.appendChild(tdElement);
  //append th to table in DOM
  cookieTable.appendChild(trElement);
};


function storeHourlyTotals(){
  //create row & data element, content, append
  let trElement = document.createElement('tr');
  let tdElement = document.createElement('td');
  tdElement.textContent = 'Total';
  trElement.appendChild(tdElement);

  let grandTotal = 0;

  //use for loop to push storeHours array to table header
  for (let i = 0; i < storesHours.length; i++) {
    //counter is here to increment the nested loop ++
    let hourlyCounter = 0;
    for (let store = 0; store < storeArray.length; store++) {
      hourlyCounter += storeArray[store].StoreSales[i];
    }

    tdElement = document.createElement('td');
    //create the content
    tdElement.textContent = hourlyCounter;
    trElement.appendChild(tdElement);
    grandTotal = hourlyCounter += grandTotal;


  }
  // calculates and appends grand total to table
  tdElement = document.createElement('td');
  tdElement.textContent = grandTotal;
  trElement.appendChild(tdElement);

  //append th to table in DOM
  cookieTable.appendChild(trElement);
}

// function used to render all store rows with one call
function renderAllStores(){
  for(let i in storeArray){
    storeArray[i].render();
  }
}

//event listeners call back function
function addNewStore(event){
  // prevents page from refreshing upon event
  event.preventDefault();

  //assigning new value to property assigned to current property
  let newMinCustPerHour = event.target.minCustPerHour.value;
  let newMaxCustPerHour = event.target.maxCustPerHour.value;
  let newAvgCookiePerSale = event.target.avgCookiePerSale.value;
  let newLocation = event.target.location.value;

  // make new instance by passing in new arguements
  new Store(newMinCustPerHour, newMaxCustPerHour, newAvgCookiePerSale, newLocation);

  //replaces table with empty string or resets to how it was before it was rendered
  cookieTable.innerHTML = '';
  storestoreHours();
  renderAllStores();
  storeHourlyTotals();
}

//add event listener
storeForm.addEventListener('submit', addNewStore);

//Call all the function
storestoreHours();
renderAllStores();
storeHourlyTotals();
