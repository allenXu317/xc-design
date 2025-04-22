import React from 'react';
export type statusType = 'ready' | 'uploading' | 'success' | 'error' | string;
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
    headers?: {
        [key: string]: any;
    };
    /**上传文件的额外数据 */
    data?: {
        [key: string]: any;
    };
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
    onError?: (err: any, file: uploadFileProps) => void | Promise<void> | ((err: any) => void) | ((err: any) => Promise<void>);
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
export declare const Upload: React.FC<UploadProps>;
