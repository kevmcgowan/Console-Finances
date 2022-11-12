
//Total Number of Months in the DataSet.   
var totalNumMonths = finances.length;

//Profits & Losses
var sum = 0;
for (let i = 0; i < totalNumMonths; i++) {
  sum += finances[i][1];
}

// Average Change in Profit/Loss over the period






console.log(`Total Months:  ${totalNumMonths}`);
console.log(`Total: $ ${sum}`);
console.log('Average Change: ')
console.log('Greatest Increase in Profits: $')
console.log('Greatest Decrease in Profits: $')




