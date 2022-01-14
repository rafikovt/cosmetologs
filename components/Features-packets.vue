<template>
  <div class="container">
    <div class="packets-top">
      <div class="packet">
          <h3 class="packet-title">Омоложение лица</h3>
          <p class="packet-description">3 процедуры при первичном обращении в клинику</p>
          <p class="packet-price">5000 ₽</p>
          <p class="packet-price__base">6000 ₽</p>
          <button class="btn">Записаться</button>
        </div>
      <div class="packet">
        <h3 class="packet-title">Омоложение лица</h3>
        <p class="packet-description">3 процедуры при первичном обращении в клинику</p>
        <p class="packet-price">5000 ₽</p>
        <p class="packet-price packet-price__base">6000 ₽</p>
        <button class="btn">Записаться</button>
      </div>
      <div class="packet">
        <h3 class="packet-title">Омоложение лица</h3>
        <p class="packet-description">3 процедуры при первичном обращении в клинику</p>
        <p class="packet-price">5000 ₽</p>
        <p class="packet-price packet-price__base">6000 ₽</p>
        <button class="btn">Записаться</button>
      </div>
      <div class="packet">
        <h3 class="packet-title">Омоложение лица</h3>
        <p class="packet-description">3 процедуры при первичном обращении в клинику</p>
        <p class="packet-price">5000 ₽</p>
        <p class="packet-price packet-price__base">6000 ₽</p>
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
  name: 'Features-packets'
}
</script>

<style lang="scss" scoped>
.packets {
  &-top {
    display: flex;
    min-height: 41rem;
    padding: 0 25rem;
    background: $red;
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
  transform: translateY(50%);

  &:not(:last-child) {
    margin-right: 2.4rem;
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
