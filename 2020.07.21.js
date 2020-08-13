var runningSum = function(nums) {
  for(let i = 0 ; i < nums.length ; i++ ){
      i === 0 ? nums[i] : nums[i] += nums[i -1]
  }
  return nums 
};

let a = [1,2,3,4]
console.log(runningSum(a));


function dealPrice(x, d = 100, issupp = false) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return;
  }
  if (f == 0) {
    return '0';
  }
  d = d ? d * 100 : 100;
  f = Math.round(f * 100) / d;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0 && issupp) {
    rs = s.length;
    s += '.';
  }
  if (issupp) {
    while (s.length <= rs + 2) {
      s += '0';
    }
  }
  // s = parseFloat(s+'') + ''
  
   
  return s;
}

console.log(dealPrice(200300));

formatPrice = function(_price, needCount, smallCount){
  // 如 (27.62 3422, 6, 4)
  var price = parseFloat(_price)*0.01;
  if(isNaN(price)) return _price;
  var is0 = price < 1 && price >= 0;
  if(is0) price += 1;
  // 需要小数位数 默认小数点后2位
  needCount = needCount || 2;
  // 更小数部分
  smallCount = smallCount || 0;
  var fn = fn || 'round';
  var numStr = Math[fn](price * Math.pow(10, needCount)).toString();  //总的位数长度
  var index = numStr.length - needCount;   //整数位数长度
  if(needCount < smallCount){
    smallCount = needCount;
  }
  var oCunout = needCount - smallCount;    //如：小数部分总长为6 更小数部分为4，则剩余部分为2
  var intPart = numStr.substr(0, index);   //整数部分
  if(is0) intPart = parseInt(intPart) - 1;
  var smallNum = smallCount ? ('<i>' + numStr.substr(index+oCunout) + '</i>') : '';
  return intPart + '.' + numStr.substr(index, oCunout) + smallNum;
};

console.log('item.marketPrice*0.01).toFixed(2)',parseFloat((122090*0.01).toFixed(2)));


console.log(formatPrice(2000 , 0 , 0));






