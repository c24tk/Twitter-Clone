function processForm(e){
    e.preventDefault();
    console.log(e);

const tweet = document.getElementById('tweet');
const ul = document.getElementById('timeline');
const li = document.createElement('li');



if (tweet.value.length===0){
     return false;
    }

li.appendChild(document.createTextNode(tweet.value));
ul.appendChild(li);


tweet.value = null
return false;


}




const form = document.getElementById("send-tweet");
form.addEventListener("submit", processForm);