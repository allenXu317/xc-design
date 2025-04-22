import React from 'react';
import { uploadFileProps } from './upload';
interface UploadFileListProps {
    fileList: uploadFileProps[];
    onRemove?: (file: uploadFileProps) => void;
}
export declare const UploadFileList: React.FC<UploadFileListProps>;
export {};
