import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Col from "../../components/Col";
import Item from "../../components/item";
import DropWrapper from "../../components/DropWrapper";
import './board.css';
import DropDown from "../../components/boardTaskBar/Dropdown"
import MiniDrawer from "../../components/drawer/MiniDrawer";


const Board = () => {

    const [items, setItems] = useState([]);
    const [dragEl, setDragEl] = useState(null);
    const[statusIcons, setStatusIcons] = useState([]);


    useEffect(() => {
          fetch('http://localhost:8000/data')
          .then(res => {
            return res.json();
          })
          .then(info => {
            setItems(info)
          })
          fetch('http://localhost:8000/statusIcons')
            .then(res => {
                return res.json();
            })
            .then(info => {
                setStatusIcons(info)
            })

      }, [])

    const onDrop = (item, status) => {
        if (item.status === status) {
            return;
        }

        const mapping = statusIcons.find(si => si.status === status);
        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
    };

    const moveItem = el => {
        setItems(prevState => {
            const itemIndex = prevState.findIndex(i => i.content === dragEl.content);
            const hoverIndex = prevState.findIndex(i => i.content === el);
            const newState = [ ...prevState ];

            newState.splice(itemIndex, 1);
            newState.splice(hoverIndex, 0, dragEl);
            return [ ...newState ];
        });
    };

    const setDragElement = el => setDragEl(el);

    const onAddItem = col => {
        const status = statusIcons.find(si => si.status === col);
        setItems(prevState => {
            const highestId = Math.max.apply(Math, prevState.map(i => i.id));
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
                    estimate: "0m"
                }
            ];
        });


    };

    return (
        <>
        <MiniDrawer />
 
        <div className="board-content">
        <button className='button-column'>Create new column</button>
        <div className={"row"}> 
            {["open", "in progress", "done"].map(status => { return (
                    <div key={status} className={"col-wrapper"}>
                        <div className={"col-group"}>
                            <h5 className={"col-header"}>{status.toUpperCase()}</h5>
                            <h5 className={"col-count"}>{items.filter(i => i.status === status).length}</h5>
                        </div>
                        <DropWrapper onDrop={onDrop} status={status}>
                            <Col>
                                {items
                                    .filter(i => i.status === status)
                                    .map(i => (
                                        <Item
                                            key={i.id}
                                            item={i}
                                            moveItem={moveItem}
                                            setDragElement={setDragElement}
                                        />
                                    ))
                                }
                                <button onClick={e => onAddItem(status)}>
                                    Add ticket
                                </button>
                            </Col>
                        </DropWrapper>
                    </div>
            )})}
        </div>
        </div>
        </>

    );
};

export default Board;