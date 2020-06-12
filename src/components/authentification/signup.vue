<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
      <div class="col-xl-6 col-lg-5 col-md-8 col-sm-10">
        <div class="card card-1 ">
          <div class="card-header text-center text-white display-4 ">Nouveau Compte</div>
          <div class="card-body">
            <form method="POST">
              <div class="form-group py-4 row justify-content-center">
                <div class="col-8 ">
                  <input
                    id="nom"
                    type="email"
                    class="form-control text-white input my-2 p-2"
                    placeholder="Nom"
                    name="nom"
                    required
                  />
                  <label for="email" class=" label">Nom</label>
                </div>
              </div>
              <div class="form-group py-4 row justify-content-center">
                <div class="col-8 ">
                  <input
                    id="prenom"
                    type="email"
                    class="form-control text-white input my-2 p-2"
                    placeholder="prenom"
                    name="prenom"
                    required
                  />
                  <label for="email" class=" label">Prenom</label>
                </div>
              </div>
              <div class="form-group py-4 row justify-content-center">
                <div class="col-8 ">
                  <input
                    id="email"
                    type="email"
                    class="form-control text-white input my-2 p-2"
                    placeholder="E-Mail Address"
                    name="email"
                    required
                  />
                  <label for="email" class=" label">E-Mail Address</label>
                </div>
              </div>

              <div class="form-group py-4 row justify-content-center">
                <div class="col-8">
                  <input
                    id="password"
                    type="password"
                    class="form-control text-white my-2 p-2 input"
                    placeholder="Password"
                    name="password"
                    required
                    autocomplete="current-password"
                  />

                  <label for="password" class="label">Password</label>
                </div>
              </div>
              <div class="form-group py-4 row justify-content-center">
                <div class="col-8">
                  <input
                    id="password-confirmation"
                    type="password"
                    class="form-control text-white my-2 p-2 input"
                    placeholder="Password-confirmation"
                    name="password"
                    required
                    autocomplete="current-password"
                  />

                  <label for="passwordpassword-confirmation" class="label">Password Confirmation</label>
                </div>
              </div>
              <div class="form-group row justify-content-center mt-5">
                <div class="col-8">
                  <button
                    type="submit"
                    class="btn btn-block p-2 btn-outline-info text-uppercase submit-button"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

  ::placeholder {
    color: white;
  }
  .card-1 {
    background: transparent;
    -webkit-box-shadow: 0px 0px 6px 11px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 6px 11px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 6px 11px rgba(0,0,0,0.75);

  }

  .input {
    background: transparent;
    border-color: transparent;
    border-bottom: 2px solid #eeeeee ;
    border-radius: 0;
    transition:  all .8s ;
  }

  .input:focus {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    border-bottom: 2px solid #1d6fa5;
  }

  .submit-button {
    color: #eee;
    transition: all 0.3s;
  }

  .submit-button:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 992px) {
    .contact-form {
      width: 80%;
      margin: auto;
    }
  }
  .label {
    color: #777;
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
  }
</style>
