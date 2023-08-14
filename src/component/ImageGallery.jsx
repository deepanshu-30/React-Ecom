import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Divider from '@mui/material/Divider';

export default function ImageGallery() {
    return (
        <>
            <ImageList sx={{ width: 'auto', height: 'auto', mx: 'auto', my: 10 }} variant="woven" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=161&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Divider sx={{ background: 'grey' }} />
        </>
    );
}

const itemData = [
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg',
        title: 'Bed',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg',
        title: 'Kitchen',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2020/05/suco-de-limao-com-slash.jpg',
        title: 'Sink',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/vegan-curry-with-fresh-herbs.jpg',
        title: 'Books',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/xiaolongbao-dumplings.jpg',
        title: 'Chairs',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/brewing-espresso-in-a-glass-cup.jpg',
        title: 'Candle',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/05/pasta.jpg',
        title: 'Laptop',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/05/pizza-salami-slices.jpg',
        title: 'Doors',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/03/french-fries-detail.jpg',
        title: 'Coffee',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
        title: 'Storage',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/caramel-frappuccino.jpg',
        title: 'Coffee table',
    },
    {
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/07/meatballs.jpg',
        title: 'Blinds',
    },
];