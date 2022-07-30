function DropDown({toggleSort}){
  if(!toggleSort){return null}
  return(
    <ul className="DropDown">
      <li>얘기명</li>
      <li>예약자명</li>
      <li>날짜별</li>
      <li>오름차순</li>
      <li>내림차순</li>
    </ul>
  )
}
export default DropDown;