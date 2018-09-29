module.exports = function solveEquation(equation) {
  let a=parseInt(equation.match(/\-?\s?\d*\s?\*\s?\w\^\d/gm));
  let b=equation.match(/\-?\+?\s\d*\s/gm);
      b=parseInt(b[0].replace(' ',''));
  let c=+equation.replace(/\-?\s?\d*\s?\*\s?\w\^\d\s\-?\+?\s\d*\s\*\s\w\s/gm, '').replace(' ','');
  
   // можно добавить проверку дискрименанта
   const X1=Math.round((-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
   const X2=Math.round((-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));
   let solution=[];
   solution.push(X1, X2);

   return solution.sort((a,b)=> a-b);
}
