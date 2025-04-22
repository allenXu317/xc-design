import React from 'react';
import axios from 'axios';

import { Button } from '../Button';
import { UploadFileList } from './uploadList';
import { Dragger } from './dragger';
import Icon from '../Icon/Icon';

export type statusType = 'ready' | 'uploading' | 'success' | 'error' | string;

// 上传文件的属性
export interface uploadFileProps {
  uid: string;
  size: number;
  name: string;
  status: statusType;
  percent: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  /**上传文件的地址 */
  action: string;
  /**上传按钮的文案 */
  text: string;
  /**上传的文件列表 */
  defaultFileList?: uploadFileProps[];
  /**自定义header */
  headers?: { [key: string]: any };
  /**上传文件的额外数据 */
  data?: { [key: string]: any };
  /**上传文件的名字 */
  name?: string;
  /**上传文件的类型 */
  accept?: string;
  /**上传文件的大小 */
  size?: number;
  /**是否支持多文件上传 */
  multiple?: boolean;
  /** 是否携带cookie */
  withCredentials?: boolean;
  /**上传进度回调 */
  onProgress?: (percentage: number, file: uploadFileProps) => void;
  /**上传成功回调 */
  onSuccess?: (data: any, file: uploadFileProps) => void;
  /**上传失败回调 */
  onError?: (
    err: any,
    file: uploadFileProps,
  ) =>
    | void
    | Promise<void>
    | ((err: any) => void)
    | ((err: any) => Promise<void>);
  /**上传之前的回调 */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**还是文件的回调 */
  onRemove?: (file: uploadFileProps) => void;
  /**修改上传文件的回调 */
  onChange?: (file: uploadFileProps) => void;
  /**上传文件的回调 */
  onUpload?: (file: uploadFileProps) => void;
  /**自定义节点 */
  children?: React.ReactNode;
  /**拖动上传 */
  drag?: boolean;
  /**上传按钮类型 */
  type?: 'button' | 'box';
}

export const Upload: React.FC<UploadProps> = (props: UploadProps) => {
  const {
    action,
    defaultFileList = [],
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onRemove,
    onChange,
    onUpload,
    text,
    name,
    headers,
    data,
    accept,
    size,
    multiple,
    withCredentials,
    children,
    drag=false,
    type='button',
  } = props;

  const fileInput = React.useRef<HTMLInputElement>(null);

  // 文件列表
  const [fileList, setFileList] =
    React.useState<uploadFileProps[]>(defaultFileList);
  // 更新文件列表
  const updateFileList = (
    updateFile: uploadFileProps,
    updateObj: Partial<uploadFileProps>,
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  // 删除文件
  const handleRemove = (file: uploadFileProps) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };

  // 上传文件
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files);
    postFiles.forEach((file) => {
      // 上传之前的回调
      if (!beforeUpload) {
        // 如果没有before，则直接调用上传文件的方法
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          // 当beforeUpload返回的是promise
          result.then((processedFile) => {
            post(processedFile);
          });
        } else if (result === true) {
          // 当beforeUpload返回的是true
          post(file);
        }
      }
    });
  };

  const post = (file: File) => {
    let _file: uploadFileProps = {
      uid: Date.now() + 'upload-file',
      size: file.size,
      name: file.name,
      status: 'ready',
      percent: 0,
      raw: file,
    };
    // setFileList([_file, ...fileList]);
    setFileList((prevList) => {
      return [_file, ...prevList];
    });
    const formData = new FormData();
    formData.append(name || file.name, file);
    // 添加data
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials,
        onUploadProgress: (e) => {
          let percentage = e.total ? Math.round((e.loaded * 100) / e.total) : 0;
          if (percentage < 100 && onProgress) {
            updateFileList(_file, { percent: percentage, status: 'uploading' });
            onProgress(percentage, _file);
          } else {
            updateFileList(_file, { percent: 100, status: 'success' });
          }
        },
      })
      .then((res) => {
        if (onSuccess) {
          onSuccess(res.data, _file);
          updateFileList(_file, { status: 'success', response: res.data });
        }
        if (onChange) {
          onChange(_file);
        }
      })
      .catch((err) => {
        if (onError) {
          onError(err, _file);
          updateFileList(_file, { status: 'error', error: err });
        }
        if (onChange) {
          onChange(_file);
        }
      });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };

  return (
    <div className="viking-upload-component">
      {/* <Button btnType="primary" onClick={handleClick}>
        {text ?? 'Upload File'}
      </Button> */}
      <div
        className="viking-upload-input"
        style={{ display: 'inline-block' }}
        onClick={handleClick}
      >
        {drag ? (
          <Dragger onFile={(files) => uploadFiles(files)}>
            <Icon icon="upload" size="5x" theme="secondary" />
            <br />
            <p>Drag file over to upload</p>
          </Dragger>
        ) : (
          <Button btnType="primary">
        {text ?? 'Upload File'}
      </Button>
        )}
        <input
          ref={fileInput}
          type="file"
          className="viking-file-input"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
      </div>
      <UploadFileList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};
