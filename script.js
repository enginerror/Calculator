let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            if(string.includes('%')) {
                let parts = string.split("%");
                string = (eval(parts[0]) * eval(parts[1]) / 100).toString();
            }
            else {
                string = eval(string.replace(/x/g, '*'));
            }
            input.value = string;
        }
        else if(e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML === 'DE') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});