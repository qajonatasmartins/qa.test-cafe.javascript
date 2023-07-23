# qa.test-cafe.javascript

testcafe -c 2 chrome:headless tests/beforeAndAfter.js

testcafe -c 2 "chrome:emulation:device=iphone X" tests/beforeAndAfter.js

testcafe -c 2 chrome tests/beforeAndAfter.js

testcafe all tests

https://github.com/moatazeldebsy/TestCafe-TAU/tree/chapter14/tests