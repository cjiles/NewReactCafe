import React from 'react';
import { Card, CardImg, CardBody, CardHeader, CardText} from 'reactstrap';


function RenderLocations({location}) {
    return (
        <Card>
            <CardHeader>
                <h3>{location.name}</h3>
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
    );
}

function Locations(props) {

    const location = props.location.map(location => {  
        return (
           <div key={location.id} className="m-3">
               <RenderLocations location={location} />
           </div>
        );
    });
       
    return (
        <div className="container">
            <h1 align="center">Locations</h1>
            <hr />
            <div className="row ml-5 mr-5" >
                {location}
            </div>
        </div>
    );
}

export default Locations;