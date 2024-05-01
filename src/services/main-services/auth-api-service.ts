import http from '@/services/http-config/http-auth-config'

class Auth {
  get(data: any): any {
    const params = data.params
    return http.get(data.route, { params })
  }

  post(data: any): any {
    return http.post(data.route, data.params)
  }

  put(data: any): any {
    return http.put(data.route, data.params)
  }

  delete(data: any): any {
    const params = data.params
    return http.delete(data.route, { params })
  }
}

export default new Auth()