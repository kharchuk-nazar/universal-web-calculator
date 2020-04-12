var
    numberBtn = document.querySelectorAll('.number'),
    bracketBtn = document.querySelectorAll('.brack'),
    operationBtn = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    displayTop = document.getElementById('topDisplay'),
    displayBot = document.getElementById('bottomDisplay'),
    navBtn = document.querySelectorAll('.nav_button'),
    but = document.querySelectorAll('.button'),
    ingen = document.querySelectorAll('.ingener'),
    square = document.querySelectorAll('.square'),

    number_of_clicksL = 0,
    number_of_clicksR = 0,

    bul_block_number_print = false,
    bul_block_decimal_dot_print = false,
    bul_start_printing = false,
    bul_press_decimal_dot = false,
    bul_decimal_dot_after_operation = false,
    bul_decimal_dot_after_result = false,
    bul_left_bracket_press = false,
    bul_persent_press = false,
    bul_block_persent_print = false,
    bul_operation_press = false,
    bul_sqrt_press = false,
    bul_pi_press = false,
    bul_e_press = false,
    bul_positions_items_on_display = false;


for (let i = 0; i < navBtn.length; i++){
  var navs = navBtn[i];
  navs.addEventListener('click', function(e){
    if (navBtn[0].id == "activ" || navBtn[1].id == "activ" || navBtn[2].id == "activ" || navBtn[3].id == "activ"){
      navBtn[0].id = "unactiv";
      navBtn[1].id = "unactiv";
      navBtn[2].id = "unactiv";
      navBtn[3].id = "unactiv";
    }
    navBtn[i].id = "activ";

    if (navBtn[0].id == "activ"){
      document.getElementById('calc').style.width = 300 + 'px';
      document.getElementById('fullDisplay').style.width = 250 + 'px';
      document.getElementById('topDisplay').style.width = 200 + 'px';
      document.getElementById('topDisplay').style.fontSize = 25 + 'px';
      document.getElementById('bottomDisplay').style.width = 230 + 'px';
      document.getElementById('body').style.margin = '0px 20px';
      document.getElementById('body').style.marginTop = 40 + 'px';
      document.getElementById('linear').style.display = 'none';
      document.getElementById('calc').style.display = 'block';

      for (let j = 0; j < but.length; j++){
        var buts = but[j];
        buts.style.fontSize = 40 + 'px';
      }

      for (let j = 0; j < ingen.length; j++){
        var ingens = ingen[j];
        ingens.style.display = 'none';
      }

      number_of_clicksL = 0,
      number_of_clicksR = 0,

      bul_block_number_print = false,
      bul_block_decimal_dot_print = false,
      bul_start_printing = false,
      bul_press_decimal_dot = false,
      bul_decimal_dot_after_operation = false,
      bul_decimal_dot_after_result = false,
      bul_left_bracket_press = false;
      bul_persent_press = false,
      bul_block_persent_print = false,
      bul_operation_press = false,
      bul_sqrt_press = false,
      bul_pi_press = false,
      bul_e_press = false,
      bul_positions_items_on_display = false;

      displayBot.value = '0';

    } else if (navBtn[1].id == "activ") {
        document.getElementById('calc').style.width = 430 + 'px';
        document.getElementById('fullDisplay').style.width = 380 + 'px';
        document.getElementById('topDisplay').style.width = 320 + 'px';
        document.getElementById('topDisplay').style.fontSize = 20 + 'px';
        document.getElementById('bottomDisplay').style.width = 340 + 'px';
        document.getElementById('body').style.margin = '0px 23px';
        document.getElementById('linear').style.display = 'none';
        document.getElementById('calc').style.display = 'block';
        for (let j = 0; j < but.length; j++){
          var buts = but[j];
          buts.style.fontSize = 25 + 'px';
        }
        for (let j = 0; j < ingen.length; j++){
          var ingens = ingen[j];
          ingens.style.display = 'block';
        }

        number_of_clicksL = 0,
        number_of_clicksR = 0,

        bul_block_number_print = false,
        bul_block_decimal_dot_print = false,
        bul_start_printing = false,
        bul_press_decimal_dot = false,
        bul_decimal_dot_after_operation = false,
        bul_decimal_dot_after_result = false,
        bul_left_bracket_press = false;
        bul_persent_press = false,
        bul_block_persent_print = false,
        bul_operation_press = false,
        bul_sqrt_press = false,
        bul_pi_press = false,
        bul_e_press = false,
        bul_positions_items_on_display = false;

        displayBot.value = '0';

      } else if (navBtn[2].id == "activ") {
        document.getElementById('calc').style.display = 'none';
        document.getElementById('linear').style.display = 'block';
        document.getElementById('h2').innerText = 'Вигляд: ax+b=c';
        document.getElementById('rovnice').innerHTML = '<input class="inp" type="tel" value="" name="a" id="a"> <span class="prom">x</span> + <input class="inp" type="tel" value="" name="b" id="b"> <span id="" >=</span> <input class="inp" type="tel" value="" name="c" id="c"><br>'
        document.getElementById('square').innerHTML = '<span class="prom" id="prom">x</span> = <input disabled type="text" class="vysl" name="vysledek" value="" id="fin1">';


        for (var j = 0; j < square.length; j++){
          var squares = square[j];
          squares.style.display = 'none';
        }


        number_of_clicksL = 0,
        number_of_clicksR = 0,

        bul_block_number_print = false,
        bul_block_decimal_dot_print = false,
        bul_start_printing = false,
        bul_press_decimal_dot = false,
        bul_decimal_dot_after_operation = false,
        bul_decimal_dot_after_result = false,
        bul_left_bracket_press = false,
        bul_persent_press = false,
        bul_block_persent_print = false,
        bul_operation_press = false,
        bul_sqrt_press = false,
        bul_pi_press = false,
        bul_e_press = false,
        bul_positions_items_on_display = false;

      } else if (navBtn[3].id == "activ") {
        document.getElementById('calc').style.display = 'none';
        document.getElementById('linear').style.display = 'block';
        document.getElementById('h2').innerHTML = 'Вигляд: ax<sup>2</sup>+bx+c=d';
        document.getElementById('rovnice').innerHTML = '<input class="inp" type="tel" value="" name="a" id="a"> <span class="prom">x<sup>2</sup></span> + <input class="inp" type="tel" value="" name="b" id="b">x + <input class="inp" type="tel" value="" name="c" id="c"> = <input class="inp" type="tel" value="" name="d" id="d"><br>';
        document.getElementById('prom').innerHTML = 'x<sub>1</sub>';
        document.getElementById('square').innerHTML = '<span class="prom" id="prom">x</span> = <input disabled type="text" class="vysl" name="vysledek" value="" id="fin1"> <span class="">x<sub>2</sub></span> <span class="">=</span> <input disabled type="text" class="vysl" name="vysledek" value="" id="fin2"> <span class="prom">D</span> <span class="">=</span> <input disabled type="text" class="vysl" name="vysledek" value="" id="D">'

        number_of_clicksL = 0,
        number_of_clicksR = 0,

        bul_block_number_print = false,
        bul_block_decimal_dot_print = false,
        bul_start_printing = false,
        bul_press_decimal_dot = false,
        bul_decimal_dot_after_operation = false,
        bul_decimal_dot_after_result = false,
        bul_left_bracket_press = false,
        bul_persent_press = false,
        bul_block_persent_print = false,
        bul_operation_press = false,
        bul_sqrt_press = false,
        bul_pi_press = false,
        bul_e_press = false,
        bul_positions_items_on_display = false;
      }
  });
}


