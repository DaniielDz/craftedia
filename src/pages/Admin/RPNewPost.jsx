import { useEffect, useState } from "react";
import TextEditor from "../../components/TextEditor";
import styles from "../../styles/RPNewPost.module.css";
import ImageGallery from "../../components/ImageGallery";
import { create } from "../../api/postApi";

function RPNewPost() {
  const [isCreated, setIsCreated] = useState(false);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "", // java/bedrok
    firstTxt: "",
    secondTxt: "",
    progress: "",
    version: "",
    resolution: "",
    optifine: "",
    download: "",
    seconds: "",
    tags: "",
    embed: "",
  });

  const arr = [
    { label: "Progress:", name: "progress", placeholder: "50%" },
    { label: "Version:", name: "version", placeholder: "1.12.12" },
    { label: "Resolution:", name: "resolution", placeholder: "16x16" },
    { label: "Optifine:", name: "optifine", placeholder: "yes/no/optional" },
  ];

  const arr2 = [
    { label: "Download:", name: "download", placeholder: "Select File" },
    { label: "Seconds:", name: "seconds", placeholder: "45" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePost = async () => {
    setIsCreated(false);
    setMessage("");

    if (formData.firstTxt.trim() === "") {
      setMessage("Ingresa texto antes de enviarlo");
    } else {
      try {
        const res = await create(formData, images);
        setIsCreated(true);
        setMessage(res);
        // setImages([]);
        // setFormData({
        //   title: "",
        //   category: "",
        //   firstTxt: "",
        //   secondTxt: "",
        //   progress: "",
        //   version: "",
        //   resolution: "",
        //   optifine: "",
        //   download: "",
        //   seconds: "",
        //   tags: "",
        //   embed: "",
        // });
      } catch (error) {
        setMessage("Error al crear el post");
      }
    }

    setTimeout(() => {
      setIsCreated(false);
      setMessage("");
    }, 4000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <h1 className={styles.title}>New Post</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="java/bedrok"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <button onClick={handlePost} className={styles.btn}>
          Post
        </button>
      </div>

      {message && (
        <p
          className={`${styles.message} ${
            !isCreated ? styles.messageError : ""
          }`}
        >
          {message}
        </p>
      )}

      <TextEditor
        value={formData.firstTxt}
        onChange={(value) =>
          setFormData((prevData) => ({ ...prevData, firstTxt: value }))
        }
      />
      <TextEditor
        value={formData.secondTxt}
        onChange={(value) =>
          setFormData((prevData) => ({ ...prevData, secondTxt: value }))
        }
      />

      <div className={styles.bottomContainer}>
        <div>
          <div className={styles.inputsContainer}>
            {arr.map((obj, index) => (
              <div key={index} className={styles.inputGroup}>
                <label htmlFor="">{obj.label}</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder={obj.placeholder}
                  name={obj.name}
                  value={formData[obj.name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
          <ImageGallery images={images} setImages={setImages} />
        </div>
        <div className={styles.inputsContainer}>
          {arr2.map((obj, index) => (
            <div key={index} className={styles.inputGroup}>
              <label htmlFor="">{obj.label}</label>
              <input
                className={styles.input}
                type="text"
                placeholder={obj.placeholder}
                name={obj.name}
                value={formData[obj.name]}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <textarea
            style={{ height: "10rem", textAlign: "left" }}
            className={styles.input}
            type="text"
            placeholder="TAGS: java, 2d, 3d, bedrock, low poly, blockbench, photoshop, optifine, no optifine, "
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="/ EMBED <>"
            name="embed"
            value={formData.embed}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default RPNewPost;
