import React from 'react';
import { ThemeProps } from '../Icon/Icon';

export interface ProgressProps {
  /**进度条的百分比 */
  percent: number;
  /**进度条的高度 */
  strokeHeight?: number;
  /**进度条的样式 */
  showText?: boolean;
  /**进度条的主题 */
  theme?: ThemeProps;
  /**进度条的样式 */
  styles?: React.CSSProperties;
}

export const Progress: React.FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight = 15,
    showText = true,
    theme = 'primary',
    styles,
  } = props;
  return (
    <div className="viking-progress-bar">
      <div
        className="viking-progress-bar-outer"
        style={{ height: `${strokeHeight}px`, ...styles }}
      >
        <div
          className={`viking-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};
