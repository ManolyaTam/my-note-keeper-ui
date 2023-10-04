import { useState } from "react";

const useNoteFocus = () => {
    const [activeNote, setActiveNote] = useState(-1);

    const closeNote = () => {
        setActiveNote(-1);
    }

    const openNote = (index) => {
        if (!activeNoteExists())
            setActiveNote(index);
    }

    const isOpenNote = (index) => {
        return activeNote === index;
    }

    const activeNoteExists = () => {
        return activeNote !== -1;
    }

    return {
        openNote,
        closeNote,
        isOpenNote
    }
}

export default useNoteFocus;