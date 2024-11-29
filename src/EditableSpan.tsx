import React, {ChangeEvent, useState} from 'react';

type EditableSpanProsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

export const EditableSpan = ({title, changeTitle}: EditableSpanProsType) => {

    const [editMode, setEditMode] = useState(false);
    const [itemTitle, setItemTitle] = useState(title)

    const changeItemTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setItemTitle(event.currentTarget.value)
    }

    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        changeTitle(itemTitle)
        setEditMode(false)
    }

    return (
        editMode
            ? <input
                value={itemTitle}
                autoFocus
                onBlur={offEditMode}
                onChange={changeItemTitleHandler}
            />
            : <span onDoubleClick={onEditMode}>{title}</span>
    );
};

