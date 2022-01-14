<template>
  <div>
    <Header-cos />
    <FeaturesMain />
    <features-list />
    <Features-packets />
    <Cos-actions />
    <CosBenefits />
  </div>
</template>

<script>
import FeaturesMain from '~/components/Features-main';
import FeaturesList from "~/components/Features-list";
import CosBenefits from "~/components/Cos-benefits";
export default {
  name: 'IndexPage',
  components: {CosBenefits, FeaturesList, FeaturesMain}
}
</script>
