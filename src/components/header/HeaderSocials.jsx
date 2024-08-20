
import './header.css';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shipranshi-keshri-71833122a/" target="_blank" >
          <BsLinkedin />
        </a>
        <a href="https://github.com/shipranshi" target="_blank" >
          <FaGithub />
        </a>
        <a href="https://leetcode.com/keshrishipranshi/" target="_blank" >
          <SiLeetcode />
        </a>


    </div>
  );
}

export default HeaderSocials;
