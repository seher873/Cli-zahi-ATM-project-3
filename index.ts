#! /usr/bin/env node

import inquirer from "inquirer";
let MyBalance: number = 10000;
let MyPin:number = 123;
let myPinAns = await inquirer.prompt(
  [
  {
     name: "pin",
     message: "enter your pin number",
     type: "number",
  }
]);
if (myPinAns.pin === MyPin) {
  console.log("welcome to ATM!!");

let myOption = await inquirer.prompt(
  [
    {
      name: "opraition",
      message: "please select your option",
      type: "list",
      choices: [ "Withdraw","Fast Cash" , "Balance Inquiry"],

    }

]

   ) ; 
    if(myOption.opraition === "Withdraw") {
    let myAmount =await inquirer.prompt 
    (
   [
      { 
         name: "amount",
         message: "enter your amount",
         type: "number" ,

      }
  ]
);
     if (myAmount.amount <=MyBalance) { 
      console.log(" please take your cash");

  MyBalance -= myAmount.amount;

  console.log(`your remining balance is ${MyBalance}`)

}
else{console.log("insufficient balance")};
    }
 if(myOption.opraition === "Fast Cash") {
 
  let MyAmount =await inquirer.prompt
 
  (

     [

         {
            name: "amount",
            type: "list",
            message: " please type your amount",
            choices: ["500","1000","2000", "5000"]

         }

     ]

  );


   if(MyAmount.amount <= MyBalance){

    console.log("please take your cash") ;
   
   MyBalance -= MyAmount.amount;
   console.log(`your remaining blance is ${MyBalance}`);
}
      else{console.log("Insuifficient Balance") };
}
if(myOption.opraition === "Balance Inquiry"){

console.log("your Balance is " + MyBalance);
};
}
 else {console.log("please Enter correct pin !!!")};


   









