import {StyledCard} from "./styles/Card.styled"

export default function Card({item:{id,title,body,image}}){
return(

    <StyledCard>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <img src="./images/logo1.png" alt="huuu" />
        </div>
    </StyledCard>

)


}