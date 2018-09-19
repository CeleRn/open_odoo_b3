$(document).ready(function () {
    if ($('.main__header').attr('data-background-image') != undefined) {
        var url = $('.main__header').attr('data-background-image');
        console.log($('.main__header').attr('data-background-image'));
        $('.main__header').css('background-image', 'url(' + url + ')');
    }
});

// Закрытие приветственной панели на форуме
$('.forum_intro__close-icon').click(function () {
    var currentHeight = $('.forum_intro').outerHeight();
    $('.forum_intro').css('height', currentHeight);
    $('.forum_intro').css('height', '0').css('margin', '0').css('padding', '0').css('overflow', 'hidden').css('opacity', '0');
});

$('.js_unfollow_btn').click(function () {
    $(this).addClass('hidden');
    $('.js_follow_btn').removeClass('hidden');
    $('.js_follow_email').removeAttr('disabled');
});
$('.js_follow_btn').click(function () {
    $(this).addClass('hidden');
    $('.js_unfollow_btn').removeClass('hidden');
    $('.js_follow_email').attr('disabled', 'disabled');
});

// Работа кнопки в избранное (Звездочка)
$('.favorit-forum-item__link').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('favorit-forum-item__link_active');
});

$('.favorit-forum-item__link').popover();

// Работа кнопки в избранное (Звездочка)
$('.accept-answer-forum-item__link').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('accept-answer-forum-item__link_active');
});

$('.accept-answer-forum-item__link').popover();


// Ссылка Дать ответ
$("#post-reply-link").click(function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    var anchor = $('#post_reply').offset().top - 5;
    //анимируем переход на расстояние - top за 800 мс
    $('body,html').animate({ scrollTop: anchor }, 800);
});


/// Дать ответ на форуме
$('#post-reply_summernote').summernote({
    placeholder: 'Дайте ответ на вопрос',
    tabsize: 2,
    height: 200,
    lang: 'ru-RU',
    dialogsInBody: true,
    dialogsFade: true,
    fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
    codemirror: {                 // code mirror options
        mode: 'text/html',
        htmlMode: true,
        lineNumbers: true,
        theme: 'monokai'
    }
});