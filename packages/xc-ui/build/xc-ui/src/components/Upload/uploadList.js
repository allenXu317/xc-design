import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from '../Icon/Icon';
import { Progress } from '../Progress/progress';
export var UploadFileList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (_jsx("ul", { className: "viking-upload-list", children: fileList.map(function (file) { return (_jsxs("li", { className: "viking-upload-list-item", children: [_jsxs("span", { className: "file-name file-name-".concat(file.status), children: [_jsx(Icon, { icon: "file-alt", theme: "secondary" }), file.name, _jsxs("span", { className: "file-status", children: [file.status === 'uploading' && (_jsx(Icon, { icon: "spinner", spin: true, theme: "primary" })), file.status === 'success' && (_jsx(Icon, { icon: "check-circle", theme: "success" })), file.status === 'error' && (_jsx(Icon, { icon: "times-circle", theme: "danger" }))] }), _jsx("span", { className: "file-actions", children: _jsx(Icon, { icon: "times", onClick: function () { return onRemove && onRemove(file); } }) })] }), file.status === 'uploading' && (_jsx(Progress, { percent: file.percent, theme: "primary" }))] }, file.uid)); }) }));
};
