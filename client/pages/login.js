import styles from "../styles/ls.module.css";
import Link from "next/link";
import { useState } from "react";

function index() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [Err, setError] = useState({
    status: false,
    message: "",
  });

  

  const [btnLoadign, setBtnLoading] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.body}>
          <div className={styles.title}>
            <h1 className={styles.title_text}>Login</h1>
          </div>

          <form className={styles.form}>
            <div className={styles.form_group}>
              <input
                className={styles.form_input}
                type="text"
                placeholder=" "
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />

              <label className={styles.form_label}>
                Email address / User name
              </label>
            </div>

            <div className={styles.form_group}>
              <input
                className={styles.form_input}
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className={styles.form_label}>Password</label>
              {Err && (
                <span className={styles.l_error_message}>{Err.message}</span>
              )}
            </div>

            <div className={styles.form_bottom}>
              <button className={styles.form_button} type="submit">
                <span className={styles.form_button_text}>Login</span>
              </button>
            </div>
          </form>

          <div className={styles.au}>
            <div className={styles.au_bd}>
              <div className={styles.or_d}>
                <span className={styles.or_text}> or</span>
              </div>

              <div className={styles.au_group}>
                <button className={styles.google_button}>
                  <img
                    src="/google_icon.svg"
                    className={styles.google_button_icon}
                  />
                  <span className={styles.google_button_text}>
                    Continue With Google
                  </span>
                </button>
                <div className={styles.body_bottom}>
                  <span>
                    Don't have an accound? <Link href="/singup">Sing Up</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
