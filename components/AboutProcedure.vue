<template>
  <div class="container container-about" id="about">
	  <img class="about-img" src="../static/img/about.jpg" alt="О процедуре">
	  <div class="block">
		  <h2 class="title-2">О процедуре</h2>
		  <p class="description">
			  <span>Кто такой косметолог-эстетист?</span>
			  <span>Название профессии подсказывает, что это как-то связано с эстетикой внешности 🤔 Хм, расскажу подробнее!</span>
			  <span>Итак, чем же конкретно я занимаюсь и чем могу быть вам полезна?</span>
			  <span>В первую очередь отмечу, что косметолог-эстетист не занимается лечением, это не врач ☝🏻</span>
			  <span>Однако эстетист не менее важен, чем врач-косметолог.
Ко мне приходят для того, чтобы ПРЕДОТВРАТИТЬ проблемы с кожей – морщины и преждевременное старение, потерю тонуса, тусклый цвет лица, отеки и много другое.</span>
			  <span>Я не делаю серьёзных инвазивных процедур, я помогаю клиентам максимально ОТСРОЧИТЬ необходимость этих процедур либо совсем отказаться от них. Я подберу вам качественный домашний уход, который обеспечивает 80% здоровья и ухоженности кожи.</span>
			  <span>Также я помогу вам справиться с легкой формой акне.</span>
			 	<span>
					Мой приоритет это здоровье клиента. Поэтому приходите ко мне, чтобы не пришлось лечиться!
				</span>
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
	  max-width: 100rem;
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
	  display: flex;
	  flex-direction: column;

	  span {
		margin-bottom: 1.4rem;
	  }
	}

	.about-img {
	  display: none;

	  @media (max-width: 1023px) {
		display: block;
		margin-left: -2rem;
	  }
	}
</style>
