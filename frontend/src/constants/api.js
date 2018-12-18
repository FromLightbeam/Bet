// const BACKEND = process.env.REACT_APP_API_URL
// console.log(process.env)
const BACKEND = 'http://localhost:8000/api/v0/'
const BACKEND_AUTH = 'http://localhost:8000/'

export const LOGIN = `${BACKEND}api-token-auth/`
export const REFRESHTOKEN = `${BACKEND}api-token-refresh/`

export const FORGOTPASSWORD = `${BACKEND}forgotpassword`
export const RESETPASSWORD = `${BACKEND}resetpassword`

export const USERS = `${BACKEND}my/user`
export const USER = (id) => `${BACKEND}my/user/${id}`

export const GROUP_USERS = `${BACKEND}my/users`

export const MATCH = `${BACKEND}match`
export const MATCH_BY_ID = id => `${BACKEND}match/${id}`
export const CLUB = `${BACKEND}club`

