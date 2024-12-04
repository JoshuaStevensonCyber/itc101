document.getElementById("ctf-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const userFlag = document.getElementById("answer").value;
  const correctFlag = "itc101{insert flag here}"; 
  
  const resultDiv = document.getElementById("result");
  
  if (userFlag === correctFlag) {
    resultDiv.innerHTML = "<p>Congratulations! You found the flag!</p>";
    resultDiv.style.color = "green";
  } else {
    resultDiv.innerHTML = "<p>Incorrect flag. Try again!</p>";
    resultDiv.style.color = "red";
  }
});

function toggleHint(hintId) {
  const hintElement = document.getElementById(hintId);
  if (hintElement.style.display === "none") {
    hintElement.style.display = "block";
  } else {
    hintElement.style.display = "none";
  }
}

  