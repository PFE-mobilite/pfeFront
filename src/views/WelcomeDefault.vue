<template>
  <div class="container-fluid bg">
    <div class="row">
      <div class="col py-5">
        <div class="mt-5 pt-5">
          <div class="container mt-4">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
              <div class="col-xl-6 col-lg-5 col-md-8 col-sm-10">
                <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="msg" v-bind:action="action"></Alerting>
                <div class="card card-1">
                  <div class="card-header text-center text-info display-4 ">Login</div>
                  <div class="card-body">
                    <div method="POST" onsubmit="loging">
                      <div class="form-group py-4 row justify-content-center">
                        <div class="col-8 ">
                          <input
                            id="email"
                            type="email"
                            class="form-control  input my-2 p-2" :class="{inputInvalid: $v.username.$error}"
                            placeholder="Email"
                            name="email"
                            @input="$v.username.$touch()"
                            v-model="username"
                          />
                          <label  for="" class="label" :class="{labelInvalid: $v.username.$error}">Email</label>
                        </div>
                      </div>
                      <div class="form-group py-4 row justify-content-center">
                        <div class="col-8">
                          <input
                            id="mot de passe"
                            type="password"
                            class="form-control text-capitalize  my-2 p-2 input"
                            :class="{inputInvalid: $v.password.$error}"
                            placeholder="Mot De Passe"
                            name="mot de passe"
                            @input="$v.password.$touch()"
                            autocomplete="current-password"
                            v-model="password"
                          />
                          <label for="mot de passe" class="label text-capitalize" :class="{labelInvalid: $v.password.$error}">mot de passe</label>
                        </div>
                      </div>
                      <div class="form-group row justify-content-center mt-5">
                        <div class="col-8">
                          <button
                            class="btn btn-block p-2 bg-bt text-uppercase submit-button"
                            :disabled="$v.$invalid"
                            @click="loginng"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import Alerting from '../components/Alertshowing/Alerting'
export default {
  data () {
    return {
      username: '',
      password: '',
      success: false,
      failed: false,
      msg: "tentative d'acces",
      action: 'acces'
    }
  },
  methods: {
    loginng () {
      const username = this.username
      const password = this.password
      this.$store.dispatch('login', { username, password })
        .then((res) => {
          this.success = true
          console.log(res.data)
          if (this.$store.getters.isRoleUser === 'ROLE_ADMIN') {
            this.$router.push('/admin')
          } else if (this.$store.getters.isRoleUser === 'ROLE_CONTACT') {
            this.$router.push('/clientAccount')
          } else {
            this.$router.push('/employeAccount')
          }
        })
        .catch(err => {
          this.failed = true
          console.log(err)
        })
    }
  },
  components: {
    Alerting
  },
  validations: {
    username: {
      required,
      email
    },
    password: {
      required
    }
  }
}

</script>
<style lang="scss" scoped>
  .bg {
    background-image: url("../assets/ks.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh);
    witdh: calc(100vh)
  }
  ::placeholder {
    color: #455ffe;
  }
  .bg-bt{
    background: #455ffe;
  }

  .card-1 {
    background: white;
    -webkit-box-shadow: 0px 0px 6px 11px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 6px 11px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 6px 11px rgba(0,0,0,0.75);
  }
  .input{
    color : #455ffe;
    background: transparent;
    border-color: transparent;
    border-bottom: 2px solid #455ffe ;
    border-radius: 0;
    transition:  all .8s ;
  }
  .input:focus {
    color: #455ffe;
    border-color: transparent;
    background: transparent;
    box-shadow: none;
    border-bottom: 2px solid #455ffe;
  }
  .inputInvalid {
    color : red;
    border-color: transparent;
    background: transparent;
    border-bottom: 2px solid red ;
    border-radius: 0;
    transition:  all .8s ;
  }
  .inputInvalid:focus {
    color: red;
    border-color: transparent;
    background: transparent;
    box-shadow: none;
    border-bottom: 2px solid red;
  }

  .submit-button {
    color: #eee;
    transition: all 0.3s;
  }

  .submit-button:hover {
    background: #455ffe;
    transform: translateY(-3px);
  }

  @media (max-width: 992px) {
    .contact-form {
      width: 80%;
      margin: auto;
    }
  }
  .label {
    color: #455ffe;
    display: block;
    margin-top: -70px;
    margin-left: 4px;
    font-size: 13px;
    transition: all 0.3s;
  }
  .labelInvalid {
    color: red;
    display: block;
    margin-top: -70px;
    margin-left: 4px;
    font-size: 13px;
    transition: all 0.3s;
  }

  .input:placeholder-shown + .label {
    transform: translate(20px, 20px);
    opacity: 0;
    visibility: hidden;
    color: #455ffe;
  }
</style>
