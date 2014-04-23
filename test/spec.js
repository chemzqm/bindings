var assert = require('assert');
var reactive = require('reactive');
var bindings = require('bindings');
var domify = require('domify');

describe('bindings', function() {

  it('should render year', function() {
    var el = domify('<span data-date-year="graduate"></span>')
    var react = reactive(el, {graduate:'1988-01-01'}, {
      bindings: bindings
    })
    assert.equal(el.textContent, '1988');
  })

  it('should render ago', function() {
    var el = domify('<span data-date-ago="updateAt"></span>')
    var react = reactive(el, {updateAt: Date.now() - 60*1000}, {
      bindings: bindings
    })
    assert.equal(el.textContent, '1分钟前');
  })

  it('should render YYYY-mm-dd', function () {
    var el = domify('<span data-date-ymd="birthday"></span>')
    var react = reactive(el, {birthday: 1398278699119}, {
      bindings: bindings
    })
    assert.equal(el.textContent, '2014-04-24');
  })

  it('should render integer', function() {
    var el = domify('<span data-number="weight"></span>')
    var react = reactive(el, {weight: '123.456'}, {
      bindings: bindings
    })
    assert.equal(el.textContent, '123');
  });

  it('should render float', function () {
    var el = domify('<span data-number="income, 2"></span>')
    var react = reactive(el, {income: '4554.4444'}, {
      bindings: bindings
    })
    assert.equal(el.textContent, '4554.44');
  })

  it('should throw if not valid number', function () {
    var el = domify('<span data-number="gifts, 2"></span>')
    assert.throws(function() {
      var react = reactive(el, {gifts: 'aswd.fe'}, {
        bindings: bindings
      })
    })
  })

  it('should prepend the value', function () {
    var el = domify('<span data-number="height" data-prepend>kg</span>')
    var react = reactive(el, { height: 88 }, {
      bindings: bindings
    })
    assert.equal(el.textContent, '88kg');
  })
})
