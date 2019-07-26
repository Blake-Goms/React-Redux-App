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

  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }
  return (
    <div className="App">
      <h1>This is Battlefield! 🔫</h1>
      <SearchPlayer search={search} />
      {props.playerName ? <p>Username: {props.playerName }</p> : <p>Enter a player name to find their Platform, Rank, and Time Played</p> }
      {props.playerPlat ? <p>Platform: {props.playerPlat }</p> : null }
      {props.playerRank ? <p>Rank: {props.playerRank }</p> : null }
      {props.playerTime ? <p>Time Played: {props.playerTime }</p> : null }
    </div>
  );
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  playerName: state.playerName,
  playerPlat: state.playerPlat,
  playerRank: state.playerRank,
  playerTime: state.playerTime
});
export default connect(
  mapStateToProps,
  { fetchPlayer }
)(App)
