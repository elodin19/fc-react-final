import axios from 'axios';

export const login = (email, password) => {
    
    let body = {
        username: email,
        password: password
    }

    return axios.post('http://127.0.0.1:8080/api/auth/login/', body)
}

export const forgotPass = (email) => {

    let body = {
        email: email
    }

    return axios.post('http://localhost:8080/api/auth/forgot', body)
}

export const newPass = (email, password) => {
    
    let body = {
        username: email,
        password: password
    }

    return axios.post('http://localhost:8080/api/auth/new-pass', body)
}

export const getAll = (token) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return axios.get('http://localhost:8080/api/candidates', { headers: headers })
}

export const getCandidateById = (id, token) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return axios.get('http://localhost:8080/api/candidates/' + id, { headers: headers })
}

export const createCandidate = (student, token) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const body = {
        fullname: student.fullname,
        city: student.city,
        country: student.country,
        phone: student.phoneNumber,
        email: student.email,
        tags: student.tags,
        remote: student.remote,
        local: student.local,
        transfer: student.transfer
    }

    return axios.post('http://localhost:8080/api/candidates', body, { headers: headers })

}

export const addPhoto = (id, file, token) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const formData = new FormData()
    formData.append('multipartFile', file, file.name)

    return axios.post('http://localhost:8080/api/candidates/photo/' + id, formData, { headers: headers })
}

export const addPdf = (id, file, token) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const formData = new FormData()
    formData.append('multipartFile', file, file.name)

    return axios.post('http://localhost:8080/api/candidates/pdf/' + id, formData, { headers: headers })
}

export const updateCandidate = (student, id, token) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const body = {
        fullname: student.fullname,
        city: student.city,
        country: student.country,
        phone: student.phoneNumber,
        email: student.email,
        tags: student.tags,
        remote: student.remote,
        local: student.local,
        transfer: student.transfer
    }

    return axios.patch('http://localhost:8080/api/candidates/' + id, body, { headers: headers })
}

export const deleteCandidate = (id, token) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return axios.delete('http://localhost:8080/api/candidates/' + id, { headers: headers })
}