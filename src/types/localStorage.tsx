import { IRuling } from "./rulings";

export enum KeysEnum {
  RulingList = 'RulingList',
  RulingDetails = 'RulingDetails',
}

export interface IStorageRulingDetails {
  expiry: number;
  data: IRuling;
}
