<template>
  <div>
    <Header-cos @open="isOpenModal = true"/>
    <Features-main @open="isOpenModal = true"/>
    <Features-list @open="openModal"/>
    <Features-packets @open="openModal"/>
    <Cos-actions @open="isOpenModal = true"/>
    <Cos-benefits />
    <AboutProcedure @open="isOpenModal = true"/>
	<FormQuestions />
	<Footer-cos />
	<transition name="fade">
		<BaseModal v-if="isOpenModal" @close="close" :modalData="modalData"/>
	</transition>
	  <div class="scroll-top__circle" v-if="false">
		  <svg viewBox="0 0 14 23">
			  <path d="M2.24698 22.0762L0.998834 20.8528L9.84521 11.9122L10.7935 11.0681L9.84521 10.1645L0.998835 1.2147L2.24699 0.000542641L13.1523 11.0384L2.24698 22.0762Z" fill="red"></path>
		  </svg>
	  </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
	data() {
	  return {
		  isOpenModal: false,
		  modalData: '',
	  }
	},
	methods: {
	  openModal(data) {
		  this.isOpenModal = true;
		  this.modalData = data;
	  },
		close() {
			this.isOpenModal = false;
			this.modalData = '';
		}
	},
}
</script>

<style lang="scss">
	.scroll-top__circle {
	  width: 6rem;
	  height: 6rem;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  position: fixed;
	  bottom: 6rem;
	  right: 6rem;
	  border-radius: 50%;
	  border: 1px solid $red;
	  cursor: pointer;

	  svg {
		width: 1rem;
		height: 1.4rem;
		transform: rotate(-90deg);
	  }
	}
</style>
