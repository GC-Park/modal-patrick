import { jsx as _jsx } from 'react/jsx-runtime';
import React, { useEffect, useRef, useContext, useState } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
export var ModalPortal = function (props) {
  var $modalRoot = document.getElementById('modal-root');
  var modalRef = useRef(null);
  var dialogKeyDownListener = function (event) {
    if (event.key === 'Escape') {
      props.closeModalHandler();
    }
  };
  var dialogBackdropListener = function (event) {
    if (event.target === event.currentTarget) {
      props.closeModalHandler();
    }
  };
  useEffect(function () {
    var _a;
    (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.showModal();
    return function () {
      var _a;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.close();
    };
  }, []);
  return ReactDom.createPortal(
    _jsx(
      'dialog',
      __assign(
        { ref: modalRef, onKeyDown: dialogKeyDownListener, onClick: dialogBackdropListener },
        { children: _jsx(ModalContainer, { children: props.children }) }
      )
    ),
    $modalRoot ? $modalRoot : document.body
  );
};
var ModalContainer = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-height: 95%;\n  padding: 32px 16px;\n\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 8px 8px 0px 0px;\n  background: #ffffff;\n\n  overflow: scroll;\n',
      ],
      [
        '\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-height: 95%;\n  padding: 32px 16px;\n\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 8px 8px 0px 0px;\n  background: #ffffff;\n\n  overflow: scroll;\n',
      ]
    ))
);
export var ModalContext = React.createContext(null);
export var useModalContext = function () {
  var modalContext = useContext(ModalContext);
  if (modalContext === null) {
    throw new Error('modalContext값이 null입니다.');
  }
  return modalContext;
};
export var ModalContextProvider = function (props) {
  var _a = useState(false),
    isModalOpen = _a[0],
    setIsModalOpen = _a[1];
  var openModal = function () {
    setIsModalOpen(true);
  };
  var closeModal = function () {
    setIsModalOpen(false);
  };
  var contextValue = {
    isModalOpen: isModalOpen,
    openModal: openModal,
    closeModal: closeModal,
  };
  return _jsx(ModalContext.Provider, __assign({ value: contextValue }, { children: props.children }));
};
var templateObject_1;
