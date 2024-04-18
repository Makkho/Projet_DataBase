import clsx from "clsx"

const variants = {
  primary: "bg-green-600 font-medium text-white",
  danger: "bg-red-500 active:bg-red-600 text-white",
}
const sizes = {
  md: "text-sm px-2 py-1",
  lg: "text-lg font-semibold px-4 py-3",
}
export const Button = ({
  className,
  variant = "primary",
  size = "lg",
  ...otherProps
}) => (
  <button
    className={clsx(variants[variant], sizes[size], className)}
    {...otherProps}
  />
)