'use strickt';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];
let display= [];
let seattle = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avrgCookie: 6.3,
    numOfCustomers: [],
    numOfCookies: [], 
    totalCookie: 0,
    //display: [],
    calRanCustomer: function () {
        for (let i =0; i < hours.length; i++){
           this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
        }
    },
    

    avrgCookiePerHour: function () {
        this.calRanCustomer();
        for (let i=0; i <this.numOfCustomers.length; i++){
            this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

        }
         
    },

    calTotalCookiePerDay: function (){
        for (let i = 0; i <this.numOfCookies.length; i++) {
            this.totalCookie += this.numOfCookies[i];
            //this.totalCookie = this.totalCookie + this.numOfCookies[i];
            //0              = 0                + 100 
            //100            = 100              +200
            //300            = 300
            console.log(this.totalCookie);
        }
        
    },

    render: function (){
        this.avrgCookiePerHour();
        this.calTotalCookiePerDay();




        let ListEl = document.getElementById('data');
        for (let i = 0; i < hours.length; i++) {
            let newListEl = document.createElement('li');
            newListEl.textContent = `${hours[i]}: ${seattle.numOfCookies[i]} cookies`;
            ListEl.appendChild(newListEl);
            // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`

        }
        let totalAmount = document.createElement('li');
        totalAmount.textContent= `Total: ${this.totalCookie} cookies`;
        ListEl.appendChild(totalAmount);



        let tableBody = document.getElementById('table');
        let row = document.createElement('tr');

        let th = document.createElement("th");
        th.innerText = this.location;
        row.appendChild(th);

        for (let key in seattle.numOfCookies){

            console.log(key);
            let value = seattle.numOfCookies[key];
            
            let cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        }
            tableBody.appendChild(row);
        //tableEl.appendChild(tableEl);

  
}

};
seattle.render();

console.log(seattle.numOfCustomers);
console.log(seattle.numOfCookies);

console.log(seattle.totalCookie);
//seattle.calDisplay();
console.log(display);
console.log(seattle.avrgCookiePerHour());

console.log(seattle);

let tokyo = {
    location: 'tokyo',
    min: 3,
    max: 24,
    avrgCookie: 1.2,
    numOfCustomers: [],
    numOfCookies: [], 
    totalCookie: 0,
    //display: [],
    calRanCustomer: function () {
        for (let i =0; i < hours.length; i++){
           this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
        }
    },
    

    avrgCookiePerHour: function () {
        this.calRanCustomer();
        for (let i=0; i <this.numOfCustomers.length; i++){
            this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

        }
         
    },

    calTotalCookiePerDay: function (){
        for (let i = 0; i <this.numOfCookies.length; i++) {
            this.totalCookie += this.numOfCookies[i];
            //this.totalCookie = this.totalCookie + this.numOfCookies[i];
            //0              = 0                + 100 
            //100            = 100              +200
            //300            = 300
            console.log(this.totalCookie);
        }
        
    },

    render: function (){
        this.avrgCookiePerHour();
        this.calTotalCookiePerDay();
        let ListEl = document.getElementById('data2');
        for (let i = 0; i < hours.length; i++) {
            let newListEl = document.createElement('li');
            newListEl.textContent = `${hours[i]}: ${tokyo.numOfCookies[i]} cookies`;
            ListEl.appendChild(newListEl);
            // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`
        

    }
    let totalAmount= document.createElement('li');
    totalAmount.textContent= `Total: ${this.totalCookie} cookies` ;
    ListEl.appendChild(totalAmount);


     let tableBody = document.getElementById('table');
        let row = document.createElement('tr');

        let th = document.createElement("th");
        th.innerText = this.location;
        row.appendChild(th);

        for (let key in tokyo.numOfCookies){

            console.log(key);
            let value = tokyo.numOfCookies[key];
            
            let cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        }
            tableBody.appendChild(row);
}

};
tokyo.render();

console.log(seattle.numOfCustomers);
console.log(seattle.numOfCookies);

console.log(seattle.totalCookie);
//seattle.calDisplay();
console.log(display);
console.log(seattle.avrgCookiePerHour());

console.log(seattle);

let dubai = {
    location: 'dubai',
    min: 11,
    max: 38,
    avrgCookie: 1.2,
    numOfCustomers: [],
    numOfCookies: [], 
    totalCookie: 0,
    //display: [],
    calRanCustomer: function () {
        for (let i =0; i < hours.length; i++){
           this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
        }
    },
    

    avrgCookiePerHour: function () {
        this.calRanCustomer();
        for (let i=0; i <this.numOfCustomers.length; i++){
            this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

        }
         
    },

    calTotalCookiePerDay: function (){
        for (let i = 0; i <this.numOfCookies.length; i++) {
            this.totalCookie += this.numOfCookies[i];
            //this.totalCookie = this.totalCookie + this.numOfCookies[i];
            //0              = 0                + 100 
            //100            = 100              +200
            //300            = 300
            console.log(this.totalCookie);
        }
        
    },

    render: function (){
        this.avrgCookiePerHour();
        this.calTotalCookiePerDay();
        let ListEl = document.getElementById('data3');
        for (let i = 0; i < hours.length; i++) {
            let newListEl = document.createElement('li');
            newListEl.textContent = `${hours[i]}: ${dubai.numOfCookies[i]} cookies`;
            ListEl.appendChild(newListEl);
            // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`
        

    }
    let totalAmount= document.createElement('li');
    totalAmount.textContent= `Total: ${this.totalCookie} cookies` ;
    ListEl.appendChild(totalAmount);

    let tableBody = document.getElementById('table');
        let row = document.createElement('tr');

        let th = document.createElement("th");
        th.innerText = this.location;
        row.appendChild(th);

        for (let key in dubai.numOfCookies){

            console.log(key);
            let value = dubai.numOfCookies[key];
            
            let cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        }
            tableBody.appendChild(row);
}

};
dubai.render();

