(function functionName() {
  "use strict";



  var numbers = [
    {
      'text': '',
      'value': 'C',
      'id': 'clear'
    },
    {
      'text': '7',
      'value': 7,
      'id': 'seven',
    },
    {
      'text': '8',
      'value': 8,
      'id': 'eight',
    },
    {
      'text': '9',
      'value': 9,
      'id': 'nine',
    },
    {
      'text': ' ÷ ',
      'value': '/',
      'id': 'divide',
    },
    {
      'text': '4',
      'value': 4,
      'id': 'four',
    },
    {
      'text': '5',
      'value': 5,
      'id': 'five',
    },
    {
      'text': '6',
      'value': 6,
      'id': 'six',
    },
    {
      'text': ' X ',
      'value': 'X',
      'id': 'multiply',
    },
    {
      'text': '1',
      'value': 1,
      'id': 'one',
    },
    {
      'text': '2',
      'value': 2,
      'id': 'three',
    },
    {
      'text': '3',
      'value': 3,
      'id': 'three',
    },
    {
      'text': ' - ',
      'value': '-',
      'id': 'subtract',
    },
    {
      'text': '0',
      'value': 0,
      'id': 'zero',
    },
    {
      'text': '.',
      'value': '.',
      'id': 'decimal',
    },
    {
      'text': '=',
      'value': '=',
      'id': 'equal',
    },
    {
      'text': ' + ',
      'value': '+',
      'id': 'add',
    },
  ];

  var calculator = document.querySelector('.calculator');
  var displayElement = document.createElement('div');
  displayElement.className = 'calcDisplay';
  displayElement.id = 'calcWindow';
  calculator.appendChild(displayElement);

  for (var  i = 0; i < numbers.length; i++) {
    var input = numbers[i];
    var inputElement = document.createElement('input');
    inputElement.value = input.value;
    inputElement.textContent = input.text;
    inputElement.id = input.id;
    inputElement.type = 'button';
    if (input.value === '-' || input.value === 'X' || input.value === '/' || input.value === '+') {
      inputElement.classList.add('input-ctrl', 'calcOperator');
    } else if (input.value === '.') {
      inputElement.classList.add('calcDecimal');

    } else if (input.text === '=') {
      inputElement.classList.add('calcEqual');
    } else if (input.value === 'C') {
      inputElement.classList.add('clear-ctrl', 'calcClear');
    } else {
      inputElement.classList.add('input-ctrl', 'calcNumber');
    }
    calculator.appendChild(inputElement);
  }
  var output = '';
  var inputCtrls = document.querySelectorAll('.input-ctrl');
  for (var i = 0; i < inputCtrls.length; i++) {
    var input = inputCtrls[i];
    input.addEventListener('click', function(event){
      var num = this.textContent;
      output = displayElement.innerHTML +=num;
      if(output.length >= 20){
        alert("It's OVER 9000!!!");
        output = displayElement.innerHTML="";
      }

    });
  }
  var clearInput = document.querySelector('.calcClear');
  clearInput.addEventListener('click', function (event) {
    var clear = this.textContent;
    output = displayElement.innerHTML="";
  });

  var decimalInput = document.querySelector('.calcDecimal');
  decimalInput.addEventListener('click', function(event) {
    var decimal = this.value;
    displayElement.innerHTML += '.'
    // if(displayElement.innerHTML === "") {
    //  output = displayElement.innerHTML = displayElement.innerHTML + "0.";
    //  }
    // else if(displayElement.innerHTML === output) {
    //   ;
    //
    // }


    // if(displayElement.innerHTML === ""){
    //   output = displayElement.innerHTML="0.";
    // } else if (displayElement.innerHTML.lenght === output) {
    //   displayElement.innerHTML = displayElement.innerHTML + ".";
    // }

  });
  var result = document.querySelector('.calcEqual'); //
  console.log(result);
  result.addEventListener('click', function(event) {
    var split = displayElement.innerHTML.split(" ", 3);
    console.log(split);
    for (var i = 0; i < split.length; i++) {
      var first = parseInt(split[0]);
      console.log(first);
      var oper = split[1];
      var second = parseInt(split[2]);
      var total = '';
      if (oper === '+') {
        total = first + second;
        displayElement.innerHTML = total;
      } else if (oper === '-'){
        total = first - second;
        displayElement.innerHTML = total;
      } else if (oper === 'X'){
        total = first * second;
        displayElement.innerHTML = total;
      } else if (oper === '÷'){
        total = first / second;
        displayElement.innerHTML = total;
      }
  }
  });
  // var num = document.querySelectorAll('button');
  // console.log(num);
  // var numValue = [];
  // for (var n = 0; n < num.length; n++) {
  //    console.log(num[i]);
  //   console.log(numValue);
  // numValue.addEventListener('click', function(){
  // document.querySelector('.calcDisplay').innerHTML = num.value;
  // });
  // }


















}());
