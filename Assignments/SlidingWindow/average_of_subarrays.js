//bruteforce method

function find_averages_of_subarrays(K, arr) { //k will be our window and the array is the array
    const result = []

    for (let i = 0; i < arr.length - K + 1; i++) {
        sum = 0.0; //If no decimal this is now a int and we want floats.

        for (let j = i; j < i + K; j++) {
            sum+= arr[j];
        }
        result.push(sum / K); //the average.
    }

    return result;
}

// [1,2,3,4,5,6,7]

//   U S E   A   S T A C K

// better method:

function find_averages_of_subarrays_better(K, arr) {
    const result = [];

    let windowSum = 0.0
    let windowStart = 0

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd] //adding the element that we see

        if (windowEnd >= K - 1) {
            result.push(windowSum / K) //average that is pushed to result
            windowSum -= arr[windowStart]
            windowStart += 1
        }
    }

    return result

}

//[1,2,3,4,5,6,7] K = 3
//windowStart = 0
//windowSum = 0.0+1+2+3-1+4-2+5-3+6-4+7-5  //13

//results = [2.0, 3.0, 4.0, 5.0, 6.0]
//windowStart = 4
