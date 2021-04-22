import { useLocation } from 'react-router-dom';

export const usePathName = () => {
  const location = useLocation();
  const pathUrl = location.pathname
  const params = new URLSearchParams(useLocation().search);
  return {pathUrl,params}
}