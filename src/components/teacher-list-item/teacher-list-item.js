import { useSelector } from "react-redux";
import './teacher-list-item.css';
import React from 'react';


const TeacherListItem = () => {
    const teachersCards = useSelector((state) => state.teachers.teachersCards);
    const subject = useSelector((state) => state.subjects.subjectName);
    const showCardsNumber = useSelector((state) => state.cards.showCards);


    const cards = teachersCards.slice(0,showCardsNumber).map(card => <div className={'teacher-list-item'}>
        <img src={card.photoPathSquare}/>
        <div>
            <div className="name">{`${card.firstName} ${card.patrName}`}</div>
            <div className="subject">{subject}</div>
            <div className="price">от {card.minPricePerHour} р</div>
        </div>
    </div>)


    return (
        <div>
            {cards}
        </div>
    );


};

export default TeacherListItem;