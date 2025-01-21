import type { NextPage } from 'next';
import Image from "next/image";



const CoverArtImage:NextPage = () => {
  	return (
    		<Image className="relative rounded-2xl overflow-hidden object-cover mt-8" width={551} height={543} alt="" src="/coverArt.png" />);
};

export default CoverArtImage;
