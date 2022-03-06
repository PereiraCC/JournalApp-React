import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";


describe('UiActions tests', () => {

    test('All actions should execute correctly', () => {

        const setErrorAction = setError('HELP!!!!');

        expect( setErrorAction ).toEqual({
            type: types.uiSetError,
            payload: 'HELP!!!!'
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading(); 

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });

    });

});