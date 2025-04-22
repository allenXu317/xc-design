import React from "react";
import classNames from "classnames";
export var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = React.useState(false), dragOver = _a[0], setDragOver = _a[1];
    var classes = classNames("viking-uploader-dragger", {
        "is-dragover": dragOver,
    });
    var handleDrop = function (e) {
        e.preventDefault();
        onFile(e.dataTransfer.files);
    };
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    return (React.createElement("div", { className: classes, onDrop: handleDrop, onDragOver: function (e) { return handleDrag(e, true); }, onDragLeave: function (e) { return handleDrag(e, false); } }, children));
};
