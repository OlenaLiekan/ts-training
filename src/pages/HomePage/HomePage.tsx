import React, { FC } from 'react';
import Card, { CardVariant } from '../../components/Card';
import Btn from '../../components/Btn';
import EventsExample from '../../components/EventsExample';
import '../../app.scss';

const HomePage: FC = () => {

    const [isPrimary, setIsPrimary] = React.useState<boolean>(false);

    const changeStyle = () => {
        !isPrimary ? setIsPrimary(true) : setIsPrimary(false);
    }

    return (
        <div className="main__container">
            <div className='main__title'>Hey, Olena!</div>
            <Card variant={isPrimary ? CardVariant.primary : CardVariant.outlined} width='200px' height='200px'>
                <Btn onClick={changeStyle} />
            </Card>
            <EventsExample />
        </div>
    );
};

export default HomePage;