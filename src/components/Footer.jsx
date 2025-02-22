import {footerLinks} from '../constants/index'

const Footer = () => {
  return (
    <>
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Resources */}
          <div className=" h3 text-md mb-4">
            <h3 className="text-md py-5  font-semibold ">Resources</h3>
            <ul className="space-y-2 ">
              {footerLinks.map((link,index)=>(
                <li key={index}>
                  <a className="text-left text-neutral-300 hover-text-white" href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className=" h3 text-md mb-4">
            <h3 className="text-md py-5  font-semibold ">Resources</h3>
            <ul className="space-y-2 ">
              {footerLinks.map((link,index)=>(
                <li key={index}>
                  <a className="text-left text-neutral-300 hover-text-white" href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          

          <div className=" h3 text-md mb-4">
            <h3 className="text-md py-5  font-semibold ">Resources</h3>
            <ul className="space-y-2 ">
              {footerLinks.map((link,index)=>(
                <li key={index}>
                  <a className="text-left text-neutral-300 hover-text-white" href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
