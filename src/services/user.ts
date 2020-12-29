import { request } from 'umi';

export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

export async function queryCurrent() {
  return {
    avatar: 'icons/icon-128x128.png',
    name: 'admin',
    title: 'admin',
    group: 'admin',
    signature: 'nothing to left',
    tags: [{
      key: 'test',
      label: '测试账号',
    }],
    userid: 0,
    access: 'admin',
    unreadCount: 0,
  }

  // return request<API.CurrentUser>('/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/notices');
}
