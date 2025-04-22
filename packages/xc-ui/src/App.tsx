import { Button, ButtonSize, ButtonType } from './components/Button';
import { Menu, MenuItem, SubMenu} from './components/Menu';
import Icon from './components/Icon/Icon';

function App() {
  return (
    <>
    {/* <AutoComplete /> */}
     <Icon icon="coffee" theme="primary" size="10x" />
     <Icon icon="arrow-down" theme="danger" size="10x" />
      <Menu  mode='vertical' onSelect={(index) => console.log('-----click-----', index)}>
        <MenuItem disabled >asd1</MenuItem>
        <MenuItem >asd2</MenuItem>
        <MenuItem >asd3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem disabled>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
          <MenuItem>dropdown3</MenuItem>
        </SubMenu>
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
