import { Button, ButtonSize, ButtonType } from './components/Button';
import { Menu, MenuItem, SubMenu } from './components/Menu';
import Icon from './components/Icon/Icon';
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Icon, { icon: "coffee", theme: "primary", size: "10x" }),
        React.createElement(Icon, { icon: "arrow-down", theme: "danger", size: "10x" }),
        React.createElement(Menu, { mode: 'vertical', onSelect: function (index) { return console.log('-----click-----', index); } },
            React.createElement(MenuItem, { disabled: true }, "asd1"),
            React.createElement(MenuItem, null, "asd2"),
            React.createElement(MenuItem, null, "asd3"),
            React.createElement(SubMenu, { title: "dropdown" },
                React.createElement(MenuItem, { disabled: true }, "dropdown1"),
                React.createElement(MenuItem, null, "dropdown2"),
                React.createElement(MenuItem, null, "dropdown3"))),
        React.createElement(Button, { btnType: ButtonType.Danger, size: ButtonSize.Small }, "12399"),
        React.createElement(Button, { onClick: function () {
                console.log('-----click00000-----');
            }, btnType: ButtonType.Primary, size: ButtonSize.Large }, "123"),
        React.createElement(Button, { disabled: true, btnType: ButtonType.Default, size: ButtonSize.Small }, "1234"),
        React.createElement(Button, { btnType: ButtonType.Link, href: "123", size: ButtonSize.Large }, "Link"),
        React.createElement(Button, { disabled: true, btnType: ButtonType.Link, href: "123", size: ButtonSize.Large }, "LinkDisable"),
        React.createElement("div", null, "sad"),
        React.createElement("h1", null, "sdd"),
        React.createElement("h2", null, "sdsd"),
        React.createElement("h3", null, "sdsd"),
        React.createElement("hr", null),
        React.createElement("p", null, "asdasd"),
        React.createElement("a", { href: "sdsd" }, "ssdsd"),
        React.createElement("code", null, "asdasd")));
}
export default App;
