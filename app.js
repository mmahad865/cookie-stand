'use strickt';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];
//let display= [];

function Store(location, min, max, avrgCookie){
    this.location = location;
    this.min = min;
    this.max = max;
    this.avrgCookie = avrgCookie;
    this.avrgCookiePerHour = [];
    // this.numOfCustomers = [];
    this.totalCookie = 0;
    allstores.push(this);
    
}



Store.prototype.numOfCustomers = function (){
    return Math.ceil(Math.random() * ((this.max) - (this.min)) + this.min);
};

Store.prototype.getAvgCookie = function(){
    this.numOfCustomers();
    for(let i=0; i<hours.length;i++){
        let avgCookie = Math.round(this.avrgCookie * this.numOfCustomers());
        this.avrgCookiePerHour.push(avgCookie);
        this.totalCookie += avgCookie;
    }
    // return math.round(this.avrgCookie * this.numOfCustomers());
};

Store.prototype.render = function(){
    this.getAvgCookie();
    let tableBody = document.getElementById('table');
        let row = document.createElement('tr');

        let th = document.createElement("th");
        th.innerText = this.location;
        row.appendChild(th);

        for (let i=0;i<hours.length;i++){

    
            
            let cell = document.createElement('td');
            cell.textContent =this.avrgCookiePerHour[i];
            row.appendChild(cell);
        }
        let cookietotal= document.createElement("td");
        cookietotal.textContent=this.totalCookie;
        row.appendChild(cookietotal);
            tableBody.appendChild(row);

    
        // tableEl.appendChild(tableEl);
};

function renderTableFooter (allstores){
    let totalAmount = document.getElementById('tfooter');
    if (totalAmount){
        totalAmount.remove();
    }

};


// function createLocatioRows (){
//     for (let i=0; i<allstores.length;i++){
//         allstores[i].render();
//     }
// }


// store.prototype.avrgCookiePerHour = function(){
//     this.calRanCustomer;
//     let ListEl = document.getElementById('data');
//         for (let i = 0; i < hours.length; i++) {
//             let newListEl = document.createElement('li');
//             newListEl.textContent = `${hours[i]}: ${seattle.numOfCookies[i]} cookies`;
//             ListEl.appendChild(newListEl);
//              display[i] = `${hours[i]}: ${this.numOfCookies[i]}`

//         }
//         let totalAmount = document.createElement('li');
//         totalAmount.textContent= `Total: ${this.totalCookie}`;
//         ListEl.appendChild(totalAmount);
// }
let formEl = document.getElementById('form1');
formEl.addEventListener('submit', function (event) {
    event.preventDefault();


    let store = event.target.store.value;
    let min = event.target.min.value;
    let max = event.target.max.value;
    let avrgCookie = event.target.avgCookie.value;
    let newStore= new Store(store, min, max, avrgCookie);
    console.log(newStore);
});


let allstores=[];
let seattle = new Store("seattle", "23", "65", "6.3", [], [],0);
let tokyo = new Store("tokyo" , "3", "24", "1.2");
let dubai = new Store("dubai", "11", "38", "1.2");
let paris = new Store("paris", "20", "38", "2.8");
let lima = new Store("lima", "2", "16", "4.8");
// createLocatioRows();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


// new store(seattle, 23, 65, 6.3);
// let seattle = {
//     location: 'Seattle',
//     min: 23,
//     max: 65,
//     avrgCookie: 6.3,
//     numOfCustomers: [],
//     numOfCookies: [], 
//     totalCookie: 0,
//     //display: [],
//     calRanCustomer: function () {
//         for (let i =0; i < hours.length; i++){
//            this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
//         }
//     },
    

//     avrgCookiePerHour: function () {
//         this.calRanCustomer();
//         for (let i=0; i <this.numOfCustomers.length; i++){
//             this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

//         }
         
//     },

//     calTotalCookiePerDay: function (){
//         for (let i = 0; i <this.numOfCookies.length; i++) {
//             this.totalCookie += this.numOfCookies[i];
//             //this.totalCookie = this.totalCookie + this.numOfCookies[i];
//             //0              = 0                + 100 
//             //100            = 100              +200
//             //300            = 300
//             console.log(this.totalCookie);
//         }
        
//     },

//     render: function (){
//         this.avrgCookiePerHour();
//         this.calTotalCookiePerDay();




//         let ListEl = document.getElementById('data');
//         for (let i = 0; i < hours.length; i++) {
//             let newListEl = document.createElement('li');
//             newListEl.textContent = `${hours[i]}: ${seattle.numOfCookies[i]} cookies`;
//             ListEl.appendChild(newListEl);
//             // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`

//         }
//         let totalAmount = document.createElement('li');
//         totalAmount.textContent= `Total: ${this.totalCookie} cookies`;
//         ListEl.appendChild(totalAmount);



//         let tableBody = document.getElementById('table');
//         let row = document.createElement('tr');

//         let th = document.createElement("th");
//         th.innerText = this.location;
//         row.appendChild(th);

