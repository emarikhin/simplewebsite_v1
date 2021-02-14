import './styles.css'
import {isValid} from "./utils";

const form = document.getElementById('form') // getting the form from index.html
const input = form.querySelector('#question-input') // passing the input event
const submitBtn = form.querySelector('#submit') // passing the submit event from the form

form.addEventListener('submit', submitFormHandler) // adding a handler to submit button
input.addEventListener('input', () => { // constantly listening the input form and check the number of characters typed
    submitBtn.disabled = !isValid(input.value) // keep the button disabled until we've typed out >= 10 characters
})

function submitFormHandler(event) { // what happens when we hit the submit button
    event.preventDefault() // prevent the page from default behaviour - restart the page and go to /? every time you submit the form

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(), // text is whatever we've typed with spaced and tabs trimmed
            date: new Date().toJSON() // the date of the message
        }

        submitBtn.disabled = true; // disable the submit button as we've submitted the form hence drop it to default state.
        // Async request to the server to save the question
        console.log("Question: ", question) // print out the result to check what it looks like

        input.value = '' // clear the input once the button's pressed
        input.className = '' // remove the red binding once the question's been submitted;
        // submitBtn.disabled = false
    }
    // console.log(input.value)
}