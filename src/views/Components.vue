<template>
    <div>
        <hero></hero>
        
        <icons></icons>
        <examples></examples>
        <download-section></download-section>
        <carousel></carousel>
        <section class="section section-lg">
        <div class="container">
            <div class="row row-grid justify-content-center">
                <div class="col-lg-8 text-center">
                    
                    
                   
                    
                </div>
            </div>
        </div>
    </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1 text-center">Kontak Kami</h4>
                            <p class="mt-0 text-center">Jika Mengalami Permasalahan.</p>
                            <base-input class="mt-5"
                                       
                                        placeholder="Your name"
                                        addon-left-icon="ni ni-user-run" v-model="user">
                            </base-input>
                            <base-input
                                        placeholder="Email address"
                                        addon-left-icon="ni ni-email-83" v-model="email">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Type a message..."  v-model="pesan"></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg" @click="kirim">
                                Send Message
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Hero from "./components/Hero";

import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";

export default {
  name: "components",
  components: {
    Hero,
    
    Carousel,
    Icons,
    Examples,
    DownloadSection
  },
  data(){
    return{
      user : '',
      email : '',
      pesan : ''
    }
  },
  methods : {
    kirim(){
      if(this.user == '' || this.email == '' || this.pesan == ''){
        this.$swal({
          icon : 'error',
          title : 'Maaf !',
          text : 'Data Tidak Boleh Kosong'
        })
      }else{
        this.$swal({
          icon : 'success',
          title : 'Pesan',
          text : 'Berhasil Terkirim'
        })
      
      }
    }
  }

};
</script>
