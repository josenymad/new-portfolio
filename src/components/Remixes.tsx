import React from "react";

const Remixes = () => {
  return (
    <section className="text-center grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:grid-rows-1 gap-y-4">
      <iframe
        className="h-[390px] mx-auto shadow-2xl"
        src="https://bandcamp.com/EmbeddedPlayer/track=1363618553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://salvatorecordova.bandcamp.com/track/else-nymad-remix">
          Else (nymad Remix) by Salvatore Cordova
        </a>
      </iframe>
      <iframe
        className="h-[420px] mx-auto shadow-2xl"
        src="https://bandcamp.com/EmbeddedPlayer/album=3423701945/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://adhoc-records.bandcamp.com/album/nymad-remixes">
          Nymad Remixes by Nymad
        </a>
      </iframe>
      <iframe
        className="h-[420px] mx-auto shadow-2xl"
        src="https://bandcamp.com/EmbeddedPlayer/album=469366242/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2430574877/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://adhoc-records.bandcamp.com/album/sable-blanc-present-perfect-ep">
          Sable Blanc - Present Perfect EP by Sable Blanc
        </a>
      </iframe>
      <iframe
        className="h-[420px] mx-auto shadow-2xl"
        src="https://bandcamp.com/EmbeddedPlayer/album=3545581887/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=637580540/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://interpolaterecords.bandcamp.com/album/airport-a-window-remixes">
          Airport / A Window Remixes by Codex
        </a>
      </iframe>
    </section>
  );
};

export default Remixes;