//---------------------------------------------------------------------------------

// функція що вводить цифри
for (let i = 0; i < numberBtn.length; i++){
  var numbers = numberBtn[i];
  numbers.addEventListener('click', function(e){
    if (bul_positions_items_on_display == true && bul_press_decimal_dot == false){
      displayBot.value = '';
      bul_positions_items_on_display = false;
    }

    if (bul_block_number_print == false || bul_decimal_dot_after_result == true){
      if (bul_start_printing == false){
        displayBot.value = '';
        bul_start_printing = true;
      }
      displayBot.value += e.target.innerText;
      bul_press_decimal_dot = false;
      bul_positions_items_on_display = false;
      bul_decimal_dot_after_operation = false;
      bul_decimal_dot_after_result = false;
      bul_block_number_print = false;
    } else {
      displayBot.value = '' + e.target.innerText;
      bul_block_number_print = false;
    }
    if (displayBot.value.length >= 17 && displayBot.style.fontSize != 20+'px'){
      displayBot.style.fontSize = 47 - displayBot.value.length + 'px';
    }
  });
}

//-----------------------------------------------------------------------------------

// функція що вводить операції
for (let i = 0; i < operationBtn.length; i++){
  var operations = operationBtn[i];
  operations.addEventListener('click', function(e){
    if (bul_press_decimal_dot == true){
      var str = displayBot.value;
      var newStr = str.substring(0, str.length - 1);
      displayBot.value = newStr;
      displayTop.value += displayBot.value + e.target.value;
      bul_operation_press = true;
    } else {
      if (displayTop.value.lastIndexOf(')') == displayTop.value.length - 1 && displayTop.value.length - 1 != -1){
        displayTop.value += e.target.value;
        bul_positions_items_on_display = true;
        bul_operation_press = true;
        bul_pi_press = false;
      } else {
        if (bul_sqrt_press == true){
          displayTop.value += e.target.value;
          bul_sqrt_press = false;
        } else {
          displayTop.value += displayBot.value + e.target.value;
          bul_positions_items_on_display = true;
          bul_block_number_print = false;
          bul_block_decimal_dot_print = false;
          bul_decimal_dot_after_operation = true;
          bul_operation_press = true;
          bul_pi_press = false;
        }
      }
    }
  });
}

