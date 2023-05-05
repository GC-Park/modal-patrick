import React, { ReactChild } from 'react';
interface Props {
    children: ReactChild;
    closeModalHandler: () => void;
}
declare const ModalPortal: (props: Props) => React.ReactPortal;
export default ModalPortal;
