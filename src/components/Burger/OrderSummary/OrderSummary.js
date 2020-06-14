import React, { Component } from "react";
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('component did update')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>{igKey}: {this.props.ingredients[igKey]}</li>
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicius burger with thee following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: {this.props.price}</p>
                <p>Continue with Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
};
export default OrderSummary;