//--------------------------------------------------------------------------------

for (let i = 0; i < bracketBtn.length; i++){
  var brackets = bracketBtn[i];
  brackets.addEventListener('click', function(e){
    if (e.target.innerText == '('){
      displayTop.value += e.target.innerText;
      bul_left_bracket_press = true;
      number_of_clicksL++;
    }

    if (e.target.innerText == ')' && bul_left_bracket_press == true && number_of_clicksL - 1 >= number_of_clicksR){
      displayTop.value += displayBot.value;
      displayBot.value = '0';
      bul_positions_items_on_display = true;
      bul_block_number_print = false;
      bul_block_decimal_dot_print = false;

      bul_decimal_dot_after_operation = true;
      displayTop.value += e.target.innerText;
      number_of_clicksR++;
    }

  });
}

//-----------------------------------------------------------------------------------

// функція кнопки =
function resultBtn() {
  if (bul_persent_press == true){
    var str = displayTop.value;
    var newStr = str.substring(0, str.length - 1);
    displayTop.value = newStr;
    displayBot.value = (displayTop.value * displayBot.value) / 100;
    displayTop.value = '';
    bul_block_persent_print = false;
  } else {
    if (displayTop.value.lastIndexOf(')') == displayTop.value.length - 1){
      displayBot.value = eval(displayTop.value)
    } else {
      displayBot.value = eval(displayTop.value + displayBot.value);
      displayTop.value = '';
      bul_block_number_print = true;
      bul_decimal_dot_after_result = true;
      bul_positions_items_on_display = false;
      bul_start_printing = false;
    }
  }
  if (displayBot.value.length >= 17 && displayBot.style.fontSize != 20+'px'){
    displayBot.style.fontSize = 47 - displayBot.value.length + 'px';
  }


}

//--------------------------------------------------------------------------------

// функція кнопки .
function decimalPress() {
  if (bul_block_decimal_dot_print == false){
    displayBot.value += '.';
    bul_block_decimal_dot_print = true;
    bul_start_printing = true;
    bul_press_decimal_dot = true;
  }
  if (bul_decimal_dot_after_operation == true || bul_decimal_dot_after_result == true){
    displayBot.value = '0.';
    bul_decimal_dot_after_operation = false;
    bul_block_decimal_dot_print = true;
    bul_start_printing = true;
    bul_press_decimal_dot = true;
  }
}

//---------------------------------------------------------------------------------

// функція кнопки с
function deletePress() {
  if (displayBot.value == '0'){
    displayTop.value = '';
    number_of_clicksL = 0;
    number_of_clicksR = 0;
  }
    displayBot.value = '0';
    bul_block_number_print = false,
    bul_block_decimal_dot_print = false,
    bul_start_printing = false,
    bul_press_decimal_dot = false,
    bul_decimal_dot_after_operation = false,
    bul_positions_items_on_display = false;
    displayBot.style.fontSize = 35 + 'px';
    bul_persent_press = false,
    bul_e_press = false;
    bul_block_persent_print = false;
}

//----------------------------------------------------------------------------------

// функція кнопки <--
function backPress() {
  var str = displayBot.value;
  var newStr = str.substring(0, str.length - 1);
  displayBot.value = newStr;

  if (displayBot.value.lastIndexOf('.') == -1){
    if (displayBot.value.length == 0){
      displayBot.value = '0';
      bul_start_printing = false;
    }
    bul_block_decimal_dot_print = false;
  }
}

//---------------------------------------------------------------------------------

function powPress() {
  displayBot.value = Math.pow(displayBot.value, 2);
  if (displayBot.value.length >= 17 && displayBot.style.fontSize != 20+'px'){
    displayBot.style.fontSize = 47 - displayBot.value.length + 'px';
  }
}

//--------------------------------------------------------------------------------

