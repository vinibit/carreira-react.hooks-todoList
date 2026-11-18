import { useEffect, useRef } from 'react';
import './dialog.style.css';

export function Dialog({ isShown, onClose }) {

    // Não é possível usar querySelector para selecionar elementos do DOM no React, pois o React não garante que o elemento esteja presente no DOM no momento em que o código é executado. Em vez disso, você pode usar o hook useRef para criar uma referência ao elemento do diálogo e manipulá-lo diretamente.
    // const dialog = document.querySelector("dialog");
    const dialogRef = useRef(null);

    useEffect(() => {
        
        if (isShown) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [ isShown ]);

    const openDialog = () => {        
        
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        
        dialogRef.current.close();
    }

    return (
        <>
            <dialog ref={dialogRef} className="dialog">
                <button autoFocus onClick={onClose}>
                    Close
                </button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>            
        </>
    )
}