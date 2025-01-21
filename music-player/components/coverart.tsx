import type { NextPage } from 'next';
import Image from "next/image";



const CoverArtImage:NextPage = () => {
  	return (
    		<Image className="w-full relative rounded-2xl max-w-full overflow-hidden h-[33.938rem] object-cover" width={551} height={543} alt="" src="coverArt.png" />);
};

export default CoverArtImage;
