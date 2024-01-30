
_currentSymbols = [];
_currentNumbers = [];
_symbols = ['+', '-', '*', '/'];

function addSymbol(symbol){
    if(_symbols.includes(symbol)){
        if(_currentSymbols.length == _currentNumbers.length){
            _currentSymbols[_currentSymbols.length-1] = symbol;
        }
        else{
            _currentSymbols.push(symbol);
        }
    }

    printArray(_currentSymbols);
}

function addNumber(num){
    if(_currentSymbols.length == _currentNumbers.length){
        _currentNumbers.push(num + '');
    }
    else{
        _currentNumbers[_currentNumbers.length - 1] += (num + '');
    }

    printArray(_currentNumbers);
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
    }

function printArray(array){
    console.log('Array: ');
    array.forEach(element => {
        console.log(element);
    });
}