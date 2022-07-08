import styles from "./Avatar.module.css";

export const Avatar = ({ src, hasBorder = true }) => {
  const cssClass = hasBorder ? styles.avatarWithBorder : styles.avatar;
  return <img className={cssClass} src={src} />;
};
