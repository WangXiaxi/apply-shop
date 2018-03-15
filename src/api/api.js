import axios from 'axios'
import {URL} from './config'
import qs from 'qs'

/** 获取文章列表 **/
export function getApplyList (page) {
  const url = URL + '/api/getApplyList'
  const data = Object.assign({}, {
    page: page,
    limit: 8
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

/** 获取文章 **/
export function getApplyDetail (id) {
  const url = URL + '/api/getApplyDetail'
  const data = Object.assign({}, {
    id: id
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

/** 表单提交 **/
export function postApplyInfo (name, phone, artID) {
  const url = URL + '/api/postApplyInfo'
  const data = Object.assign({}, {
    name: name,
    phone: phone,
    artID: artID
  })
  return axios.post(url, {
    params: qs.stringify(data)
  },
  {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
