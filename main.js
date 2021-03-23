const array =[1,2,3,4,5];

/* find max in the array of numbers*/
const findMax = (arr) => Math.max(...arr)

console.log(findMax(array))

/* Given an array of number, please find all pair number which results in the given number */

const multiplicationNmuber =  (arr,number) => {
    let left = 0;
    let right = arr.length -1
    let result = []
    while (left <= right) {
        if(arr[left] * arr[right] > number){
            right -= 1
        }
        if(arr[left] * arr[right] < number){
            left += 1
        }
        if(arr[left] * arr[right] === number){
            console.log('kk')
            result.push(`${arr[left]} * ${arr[right]}`)
            right -= 1
            left += 1
        }
    }
   return result
}

const plusNmuber =  (arr,number) => {
    let left = 0;
    let right = arr.length -1
    let result = []
    while (left <= right) {
        if(arr[left] + arr[right] > number){
            right -= 1
        }
        if(arr[left] + arr[right] < number){
            left += 1
        }
        if(arr[left] + arr[right] === number){
            result.push(`${arr[left]} + ${arr[right]}`)
            right -= 1
            left += 1
        }
    }
   return result
}

const minusNmuber =  (arr,number) => {
    let left = 0;
    let right = arr.length -1
    let result = []
    while (left <= right) {
        if(arr[left] - arr[right] > number){
            right -= 1
        }
        if(arr[left] - arr[right] < number){
            left += 1
        }
        if(arr[left] - arr[right] === number){
            result.push(`${arr[left]} + ${arr[right]}`)
            right -= 1
            left += 1
        }
    }
   return result
}

const pairNumber = (arr,number) => {
    let res = ''
   const plus = plusNmuber(arr,number)
   const multiplication = multiplicationNmuber(arr,number)
   const minus = minusNmuber(arr,number)
   const result = [...plus,...multiplication,...minus].map(i =>res = res ? `${res}, ${i}` : i)
   return res
}

console.log(pairNumber(array,7))