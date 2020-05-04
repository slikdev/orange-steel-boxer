import React from "react"
import styled from "styled-components"
import { up } from "styled-breakpoints"

import EventCard from "../EventListingComponent/EventCard"

const LineupComponent = ({ title, events }) => {

    return(
        <Container>
            <Top>
                <Title>{title}</Title>
            </Top>
            <Grid>
                <div className="row">
                    {events.map((item, index) => (
                        <div key={index} className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
                            <Item>
                                <EventCard 
                                    title={item.title}  
                                    dateTime={item.dateTime}  
                                    image={item.image.file.url}  
                                    slug={item.slug}  
                                    category={item.category.title}  
                                    link={(item.eventbriteLink ? item.eventbriteLink : "#")} 
                                />
                            </Item>
                        </div>
                    ))}
                </div>
            </Grid>
        </Container>
    )
}

export default LineupComponent

const Container = styled.div`
    width:100%;
    max-width:1280px;
    margin-left:auto;
    margin-right:auto;
    padding-left:10px;
    padding-right:10px;
`

const Top = styled.div`
    text-align:center;
`
const Title = styled.h3`
    ${up('xs')}{
        font-size:50px;
        margin-bottom:60px;
    }

    ${up('md')}{
        margin-bottom:70px;
    }

    ${up('lg')}{
        font-size:100px;
        
    }
`

const Grid = styled.div``

const Item = styled.div`
    position:relative;
    width:100%;
    margin-top:30px;
    margin-bottom:10px;
`