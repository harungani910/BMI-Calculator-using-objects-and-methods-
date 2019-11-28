

var John = {
    fullName: "john smith ",
    height: 1.98,
    mass: 86,
    calcbmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;


    }

}
var mark = {
    fullName: "mark james ",
    height: 1.76,
    mass: 106,
    calcbmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;




    }

}
John.calcbmi();
mark.calcbmi();
//console.log(John, mark);

if (mark.bmi > John.bmi) {
    console.log(mark.fullName + "has a higher BMI of " + mark.bmi);
}
else if (John.bmi > mark.bmi) {
    console.log(John.fullName + "has a higher BMI of " + John.bmi);
}

else {

    console.log(john.fullName + "and " + mark.fullName + " both have the same BMI ")
}

