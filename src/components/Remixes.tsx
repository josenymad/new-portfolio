import React from "react";

const Remixes = () => {
  return (
    <section className="text-center">
      <iframe
        className="h-[500px] inline mx-4 w-1/5"
        src="https://bandcamp.com/EmbeddedPlayer/track=1363618553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://salvatorecordova.bandcamp.com/track/else-nymad-remix">
          Else (nymad Remix) by Salvatore Cordova
        </a>
      </iframe>
      <iframe
        className="h-[500px] inline mx-4 w-1/5"
        src="https://bandcamp.com/EmbeddedPlayer/album=3423701945/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://adhoc-records.bandcamp.com/album/nymad-remixes">
          Nymad Remixes by Nymad
        </a>
      </iframe>
      <iframe
        className="h-[500px] inline mx-4 w-1/5"
        src="https://bandcamp.com/EmbeddedPlayer/album=3545581887/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/track=637580540/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://interpolaterecords.bandcamp.com/album/airport-a-window-remixes">
          Airport / A Window Remixes by Codex
        </a>
      </iframe>
      <iframe
        className="h-[500px] inline mx-4 w-1/5"
        src="https://bandcamp.com/EmbeddedPlayer/album=469366242/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/track=2430574877/transparent=true/"
        seamless
        title="Bandcamp Music Player"
      >
        <a href="https://adhoc-records.bandcamp.com/album/sable-blanc-present-perfect-ep">
          Sable Blanc - Present Perfect EP by Sable Blanc
        </a>
      </iframe>
    </section>
  );
};

export default Remixes;
