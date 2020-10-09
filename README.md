This is 44th screencast, called "44. React Todo App: Phase 7"<br />
https://scrimba.com/course/glearnreact

ON App.js<br />

Let's make it so our checkbox can actually mark our todo as complete or incomplete!<br />
This challenge is a little more involved than some of the past ones. Check the comments in the code for some help on accomplishing this one<br />

Challenge: <br />
1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)<br />
&nbsp;&nbsp;&nbsp;&nbsp;
a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part<br />
2. Pass the method down to the TodoItem component<br />
3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function<br />

ON TodoItem.js<br />
Challenge: Style the completed todo items differently from the incomplete items.
