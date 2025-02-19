import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { loadWebFonts } from 'styles/loadWebFonts';
import { useAuth } from 'utils/hooks/useAuth';
import PublicRoutes from 'routes/PublicRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';

import Toast from 'components/shared/Toast/Toast';
import Sonner from 'components/shared/Sonner/Sonner';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import SharedLayout from 'layouts/SharedLayout/SharedLayout';

// import HomePage from 'pages/HomePage';
import GooglePage from 'pages/GooglePage';
import SigninPage from 'pages/SigninPage';
const SignupPage = lazy(() => import('pages/SignupPage'));
const ForgotPage = lazy(() => import('pages/ForgotPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const ClusterPage = lazy(() => import('pages/ClusterPage'));
const ElementPage = lazy(() => import('pages/ElementPage'));
const GdrivePage = lazy(() => import('pages/GdrivePage'));

const App = () => {
  const { isRefreshing, isLoading } = useAuth();

  useEffect(() => {
    loadWebFonts();
  }, []);

  return (
    <>
      {!(isRefreshing || isLoading) && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route element={<PublicRoutes />}>
              <Route index element={<SigninPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="reset" element={<ForgotPage />} />
              <Route path="google" element={<GooglePage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="cluster" element={<ClusterPage />} />
              <Route path="element/:id" element={<ElementPage />} />
              <Route path="gdrive" element={<GdrivePage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}

      {(isRefreshing || isLoading) && <OvalLoader />}

      <Toast />
      <Sonner />
    </>
  );
};

export default App;
