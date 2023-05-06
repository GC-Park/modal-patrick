import React, { ReactChild } from 'react';
interface Props {
    children: ReactChild;
    closeModalHandler: () => void;
}
export declare const ModalPortal: (props: Props) => React.ReactPortal;
interface ModalContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
export declare const ModalContext: React.Context<ModalContextType | null>;
export declare const useModalContext: () => ModalContextType;
export declare const ModalContextProvider: (props: {
    children: React.ReactNode;
}) => JSX.Element;
export {};
