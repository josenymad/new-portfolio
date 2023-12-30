import React from "react";

const OriginalMusic = () => {
  return (
    <section className="text-center grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:grid-rows-1 gap-y-4">
      <iframe
        className="h-[515px] mx-auto shadow-2xl"
        src="https://bandcamp.com/EmbeddedPlayer/album=2812127603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://adhoc-records.bandcamp.com/album/dulcet-panoply">
          Dulcet Panoply by Nymad
        </a>
      </iframe>
      <iframe
        className="h-[515px] mx-auto shadow-2xl"
        src="https://bandcamp.com/EmbeddedPlayer/album=3771502757/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://nymad.bandcamp.com/album/ensemble">
          Ensemble by Nymad
        </a>
      </iframe>
      <iframe
        className="h-[515px] mx-auto shadow-2xl"
        src="https://bandcamp.com/EmbeddedPlayer/album=2070245364/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://nymad.bandcamp.com/album/3-ways-to-cure-a-soul">
          3 Ways To Cure A Soul by Nymad
        </a>
      </iframe>
      <iframe
        className="h-[515px] mx-auto shadow-2xl lg:max-2xl:col-span-3"
        src="https://bandcamp.com/EmbeddedPlayer/album=2600371896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://nymad.bandcamp.com/album/pace">Pace by Nymad</a>
      </iframe>
    </section>
  );
};

export default OriginalMusic;
