const { useState } = React;


const GroceryList = (props) => (

  <ul id="groceries">
    {props.groceries.map((groceries) => (
      <GroceryListItem groceries={groceries} />
    ))}
  </ul>

)

const GroceryListItem = (props) => {
  /*
  use array destructuring to assign isBold to the default state, and setBold to the function used to change state.
  this syntax works becasue useState is a function that returns an array with two values
  */
  const [isBold, setBold] = useState(false);

  const style = {
    fontWeight: isBold ? 'bold' : 'normal'
  };

  const toggleBold = function() {
    setBold(!isBold);
  }

  return (
  // multiple handlers can be applied to the same element. Here we've included handlers for both mouse enter and leave events
  <li style={style} onMouseEnter={() => toggleBold()} onMouseLeave={() => toggleBold()}>
    {props.groceries}
  </li>
  );

}

var groceryItems = ['Coffee', 'Sugar', 'Half n Half'];

ReactDOM.render(
  <GroceryList groceries={groceryItems}/>,
  document.getElementById('app')
)
