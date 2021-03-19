// Разве если сдвиг с шагом 3, то массив не должен быть [4,5,1,2,3], а не [3,4,5,1,2]
// Ведь 0 элемент заменяется элементов с индексом 3, а не
// Время: около минуты (потому что сначала не так прочитал задание)
function shiftedArray(array, k) {
    return array.map((el, index) => {
        if (index + k - 1 >= array.length) {
            return array[index + k - array.length - 1];
        }
        return array[index + k - 1];
    });
}