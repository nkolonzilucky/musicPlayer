import CommentButton from '@/components/commentButton';
import CoverArtImage from '@/components/coverart';
import LikedislikeButton from '@/components/likeAndDislikeButton';
import SaveButton from '@/components/saveButton';
import ShareButton from '@/components/shareButton';
import TopNav from '@/components/topNav';

import type { NextPage } from 'next';



const SongViewToo:NextPage = () => {
  	return (
		<div className='flex flex-col items-center m-5 '>
			<div className="[background:linear-gradient(16.09deg,_#1c1b1b_2.63%,_#4f4d4d)] py-4 px-8 rounded-3xl">
			<TopNav />
			<CoverArtImage />
			<div className='flex gap-3 items-center justify-between mt-2'>
				<LikedislikeButton />
				<CommentButton />
				<SaveButton />
				<ShareButton />
			</div>
		</div>
		</div>
		);
};

export default SongViewToo;
