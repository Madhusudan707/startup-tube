import styles from "../../../styles/contact.module.css";
import { Button } from "../../index";
import { useTheme } from "../../../contexts";

export const Contact = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.contact}>
      <div id="contactModal" className={styles.modal} autoFocus={false}>
        <div className={`${styles.modal_content} ${theme}`}>
          <a href="#close" title="Close" className={styles.modal_close}>
            X
          </a>

          <div className={styles.contact_heading}>
            <h2>GET IN TOUCH WITH ME</h2>
          </div>
          <div className={styles.social_connect}>
            <a
              href="https://www.linkedin.com/in/madhusudan-das-8552ba196"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fab fa-linkedin fa-3x linkedin"></i>
            </a>
            <a
              href="https://github.com/Xdev200"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fab fa-github fa-3x github"></i>
            </a>
            <a
              href="https://twitter.com/xdev_200"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fab fa-twitter-square fa-3x twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/xdev200/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fab fa-instagram fa-3x instagram"></i>
            </a>
          </div>
          {/* <div className={styles.contact_inputs}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="4" cols="50" defaultValue="Your Message"></textarea>
          </div> */}
          {/* <div className={styles.contact_action}>
            <Button btnText="SUBMIT" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
