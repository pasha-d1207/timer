var $startButton = document.querySelector('#start')
var $endButton = document.querySelector('#end')
var $reset = document.querySelector('#reset')
var $time = document.querySelector('#time')
var $input = document.querySelector('#input')


$startButton.addEventListener('click', startGame)
$endButton.addEventListener('click', endGame)
$reset.addEventListener('click', reset)
$input.addEventListener('input', setGetTime)

var $isGameStarted = "stop"


function startGame(){
    $isGameStarted = "start"
    $startButton.setAttribute('disabled',true)
    interval()
}
function endGame(){
    $isGameStarted = "stop"
    $startButton.removeAttribute('disabled',true)
    interval()
}  
function reset(){
    $isGameStarted = "reset"
    $startButton.removeAttribute('disabled',true)
    interval()
}    
function interval(){
var interval = setInterval(function (){
    switch ($isGameStarted){
        case 'start':
            var time = parseFloat($time.textContent)    
            $time.textContent = (time - 0.1).toFixed(2)
            break 
        case 'stop':
            clearInterval(interval)
            break
        case 'reset':
            $time.textContent = '0.0'
            clearInterval(interval)
    }
    if (time <= 0){
        $time.textContent = '0.0'
        clearInterval(interval)
        $startButton.removeAttribute('disabled',true)
        }
    }, 100)
}
function setGetTime(){
    var time = +$input.value
    $time.textContent = time.toFixed(1)    
}