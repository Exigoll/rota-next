export const Slider = () => {
	return (
		<div>
			<section className="section info">
				<div className="container">
					<div className="swiper info__slider slider-info">
						<div className="swiper-wrapper slider-info__wrapper">
							<div className="swiper-slide slider-info__slide">
								<img src="@img/slider-5.jpg" alt="img-slider" />
								<p>
									В нашем магазине Вы можете приобрести как оригинальные
									запчасти, так и недорогие аналоги
								</p>
							</div>
							<div className="swiper-slide slider-info__slide">
								<img src="@img/slider-6.jpg" alt="img-slider" />
								<p>
									Осуществляем доставку в любую точку России, а также в страны
									ближнего зарубежья
								</p>
							</div>
							<div className="swiper-slide slider-info__slide">
								<img src="@img/slider-1.jpg" alt="img-slider" />
								<p>
									В нашем магазине Вы можете приобрести шины и диски от лучших
									производителей в мире
								</p>
							</div>
							<div className="swiper-slide slider-info__slide">
								<img src="@img/slider-2.jpg" alt="img-slider" />
								<p>
									Всегда большой ассортимент товаров в наличии, на наших складах
									в Москве
								</p>
							</div>
							<div className="swiper-slide slider-info__slide">
								<img src="@img/slider-3.jpg" alt="img-slider" />
								<p>
									Огромный ассортимент моторных масел из наличия и под заказ
								</p>
							</div>
							<div className="swiper-slide slider-info__slide">
								<img src="@img/slider-4.jpg" alt="img-slider" />
								<p>
									Не нашли нужный товар на сайте? Свяжитесь с нами напрямую, и
									мы поможем с подбором!
								</p>
							</div>
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</div>
			</section>
		</div>
	);
};
