import React from 'react';
import { Media } from 'reactstrap';



function RenderMenu({menu}){
    return(
        <React.Fragment>
             <Media object className="col-8 col-md-4 ml-5" src={menu.image} alt={menu.altimage} width="300px" height="400px"/>
               <Media body className="col-8 col-md-6 ml-5 mb-4">
                    <Media heading >
                       <h3>{menu.name}</h3>
                       <p>{menu.description}</p>
                    </Media>
                    <br />                
                 <RenderItems items={menu.items}></RenderItems>
              </Media>
            </React.Fragment>
    );
}

function RenderItems({items}){
    if(items){
        return(
            <div className="col-md-12 m-1">
                {items.map(item => {
                    return (<div key={item.menuid}> 
                        <h4>{item.title} </h4>
                        <p> {item.price}</p>
                        {item.description}
                        <hr />
                        </div>)}
                    )
                }
            </div>
        );
    };
    
    return(<div/>);
}

function MenuItems(props) {
    if(props.menu){
        return (
           props.menu.map(menu =>{
                    return(
                        <div className="container" key={menu.id}>
                            <div className="row mt-5"> 
                                <RenderMenu menu = {menu}  />
                        </div>
                    </div>
                );
            })
        );
    }

    return (<div/>);

}


export default MenuItems;
