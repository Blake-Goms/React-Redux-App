import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayer } from './actions';
import SearchPlayer from './components/SearchPlayer';
import './App.css';
import Loader from 'react-loader-spinner';

const App = props => {

  const search = char => {
    //dispatch an action here to search for a player
    props.fetchPlayer(char);
  };

  // const player = props => {
  //   const showPlayer = e => {
  //     e.preventDefault();
  //     props.playerInfo
  //   }
  // }
  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }

  return (
    <div className="App">
      <h1>This is Battlefield! 🔫</h1>
      <SearchPlayer search={search} />
      {props.playerInfo ? <p>{props.playerInfo}</p> : <p>Enter a player name</p> }
    </div>
  );
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  playerInfo: state.playerInfo
});
export default connect(
  mapStateToProps,
  { fetchPlayer }
)(App)
