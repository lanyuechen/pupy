import { request } from 'umi';

export type LoginParamsType = {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
  type: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  if (params.username === 'admin' && params.password === 'admin') {
    return {
      status: 'ok',
      type: 'admin'
    };
  }
  return {
    status: 'error',
    type: 'admin'
  };
  
  // return request<API.LoginStateType>('/api/login/account', {
  //   method: 'POST',
  //   data: params,
  // });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function outLogin() {
  return request('/api/login/outLogin');
}
