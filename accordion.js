window.onload = onLoad;

function onLoad() {
  const questions = document.querySelectorAll(".question");
  console.log(questions);

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", openQuestion);
  }

  function openQuestion(event) {
    let parent = event.target.parentElement;

    let answer = parent.querySelector("p");
    answer.classList.toggle("hidden");

    let title = parent.querySelector("h2");
    title.classList.toggle("bold");
  }
}