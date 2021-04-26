import Button from '@material-ui/core/Button';
import TeacherListItem from "../teacher-list-item/teacher-list-item";
import './teacher-list.css';
import {showMoreCardsAction} from "../../store/actions/actionCreators";
import {useDispatch} from "react-redux";

const TeacherList = () => {
    const dispatch = useDispatch();


  return (
    <div className='main'>
      <TeacherListItem />
      <Button onClick={() => {
          dispatch(showMoreCardsAction(10))}}
              variant="contained"
              color="primary"
              style={{marginTop:10 + 'px', width:336+ 'px', height:45+'px'}}>
        Показать Еще
      </Button>
    </div>
  );


}

export default TeacherList;