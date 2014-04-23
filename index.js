var ago = require('ago');

function change(el, text) {
  if (el.hasAttribute('data-prepend')) {
    el.textContent = text + el.textContent;
  } else {
    el.textContent = el.textContent + text;
  }
}

function year(date) {
  if(!(date instanceof Date)) date = new Date(date);
  return date.getFullYear();
}

function ymd(date) {
  if(!(date instanceof Date)) date = new Date(date);
  return date.getFullYear() +
    '-' + ('0' + (1 + date.getMonth())).slice(-2) +
    '-' + ('0' + date.getDate()).slice(-2);
}

exports['data-date-year'] = function (el, prop) {
  var binding = this;
  binding.change(function() {
    var v = binding.value(prop);
    var text = year(v);
    change(el, text);
  })
}

exports['data-date-ago'] = function (el, prop) {
  var binding = this;
  binding.change(function() {
    var v = binding.value(prop);
    var text = ago(v);
    change(el, text);
  })
}

exports['data-date-ymd'] = function (el, prop) {
  var binding = this;
  binding.change(function() {
    var v = binding.value(prop);
    var text = ymd(v);
    change(el, text);
  })
}

exports['data-number'] = function (el, prop) {
  var args = prop.split(/,\s+/);
  var binding = this;
  binding.change(function() {
    var v = binding.value(args[0]) || 0;
    var n = parseFloat(v, 10);
    if (isNaN(n)) throw new Error('can\'t parse ' + v)
    n = n.toFixed(args[1] || 0);
    change(el, n);
  })
}
