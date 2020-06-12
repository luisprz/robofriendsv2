import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <Fragment className='tc'>
//           <h1>Robofriends</h1>
//           <SearchBox />
//           <Cardlist robots={robots} />
//         </Fragment>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Luis Perez
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots, //state
      searchfield: ''
    }
  }

  // onSearchChange(event) {
  //   console.log(event.target.value);
  // } //it works but as soon as you apply this to work with searchfield state it points to the input in searchbox thats where event is happening! but we need it to point here to searchfield in app class!

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    console.log(filteredRobots);
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <div className='tc'>
              <h1>Robofriends</h1>
              <SearchBox searchChange={this.onSearchChange} /> {/*as all is inside app object class, you need to do this.whateverNAme*/}
              <Scroll>
                <ErrorBoundry>
                  <Cardlist robots={filteredRobots} /> {/*here robots is state but cardlist will receive as props*/}
                </ErrorBoundry>
              </Scroll>
            </div>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='tc bg-black dib br3 pa3 ma2 grow shadow-3'>
                Luis Perez
            </div>
            </a>
          </header>
        </div>
      );
  }
}


export default App;


