8 kyu
USD => CNY
JavaScript:
function usdcny(usd) {
  let a = '6.75';
  let b = usd;
  let c = String((a * b).toFixed(2) + ' Chinese Yuan')
  return c 
}