import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
//import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';


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


const mapStateToProps = state => { //mapStateToProps is telling me what state, what piece state I need to listen to, and send down as prop
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    //error: state.requestRobots.error

/*     searchField: state.searchField  //returns the searchField state with the part of the reduceer searchRobots.searchField that comes from our reducer
 */  }
}

const mapDispatchToProps = (dispatch) => { // mapDispatchToProps says hey tell me what props I should listen to that are actions that need to get dispatched.
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) //dispatch the action so the reducer be aware of it
  }
}
class App extends Component {
  /*    constructor() { constructor not needed anymore Because there's no more states these robots are now going to be returned as part of the props from onRequestRobots.
      super()
      this.state = {
        robots: [] //state
        // searchfield: ''  //we can delete it as it gets replaced by redux wich replace the states on the app or containers
      }
    } */


  componentDidMount() {
    this.props.onRequestRobots();
    /*  fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(users => { this.setState({ robots: users }) }); */ //not needed anymore because now we have all props in mapstatetoprops that we can use now because of higher order requestRobots action

  }

  // onSearchChange(event) {
  //   console.log(event.target.value);
  // } //it works but as soon as you apply this to work with searchfield state it points to the input in searchbox thats where event is happening! but we need it to point here to searchfield in app class!



  /*   onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }
   */ // onSearchChange is coming out as props so we dont need to declare it as a method of app


  render() {
    //const { robots /* searchfield */ } = this.state;
    const { robots, searchField, onSearchChange, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    console.log(filteredRobots);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={onSearchChange} /> {/*as all is inside app object class, you need to do this.whateverNAme*/}
            <Scroll>
              {isPending ? <h1>Loading</h1> :
                <ErrorBoundry>
                  <Cardlist robots={filteredRobots} /> {/*here robots is state but cardlist will receive as props*/}
                </ErrorBoundry>
              }
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


export default connect(mapStateToProps, mapDispatchToProps)(App);


