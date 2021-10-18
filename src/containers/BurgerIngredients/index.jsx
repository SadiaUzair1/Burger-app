import { useSelector } from 'react-redux'

import { Bacon, Cheese, Lettuce, Meat } from 'components'

export const BurgerIngredients = () => {
  const type = ['lettuce', 'bacon', 'cheese', 'meat']
  const ingredient = useSelector(state => state.ingredient)

  const renderIngredients = type =>
    Array.from({ length: ingredient[type] }).map(() => {
      if (type === 'lettuce') {
        return <Lettuce />
      } else if (type === 'bacon') {
        return <Bacon />
      } else if (type === 'cheese') {
        return <Cheese />
      } else if (type === 'meat') {
        return <Meat />
      }
    })

  return (
    <div>
      {Array.from({ length: type.length }, (v, i) => (
        <div key={i}>{renderIngredients(type[i])}</div>
      ))}
    </div>
  )
}
