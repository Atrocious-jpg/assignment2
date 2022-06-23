window.onload = () =>{


const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")
const buttons = [...document.querySelectorAll("button")]


buttons.forEach(element =>{
  element.addEventListener('click',()=>{
    disp.textContent = `added ${(buttons.indexOf(element) + 1) * 5}`;
    indicator.textContent = (parseInt(indicator.textContent) + ((buttons.indexOf(element) + 1) * 5)).toString();
})
});
}
