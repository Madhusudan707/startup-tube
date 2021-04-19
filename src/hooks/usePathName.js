import { useLocation } from 'react-router-dom';

export const usePathName = () => {
  const location = useLocation();
  const pathUrl = location.pathname
  return {pathUrl}
}