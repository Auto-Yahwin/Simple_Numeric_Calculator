console.log('Hello World!');
let input=document.getElementById("screen");

function calc(num) {
  input.value+=num
};

function result() {
  try{
    input.value=eval(input.value)
  }
  catch(error){
    alert("bad syntax")
  }
}

function del() {
  input.value=input.value.slice(0, -1)
}

function clr() {
  input.value=""
}