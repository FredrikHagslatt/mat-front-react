class DBFetcher{
    constructor(){
        this.name = '';
        this.age = 0;
        this.dinnerMenu = {};
        this.moreRecipes = {};    
    }
    
    GetDinnerMenu(){
        return(fetch('/dinnermenu')
            .then((response) => 
            response.json())
            .then((response) => response.data)
        );
    }

    GetMoreRecipes(){}

    render(){
        return;        
    }


}export default DBFetcher;
