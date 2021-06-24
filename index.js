// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
var myinput=document.getElementById('myinput')
myinput.setAttribute("value","000")
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log(appDiv,myinput.value);
myinput.onselect=function(){
  console.log('触发select事件',myinput.value.substring(myinput.selectionStart,myinput.selectionEnd))
}
