const INITIAL_STATE = {
    loading:true,
    collection: null,
};



const weatherReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'SET_CURRENT_DATA':
            return {
                collection: action.payload,
                loading:false
            };
        default:
            return state;
        }


};
export default weatherReducer;