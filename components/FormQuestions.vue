<template>
	<div class="container">
		<form class="form" @submit.prevent="onSubmit">
			<h2 class="title-2">Остались вопросы? Оставьте свои контактные
				данные и получите консультацию косметолога
			</h2>
			<label class="field" :class="{'error': errors.name}">
				<span>Имя<span class="required">*</span></span>
				<input type="text" v-model="formData.name"/>
				<span class="error-message" v-if="errors.name" v-text="errors.name"/>
			</label>
			<label class="field" :class="{'error': errors.phone}">
				<span>Телефон<span class="required">*</span></span>
				<input type="text"  v-mask="'+7 (###) ###-##-##'" v-model="formData.phone" placeholder="+7 (___) ___ __ __ "/>
				<span class="error-message" v-if="errors.phone" v-text="errors.phone"/>
			</label>
			<button class="btn" type="submit">Отправить</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'form-questions',
	data() {
	  return {
		  formData: {
			  phone: '',
			  name: '',
		  },
		  errors: {
			  name: '',
			  phone: '',
		  },
		  formError: false,
		  chatID: '-1001737903493',
		  token: '5396535927:AAFtrHy9ule3BzrbKCeqAXmKyJesjiKmUjA',
	  }
	},
	methods: {
		  onSubmit() {
			  this.validate();
			  if (!this.formError) {
				  axios.post(`https://api.telegram.org/bot${this.token}/sendMessage`, {
					  chat_id: this.chatID,
					  parse_mode: 'HTML',
					  text: `<b>Имя: ${this.formData.name}</b>\n<b>Телефон: ${this.formData.phone}</b>`

				  })
			  }
		  },
		validate() {
			this.errors.name =  this.formData.name.trim().length ? '' : 'Необходимо ввести имя';
			this.errors.phone =  this.formData.phone.trim().length === 18 ? '' : 'Необходимо ввести телефон';
			this.formError = this.errors.name.length || this.errors.phone.length;
		}
	},
	watch: {
		"formData.name"(value) {
			if (value) {
				this.errors.name = '';
			}
		},
		"formData.phone"(value) {
			if (value) {
				this.errors.phone = '';
			}
		},
	},
}
</script>

<style lang="scss" scoped>
	.container {
	  padding: 10rem 25rem;
      background: $pink-light;

	  @media (max-width: 1400px) {
		padding: 5rem 2rem;
	  }
	}

	.form {
	  max-width: 62rem;
	  display: flex;
	  flex-direction: column;
	  align-items: flex-start;
	}

	.title-2 {
	  margin-bottom: 6rem;
	}

	.field {
	  width: 100%;
	  margin-bottom: 4rem;
	  display: flex;
	  flex-direction: column;
	  position: relative;
	}

	.required {
	  color: $red;
	}

	input {
      min-height: 4rem;
	  border: none;
	  border-bottom: 1px solid $grey;
	  background: transparent;
	  font-size: 1.8rem;
	}
    .error-message {
      font-size: 1.4rem;
      color: #900B2F;
      position: absolute;
      bottom: -2.2rem;
    }

    .error {
      input {
        border-color: #900B2F;
      }
    }
</style>
