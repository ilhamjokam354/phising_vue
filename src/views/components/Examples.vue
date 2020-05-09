<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container shape-container py-0 pb-5">
            <div class="row row-grid justify-content-between align-items-center">
                <div class="col-lg-6">
                    <h3 class="display-3 text-white">Produk Kami
                        
                    </h3>
                    <p class="lead text-white">Menyediakan Followers, Like, Comment, Views, Hingga Subscribers</p>
                    
                </div>
                <div class="col-lg-5 mb-lg-auto">
                    <div class="transform-perspective-right">
                        <card class="border-0" type="secondary" shadow
                              body-classes="px-lg-5 py-lg-5"
                              header-classes="pb-5 bg-white">
                            <template slot="header">
                               <v-card
                                :loading="loading"
                                class="mx-auto my-12"
                                max-width="374"
                                style="margin-bottom:20px;"
                                >
                                <v-img
                                    height="250"
                                    src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1587982706/follow-1277029_1920_q4z5sc.png"
                                ></v-img>

                                <v-card-title>Tambah Followers</v-card-title>

                                <v-card-text>
                                    <v-row
                                    align="center"
                                    class="mx-0"
                                    >
                                    </v-row>

                                    <div class="my-4 subtitle-1">
                                    500 Followers
                                    </div>

                                    <div>Followers Mix Worldwide</div>
                                </v-card-text>

                                <v-divider class="mx-4"></v-divider>

                                <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

                                <v-card-actions>
                                    <v-btn
                                    color="deep-purple lighten-2"
                                    text
                                   
                                    >
                                    Free
                                    </v-btn>
                                </v-card-actions>
                                </v-card>
                            </template>
                           
                        </card>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return  {
            loading : true
        }
    },
    methods : {
       
    }
};
</script>
<style>
</style>
