<template>
  <div class="container" id="price">
    <div class="packets-top">
      <div class="packet" v-for="offer in offers" @click.prevent="$emit('open', offer.title)">
          <h3 class="packet-title" v-text="offer.title" />
          <p class="packet-description" v-text="offer.description" />
          <p class="packet-price" v-text="offer.price" />
          <p class="packet-price__base" v-text="offer.oldPrice" />
          <button class="btn">Записаться</button>
        </div>
    </div>
    <div class="packets-bottom">
      <img class="packets-bottom-img" src="../static/img/packets.jpg" alt="Пакеты услуг">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features-packets',
	data() {
	  return {
		  offers: [
			  {
				  title: 'Ультразвуковая чистка',
				  description: '3 процедуры при первичном обращении в клинику',
				  oldPrice: '2000 ₽',
				  price: '1500 ₽',
			  },
			  {
				  title: 'Уход по типу кожу',
				  description: 'Уход по типу кожи с использованием косметики Holy Land',
				  oldPrice: '1800 ₽',
				  price: '1300 ₽',
			  },
			  {
				  title: 'Пилинг BioRePeel',
				  description: 'Уход c использованием косметики Holy Land Holy Land и пилинг BioRePeel',
				  oldPrice: '2500 ₽',
				  price: '2000 ₽',
			  },
			  {
				  title: 'Ультразвуковая чистка',
				  description: '3 процедуры при первичном обращении в клинику',
				  oldPrice: '2000 ₽',
				  price: '1500 ₽',
			  },
		  ]
	  }
	}
}
</script>

<style lang="scss" scoped>
.packets {
  &-top {
    display: flex;
    min-height: 41rem;
    padding: 0 25rem;
    background: $red;

	@media (max-width: 1500px) {
	  padding: 0 2rem;
	}

	@media (max-width: 1100px) {
	  flex-direction: column;
	  background: transparent;
	}
  }

  &-bottom {
    &-img {
      width: 100%;
    }
  }
}

.packet {
  max-width: 34rem;
  height: 100%;
  padding: 4rem 4.5rem;
  background: #fff;
  text-align: center;
  transform: translateY(200px);
  transition: .3s ease;

  &:not(:last-child) {
    margin-right: 2.4rem;
  }

  &:hover {
	  cursor: pointer;
      transform: translate3d(0,195px,0);
      box-shadow: 0 2rem 5rem rgb(22 28 45 / 94%), 0 1.5rem 1rem -1.75rem rgb(22 28 45 / 54%) !important;

	@media (max-width: 1100px) {
	  transform: none;
	  box-shadow: none;
	}
  }

  @media (max-width: 1100px) {
	max-width: 100%;
	transform: none;
	padding: 2.4rem;
    margin-bottom: 1.6rem;
	color: #fff;

	&:not(:last-child) {
	  margin-right: 0;
	}
  }

  &:nth-child(even) {
	@media (max-width: 1100px) {
	  background: url('../static/img/filter1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
	}
  }

  &:nth-child(odd) {
    @media (max-width: 1100px) {
      background: url('../static/img/filter2.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &-title {
    margin-bottom: 2rem;
    position: relative;
    text-align: center;
    font-size: 2.4rem;

    &:after {
      content: '';
      width: 70%;
      height: .1rem;
      position: absolute;
      bottom: -.6rem;
      left: 15%;
      background: $red;
    }
  }

  &-description {
    margin-bottom: 3rem;
  }

  &-price {
    font-size: 3rem;

    &__base {
      margin-bottom: 3rem;
      font-size: 1.6rem;
      text-decoration: line-through;
    }
  }
}
</style>
