import { BiTrash } from "react-icons/bi";
// 목업 파일 -> fetch

function AddInfo({ appoint, onDeleteAppoint }) {
  return (
    <li>
      <dl>
        <dt className="">{appoint.petName}</dt>
        <dd className="owner">
          <dfn>예약자 : {appoint.ownerName}</dfn>
        </dd>
        <dd className="desc">{appoint.aptNotes}</dd>
        <dd className="date">{appoint.aptDate}</dd>
      </dl>

      <p>
        <button>
          <BiTrash onClick={()=> onDeleteAppoint(appoint.id)}/>
        </button>
      </p>
    </li>
  );
}

export default AddInfo;
