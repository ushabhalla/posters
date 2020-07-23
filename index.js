/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable new-cap */
// change require to es6 import style
// import React from 'react';
// import ReactDOM from 'react-dom';
import $ from 'jquery';
import './style.scss';

$(() => {
  $(window).scroll(function () {
    if ($(this).scrollLeft() === 0) {
      $('#titletext').show();
    } else {
      $('#titletext').hide();
    }
  });
});

$(() => {
  var body = $('body');
  $(window).bind('mousewheel', (e) => {
    e.preventDefault();
    body.scrollLeft(body.scrollLeft() - e.originalEvent.wheelDelta);
  });
});
