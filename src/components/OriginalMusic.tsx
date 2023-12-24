import React from "react";

const OriginalMusic = () => {
  return (
    <section className="text-center">
      <iframe
        className="h-[500px] inline mx-4 w-1/5"
        src="https://bandcamp.com/EmbeddedPlayer/album=2600371896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://nymad.bandcamp.com/album/pace">Pace by Nymad</a>
      </iframe>
      <iframe
        className="h-[500px] inline mx-4 w-1/5"
        src="https://bandcamp.com/EmbeddedPlayer/album=2070245364/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://nymad.bandcamp.com/album/3-ways-to-cure-a-soul">
          3 Ways To Cure A Soul by Nymad
        </a>
      </iframe>
      <iframe
        className="h-[500px] inline mx-4 w-1/5"
        src="https://bandcamp.com/EmbeddedPlayer/album=3771502757/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://nymad.bandcamp.com/album/ensemble">
          Ensemble by Nymad
        </a>
      </iframe>
      <iframe
        className="h-[500px] inline mx-4 w-1/5"
        src="https://bandcamp.com/EmbeddedPlayer/album=2812127603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://adhoc-records.bandcamp.com/album/dulcet-panoply">
          Dulcet Panoply by Nymad
        </a>
      </iframe>
    </section>
  );
};

export default OriginalMusic;
