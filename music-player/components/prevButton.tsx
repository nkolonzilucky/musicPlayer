import type { NextPage } from 'next';
import Image from "next/image";



const PrevButtonIcon:NextPage = () => {
  	return (
    		<Image className="w-full relative h-[3.125rem] overflow-hidden shrink-0" width={50} height={50} alt="" src="prevButton.svg" />);
};

export default PrevButtonIcon;
