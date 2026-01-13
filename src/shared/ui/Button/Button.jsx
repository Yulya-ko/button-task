import { Ellipsis } from "lucide-react";
import { getStyles } from "../../lib/getStyles/getStyles";
import styles from "./Button.module.scss";

export const Button = (props) => {
  const {
    children,
    className,
    color = "primary",
    circle,
    cta,
    loading,
    ...otherProps
  } = props;

  const mode = {
    [styles.circle]: circle,
    [styles.cta]: cta,
  };
  // console.log(mode)


  const additional = [
    className,
    styles[color],
  ];
  // console.log(additional)


  return (
    <button
      className={getStyles(styles.button, mode, additional)}
      {...otherProps}
    >
      {!cta && <div className={styles.underLine} />}
      {loading ? <Ellipsis className={styles.waiting} /> : children}
    </button>
  );
};
