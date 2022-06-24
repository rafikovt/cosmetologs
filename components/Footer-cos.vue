<template>
	<div class="container" id="contacts">
		<div class="wrapper">
			<div class="rights">
				<img class="logo" src="../static/img/logo.svg" alt="Логотип косметолог Уфа">
				<p>2022 Все права защищены</p>
				<a class="link" href="/privacy.pdf" target="_blank">Политика конфиденциальности</a>
			</div>
			<div class="menu">
				<p class="menu-title">Меню</p>
				<ul class="menu-list">
					<li>
						<a class="link" href="#" v-scroll-to="'#price'">Цены</a>
					</li>
					<li>
						<a class="link" href="#" v-scroll-to="'#features'">Услуги</a>
					</li>
					<li>
						<a class="link" href="#" v-scroll-to="'#actions'">Акции</a>
					</li>
					<li>
						<a class="link" href="#" v-scroll-to="'#benefits'">Преимущества</a>
					</li>
				</ul>
			</div>
			<div class="contacts">
				<p class="contacts-title">Контакты:</p>
				<a class="contacts-item link" href="tel:+79170455690">+7 (917) 045-56-90</a>
				<a class="contacts-item link" href="#">cosmetolog-ufa@mail.ru</a>
				<p class="contacts-item">г. Уфа, ул. Комсомольская д.18</p>
			</div>

			<div class="social">
				<p class="social-title">Мы в соц. сетях:</p>
				<a class="social-link" href="https://vk.com/alsugilmanova" target="_blank">
					<svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11.9378 12C4.7629 12 0.670518 7.49553 0.5 0H4.094C4.21205 5.50153 6.86158 7.83181 8.96027 8.31229V0H12.3445V4.74471C14.417 4.5405 16.5941 2.37839 17.3287 0H20.7129C20.1488 2.93095 17.7878 5.09306 16.1089 5.98195C17.7878 6.70268 20.4769 8.58857 21.5 12H17.7747C16.9746 9.71771 14.981 7.95193 12.3445 7.71169V12H11.9378Z" fill="#fff"/>
					</svg>
				</a>
				<a class="social-link" href="https://t.me/+79170455690" target="_blank">
					<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							  d="M16.785 0.0928431L0.840309 5.79369C-0.247747 6.19877 -0.241448 6.76133 0.641417 7.01243L4.65706 8.17429L5.9413 12.3642L5.9458 12.3773C5.9827 12.4727 6.0088 12.5575 6.0313 12.6328C6.1312 12.9591 6.22929 13.1595 6.73057 13.1595C7.08786 13.1595 7.33535 13.0029 7.59724 12.7675L9.58616 10.9748L13.7224 13.8095C14.4838 14.1989 15.0327 13.9968 15.2226 13.1534L17.9378 1.28883C18.2159 0.2547 17.513 -0.214247 16.785 0.0928431V0.0928431ZM14.7268 2.81641L7.05186 9.23905V9.23817V9.23905L6.79717 12.7745L6.75937 12.7754C6.50738 12.7806 6.50648 12.7798 6.42999 12.5278C6.40659 12.4526 6.37869 12.3589 6.33729 12.2531L5.03954 8.01769L14.2066 2.65543C14.6539 2.40345 15.0642 2.53906 14.7268 2.81641V2.81641Z" fill="#fff"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'footer-cos'
}
</script>

<style lang="scss" scoped>
	.container {
      background: $red-light;
	  color: #fff;
	}

	.wrapper {
      display: flex;
      justify-content: space-between;
      padding: 4rem 25rem;

	  @media (max-width: 1400px) {
		padding: 4rem 2rem;
	  }

	  @media (max-width: 768px) {
		flex-direction: column;
		font-size: 1.6rem;
	  }
	}

	.right {
	  display: flex;
	  flex-direction: column;
	}

	.rights {
	  @media (max-width: 1100px) {
		max-width: 20rem;
	  }

	  @media (max-width: 768px) {
		max-width: 100%;
	  }
	}

	.link {
	  color: #fff;
	  transition: .3s ease;

	  &:hover {
		color: $red;
	  }
	}

	.menu {
	  &-title {
		margin-bottom: 2.4rem;
	  }

	  &-list {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		max-height: 10rem;

		@media (max-width: 1100px) {
		  flex-wrap: nowrap;
		  max-height: unset;
		}
	  }

	  li {
		margin-bottom: 1.6rem;
		margin-right: 5.6rem;
	  }
	}

	.contacts {
	  display: flex;
	  flex-direction: column;

	  &-title {
		margin-bottom: 2.4rem;
	  }

	  &-item {
		margin-bottom: 1.5rem;
	  }
	}

	.social {
	  &-title {
		margin-bottom: 2.4rem;
	  }
	}

	.social-link {
	  path {
		transition: .3s ease;
	  }
	  &:hover {
        path {
          fill: $text;
		}
	  }
	}
</style>