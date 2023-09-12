import { OPERATION, OPTIONS } from '@/types/inputs';
import {mapStateToProps, mapDispatchToProps} from '../rulingListContainer';
import { RULINGS } from '@/redux/actions/types';
import db from "../../../../db.json"

describe('GIVEN Shoe container mapStateToProps() is defined', () => {
  describe('WHEN mapStateToProps is called with mockState', () => {
    const props = {
        isFetchingRulingList: false,
        rulingList: [],
        option: OPTIONS.GRID,
    };

    const mockState = {
        rulings: {...props},
    };

    it('THEN return needed props', () => {
      expect(mapStateToProps(mockState)).toEqual(props);
    });
  });

  describe('WHEN the getRulings action is called', () => {
    it('THEN make a dispatch to FETCH_RULING_LIST action', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).getRulings!();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: RULINGS.FETCH_RULING_LIST,
      });
    });
  });

  describe('WHEN the changeOption action is called', () => {
    it('THEN make a dispatch to FETCH_RULING_LIST action', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).changeOption!(OPTIONS.GRID);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: RULINGS.PUT_OPTION_RULING_LIST,
        option: OPTIONS.GRID
      });
    });
  });

  describe('WHEN the fetchVote action is called', () => {
    it('THEN make a dispatch to FETCH_RULING_LIST action', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).fetchVote!(OPERATION.ADD, db.data[0]);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: RULINGS.FETCH_RULING_OPERATION,
        operation: OPERATION.ADD,
        ruling: db.data[0]
      });
    });
  });
});