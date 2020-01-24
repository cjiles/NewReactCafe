  
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Menu from './MenuComponent';
import Products from './ProductsComponent';
import HomeComponent from './HomeComponent';
import { CAFEITEMS } from '../shared/cafeitems';
import MenuItems from './MenuItemsComponent';
import { MENU } from '../shared/MenuItems';
import Locations from './LocationsComponent';
import { LOCATIONS } from '../shared/locations';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menus: MENU,
            cafeitems: CAFEITEMS,
            locations: LOCATIONS  
        };
    }

    render(){

        const MenuItemWithId = ({match}) => {
            return(
                <MenuItems menu={this.state.menus.filter(menu => menu.id === +match.params.menuItemId)} />               
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                <Route exact path='/home' component={HomeComponent} />
                    <Route exact path='/menu'  render={() => <Menu menu={this.state.menus} />}></Route>
                    <Route path='/menu/:menuItemId' component={MenuItemWithId} />
                    <Route exact path='/products' render={() => <Products cafeitems={this.state.cafeitems}  />} />
                    <Route exact path='/locations' render={() => <Locations location={this.state.locations} />} />  
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;