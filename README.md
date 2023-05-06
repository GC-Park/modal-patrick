# 🙆‍♂️ react-modal-patrick 🙆‍♂️

I'm Patrick. This is the first package I uploaded. I recommend you use this when you need modals while using React. You can turn on the modal with one click and simply turn it off by pressing the background or esc button.

## Table of Contents

- [Installation](#installation)
- [Import components](#import-components)
- [Setup](#setup)
- [Examples](#examples)
- [Props](#props)

## Installation

    # using npm
    $ npm install --save react-modal-patrick

    # using yarn
    $ yarn add react-modal-patrick

## Import components

```typescript
import { ModalPortal, ModalContext, useModalContext, ModalContextProvider } from 'react-modal-patrick';
```

## Setup

You need to use a ModalContextProvider to cover components that need to use modals.

```typescript
import { ModalContextProvider } from 'react-modal-patrick';

const App = () => {
  return (
    <ModalContextProvider>
      <your component>
    </ModalContextProvider>
  );
};
```

## Examples

Here is a simple example of react-modal-patrick being used in an app.

<img src="https://user-images.githubusercontent.com/72205402/236609782-240643b7-895f-4ea1-89a1-4be13babf820.gif" alt="patrick modal 실행"/>

```typescript
import { useModalContext, ModalPortal } from 'react-modal-patrick';

export const Modal= {
    const { isModalOpen, openModal, closeModal } = useModalContext();
    return (
      <>
        <button onClick={openModal}>Open Modal</button>
        {isModalOpen && (
          <ModalPortal closeModalHandler={closeModal}>
            <>
                <p>
                Hello. I'm Patrick. I hope you like this  package.
                </p>
                <button onClick={closeModal}>Close Modal</button>
            </>
          </ModalPortal>
        )}
      </>
    );
};
```

## ModalPortal Props
### children
Prop expects a single child of type 'ReactChild'. It should be ReactChild type.


## Thank you. Have a good day! 😄