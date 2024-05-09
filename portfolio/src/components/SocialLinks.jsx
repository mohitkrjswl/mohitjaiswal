import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mohitkrjswl/",
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/mohitkrjswl",
    },
    {
      id: 3,
      child: (
        <>
          X <FaXTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/mohitkrjswl",
    },

    {
      id: 4,
      child: (
        <>
          Mail <MdOutlineMailOutline size={30} />
        </>
      ),
      href: "mailto:mohitkrjswl@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];



  return (

    < div className="hidden lg:flex flex-col top-[35%] left-0 fixed" >
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-65px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>

        )

        )}

      </ul>
    </div >

  )
}

export default SocialLinks;


// <div>SocialLinks <FaGithub /> <FaLinkedin />
//   <FaXTwitter /> <MdOutlineMailOutline />
//   <BsFillPersonLinesFill />

// </div>