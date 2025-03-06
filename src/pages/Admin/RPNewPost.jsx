import { useState } from "react";
import TextEditor from "../../components/TextEditor";
import styles from "../../styles/RPNewPost.module.css";
import ImageGallery from "../../components/ImageGallery";

function RPNewPost() {
  const [content, setContent] = useState("");
  const arr = [
    {
      label: "Progress:",
      placeholder: "50%",
    },
    {
      label: "Version:",
      placeholder: "1.12.12",
    },
    {
      label: "Resolution:",
      placeholder: "16x16",
    },
    {
      label: "Optifine:",
      placeholder: "yes/no/optional",
    },
  ];

  const arr2 = [
    {
      label: "Download:",
      placeholder: "Select File",
    },
    {
      label: "Seconds:",
      placeholder: "45",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        {/* Top */}
        <input className={styles.input} type="text" placeholder="Title" />
        <h1 className={styles.title}>New Post</h1>
        <input className={styles.input} type="text" placeholder="java/bedrok" />
        <button className={styles.btn}>Post</button>
      </div>

      <TextEditor value={content} onChange={setContent} />
      <TextEditor value={content} onChange={setContent} />

      <div className={styles.bottomContainer}>
        {/* Bottom */}
        <div>
          {/* Left */}
          <div className={styles.inputsContainer}>
            {/* Inputs */}
            {arr.map((obj, index) => (
              <div key={index} className={styles.inputGroup}>
                <label htmlFor="">{obj.label}</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder={obj.placeholder}
                />
              </div>
            ))}
          </div>
          <ImageGallery />
        </div>
        <div className={styles.inputsContainer}>
          {arr2.map((obj, index) => (
            <div key={index} className={styles.inputGroup}>
              <label htmlFor="">{obj.label}</label>
              <input
                className={styles.input}
                type="text"
                placeholder={obj.placeholder}
              />
            </div>
          ))}
          <input style={{height:"10rem"}} className={styles.input} type="text" placeholder="TAGS: java, 2d, 3d, bedrock, low poly, blockbench, photoshop, optifine, no optifine, " />
          <input
            className={styles.input}
            type="text"
            placeholder="/ EMBED <>"
          />
        </div>
      </div>
    </div>
  );
}

export default RPNewPost;
