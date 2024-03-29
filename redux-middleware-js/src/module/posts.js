import * as postsAPI from '../api/posts' // api/posts 안의 함수 모두 불러오기

/* 액션 타입 */
// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';


// thunk를 사용 할 때, 꼭 모든 액션들에 대하여 생성 함수를 만들 필요는 없습니다.
// 그냥 thunk 함수에서 바로 액션 객체를 만들어 주어도 괜찮습니다.

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS  }); // 요청 시작

  try {
    const posts = await postsAPI.getPosts(); // API 호출
    dispatch({ type: GET_POSTS_SUCCESS, posts }) // 성공
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e }) // 실패
  }
}

// thunk 함수에서도 파라미터를 받아와서 사용 할 수 있습니다.
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST })
  try {
    const post = await postsAPI.getPostById(id);
    dispatch({ type: GET_POST_SUCCESS, post })
  } catch (e) {
    dispatch({type: GET_POST_ERROR, error: e })
  }
}