import request from '@/utils/request'

export const login = (data) => {
  return request({
    url: '/data',
    data,
  })
}
