import { FC } from "react";
import poster from "../../../../assets/images/poster.jpeg";
import Playbutton from "../../../../assets/svg/playButton.svg";
interface VideoContainerProps {
  height: string;
}
export const VideoContainer: FC<VideoContainerProps> = ({ height }) => {
  return (
    <div className="relative  w-full ">
      <video
        src=""
        style={{
          height,
          backgroundImage: `url(${poster})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full "
      />
      <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
        <button className="border-none outline-none">
          <img src={Playbutton} />
        </button>
      </div>
    </div>
  );
};
