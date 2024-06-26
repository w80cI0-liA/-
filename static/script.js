"use strict";
// Для Experience Timeline

function get(argument) {
	return document.querySelector(argument);
}

function get_all(argument) {
	return document.querySelectorAll(argument);
}

function show_more(this_elem) {
	this_elem.style.display = 'none';
	get_all('.more').forEach(elem => {
		elem.style.display = 'flex';
	});
}

get_all('.exp-cont-block').forEach(elem => {
	let block = elem.querySelector('.exp-block');
	let date = elem.querySelector('.exp-date');
	date.style.height = block.offsetHeight +'px';
});
