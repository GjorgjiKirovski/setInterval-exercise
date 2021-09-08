const button = document.querySelector('button');
const box = document.querySelector('.box');
const colorPalette = ['crimson','limegreen','navy','orange','yellow'];
let timer;

button.addEventListener('click', e => {
    
    if(button.classList[0] === 'stopped'){
        button.setAttribute('class','started');
        button.textContent = 'Stop';
        let i = 0;
        timer = setInterval( ()=> {
            console.log('interval firing');
            box.style.background = colorPalette[i];
            i++;
            if(i === colorPalette.length){
                i = 0;
            }
        }, 1000)
    }else{
        button.setAttribute('class', 'stopped');
        button.textContent = 'Start';
        clearInterval(timer)
    }
});