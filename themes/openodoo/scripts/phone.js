hexo.extend.helper.register('formatPhone', function (number) {
    let phone = String(number);
    let formatPhone = "";
    for (var i = 0; i < phone.length; i++) {
        if (i == 1) {
            formatPhone += ' (';
        }
        if (i == 4) {
            formatPhone += ') ';
        }
        if ((i == 7) | (i == 9)) {
            formatPhone += '-';
        }
        formatPhone += phone[i];
    }
    return formatPhone;
});