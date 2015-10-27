NowPlaying = function(api, user, interval) {
    this.api = api;
    this.user = user;

    /* AutoUpdate frequency - Last.fm API rate limits at 1/sec */
    this.interval = interval || 5;
};
NowPlaying.prototype = {

    display: function(track)
    {
        $('#cover').html(track.cover);
        $('#artist').html(track.artist);
        $('#track').html(track.name);
    },

    update: function()
    {
        this.api.getNowPlayingTrack(
            this.user,
            jQuery.proxy(this.handleResponse, this),
            function(error) { console && console.log(error); }
        );
    },

    autoUpdate: function()
    {
        // Do an immediate update, don't wait an interval period
        this.update();

        // Try and avoid repainting the screen when the track hasn't changed
        setInterval(jQuery.proxy(this.update, this), this.interval * 1000);
    },

    handleResponse: function(response)
    {
        if (response) {
            this.display({
                // The API response can vary depending on the user, so be defensive
                cover: '<a href="' + response.url + '"><img src="' + response.image[2]['#text'] + '" alt="' + response.artist['#text'] + '—' + response.name + '" class="media__img img__sm"></a>',
                artist: '<span class="h3 p-0-bottom">' + response.artist['#text'] || response.artist.name + '</span>',
                name: '<a href="' + response.url + '">' + response.name + '</a>'
            });
        }
        else {
            this.display({artist: 'No tracks currently playing :(', name: ''});
        }
    }
};
