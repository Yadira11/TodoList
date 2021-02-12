import React from "react";

export function CarouselCaption() {
	return (
		<div className="bd-example">
			<div
				id="carouselExampleCaptions"
				className="carousel slide"
				data-ride="carousel">
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleCaptions"
						data-slide-to="0"
						className="active"></li>
					<li
						data-target="#carouselExampleCaptions"
						data-slide-to="1"></li>
				</ol>
				<div className="carousel-inner" role="listbox">
					<div className="carousel-item active">
						<img
							className="d-block w-70"
							src="https://cdn.doers.video/embed/ab97c05327bd9e6b7d2647f4dadbaf91988ef361526421022/58fa2b6092a32.jpg"
							alt="First slide"
						/>
						<div className="carousel-caption d-none d-md-block">
							<h3>
								Nunca ames a alguien que te haga sentir
								ordinario.
							</h3>
							<p>
								Cuida lo que amas, porque los recuerdos no se
								pueden abrazar
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://media-cdn.tripadvisor.com/media/photo-s/0e/de/cb/e5/oasis-bolivia.jpg"
							alt="Second slide"
						/>
						<div className="carousel-caption d-none d-md-block">
							<h3>
								Celebra tus propias victorias porque nadie mas
								entiende, lo que te costo alcanzarlas.
							</h3>
							<p>
								No es cafe, ni tequila, es tu codigo que no
								copila.
							</p>
						</div>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}
