<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <h4 class="judul">Tool Sosmed</h4>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link to="/">
                        <h4 class="judulBiru">Tool Sosmed</h4>

                    </router-link>
                    
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title"  class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Layanan</span>
                    </a>
                    <router-link to="/instagram" class="dropdown-item"><i class="fab fa-instagram"></i> Instagram</router-link>
                    <router-link to="/facebook" class="dropdown-item"><i class="fab fa-facebook"></i> Facebook</router-link>
                    <router-link to="/youtube" class="dropdown-item"><i class="fab fa-youtube"></i> Youtube</router-link>
                    
                </base-dropdown>
                
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap';
.nav-link{
    cursor: pointer;
}
.judul{
    color: white;
    font-weight: 2em;
    font-size: 2em;
    font-family: 'Bebas Neue';
}
.judulbiru{
    color: rgb(103, 114, 229);
    font-weight: 2em;
    font-size: 2em;
    font-family: 'Bebas Neue';
}
</style>
