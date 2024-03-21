const Buttons = props => {
  const {items, renderBtn, styleBtn} = props

  const renderBtnId = () => {
    renderBtn(items.id)
  }
  return (
    <li>
      <button onClick={renderBtnId} className={`${styleBtn}`}>
        {items.buttonText}
      </button>
    </li>
  )
}
export default Buttons
