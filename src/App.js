import './App.css';

/* This is a Javascript (JS) comment */


function App() {
  return (
    <div className="App">
      {/* These comments are in but embedded in the HTML
            they must be surrounded by curly brackets {}
            and will only show up in the source code */}
      <header className="App-header">


        {/* <h1> is an html tag for headers.
            These range from <h1> to <h6> 
            <h1> is the largest,
            <h6> is the smallest
            Used for convenientformatting.
        */}
        <h1>Welcome TAMID Tech Track!</h1>
      </header>
      <div className="App-body">
        <div className="section" id="timeline">
          <h2 className="section-header">Our Weekly Timeline: </h2>

          <ol type="1"> {/* Ordered list <ol> type is numbers ("1")*/}
            <li><del>Intro to React (2-22-22)</del></li> {/* List item <li> and deleted (strikethrough) styling <del>*/}
            <li>APIs in React (3-1-22)</li>
            <li><strong>No Tech Track meeting</strong> (3-8-22)
              <ul> {/* Nested unordered list <ul> */}
                <li>Good luck on Midterms!</li>
              </ul>
            </li>
            <li><strong>Spring Break - No Meeting</strong> (3-15-22) </li>
            <li>Intro to Database - Firestore (3-22-22)</li>
            <li>Writing Custom API (3-29-22)
              <ul>
                <li>Introduce our project</li>
              </ul>
            </li>
            <br /> {/* Line break <br /> */}
            <li>... More to come ... </li>
          </ol>
        </div>
        <hr /> {/* Horizontal Rule <hr /> */}
        <div className="section" id="resources">
          <h2>Resources</h2>
          <div className="sub-section">
            <h3>React Videos</h3>
            <ul>
              <li><a href="https://youtu.be/Tn6-PIqc4UM">React in 100 Seconds</a></li>
              <li><a href="https://youtu.be/T3Px88x_PsA">Fetch Data from API in React.JS</a></li>
            </ul>
          </div>
          <div className="sub-section">
            <h3>Firebase</h3>
            <ul>
              <li><a href="https://youtu.be/DHjqpvDnNGE">Firebase in 100 Seconds</a></li>
            </ul>
          </div>
        </div>
        <div className="section" id="expansion">

        </div>
      </div>
    </div>
  );
}

export default App;
