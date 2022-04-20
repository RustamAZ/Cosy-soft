import React from 'react';
import GallaryItem from '../GallaryItem/GallaryItem';
import classes from './Gallary.module.scss';
interface Iitem {
    url: string,
    alt: string,
    desc: string
}

const Gallary: React.FC<any> = () => {
    const gallaryList: Iitem[] = [
        {
            url: 'https://www.playerup.com/data/avatars/l/1085/1085573.jpg?1623451162',
            alt: 'item 1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sequi!'
        },
        {
            url: 'https://tophotels.ru/icache/user_avatars/1231/1230038_2689405746_219x219.jpeg',
            alt: 'item 2',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sequi!'
        },
        {
            url: 'https://i.playground.ru/i/pix/629019/image.jpg?220x206',
            alt: 'item 3',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sequi!'
        },
    ]

    return (
        <section className={classes.Gallary}>
            <h1 className={classes.title}>Gallary</h1>
            <ul className={classes.list}>
                {gallaryList.map(item => {
                    return <GallaryItem key={item.alt} dataItem={item} />
                })}
            </ul>
        </section>
    )
}

export default Gallary;