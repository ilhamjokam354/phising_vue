<template>
    <section class="section section-lg section-nucleo-icons pb-250">
        <div class="container" @mouseleave="showIconsAnimation = false">
            <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
                <div class="col-lg-8 text-center">
                    <h2 class="display-3">Tools Kami</h2>
                    <p class="lead">
                        Kami Menyediakan Tools Social Media Seperti Instagram,Facebook,Youtube Secara Gratis.
                    </p>
                    
                </div>
            </div>
            <div class="blur--hover">
                <a >
                    <div class="icons-container blur-item mt-5" :class="{'on-screen': showIconsAnimation}">
                        <!-- Center -->
                        <i class="icon fas fa-clipboard-list"></i>
                        <!-- Right 1 -->
                        <i class="icon fab fa-instagram "></i>
                        <i class="icon fab fa-instagram "></i>
                        <i class="icon fab fa-instagram "></i>
                        <!-- Right 2 -->
                        <i class="icon fab fa-youtube"></i>
                        <i class="icon fab fa-twitter"></i>
                        <i class="icon fab fa-google"></i>
                        <!-- Left 1 -->
                        <i class="icon fab fa-facebook "></i>
                        <i class="icon fab fa-facebook "></i>
                        <i class="icon fab fa-facebook "></i>
                        <!-- Left 2 -->
                        <i class="icon fab fa-youtube"></i>
                        <i class="icon fab fa-twitter"></i>
                        <i class="icon fab fa-google"></i>
                    </div>
                    
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      showIconsAnimation: false
    };
  },
  methods: {
    onScroll(evt) {
      console.log(evt);
    }
  }
};
</script>
<style>
</style>
