import React from 'react';
import Button from './components/Button'



function App() {
  return (
        <div className='container'>
            <h1>Button</h1>
            <h2>Sizes</h2>
            <Button>Size S</Button>
            <Button size='m'>Size M</Button>
            <Button size='l'>Size L</Button>

            <h2>Types</h2>
            <Button>Text</Button>
            <Button type='primary'>Primary</Button>
            <Button type='success'>Success</Button>
            <Button type='warning'>Warning</Button>
            <Button type='error'>Error</Button>
            <Button href='#'>Link</Button>

            <h2>Disabled</h2>
            <Button disabled>Text</Button>
            <Button type='primary' disabled>Primary</Button>
            <Button type='success' disabled>Success</Button>
            <Button type='warning' disabled>Warning</Button>
            <Button type='error' disabled>Error</Button>
            <Button href='#' disabled>Link</Button>

            <h2>Icons</h2>
            <Button icon='fa-ad'></Button>
            <Button icon='fa-ad'>Icon</Button>
            <Button icon='fa-home' type='primary' size='m'/>
            <Button icon='fa-home' type='success' size='l'>Home</Button>

            <h2>Loading</h2>
            <Button type='primary' loading>Primary</Button>
            <Button type='success'size='m' loading>Success</Button>
            <Button type='warning' size="l" loading>Warning</Button>
            <Button type='error' loading disabled>Error</Button>
            <Button href='#' loading>Link</Button>
        </div>
  );
}

export default App;
