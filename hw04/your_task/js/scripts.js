const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term, artistToTracksFlag = false);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
        
    }
}

const getTracks = (term, artistToTracksFlag, albumToTracksFlag, ev) => {
    
    if (term) {
        console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
        fetch(`https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}&limit=5`)
            .then(response => response.json())
            .then(data => {
                
                document.querySelector('#tracks').innerHTML = ''

                for (const track of data) {
                    let template = '';
                    if (!track.preview_url) {
                        template = 
                        `<section class="track-item preview" data-preview-track=${track.preview_url}">
                            <img src=${track.album.image_url}>
                            <div class="label">
                                <h3>${track.name}</h3>
                                <p>
                                    ${track.artist.name} - No Preview Available
                                </p>
                            </div>
                        </section>`
                    } else {
                        template = `
                        <section class="track-item preview" data-preview-track=${track.preview_url} onclick="playSong(event)">
                            <img src=${track.album.image_url}>
                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                            <div class="label">
                                <h3>${track.name}</h3>
                                <p>
                                    ${track.artist.name}
                                </p>
                            </div>
                        </section>`
                    }
                    document.querySelector('#tracks').innerHTML += template;
                    console.log(track)
                }
            })
    } else if (artistToTracksFlag) {
        const artistId = document.querySelector("#artist .artist-card").getAttribute('id')
        let url = `https://www.apitutor.org/spotify/v1/artists/${artistId}/top-tracks?country=us`
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.tracks)
                document.querySelector('#tracks').innerHTML = ''

                for (const track of data.tracks.slice(0,5)) {
                    let template = '';
                    if (!track.preview_url) {
                        template = 
                        `<section class="track-item preview" data-preview-track=${track.preview_url}">
                            <img src=${track.album.images[0].url}>
                            <div class="label">
                                <h3>${track.name}</h3>
                                <p>
                                    ${track.artists[0].name} - No Preview Available
                                </p>
                            </div>
                        </section>`
                    } else {
                        template = `
                        <section class="track-item preview" data-preview-track=${track.preview_url} onclick="playSong(event)">
                            <img src=${track.album.images[0].url}>
                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                            <div class="label">
                                <h3>${track.name}</h3>
                                <p>
                                    ${track.artists[0].name}
                                </p>
                            </div>
                        </section>`
                    }
                    document.querySelector('#tracks').innerHTML += template;
                    console.log(track)
                }
            })
    } else if (albumToTracksFlag) {
        const elem = ev.currentTarget.getElementsByTagName('img')[0]
        const img_src = elem.src
        
        
        console.log(ev.currentTarget.getAttribute('id'))

        const artistId = ev.currentTarget.getAttribute('id')
        let url = `https://www.apitutor.org/spotify/v1/albums/${artistId}/tracks`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("hi")
                console.log(data.items)
                document.querySelector('#tracks').innerHTML = ''
                for (const track of data.items) {
                    
                    if (!track.preview_url) {
                        template =
                        `<section class="track-item preview" data-preview-track=${track.preview_url}">
                            <img src = ${img_src}>
                            <div class = "label">
                                <h3>${track.name}</h3>
                                <p>
                                    ${track.artists[0].name} - No Preview Available 
                                </p>
                            </div>
                        </section>`
                    } else {
                        template = `
                        <section class="track-item preview" data-preview-track=${track.preview_url} onclick = "playSong(event)">
                            <img src = ${img_src}>
                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                            <div class = "label">
                                <h3>${track.name}</h3>
                                <p>
                                    ${track.artists[0].name} 
                                </p>
                            </div>
                        </section>`
                    }
                    document.querySelector('#tracks').innerHTML += template;
                }
            })

    }
}

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
    
    fetch(`https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}&limit=10`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#albums').innerHTML = '';
            for (const album of data) {
                template = `<p>${album.name}</p>`;
                template = `
                <section class="album-card" id = ${album.id} onclick="albumToTracks(event)">
                    <div>
                        <img src=${album.image_url}>
                        <h3>${album.name}</h3>
                        <div class="footer">
                            <a href="https://open.spotify.com/album/${album.id}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`
                document.querySelector('#albums').innerHTML += template;

                
            }
        })
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
        fetch(`https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}&limit=1`)
        // Fetch makes a contect with the server
        // After it makes a contact with the server ,we need to pull down the JSON associated with the body
            .then(response => response.json())
        //Then we will use the data from that json
        .then(data => {
            //do something with the data
            console.log(data);
            document.querySelector('#artist').innerHTML = '';
            for (const artist of data) {
                template = 
                `<section class="artist-card" id=${artist.id} onclick="artistToTracks(event)">
                    <div>
                        <img src=${artist.image_url}>
                        <h3>${artist.name}</h3>
                        <div class="footer">
                            <a href="https://open.spotify.com/artist/${artist.id}" target = "_blank">
                            view on spotify
                            </a>
                        </div>
                    </div>
                </section>`
                
                document.querySelector('#artist').innerHTML += template;
            }
        }
        
        )
        

    
};
const playSong = (ev) => {
    // console.log(ev.currentTarget.dataset.preview_url)
    const elem = ev.currentTarget
    //preview_url (themp3) has been stashed in the "data-preview-track" attribute.
    // we need to get that attribute out
    
    const previewURL = elem.dataset.previewTrack;

    if (previewURL) {
        console.log(previewURL)
        console.log(document.querySelector('#track').src)
        if (document.querySelector('#track').src != previewURL) {
            audioPlayer.setAudioFile(previewURL)
            console.log("audio changed. new song set")
        }
        
        audioPlayer.togglePlay()
        
        // const audioPlayer = AudioPlayer('.player', previewURL);
        
        document.querySelector('footer .track-item').innerHTML = elem.innerHTML;
    } else {
        console.log("no audio file")
    }
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};
// Extra Credit 1: 
// Add an event handler to the artist card so that when you click on it, the tracks in the 
// #tracks section are replaced by the artist's top tracks.
const artistToTracks = (ev) => {
    getTracks('', artistToTracksFlag=true, albumToTracksFlag = false, ev)

}

//Extra Credit 2:
// Add an event handler to each album card so that when you click the album, the tracks in the #tracks section are replaced
// by the album's tracks.

const albumToTracks = (ev) => {
    getTracks('', artistToTracksFlag = false, albumToTracksFlag = true, ev)
}

//Extra Credit 3:
// modifiy the track template so that if there is no audio preview avilable, you don't ge tthe option to play the track. Note: to test, search for billie....
// ANS: Just create an IF/ELSE Statement and take out 'onclick = playSong()'. There would be no onclick action for tracks with no audio preview available.


// Extra Credit 4:
// Figure out a way to hide the audio player unless the user has requested to listen to the track
// (by clicking on a track)


// Extra Credit 5:
// Implement a way to play and pause a track by clicking on the track listing

// Extra Credit 6:
// Integrate data from Twitter or YouTube, and render some stylized content below the albums
