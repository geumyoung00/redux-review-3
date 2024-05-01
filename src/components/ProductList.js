import { useDispatch, useSelector } from "react-redux"

export const ProductList = () => {
  // const dispatch = useDispatch()

  // const list = [{ id: 123, name: "양말", cost: 13 }]
  const list = useSelector((state) => state.product.list)

  const handleRemove = () => {}

  const renderedList = list.map((product) => {
    return (
      <div key={product.id} className="panel">
        <p>
          {product.name} - ${product.cost}
        </p>
        <button onClick={handleRemove} className="button is-danger is-light">
          삭제
        </button>
      </div>
    )
  })

  return <div className="product-list">{renderedList}</div>
}
