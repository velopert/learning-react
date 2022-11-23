import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

const GET_USERS_PENDING = 'users/GET_USERS_PENDING';
const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'users/GET_USERS_FAILURE';

const GET_USER = 'users/GET_USER';
const GET_USER_SUCCESS = 'users/GET_USER_SUCCESS';
const GET_USER_FAILURE = 'users/GET_USER_FAILURE';

const getUsersPending = () => ({ type: GET_USERS_PENDING });
const getUsersSuccess = payload => ({ type: GET_USERS_SUCCESS, payload });
const getUsersFailure = payload => ({
  type: GET_USERS_FAILURE,
  error: true,
  payload
});

export const getUser = id => ({ type: GET_USER, payload: id });
const getUserSuccess = data => ({ type: GET_USER_SUCCESS, payload: data });
const getUserFailure = error => ({
  type: GET_USER_FAILURE,
  payload: error,
  error: true
});

export const getUsers = () => async dispatch => {
  try {
    dispatch(getUsersPending());
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch(getUsersSuccess(response));
  } catch (e) {
    dispatch(getUsersFailure(e));
    throw e;
  }
};

const getUserById = id =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

function* getUserSaga(action) {
  try {
    const response = yield call(getUserById, action.payload);
    yield put(getUserSuccess(response.data));
  } catch (e) {
    yield put(getUserFailure(e));
  }
}

export function* usersSaga() {
  yield takeEvery(GET_USER, getUserSaga);
}

const initialState = {
  users: null,
  loading: {
    users: false,
    user: false
  },
  error: {
    users: null,
    user: null
  }
};

function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        ...state,
        loading: { ...state.loading, users: true },
        error: { ...state.error, users: null }
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        users: action.payload.data
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        error: { ...state.error, users: action.payload }
      };
    case GET_USER:
      return {
        ...state,
        loading: { ...state.loading, user: true },
        error: { ...state.error, user: null }
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, user: false },
        user: action.payload
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, user: false },
        error: { ...state.error, user: action.payload }
      };
    default:
      return state;
  }
}

export default users;
