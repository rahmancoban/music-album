import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <ul class="social-icons">
          <li>
            <a
              target="_blank"
              href="https://github.com/rahmancoban"
              class="social-icon"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rahmancoban/"
              class="social-icon"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.hackerrank.com/rahmancoban?hr_r=1"
              class="social-icon"
            >
              <FaHackerrank />
            </a>
          </li>
        </ul>

        <p>
          &copy; <span>2023</span> Rahman Coban.
        </p>
      </footer>
    </div>
  );
};
export default Footer;
