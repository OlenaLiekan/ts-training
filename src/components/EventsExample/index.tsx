import React, { FC } from 'react';
import style from './EventsExample.module.scss';

const EventsExample: FC = () => {

    const [value, setValue] = React.useState<string>('');
    const [isDrag, setIsDrag] = React.useState<boolean>(false);

    const inputRef = React.useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag');
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('drop');
    }

    return (
        <>
            <div className={style.line}>
                <input className={style.inputExample} value={value} onChange={changeHandler} type="text" placeholder='Controlled'/>
                <input className={style.inputExample} ref={inputRef} type="text" placeholder='Uncontrolled'/>                
                <button className={style.btnExample} onClick={clickHandler}>Search</button>
            </div>
            <div className={style.dragEl} onDrag={dragHandler} draggable>
                <span>DRAG ME DOWN</span>
            </div>
            <div
                className={isDrag ? style.dropEl : style.el}
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
            >
                <span>DROP HERE</span>
            </div>
        </>
    );
};

export default EventsExample;