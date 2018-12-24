import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from "actions/types";

it('handles actions of type SAVE_COMMENT', () => {
   const fakeAction = {
       type: SAVE_COMMENT, payload: 'New Comment'
   };

   const newState = commentsReducer([], fakeAction);
   expect(newState).toEqual(['New Comment']);
});

it('handles actions with UNKNOWN type', () => {
    const newState = commentsReducer([], {type: 'ABCD'});
    expect(newState).toEqual([]);
});
