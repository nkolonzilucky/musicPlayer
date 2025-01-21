import type { NextPage } from 'next';
import Image from "next/image";



const TopNav:NextPage = () => {
  	return (
    		<div className="w-full relative h-[3.813rem] text-left text-[1.25rem] text-gray font-inter">
      			<Image className="absolute top-[0.75rem] left-[0rem] w-[2rem] h-[2rem] overflow-hidden" width={32} height={32} alt="" src="dropdownIcon.svg" />
      			<div className="absolute top-[0rem] left-[7.125rem] flex flex-row items-center justify-start">
        				<div className="w-[9.406rem] rounded-corner-full bg-darkslategray-200 h-[3.813rem] flex flex-row items-center justify-center py-[1rem] px-[2.437rem] box-border">
          					<div className="relative font-semibold">Video</div>
        				</div>
        				<div className="w-[9.406rem] rounded-corner-full bg-darkslategray-100 h-[3.813rem] flex flex-row items-center justify-center py-[1rem] px-[1.562rem] box-border ml-[-1.5rem]">
          					<div className="relative font-semibold">Song</div>
        				</div>
      			</div>
      			<div className="absolute top-[0.75rem] left-[28.375rem] flex flex-row items-center justify-start gap-[1.312rem]">
        				<Image className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0" width={32} height={32} alt="" src="screencast.svg" />
        				<Image className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0" width={32} height={32} alt="" src="userMenu.svg" />
      			</div>
    		</div>);
};

export default TopNav;
