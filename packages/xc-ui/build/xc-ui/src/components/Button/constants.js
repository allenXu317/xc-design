// 定义button的一些属性:
// 先用枚举定义button的某些属性的可选值：
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "lg";
    ButtonSize["Small"] = "sm";
})(ButtonSize || (ButtonSize = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Default"] = "default";
    ButtonType["Danger"] = "danger";
    ButtonType["Link"] = "link";
})(ButtonType || (ButtonType = {}));
// 导出button的属性：
export { ButtonSize, ButtonType };
