import React from 'react';
import { Card, CardImg, CardBody, CardHeader, Button, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

//destructuring the props parameter
function RenderMenu({menu}){
    return (
        <Card>
            <CardHeader>
                <h3>{menu.name}</h3>
            </CardHeader>
            <CardBody>
                <CardImg src={menu.image} alt={menu.altimage}  />
                {menu.description} <br />
            </CardBody>
            <CardFooter>
            <Button outline><Link to={`/menu/${menu.id}`}>{`VIEW ALL ${menu.name}`}</Link></Button>
            </CardFooter>
        </Card> 
    );
}

function Menu(props) {

    const menu = props.menu.map(menu => {  
        return (
           <div key={menu.id} className="ml-2 m-md-4">
               <RenderMenu menu={menu} />
           </div>
        );
    });
       
    return (
        <div className="container">
            <h1 align="center">Menu</h1>
            <hr />
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;