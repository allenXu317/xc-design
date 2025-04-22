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
export declare const Progress: React.FC<ProgressProps>;
