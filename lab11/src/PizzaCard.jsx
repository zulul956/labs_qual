import React, { useState } from 'react';
import img from './images.jpg';
import './Pizza.css'

const PizzaCard = () => {
    const [num, setNum] = useState(0);

    function add() {
        setNum(num + 1);
    }
    function remove() {
        setNum(num - 1);
    }

    return (
        <div className='card'>
            <img
                src={img}
                alt=''
            />
            <h2>Пепперони</h2>
            <p>Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла</p>
            <select
                name=''
                id=''>
                <option>Диаметр</option>
            </select>
            <div className='price'>от 550 Р</div>
            <div>
                <button onClick={remove}>-</button>
                {num}
                <button onClick={add}>+</button>
                <button
                    className='korzina'
                    onClick={() => {
                        alert(`Количество заказанного товара: ${num}`);
                    }}>
                    Корзина
                </button>
            </div>
        </div>
    );
};

export default PizzaCard;