import {
    useRef
} from "react";
import {generateUUID} from "../../utils/getUUID";
import Slider from "react-slick";

const SliderComp = ({data, type, items = 1}: { data: any, type: string, items: number }) => {
    let _classType = 'default';
    const uuidRef = useRef(generateUUID());
    const sliderRef = useRef(null);

    if (type === 'home') {
        _classType = type
    }
    if (type === 'single') {
        _classType = type
    }

    const NextArrow = ({className, style, onClick}: { className?: any, style?: any, onClick?: any }) => {
        return <button className="slick-arrow slick-arrow__next" onClick={onClick}><i className="fas fa-chevron-right"/></button>
    }
    const PrevArrow = ({className, style, onClick}: { className?: any, style?: any, onClick?: any }) => {
        return <button className="slick-arrow slick-arrow__prev" onClick={onClick}><i className="fas fa-chevron-left"/></button>
    }

    if (data) {
        const settings = {
            dots: type === 'home',
            arrows: true,
            className: type === 'home' ? 'slider-home' : 'slider-single',
            infinite: true,
            slidesToShow: type === 'home' ? 1 : 3,
            slidesToScroll: type === 'home' ? 1 : 3,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            appendDots: (res: any) => {
                return <div>
                    <ul className="flex justify-center">
                        {res}
                    </ul>
                </div>
            }
        };
        // console.log('sliderRef', sliderRef)
        return <div id={uuidRef.current} className={`container-eco__slider container-eco__${_classType}`}>
            <Slider ref={sliderRef} {...settings}>
                {data.map((item: any, key: number) => {
                    const {title, image} = item;
                    return <div key={`carousel-item-${key}`} className={`slick-slider__${_classType}__item`}>
                        <div className={`slick-slider__caption text-base`}>{title}</div>
                        <div className={`slick-slider__image`}>
                            <img src={image} alt={title} className="h-full w-full object-cover"/>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    }
    return <></>
}

export default SliderComp;
