document.getElementById("comment-btn").addEventListener("click", function () {
  //   1 add text area
  const textBox = document.getElementById("text-box");
  //   2 set the value of text area
  const newComment = textBox.value;
  //   3  submit destination
  const publishComment = document.getElementById("comment-box");
  //   4 create
  const newP = document.createElement("p");
  newP.classList.add("comment");
  newP.innerText = newComment;
  //   5 append p
  publishComment.appendChild(newP);
  //   6 clean
  textBox.value = "";
});
