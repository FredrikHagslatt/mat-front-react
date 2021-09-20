class DBFetcher{
    constructor(){
        this.name = '';
        this.age = 0;
        this.dinnerMenu = {};
        this.moreRecipes = {};    
    }
    
    GetDinnerMenu(){
        return(fetch('/home')
            .then((response) => 
            response.json())
            .then((response) => response.name)
        );
            /*
        promise.then((value) => {
            console.log('promise');
            console.log(value);
            this.dinnerMenu = value;
            this.name = value.name;
            this.age = value.age;
            console.log('name: ', this.name);
            console.log('age: ', this.age);
            console.log('dinnerMenu: ', this.dinnerMenu);
        });        

        Promise.resolve(promise)
        .then((value) => {
            console.log('POOL');
            console.log(value.name);
            this.dinnerMenu = value.name;
        });
        return this.dinnerMenu;
*/

    }

    
    GetMoreRecipes(){}

    render(){
        return;        
    }


}export default DBFetcher;



/*


    GetDinnerMenu(){
        fetch('/home')
        .then(res => res.json())
        .then(data => this.UpdateDinnerMenu(data))

        console.log('--');
        console.log(this.state.dinnerMenu);       
    }


    */