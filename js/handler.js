// banner title change

document.getElementById("update-text").addEventListener("click", function () {
  // console.log("clicker");
  const textChange = document.getElementById("text");
  textChange.innerText = "Updated Text by event listener";

  document.body.style.backgroundColor = "gray";
});

// login 2nd section event listener

document.getElementById("login-btn").addEventListener("click", function () {
  const changeText = document.getElementById("title");
  changeText.innerText = "successfully login";

  const btnChange = document.getElementById("login-btn");
  btnChange.innerText = "GO TO HOME >>>>";
});



//  <!-- name change by input from user  -->

document.getElementById("input-btn").addEventListener("click", function () {
  const inputText = document.getElementById("input-text");
  // console.log('input name');
  const name = inputText.value;
  // console.log('name' ,name);

  const mainName = document.getElementById("main-name");
  mainName.innerText = name;
});