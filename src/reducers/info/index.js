import { SET_MESSAGE_INFO } from "../../utils/constants/info";

const initialState = { message: null };

const Info = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE_INFO: {
            return {
                ...state,
                message: action.message
            };
        }
        default:
            return state;
    }
};

export default Info;