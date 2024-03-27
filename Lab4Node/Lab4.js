console.log("node helloworldnode");

const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const reversedText = data.split('').reverse().join('');
    fs.writeFile('input.txt', reversedText, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Текст успешно записан в обратном порядке в файл.');
    });
});

