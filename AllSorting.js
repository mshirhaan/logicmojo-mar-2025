function swap(arr, i , j) {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp;
}

function bubbleSort(nums) {
    let count = 0;
    for(let i = 0 ; i < nums.length - 1; i++) {
        let isSorted = true;
        for(let j = 0; j < nums.length-1-i; j++) {
            count++
            if(nums[j] > nums[j+1]) {
                isSorted = false;
                swap(nums, i , j)
            }
        }
        if(isSorted) {
            break;
        }
    }
    console.log('complexity: ', count)
    return nums
}

function selectionSort(nums) {
    for(let i = 0 ; i < nums.length - 1; i++) {
        let smallestIndex = i;
        for(let j = smallestIndex+1; j<nums.length; j++) {
            if(nums[j] < nums[smallestIndex]) {
                smallestIndex = j;
            }
        }
        swap(nums, smallestIndex, i)
    }
    return nums
}

function insertionSort(nums) {
    let count = 0;
    for(let i = 0; i<nums.length-1; i++) {
        let currentUnsortedNum = nums[i+1];
        let j = i;
        count++
        while(j>=0 && nums[j]>currentUnsortedNum) {
            count++
            nums[j+1] = nums[j]
            j--;
        }
        nums[j+1] = currentUnsortedNum
    }
    console.log('complexity: ', count)
    return nums
}
//===========================Elementary ends=================//

function merge(arr1, arr2) {
    let i = 0; j = 0;

    let result = [];

    while(i<arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while(i<arr1.length) {
        result.push(arr1[i])
        i++
    }

    while(j<arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result;
}

function mergeSort(nums) {
    if(nums.length == 1) {
        return nums
    }
    let firstHalf = nums.slice(0, nums.length/2)
    let secondHalf = nums.slice(nums.length/2)

    let leftSorted = mergeSort(firstHalf)
    let rightSorted = mergeSort(secondHalf)

    let result = merge(leftSorted, rightSorted)
    return result;  
}


function quickSort(nums, startIndex, endIndex) {
    if(startIndex>=endIndex) {
        return;
    }
    let pivotIndex = startIndex;

    let swapIndex = pivotIndex+1;

    for(let i = pivotIndex+1; i<=endIndex; i++) {
        if(nums[i] < nums[pivotIndex]) {
            swap(nums, i, swapIndex);
            swapIndex++;
        }
    }
    swap(nums, pivotIndex, swapIndex-1);

    quickSort(nums, startIndex, swapIndex-2);

    quickSort(nums, swapIndex, endIndex);

    return nums;
}


quickSort([5,1,2,4,3], 0, 4);
