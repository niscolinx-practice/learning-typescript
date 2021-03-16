// Bubble sort 


const arr = [5, 4, -2, 1, 0,6,3]


const bubbleSort = (arr: number[]) => {

    let toSort = arr.length
    for(let i = 0; i < toSort; i++){

        console.log(arr[i])

        for(let j = i + 1; j < arr.length; j++){

            console.log(arr[j])
            
            if(arr[j] < arr[i]){

                console.log('to sort', arr[j], arr[i])
                let biggerNum = arr[i]
                arr[i] = arr[j]
                arr[j] = biggerNum
            }
        }
    }

    console.log(arr)
    return arr
}

bubbleSort(arr)

