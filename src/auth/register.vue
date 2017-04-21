<!-- User registration. Not exactly sure what Tim wants, but should
     be a decent base. -->

<style>

</style>

<template>
    <div class="register">
        <div class="panel-heading">
            <h2>Create a new account</h2>
        </div>
        <div class="row"><br>
            <div class="col-sm-4 col-sm-offset-1">
                <div class="form-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        v-model="credentials.firstname"
                    >
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                        v-model="credentials.lastname"
                    >
                </div>
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
                </div>
            <button class="btn btn-primary" @click="submit()">Sign Up</button><br><br>
            <p>By signing up, you agree to our <a href="#">Terms</a>.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                credentials: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: ''
                },
                verified: null,
                error: ''
            }
        },
        methods: {
            submit() {
                if (this.credentials.firstname && this.credentials.lastname && this.credentials.email && this.credentials.password)
                    this.$http.post('/auth/user/register', this.credentials).then((response) => {
                        this.$route.router.go('/login')
                    }, (response) => {
                        this.error = response
                        console.log(this.error)
                        this.verified = false // probably bad
                        console.log(this.error)
                    })
            }
        }
    }
</script>