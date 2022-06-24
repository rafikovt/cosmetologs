<template>
  <div class="container" id="benefits">
    <h2 class="title-2">Наши преимущества</h2>
    <div class="benefits-list">
      <div class="benefits-item" v-for="benefit in benefits">
        <div class="benefits-img">
          <svg-icon class="icon" :name="benefit.icon" />
        </div>
        <h3 class="benefits-title" v-text="benefit.title"/>
        <p class="benefits-description" v-text="benefit.description"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cos-benefits',
  data() {
    return {
      benefits: [
        {
          icon: 'star',
          title: 'Сертифицированные специалисты',
          description: 'Все специалисты имеют дипломы высшего образования в области косметологии',
        },
        {
          icon: 'time',
          title: 'Международные медицинаские стандарты',
          description: 'Благодаря сертифицированным препаратам и оборудованию можно добиться желаемых результатов при минимальном количестве процедур.',
        },
        {
          icon: 'star',
          title: 'Индивидуальный подход',
          description: 'Осуществляем подбор индивидуального ухода или курса корректирующих процедур',
        },
        {
          icon: 'calendar',
          title: 'Сертифицированные специалисты',
          description: 'Процедуру можно проводить в любое время года',
        },
        {
          icon: 'star',
          title: 'Сертифицированные специалисты',
          description: 'Процедуру можно проводить в любое время года',
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: auto;
  padding: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1400px) {
	padding: 5rem 2rem;
  }
}

.title-2 {
  margin-bottom: 5.6rem;
  text-align: center;
}

.icon {
  width: 2.4rem;
  height: 2.4rem;
}

.benefits {
  &-list {
    margin: 0 auto;
    display: flex;

	@media (max-width: 1400px) {
	  flex-direction: column;
	}
  }

  &-item {
    max-width: 27rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

	@media (max-width: 1400px) {
	  max-width: 100%;
	}

    &:not(:last-child) {
      margin-right: 2.7rem;

	  @media (max-width: 1400px) {
		margin: 0;
	  }
    }
  }

  &-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.8rem;
    height: 8.8rem;
    margin-bottom: 1.6rem;
    border-radius: 50%;
    background: $pink-light;
  }

  &-title {
    margin-bottom: .5rem;
    font-size: 2.4rem;
  }
}
</style>
