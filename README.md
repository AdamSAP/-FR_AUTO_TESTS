#  FR_AUTO_TESTS
Introduction:
I took a different approach to the test laid out in the document.
I have built a simple flight booking application using SAPs UI5 framework which makes use of JavaScript, HTML5, CSS and Jquery.
The tests are built using OPA5 (One page acceptance) integration tests. The idea is that the test exectuon environment simulates the application running in a small frame in the browser and clicks through the application as a user might while entering some of the data specified in the technical test document.
OPA 5 can be used with any JavaScript unit test framework, such as QUnit or Jasmine it also follows the arrange act assert pattern (corresponds to given when then), which improves readability and understanding of the test cases.

How to run:
Install Grunt
1)	Install Node.js - runtime environment for Grunt
One click install package download:  www.nodejs.org
2)	Install grunt-cli - Grunt task runner command line tool
After installing Node.js, in command line, use administrator privilege:
•	npm install -g grunt-cli (Windows)
•	sudo npm install -g grunt-client (Linux/Mac)
3)	Install project specified Grunt plugins
In command line, go to Grunt/ folder where the Gruntfile.js & package.json file exists
•	npm install (Windows/Linux/Mac)

use command line to navigate to the grunt folder (which should be also where the downloaded source files are and type "grunt --force serve")
Once the application is running go to "http://localhost:8089/FR_AUTO_TESTS_1/webapp/test/integration/opaTests.qunit.html" to see the tests execute in your browser or http://localhost:8089/FR_AUTO_TESTS_1/webapp/# to see the application.

In case the tests do not run, please navigate to the test folder->integration and review the source files there to see the code and patterns used