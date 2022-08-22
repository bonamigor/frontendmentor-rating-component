const submitNote = () => {
  const balls = document.querySelectorAll(".ball")
  const containerNotes = document.querySelector(".container-notes")
  const body = document.querySelector("body")
  const submitButton = document.querySelector("#submit-note")

  balls.forEach(ball => {
    ball.addEventListener('click', () => {
      balls.forEach(ball => {
        if (ball.classList.contains('highlight')) {
          ball.classList.remove('highlight')
        }
      })
      ball.classList.toggle('highlight');
    })
  })

  submitButton.addEventListener('click', () => {
    const highlightedBall = document.querySelector(".ball.highlight")
    const note = highlightedBall.textContent
    containerNotes.innerHTML = '';
    body.innerHTML = `
    <section class="container-tk">
      <img src="./assets/illustration-thank-you.svg" alt="thanks">
  
      <div class="note">You selected ${note} out of 5</div>
  
      <h1>Thank you!</h1>
  
      <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    </section>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/bonamigor">Rafael Bonamigo</a>.
    </div>
    `
  })


}

submitNote();