const btns = document.querySelectorAll('.btn');
const theme = document.querySelector(':root');

btns.forEach(function(btn){
    btn.addEventListener('click', (e) => {
        let color = e.target.classList;
        if(color.contains("btn1")){
            theme.style.setProperty('--theme-color', '#3498db');
        }else if(color.contains("btn2")){
            theme.style.setProperty('--theme-color', '#ff1756');
        }else if(color.contains("btn3")){
            theme.style.setProperty('--theme-color', '#1cb65d');
        }else if(color.contains("btn4")){
            theme.style.setProperty('--theme-color', '#8e44ad');
        }else if(color.contains("btn5")){
            theme.style.setProperty('--theme-color', '#f4b932');
        }else{
            theme.style.setProperty('--theme-color', '#3498db');
        }
    });
});