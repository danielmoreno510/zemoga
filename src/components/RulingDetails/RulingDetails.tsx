import { IRuling } from '@/types/rulings';
import { useRouter } from 'next/router';

const PodcastDetails: React.FC<{rulingDetails: IRuling}> = ({ rulingDetails }) => {
  const router = useRouter();
  return (
    <div className='mt-40'>
      {rulingDetails.name}
    </div>
  );
};

export default PodcastDetails;
