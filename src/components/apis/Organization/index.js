import axios from "axios";

export const getOrganizations = () => {
    return axios.get('https://62fce4b86e617f88dea0719a.mockapi.io/Organization')
}

export const getOrganization = (id) => {
    return axios.get(`https://62fce4b86e617f88dea0719a.mockapi.io/Organization/${id}`)
}

export const createOrganization = (formData) => {
    return axios.post(`https://62fce4b86e617f88dea0719a.mockapi.io/Organization`,formData)
}

export const editOrganization = (id,formData) => {
    return axios.put(`https://62fce4b86e617f88dea0719a.mockapi.io/Organization/${id}`,formData)
}

export const delateOrganization = (id) => {
    return axios.get(`https://62fce4b86e617f88dea0719a.mockapi.io/Organization/${id}`)
}