// function shiftedArray(array, k) {
//     return array.map((el, index) => {
//         if (index + k - 1 >= array.length) {
//             return array[index + k - array.length - 1];
//         }
//         return array[index + k - 1];
//     });
// }

// Буквально пара секунд
function shiftedArray(array, k) {
    for (let i = 0; i < k; i++){
        array.unshift(array.pop());
    }
    return array;
}
console.log(shiftedArray([1,2,3,4,5], 3));