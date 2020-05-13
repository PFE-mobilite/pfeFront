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
                <label for="">Société</label>
                <input type="text" class="form-control" placeholder="Société" v-model="Client.societe">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Raison Social</label>
                <input type="text" class="form-control" placeholder="Raison social" v-model="Client.raison_social">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Nom Representant</label>
                <input type="text" class="form-control" placeholder="Nom Representant" v-model="Client.nom">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Prenom Representant</label>
                <input type="text" class="form-control" placeholder="Prenom Representant" v-model="Client.prenom">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Adresse Email</label>
                <input type="email" class="form-control" placeholder="Email" v-model="Client.email">
              </div>
            </div>
            <div class="row mx-3 d-flex flex-row-reverse">
              <div class="col-lg-3 col-md-9 mt-2 px-3">
                <button type="button" class="btn btn-outline-success btn-lg btn-block" @click="setclient">Save</button>
              </div>
            </div>
            <div class="row">
              <p>{{Client.email}}</p>
              <p>{{Client.societe}}</p>
              <p>{{Client.nom}}</p>
              <p>{{Client.prenom}}</p>
              <p>{{Client.raison_social}}</p>
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
        societe: 'kais',
        raison_social: 'skand',
        nom: 'aibzau',
        prenom: 'aiuejf',
        email: 'aijznai'
      }
    }
  },
  created () {
    this.$store.dispatch('setclient')
  },
  methods: {
    ...mapActions({
      modifierprofil: 'editclient'
    }),
    edit () {
      const clientmodifier = {
        societe: this.client.societe,
        raison_social: this.client.raison_social,
        nom: this.client.nom,
        prenom: this.client.prenom,
        email: this.client.email
      }
      this.modifierprofil(clientmodifier)
    }
  }
}
</script>

<style scoped>
  .card-edit-client{
    margin-top: 50px;
    background: transparent;
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
