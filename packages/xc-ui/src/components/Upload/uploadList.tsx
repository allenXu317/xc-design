import React from 'react';

import Icon from '../Icon/Icon';
import { uploadFileProps } from './upload';
import { Progress } from '../Progress/progress';

interface UploadFileListProps {
  fileList: uploadFileProps[];
  onRemove?: (file: uploadFileProps) => void;
}

export const UploadFileList: React.FC<UploadFileListProps> = (
  props: UploadFileListProps,
) => {
  const { fileList, onRemove } = props;

  return (
    <ul className="viking-upload-list">
      {fileList.map((file) => (
        <li className="viking-upload-list-item" key={file.uid}>
          <span className={`file-name file-name-${file.status}`}>
            <Icon icon="file-alt" theme="secondary" />
            {file.name}
            <span className="file-status">
              {file.status === 'uploading' && (
                <Icon icon="spinner" spin theme="primary" />
              )}
              {file.status === 'success' && (
                <Icon icon="check-circle" theme="success" />
              )}
              {file.status === 'error' && (
                <Icon icon="times-circle" theme="danger" />
              )}
            </span>
            <span className="file-actions">
              <Icon icon="times" onClick={() => onRemove && onRemove(file)} />
            </span>
          </span>
          {file.status === 'uploading' && (
            <Progress percent={file.percent} theme="primary" />
          )}
        </li>
      ))}
    </ul>
  );
};
