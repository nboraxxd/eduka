export default function LogoIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 31 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 1.338A10 10 0 0 0 10 10a10 10 0 0 0 5 8.662A9.96 9.96 0 0 1 10 20C4.477 20 0 15.523 0 10S4.477 0 10 0c1.821 0 3.53.487 5 1.338"
        fill="#FF695A"
      />
      <circle cx="21" cy="10" r="10" fill="#2C8FFF" />
    </svg>
  )
}
