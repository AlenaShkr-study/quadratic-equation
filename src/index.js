module.exports = function solveEquation(equation) {
  // your implementation
  
  let res=equation.replace('^2', '').split(' * x'); // сделать через регулярные выражения

   let a=+res[0];
   let b=+res[1].replace(' ', '').replace(' ','');
   let c=+res[2].replace(' ','').replace(' ','');

   let solution=[];
   // можно добавить проверку дискрименанта
   let x1=Math.round((-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
   let x2=Math.round((-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
   solution.push(x1, x2);
   return solution.sort(function(a,b){return a-b});
}
