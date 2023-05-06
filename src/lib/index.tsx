import React, { ReactChild, useEffect, useRef, useContext, useState } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

interface Props {
  children: ReactChild;
  closeModalHandler: () => void;
}

export const ModalPortal = (props: Props) => {
  const $modalRoot = document.getElementById('modal-root') as HTMLElement;
  const modalRef = useRef<HTMLDialogElement>(null);

  const dialogKeyDownListener = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      props.closeModalHandler();
    }
  };

  const dialogBackdropListener = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      props.closeModalHandler();
    }
  };

  useEffect(() => {
    modalRef.current?.showModal();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      modalRef.current?.close();
    };
  }, []);

  return ReactDom.createPortal(
    <dialog ref={modalRef} onKeyDown={dialogKeyDownListener} onClick={dialogBackdropListener}>
      <ModalContainer>{props.children}</ModalContainer>
    </dialog>,
    $modalRoot
  );
};

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 95%;
  padding: 32px 16px;

  display: flex;
  flex-direction: column;

  border-radius: 8px 8px 0px 0px;
  background: #ffffff;

  overflow: scroll;
`;

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = React.createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (modalContext === null) {
    throw new Error('modalContext값이 null입니다.');
  }

  return modalContext;
};

export const ModalContextProvider = (props: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const contextValue: ModalContextType = {
    isModalOpen: isModalOpen,
    openModal: openModal,
    closeModal: closeModal,
  };

  return <ModalContext.Provider value={contextValue}>{props.children}</ModalContext.Provider>;
};
