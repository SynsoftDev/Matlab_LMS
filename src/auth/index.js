import { router } from '../route-config.js'

export default {
    user: {
        authenticated: false
    },

    register(context, creds, redirect) {
        context.$http.post(`/auth/user/register`, creds, (data) => {
            this.user.authenticated = true // why?, we dont wanna trust this client side variable
            if (redirect) {
                router.go(redirect)
            }
        }).error((err) => {
            context.error = err
        })
    }
}