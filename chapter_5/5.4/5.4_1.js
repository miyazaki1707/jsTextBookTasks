'use strict';

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

styles[(styles.length-1) / 2] = 'Классика';

console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

console.log(styles);