// task-1
function sayHello (){
  console.log("Hello, World!");
}
sayHello();

//task-2
function displayWarning (){
  console.log("warning! system overloaded!");
}
displayWarning();

//task-3
function printStatus(){
  console.log("System Status: Active");
}
printStatus();

//task-4
function initialize(){
  console.log("Initialization Complete");
  shutDown();
}
function shutDown(){
  console.log("system shutting Down....");
}
initialize();


//task-5
function startProcess(){
  console.log("process Started");
  endProcess();
}
function endProcess(){
  console.log("Process Ended");
}
startProcess();

//task-6
function greetUser(name) {
  console.log("hello," +name+'');
}
greetUser("jerry");
greetUser("ben");

//task-7
function calculateSum(a, b){
 console.log(a+b);
}

calculateSum(10,20);
calculateSum(58,97);

//task-8
function countDown(){
  for(var i=5; i>0;i--){
    console.log(i)
  }
}
countDown();


//task-9
function checkEvenodd(num){
  if(num % 2 == 0){
    console.log("Even");
  }
  else{
    console.log("Odd");
  }
}
checkEvenodd(66);
checkEvenodd(5487);

//task-10
function beginSession(){
  console.log("session Started");
  endSession();
}
function endSession(){
  console.log("session Ended");
}
beginSession();
