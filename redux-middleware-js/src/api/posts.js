// n 초 동안 기다리는 프로미스 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n))

// 가짜 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어를 배워봅시다.',
    body: '리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠'
  },
  {
    id: 2,
    title: 'redux-thunk를 사용해봅시다.',
    body: 'redux-thunk를 사용해서 비동기 작업을 처리해봅시다.'
  },
  {
    id: 3,
    title: 'redux-saga도 사용해봅시다.',
    body: '나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거에요'
  },
]

export const getPosts = async () => {
  await sleep(500); // 0.5초 쉬고
  return posts; // posts 배열
}

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find(post => post.id === id) // id로 찾아서 반환
}