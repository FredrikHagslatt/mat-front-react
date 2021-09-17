import '../css/myStyle.css';
import image from "../images/recipes/club_sandwich_cake.jpg";

function Recipe(props){
    var day = 'day';
    var name = 'dishName';

    return (
        <div className="item">
            <div className="desc">
                <h3>{day}</h3>
                <p>{name}</p>
            </div>
            <img src={image} className='item' alt=''></img>
        </div>
    );
}export default Recipe;