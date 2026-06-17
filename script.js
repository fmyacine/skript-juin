const displayText = document.getElementById("display-text");
const btnSync = document.getElementById("btn-sync");
const btnAsync = document.getElementById("btn-async");

const API_URL = "https://api.adviceslip.com/advice";

function fetchWithoutWaiting() {
    displayText.innerText = "Sending request...";

    
    const response = fetch(API_URL);
    
    
    const data = response.json; 

    console.log("Broken Response Object:", response);
    
    
    displayText.innerText = `❌ CRASHED! Data is: ${data}`;
}


async function fetchWithWaiting() {
    displayText.innerText = "Connecting to server... Please wait.";

    
    const response = await fetch(API_URL);

    
    const data = await response.json();

    console.log("Successful JSON Data:", data);

    
    displayText.innerText = `✅ SUCCESS! Advice: "${data.slip.advice}"`;
}


btnSync.addEventListener("click", fetchWithoutWaiting);
btnAsync.addEventListener("click", fetchWithWaiting);


// 1. You MUST put 'async' in front of the function to unlock the 'await' superpower
async function getWeatherData() {

    // 2. Send the waiter to the URL, and WAIT for him to come back
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    // 3. The waiter brought back a sealed box. WAIT for it to be unpacked into JSON
    const data = await response.json();

    // 4. Now we can actually use it!
    console.log(data);
}


async function functionName(){

}
