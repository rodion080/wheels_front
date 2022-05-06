import { Dispatch } from 'redux';
// import axios from 'axios';
import { MainAction, MainActionTypes } from '../type/main';

// eslint-disable-next-line import/prefer-default-export
export const fetchMain = () => async (dispatch: Dispatch<MainAction>) => {
  try {
    dispatch({ type: MainActionTypes.FETCH_MAIN });
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
    //   params: {
    //     _page: page,
    //     _limit: limit,
    //   },
    // });
    setTimeout(() => {
      dispatch({
        type: MainActionTypes.FETCH_MAIN_SUCCESS,
        payload: {
          lang: 'RU',
          center: {
            lat: 59.870829,
            lng: 30.392098,
          },
          zoom: 17,
        },
      });
    }, 1000);
  } catch (e) {
    dispatch({
      type: MainActionTypes.FETCH_MAIN_ERROR,
      payload: 'Error happened while main loading',
    });
  }
};

// export function setTodoPage(page: number) {
//   return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
// }
