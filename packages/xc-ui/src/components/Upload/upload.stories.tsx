import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { action } from '@storybook/addon-actions';
import { Upload } from './upload';

import React from 'react';

type UploadArgs = React.ComponentProps<typeof Upload>;

const uploadMeta: Meta<UploadArgs> = {
  title: 'Upload',
  component: Upload,
};

export default uploadMeta;

type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  args: {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    drag: false,
  },
  render: (args) => {
    const [{ action: uploadAction, drag }, setProps] = useArgs();

    const checkFileSize = (file: File) => {
      if (Math.round(file.size / 1024) > 50) {
        alert('file too big');
        return false;
      }
      return true;
    }

    const onChange = action('on-change');
    const onProgress = action('on-progress');
    const onSuccess = action('on-success');
    const onError = action('on-error');
    const beforeUpload = (file: File) => {
      if (!checkFileSize(file)) {
        return false;
      }
      action('before-upload')(file);
      return true; // or return a Promise<File> if needed
    };

    const defaultFileList = [
      {
        uid: '123',
        size: 1234,
        name: 'hello.md',
        status: 'uploading',
        percent: 30,
      },
      {
        uid: '122',
        size: 1234,
        name: 'xyz.md',
        status: 'success',
        percent: 100,
      },
      {
        uid: '121',
        size: 1234,
        name: 'eyiha.md',
        status: 'error',
        percent: 0,
      },
      {
        uid: '120',
        size: 1234,
        name: 'eyiha.md',
        status: 'ready',
        percent: 0,
      }
    ];

    return (
      <Upload
        action={uploadAction}
        onChange={onChange}
        onProgress={onProgress}
        onError={onError}
        onSuccess={onSuccess}
        beforeUpload={beforeUpload}
        text="上传文件"
        defaultFileList={defaultFileList}
        multiple
        drag={drag}
      />
    );
  },
};
