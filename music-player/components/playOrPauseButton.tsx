import type { NextPage } from 'next';
import Image from "next/image";



const PlayButton:NextPage = () => {
  	return (
    		<Image className="w-full relative h-[12.5rem] overflow-hidden shrink-0" width={200} height={200} alt="" src="playButton.svg" />);
};

export default PlayButton;
