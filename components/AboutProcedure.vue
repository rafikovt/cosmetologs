<template>
  <div class="container container-about">
	  <img class="about-img" src="../static/img/about.jpg" alt="О процедуре">
	  <div class="block">
		  <h2 class="title-2">О процедуре</h2>
		  <p class="description">Фракционный вакуумно-микроигольчатый RF-лифтинг является инновационной косметологической процедурой,
			  главная задача которой — омоложение кожи, повышение ее упругости и эластичности. RF-лифтинг проводится
			  на аппарате Inus, в котором используются радиочастотные волны, проникающие в глубокие слои кожи с помощью
			  специальных изолированных микроигл с золотым напылением.
		  </p>
		  <button class="btn" @click.prevent="$emit('open')">Записаться</button>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'about-procedure'
}
</script>

<style lang="scss" scoped>
	.container {

      &-about {
		padding: 10rem 25rem;
		display: flex;
		justify-content: left;
        background-image: url("../static/img/about.jpg");
		background-size: cover;

		@media (max-width: 1023px) {
		  padding: 5rem 2rem;
		  background: none;
		  flex-direction: column;
		}
      }
    }

	.block {
	  padding: 6rem;
	  max-width: 69rem;
      backdrop-filter: blur(4rem);
      background: rgba(255, 255, 255, 0.7);

	  @media (max-width: 1023px) {
		padding: 3rem 0;
	  }

	  @media (max-width: 768px) {
		max-width: 33rem;
	  }
	}

	.title-2 {
	  margin-bottom: 2.4rem;
	}

	.description {
	  margin-bottom: 4rem;
	}

	.about-img {
	  display: none;

	  @media (max-width: 1023px) {
		display: block;
		margin-left: -2rem;
	  }
	}
</style>
