import { useEffect, useState } from "react";
import TextEditor from "../../components/TextEditor";
import styles from "../../styles/RPNewPost.module.css";
import ImageGallery from "../../components/ImageGallery";
import { create, getById, update } from "../../api/postApi";
import { useLocation, useNavigate, useParams } from "react-router";

function RPNewPost() {
  const [isCreated, setIsCreated] = useState(false);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    path: "",
    firstTxt: "",
    secondTxt: "",
    progress: "",
    version: "",
    resolution: "",
    dwnFileLink: "",
    seconds: "",
    optifine: "",
    embed: "",
    tags: [],
  });

  const [initialFormData, setInitialFormData] = useState(null);
  const navigate = useNavigate()

  const location = useLocation();
  const isEditPage = location.pathname.includes("edit-post");
  const { id } = useParams();

  const arr = [
    { label: "Progress:", name: "progress", placeholder: "50%" },
    { label: "Version:", name: "version", placeholder: "1.12.12" },
    { label: "Resolution:", name: "resolution", placeholder: "16x16" },
    { label: "Optifine:", name: "optifine", placeholder: "yes/no/optional" },
  ];

  const arr2 = [
    { label: "Download:", name: "dwnFileLink", placeholder: "Mediafire Link" },
    { label: "Seconds:", name: "seconds", placeholder: "45" },
  ];

  useEffect(() => {
    if (isEditPage) {
      getPost();
    } else return;
  }, [isEditPage]);

  async function getPost() {
    const res = await getById("respacks",id);  
    const imagesURL = res.images.map(img => img.image_url)
    
    const tagsStr = res.tags.map(tag => tag.name).join(",")

    setImages(imagesURL || []);
    setInitialFormData({
      title: res.title || "",
      path: res.path || "",
      firstTxt: res.firstTxt || "",
      secondTxt: res.secondTxt || "",
      progress: res.progress || "",
      version: res.version || "",
      resolution: res.resolution || "",
      dwnFileLink: res.dwnFileLink || "",
      seconds: res.seconds || "",
      optifine: res.optifine || "",
      embed: res.embed || "",
      tags: tagsStr || "",
    });

    setFormData({
      title: res.title || "",
      path: res.path || "",
      firstTxt: res.firstTxt || "",
      secondTxt: res.secondTxt || "",
      progress: res.progress || "",
      version: res.version || "",
      resolution: res.resolution || "",
      dwnFileLink: res.dwnFileLink || "",
      seconds: res.seconds || "",
      optifine: res.optifine || "",
      embed: res.embed || "",
      tags: tagsStr || "",
    });
  }

  const getChangedFields = () => {
    const changedFields = {};

    for (const key in formData) {
      if (formData[key] !== initialFormData[key] && key !== "tags") {
        changedFields[key] = formData[key];
      }
    }
    return changedFields;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTagsChange = (e) => {
    const { name, value } = e.target;

    const tags = value.split(",").map((element) => element.trim());

    setFormData((prevData) => ({
      ...prevData,
      [name]: tags,
    }));
  };

  const handlePost = async () => {
    setIsCreated(false);
    setMessage("");

    // if (!validateForm()) {
    //   return;
    // }

    // if (images.length < 6) {
    //   setMessage("Debes cargar 6 imagenes como minimo");
    //   return;
    // }

    try {
      let res;

      if (isEditPage) {
        const changedFields = getChangedFields();
        
        res = await update(id, "respacks",changedFields, images, formData.tags);
      } else {
        res = await create("resourcepacks", formData, images);
      }

      navigate("/admin/resourcepacks")

      setIsCreated(true);
      setMessage(res);
    } catch (error) {
      setMessage("Error al crear/editar el post");
    }

    setTimeout(() => {
      setIsCreated(false);
      setMessage("");
    }, 4000);
  };

  // const validateForm = () => {
  //   const requiredFields = [
  //     "title",
  //     "path",
  //     "firstTxt",
  //     "secondTxt",
  //     "progress",
  //     "version",
  //     "resolution",
  //     "optifine",
  //     "download",
  //     "seconds",
  //     "tags",
  //     "embed"
  //   ];
  //   for (let field of requiredFields) {
  //     if (!formData[field].trim()) {
  //       setMessage(`Faltan datos`);
  //       return false;
  //     }
  //   }

  //   if (images.length === 0) {
  //     setMessage("Debes incluir al menos una imagen en la galeria.");
  //     return false;
  //   }

  //   return true;
  // };

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
        <h1 className={styles.title}>
          {!isEditPage ? "New Post" : "Edit Post"}
        </h1>

        <select
          className={styles.select}
          name="path"
          value={formData.path}
          onChange={handleInputChange}
        >
          <option value={""} disabled>
            Java/Bedrok
          </option>
          <option value="java">Java</option>
          <option value="bedrock">Bedrock</option>
        </select>

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
            onChange={handleTagsChange}
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
