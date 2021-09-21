import '../css/myStyle.css';

function Recipe(props){
    const day = props.day;
    
    return (
        <div className="item">
            <div className="desc">
                <h3>{day}</h3>
                <p>{props.recipe.name}</p>
            </div>
            <img 
                src={process.env.PUBLIC_URL + '/images/recipes/' + props.recipe.image} 
                alt={props.recipe.name} 
            />
        </div>
    );
}export default Recipe;


//            <img src={image} className='item' alt=''></img>
