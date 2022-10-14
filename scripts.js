function processForm(e){
    e.preventDefault();
    console.log(e);

const tweet = document.getElementById('tweet');
const ul = document.getElementById('timeline');
const li = document.createElement('li');

li.appendChild(document.createTextNode(tweet.value));
ul.appendChild(li);

if (tweet.value = null){
    removeChild(ul);
}

tweet.value = "";
return false;


}




const form = document.getElementById("send-tweet");
form.addEventListener("submit", processForm);