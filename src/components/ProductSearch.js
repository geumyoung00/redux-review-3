import { useDispatch } from "react-redux"

export const ProductSearch = () => {
  // const dispatch = useDispatch()

  const handleChange = () => {}

  return (
    <div className="list-header">
      <h3 className="title is-4">상품 목록</h3>
      <div className="search field is-horizontal">
        <label className="label">검색</label>
        <input className="input" onChange={handleChange} />
      </div>
    </div>
  )
}
