let app= new Vue({
    el: "#app",
    data:{
        principal: null,
        rate: null,
        numberOfTimes: null,
        timePeriods: null,
    },
    methods:{
        compoundInterest: function(){
            let Rate= this.rate/100;
            let Rate1= Rate/this.numberOfTimes
            let Number= this.numberOfTimes*this.timePeriods
            let compound = this.principal*((1+(Rate1))**Number)
            compound= compound.toFixed(2)
            return compound;
        }
    
    }
});