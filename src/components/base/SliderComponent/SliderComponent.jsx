import React from "react"

const SliderComponent = ({ slides }) => {

    return (
        <div>
            <div>THE SLIDER</div>
            {slides.map((slide, i) => (<div key={i}>{slide.title}</div>))}
        </div>
    )

}

export default SliderComponent