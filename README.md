## API Endpoints

This is a working version of a static site that can hook into //Portfolio via its API.


### Setting up for dev

#### Connecting to //Portfolio

Copy [portfolio_display.js](https://github.com/jessrudder/statictest/blob/master/js/course_select.js) and customize the class names to point to your own DOM elements.

Note that there is a call to `portfolios.flatironschool.com` on [index.html](https://github.com/jessrudder/statictest/blob/master/index.html). You will need a similar script tag that grabs the data you want. The callback parameter names the function that will be called on success. See [main.js](https://github.com/jessrudder/statictest/blob/master/js/main.js) for an example of how this is populated.

#### Connecting to //Portfolio on your dev machine

Download and run [ngrok](ngrok.com).

Clone [//portfolio](https://github.com/flatiron-labs/enroll).
Bundle, migrate, and run `rails s -b 127.0.0.1`.

Note that there is a call to `portfolios.flatironschool.com` in [index.html](https://github.com/jessrudder/static-test-site-precollege/blob/master/index.html). Set it to your ngrok address instead.

### Api endpoints

Check out the [//Portfolio API docs](https://github.com/flatiron-labs/portfolio/blob/master/API.md).