//         for (let key in seattle.numOfCookies){

//             console.log(key);
//             let value = seattle.numOfCookies[key];
            
//             let cell = document.createElement('td');
//             cell.textContent = value;
//             row.appendChild(cell);
//         }
//             tableBody.appendChild(row);
//         //tableEl.appendChild(tableEl);

  
// }

// };
// seattle.render();

// console.log(seattle.numOfCustomers);
// console.log(seattle.numOfCookies);

// console.log(seattle.totalCookie);
// //seattle.calDisplay();
// console.log(display);
// console.log(seattle.avrgCookiePerHour());

// console.log(seattle);

// let tokyo = {
//     location: 'tokyo',
//     min: 3,
//     max: 24,
//     avrgCookie: 1.2,
//     numOfCustomers: [],
//     numOfCookies: [], 
//     totalCookie: 0,
//     //display: [],
//     calRanCustomer: function () {
//         for (let i =0; i < hours.length; i++){
//            this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
//         }
//     },
    

//     avrgCookiePerHour: function () {
//         this.calRanCustomer();
//         for (let i=0; i <this.numOfCustomers.length; i++){
//             this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

//         }
         
//     },

//     calTotalCookiePerDay: function (){
//         for (let i = 0; i <this.numOfCookies.length; i++) {
//             this.totalCookie += this.numOfCookies[i];
//             //this.totalCookie = this.totalCookie + this.numOfCookies[i];
//             //0              = 0                + 100 
//             //100            = 100              +200
//             //300            = 300
//             console.log(this.totalCookie);
//         }
        
//     },

//     render: function (){
//         this.avrgCookiePerHour();
//         this.calTotalCookiePerDay();
//         let ListEl = document.getElementById('data2');
//         for (let i = 0; i < hours.length; i++) {
//             let newListEl = document.createElement('li');
//             newListEl.textContent = `${hours[i]}: ${tokyo.numOfCookies[i]} cookies`;
//             ListEl.appendChild(newListEl);
//             // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`
        

//     }
//     let totalAmount= document.createElement('li');
//     totalAmount.textContent= `Total: ${this.totalCookie} cookies` ;
//     ListEl.appendChild(totalAmount);


//      let tableBody = document.getElementById('table');
//         let row = document.createElement('tr');

//         let th = document.createElement("th");
//         th.innerText = this.location;
//         row.appendChild(th);

//         for (let key in tokyo.numOfCookies){

//             console.log(key);
//             let value = tokyo.numOfCookies[key];
            
//             let cell = document.createElement('td');
//             cell.textContent = value;
//             row.appendChild(cell);
//         }
//             tableBody.appendChild(row);
// }

// };
// tokyo.render();

// console.log(seattle.numOfCustomers);
// console.log(seattle.numOfCookies);

// console.log(seattle.totalCookie);
// //seattle.calDisplay();
// console.log(display);
// console.log(seattle.avrgCookiePerHour());

// console.log(seattle);

// let dubai = {
//     location: 'dubai',
//     min: 11,
//     max: 38,
//     avrgCookie: 1.2,
//     numOfCustomers: [],
//     numOfCookies: [], 
//     totalCookie: 0,
//     //display: [],
//     calRanCustomer: function () {
//         for (let i =0; i < hours.length; i++){
//            this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
//         }
//     },
    

//     avrgCookiePerHour: function () {
//         this.calRanCustomer();
//         for (let i=0; i <this.numOfCustomers.length; i++){
//             this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

//         }
         
//     },

//     calTotalCookiePerDay: function (){
//         for (let i = 0; i <this.numOfCookies.length; i++) {
//             this.totalCookie += this.numOfCookies[i];
//             //this.totalCookie = this.totalCookie + this.numOfCookies[i];
//             //0              = 0                + 100 
//             //100            = 100              +200
//             //300            = 300
//             console.log(this.totalCookie);
//         }
        
//     },

//     render: function (){
//         this.avrgCookiePerHour();
//         this.calTotalCookiePerDay();
//         let ListEl = document.getElementById('data3');
//         for (let i = 0; i < hours.length; i++) {
//             let newListEl = document.createElement('li');
//             newListEl.textContent = `${hours[i]}: ${dubai.numOfCookies[i]} cookies`;
//             ListEl.appendChild(newListEl);
//             // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`
        

//     }
//     let totalAmount= document.createElement('li');
//     totalAmount.textContent= `Total: ${this.totalCookie} cookies` ;
//     ListEl.appendChild(totalAmount);

//     let tableBody = document.getElementById('table');
//         let row = document.createElement('tr');

//         let th = document.createElement("th");
//         th.innerText = this.location;
//         row.appendChild(th);

//         for (let key in dubai.numOfCookies){

//             console.log(key);
//             let value = dubai.numOfCookies[key];
            
//             let cell = document.createElement('td');
//             cell.textContent = value;
//             row.appendChild(cell);
//         }
//             tableBody.appendChild(row);
// }

