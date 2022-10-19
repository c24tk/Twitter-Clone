function processForm(e){
    e.preventDefault();
    console.log(e);

const tweet = document.getElementById('tweet');
const ul = document.getElementById('timeline');
const li = document.createElement('li');

let currentDate = new Date();
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()

let time =    " " + cMonth + "/" + cDay + "/"+ cYear
let time1 = ", " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

if (tweet.value.length===0){
     return false;
    }
let span = document.createElement('span');
span.className = "time";
span.appendChild(document.createTextNode(time + time1))

let span2 = document.createElement('span');
span2.className = "user";
span2.appendChild(document.createTextNode("@tarakamshad"))

li.appendChild(document.createTextNode(tweet.value))
li.appendChild(span);
li.appendChild(span2);

ul.appendChild(li);

tweet.value = null
return false;


}




const form = document.getElementById("send-tweet");
form.addEventListener("submit", processForm);