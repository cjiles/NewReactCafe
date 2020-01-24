import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Card, CardImg, CardBody, CardHeader, CardText, Jumbotron} from 'reactstrap';
import { LOCATIONS } from '../shared/locations';


class Home extends Component {
	constructor(props) {
        super(props);
        this.state = {
          locations: LOCATIONS
        };
	}

	renderLocations(location) {

			if(location) {
				return(
					<div className="row">
						{location.map(location => {
						return(<div key={location.id} className="m-4">
							<Card>
								<CardHeader>
									<h4>{location.name}</h4>
								</CardHeader>
								<CardBody>
									<CardImg src={location.image} alt={location.altimage} />
									<CardText>
										{location.address} <br />
										{location.hours} <br />
										{location.number}
									</CardText>
								</CardBody>
							</Card> 
						</div> )}
							)
						}
					</div>	
				)
			};
			return(<div/>)
		}
	
	render() {

		let styles = {
			margin: 'auto',
			width: '70%',
		};

		return (
			<React.Fragment>
				<Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>React</h1>
                                <h3>Served Fresh Daily</h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
				<div className="container">
					<div style={styles} className="col-12">
						<Carousel>
							<div>
							<img src="/assets/images/img15.jpg" alt="cafe" />
								<p className="cafe">Enjoy our Cafe</p>
							</div>
							<div>
								<img src="/assets/images/img16.jpg" alt="cafee"/>
								<p className="Cafe">Our Coffee is the best</p>
							</div>
							<div>
								<img src="/assets/images/img17.jpg" alt="cafe"/>
								<p className="Cafe">Come and Join Us</p>
							</div>
							<div>
								<img src="/assets/images/img18.jpg" alt="cafe"/>
								<p className="Cafe">Pour a Cup</p>
							</div>
						</Carousel>
					</div>
					<hr />
					<h2> Locations </h2> 
					<div className="row ml-3">
						{this.renderLocations(this.state.locations)}
					</div>
				</div>
				<hr />
				<div className="container">
					<h3> Follow Us on Instagram </h3>
					<br />
					<div className="row mb-5">
						<div className="col-md-4 mt-3">
							<img src="/assets/images/InstagramShop.jpg" alt="Shop"></img>
						</div>
						<div className="col-md-4 mt-3">
							<img src="/assets/images/InstagramCoffee.jpg" alt="Coffee"></img>
						</div>
						<div className="col-md-4 mt-3">
							<img src="/assets/images/InstagramBreakfast.jpg" alt="Sandwich"></img>
						</div>
					</div>
				</div>
		</React.Fragment>
		);
	}
}



//  let styles = {
//     margin: 'auto',
// 	width: '600px',

//   };

//   function RenderLocation({location}) {
//     return (
//         <Card>
//             <CardHeader>
//                 <h3>{location.name}</h3>
//             </CardHeader>
//             <CardBody>
//                 <CardImg src={location.image} alt={location.altimage} />
//                 <CardText>
//                     {location.address} <br />
//                     {location.hours} <br />
//                     {location.number}
//                 </CardText>
//             </CardBody>
//         </Card> 
//     );
// }

  
// function HomeComponent() {
	
       
	
	// return (
	// 	<div className="container">
	// 		<div style={styles}>
	// 			<Carousel>
	// 				<div>
	// 				<img src="/assets/images/img15.jpg" alt="cafe" />
	// 					<p className="cafe">Cafe</p>
	// 				</div>
	// 				<div>
	// 					<img src="/assets/images/img16.jpg" alt="cafe"/>
	// 					<p className="Cafe">Cafe</p>
	// 				</div>
	// 				<div>
	// 					<img src="/assets/images/img17.jpg" alt="cafe"/>
	// 					<p className="Cafe">Cafe</p>
	// 				</div>
	// 				<div>
	// 					<img src="/assets/images/img18.jpg" alt="cafe"/>
	// 					<p className="Cafe">Cafe</p>
	// 				</div>
	// 			</Carousel>
	// 		</div>
	// 		<div key={location.id} className="row m-3">
    //            <RenderLocation location={location} />
    //        </div>
			
	// 	</div>
	
	
	
//   );
// }

export default Home; 
