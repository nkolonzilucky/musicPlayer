import type { NextPage } from 'next';
import Image from "next/image";



const SaveButton:NextPage = () => {
  	return (
    		<div className="w-full relative flex flex-row items-center justify-center gap-[0.393rem] text-left text-[1.316rem] text-white font-inter">
      			<Image className="w-[2.106rem] relative h-[2.106rem] overflow-hidden shrink-0" width={34} height={34} alt="" src="SaveIcon.svg" />
      			<div className="relative font-semibold">Save</div>
    		</div>);
};

export default SaveButton;
