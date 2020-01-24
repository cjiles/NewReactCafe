import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


 let styles = {
    margin: 'auto',
    width: '1000px',
   
  };
  
function HomeComponent() {
  return (
	<div style={styles}>
		<Carousel>
			<div>
            <img src="/assets/images/img15.jpg" alt="cafe" />
				<p className="cafe">Cafe</p>
			</div>
			<div>
				<img src="/assets/images/img16.jpg" alt="cafe"/>
				<p className="Cafe">Cafe</p>
			</div>
			<div>
				<img src="/assets/images/img17.jpg" alt="cafe"/>
				<p className="Cafe">Cafe</p>
			</div>
			<div>
				<img src="/assets/images/img18.jpg" alt="cafe"/>
				<p className="Cafe">Cafe</p>
			</div>
		</Carousel>
	</div>
  );
}

export default HomeComponent; 
