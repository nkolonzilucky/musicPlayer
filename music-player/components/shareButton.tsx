import type { NextPage } from 'next';
import Image from "next/image";



const ShareButton:NextPage = () => {
  	return (
    		<div className="w-full relative flex flex-row items-center justify-start gap-[0.256rem] text-left text-[1.371rem] text-white font-inter">
      			<Image className="w-[2.194rem] relative h-[2.194rem] overflow-hidden shrink-0" width={35} height={35} alt="" src="shareIcon.svg" />
      			<div className="relative font-semibold">Share</div>
    		</div>);
};

export default ShareButton;
