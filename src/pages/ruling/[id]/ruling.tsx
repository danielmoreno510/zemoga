import React from 'react';
import { useRouter } from 'next/router';
import RulingDetails from '@/components/RulingDetails';
import { IRulingInitialState, IRulingListDispatchProps } from '@/types/rulings';
import LoadingIndicator from '@/components/common/LoadingIndicator';

const Ruling: React.FC<IRulingInitialState> = ({ rulingDetails }) => (
  rulingDetails ? <RulingDetails rulingDetails={rulingDetails} /> : <div>No data found</div>
);

const ListWithLoading = LoadingIndicator(Ruling);

const RulingWithLoading: React.FC<IRulingInitialState & IRulingListDispatchProps> = ({
  isFetchingRulingDetails,
  rulingDetails,
  getRulingDetails,
}) => {
  const router = useRouter();
  const [id, setId] = React.useState('');

  React.useEffect(() => {
    if (typeof router.query.id === 'string') {
      setId(router.query.id);
      getRulingDetails!(router.query.id);
    }
  }, [router.query.id, getRulingDetails]);
  return <ListWithLoading isLoading={!id || isFetchingRulingDetails!} rulingDetails={rulingDetails} />;
};

export default RulingWithLoading;
