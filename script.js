//Global Variables
var totalProfLoss = 0;
var i = 0

//Total Number of Months in the DataSet.   
var totalNumMonths = finances.length;

//Profits & Losses
for (; i < totalNumMonths; i++) {
    totalProfLoss += finances[i][1];
}

// Average Change in Profit/Loss over the whole period

var averageYear = totalProfLoss / finances.length


// To calculate monthly change, 
for ( i = 0; i < finances.length; i++ ) {
    difference = finances[1][1] - finances[0][1];
    // average =  averageChange / finances.length;
    average = difference.toFixed(2);
}

//Greatest Increase and Decrease in Profit over the whole period using the 
//sort function.

finances.sort(function (a,b) {
    return b[1] - a[1];
});


console.log('```text');
console.log("Financial Analysis");
console.log('----------------------');
console.log(`Total Months:  ${totalNumMonths}`);
console.log(`Total: $ ${totalProfLoss}`);
console.log(`Average Change Monthly: $ ${difference}`);
console.log('Average Change over the Period: $', averageYear.toFixed(2));
console.log('Greatest Increase in Profits:\n $', finances.shift());
console.log('Greatest Decrease in Profits:\n $', finances.pop());
console.log('```');