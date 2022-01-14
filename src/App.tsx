import React, { ReactElement, ReactNode } from 'react';
import './App.css';


//Conventional Props

function Heading({ title }: { title: string; }) {
  return (
    <h1>{title}</h1>
  )
}
function Content({ children }: { children: ReactNode; }): ReactElement {
  return (
    <h1>{children}</h1>
  )
}

//default Props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{children}</p>
    </div>

  )
}
Container.defaultProps = defaultContainerProps;


function App() {
  return (
    <>
      <Heading title='Hello'></Heading>
      <Content><strong>Hi There!</strong></Content>
      <Container> <strong>Ashiq</strong> </Container>
    </>

  );
}

export default App;
