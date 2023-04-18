import ReactLoading from 'react-loading';
import React from 'react';
import styles from './loading.module.scss';
import { classes } from '@tools/index';
interface LoadingProps {
  style?: React.CSSProperties;
  className?: string;
  size?: number;
}

const Loading: React.FC<LoadingProps> = (props) => {

  const sizes = props.size 
    ? {width: `${props.size}px`, height: `${props.size}px`}
    : undefined

  return (
    <div
      className={classes(styles.loading, props.className)}
      style={{...props.style, ...sizes}}
      id='loading-spinner'
      data-testid="loading"
    >
      <ReactLoading type="spin" className={styles.container} />
    </div>
  );
};

export default Loading;
