import '../css/sections.css';
import image from "../images/recipes/club_sandwich_cake.jpg";

function Recipe(props){
    var day = 'day';
    var name = 'dishName';

    return (
        <div className="item">
            <div className="desc">
                <h1>{day}</h1>
                <p>{name}</p>
                <img src={image} className='item' alt=''></img>
            </div>
        </div>
    );
}export default Recipe;