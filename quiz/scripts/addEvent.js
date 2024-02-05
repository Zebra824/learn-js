window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', function(){myFunction('Moused over!')});
    x.addEventListener('click', mySecondFunction('Clicked!'));
    x.addEventListener('mouseout', function(){myThirdFunction('Moused out!')});
}

function myFunction(msg) {
    document.getElementById('demo').textContent = msg;
}

function mySecondFunction(msg) {
    return function(){document.getElementById('demo').textContent = msg};
}

function myThirdFunction(msg) {
    document.getElementById('demo').textContent = msg;
}
