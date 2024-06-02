export default function ExploreIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      color="currentColor"
      {...props}
    >
      <polygon points="14.121 14.121 7.05 16.95 9.879 9.879 16.95 7.05" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
