import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"
import Swiper from "swiper"

import EventCard from "./EventCard"

class EventListingComponent extends React.Component {

    constructor(props){
        super(props)
        this.swiper = null
    }

    componentDidMount(){

        const breakpoints = {
            280: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: true,
            },
            728: {
                slidesPerView: 2.2,
                spaceBetween: 0,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
                centeredSlides: false,
            },
        }

        this.swiper = new Swiper(`.swiper-container-${this.props.hash}`, {
            direction: "horizontal",
            breakpoints: breakpoints,
            loop: true,
            autoplay: {
                delay: 3000,
            },
        })

    }

    render(){

        const { hash, title, events } = this.props

        return(
            <Container>
                <Title>{title}</Title>
                <Carousel>
                    <div className={`swiper-container swiper-container-${hash}`}>
                        <div className="swiper-wrapper">
                            {events.map((item, index) => (
                                <div key={index} className="swiper-slide" role="listitem">
                                    <EventCard 
                                        title={item.title}  
                                        identifier={item.identifier}  
                                        dateAndTime={item.dateAndTime}  
                                        timestamp={item.timestamp}  
                                        image={item.image.file.url}  
                                        slug={item.slug}  
                                        category={item.category.title} 
                                        link={`/events/${item.slug}`} 
                                        transition={this.props.transition}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Carousel>
            </Container>
        )

    }

}

export default EventListingComponent

const Container = styled.div`

    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;
    
    ${up('xs')} {
        text-align:center;
        margin-top:60px;
        margin-bottom:30px;
    }

    ${up('md')} {
        margin-top:65px;
        margin-bottom:35px;
    }
    ${up('lg')} {
        text-align:left;
        margin-top:80px;
        margin-bottom:40px;
        padding-left:20px;
        padding-right:20px;
    }
    ${up('xl')} {
        margin-top:160px;
        margin-bottom:80px;
        padding-left:0px;
        padding-right:0px;
    }

`

const Title = styled.h2`
    margin:0;
    padding:0;

    ${up('xs')} {
        margin-bottom:30px;
        font-size:40px;
    }
    
    ${up('md')} {
        margin-bottom:35px;
        font-size:60px;
    }

    ${up('lg')} {
        margin-bottom:0px;
        font-size:70px;
        margin-bottom:-30px;
        z-index:2;
        position: relative;
    }
    
    ${up('xl')} {
        
    }
`

const Carousel = styled.div`
    width:100%;
    z-index:1;
    position: relative;

    ${up('md')} {
        padding-left:0px;
        padding-right:0px;
    }
    
    ${up('lg')} {
        padding-left:0px;
        padding-right:0px;
    }
`