import type { NextPage } from 'next';
import Image from "next/image";



const CommentButton:NextPage = () => {
  	return (
    		<div className="w-full relative flex flex-row items-center justify-center py-[0rem] px-[0.406rem] box-border gap-[0.406rem] text-left text-[1.344rem] text-white font-inter">
      			<Image className="w-[2.15rem] relative h-[2.15rem] overflow-hidden shrink-0 object-contain" width={34} height={34} alt="" src="commentIcon.svg" />
      			<div className="relative font-semibold">113</div>
    		</div>);
};

export default CommentButton;
