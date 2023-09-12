import { createSelector } from 'reselect';
import { IRuling, IRulingListStateProps } from '@/types/rulings';
import { percentage } from '@/utils/percentUtil';

const selectRulingList = (state: IRulingListStateProps) => state.rulings.rulingList!;

export const getRulingList = createSelector(
  [selectRulingList],
  (rulingList: IRuling[]) => {
    return rulingList.map(ruling => {
      const percent = percentage(ruling.votes.positive, ruling.votes.negative)
      return {...ruling, percent}
    })
  },
);
