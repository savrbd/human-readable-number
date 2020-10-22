module.exports = function toReadable (number) {
  let arr= new Map ([
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"],
    [60, "sixty"],
    [70, "seventy"],
    [80, "eighty"],
    [90, "ninety"],

  ])
  let result="";
  if (number===100) {result="one hundred";}
  if (number===0) {result="zero";}
  let newnumber=number;
  
   if (newnumber>100) {result=result + arr.get (Math.trunc (newnumber/100))+" hundred";}
   newnumber= newnumber%100;
   
   if (newnumber>=20) {result=result +" "+ arr.get(Math.trunc(newnumber/10)*10);
   let finishnumber=newnumber%10;
   if (finishnumber>0){result=result+ " "+arr.get(finishnumber);} }
    else if (newnumber>0){result= result+" "+ arr.get(newnumber);} 
    newnumber= newnumber%10;
  return result.trim();
}
