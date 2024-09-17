
let btn=document.getElementById("btn")
btn.addEventListener("click", ()=> {
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
 

  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (username.value.length >= 5 && password.value.length >= 8 && emailPattern.test(email.value)) {
    fetch('https://66e7e69bb17821a9d9da6eab.mockapi.io/login-page', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
       
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
  } else {

    alert("Please make sure all fields are filled correctly:\n- Username must be at least 5 characters\n- Password must be at least 8 characters\n- A valid email is required\n- Age must be a positive number");
  }
});
