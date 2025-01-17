const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DataSchema = new Schema ({
  transacName: {type: String},
  transacAmt: {type: String},
  transacBankAcc: {type: String}
})

const date = new Date;
const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const currMonth = date.getMonth();
const currDate = date.getDate();

const collectionName = `${currDate} ${monthArr[currMonth]}`

const Data = mongoose.model(`${collectionName}`, DataSchema)

module.exports = {Data}