import React, { useEffect, useState } from "react";
import Dropdown from "../../components/boardTaskBar/Dropdown";
import DropdownMenu from "../../components/boardTaskBar/DropdownMenu";
import NavItem from "../../components/boardTaskBar/Navitem";
import Col from "../../components/Col";
import MiniDrawer from "../../components/drawer/MiniDrawer";
import DropWrapper from "../../components/DropWrapper";
import FilterButton from "../../components/filterButton/filterButton";
import IssueModal from "./issueModal";
import Item from "../../components/item";
import "./board.css";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";

const Board = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [dragEl, setDragEl] = useState(null);
  const [statusIcons, setStatusIcons] = useState([]);
  const [categories, setCategories] = useState([]);
  const [labels, setLabels] = useState([]);
  const [show, setShow] = useState(false);

  const onOpen = () => {
    setShow(true);
  };

  const onClose = () => setShow(false);

  const filter = (button) => {
    if (button === "All") {
      setItems(allItems.filter((item) => item));

      return;
    }

    const filteredData = allItems.filter((item) => item.status === button);
    setItems(filteredData);
  };

  const filterLabel = (button) => {
    if (button === "All") {
      setItems(allItems.filter((item) => item));
      return;
    }
    const value = allItems
      .filter((item) => item.labels.some((label) => label === button))
      .map((item) => item);
    setItems(value);
  };

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => {
        return res.json();
      })
      .then((info) => {
        setItems(info);
        setAllItems(info);
        setCategories(["All", ...new Set(info.map((info) => info.status))]);
        const arr = info.map((info) => info.labels);
        const setArray = new Set(arr.map((x) => JSON.stringify(x)));
        const uniqArray = [...setArray].map((x) => JSON.parse(x));
        const flatArray = uniqArray.flat(1);
        const uniq = ["All", ...new Set(flatArray)];
        setLabels(uniq);
      });
    fetch("http://localhost:8000/statusIcons")
      .then((res) => {
        return res.json();
      })
      .then((info) => {
        setStatusIcons(info);
      });
  }, []);

  const onDrop = (item, status) => {
    if (item.status === status) {
      return;
    }

    const mapping = statusIcons.find((si) => si.status === status);
    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (el) => {
    setItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (i) => i.content === dragEl.content
      );
      const hoverIndex = prevState.findIndex((i) => i.content === el);
      const newState = [...prevState];

      newState.splice(itemIndex, 1);
      newState.splice(hoverIndex, 0, dragEl);
      return [...newState];
    });
  };

  const setDragElement = (el) => setDragEl(el);

  const onAddItem = (col) => {
    const status = statusIcons.find((si) => si.status === col);
    setItems((prevState) => {
      const highestId = Math.max.apply(
        Math,
        prevState.map((i) => i.id)
      );
      return [
        ...prevState,
        {
          id: highestId + 1,
          icon: status.icon,
          status: status.status,
          title: `Placeholder item for id ${highestId + 1}`,
          content: "Example",
          issueType: "gg-bookmark",
          priority: "gg-chevron-double-down",
          estimate: "0m",
        },
      ];
    });
  };

  return (
    <>
      <MiniDrawer />
      <div className="taskbar-board">
        <Dropdown>
          <NavItem icon={<PlusIcon />} />
          <IssueModal onClose={onClose} show={show} />

          <NavItem icon={<CaretIcon />}></NavItem>
        </Dropdown>

        <div className="filter">
          <span>Filter columns</span>
          <FilterButton button={categories} filter={filter} />
        </div>

        <div className="filter">
          <span>Filter labels</span>
          <FilterButton button={labels} filter={filterLabel} />
        </div>

        <div className="sprint-taskbar">
          <p>Days left: 5</p>
          <button className="button-column "> Complete Sprint</button>
        </div>
      </div>

      <div className="board-content">
        <div className={"row"}>
          {["open", "in progress", "done"].map((status) => {
            return (
              <div key={status} className={"col-wrapper"}>
                <div className={"col-group"}>
                  <h5 className={"col-header"}>{status.toUpperCase()}</h5>
                  <h5 className={"col-count"}>
                    {items.filter((i) => i.status === status).length}
                  </h5>
                </div>
                <DropWrapper onDrop={onDrop} status={status}>
                  <Col>
                    {items
                      .filter((i) => i.status === status)
                      .map((i) => (
                        <Item
                          key={i.id}
                          item={i}
                          moveItem={moveItem}
                          setDragElement={setDragElement}
                        />
                      ))}
                    <button className={"add-ticket"} onClick={onOpen}>
                      + Add ticket
                    </button>
                  </Col>
                </DropWrapper>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Board;
