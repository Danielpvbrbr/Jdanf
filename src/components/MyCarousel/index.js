import React from 'react';
import Slider from '../Slider';

const images = [
    'https://img.freepik.com/vetores-gratis/fundo-abstrato-colorido_23-2148807053.jpg?size=626&ext=jpg',
    'https://img.elo7.com.br/product/original/2A1B178/fundo-fotografico-em-tecido-lampadas-horizontal-2-20x1-50m-cenario-3d.jpg',
    'https://s2.glbimg.com/ROEWMy1yewUCIRfeaMmaKDB3Wz8=/0x0:2235x1341/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_f035dd6fd91c438fa04ab718d608bbaa/internal_photos/bs/2019/D/v/ZWMMdTQKu2xahN0tUU4g/gettyimages-1132930101.jpg',
    'https://img.freepik.com/vetores-gratis/imagens-animadas-abstratas-neon-lines_23-2148344065.jpg?size=626&ext=jpg',

];

export default function MyCarousel() {

    return (
        <Slider images={images} />
    );

}

