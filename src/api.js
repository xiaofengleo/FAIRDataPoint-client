import axios from 'axios'
import { getUserToken } from './utils/localStorage'

const apiUrl = 'http://localhost:3000'

function get(url) {
  return axios.get(`${apiUrl}${url}`, {
    headers: { Accept: 'application/json' },
  })
}

function getAuthenticated(url) {
  return axios.get(`${apiUrl}${url}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getUserToken()}`,
    },
  })
}

function postAuthenticated(url, data) {
  return axios.post(`${apiUrl}${url}`, data, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json',
    },
  })
}

function putAuthenticated(url, data) {
  return axios.put(`${apiUrl}${url}`, data, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getUserToken()}`,
    },
  })
}

function deleteAuthenticated(url) {
  return axios.delete(`${apiUrl}${url}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getUserToken()}`,
    },
  })
}

export function fetchToken(email, password) {
  return axios.post(`${apiUrl}/tokens`, { email, password })
}

export function getFdp() {
  return get('/fdp')
}

export function getCatalog(id) {
  return get(`/fdp/catalog/${id}`)
}

export function getDataset(id) {
  return get(`/fdp/dataset/${id}`)
}

export function getDistribution(id) {
  return get(`/fdp/distribution/${id}`)
}

export function getUsers() {
  return getAuthenticated('/users')
}

export function getUser(id) {
  return getAuthenticated(`/users/${id}`)
}

export function postUser(user) {
  return postAuthenticated('/users', user)
}

export function putUser(user) {
  return putAuthenticated(`/users/${user.uuid}`, user)
}

export function deleteUser(user) {
  return deleteAuthenticated(`/users/${user.uuid}`)
}

export function putUserPassword(user, password) {
  return putAuthenticated(`/users/${user.uuid}/password`, { password })
}
