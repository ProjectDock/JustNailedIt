export const code = `
function isPrime(n){
  let divisor = 2;

  while (n > divisor){
    if(n % divisor === 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}
`;
