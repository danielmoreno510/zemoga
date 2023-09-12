import InputSearch from "@/components/InputSelect";
import RulingCard from "@/components/RulingCard";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import { OPERATION, OPTIONS } from "@/types/inputs";
import {
  IRulingListDispatchProps,
  IRulingInitialState,
  IRuling,
} from "@/types/rulings";
import React from "react";

export const RulingList: React.FC<IRulingInitialState & IRulingListDispatchProps> = ({
  rulingList,
  option,
  changeOption,
  fetchVote,
}) => {
  const optionRuling = (value: OPTIONS) => changeOption!(value);
  const calculateVote = (operation: OPERATION, ruling: IRuling) => {
    const rulingUpdated: IRuling = rulingList!.find((currentRuling) => currentRuling.id === ruling.id)!;
    fetchVote!(operation, rulingUpdated);
  };

  return (
    <div>
      <div className="flex justify-end items-baseline">
        <InputSearch data-testid="inputSearch"  value={option!} setValue={optionRuling} />
      </div>
      <div className="card-list">
        {(rulingList || []).map((ruling) => (
          <RulingCard
            data-testid="rulingCard"
            ruling={ruling}
            key={ruling.name}
            view={option!}
            saveVote={(operation) => calculateVote!(operation, ruling)}
          />
        ))}
      </div>
    </div>
  );
};

const ListWithLoading = LoadingIndicator(RulingList);

const RulingListWithLoading: React.FC<
  IRulingInitialState & IRulingListDispatchProps
> = ({
  isFetchingRulingList,
  rulingList,
  option,
  getRulings,
  changeOption,
  fetchVote,
}) => {
  React.useEffect(() => {
    getRulings!();
  }, [getRulings]);

  return (
    <ListWithLoading
      isLoading={isFetchingRulingList!}
      option={option}
      rulingList={rulingList}
      changeOption={changeOption}
      fetchVote={fetchVote}
    />
  );
};

export default RulingListWithLoading;
