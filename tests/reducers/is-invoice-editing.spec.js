
import reducer, { initialState } from '../../app/reducers/ui/is-invoice-editing';
import { IS_INVOICE_EDITING } from '../../app/actions';

describe('reducers', () => {

  describe('ui.is-invoice-editing', () => {

    describe('initialState', () => {

      it('should be false', () => {
        expect(initialState).to.be.false;
      });

    });

    describe('case IS_INVOICE_EDITING', () => {

      it('should toggle boolean', () => {

        let state = initialState;

        expect(reducer(initialState, { type: 'IS_INVOICE_EDITING' }))
          .to.equal(!state);

      });

    });

    describe('case @@router/LOCATION_CHANGE', () => {

      it('should return initialState', () => {

        expect(reducer(initialState, { type: '@@router/LOCATION_CHANGE' }))
          .to.equal(initialState);

      });

    });

    it('should return the initialState', () => {

      expect(reducer(undefined, {}))
        .to.equal(initialState);

    });

  });

});
