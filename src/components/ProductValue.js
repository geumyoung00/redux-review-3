import { useSelector } from "react-redux"

export const ProductValue = () => {
  const { list, searchTerm } = useSelector((state) => state.product)

  const filterList = list.filter((item) => item.name.includes(searchTerm))

  const totalCost = filterList.reduce(
    (acc, current) => acc + parseInt(current.cost),
    0
  )

  return (
    <div className="product-value">
      총 가격: $<strong>{totalCost}</strong>
    </div>
  )
}
