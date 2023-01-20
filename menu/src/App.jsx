import { useState } from 'react'
import { Card } from './components/card/Card'
import { Head } from './components/head/Head'
/* progettare una piccola UI di un menu di un ristorante
che contenta queste info: 
- nome del piatto
- prezzo 
pulsante per inserire o togliere dal carrello/
//Come con java gli import di solito si creano in automatico */

const pizzas = [
  {
    name: 'Margherita',
    ingredients: 'Tomato sauce, Mozzarella, Basil, EVO oil ',
    price: '5,50',
  },

  {
    name: 'Marinara',
    ingredients: 'Tomato sauce, EVO oil, garlic, Oregano',
    price: '4,50',
  },

  {
    name: 'Capricciosa',
    ingredients: 'Tomato sauce, Mozzarella, Anchovies, Ham, Mushrooms, Artichokes',
    price: '7,50',
  },

  {
    name: 'Diavola',
    ingredients: 'Tomato sauce, Mozzarella, Pepperoni, Basil',
    price: '8,00',
  },

  {
    name: 'Parmigiana',
    ingredients: 'Tomato sauce, Mozzarella, Fried aubergine, Cherry tomatos, Grana, Basil',
    price: '7,50',
  },
] 


function App() {

  return (
    <>
    <Head/>
    {pizzas.map((element, index) =>{
      return(
        <Card
        key = {index}
        pizzaName = {element.name}
        pizzaIngredient = {element.ingredients}
        price = {element.price}
          />
      );
    })}   
   </>
  );
}

export default App
