import type { NextPage } from 'next';
import Image from "next/image";



const ShareButton:NextPage = () => {
  	return (
    		<div className="flex items-center justify-start text-white px-4 py-2 bg-slate-950 rounded-3xl font-inter">
      			<Image className="" width={29} height={29} alt="" src="shareIcon.svg" />
      			<div className="relative font-semibold">Share</div>
    		</div>);
};

export default ShareButton;
