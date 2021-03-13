import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_BYID_REQUEST,
  GET_USER_BYID_SUCCESS,
  GET_USER_BYID_FAILURE,
  UPDATE_USER_BYID_REQUEST,
  UPDATE_USER_BYID_SUCCESS,
  UPDATE_USER_BYID_FAILURE,
  DELETE_USER_BYID_REQUEST,
  DELETE_USER_BYID_SUCCESS,
  DELETE_USER_BYID_FAILURE,
} from "../actionTypes/user";
const initialState = {
  loading: false,
  item: "",
  items: [],
  error: "",
};
export function users(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case GET_USER_REQUEST:
      return {
        ...state,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        items: action.payload?.response,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case GET_USER_BYID_REQUEST:
      return {
        ...state,
      };
    case GET_USER_BYID_SUCCESS:
      return {
        ...state,
        item: action.payload?.response,
      };
    case GET_USER_BYID_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_USER_BYID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_BYID_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER_BYID_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case DELETE_USER_BYID_REQUEST:
      return {
        ...state,
        items: state.items.map((res) =>
          res._id === action.payload ? { ...res, loading: true } : res
        ),
        loading: true,
      };
    case DELETE_USER_BYID_SUCCESS:
      return {
        ...state,
        items: state.items.filter((res) => res._id !== action.payload),
        loading: false,
      };
    case DELETE_USER_BYID_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