console.log(seattle.numOfCustomers);
console.log(seattle.numOfCookies);

console.log(seattle.totalCookie);
//seattle.calDisplay();
console.log(display);
console.log(seattle.avrgCookiePerHour());

let paris = {
    location: 'paris',
    min: 20,
    max: 38,
    avrgCookie: 2.3,
    numOfCustomers: [],
    numOfCookies: [], 
    totalCookie: 0,
    //display: [],
    calRanCustomer: function () {
        for (let i =0; i < hours.length; i++){
           this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
        }
    },
    

    avrgCookiePerHour: function () {
        this.calRanCustomer();
        for (let i=0; i <this.numOfCustomers.length; i++){
            this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

        }
         
    },

    calTotalCookiePerDay: function (){
        for (let i = 0; i <this.numOfCookies.length; i++) {
            this.totalCookie += this.numOfCookies[i];
            //this.totalCookie = this.totalCookie + this.numOfCookies[i];
            //0              = 0                + 100 
            //100            = 100              +200
            //300            = 300
            console.log(this.totalCookie);
        }
        
    },

    render: function (){
        this.avrgCookiePerHour();
        this.calTotalCookiePerDay();
        let ListEl = document.getElementById('data4');
        for (let i = 0; i < hours.length; i++) {
            let newListEl = document.createElement('li');
            newListEl.textContent = `${hours[i]}: ${paris.numOfCookies[i]} cookies`;
            ListEl.appendChild(newListEl);
            // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`
        

    }
    let totalAmount= document.createElement('li');
    totalAmount.textContent= `Total: ${this.totalCookie} cookies` ;
    ListEl.appendChild(totalAmount);

    let tableBody = document.getElementById('table');
        let row = document.createElement('tr');

        let th = document.createElement("th");
        th.innerText = this.location;
        row.appendChild(th);

        for (let key in paris.numOfCookies){

            console.log(key);
            let value = paris.numOfCookies[key];
            
            let cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        }
            tableBody.appendChild(row);
}

};
paris.render();

console.log(seattle.numOfCustomers);
console.log(seattle.numOfCookies);

console.log(seattle.totalCookie);
//seattle.calDisplay();
console.log(display);
console.log(seattle.avrgCookiePerHour());

let lima = {
    location: 'lima',
    min: 2,
    max: 16,
    avrgCookie: 4.6,
    numOfCustomers: [],
    numOfCookies: [], 
    totalCookie: 0,
    //display: [],
    calRanCustomer: function () {
        for (let i =0; i < hours.length; i++){
           this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
        }
    },
    

    avrgCookiePerHour: function () {
        this.calRanCustomer();
        for (let i=0; i <this.numOfCustomers.length; i++){
            this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));

        }
         
    },

    calTotalCookiePerDay: function (){
        for (let i = 0; i <this.numOfCookies.length; i++) {
            this.totalCookie += this.numOfCookies[i];
            //this.totalCookie = this.totalCookie + this.numOfCookies[i];
            //0              = 0                + 100 
            //100            = 100              +200
            //300            = 300
            console.log(this.totalCookie);
        }
        
    },

    render: function (){
        this.avrgCookiePerHour();
        this.calTotalCookiePerDay();
        let ListEl = document.getElementById('data5');
        for (let i = 0; i < hours.length; i++) {
            let newListEl = document.createElement('li');
            newListEl.textContent = `${hours[i]}: ${lima.numOfCookies[i]} cookies`;
            ListEl.appendChild(newListEl);
            // display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`
        

    }
    let totalAmount= document.createElement('li');
    totalAmount.textContent= `Total: ${this.totalCookie} cookies` ;
    ListEl.appendChild(totalAmount);

    let tableBody = document.getElementById('table');
        let row = document.createElement('tr');

        let th = document.createElement("th");
        th.innerText = this.location;
        row.appendChild(th);

        for (let key in lima.numOfCookies){

            console.log(key);
            let value = lima.numOfCookies[key];
            
            let cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        }
            tableBody.appendChild(row);
}

};
lima.render();

// let total = {




// let tableBody = document.getElementById('table');
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




//seattle.calDisplay();



// let ListEl = document.getElementById('data');
// for (let i in seattle.numOfCookies);
// let newListEl = document.createElement('li');
// //console.log('li')
// newListEl.textContent = `${hours[i]}: ${seattle.numOfCookies[i]} cookies`;
// console.log(newListEl);
// ListEl.appendChild(newListEl);
// console.log(newListEl);






