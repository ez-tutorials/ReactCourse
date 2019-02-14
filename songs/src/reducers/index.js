import { combineReducers } from 'redux';

// Reducers

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'No Scrubs2', duration: '3:01'},
        {title: 'Macarena2', duration: '1:30'},
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});