import SearchPanelItem from "../search-panel-item/";
import Button from "@material-ui/core/Button";

const SearchPanel = () => {
  return (
    <>
      <SearchPanelItem />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 10 + "px" }}
      >
        Primary
      </Button>
    </>
  );
};

export default SearchPanel;
