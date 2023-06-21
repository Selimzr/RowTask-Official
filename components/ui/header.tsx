import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Logo from '@/public/images/rowtask.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#000', position:'fixed' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-1 justify-start">
            {/* Logo */}
            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Logo} width={250} height={150} alt="Logo" style={{ }}/>
          </div>

        

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
