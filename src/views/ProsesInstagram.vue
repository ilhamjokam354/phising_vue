<template>
  <div>
      <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                       
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Halo {{emailUser}}</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Silahkan Masukan Link IG Anda"
                                            addon-left-icon="ni ni-link"
                                            v-model="link" @keyup.13="proses">
                                </base-input>
                                
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="proses">Kirim</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                   
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    data(){
        return {
            loading : true,
            color : 'success',
            size : '50px',
            link : ""
        }
    },
    components : {
       
    },
    methods : {
        proses(){
            if(!this.link){
                this.$swal({
                    icon : 'error',
                    title : 'Maaf !',
                    text : 'Data Tidak Boleh Kosong'
                })
            }else{
                let timerInterval
                this.$swal({
                    title: 'Sedang Melakukan Proses!',
                    html: 'Proses Akan Selesai Pada <b></b> milliseconds.',
                    timer: 120000,
                    timerProgressBar: true,
                    onBeforeOpen: () => {
                        this.$swal.showLoading()
                        timerInterval = setInterval(() => {
                        const content = this.$swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                            b.textContent = this.$swal.getTimerLeft()
                            }
                        }
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                        this.$swal({
                            icon : 'success',
                            text : 'Proses Berhasil Silahkan Cek Sosmed Anda',
                            title : 'Selamat !'
                        }).
                        then(result => {
                            if(result.value){
                                this.$swal({
                                    icon : 'warning',
                                    title : 'Warning',
                                    text : 'Jika Tidak Berhasil Silahkan Kontak Saya :)'
                                })
                            }
                        })
                   
                })
            }
           
        }
    },
    computed : {
        emailUser(){
            let email = localStorage.getItem('email')
            return email
        }
    }
}    
</script>

<style>

</style>