import Ingredients from "./Ingredients";

export default function Recipe({recipe}) {
    return <div>
        <h1>{recipe.name}</h1>
        <ul>
            {
               recipe.ingredients.map(ing => <Ingredients 
                    key={ing.name} 
                    ingredient={ing}/>)
            }
        </ul>
    </div>

}