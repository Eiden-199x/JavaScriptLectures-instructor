const jokeInput = document.getElementById("joke");
const jokeButton = document.getElementById("joke-btn");

function generateJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      jokeInput.innerHTML = data.value;
    }
  };
  xhr.send();
}

jokeButton.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
