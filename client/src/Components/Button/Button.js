import styles from './Button.module.css'

const Button = (props) => {
  const {title} = props;
  return (
    <button className={styles.button} onClick={props.onClick}>
      {title}
    </button>
  )
}

export default Button;