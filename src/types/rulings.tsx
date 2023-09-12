import { RULINGS } from "@/redux/actions/types";
import { CallEffect, PutEffect } from "redux-saga/effects";
import { OPERATION, OPTIONS } from "./inputs";

export interface IRulingListResponse {
  data: IRuling[];
}

export interface IRuling {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  };
  percent?: {
    positive: number;
    negative: number;
  };
}

export type TRulingEffect =
  | PutEffect<{ type: string }>
  | CallEffect<IRulingListResponse>;

export interface IRulingInitialState {
  isFetchingRulingList?: boolean;
  rulingList?: IRuling[];
  option?: OPTIONS;
  isFetchingRulingDetails?: boolean;
  rulingDetails?: IRuling | null;
}

export interface IRulingReducer {
  type: RULINGS;
  rulingList?: IRuling[];
  option?: OPTIONS;
  id?: string;
  rulingDetails?: IRuling | null;
  operation?: string;
  ruling?: IRuling;
}

export interface IRulingListStateProps {
  rulings: IRulingInitialState;
}

export interface IRulingListDispatchProps {
  getRulings?: () => any;
  changeOption?: (option: OPTIONS) => void;
  getRulingDetails?: (id: string) => void;
  fetchVote?: (operation: OPERATION, ruling: IRuling) => void;
}

export interface IRulingCard {
  ruling: IRuling;
  view: OPTIONS;
  saveVote: (operation: OPERATION) => void;
}
