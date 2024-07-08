let studentNames = []
let students = new Array()

let string_array = ['mudassir', 'hadi']
let number_array = [10, 20]
let boolean_array = [true, false]
let mixed_array = ['mudassir', 20, true]

let qualifications = [' 1) SSC <br>' + '2) HSC <br>' + '3) BCS <br>' + '4) BS <br>' + '5) BCOM <br>' + '6) MS <br>' + '7) M. Phil. <br>' + '8) PhD <br>']
document.write('<font size=5> Qualifications: <br> <br>' + qualifications + '<br> <br>')

let students_Names = ['Michael', 'John', 'Tony']
let students_scores = [320, 230, 480]

document.write('Score of ' + students_Names[0] + ' ' + 'is ' + students_scores[0] + '.' + 'Percentage is ' + students_scores[0] / 500 * 100 + '% <br>')
document.write('Score of ' + students_Names[1] + ' ' + 'is ' + students_scores[1] + '.' + 'Percentage is ' + students_scores[1] / 500 * 100 + '% <br>')
document.write('Score of ' + students_Names[2] + ' ' + 'is ' + students_scores[2] + '.' + 'Percentage is ' + students_scores[2] / 500 * 100 + '% <br> <br>')

let color = ['red', 'green']
let color_asking = prompt('Enter any color you want to add in the beginning')
let color_asking2 = prompt('Enter any color you want to add in the end')

color.unshift(color_asking)
document.write('Adding user color in the beginning of the array:' + color + '<br>')

color.push(color_asking2)
document.write('Adding user color in the end of the array:' + color + '<br>')

color.unshift('blue', 'pink')
document.write('Adding two color in the beginning of the array:' + color + '<br>')

color.shift()
document.write('Deleting the first color in the array:' + color + '<br>')

color.pop()
document.write('Deleting the last color in the array:' + color + '<br>')


let index_asking = prompt('Enter at what position/index you want to add the color')
let color_asking_name = prompt('Enter the color name you want to add at ' + index_asking + ' position')

color[index_asking] = [color_asking_name]
document.write('Adding color at specific index by asking user:' + color + '<br>')

let color_count = prompt('How many colors you want to delete')

for (let index = 0; index < color_count; index++) {
    let index_asking2 = prompt('Enter at what position/index you want to delete the color')
    color[index_asking2] = []
    document.write('Deleting color at specific index by asking user:' + color)
}

let numbers = [320, 230, 480, 120]
document.write('Scores of Students : ' + numbers + '<br>')

numbers.sort(function (a, b) {
    return a - b;
});
document.write('Ordered Scores of Students : ' + numbers, '<br> <br>');


document.write('Cities list: <br>')
let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar <br> <br>']
document.write(cities)

document.write('Selected cities list <br>')
let selectedCities = ['Islamabad', 'Quetta', 'Peshawar <br> <br>']
document.write(selectedCities)

var arr = ['This', 'is', 'my', 'cat'];
document.write('Array: <br> ' + arr + '<br> <br>')

var joining_arr = arr.join(' ');
document.write('Array: <br> ' + joining_arr + '<br> <br>')

let devices = ['keyboard', 'mouse', 'printer', 'moniter']
document.write('Devices: <br>' + devices + '<br>')

document.write(devices + '<br> <br>')

let devices2 = ['keyboard', 'mouse', 'printer', 'moniter']
document.write('Devices: <br>' + devices + '<br>')

let devices_reverse = devices2.reverse();
document.write(devices_reverse + '<br> <br>')

let phone_manufacturers = ['Apple <br>' + 'Samsung <br>' + 'Motorola <br>' + 'Nokia <br>' + 'Sony <br>' + 'Haier <br>']
document.write(phone_manufacturers)