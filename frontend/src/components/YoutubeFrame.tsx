import YouTube, { YouTubeProps } from "react-youtube";

type Props = {
  embedId: string;
};

const YoutubeFrame = ({ embedId }: Props) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={embedId} opts={opts} onReady={onPlayerReady} />;
};

export default YoutubeFrame;
