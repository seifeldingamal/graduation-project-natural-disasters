const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');
const rightPanel = document.getElementById('right-panel');
const leftPanel = document.getElementById('left-panel');

sign_up_btn.addEventListener('click', () => {
    rightPanel.style.visibility = "visible";
    container.classList.add('sign-up-mode');
    timeId = setTimeout(function(){
        leftPanel.style.visibility = "hidden";
        clearTimeout(timeId);
    }, 900);
});

sign_in_btn.addEventListener('click', () => {
    leftPanel.style.visibility = "visible";
    container.classList.remove('sign-up-mode');
    timeId = setTimeout(function(){
        rightPanel.style.visibility = "hidden";
        clearTimeout(timeId);
    }, 900);
});