import { animate, onScroll, utils, stagger, createTimeline } from 'animejs';

// Анимация шапки

const photoAnime = animate('.main-header__photo', {
  opacity: [0, 1],
});

const titleAnime = animate('.main-header__title', {
  opacity: [0, 1],
  y: [-50, 0],
});

const questions = utils.$('.main-header__item');

const animQuest = (elem) => {
  return animate(elem, {
    opacity: [0, 1],
    y: [-30, 0],
  });
};

// Таймлайн вопросов в шапке

const questsAnime = createTimeline( {delay: 50} )
.sync(animQuest(questions[0]))
.sync(animQuest(questions[1]))
.sync(animQuest(questions[2]))
.sync(animQuest(questions[3]));

const callAnime = animate('.main-header__call', {
  opacity: [0, 1],
  x: [-50, 0],
});

const buttonsAnime = animate('.main-header__buttons', {
  opacity: [0, 1],
});

// Таймлайн всех анимаций в шапке

const headerAnimations = createTimeline( {delay: 550} )
.sync(photoAnime)
.sync(titleAnime)
.sync(questsAnime)
.sync(callAnime)
.sync(buttonsAnime)

// Преимущества

const advantages = utils.$('.advantages__item');

advantages.forEach(item => {
  animate(item, {
    scale: [0.3, 1],
    opacity: [0, 1],
    autoplay: onScroll({
      enter: 'center -320px',
      leave: 'center top',
      sync: true,
      alternate: true,
      // debug: true,
    }),
  });
});

// Выплывающие цифры результатов

const advNumbers = utils.$('.advantages__info-item');

animate(advNumbers[0], {
  x: [-50, 0],
  opacity: [0, 1],
  autoplay: onScroll({
    enter: 'center -210px',
    leave: 'center top',
    sync: true,
    alternate: true,
    // debug: true,
  }),
});

animate(advNumbers[1], {
  x: [50, 0],
  opacity: [0, 1],
  autoplay: onScroll({
    enter: 'center -210px',
    leave: 'center center',
    sync: true,
    alternate: true,
    // debug: true,
  }),
});

// Заголовки

const worksTitles = utils.$('.works__subtitle');

worksTitles.forEach(title => {
  animate(title, {
     y: [-50, 0],
    opacity: [0, 1],
    autoplay: onScroll({
      enter: 'center -200px',
      leave: 'center end',
      sync: true,
      alternate: true,
      // debug: true,
    }),
  });
});

// Анимация списка устанавливаемого

const installList = utils.$('.works__item--install');

installList.forEach(item => {
  animate(item, {
    y: [50, 0],
    opacity: [0, 1],
    autoplay: onScroll({
      enter: 'center -200px',
      leave: 'center center',
      sync: true,
      alternate: true,
      // debug: true,
    }),
  });
});

// Анимация списка устанавливаемого

const repairList = utils.$('.works__item--repair');

repairList.forEach(item => {
  animate(item, {
    scale: [0, 1],
    y: [50, 0],
    opacity: [0, 1],
    autoplay: onScroll({
      enter: 'center -250px',
      leave: 'center -100px',
      sync: true,
      alternate: true,
      // debug: true,
    }),
  });
});

// Анимация ответов на вопросы

const faqList = utils.$('.faq__details');

faqList.forEach(item => {
  animate(item, {
    y: [100, -10, 0],
    opacity: [0, 1],
    autoplay: onScroll({
      enter: 'center -300px',
      leave: 'center -50px',
      sync: true,
      alternate: true,
      // debug: true,
    }),
  });
});

animate('.call-master--repair', {
  opacity: [0, 1],
  autoplay: onScroll({
    enter: 'center -300px',
    leave: 'center -50px',
    sync: true,
    alternate: true,
    // debug: true,
  }),
});
