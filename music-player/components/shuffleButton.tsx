import type { NextPage } from 'next';
import Image from "next/image";



const ShuffleButtonIcon:NextPage = () => {
  	return (
    		<Image className="w-full relative h-[3.125rem] overflow-hidden shrink-0" width={50} height={50} alt="" src="shuffleButton.svg" />);
};

export default ShuffleButtonIcon;
