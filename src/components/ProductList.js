import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../store"

export const ProductList = () => {
  const dispatch = useDispatch()

  // const list = [{ id: 123, name: "양말", cost: 13 }]
  const { list, searchTerm } = useSelector((state) => state.product)
  const { name } = useSelector((state) => state.form)
  const filterList = list.filter((item) => item.name.includes(searchTerm))

  const handleRemove = (product) => dispatch(removeItem(product.id))

  const renderedList = filterList.map((product) => {
    const bold = product.name.includes(name) && name
    return (
      <div key={product.id} className={`panel ${bold ? "bold" : ""}`}>
        <p>
          {product.name} - ${product.cost}
        </p>
        <button
          onClick={() => handleRemove(product)}
          className="button is-danger is-light"
        >
          삭제
        </button>
      </div>
    )
  })

  return <div className="product-list">{renderedList}</div>
}