function persentPress() {
  if (bul_block_persent_print == false){
    bul_persent_press = true;
    displayTop.value = displayBot.value + '%';
    bul_positions_items_on_display = true;
    bul_block_persent_print = true;
  }
}

//------------------------------------------------------------------------------

function sqrtPress() {
  if (bul_operation_press == true){
    displayTop.value += Math.sqrt(displayBot.value);
    bul_positions_items_on_display = true;
    bul_sqrt_press = true;
  } else {
    displayBot.value = Math.sqrt(displayBot.value);
    bul_positions_items_on_display = true;
  }
  if (displayBot.value.length >= 17 && displayBot.style.fontSize != 20+'px'){
    displayBot.style.fontSize = 47 - displayBot.value.length + 'px';
  }
}

//------------------------------------------------------------------------------

function piPress() {
  if (bul_pi_press == false){
    bul_pi_press = true;
    displayBot.value = 3.14159;
  }
}

//------------------------------------------------------------------------------

function lnPress() {
  displayBot.value = Math.log(displayBot.value);
  bul_positions_items_on_display = true;
  if (displayBot.value.length >= 17 && displayBot.style.fontSize != 20+'px'){
    displayBot.style.fontSize = 47 - displayBot.value.length + 'px';
  }
}

//------------------------------------------------------------------------------

function ePress() {
  if (bul_e_press == false){
    bul_e_press = true;
    displayBot.value = 2.71828;;
  }
}

//------------------------------------------------------------------------------

function log2Press() {
  displayBot.value = Math.log2(displayBot.value);
  bul_positions_items_on_display = true;
  if (displayBot.value.length >= 17 && displayBot.style.fontSize != 20+'px'){
    displayBot.style.fontSize = 47 - displayBot.value.length + 'px';
  }
}

//------------------------------------------------------------------------------

function randPress() {

  var b = prompt('max');

  displayBot.value =  Math.floor(Math.random() * b);
  bul_start_printing = true;
}

//------------------------------------------------------------------------------

function log10Press() {
  displayBot.value = Math.log10(displayBot.value);
  bul_positions_items_on_display = true;
  if (displayBot.value.length >= 17 && displayBot.style.fontSize != 20+'px'){
    displayBot.style.fontSize = 47 - displayBot.value.length + 'px';
  }
}

//------------------------------------------------------------------------------

function factorialPress() {
  var n = displayBot.value;
  function factorialize(num) {
    if (num < 0)
          return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  displayBot.value = factorialize(n);
}

//------------------------------------------------------------------------------

function linera_resultPress() {
  var linear = document.querySelectorAll('.inp');
  var a, b, c, d, e;
  if (linear.length == 4){
    for (let i = 0; i < linear.length; i++){
      a = Number(linear[0].value);
      b = Number(linear[1].value);
      c = Number(linear[2].value);
      e = Number(linear[3].value);
    }
    var x = (c-b)/a;
    document.getElementById('fin1').value = x.toFixed(e);
  } else {
    for (let i = 0; i < linear.length; i++){
      a = Number(linear[0].value);
      b = Number(linear[1].value);
      c = Number(linear[2].value);
      d = Number(linear[3].value);
      e = Number(linear[4].value);
    }
    if (a != 0 || linear[0].value != ''){
      c = c - d;
      d = 0;
      var D = b*b - 4*a*c;
      var x1, x2;
      document.getElementById('D').value = D;

      if (D > 0){
        x1 = (-b + Math.sqrt(D))/(2*a);
        x2 = (-b - Math.sqrt(D))/(2*a);

        document.getElementById('fin1').value = x1.toFixed(e);
        document.getElementById('fin2').value = x2.toFixed(e);
      } else if (D == 0) {
        x1 = -b/(2*a);
        document.getElementById('fin1').value = x1.toFixed(e);
      } else {
        var sqrtD = Math.sqrt(D * -1);

        var x11 = -b / (2*a);
        var x12 = sqrtD / (2*a);


        if (x12 >= 0)
          document.getElementById('fin1').value = x11.toFixed(e) + '+' + x12.toFixed(e) + 'i';
        else
          document.getElementById('fin1').value = x11.toFixed(e) + '-' + x12*(-1).toFixed(e) + 'i';
        if (x12 >= 0)
          document.getElementById('fin2').value = x11.toFixed(e) + '-' + x12.toFixed(e) + 'i';
        else
          document.getElementById('fin1').value = x11.toFixed(e) + '+' + x12*(-1).toFixed(e) + 'i';
      }
    } else {
      alert('а не може дорівнювати 0');
    }
  }

}

//------------------------------------------------------------------------------
