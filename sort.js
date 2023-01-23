//sort 함수로 오름차순 내림차순 바꾸기 

const arr = [2, 1, 3, 10]

//인자에서 2번째 인자에서 1번째 인자를 뺀 값을 return 하면 내림차순 정렬이 된다
arr.sort(function(a, b) {
    console.log("a: ",a, "/", "b:", b)
    return b - a //내림차순 - 뒤에서 앞에꺼 빼기 
    //return a - b 로 하면 바뀐다
})
//정렬 알고리즘
console.log(arr)
