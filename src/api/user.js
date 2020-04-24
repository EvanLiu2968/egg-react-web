import request from '../libs/request'

// 新增用户组
export function createGroup(data) {
  return request({
    url: '/v1/group/createGroup',
    method: 'post',
    data: data
  })
}
// 获取用户组列表
export function getGroups(data) {
  return request({
    url: '/v1/group/getGroups',
    method: 'get',
    params: data
  })
}
// 创建用户
export function createUser(data) {
  return request({
    url: '/v1/user/createUser',
    method: 'post',
    data: data
  })
}
// 获取用户列表
export function getUsers(data) {
  return request({
    url: '/v1/user/getUsers',
    method: 'get',
    params: data
  })
}
// 获取Id获取用户
export function getUserById(id) {
  return request({
    url: `/v1/user/getUserById/${id}`,
    method: 'get'
  })
}
// 删除用户
export function deleteUser(id) {
  return request({
    url: `/v1/user/deleteUser/${id}`,
    method: 'delete'
  })
}
// 更新用户
export function updateUser(id, data) {
  return request({
    url: `/v1/user/updateUser/${id}`,
    method: 'put',
    data
  })
}
