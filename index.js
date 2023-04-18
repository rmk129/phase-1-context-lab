/* Your Code Here */
function createEmployeeRecord (fourEArray) {
    let eRecord = {
        firstName: fourEArray[0],
        familyName: fourEArray[1],
        title: fourEArray[2],
        payPerHour: fourEArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

    return eRecord;

}



function createEmployeeRecords(arrayOfERecords) {
        let eRecords = [];
        arrayOfERecords.forEach(element => {
            let record = createEmployeeRecord(element)
            eRecords.push(record)
        });
        return eRecords;
}

function createTimeInEvent(dateStamp) {
            let timeInObj = {
                type: "TimeIn",
                hour: parseInt(dateStamp.slice(11)),
                date: dateStamp.slice(0, 10)
            }
            this.timeInEvents.push(timeInObj);
            return this;

}

function createTimeOutEvent(dateStamp) {
    let timeOutObj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    }
    this.timeOutEvents.push(timeOutObj);
    return this;
}

function hoursWorkedOnDate(dateStampNoHour) {
    let timeIN = this.timeInEvents.find(Object => Object.date === dateStampNoHour)
    let timeOut = this.timeOutEvents.find(Object => Object.date === dateStampNoHour)
    console.log(timeIN)
    console.log(timeOut)

    if (timeIN.date === timeOut.date){
        let hours = (timeOut.hour - timeIN.hour)/100
        return hours
    }
}

function wagesEarnedOnDate(dateStampNoHour){
    let wages = hoursWorkedOnDate.call(this, dateStampNoHour) * this.payPerHour;
    let wagesString = `${wages} dollars`
    return wages;
}




/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstN){
    let firstNa = srcArray.find(Object => Object.firstName === firstN)
    return firstNa;

}

function calculatePayroll(eRecords){
    let sum = 0
    eRecords.forEach(element => {
        sum += allWagesFor.call(element);
    });
    return sum;
} 
