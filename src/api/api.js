import axios from 'axios'
import {URL} from './config'
import qs from 'qs'

/** 获取文章列表 **/
export function getApplyList (page) {
  const url = URL + '/site/register_list_ajax'
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
  const url = URL + '/site/register_detail_ajax'
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
export function postApplyInfo (name, phone, artID, province, vipTipe, sfzID) {
  const url = URL + '/site/registrations_act'
  const data = Object.assign({}, {
    name: name,
    phone: phone,
    artID: artID,
    id_card: sfzID,
    province: province,
    vip_type: vipTipe
  })
  return axios.post(url, qs.stringify(data), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

/** 报名人数 **/
export function registrationsSum (artID) {
  const url = URL + '/site/registrations_sum'
  const data = Object.assign({}, {
    id: artID
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

/** 地区查询 **/
export function getProvince () {
  const url = URL + '/site/getProvince'
  const data = Object.assign({}, {
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
