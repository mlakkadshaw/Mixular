# Mixular: Mixpanel Tracking for AngularJS

Mixular is directive which you can use in your angularJS applications to track mix panel events.

## Installation via bower

You can install mixular via bower, to install run:

	bower install --save mixular


## How to use it

You must include the Mixpanel javascript tracking library, then add the tracking-directive dependency in your AngularJS app.

	var app = angular.module("yourApp", ["mixular-directive"]);
	
After that, you can start tracking events on your pages, like this:

	<a href="#/feedback" mixular="click" eventLabel="Feedback Clicked" prop-user="James">Feedback</a>	
	
	
You will have to add `mixular` and specify the event on which you want to do the tracking. 
All the standard event types are supported:

+ click
+ focus
3. hover
4. keydown
5. keypress
6. keyup
7. mousedown
8. mouseenter
9. mouseleave
10. mouseout
11. mouseover
12. mouseup
13. scroll
14. select

Using `eventLabel` property you can specify the label of the event e.g "Banner Ad clicked".

### Passing properties

To pass multiple properties for the event you can type the keyword prop followed by the property name e.g `prop-product="Laptop" prop-price="500"`


## Built by [ML&Co](http://mohammedlakkadshaw.com)

We are a mobile and web-app development company, to learn more about us, visit our website or blog:

Website: [http://mohammedlakkadshaw.com](http://mohammedlakkadshaw.com)

Blog: [http://blog.mohammedlakkadshaw.com](http://blog.mohammedlakkadshaw.com)


