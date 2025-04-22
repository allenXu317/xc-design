import React from "react";
import classNames from "classnames";

interface DraggerProps {
  onFile: (files: FileList) => void;
  children: React.ReactNode;
}

export const Dragger: React.FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = React.useState(false);

  const classes = classNames("viking-uploader-dragger",{
    "is-dragover": dragOver,
  });

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    onFile(e.dataTransfer.files);
  };

  const handleDrag = (e: React.DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };

  return (
    <div
      className={classes}
      onDrop={handleDrop}
      onDragOver={(e) => handleDrag(e, true)}
      onDragLeave={(e) => handleDrag(e, false)}
    >
      {children}
    </div>
  );
}