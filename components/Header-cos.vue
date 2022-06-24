<!-- Please remove this file from your project -->
<template>
  <header class="hdr">
    <div class="container">
      <div class="hdr-top">
        <div class="hdr-address">г. Уфа, ул. Комсомольская д.18</div>
        <div class="hdr-contacts flex">
          <a class="hdr-phone link" href="tel:+79170455690">+7 (917) 045-56-90</a>
          <ul class="hdr-social-list flex">
            <li class="social-list-item">
              <a class="social-link" href="https://vk.com/alsugilmanova" target="_blank">
				  <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					  <path
						  d="M11.9378 12C4.7629 12 0.670518 7.49553 0.5 0H4.094C4.21205 5.50153 6.86158 7.83181 8.96027 8.31229V0H12.3445V4.74471C14.417 4.5405 16.5941 2.37839 17.3287 0H20.7129C20.1488 2.93095 17.7878 5.09306 16.1089 5.98195C17.7878 6.70268 20.4769 8.58857 21.5 12H17.7747C16.9746 9.71771 14.981 7.95193 12.3445 7.71169V12H11.9378Z" fill="#fff"/>
				  </svg>
			  </a>

            </li>
            <li class="social-list-item">
              <a class="social-link" href="https://t.me/+79170455690" target="_blank">
				  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					  <path fill-rule="evenodd" clip-rule="evenodd"
							d="M16.785 0.0928431L0.840309 5.79369C-0.247747 6.19877 -0.241448 6.76133 0.641417 7.01243L4.65706 8.17429L5.9413 12.3642L5.9458 12.3773C5.9827 12.4727 6.0088 12.5575 6.0313 12.6328C6.1312 12.9591 6.22929 13.1595 6.73057 13.1595C7.08786 13.1595 7.33535 13.0029 7.59724 12.7675L9.58616 10.9748L13.7224 13.8095C14.4838 14.1989 15.0327 13.9968 15.2226 13.1533L17.9378 1.28883C18.2159 0.2547 17.513 -0.214247 16.785 0.0928431ZM14.7268 2.81641L7.05186 9.23905V9.23817V9.23905L6.79717 12.7745L6.75937 12.7754C6.50738 12.7806 6.50648 12.7798 6.42999 12.5278C6.40659 12.4526 6.37869 12.3589 6.33729 12.2531L5.03954 8.01769L14.2066 2.65543C14.6539 2.40345 15.0642 2.53906 14.7268 2.81641Z" fill="#fff"/>
				  </svg>

			  </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hdr-bottom">
		  <button id="nav-icon6" :class="{'open': isOpen}" @click.prevent="isOpen = !isOpen">
			  <span></span>
		  </button>
		  <a class="mobile link" href="tel:+79170455690">+7 (917) 045-56-90</a>
        <img class="logo" src="../static/img/logo.svg" alt="Логотип">
        <nav class="hdr-nav" :class="{'open': isOpen}">
          <ul class="hdr-nav-list">
            <li class="nav-list-item">
              <a class="nav-list-link link" href="#" v-scroll-to="'#about'">О нас</a>
            </li>
            <li class="nav-list-item">
              <a class="nav-list-link link" href="#" v-scroll-to="'#features'">Услуги</a>
            </li>
            <li class="nav-list-item">
              <a class="nav-list-link link" href="#" v-scroll-to="'#price'">Цены</a>
            </li>
            <li class="nav-list-item">
              <a class="nav-list-link link" href="#" v-scroll-to="'#actions'">Акции</a>
            </li>
            <li class="nav-list-item">
              <a class="nav-list-link link" href="#" v-scroll-to="'#benefits'">Преимущества</a>
            </li>
            <li class="nav-list-item">
              <a class="nav-list-link link" href="#" v-scroll-to="'#contacts'">Контакты</a>
            </li>

          </ul>
        </nav>
        <button class="hdr-btn btn btn-transparent" @click.prevent="$emit('open')">Запись онлайн</button>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header-main',
	data() {
	  return {
		  isOpen: false,
	  }
	}
}
</script>

<style lang="scss">

.hdr {
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 25rem;
    background: $red-light;

	@media (max-width: 1400px) {
	  padding: 1rem 2rem;
	}

	@media (max-width: 968px) {
	  display: none;
	}
  }

  &-contacts {
    align-items: center;
  }

  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 25rem;
    background-color: $pink-light;
    border-bottom: .1rem solid $grey;

    @media (max-width: 1400px) {
      padding: 1rem 2rem;
    }
  }

  &-phone {
    margin-right: 5.6rem;
    color: #fff;
  }

  &-nav {
    &-list {
      display: flex;
      align-items: center;

	  @media (max-width: 968px) {
		flex-direction: column;
        width: 100%;
		padding: 3rem;
      }

      .nav-list-item {
        &:not(:last-child) {
          margin-right: 5rem;

		  @media (max-width: 968px) {
			margin-right: 0;
			margin-bottom: 3rem;
		  }
        }
      }
    }

    @media (max-width: 968px) {
      width: 100%;
      visibility: hidden;
	  opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1111;
      backdrop-filter: blur(30px);
      transition: all .5s  ease;

	  &.open {
		visibility: visible;
		opacity: 1;

	  }
    }
  }

  &-social-list {
    @media (max-width: 968px) {
      display: none;
    }
  }

  &-btn {
	@media (max-width: 968px) {
	  display: none;
	}
  }
}

.logo {
  @media (max-width: 968px) {
	width: 4.5rem;
	height: 4.5rem;
  }
}

.social-list {
  &-item {
    &:not(:last-child) {
      margin-right: 2.4rem;
    }
	path {
	  transition: .3s ease;
	}

    &:hover {
      svg path {
        fill: $text;
      }
    }
  }
}

#nav-icon6 {
  width: 2rem;
  height: 4.5rem;
  display: none;
  position: relative;
  transition-duration: 1s;
  cursor: pointer;
  border: none;
  background: transparent;
  z-index: 11111;

  @media (max-width: 968px) {
	display: inline-flex;
  }
}
#nav-icon6 span {
  height: .2rem;
  width: 2rem;
  background-color: $red-light;
  border-radius: 2rem;
  position: absolute;
  top: 50%;
  transition-duration: .25s;
  transition-delay: .25s;
}
#nav-icon6 span:before {
  left: 0;
  position: absolute;
  top: -.8rem;
  height: .2rem;
  width: 2rem;
  background-color: $red-light;
  content: "";
  border-radius: 2rem;
  transition-duration: .25s;
  transition: transform .25s, top .25s .25s;
}
#nav-icon6 span:after {
  left: 0;
  position: absolute;
  top: .8rem;
  height: .2rem;
  width: 2rem;
  background-color: $red-light;
  content: "";
  border-radius: 2rem;
  transition-duration: .25s;
  transition: transform .25s, top .25s .25s;
}
#nav-icon6.open span {
  transition-duration: 0.1s;
  transition-delay: .25s;
  background: transparent;
}
#nav-icon6.open span:before {
  transition: top .25s, transform .25s .25s;
  top: 0px;
  transform: rotateZ(-45deg);
}
#nav-icon6.open span:after {
  transition: top 0.4s, transform .25s .25s;
  top: 0px;
  transform: rotateZ(45deg);
}

.mobile {
  display: none;

  @media (max-width: 968px) {
    display: inline-flex;
  }

}
</style>
