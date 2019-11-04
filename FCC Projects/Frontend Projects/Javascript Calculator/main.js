
const ops =['*','+','/','-'];
const opPads =["add","subtract","multiply","divide"];

function reply_click(clicked_id){
    let out = document.getElementById("calc");

    if(clicked_id === "decimal"){
        if(reply_click.no){
            return;
        }
        reply_click.no = true;
    }
    else if(opPads.includes(clicked_id)){
        reply_click.no = false;
    }

    if(out.children[0].innerHTML == '0'){
        out.children[0].innerHTML = document.getElementById(clicked_id).innerHTML;
    }
    else{
        out.children[0].innerHTML += document.getElementById(clicked_id).innerHTML;
    }
}

function clear_output(){
    document.getElementById("calc").children[0].innerHTML = '0';
    reply_click.no = false;
}

function parseNum(num){
    if(Number.isInteger(num)){
        return parseInt(num);
    }else{
        return parseFloat(num);
    }
}

function calc(nums,operands){
    for(let i = 0; i < nums.length - 1; i++){
        nums[i + 1] = calcOp(nums[i],operands[i],nums[i + 1]);
    }
    document.getElementById("calc").children[0].innerHTML = nums[nums.length - 1];
}

function calcOp(num1,operand,num2){
    switch(operand){
        case "+":
            return num1 + num2;
        break;
        case "-":
            return num1 - num2;
        break;
        case "*":
            return num1 * num2;
        break;
        case "/":
            return num1 / num2;
        break;
    }
}

function calculate(){
    output = document.getElementById("calc").children[0].innerHTML;
    output = removeOperands(output);
    output += " ";

    let nums = [];
    let operands = [];
    let hold = "";


    for(let i = 0; i < output.length; i++){
        if(Number.isInteger(parseInt(output[i])) || output[i] === "."){
            hold += output[i];
        }
        else if(output[i] === '_'){
            hold+= '-';
        }
        else if(output[i] != " "){
            operands.push(output[i]);
            nums.push(parseNum(hold));
            hold = "";
        }else if(output[i] == " "){
            nums.push(parseNum(hold));
            hold = "";
        }
    }

    calc(nums,operands);
}


function removeOperands(out){
    let output = out;
    let newOut = "";
    let prev = '';
    let operand = '';
    let i = 0;

    if(output[0] === '-'){
        newOut += '_';
    }
    while(!Number.isInteger(parseInt(output[i]))){
        i++;
    }
    newOut += output[i];
    i++;

    while(i < output.length){

        if(ops.includes(output[i])){
            prev = operand;
            operand = output[i];
        }
        else if(operand != '' && Number.isInteger(parseInt(output[i]))){
            if(prev != '' && operand === '-'){
                newOut += prev;
                newOut += "_";
            }
            else{
                newOut += operand; 
            }
            operand = '';
            newOut+= output[i];
        }
        else if(output[i] === '.'){
            newOut += '.';
        }
        else if(Number.isInteger(parseInt(output[i]))){
            newOut+= output[i];
        }
        i++;
    } 

    return newOut;
}

document.getElementById("calc").children[0].innerHTML = 0;