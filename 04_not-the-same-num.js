function solution(arr)
{
    var answer = [];
    let temp = '';
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== temp) {
            answer.push(arr[i]);
            temp = arr[i];
        }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}