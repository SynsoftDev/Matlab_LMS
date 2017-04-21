<style>

</style>

<template>
    <div class="login">
        <div class="panel-heading">
            <h2>Log in</h2>
        </div>
        <div class="row"><br>
            <div class="col-sm-4 col-sm-offset-1">
                <div class="form-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Email"
                        v-model="credentials.email"
                    >
                </div>
                
                <div class="form-group">
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        v-model="credentials.password"
                    >
                <a href="">Forgot password?</a><br>
                </div>
                <button class="btn btn-primary" @click="submit()">Log In</button>
                <p>New user? Register <a v-link="{ path: '/register' }">here</a>.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
          name: 'Login',
          data() {
              return {
                  credentials: {
                      email: '',
                      password: '',
                  },
                  verified: null,
                  error: ''
              }
          },
          methods: {
              submit() {
                  this.$http.post('/auth/user/login', this.credentials).then((response) => {
                      this.$route.router.go('/')
                  }, (response) => {
                      this.error = response
                      console.log(this.error)
                      this.verified = false // probably bad
                      console.log(this.verified)
                  })
              }
          }
      }
</script>