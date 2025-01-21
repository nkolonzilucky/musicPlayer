import type { NextPage } from 'next';
import Image from "next/image";



const CommentButton:NextPage = () => {
  	return (
    		<div className="flex items-center justify-center gap-1 text-left text-white bg-slate-950 py-2 px-3 rounded-3xl font-inter ">
      			<Image className="" width={29} height={29} alt="" src="/commentIcon.svg" />
      			<div className="font-semibold">113</div>
    		</div>);
};

export default CommentButton;
