import { useDispatch } from "react-redux"

export const ProductForm = () => {
  const dispatch = useDispatch()

  const name = ""
  const cost = 0

  const handleNameChange = () => {}

  const handleCostChange = () => {}

  const handleSubmit = () => {}

  return (
    <div className="product-form panel">
      <h4 className="subtitle 4">상품 추가</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">상품명</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">가격</label>
            <input
              className="input is-expanded"
              value={cost}
              type="number"
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">저장</button>
        </div>
      </form>
    </div>
  )
}
