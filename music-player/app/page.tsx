import CommentButton from '@/components/commentButton';
import CoverArtImage from '@/components/coverart';
import EndTime from '@/components/endTime';
import LikedislikeButton from '@/components/likeAndDislikeButton';
import PlayButton from '@/components/playOrPauseButton';
import PrevButtonIcon from '@/components/prevButton';
import Line from '@/components/progressLine';
import RepeatButtonIcon from '@/components/repeatButton';
import SaveButton from '@/components/saveButton';
import ShareButton from '@/components/shareButton';
import ShuffleButtonIcon from '@/components/shuffleButton';
import NextButtonIcon from '@/components/skipButton';
import Titleartist from '@/components/songMetadata';
import StartTime from '@/components/startTime';
import Line2 from '@/components/staticLine';
import TopNav from '@/components/topNav';

import type { NextPage } from 'next';



const SongViewToo:NextPage = () => {
  	return (
		<div className='flex flex-col items-center m-5 '>
			<div className="[background:linear-gradient(16.09deg,_#1c1b1b_2.63%,_#4f4d4d)] py-4 px-8 rounded-3xl">
			<TopNav />
			<CoverArtImage />
			<Titleartist />
			<div className='flex gap-3 items-center justify-between mt-4'>
				<LikedislikeButton />
				<CommentButton />
				<SaveButton />
				<ShareButton />
			</div>
			<div className=' flex gap-3 mt-8'>
				<progress className='w-full' id="seek-obj" max={100} value={70}>70</progress>
			</div>
				<div className='flex justify-between mt-1'>
					<StartTime />
					<EndTime />
				</div>
			<div className='flex items-center justify-between mt-4'>
				<ShuffleButtonIcon />
				<PrevButtonIcon />
				<PlayButton />
				<NextButtonIcon />
				<RepeatButtonIcon />
			</div>
		</div>
		</div>
		);
};

export default SongViewToo;
