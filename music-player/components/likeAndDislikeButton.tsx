import type { NextPage } from 'next';
import Image from "next/image";



const LikedislikeButton:NextPage = () => {
  	return (
    		<div className="flex items-center text-left text-white w-min px-4 py-2 bg-slate-950 rounded-3xl font-inter">
      			<div className="flex flex-row items-center justify-start gap-[0.343rem]">
        				<div className="flex items-center justify-start gap-[0.343rem]">
          					<Image className="w-[1.819rem] relative h-[1.819rem] overflow-hidden shrink-0" width={29} height={29} alt="" src="LikeIcon.svg" />
          					<div className="relative font-semibold">558</div>
        				</div>
        				<Image className="w-[1.819rem] relative h-[1.819rem] overflow-hidden shrink-0" width={29} height={29} alt="" src="Frame.svg" />
      			</div>
      			<Image className="w-[1.819rem] relative h-[1.819rem] overflow-hidden shrink-0" width={29} height={29} alt="" src="dislikeIcon.svg" />
    		</div>);
};

export default LikedislikeButton;
