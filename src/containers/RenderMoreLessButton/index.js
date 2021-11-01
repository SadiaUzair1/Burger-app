import { useDispatch, useSelector } from 'react-redux'

import Button from 'containers/RenderMoreLessButton/ButtonStyledComponent'

export const RenderMoreLessButton = () => {
  const amountAndIngredient = useSelector(state => state)
  const dispatch = useDispatch()
  const initialPrice = 3
  const type = ['lettuce', 'bacon', 'cheese', 'meat']

  const handleIncrement = (ingredientType, state) => {
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

  return (
    <div>
      <p className={'font-weight-bold'}>
        Current Price: ${amountAndIngredient.ingredient.amount.toFixed(2)}
      </p>
      {Array.from({ length: 4 }, (v, i) => (
        <div key={i}>
          <p className={'font-weight-bold'}>{type[i].toUpperCase()}</p>
          <Button
            key={i}
            onClick={() => handleIncrement(type[i], 'inc')}
            className={'more text-white m-2'}
          >
            More
          </Button>
          <Button onClick={() => handleIncrement(type[i], 'dec')} className={'less text-white m-2'}>
            Less
          </Button>
        </div>
      ))}
    </div>
  )
}
