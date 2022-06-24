<template>
  <div class="container"  id="features">
    <h2 class="features-title">Услуги</h2>
    <div class="features-list">
      <div class="features-toggle" :class="{opened: isOpen}" @click.prevent="toggle">
        <span>Отдельные зоны</span>
        <svg-icon class="icon" name="arrow-down" />
      </div>
		<transition name="fade">
			<div class="list" :class="{active: isOpen}">
				<div class="list-item" v-for="feature in list">
					<div v-text="feature.title" />
					<div class="time" v-text="feature.time" />
					<div v-text="feature.price" />
					<button class="btn" @click.prevent="$emit('open')">Записаться</button>
				</div>
			</div>
		</transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features-list',
  data() {
    return {
      list: [
        {
          title: 'RF-lifting Лицо (без век)',
          time: '60 мин',
          price: '1800Р',
        },
        {
          title: 'RF-lifting Лицо (без век)',
          time: '60 мин',
          price: '1800Р',
        },
        {
          title: 'RF-lifting Лицо (без век)',
          time: '60 мин',
          price: '1800Р',
        },
        {
          title: 'RF-lifting Лицо (без век)',
          time: '60 мин',
          price: '1800Р',
        },
        {
          title: 'RF-lifting Лицо (без век)',
          time: '60 мин',
          price: '1800Р',
        },
        {
          title: 'RF-lifting Лицо (без век)',
          time: '60 мин',
          price: '1800Р',
        },
      ],
      isOpen: true,
    }
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: auto;
  padding: 12rem 30rem;

  @media (max-width: 1400px) {
	padding: 6rem 2rem;
  }
}

.features {
  &-toggle {
    margin-bottom: 2rem;
    font-size: 2.4rem;
    cursor: pointer;
  }

  &-title {
    text-align: center;
    font-size: 3.8rem;
  }
}

.list {
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: .3s;

  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;
    border-bottom: .1rem solid $grey;

	@media (max-width: 768px) {
	  display: grid;
	  grid-template-columns: 1fr 1fr;
	  grid-gap: 2rem;
	}

	.time {
	  @media (max-width: 768px) {
		justify-self: center;
	  }
	}

    &:first-child {
      border-top: .1rem solid $grey;
    }
  }
}

.active {
  display: block;
  height: auto;
  opacity: 1;
}

.opened {
  .icon {
    transform: rotate(180deg);
  }
}

.icon {
  width: 1.7rem;
  height: 1rem;
  transition: .3s;
}
</style>
