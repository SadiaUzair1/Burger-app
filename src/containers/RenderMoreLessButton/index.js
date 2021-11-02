import { useDispatch, useSelector } from 'react-redux'

import Button from 'containers/RenderMoreLessButton/ButtonStyledComponent'
import { handleChange } from 'helper'

export const RenderMoreLessButton = () => {
  const amountAndIngredient = useSelector(state => state)
  const dispatch = useDispatch()
  const type = ['lettuce', 'bacon', 'cheese', 'meat']

  return (
    <div>
      <p className={'font-weight-bold'}>
        Current Price: ${amountAndIngredient.ingredient.amount.toFixed(2)}
      </p>
      {Array.from({ length: 4 }, (v, i) => (
        <div key={i}>
          <p className={'font-weight-bold'}>{type[i].toUpperCase()}</p>
          <button
            data-test={i + '-more'}
            onClick={() => handleChange(type[i], 'inc', amountAndIngredient, dispatch)}
            className={'text-white m-2'}
          >
            More
          </button>
          <button
            data-test={i + '-less'}
            onClick={() => handleChange(type[i], 'dec', amountAndIngredient, dispatch)}
            className={'text-white m-2'}
          >
            Less
          </button>
        </div>
      ))}
    </div>
  )
}
