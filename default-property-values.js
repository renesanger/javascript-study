MyButton.defaultProps = {
  disabled: false,
  text: "My Button"
}

const MyButton = ({disabled, text}) => (
  <button disabled={disabled}>{text}</button>
)

/*
  The way that it is written above is deprecated and more uncommon
  modern react uses defaultt parameters instead.
  Currently using default props for classes are more common
*/

// We can use destructuring to write/define props and set the default value right inside the function
// its cleaner and easy to read when having a big component with many props

const MyButton({disabled = false, text = "My Button"}) => (
  <button disabled={disabled}>{text}</button>
);
