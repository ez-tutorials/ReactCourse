// import named export
import { combineReducers } from 'redux';

// Reducers 1
// returns a static list of songs
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'No Scrubs2', duration: '3:01' },
    { title: 'Macarena2', duration: '1:30' }
  ];
};

// Reducer 2
// return payload according action type
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
