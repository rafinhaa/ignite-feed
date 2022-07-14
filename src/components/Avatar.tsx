import styles from "./Avatar.module.css";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = true, ...rest }: AvatarProps) => {
  const cssClass = hasBorder ? styles.avatarWithBorder : styles.avatar;
  return <img className={cssClass} {...rest} />;
};
