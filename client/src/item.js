import React, { Fragment} from "react";
const Item = ({ item, moveItem, setDragElement }) => {



    const onDragStart = ({ dataTransfer, target }) => {
        dataTransfer.setData("item", JSON.stringify(item));
        setDragElement(item);
        setTimeout(function() {
            target.style.visibility = "hidden";
        }, 0);
    };

    const onDragOver = e => {
        moveItem(e.target.innerText);
        e.preventDefault();
    };

    const onDragEnd = e => {
        e.target.style.visibility = "visible";

    };

    return (
        <Fragment>
            <div
                className={"item"}
                draggable="true"
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
            >
                <p>{item.content}</p>
                <div className={"item-icons"}>
                    <p>{item.icon} {item.status}</p>
                    <i className={item.issueType} />
                    <i className={item.priority} />
                    <span className={"est-tag"}>{item.estimate}</span>
                </div>
            </div>
        </Fragment>
    ); 
};

export default Item;