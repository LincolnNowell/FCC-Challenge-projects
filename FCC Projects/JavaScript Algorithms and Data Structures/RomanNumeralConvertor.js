function convertToRoman(num) {
    let numeral = "";

    while(num >= 1000){
        numeral+= "M";
        num -= 1000;
    }
    while(num >= 500){
        if(num >= 900) {numeral += "CM"; num -= 900; break;}
        if(num >= 500) {
            numeral += "D";
            num -= 500;
            break;
        }
        if(num < 500){
            numeral += "M";
            break;
        }
        numeral+= "C";
        num -= 100;
    }
    while(num > 99){
        if(num === 400){numeral += "CD"; num -= 400; break;}
        numeral += "C";
        num -= 100;
    }
    while(num >= 50){
        if(num >= 90){ numeral += "XC"; num -= 90; break;}
        if(num >= 50) {numeral += "L"; num -= 50; break; }
        numeral += "X";
        num -= 10;
    }
    while(num > 9){
        if(num > 40){
            numeral += "XL";
            num -= 40;
            break;
        }
        numeral += "X";
        num -= 10;
    }
    while(num >= 5){
        if(num === 9){numeral += "IX"; num -= 9; break;}
        if(num >= 5){numeral += "V"; num -= 5; break;}
        numeral += "I";
        num -= 1;
    }
    while(num != 0){
        if(num === 4){numeral += "IV"; num = 0; break;}
        numeral += "I";
        num -= 1;
    }


 return numeral;
}

console.log(convertToRoman(97));
