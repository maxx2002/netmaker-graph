interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="flex items-center p-2 text-white transition border rounded-md md:px-4 md:py-1 gap-x-2 border-neutral-600 hover:border-primary hover:text-primary"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
