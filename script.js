// const form = document.querySelector('.signup-form');
// // const username = document.querySelector("input[type='text']")
// const pattern = /[a-z]{6,9}/;

// form.username.addEventListener("keyup", (e) => {

//     if (pattern.test(e.target.value)) {
//         form.username.setAttribute("class", "sucess")
//     } else {
//         form.username.setAttribute("class", "error")
//     }
// })

const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    //check answers
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    })

    // Scroll to zero degree display
    scrollTo(0, 0);

    //display result
    result.classList.remove('d-none');


    // Animation result
    let output = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }

    }, 10);
})