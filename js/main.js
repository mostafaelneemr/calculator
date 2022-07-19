let btns = document.getElementById('btns');
let num = btns.querySelectorAll('li');
let result = document.getElementById('result');

for(let i=0; i<num.length;i++){
    num[i].addEventListener('click', function () {

        if (this.innerHTML == '=') {
            result.innerHTML = eval(result.innerHTML);
        }
        else{
            
            if (num[i].innerHTML == 'C')
            {
                result.innerHTML = "";
            }
            else{
                result.innerHTML += this.innerHTML;
            }
        }
    })
}
