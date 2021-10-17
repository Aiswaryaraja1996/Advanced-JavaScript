# Debouncing and Throttling

Debouncing and Throttling techniques that can not only enhance the performance of website, but also prevent unnecessary API calls and load on the server.

[Reference 1](https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript)
[Reference 2](https://css-tricks.com/debouncing-throttling-explained-examples/)

## Problem statement

- In most cases developer decides when and how many times a function needds to be called.
- But in some cases users are given this ability so the user decides when and how many times a function is called.
- For instance, functions attached to events like button click, mouse move, and window resize allow the user to decide when to execute them and how many times to do so.
- At times, users may perform these actions more frequently than it is required.
- This may not be good for the performance of the website, especially if the functions attached to these events perform some heavy computation.
- In such cases, where users have control over function execution, developers have to design some techniques to restrict the number of times users can execute the function.
- Debouncing and throttling techniques are used to limit the number of times a function can execute.

## Throttling

- Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

## Debouncing

- In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.
- The Debounce technique allow us to “group” multiple sequential calls in a single one.

## Implementation

- Debouncing and throttling are not something provided by JavaScript itself. They’re just concepts we can implement using the setTimeout web API. Some libraries like underscore.js and loadash provide these methods out of the box.
- Both throttling and debouncing can be implemented with the help of the setTimeout function.
