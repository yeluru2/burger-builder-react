import React from 'react';
import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngridient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {
                transformedIngredients.length === 0 ?
                    <p>Please start building burger</p> : transformedIngredients
            }
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
};

export default burger;