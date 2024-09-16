let pass=document.getElementById("pass")
let username=document.getElementById("username")
let btn=document.getElementById("btn")



btn.addEventListener("click", () => {
  if (username.value.length >= 5 && pass.value.length >= 8) {
    fetch('https://66e7e69bb17821a9d9da6eab.mockapi.io/login-page', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        pass: pass.value
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
  } else {
    alert("Username must be at least 5 characters and password must be at least 8 characters.");
  }
});





