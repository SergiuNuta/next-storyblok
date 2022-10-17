import { storyblokEditable } from "@storyblok/react"
import { useEffect, useState } from "react";
import { render } from 'storyblok-rich-text-react-renderer';

const HeroSection = ({ blok }) => {
  let test = []
  const subHeading = render(blok.subheading)
  subHeading.map(t => {
    Object.values(t.props).map(o => {
      test.push(o[0])
    })
})

  const [typedSubheading, setTypedSubheading] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedSubheading(test[0].slice(0, typedSubheading.length + 1))
    }, 100)
    return () => clearTimeout(timeout)
  }, [test, typedSubheading])
  return (
    <div className="bg-[#242359] w-full h-96 md:h-full flex flex-col text-white md:h-screen px-7 pt-9">
      <h2 className="text-[2em] md:text-[4em] w-full" {...storyblokEditable(blok)}>{blok.headline}</h2>
      <div className="text-[2em] md:text-[4em] blinking-cursor w-[75%]" {...storyblokEditable(blok)}>{typedSubheading}</div>
    </div>
  )
}

export default HeroSection

//   .typed-out{
//     overflow: hidden;
//     border-right: .30em solid orange;
//     border-radius: 4px;
//     white-space: nowrap;
//     animation:
//       typing 1s steps(20, end) forwards,
//       blinking 1.2s infinite;
//     font-size: 1.6rem;
//     width: 0;
// }
// @keyframes typing {
//   from { width: 0 }
//   to { width: 100% }
// }
// @keyframes blinking {
//   from { border-color: transparent }
//   to { border-color: green; }
// }