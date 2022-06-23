<template>
  <div class="container">
    <h2 class="actions-title toggle">
      <span class="title-2">Акции</span>
      <svg-icon class="icon" name="arrow-down" />
    </h2>
    <div class="actions-list">
      <div class="actions-item">
        <img class="actions-item-img" src="../static/img/action-1.jpg" alt="Акция">
        <div class="actions-item-bottom">
          <div class="actions-price">
            <span class="actions-price__current">4000 ₽</span>
            <span class="actions-price__base">5400 ₽</span>
          </div>
          <h3 class="actions-title">Лицо + шея +декольте</h3>
          <p class="actions-description">При первичном обращении в клинику специалист проводит компьютерную диагностику аппаратом Janus</p>
          <button class="btn" @click.prevent="$emit('open')">Записатсья</button>
        </div>
      </div>
      <div class="actions-item">
        <img class="actions-item-img" src="../static/img/action-2.jpg" alt="Акция">
        <div class="actions-item-bottom">
          <div class="actions-price">
            <span class="actions-price__current">4000 ₽</span>
            <span class="actions-price__base">5400 ₽</span>
          </div>
          <h3 class="actions-title">Лицо + шея +декольте</h3>
          <p class="actions-description">При первичном обращении в клинику специалист проводит компьютерную диагностику аппаратом Janus</p>
          <button class="btn" @click.prevent="$emit('open')">Записатсья</button>
        </div>
      </div>
      <div class="actions-item">
        <img class="actions-item-img" src="../static/img/action-3.jpg" alt="Акция">
        <div class="actions-item-bottom">
          <div class="actions-price">
            <span class="actions-price__current">4000 ₽</span>
            <span class="actions-price__base">5400 ₽</span>
          </div>
          <h3 class="actions-title">Лицо + шея +декольте</h3>
          <p class="actions-description">При первичном обращении в клинику специалист проводит компьютерную диагностику аппаратом Janus</p>
          <button class="btn" @click.prevent="$emit('open')">Записатсья</button>
        </div>
      </div>

    </div>
    <div class="actions-banner"></div>
  </div>
</template>

<script>
export default {
  name: 'Cos-actions'
}
</script>

<style lang="scss" scoped>
.container {
  width: auto;
  padding: 12rem 25rem 0 25rem;

  @media (max-width: 1300px) {
	padding: 5rem 2rem;
  }
}

.actions {
  &-list {
    display: flex;
    align-items: center;

	@media (max-width: 768px) {
	  flex-direction: column;
	}
  }

  &-item {
    max-width: 46rem;
    text-align: center;
    background: $pink-light;

	@media (max-width: 768px) {
	  max-width: 100%;
	}

    &:not(:last-child) {
      margin-right: 2.5rem;

	  @media (max-width: 768px) {
		margin: 0;
	  }
    }

    &-img {
      width: 100%;
    }

    &-bottom {
      padding: 3rem 3rem 4rem 3rem;
    }
   }

  &-price {
    margin-bottom: 2.4rem;

    &__current {
      font-size: 3rem;
    }

    &__base {
      font-size: 1.6rem;
      text-decoration: line-through;
    }
  }

  &-title {
    margin-bottom: 1rem;
    font-size: 2.4rem;
  }

  &-description {
    margin-bottom: 2.5rem;
  }
}

.toggle {
  margin-bottom: 6rem;
  text-align: center;
}

.icon {
  width: 1.7rem;
  height: 1rem;
  transition: .3s;
}
</style>
