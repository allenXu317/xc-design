// import { Button, ButtonSize, ButtonType } from './components/Button';
// import { Menu, MenuItem, SubMenu} from './components/Menu';
import Icon from './components/Icon/Icon';
// import { default as Menu } from './components/Menu';
import { default as Menu } from '../build/xc-ui/src/components/Menu';
import {Button, ButtonSize, ButtonType} from '../build/xc-ui/src/components/Button';

function App() {
  return (
    <>
    {/* <AutoComplete /> */}
     <Icon icon="coffee" theme="primary" size="10x" />
     <Icon icon="arrow-down" theme="danger" size="10x" />
      <Menu  mode='vertical' onSelect={(index) => console.log('-----click-----', index)}>
        <Menu.Item disabled >asd1</Menu.Item>
        <Menu.Item >asd2</Menu.Item>
        <Menu.Item >asd3</Menu.Item>
        <Menu.SubMenu title="dropdown">
          <Menu.Item disabled>dropdown1</Menu.Item>
          <Menu.Item>dropdown2</Menu.Item>
          <Menu.Item>dropdown3</Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        12399
      </Button>
      <Button
        onClick={() => {
          console.log('-----click00000-----');
        }}
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >
        123
      </Button>
      <Button disabled btnType={ButtonType.Default} size={ButtonSize.Small}>
        1234
      </Button>
      <Button btnType={ButtonType.Link} href="123" size={ButtonSize.Large}>
        Link
      </Button>
      <Button
        disabled
        btnType={ButtonType.Link}
        href="123"
        size={ButtonSize.Large}
      >
        LinkDisable
      </Button>
      <div>sad</div>
      <h1>sdd</h1>
      <h2>sdsd</h2>
      <h3>sdsd</h3>
      <hr />
      <p>asdasd</p>
      <a href="sdsd">ssdsd</a>
      <code>asdasd</code>
    </>
  );
}

export default App;
