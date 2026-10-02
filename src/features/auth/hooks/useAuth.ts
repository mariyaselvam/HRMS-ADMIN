import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { setCredentials, logout } from '@/store/slices/authSlice';
import { loginApi } from '../api/auth.api';
import type { LoginFormData } from '../schemas/login.schema';
import { AppRoutes } from '@/enums/routes.enum';

export const useLoginMutation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginFormData) => loginApi(data),
    onSuccess: (response) => {
      if (response.success && response.data) {
        dispatch(
          setCredentials({
            user: response.data.user,
            token: response.data.token,
          })
        );
        navigate(AppRoutes.DASHBOARD);
      }
    },
  });
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return () => {
    dispatch(logout());
    navigate(AppRoutes.LOGIN);
  };
};
