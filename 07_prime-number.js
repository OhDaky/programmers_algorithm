function solution(n) {
  let arr = [];
  for(let i=1; i<=n; i++) arr.push(i);
  
  for(let i=1; i < Math.sqrt(n); i++) {
      if(arr[i]) {
          let num = arr[i];
          for(let j = arr[i]* arr[i]; j<=n; j +=num) {
              arr[j-1] = 0;
          }
      }
  }
  let answer = arr.filter((n) => n);
  
  return answer.length -1;
}