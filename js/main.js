$(document).ready(function () {
  // $('slider').slider('unslick'); // Выключение слайдера
  $('.slider').slick({
    focusOnSelect: true, // Переключение по клику
    arrows: true, //Вкл стрелок
    dots: false, // Вкл точек
    adaptiveHeight: true, // Адаптивные точки
    slidesToShow:4, // Показ  кол-вл слайдов
    slidesToScroll: 1, // Скролл слайдов
    speed: 2000, // Скорость перелистываться анимации
    easing: 'easer', //Анимация перелистыванья
    infinite: true, // Бесконечность слайдера
    autoplay: true, // Авто-переключение
    autoplaySpeed: 3000, // Перелистыванье авто
    initialSlide: 0, // слайд начало
    pauseOnFocus: false, // Пауза при клике на слайд
    pauseOnDotsHover: false, // Пауза при наведении на Dots
    pauseOnHover: false, // Пауза при наведении на слайд
    draggable: true, // Нельзя на ПК! свайпить
    swipe: true, // Нельзя на тачскринах свайпить
    touchThreshold: 7, // Момент перелистыванья
    touchMove: true, // Ручное перелистыванье выкл
    waitForAnimate: true, // Быстрая перекрутка
    centerMode: false, // Центральный слайд
    variableWidth: false, // Авто-Адаптивный слайдер 
    rows: 1, // Колонк
    vertical: false, // Вертикальный слайдер (без использовать с d:block)
    verticalSwiping: false, // Правильная перелистка (вертикаль)
    // asNavFor: ".sliderbig", // Связка двух слайдеров

  // appendArrows:$('.button-nav') // Расположение стрелок в отдельном меню 
  
  responsive:[ // брекПоинт и его настройка 
    {
       breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },{
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        arrows: false, //Вкл стрелок
        dots: true, // Вкл точек
      }
    }
    ],
    mobileFirst: false, // miv-width !
  });
  $('.slider-reviews').slick({
		arrows: true, //Вкл стрелок
    dots: true, // Вкл точек
    adaptiveHeight: true, // Адаптивные точки
    slidesToShow: 1, // Показ  кол-вл слайдов
    slidesToScroll:1, // Скролл слайдов
    speed: 1500, // Скорость перелистываться анимации
    easing: 'easer', //Анимация перелистыванья
    infinite: false, // Бесконечность слайдера
    autoplay: true, // Авто-переключение
    autoplaySpeed: 10000, // Перелистыванье авто
    initialSlide: 0, // слайд начало
    pauseOnFocus: false, // Пауза при клике на слайд
    pauseOnDotsHover: false, // Пауза при наведении на Dots
    pauseOnHover: false, // Пауза при наведении на слайд
    draggable: true, // Нельзя на ПК! свайпить
    swipe: true, // Нельзя на тачскринах свайпить
    touchThreshold: 7, // Момент перелистыванья
    touchMove: true, // Ручное перелистыванье выкл
    waitForAnimate: true, // Быстрая перекрутка
    centerMode: false, // Центральный слайд
    variableWidth: false, // Авто-Адаптивный слайдер
    rows: 1, // Колонк
    vertical: false, // Вертикальный слайдер (без использовать с d:block)
    verticalSwiping: false, // Правильная перелистка (вертикаль)
    // asNavFor: ".sliderbig", // Связка двух слайдеров

    responsive:[ // брекПоинт и его настройка 
    {
       breakpoint: 768,
      settings: {
        arrows: false, //Вкл стрелок
      }
    }
    ],
    mobileFirst: false, // miv-width !

	});
});



