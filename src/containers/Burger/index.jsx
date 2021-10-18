import { BurgerIngredients, RenderMoreLessButton } from 'containers'

export const Burger = () => (
  <div>
    <div>
      <img src={'/images/upperbun.png'} alt={''} />
    </div>
    <main className={'container fitting'}>
      <BurgerIngredients />
      <img src={'/images/lowerbun.png'} alt={''} />
    </main>
    <div className={'container btn btn-warning mt-5'}>
      <RenderMoreLessButton />
    </div>
  </div>
)
