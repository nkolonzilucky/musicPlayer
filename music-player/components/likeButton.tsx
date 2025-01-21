import type { NextPage } from 'next';
import Image from "next/image";



const LikeButton:NextPage = () => {
  	return (
    		<div className="relative w-full flex flex-row items-center justify-start gap-[0.343rem] text-left text-[1.136rem] text-white font-inter">
      			<Image className="w-[1.819rem] relative h-[1.819rem] overflow-hidden shrink-0" width={29} height={29} alt="" src="LikeIcon.svg" />
      			<div className="relative font-semibold">558</div>
    		</div>);
};

export default LikeButton;
