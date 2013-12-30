# Intro

This is a simple demo of Date Range Picker on [Backbone] framework.

Ther most tricky part of this demo is nested models and views. Each DateTime model is listened by a view DateTimePicker, and validation performed on each model update to ensure only historical dates can be set. In addition, validation on the combination of two DateTime, in the form of DateTimeRange, performed on each nested model update to ensure these two dates are in sequence.

# Installation

Prerequisites:
- NPM

``` sh
    npm install
    npm install -g bower
    npm install -g grunt-cli
    bower install
    
    grunt
```

Then, open http://localhost:9001 in your browswer, a default view will appear.

If you are interested in initializing the dates, try http://localhost:9001/#2000-01-01/2010-01-01