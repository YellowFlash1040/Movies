import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <ThreeDots
      wrapperClass={css.Loader}
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
    />
  );
}
