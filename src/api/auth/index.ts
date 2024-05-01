import authApiService from '@/services/main-services/auth-api-service'

export async function login({ email, password }: any) {
  const data = {
    route: 'login',
    params: {
      email,
      password
    }
  }

  return authApiService.post(data)
}