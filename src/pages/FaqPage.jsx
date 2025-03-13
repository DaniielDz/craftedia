import { useContext } from "react";
import TopImageInfo from "../components/TopImageInfo";
import styles from "../styles/FaqPage.module.css";
import { ThemeContext } from "../context/ThemeContext.jsx";

function FaqPage() {
  const textContain = [
    {
      title: "Do you make commissions?",
      description:
        "Sure, but I may not always have time, however, you can write to me and we will gladly talk about the project.",
    },
    {
      title: "I have an idea, where can I tell you about it?",
      description: "It's almost the same answer as above :D",
    },
    {
      title: "I'm a content creator, can I record your resource packs?",
      description:
        "Sure, I appreciate all the content creators who help distribute my projects and make them reach a larger audience 💜, all I ask is that you put the official links in your description!.",
    },
    {
      title: "I found a bug, how can I report it?",
      description:
        "You can report it in the comments section or send a direct message! I usually read them all.",
    },
    {
      title: "How do install a 3D resource pack?",
      description:
        "They are installed like any common resource pack, in the resourcepacks folder, if you don't know how to do this you can look for a tutorial, any tutorial will work! just keep in mind that some resource packs work only if you have optifine installed.",
    },
    {
      title: "I'm a creator, can we do a collaboration?",
      description:
        "Of course yes, write me and we'll talk about it, I'm a graphic designer and I have a lot of experience in modeling and texturing, we can create something nice.",
    },
  ];
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <TopImageInfo />
      <section className={`${styles.textSection} ${isDarkMode && styles.darkMode}`}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.description}>
          In the following section are the answers to different questions that
          may be of interest to you. If you do not find what you are looking
          for, you can make a comment and I will answer you directly, or I will
          place the question in this section.
        </p>
        <div className={styles.textContain}>
          {textContain.map((item, index) => (
            <div className={styles.text} key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FaqPage;
