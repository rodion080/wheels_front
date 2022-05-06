import React, { MouseEvent } from 'react';

interface ModalType {
    children:any;
    active:boolean;
    // eslint-disable-next-line no-unused-vars
    onClick:(e:Event)=>void
}

const Modal = ({
  children, onClick, active, ...props
} : ModalType) => {
  let className = 'modal';
  if (active) {
    className += ' active';
  }
  return (
    <div className={className} onClick={onClick}>
      <form className="modal__content"
        onClick={(e:MouseEvent<HTMLFormElement>) :void => { e.stopPropagation(); } }
        {...props}
      >
        {children}
      </form>
    </div>
  );
};

export default Modal;
