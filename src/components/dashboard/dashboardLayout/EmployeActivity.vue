<template>
  <div class="col-xl-6 col-12 mt-4">
        <h4 class="text-muted mb-4">Recent Customer Activities:</h4>
        <div id="accordion">
          <div class="card">
            <div class="card-header">
              <buttom class="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseOne" @click="collapsed= !collapsed" >
                <img src="../../../assets/admin.jpeg" width="50px" class="mr-3 rounded">
                John posted new Comment
              </buttom>
              <div class="collapse show" v-show="collapsed" id="collapseOne" data-parent="#accordion">
                <div class="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam assumenda culpa eum eveniet id inventore, magni minus molestiae natus nobis numquam perferendis placeat qui quia quibusdam, quod quos rerum similique sint sit suscipit velit veniam vitae voluptate. Iure, recusandae!
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <buttom class="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseTwo">
                <img src="../../../assets/cust1.jpeg" width="50px" class="mr-3 rounded">
                Mark posted new Comment
              </buttom>
              <div class="collapse" id="collapseTwo" data-parent="#accordion">
                <div class="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam assumenda culpa eum eveniet id inventore, magni minus molestiae natus nobis numquam perferendis placeat qui quia quibusdam, quod quos rerum similique sint sit suscipit velit veniam vitae voluptate. Iure, recusandae!
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <buttom class="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseThree">
                <img src="../../../assets/cust3.jpeg" width="50px" class="mr-3 rounded">
                Elisa posted new Comment
              </buttom>
              <div class="collapse" id="collapseThree" data-parent="#accordion">
                <div class="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam assumenda culpa eum eveniet id inventore, magni minus molestiae natus nobis numquam perferendis placeat qui quia quibusdam, quod quos rerum similique sint sit suscipit velit veniam vitae voluptate. Iure, recusandae!
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <buttom class="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseFour">
                <img src="../../../assets/admin.jpeg" width="50px" class="mr-3 rounded">
                Malek posted new Comment
              </buttom>
              <div class="collapse" id="collapseFour" data-parent="#accordion">
                <div class="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam assumenda culpa eum eveniet id inventore, magni minus molestiae natus nobis numquam perferendis placeat qui quia quibusdam, quod quos rerum similique sint sit suscipit velit veniam vitae voluptate. Iure, recusandae!
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <buttom class="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseFive">
                <img src="../../../assets/cust1.jpeg" width="50px" class="mr-3 rounded">
                Omar posted new Comment
              </buttom>
              <div class="collapse" id="collapseFive" data-parent="#accordion">
                <div class="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam assumenda culpa eum eveniet id inventore, magni minus molestiae natus nobis numquam perferendis placeat qui quia quibusdam, quod quos rerum similique sint sit suscipit velit veniam vitae voluptate. Iure, recusandae!
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <buttom class="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseSix">
                <img src="../../../assets/cust1.jpeg" width="50px" class="mr-3 rounded">
                Nadia posted new Comment
              </buttom>
              <div class="collapse" id="collapseSix" data-parent="#accordion">
                <div class="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam assumenda culpa eum eveniet id inventore, magni minus molestiae natus nobis numquam perferendis placeat qui quia quibusdam, quod quos rerum similique sint sit suscipit velit veniam vitae voluptate. Iure, recusandae!
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
