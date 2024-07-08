let number = 10
document.write('<font size=5> Result: <br> The value of a is:' + ' ' + number + '<br> .................................................... <br> <br> ')

document.write('The value of ++a is:' + ' ' + ++number, '<br>')
document.write('Now the value of a is:' + ' ' + number, '<br> <br> ')

document.write('The value of a++ is:' + ' ' + number++, '<br>')
document.write('Now the value of a is:' + ' ' + number, '<br> <br> ')

document.write('The value of --a is:' + ' ' + --number, '<br>')
document.write('Now the value of a is:' + ' ' + number, '<br> <br> ')

document.write('The value of a-- is:' + ' ' + number--, '<br>')
document.write('Now the value of a is:' + ' ' + number, '<br> <br> ')

var a = 2, b = 1;
//   1 - 0 = 1 + 1 = 2 + 1 = 3
//   a     = a + b = 2 + b = 4  
var result = --a - --b + ++b + b--;

document.write('a is' + ' ' + 1, '<br>')
document.write('b is' + ' ' + 1, '<br>')
document.write('The result is:' + ' ' + result, '<br> <br>')

let userName = prompt('Enter your name')
alert('Welcome to' + ' ' + userName)

let table = prompt('Enter any number')

if (table == '') {
    document.write('Table of' + ' ' + 5 + '<br> <br>')
}
else {
    document.write('Table of' + ' ' + table + '<br> <br>')
}

for (i = 1; i <= 10; i++) {
    if (table == '') {
        document.write(5 + ' ' + 'x' + ' ' + i + ' ' + '=' + ' ' + 5 * i, '<br>')
    } else {
        document.write(table + ' ' + 'x' + ' ' + i + ' ' + '=' + ' ' + table * i, '<br>')
    }

}

let subject1 = prompt('Enter your first subject name')
let subject2 = prompt('Enter your second subject name')
let subject3 = prompt('Enter your third subject name')

let totalMarks_forEachSubject = 100

let subject1_obtainedMarks = +prompt('Enter your obtained marks for' + ' ' + subject1)
let subject2_obtainedMarks = +prompt('Enter your obtained marks for' + ' ' + subject2)
let subject3_obtainedMarks = +prompt('Enter your obtained marks for' + ' ' + subject3)

let totalMarks_obtainedMarks = subject1_obtainedMarks + subject2_obtainedMarks + subject3_obtainedMarks

let percentage_ofSubject1 = subject1_obtainedMarks / totalMarks_forEachSubject * 100
let percentage_ofSubject2 = subject2_obtainedMarks / totalMarks_forEachSubject * 100
let percentage_ofSubject3 = subject3_obtainedMarks / totalMarks_forEachSubject * 100

let totalPercentage = (subject1_obtainedMarks + subject2_obtainedMarks + subject3_obtainedMarks) / 300 * 100

document.write('Subject &nbsp &nbsp Total Marks &nbsp &nbsp Obtained Marks &nbsp &nbsp Percentage <br>')

document.write(subject1 + '&nbsp &nbsp &nbsp &nbsp' + totalMarks_forEachSubject + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + subject1_obtainedMarks + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + percentage_ofSubject1 + ' %', '<br>')
document.write(subject2 + '&nbsp &nbsp &nbsp &nbsp' + totalMarks_forEachSubject + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + subject2_obtainedMarks + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + percentage_ofSubject2 + ' %', '<br>')
document.write(subject3 + '&nbsp &nbsp &nbsp &nbsp' + totalMarks_forEachSubject + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + subject3_obtainedMarks + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + percentage_ofSubject3 + ' %', '<br>')

document.write('&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp' + 100 + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp' + totalMarks_obtainedMarks + '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp' + totalPercentage + ' %')