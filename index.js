// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorEl = document.getElementById("error")
console.log(errorEl)
message = 'Something went wrong, please try again'
function Purchase() {
    console.log("Button Clicked")
    errorEl.textContent = message 
}
