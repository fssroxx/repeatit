import React from "react";
import SearchPanel from "../search-panel";
import TeacherList from "../teachers-list/teachers-list";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  deleteCustomerAction,
  formSubjectIdAction,
} from "../../store/actions/actionCreators";
import { fetchObjects } from "../../asyncAction/objects";
import { fetchAreas, fetchAreaId } from "../../asyncAction/areas";
import { fetchTeachers, fetchTeachersCards } from "../../asyncAction/teachers";
import {
  getAreaIdAction,
  getDistrictIdAction,
} from "../../store/actions/actionCreators";
import "./App.css";
import Button from "@material-ui/core/Button";

function App() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.showCards);
  const customers = useSelector((state) => state.customers.customers);
  const areas = useSelector((state) => state.areas.areas);
  const areaId = useSelector((state) => state.areas.areaId);
  const districts = useSelector((state) => state.areas.districts);
  const districtId = useSelector((state) => state.areas.districtId);
  const subjectId = useSelector((state) => state.customers.subjectId);
  const teachers = useSelector((state) => state.teachers.teachers);

  const formTeachersCards = teachers
    .map((teacher, i) => `Ids[${i}]=${teacher}`)
    .join("&");

  console.log(formTeachersCards);
  const addCash = (cash) => {
    dispatch({ type: "SHOW_MORE", payload: cash });
  };
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(formSubjectIdAction(customer.id));
    dispatch(deleteCustomerAction(customer.id));
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
    <div className="App">
      <div className="buttons__group">
        <Button
          className="buttons"
          color="primary"
          variant="contained"
          style={{ marginTop: 10 + "px", marginRight: 10 + "px" }}
          onClick={() => {
            addCash(+prompt());
          }}
        >
          add
        </Button>
        <Button
          className="buttons"
          color="primary"
          variant="contained"
          style={{ marginTop: 10 + "px", marginRight: 10 + "px" }}
          onClick={() => {
            addCustomer(prompt());
          }}
        >
          addClient
        </Button>
        <Button
          className="buttons"
          color="primary"
          variant="contained"
          style={{ marginTop: 10 + "px", marginRight: 10 + "px" }}
          onClick={() => {
            dispatch(fetchObjects());
          }}
        >
          Получить предметы
        </Button>
        <Button
          className="buttons"
          color="primary"
          variant="contained"
          style={{ marginTop: 10 + "px", marginRight: 10 + "px" }}
          onClick={() => {
            dispatch(fetchAreas());
          }}
        >
          Получить areas
        </Button>
        <Button
          className="buttons"
          color="primary"
          variant="contained"
          style={{ marginTop: 10 + "px", marginRight: 10 + "px" }}
          onClick={() => {
            makeTeachersCards();
          }}
        >
          Получить учителей
        </Button>
      </div>
      <div className="container">
        <div>
          {customers.length > 0 ? (
            <div>
              {customers.map((customer) => (
                <div onClick={() => removeCustomer(customer)}>
                  {customer.name}
                </div>
              ))}
            </div>
          ) : (
            <div>Нет предметов </div>
          )}{" "}
        </div>
        <div>
          {areas.length > 0 ? (
            <div>
              {areas.map((area) => (
                <div onClick={() => formAreaId(area)}>{area.namePrep}</div>
              ))}
            </div>
          ) : (
            <div>Нет списка городов </div>
          )}{" "}
        </div>
        <div>
          {districts.length > 0 ? (
            <div>
              {districts.map((district) => (
                <div onClick={() => formDistrictId(district)}>
                  {district.name}
                </div>
              ))}
            </div>
          ) : (
            <div>Нет клиентов </div>
          )}{" "}
        </div>
      </div>
      <SearchPanel />
      <TeacherList />
    </div>
  );
}

export default App;
