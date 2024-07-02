import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline,} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const { id, text, checked } = todo;
    return (
        <div className = "TodoListItem-virtualized" style = {style}>
            <div className = "TodoListItem">
                <div onClick = {() => onToggle(id)} className = {cn('checkbox', {checked})}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
                    <div className = "text">{text}</div>
                </div>
                <div className = "remove" onClick = {()=> onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);