import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

export const Avatar = ({ src, hasBorder = true, alt }: AvatarProps) => {
  const cssClass = hasBorder ? styles.avatarWithBorder : styles.avatar;
  return <img className={cssClass} src={src} alt={alt} />;
};
