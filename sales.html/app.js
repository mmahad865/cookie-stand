'use strickt';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];
let display = [];
let seattle = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avrgCookie: 6.3,
    numOfCustomers: [],
    numOfCookies: [], 
    totalCookie: 0,
    CalRanCustomer: function () {
        for (let i =0; i < hours.length; i++){
           this.numOfCustomers.push(Math.floor(Math.random() * (this.max - this.min +1)) + this.min)
        }
    },

    avrgCookiePerHour: function () {

        for (let i=0; i <this.numOfCustomers.length; i++){
            this.numOfCookies.push(Math.floor(this.numOfCustomers[i] * this.avrgCookie));
        }
         
    },

    CalTotalCookie: function (){
        for (let i = 0; i <this.numOfCookies.length; i++) {
            this.totalCookie += this.numOfCookies[i];
    
        }
        
    },

    calDisplay: function (){
        for (let i = 0; i < hours.length; i++) {
            display[i] = `${hours[i]}: ${this.numOfCookies[i]} cookies`
        
    }
}

};
seattle.CalRanCustomer();
seattle.avrgCookiePerHour();
console.log(seattle.numOfCustomers);
console.log(seattle.numOfCookies);
seattle.CalTotalCookie();
console.log(seattle.totalCookie);
seattle.calDisplay();
console.log(display);


