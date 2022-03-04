import './App.css';
import React from 'react';

/* This is a Javascript (JS) comment */


class NavBar extends React.Component {
  render() {
    return <header className="App-header">
      {/* <h1> is an html tag for headers.
        These range from <h1> to <h6> 
        <h1> is the largest,
        <h6> is the smallest
        Used for convenientformatting.
      */}
      <h1>Welcome TAMID Tech Track!</h1>
    </header>;
  }
}

/* function is equivalent to class ____ extends React.Component */
function MainSectionHeader(props) {
  return <div className="section-header">
    <h2>{props.title}</h2>
  </div>;
}

function MainSectionList(props) {
  const items = props.items;
  const listItems = items.map((item) =>
    <li>{item}</li>
  );
  return <ol>{listItems}</ol>;
}

class HomepageTimeline extends React.Component {
  render() {
    return <div className="section" id="timeline">
      <MainSectionHeader title="Weekly Timeline:" /> {/* Components can accept props as arguments */}
      <MainSectionList items={timeline_items} /> {/* Props can be Javascript objects, such as arrays */}
    </div>;
  }
}

const timeline_items = ["Intro to React (2-22-22)", "APIs in React (3-1-22)", "No Tech Track meeting (3-8-22)",
  "Spring Break - No Meeting (3-15-22)", "Intro to Database - Firestore (3-22-22)", "Writing Custom API (3-29-22)",
  "... More to come ..."];

function App() {
  return (
    <div className="App">

      {/* These comments are in but embedded in the HTML
            they must be surrounded by curly brackets {}
            and will only show up in the source code */}

      <NavBar /> {/* NavBar is our first custom React Component */}

      <div className="App-body">

        <HomepageTimeline /> {/* Insert a component that has many other components inside (redundant or easy to read?) */}

        <hr /> {/* Horizontal Rule <hr /> */}

        {/* Compare the code below with the better, shorter, modular code above */}
        <div className="section" id="resources">
          <MainSectionHeader title="Resources" />
          <div className="sub-section">
            <h3>Our Source Code</h3>
            <ul>
              <li><a href="https://github.com/jaredgonzales/TAMID-Columbia">TAMID-Columbia Github Repo</a></li>
            </ul>
          </div>
          <div className="sub-section">
            <h3>React</h3>
            <ul>
              <li>Video: <a href="https://youtu.be/Tn6-PIqc4UM">React in 100 Seconds</a></li>
              <li>Video: <a href="https://youtu.be/T3Px88x_PsA">Fetch Data from API in React.JS</a></li>
              <li>Article: <a href="https://reactjs.org/docs/state-and-lifecycle.html">React State and Lifecycle</a></li>
            </ul>
          </div>
          <div className="sub-section">
            <h3>APIs</h3>
            <ul>
              <li>Article: <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON">Working with JSON</a></li>
            </ul>
          </div>
          <div className="sub-section">
            <h3>Firebase</h3>
            <ul>
              <li>Video: <a href="https://youtu.be/DHjqpvDnNGE">Firebase in 100 Seconds</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
