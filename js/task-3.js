function getElementWidth(content, padding, border) {
    console.log(Number.parseFloat(content)+Number.parseFloat(padding)*2+Number.parseFloat(border)*2)
}

getElementWidth("50px", "8px", "4px"); // 74
getElementWidth("60px", "12px", "8.5px"); // 101
getElementWidth("200px", "0px", "0px"); // 200

// Не бачу сенсу дублювати console.log для виклику функції, викликає купу undefined. Якщо це не правильно прошу поясніть чому. 