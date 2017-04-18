import reducer, { initialState } from '../../app/reducers/ui/app';

import {
  APP_LOADING,
  APP_LOADING_SUCCEED,
  APP_LOADING_FAILED
} from '../../app/actions';

describe('reducers', () => {

  describe('ui.app', () => {

    describe('initialState', () => {

      it('should be an Object', () => {

        expect(initialState).to.be.a('Object');

      });

      it('should have property of loading', () => {

        expect(initialState).to.have.property('loading');

      });

      it('should have property of failed', () => {

        expect(initialState).to.have.property('failed');

      });

    });

    describe('case APP_LOADING', () => {

      it('should return the app state', () => {

        expect(reducer(initialState, { type: 'APP_LOADING' }))
          .to.deep.equal({
            ...initialState,
            loading: true,
            failed: false
          });

      });

    });

    describe('case APP_LOADING_SUCCEED', () => {

      it('should return the app state', () => {

        expect(reducer(initialState, { type: 'APP_LOADING_SUCCEED' }))
          .to.deep.equal({
            ...initialState,
            loading: false,
            failed: false
          });

      });

    });

    describe('case APP_LOADING_FAILED', () => {

      it('should return the app state', () => {

        expect(reducer(initialState, { type: 'APP_LOADING_FAILED' }))
          .to.deep.equal({
            ...initialState,
            loading: false,
            failed: true
          });

      });

    });

    it('should return the initialState', () => {

      expect(reducer(undefined, {})).to.equal(initialState);

    });

  });

});
