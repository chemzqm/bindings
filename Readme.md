# bindings

  Provide some common bindings for used with [reactive](http://github.com/component/reactive).

## Installation

  Install with [component(1)](http://component.io):

    $ component install chemzqm/bindings

## Usage

``` html
<div id="view">
  <div>{firstname} {lastname}</div>
  <span data-date-ymd="birthday"></span>
</div>
```

``` js
var bindings = require("binding");
var reactive = require("reactive");
var el = document.getElementById("view");
var model = require("model");
var User = model('user')
    .attr('birthday')
    .attr('firstname')
    .attr('lastname')
var user = new User({
  birthday: '1988-01-01',
  firstname: 'farrit',
  lastname: 'tobi'
})
var view = new reactive(el, user, {
  bingings: bindings
});
```

## API

### data-date-year="graduate"

Format `date | datetimestring | timestamp` to `year` and append the text value to binding `el`.

### data-date-ago="updateAt"

Format `date | datetimestring | timestamp` to `chinese ago format` and append the text value to binding `el`.

### data-date-ymd="birthday"

Format `date | datetimestring | timestamp` to `YYYY-mm-dd` format and append the text value to binding `el`.

### data-number="money, 2"

Format number with `data-fixed` attribute (default 0), result is `0` if `model.attribute == false`, second value is optional for fixed digits after decimal.

### data-prepend

Add this attribute if you want to prepend the result to the element.

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright chemzqm@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
