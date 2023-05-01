import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, IS_LOADING, UPDATE_PRODUCT,ADD_PRODUCT_SUCCESS,GET_PRODUCT_SUCCESS } from "../constant/actionTypes";

const initialState = {
    Products: [],
    Product: null,
    isLoading: false,
    isEdit: false,
    totalPrice: 0,
    addSuccess : false
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_PRODUCT:
            return state
            break;

        case GET_PRODUCTS:
            return {
                ...state,
                Products: action.payload,
                isLoading: false,
                isEdit: false,
                Product: null
            }
            break;

        case GET_PRODUCT:
            return {
                ...state,
                Product: action.payload,
                isLoading: true,
                isEdit: true
            }
            break;

        case IS_LOADING:
            return {
                ...state,
                addSuccess:false,
                isLoading: true
            }
            break;
        case UPDATE_PRODUCT:
            return {
                ...state,
                addSuccess:false,
                isEdit: false
            }
            break;
        case DELETE_PRODUCT:
            return {
                ...state,
                addSuccess:false,
                isLoading: false
            }
            break;

        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                addSuccess: true
            }
            break;

        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isEdit: false,
                addSuccess: false,
                Products: action.payload,
                totalPrice: action.payload.reduce((acc, curVal) => {
                    return acc + parseInt(curVal.price);
                }, 0)
            }
            break;
        default:
            return state;
            break;
    }
}

export default productReducer