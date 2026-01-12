import styles from "./Button.module.css";

type Button = "primary_btn" | "about_btn";

interface ButtonProps {
  type: Button;
  text: string;
  className?: string;
  image?: string;
}

const Button = ({
  text,
  type = "primary_btn",
  image,
  className = "",
}: ButtonProps) => {
  const buttonClass = type === "primary_btn" ? styles.primary_btn : styles.about_btn;
  return (
    <button className={`${buttonClass} ${className}`}>
      {text} {image && <img src={image} alt="" />}
    </button>
  );
};

export default Button;
