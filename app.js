let number = document.getElementById('result');

function getNumber(num) {
    let number = document.getElementById('result');
    number.value += num;
}


function clearResult()
{
    let number = document.getElementById('result');
    number.value = "0"

}

function calculations()
{
    let number = document.getElementById('result');
    number.value = eval(number.value);
}
number.value = ""