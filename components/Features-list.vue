<template>
  <div class="container">
    <h2 class="features-title">Услуги</h2>
    <div class="features-list">
      <div class="features-toggle" :class="{opened: isOpen}" @click.prevent="toggle">
        <span>Отдельные зоны</span>
        <svg-icon class="icon" name="arrow-down" />
      </div>
      <div class="list" :class="{active: isOpen}">
        <div class="list-item" v-for="feature in list">
          <div v-text="feature.title" />
          <div v-text="feature.time" />
          <div v-text="feature.price" />
          <button class="btn">Записаться</button>
        </div>
      </div>
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
