export const initialState = {
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};

export default dataReducer;

