export const getSongInfo = (playlistsongs, index = 0) => {
  let playlist = [];

  return new Promise((resolve, reject) => {
    function processData(index) {
      let audioFile = '/assets/media/' + playlistsongs[index]?.name;

      window.ID3.loadTags(audioFile, function () {
        const tags = window.ID3.getAllTags(audioFile);
        const { title, album, artist } = tags;
        var temp = { title, album, artist };
        temp.name = playlistsongs[index].name;

        playlist.push(temp);

        if (index < playlistsongs.length - 1) {
          processData(index + 1);
        } else {
          resolve(playlist);
        }
      });
    }
    processData(index);
  });
};
