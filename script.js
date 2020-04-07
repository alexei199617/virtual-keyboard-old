const clava = document.getElementById('clava')
const eng = document.getElementById('eng');
const rus = document.getElementById('rus');
const text = document.getElementById('text_input');

document.getElementById('radio_btn').addEventListener('click', radio_lang);
function radio_lang(event) {
    if (event.target.parentElement.classList.contains('radio_btn')) {
        let radio_activ_js = event.target.innerHTML;
        if (radio_activ_js === 'ENG' || radio_activ_js === 'РУС'){
            this.querySelectorAll('.radio_activ').forEach(element => {
                element.classList.remove('radio_activ');
            });
            event.target.classList.add('radio_activ');
        }
        if (radio_activ_js === 'ENG'){
            rus.classList.remove('active');
            eng.classList.add('active');
        } else if (radio_activ_js === 'РУС') {
            eng.classList.remove('active');
            rus.classList.add('active');
        }
    }
}

document.getElementById('clava').addEventListener('click', e => {
    var content = e.target.innerText;
    if (content.length < 2) {
        console.info(`${content}`);
        text.value += content;
    }
    else if (content === 'Space') {
        console.log('Space');
        text.value += ' ';
    }
    else if (content === 'Tab') {
        console.log('Tab');
        text.value += '    ';
    }
    else if (content === 'Enter') {
        console.log('Enter');
        text.value += '\n';
    }
    else if (content == 'Backspase') {
        console.log('Backspace');
        text.value = text.value.substr(0,(text.value.length -1));
    }
    else if (content === 'Del') {
        console.log('Del');
        text.value = text.value.substr(0,(text.value.length -1));
    }
    else if (content === 'Caps Lock') {
        console.log('Caps');
        //не придумал как реализовать
    }
});
