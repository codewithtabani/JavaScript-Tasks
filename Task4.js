let empty_multidimensional_array = [[], [], []]

let multidimensional_array = [[0, 1, 2, 3 + '<br>'] + [1, 0, 1, 2 + '<br>'] + [2, 1, 0, 1 + '<br>']]
document.write('<font size=5>' + multidimensional_array + '<br> <br>')

for (i = 1; i <= 10; i++) {
    document.write('<br>' + i)
}

let Table_number = +prompt('Enter a number to show its multiplication table')
let Table_length = +prompt('Enter length multiplication table')

document.write('Multiplication table of ' + Table_number + '<br>')
document.write('Length ' + Table_length + '<br>')

for (i = 1; i <= Table_length; i++) {
    document.write(Table_number + ' ' + 'x' + ' ' + i + ' ' + '=' + ' ' + Table_number * i, '<br>')
}

fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
document.write(fruits + '<br> <br>')

for (let index = 0; index < fruits.length; index++) {
    document.write('Element at index ' + index + ' ' + 'is' + ' ' + fruits[index] + '<br> <br>')
}

let Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let Reverse_counting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let Series = [2 + 'k', 4 + 'k', 6 + 'k', 8 + 'k', 10 + 'k', 12 + 'k', 14 + 'k', 16 + 'k', 18 + 'k', 20 + 'k']

document.write('Counting <br> <br>' + Counting + '<br> <br>')
document.write('Reverse Counting <br>  <br>' + Reverse_counting + '<br> <br>')
document.write('Even <br> <br>' + Even + '<br> <br>')
document.write('Odd <br> <br>' + Odd + '<br> <br>')
document.write('Series <br> <br>' + Series + '<br> <br>')

let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
let item_asking = prompt('Welcome to ABC Bakery.What do you want to order sir/maam?')

let flag = 'No'

for (let index = 0; index < A.length; index++) {
    if (A[index] == item_asking) {
        flag = 'Yes'
        break
    }
}
if (flag == 'Yes') {
    alert('It is available in our bakery')
} else {
    alert('We are Sorry.It is not available in our bakery')
}

let Array_numbers = [24, 53, 78, 91, 12]

document.write('Array items:' + ' ' + Array_numbers + '<br>')

document.write('The largest number is:' + ' ' + Math.max(...Array_numbers) + '<br> <br>');

document.write('Array items:' + ' ' + Array_numbers + '<br>')
document.write('The smallest number is:' + ' ' + Math.min(...Array_numbers) + '<br> <br>');