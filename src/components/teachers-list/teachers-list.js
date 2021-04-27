import Button from '@material-ui/core/Button';
import TeacherListItem from "../teacher-list-item/teacher-list-item";
import './teacher-list.css';
import {showMoreCardsAction} from "../../store/actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";

const TeacherList = () => {
    const dispatch = useDispatch();
    const teachersCards = useSelector((state) => state.teachers.teachersCards);

    const buttonList =  teachersCards.length > 0 ? (<Button
        onClick={() => {
        dispatch(showMoreCardsAction(10))}}
            variant="contained"
            color="primary"
            style={{marginTop:10 + 'px', width:336+ 'px', height:45+'px'}}>
        Загрузить Еще
    </Button>) : null;
  return (
    <div className='main'>
      <TeacherListItem />
        {buttonList}
    </div>
  );


}

export default TeacherList;