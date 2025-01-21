import type { NextPage } from 'next';
import Image from "next/image";



const SaveButton:NextPage = () => {
  	return (
    		<div className="flex items-center justify-center gap-1 px-4 py-2 bg-slate-950 rounded-3xl text-white font-inter">
      			<Image className="" width={29} height={29} alt="" src="SaveIcon.svg" />
      			<div className="relative font-semibold">Save</div>
    		</div>);
};

export default SaveButton;
