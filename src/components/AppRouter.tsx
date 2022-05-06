import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import Error from '../pages/Error/Error';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    <Routes>
      {
        publicRoutes.map((route) => <Route exact={route.exact}
          path={route.path}
          key={route.path}
          element={route.component}/>)
      }
      {
        isAuth
          ? privateRoutes.map((route) => <Route exact={route.exact}
            path={route.path}
            key={route.path}
            element={route.component}/>)
          : null

      }

      <Route path="/error" element={<Error />}/>
      <Route path="*" element={<Navigate replace to="/error"/>}/>
    </Routes>

  );
};

export default AppRouter;
