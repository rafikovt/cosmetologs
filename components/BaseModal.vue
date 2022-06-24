<template>
	<div class="wrapper">
		<div class="overlay" @click="$emit('close')"></div>
		<div class="content">
			<form v-if="!isSend && !isError" class="form" @submit.prevent="onSubmit">
				<label class="field" :class="{'error': errors.name}">
					<span>Имя<span class="required">*</span></span>
					<input type="text" placeholder="" v-model="formData.name"/>
					<span class="error-message" v-if="errors.name" v-text="errors.name"/>
				</label>
				<label class="field" :class="{'error': errors.phone}">
					<span>Телефон<span class="required">*</span></span>
					<input type="text"  v-mask="'+7 (###) ###-##-##'" placeholder="+7 (___) ___ __ __ " v-model="formData.phone"/>
					<span class="error-message" v-if="errors.phone" v-text="errors.phone"/>
				</label>
				<label class="field" :class="{'error': errors.offer}">
					<span>Желаемая услуга<span class="required">*</span></span>
					<input type="text" v-model="formData.offer"/>
					<span class="error-message" v-if="errors.offer" v-text="errors.offer"/>
				</label>
				<label class="field">
					<span>Комментарий</span>
					<input type="text" v-model="formData.comment"/>
				</label>
				<label class="field-checkbox" :class="{'error': errors.privacy}">
					<input type="checkbox" hidden v-model="isPrivacyChecked">
					<span class="custom-checkbox">
					<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="custom-icon">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M13.161 0.121762C13.1159 0.133301 13.0359 0.164473 12.9833 0.191023C12.9306 0.217574 11.0883 2.03736 8.88864 4.23544L4.88967 8.23159L2.99606 6.34088C1.66565 5.01255 1.06584 4.43166 0.979378 4.38791C0.813292 4.30385 0.546936 4.30175 0.389628 4.38326C0.242874 4.4593 0.096366 4.62481 0.036073 4.78269C-0.0232903 4.93812 -0.0082512 5.15364 0.072823 5.30953C0.15469 5.467 4.49193 9.79032 4.62206 9.84419C4.75246 9.89816 5.02633 9.89825 5.15701 9.84432C5.28695 9.7907 13.8322 1.25984 13.9208 1.09525C14.0029 0.942758 14.0032 0.647172 13.9214 0.493691C13.7733 0.215961 13.4366 0.0512421 13.161 0.121762Z" fill="#DE596D"/>
					</svg>
				</span>
					<span>Отправляя заявку, я соглашаюсь с <a class="link link-privacy" href="/privacy.pdf" target="_blank">политикой конфиденциальности</a></span>
					<span class="error-message" v-if="errors.privacy" v-text="errors.privacy"/>
				</label>
				<button class="btn">Отправить</button>
			</form>
			<div class="success" v-if="isSend">Заявка успешно отправлена, в билжайшее время с вами свяжется специалист для уточнения деталей</div>
			<div class="error-form" v-if="isError">
				<span>К сожалению произошла ошибка попробуйте отправить заявку заново</span>
				<button class="btn" @click.prevent="isError = false">Попробовать заново</button>
			</div>
			<button class="close-btn" @click.prevent="$emit('close')"/>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'base-modal',
	data() {
		return {
			formData: {
				name: '',
				phone: '',
				offer: '',
				comment: '',
			},
			errors: {
				name: '',
				phone: '',
				offer: '',
				privacy: '',
			},
			formError: false,
			chatID: '-1001737903493',
			token: '5396535927:AAFtrHy9ule3BzrbKCeqAXmKyJesjiKmUjA',
			isSend: false,
			isError: false,
			isPrivacyChecked: false,
		}
	},
	methods: {
		async onSubmit() {
			this.validate();
			if (!this.formError) {
				try {
					const res = await axios.post(`https://api.telegram.org/bot${this.token}/sendMessage`, {
						chat_id: this.chatID,
						parse_mode: 'HTML',
						text: `<b>Имя:</b> ${this.formData.name}\n<b>Телефон:</b> ${this.formData.phone}\n <b>Услуга:</b> ${this.formData.offer} /n <b>Комментарий:</b> ${this.formData.comment} `

					})

					if (res.data.ok) {
						this.isSend = true;
					} else {
						this.isError = true;
					}
				} catch (e) {
					this.isError = true;
					console.error(e)
				}

			}
		},
		validate() {
			this.errors.name =  this.formData.name.trim().length ? '' : 'Необходимо ввести имя';
			this.errors.phone =  this.formData.phone.trim().length === 18 ? '' : 'Необходимо ввести телефон';
			this.errors.offer =  this.formData.offer.trim().length ? '' : 'Необходимо ввести желаемую услугу';
			this.errors.privacy = this.isPrivacyChecked ? '' : 'Необходимо принять условия';
			this.formError = this.errors.name.length || this.errors.phone.length || this.errors.offer.length || this.errors.privacy.length;
		},
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
		"formData.offer"(value) {
			if (value) {
				this.errors.offer = '';
			}
		},
		"isPrivacyChecked"(value) {
			if (value) {
				this.errors.privacy = '';
			}
		}

	},
	mounted() {
		document.querySelector('html').classList.add('no-scroll')
	},
	beforeDestroy() {
		document.querySelector('html').classList.remove('no-scroll')
	}
}
</script>

<style lang="scss" scoped>
	.wrapper {
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
      text-align: center;
      white-space: nowrap;
	}

	.overlay {
      position: fixed;
      z-index: 1100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #000;
      opacity: .3;
	}

	.content {
	  max-width: 60rem;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1101;
      opacity: 1;
      display: inline-block;
      width: 96%;
      height: auto;
      max-height: 100%;
      background-color: #fff;
      border-radius: 4px;
      -webkit-box-shadow: 0 1px 15px 0 rgb(0 0 0 / 30%);
      box-shadow: 0 1px 15px 0 rgb(0 0 0 / 30%);
      overflow-x: hidden;
      overflow-y: auto;
      text-align: left;
      vertical-align: middle;
      white-space: normal;
	}

	.form {
	  padding: 3rem;
	  display: grid;
	  grid-gap: 1rem;
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

      &-checkbox {
        margin-bottom: 4rem;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
      }
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

	.close-btn {
	  position: absolute;
	  right: 1rem;
	  top: 1rem;
	  background: none;
	  border: none;
	  cursor: pointer;
	  width: 2rem;
	  height: 2rem;

	  &:after,
	  &:before {
		content: '';
		width: 2rem;
		height: .2rem;
		background: black;
        position: absolute;
        top: .8rem;
        left: 0;
		transition: .3s ease;
	  }

	  &:hover {
        &:after,
        &:before {
          background: $red;
        }
	  }

	  &:after {
		transform: rotate(-45deg);
	  }

	  &:before {
		transform: rotate(45deg);
	  }
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

      .custom-checkbox {
        border-color: #900B2F;
      }
	}

	.success {
	  padding: 6rem;
	}

	.error-form {
      padding: 6rem;
      display: flex;
      flex-direction: column;
	}

    .custom-checkbox {
      margin-right: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.8rem;
      height: 1.8rem;
      border: 1px solid $grey;
    }

    .custom-icon {
      opacity: 0;
      transition: .3s ease;
    }

    input {
      &:checked + .custom-checkbox {
        .custom-icon {
          opacity: 1;
        }
      }
    }

    .link-privacy {
      text-decoration: underline;
    }
</style>