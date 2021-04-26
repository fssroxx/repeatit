import SearchPanelItem from "../search-panel-item/";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect } from "react";
import { fetchObjects } from "../../asyncAction/objects";
import { useDispatch, useSelector } from "react-redux";
import Test from "../teacher/test";
import {
  deleteCustomerAction,
  formSubjectIdAction,
  formSubjectNameAction,
  getAreaIdAction,
  getDistrictIdAction,
} from "../../store/actions/actionCreators";
import { makeStyles } from "@material-ui/core";
import { fetchAreaId, fetchAreas } from "../../asyncAction/areas";
import "./search-panel.css";
import { fetchTeachersCards } from "../../asyncAction/teachers";

// const useStyles = makeStyles({
//     // notchedOutline :{
//     //     borderColor: 'blue',
//     //     '&:hover': {borderColor:'green !important'}
//     // },
//     // focused: {
//     //     '& fieldset' : {borderColor: ' red !important'}
//     //     , color: ' red !important'
//     //
//     // },
// });

// const useStyles = makeStyles({
//     root: {
//         background: '#009990',
//         border: 0,
//         borderRadius: 5,
//         color: 'white',
//         height: 45,
//         padding: '0 30px',
//     },

// });

const SearchPanel = () => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjects.subjects);
  const areas = useSelector((state) => state.areas.areas);
  const districts = useSelector((state) => state.areas.districts);
  const areaId = useSelector((state) => state.areas.areaId);
  const districtId = useSelector((state) => state.areas.districtId);
  const subjectId = useSelector((state) => state.subjects.subjectId);

  useEffect(() => {
    dispatch(fetchObjects());
    dispatch(fetchAreas());
  }, []);
  const selectSubject = (subject) => {
    dispatch(formSubjectIdAction(subject.id));
    dispatch(formSubjectNameAction(subject.name));
  };

  const formAreaId = (area) => {
    dispatch(getAreaIdAction(area.id));
    dispatch(fetchAreaId(area.id));
    console.log(area.id);
  };

  const formDistrictId = (district) => {
    dispatch(getDistrictIdAction(district.id));
  };

  const makeTeachersCards = () => {
    dispatch(fetchTeachersCards(areaId, districtId, subjectId));
  };

  return (
    <div className="search">
      <Autocomplete
        id="combo-box-demo"
        options={subjects}
        onChange={(event, option) => {
          selectSubject(option);
        }}
        getOptionLabel={(option) => option.name}
        style={{ width: 300, marginRight: 10 + "px" }}
        renderInput={(params) => (
          <TextField {...params} label="Предмет" variant="outlined" />
        )}
      />
      <Autocomplete
        id="combo-box-demo"
        options={areas}
        onChange={(event, option) => {
          formAreaId(option);
        }}
        getOptionLabel={(option) => option.namePrep}
        style={{ width: 300, marginRight: 10 + "px" }}
        renderInput={(params) => (
          <TextField {...params} label="Город" variant="outlined" />
        )}
      />
      <Autocomplete
        id="combo-box-demo"
        options={districts}
        onChange={(event, option) => {
          formDistrictId(option);
        }}
        getOptionLabel={(option) => option.name}
        style={{ width: 300, marginRight: 10 + "px" }}
        renderInput={(params) => (
          <TextField {...params} label="Район" variant="outlined" />
        )}
      />
      <Button
        style={{ height: "56px" }}
        color="primary"
        variant="contained"
        onClick={() => {
          makeTeachersCards();
        }}
      >
        Получить учителей
      </Button>
    </div>
  );
};
export default SearchPanel;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
