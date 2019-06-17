var money = [
  { name: 'ONE HUNDRED', val: 100 },
  { name: 'TWENTY', val: 20 },
  { name: 'TEN', val: 10 },
  { name: 'FIVE', val: 5 },
  { name: 'ONE', val: 1 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 },
];


function CalcAvailableMoney(cid){
  let cashInReg = 0;
  for(let ele = 0; ele < cid.length; ++ele){
      cashInReg += cid[ele][1];
  }
  return cashInReg;
}

function TurnIntoObject(cid){

  return cid.reduce(
    function(name, cids) {
      name[cids[0]] = cids[1];
      return name;
    }, []);
}


function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let avaliableMoney = CalcAvailableMoney(cid);

  let exchange = {
    status: null, 
    change:[]
  };

  if (change === avaliableMoney){
    exchange.status = "CLOSED";
    for(let i = 0; i < cid.length; ++i){
      exchange.change.push([cid[i][0],cid[i][1]]);
    }
    return exchange;
  }

  let arr = TurnIntoObject(cid);

  if(change < avaliableMoney){
    exchange.status = "OPEN";

      money.reduce(function(name, val){
      let sum = 0;
      while(arr[val.name] && change >= val.val){
        change -= val.val;
        arr[val.name] -= val.val;
        sum += val.val;
        change = Math.round(change * 100) / 100;
      }

      if(sum > 0){
        exchange.change.push([val.name,sum]);
      }

      return name;
    } );
  }
  if(change > avaliableMoney){
    exchange.status = "INSUFFICIENT_FUNDS";
    exchange.change = [];
  }

  if(exchange.change < 1 || change > 0){
    exchange.status = "INSUFFICIENT_FUNDS";
    exchange.change = [];
  }


  return exchange;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])