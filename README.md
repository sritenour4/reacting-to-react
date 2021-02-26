Reacting to React
Getting Started
Create a new project with Create React App.
Delete the src and public directory and all of its contents.
Create a new public directory and a new index.html file inside of public.
Use the ! emmet shortcut to generate a fresh html document in the index.html file. Place <div id="root"></div> in the <body> of the html document you created. (like we did in earlier videos!)
Create a new src directory and a components directory inside of src.
Create an App.jsx and a index.js file inside of src.
Write the basic "entry point" code for the index.js file, avoid copy/paste so you can practice writing it yourself!
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
 

You should now have a project structure that resembles the following:

node_modules/
public/
|- index.html
src/
|- components/
|- App.jsx
|- index.js
.gitignore
package-lock.json
package.json
README.md
 

Simple Tasks a la React
React is component-based, and each component should be separated into its own file. Start this exercise by going to your "App.jsx" file in your src directory. Then, code a function component named "App", and return a simple JSX element inside of that component (Hint: start with something obvious, like a <h1> element). Don't forget to export your App component at the bottom of the file!

Head to your terminal and start this React project with npm start. Make sure it renders your App component without any errors!

Each time you save your files while completing these tasks, check the terminal and browser for compilation errors, and pay attention to what they are telling you. For example, if something is "undefined", why does React think that? What should be defined, and where?

Make sure that the Chrome Developer Tools are open in your "localhost:3000" tab, and that you also have the React Developer Tools installed. You should be checking these as much as possible to not only troubleshoot these tasks, but to confirm your understanding of what you are doing. Note the React Developer tools will not activate unless they detect valid rendering React components. So if your terminal isn't running your React app with no errors, then they won't appear!

Make a new component file named Greeter.jsx inside of your src/components/ directory. Have this also be a simple function component that returns a header. It should receive two props: phrase and name. And it needs to take these two props and display them in the returned header of this component. Something like: {props.phrase}, {props.name}! so you wind up with an output in the header: Hello there, Luke! for example.

Render three Greeter components inside your App.jsx file. Remember to import your new component at the top of the file! Pass a different name and phrase to each of your Greeter components you're rendering.

Inspect each of the Greeter components in your React Dev Tools and notice how each one has the same two props, name and phrase but they all represent different values!

Next we're going to add a controlled react input. Remember that "pop quiz" from the videos/references? Well here it is! Add an input element into the return of your App.jsx below the three Greeter components. Code up a useState hook inside your App component and call the state variable "username" initializing it as a blank string. Add the value and onChange attributes to the input element to control this input with react state. Head to your browser, type into the input, and confirm in the React Dev Tools that your state for the input is updating with what you're typing.

For fun, add a <p> element below your <input /> element. Have the text of the <p> element render "You are logging in as: {username}` and display the same state tied to the input above. Notice how as you type into the input, the text of the paragraph will also update as the state changes!

We're going to set up a conditional render (hint) now. Code another useState and name this state variable "loaded" initializing it as false. Add an if statement above your current return statement, and have your if block return a different header that says "Website loading ..." in the case that loaded is false in value. Check the browser and notice how our old Greeter/input return is no longer there and now we see our conditional "loading" header.

Add a button below your "Website loading ..." header in the conditional. Add an onClick prop to the button that will toggle the state of loaded from false to true. Check the browser to confirm you can click the button, and toggle the conditional render to once again show your Greeter components and the input. Congrats! You can now toggle your very own conditional render! This may be a useful trick to know when some data needs to be retreived from a server for your website, for example.

Let's practice an effect next! Bring in and code a useEffect hook. Have this hook only run on changes to the loaded state using the depdendancy array shown in the references and walkthrough videos. This hook will set up a timer, that after 3 seconds, will toggle the loaded state if the button hasn't been clicked yet. Add the following code into your useEffect hook, and add your state setter function to update loaded to true!

setTimeout(() => {
  // your code here to update loaded state
}, 3000);
Check the browser now, and refresh your page if needed. Don't click your button, and confirm that after about 3 seconds, the state is toggled from the setTimeout inside of the useEffect and your conditional render changes. Awesome! This sort of simulates some aschronous code updating your state. Like fetching data from a server, for example.

 

