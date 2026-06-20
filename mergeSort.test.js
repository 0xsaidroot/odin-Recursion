import { mergeSort,merge } from "./mergeSort";

test('It exists ',()=>{
    expect(mergeSort([])).toEqual([]);
})

test('mergeSort[1,2,3,4,5] ',()=>{
    expect(mergeSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
})

test('mergeSort([3, 2, 1, 13, 8, 5, 0, 1])',()=>{
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
})