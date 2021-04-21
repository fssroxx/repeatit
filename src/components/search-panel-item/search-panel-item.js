import { useState, useEffect } from "react";

const SearchPanelItem = () => {

  const [objects, setObjects] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.repetit.ru/public/subjects")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setObjects(data);
  //     });
  // }, []);

  console.log(objects);

    console.log(typeof(objects));
    let items = objects.map(object => {
        return (<li>
            {object.name}
        </li>)
    })
  

  return (
  <ul>
    { items }
  </ul>
  );
};

export default SearchPanelItem;