// };
// dubai.render();

// console.log(seattle.numOfCustomers);
// console.log(seattle.numOfCookies);

// console.log(seattle.totalCookie);
// //seattle.calDisplay();
// console.log(display);
// console.log(seattle.avrgCookiePerHour());

// let paris = {
//     location: 'paris',
//     min: 20,
//     max: 38,
//     avrgCookie: 2.3,
//     numOfCustomers: [],
//     numOfCookies: [], 
//     totalCookie: 0,
//     //display: [],
//     calRanCustomer: function () {
//         for (let i =0; i < hours.length; i++){
//            this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
//         }
//     },
    

//     avrgCookiePerHour: function () {
//         this.calRanCustomer();
//         for (let i=0; i <this.numOfCustomers.length; i++){
//             this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

//         }
         
//     },

//     calTotalCookiePerDay: function (){
//         for (let i = 0; i <this.numOfCookies.length; i++) {
//             this.totalCookie += this.numOfCookies[i];
//             //this.totalCookie = this.totalCookie + this.numOfCookies[i];
//             //0              = 0                + 100 
//             //100            = 100              +200
//             //300            = 300
//             console.log(this.totalCookie);
//         }
        
//     },

//     render: function (){
//         this.avrgCookiePerHour();
//         this.calTotalCookiePerDay();
//         let ListEl = document.getElementById('data4');
//         for (let i = 0; i < hours.length; i++) {
//             let newListEl = document.createElement('li');
//             newListEl.textContent = `${hours[i]}: ${paris.numOfCookies[i]} cookies`;
//             ListEl.appendChild(newListEl);
//             // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`
        

//     }
//     let totalAmount= document.createElement('li');
//     totalAmount.textContent= `Total: ${this.totalCookie} cookies` ;
//     ListEl.appendChild(totalAmount);

//     let tableBody = document.getElementById('table');
//         let row = document.createElement('tr');

//         let th = document.createElement("th");
//         th.innerText = this.location;
//         row.appendChild(th);

//         for (let key in paris.numOfCookies){

//             console.log(key);
//             let value = paris.numOfCookies[key];
            
//             let cell = document.createElement('td');
//             cell.textContent = value;
//             row.appendChild(cell);
//         }
//             tableBody.appendChild(row);
// }

// };
// paris.render();

// console.log(seattle.numOfCustomers);
// console.log(seattle.numOfCookies);

// console.log(seattle.totalCookie);
// //seattle.calDisplay();
// console.log(display);
// console.log(seattle.avrgCookiePerHour());

// let lima = {
//     location: 'lima',
//     min: 2,
//     max: 16,
//     avrgCookie: 4.6,
//     numOfCustomers: [],
//     numOfCookies: [], 
//     totalCookie: 0,
//     //display: [],
//     calRanCustomer: function () {
//         for (let i =0; i < hours.length; i++){
//            this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
//         }
//     },
    

//     avrgCookiePerHour: function () {
//         this.calRanCustomer();
//         for (let i=0; i <this.numOfCustomers.length; i++){
//             this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

//         }
         
//     },

//     calTotalCookiePerDay: function (){
//         for (let i = 0; i <this.numOfCookies.length; i++) {
//             this.totalCookie += this.numOfCookies[i];
//             //this.totalCookie = this.totalCookie + this.numOfCookies[i];
//             //0              = 0                + 100 
//             //100            = 100              +200
//             //300            = 300
//             console.log(this.totalCookie);
//         }
        
//     },

//     render: function (){
//         this.avrgCookiePerHour();
//         this.calTotalCookiePerDay();
//         let ListEl = document.getElementById('data5');
//         for (let i = 0; i < hours.length; i++) {
//             let newListEl = document.createElement('li');
//             newListEl.textContent = `${hours[i]}: ${lima.numOfCookies[i]} cookies`;
//             ListEl.appendChild(newListEl);
//             // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`
        

//     }
//     let totalAmount= document.createElement('li');
//     totalAmount.textContent= `Total: ${this.totalCookie} cookies` ;
//     ListEl.appendChild(totalAmount);

//     let tableBody = document.getElementById('table');
//         let row = document.createElement('tr');

//         let th = document.createElement("th");
//         th.innerText = this.location;
//         row.appendChild(th);

//         for (let key in lima.numOfCookies){

//             console.log(key);
//             let value = lima.numOfCookies[key];
            
//             let cell = document.createElement('td');
//             cell.textContent = value;
//             row.appendChild(cell);
//         }
//             tableBody.appendChild(row);
// }

// };
// lima.render();



//seattle.calDisplay();



// let ListEl = document.getElementById('data');
// for (let i in seattle.numOfCookies);
// let newListEl = document.createElement('li');
// //console.log('li')
// newListEl.textContent = `${hours[i]}: ${seattle.numOfCookies[i]} cookies`;
// console.log(newListEl);
// ListEl.appendChild(newListEl);
// console.log(newListEl);
