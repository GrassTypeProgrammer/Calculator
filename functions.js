
_currentSymbols = [];
_currentNumbers = [];
_symbols = ['+', '-', '*', '/'];
_screenDisplay = '';
_showingAnswer = false;


function addSymbol(symbol){
    if(_showingAnswer){
        _showingAnswer = false;
        clearAll();
    }

    if(_symbols.includes(symbol)){
        if(_currentSymbols.length == _currentNumbers.length){
            _currentSymbols[_currentSymbols.length-1] = symbol;
            replaceLastSymbolOnScreen(symbol);
        }
        else{
            _currentSymbols.push(symbol);
            addNewValueToScreen(symbol, true);
    }
    }

}


function addNumber(num){
    if(_showingAnswer){
        _showingAnswer = false;
        clearAll();
    }

    if(_currentSymbols.length == _currentNumbers.length){
        _currentNumbers.push(num + '');
        addNewValueToScreen(num);

    }
    else{
        _currentNumbers[_currentNumbers.length - 1] += (num + '');
        addToExistingValueOnScreen(num);
    }
}


function solveEquation(){
        for (let index = 0; index < _currentSymbols.length; index++) {
            const symbol = _currentSymbols[index];
            let ans;

            if(symbol == '*' || symbol == '/'){
                if(symbol == '*' ){
                    ans = parseFloat(_currentNumbers[index]) * parseFloat(_currentNumbers[index + 1]);
                }
                else if(symbol == '/'){
                    ans = parseFloat(_currentNumbers[index] )/ parseFloat(_currentNumbers[index + 1]);
                }
                
                _currentNumbers[index] = ans.toString();
                _currentNumbers.splice(index + 1, 1);
                _currentSymbols.splice(index, 1);
                index--;
            }
        }

        for (let index = 0; index < _currentSymbols.length; index++) {
            const symbol = _currentSymbols[index];
            let ans;

            if(symbol == '+' || symbol == '-'){
                if(symbol == '+' ){
                    ans = parseFloat(_currentNumbers[index]) + parseFloat(_currentNumbers[index + 1]);
                }
                else if(symbol == '-'){
                    ans = parseFloat(_currentNumbers[index]) - parseFloat(_currentNumbers[index + 1]);
                }
                
                _currentNumbers[index] = ans.toString();
                _currentNumbers.splice(index + 1, 1);
                _currentSymbols.splice(index, 1);
                index--;
            }
        }

        ans = _currentNumbers[0];
        clearAll();
        addNewValueToScreen(ans);
        _showingAnswer = true;
    }

function printArray(array){
    console.log('Array: ');
    array.forEach(element => {
        console.log(element);
    });
}


function clearAll(){
    _currentNumbers = [];
    _currentSymbols = [];
    clearScreen();
}


//#region Screen Functionality

function addNewValueToScreen(value, isSymbol = false){
    if(isSymbol){
        _screenDisplay += ' ' + value + ' ';
    }
    else{
        _screenDisplay += value + '';
    }
    updateScreenDisplay();
}

function addToExistingValueOnScreen(value){
    _screenDisplay += value;
    updateScreenDisplay();
}

function replaceLastSymbolOnScreen(value){
    _screenDisplay.splice[_screenDisplay.length -2, 2];
    _screenDisplay += value + ' ';
    updateScreenDisplay();
}

function updateScreenDisplay(){
    const screen = document.getElementById('screenDisplay');
    screen.innerText = _screenDisplay;
}

function clearScreen(){
    _screenDisplay = '';
    updateScreenDisplay();

}



function backspace(){
    // needs to remove from screen and current symbol/num
}

//#endregion