const myLogger = (store) => (next) => (action) => {
  console.log(action) 
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달

  // 업데이트 이후의 상태 조회
  console.log('\t', store.getState()) // `\t`는 탭문자
  
  return result // 반환 값은 dispatch(action)의 결과물, 기본값은 undefined
}

export default myLogger;