const initialPrice = 3

export const handleChange = (ingredientType, state, amountAndIngredient, dispatch) => {
  if (state === 'inc') {
    dispatch({ type: 'INCREMENT', payload: ingredientType })
  } else {
    if (
      amountAndIngredient.ingredient.amount > initialPrice &&
      amountAndIngredient.ingredient[ingredientType] > 0
    ) {
      dispatch({ type: 'DECREMENT', payload: ingredientType })
    }
  }
}
