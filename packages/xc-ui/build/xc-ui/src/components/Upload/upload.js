var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import axios from 'axios';
import { Button } from '../Button';
import { UploadFileList } from './uploadList';
import { Dragger } from './dragger';
import Icon from '../Icon/Icon';
export var Upload = function (props) {
    var action = props.action, _a = props.defaultFileList, defaultFileList = _a === void 0 ? [] : _a, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, beforeUpload = props.beforeUpload, onRemove = props.onRemove, onChange = props.onChange, onUpload = props.onUpload, text = props.text, name = props.name, headers = props.headers, data = props.data, accept = props.accept, size = props.size, multiple = props.multiple, withCredentials = props.withCredentials, children = props.children, _b = props.drag, drag = _b === void 0 ? false : _b, _c = props.type, type = _c === void 0 ? 'button' : _c;
    var fileInput = React.useRef(null);
    // 文件列表
    var _d = React.useState(defaultFileList), fileList = _d[0], setFileList = _d[1];
    // 更新文件列表
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    // 删除文件
    var handleRemove = function (file) {
        setFileList(function (prevList) {
            return prevList.filter(function (item) { return item.uid !== file.uid; });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    // 上传文件
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            // 上传之前的回调
            if (!beforeUpload) {
                // 如果没有before，则直接调用上传文件的方法
                post(file);
            }
            else {
                var result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    // 当beforeUpload返回的是promise
                    result.then(function (processedFile) {
                        post(processedFile);
                    });
                }
                else if (result === true) {
                    // 当beforeUpload返回的是true
                    post(file);
                }
            }
        });
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + 'upload-file',
            size: file.size,
            name: file.name,
            status: 'ready',
            percent: 0,
            raw: file,
        };
        // setFileList([_file, ...fileList]);
        setFileList(function (prevList) {
            return __spreadArray([_file], prevList, true);
        });
        var formData = new FormData();
        formData.append(name || file.name, file);
        // 添加data
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios
            .post(action, formData, {
            headers: __assign(__assign({}, headers), { 'Content-Type': 'multipart/form-data' }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = e.total ? Math.round((e.loaded * 100) / e.total) : 0;
                if (percentage < 100 && onProgress) {
                    updateFileList(_file, { percent: percentage, status: 'uploading' });
                    onProgress(percentage, _file);
                }
                else {
                    updateFileList(_file, { percent: 100, status: 'success' });
                }
            },
        })
            .then(function (res) {
            if (onSuccess) {
                onSuccess(res.data, _file);
                updateFileList(_file, { status: 'success', response: res.data });
            }
            if (onChange) {
                onChange(_file);
            }
        })
            .catch(function (err) {
            if (onError) {
                onError(err, _file);
                updateFileList(_file, { status: 'error', error: err });
            }
            if (onChange) {
                onChange(_file);
            }
        });
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = '';
        }
    };
    return (_jsxs("div", { className: "viking-upload-component", children: [_jsxs("div", { className: "viking-upload-input", style: { display: 'inline-block' }, onClick: handleClick, children: [drag ? (_jsxs(Dragger, { onFile: function (files) { return uploadFiles(files); }, children: [_jsx(Icon, { icon: "upload", size: "5x", theme: "secondary" }), _jsx("br", {}), _jsx("p", { children: "Drag file over to upload" })] })) : (_jsx(Button, { btnType: "primary", children: text !== null && text !== void 0 ? text : 'Upload File' })), _jsx("input", { ref: fileInput, type: "file", className: "viking-file-input", style: { display: 'none' }, onChange: handleFileChange, accept: accept, multiple: multiple })] }), _jsx(UploadFileList, { fileList: fileList, onRemove: handleRemove })] }));
};
