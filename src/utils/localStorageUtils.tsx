import { KeysEnum } from '@/types/localStorage';
import { IRuling } from '@/types/rulings';

export function setWithExpiry(value: any) {
  return { data: value, expiry: new Date().setDate(new Date().getDate() + 1) };
}

export const setRulingListStore = (value: IRuling[]) => {
  const item = setWithExpiry(value);
  localStorage.setItem(KeysEnum.RulingList, JSON.stringify(item));
};

export const setRulingDetailsStore = (value: IRuling) => {
  localStorage.setItem(KeysEnum.RulingDetails, JSON.stringify(value));
};

export const getRulingListStore = (): IRuling[] | null => {
  const RulingListString: string | null = localStorage.getItem(KeysEnum.RulingList);
  if (RulingListString && JSON.parse(RulingListString).expiry > new Date().getDate()) {
    return JSON.parse(RulingListString).data;
  }
  return null;
};

export const getRulingDetailsStore = (): IRuling | null => {
  const rulingDetails: string | null = localStorage.getItem(KeysEnum.RulingDetails);
  if (rulingDetails && JSON.parse(rulingDetails).expiry > new Date().getDate()) {
    return JSON.parse(rulingDetails).data;
  }
  return null;
};
