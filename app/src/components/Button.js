function Button({ param, action, className }) {
  return (
    <button onClick={() => action(param)} className={className}>
      {param}
    </button>
  );
}

export default Button;