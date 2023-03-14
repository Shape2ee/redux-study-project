import Home from './pages/Home' 
import Detail from './pages/Detail'

interface Router {
  path: string;
  element: JSX.Element;
  label: string;
}

export const Routes: Router[] = [
  {
    path: '/',
    element: <Home />,
    label: '홈',
  },
  {
    path: '/detail',
    element: <Detail />,
    label: '디테일',
  },
]