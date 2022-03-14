import { Svg, SvgProps } from '@vknighthub/uikit'

const ContactBackground: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1922 899" {...props}>
      <path stroke="#FC3A05" strokeLinecap="round" strokeLinejoin="round" d="M1 385.042l331.878-148.997c15.789-7.089 33.87-7.014 49.6.205l136.429 62.612c15.152 6.954 32.513 7.29 47.923.928l390.528-161.234c17.26-7.126 36.854-5.81 53.002 3.561l167.19 96.999c15.16 8.794 33.41 10.522 49.94 4.731L1921 1"/>
      <path fill="url(#paint0_linear)" d="M358 226.025L1 386.042V899h1920V2l-719.5 251.971L985 128.211 542.5 310.766 358 226.025z" opacity=".06"/>
      <defs>
        <linearGradient id="paint0_linear" x1="961" x2="961" y1="4.705" y2="899" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FC3A05"/>
            <stop offset="1" stopColor="#FC3A05" stopOpacity="0"/>
        </linearGradient>
    </defs>
    </Svg>
  )
}

export default ContactBackground
