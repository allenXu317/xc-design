import React from 'react';
import Icon from '../Icon/Icon';
import { Progress } from '../Progress/progress';
export var UploadFileList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (React.createElement("ul", { className: "viking-upload-list" }, fileList.map(function (file) { return (React.createElement("li", { className: "viking-upload-list-item", key: file.uid },
        React.createElement("span", { className: "file-name file-name-".concat(file.status) },
            React.createElement(Icon, { icon: "file-alt", theme: "secondary" }),
            file.name,
            React.createElement("span", { className: "file-status" },
                file.status === 'uploading' && (React.createElement(Icon, { icon: "spinner", spin: true, theme: "primary" })),
                file.status === 'success' && (React.createElement(Icon, { icon: "check-circle", theme: "success" })),
                file.status === 'error' && (React.createElement(Icon, { icon: "times-circle", theme: "danger" }))),
            React.createElement("span", { className: "file-actions" },
                React.createElement(Icon, { icon: "times", onClick: function () { return onRemove && onRemove(file); } }))),
        file.status === 'uploading' && (React.createElement(Progress, { percent: file.percent, theme: "primary" })))); })));
};
