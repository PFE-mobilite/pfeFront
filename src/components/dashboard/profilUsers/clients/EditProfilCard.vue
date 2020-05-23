<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card card-edit-client">
          <div class="card-header text-white">
            Edit Profile
          </div>
          <div class="card-body mx-5">
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Raison Social</label>
                <input type="text" class="form-control" placeholder="Raison social" v-model="client.raison_social">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Nom Representant</label>
                <input type="text" class="form-control" placeholder="Nom Representant" v-model="client.nom">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Prenom Representant</label>
                <input type="text" class="form-control" placeholder="Prenom Representant" v-model="client.prenom">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Adresse Email</label>
                <input type="email" class="form-control" placeholder="Email" v-model="client.email">
              </div>
            </div>
            <div class="row mx-3 d-flex flex-row-reverse">
              <div class="col-lg-3 col-md-9 mt-2 px-3">
                <button type="button" class="btn btn-outline-info  btn-lg btn-block" @click="edit()">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      client: {
        raison_social: '',
        nom: '',
        prenom: '',
        email: ''
      }
    }
  },
  methods: {
    ...mapActions({
      modifierprofil: 'editclient'
    })
  },
  computed: {
    edit () {
      const clientmodifier = {
        raison_social: this.client.raison_social,
        nom: this.client.nom,
        prenom: this.client.prenom,
        email: this.client.email
      }
      return this.modifierprofil(clientmodifier)
    }
  }
}
</script>

<style scoped>
  .card-edit-client{
    margin-top: 50px;
    background: #2f4050;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
  input{
    background: transparent;
  }
  textarea{
    background: transparent;
  }
  label{
    color: white;
  }
</style>