Closing Remarks
So this particular lab doesn't build anything spectacularly amazing, but it does make you code a lot of the fundamental React features and tools you'll be using in future labs, and your own future React projects! Feel free to link Bootstrap in your index.html file and make it look and feel a bit nicer. The next lab, Chirper, however, is something really cool you're gonna build several times in this course. See you there!

Full Stack Development > OLd Lab: Reacting to React

Expand All
Still Working  All Finished
Reacting to React
Getting Started
Create a new project with Create React App.
Delete the src directory and all of its contents.
Create a new src directory and a new index.js file inside of src.
Create a new directory named components inside of src.
You should now have a project structure that resembles the following:

node_modules/
public/
src/
|- components/
|- index.js
.gitignore
package-lock.json
package.json
README.md
Before starting the following tasks, make sure that the Chrome Developer Tools are open in your "localhost:3000" tab, and that you also have the React Developer Tools installed. You should be checking these as much as possible to not only troubleshoot these tasks, but to confirm your understanding of what you are doing. Note the React Developer tools will not activate unless they detect valid rendering React components. So if your terminal isn't running your React app with no errors, then they won't appear!

Simple Tasks a la React
Each time you save your files while completing these tasks, check the terminal and browser for compilation errors, and pay attention to what they are telling you. For example, if something is "undefined", why does React think that? What should be defined, and where?
React is component-based, and each component should be separated into its own file. Start this exercise by creating an "App.jsx" component in your src/components directory. Then, create a functional component named "App", and define a simple JSX element inside of that component (Hint: start with something obvious, like a <h1> element). Then, return that element from the App component.

Try to render your new App component from index.js. What happens in your terminal and browser? Fix any issues that arise.

Now that you have your basic App component rendered in the browser through index.js, create a property of your choosing on App in index.js. The value for that property should be a string. Pass in your props to App and replace your original <h1> text with the property value you just passed in to the component. Your browser should now display the property value you passed into the component.

Time to convert your functional component into a class-based component. Without changing any actual content, comment out your functional App component and create a new class-based App component that renders the same props as the functional one did.

Now that your App is a class-based component, you can initialize state. Do that, and define a new property called "text" with some string as the value.

Your new component should display both values from props and state. (Hint: you have two options here - you can either concatenate these strings in the same pair of JSX curly braces, or you can place two sets of braces for each string. Your choice! Choose wisely.)

Add an input element to your App. Use the component's state to define its placeholder attribute. Add an "onChange" event to the input, and then handle the event to set a new property on the App's state that will be tied to the input's value attribute (pro tip: name this something appropriate considering it is an input event). Replace any "wrapping" divs with the <React.Fragment> tag. How does that change the ReactDOM? Why might that be important?

NOTE: Any methods you define on the class (i.e., between the constructor and render methods) should have this structure:

handleEvent(params) {
  // do something useful
}
HOWEVER: Any event handlers you define in JSX elements should use arrow notation (and the concise body syntax, where applicable):

onEvent={(params) => this.handleEvent(params)}
Add a button beneath that input. When clicked, the button should invoke a method defined on the class to toggle a "hasLoaded" state property, which has a default value of false.

Before you return your elements to be rendered, check whether or not the hasLoaded property is true. If it is, return the elements that you have already defined; otherwise, return a new heading with the text "Loading..." and a button beneath it that is identical to the one you created in step 8. What happens? Which React elements are displayed first, and why?

If you can answer the questions at the end of the previous task, you already have an intuitive understanding of the lifecycle of a React Component. Given this, you can start thinking about invoking methods when these lifecycle events take place. So, write a new method with the name componentDidMount, which will set the state property "hasLoaded" to true. Now what happens when the application re-renders? Which React elements are displayed first, and why?

Note: It is indeed correct if you don't see your "Loading..." button anymore. The lifecycle method will seemingly set some initial state values for you!
BONUS:

You should have three state properties at this point. Set the one that contains just a string (that was being used for your <h1> in the first few tasks) to the props value that you passed in to <App /> in step 3. Then, for the time being, remove the props parameters from the constructor and super methods. What happens?

Manually revert your state property back to a regular string. Now what happens? What's going on here?

Discussion
No questions have been asked for this activity
