Fast BEM class name generator
==============================

Simple and fast [BEM](https://en.bem.info/) class names generator.

Inspired by [bem-cn](https://github.com/albburtsev/bem-cn).

Usage
-----

```javascript
import bemCn from 'bem-cn-fast';
const b = bemCn('block');

b(); // -> 'block'
b('element'); // -> 'block__element'
b({ mod1: true, mod2: 'some-value' }); // -> 'block_mod1 block_mod2_some-value'
b('element', { mod1: true }); // -> 'block__element_mod1'
```

License
-------

```
The MIT License (MIT)

Copyright (c) 2017 Vitaliy Green

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
```
