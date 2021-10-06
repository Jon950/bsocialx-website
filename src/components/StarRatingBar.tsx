// Icons
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";

interface StarProps {
    numberOfStars: number
}

const StarRatingBar: React.FC<StarProps> = ({numberOfStars}) => {

    const starSize = "20px"
    const starType = [
        <BsStar size={starSize} title="Star Rating"/>,
        <BsStarHalf size={starSize} title="Star Rating"/>,
        <BsStarFill size={starSize} title="Star Rating"/>]

    let starList = []
    let temp = numberOfStars
    for (var i=0; i < 5; i++) {
        if(temp > 0.5){
            starList.push(2)
            --temp;

        } else if(temp === .5) {
            starList.push(1)
            --temp;

        } else if(temp < .5) {
            starList.push(0)
        }   
     } 
     

  return ( 
        <div className="starRating">
            {starList.map((value, index) => (
                <span key={index}>{starType[value]}</span>
            ))}
       
        </div>
  );
}

export default StarRatingBar;