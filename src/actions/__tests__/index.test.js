import {saveComment} from "actions";
import {SAVE_COMMENT} from "actions/types";


describe('save Comment', () => {
    const EXPECTED_PAYLOAD = 'New Comment';
    it('has the correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);

    });

    it('has the correct payload', () => {
        const action = saveComment(EXPECTED_PAYLOAD);
        expect(action.payload).toEqual(EXPECTED_PAYLOAD);
    });
});