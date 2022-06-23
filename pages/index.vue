<template>
  <div>
    <Header-cos @open="isOpenModal = true"/>
    <FeaturesMain @open="isOpenModal = true"/>
    <features-list @open="isOpenModal = true"/>
    <Features-packets @open="isOpenModal = true"/>
    <Cos-actions @open="isOpenModal = true"/>
    <CosBenefits />
    <AboutProcedure @open="isOpenModal = true"/>
	<FormQuestions />
	  <FooterCos />
	  <transition name="fade">
		  <BaseModal v-if="isOpenModal" @close="isOpenModal = false"/>
	  </transition>
  </div>
</template>

<script>
import FeaturesMain from '~/components/Features-main';
import FeaturesList from "~/components/Features-list";
import CosBenefits from "~/components/Cos-benefits";
import AboutProcedure from "~/components/AboutProcedure";
import FormQuestions from "~/components/FormQuestions";

export default {
  name: 'IndexPage',
  components: {CosBenefits, FeaturesList, FeaturesMain, AboutProcedure, FormQuestions},
	data() {
	  return {
		  isOpenModal: false,
	  }
	},
}
</script>
