import styles from "../../styles/home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.about}>
        <h1>What is Startup Tube?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
        </p>
      </div>
      <div className={styles.video_wrapper}>
        <iframe
          title="about"
          src="https://www.youtube.com/embed/17XZGUX_9iM"
        ></iframe>
      </div>
    </div>
  );
};
