export const code = `
  public int GetDigitSum(int num) {
    int sum = 0;
  
    while (num > 0) {
      sum += num % 10;
      num = num / 10;
    }
    
    return sum;
  }
  
  GetDigitSum(12867); --> 24
`