// Bubble sort 


const arr = [5, 4, -2, 1, 0,6,3]


const bubbleSort = (arr: number[]) => {

    const toSort = arr.length
    for(let i = 0; i < toSort; i++){


        for(let j = i + 1; j < arr.length; j++){

            
            if(arr[j] < arr[i]){

                let biggerNum = arr[i]
                arr[i] = arr[j]
                arr[j] = biggerNum
            }
        }
    }

    return arr
}

console.log(bubbleSort(arr))

