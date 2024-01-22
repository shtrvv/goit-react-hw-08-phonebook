import { Suspense, lazy, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom"
import { refreshThunk } from "../redux/auth/authOperations";
import { selectUser } from "../redux/auth/selectors";
import { selectIsLoading } from "../redux/root/selectors";
import { Vortex } from "react-loader-spinner";

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const PrivateRoute = lazy(() => import('guards/PrivateRoute'));
const PublicRote = lazy(() => import('guards/PublicRoute'))
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const App = () => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    !user && dispatch(refreshThunk())
  }, [user, dispatch])
  
  return (
    <>
      {isLoading && <Vortex
        visible={true}
        height="150"
        width="150"
        ariaLabel="vortex-loading"
        wrapperClass="vortex-wrapper"
        colors={['#5a4486', '#9370DB', '#8A2BE2', '#9932CC', '#BA55D3', '#8B008B']}
        />}
      <Suspense>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<PublicRote>
              <HomePage />
            </PublicRote>} />
            <Route path='/login' element={<PublicRote>
              <LoginPage />
            </PublicRote>} />
            <Route path='/register' element={<PublicRote>
              <RegisterPage />
            </PublicRote>} />
            <Route path='/contacts' element={<PrivateRoute>
              <ContactsPage />
            </PrivateRoute>} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
