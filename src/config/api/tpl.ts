import serviceAxios from '../../utils/axios';

export const saveTpl = (params) => {
  return serviceAxios({
    url: '/editor/tpl/save',
    method: 'post',
    params,
  });
};
export const login = (data) => {
  return serviceAxios({
    url: '/api/user/login',
    method: 'post',
    data,
  });
};
