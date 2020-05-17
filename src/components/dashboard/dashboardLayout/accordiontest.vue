<template>
  <div class="col-xl-6 col-12 mt-4">
    <h4 class="text-muted mb-4">Recent Customer Activities:</h4>
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-2" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="dark" class="text-left"><img src="../../../assets/admin.jpeg" width="50px" class="mr-3 rounded">John posted new Comment</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-2" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="dark" class="text-left"><img src="../../../assets/admin.jpeg" width="50px" class="mr-3 rounded">Doe posted new Comment</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-2" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="dark" class="text-left"><img src="../../../assets/cust3.jpeg" width="50px" class="mr-3 rounded">Doe posted new Comment</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-2" role="tab">
            <b-button block v-b-toggle.accordion-4 variant="dark" class="text-left"><img src="../../../assets/admin.jpeg" width="50px" class="mr-3 rounded">Doe posted new Comment</b-button>
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-2" role="tab">
            <b-button block v-b-toggle.accordion-5 variant="dark" class="text-left"><img src="../../../assets/cust1.jpeg" width="50px" class="mr-3 rounded">Doe posted new Comment</b-button>
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: `
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
    brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
  `
    }
  }
}
</script>
