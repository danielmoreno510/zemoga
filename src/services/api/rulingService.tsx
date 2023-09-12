import { IRuling, IRulingListResponse } from '@/types/rulings';
import http from '../http';

/**
 * Get Ruling list from itunes.
 */
export const getRulingList = async (): Promise<IRulingListResponse> => {
  const { data } = await http.get('data');
  return data;
};


/**
 * Get Ruling details from itunes.
 */
export const getRulingDetails = async (id: string): Promise<IRulingListResponse> => {
    const { data } = await http.get(`data/${id}`);
    return data;
  };
  
/**
 * Save Ruling details from itunes.
 */
export const saveVote = async (ruling: IRuling): Promise<IRulingListResponse> => {
  const { data } = await http.put(`data/${ruling.id}`, ruling);
  return data;
};
