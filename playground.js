const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

/* normal funtion that works perfectly */
// function show() {
//     // console.log(this);
//     display.innerHTML = this.value;
//     var self = this;
//     setTimeout(function () {
//         thanks.innerHTML = `You have typed: ${self.value}`
//     }, 1000)
// }

// const show = () => {
//     display.innerHTML = this.value;
// };

searchInput.addEventListener("keyup", function () {
    console.log(this);
    display.innerHTML = this.value;
});