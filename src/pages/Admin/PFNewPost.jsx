import { useEffect, useState } from "react";
import { create, getById, update } from "../../api/postApi";
import styles from "../../styles/RPNewPost.module.css";
import TextEditor from "../../components/TextEditor";
import { useLocation, useNavigate, useParams } from "react-router";
import ImageGallery from "../../components/ImageGallery";

function PFNewPost() {
  const [isCreated, setIsCreated] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    path: "",
    text: "",
    tags: [],
    embed: "",
  });
  const [initialFormData, setInitialFormData] = useState({});
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const isEditPage = location.pathname.includes("edit-post");
  const { id } = useParams();

  async function getPost() {
    const res = await getById("portfolio", id);
    const imagesURL = res.images.map((img) => img.image_url);
    const tagsStr = res.tags.map((tag) => tag.name).join(",");

    setImages(imagesURL || []);
    setInitialFormData({
      title: res.title || "",
      path: res.path || "",
      text: res.text || "",
      tags: tagsStr || "",
      embed: res.embed || "",
    });

    setFormData({
      title: res.title || "",
      path: res.path || "",
      text: res.text || "",
      tags: tagsStr || "",
      embed: res.embed || "",
    });
  }

  useEffect(() => {
    if (isEditPage) {
      getPost();
    } else return;
  }, [isEditPage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePost = async () => {
    setMessage("");
    if (!validateForm()) {
      return;
    }

    try {
      let res;

      if (isEditPage) {
        setLoading("Guardando cambios...")
        const changedFields = getChangedFields();
        res = await update(
          id,
          "portfolio",
          changedFields,
          images,
          formData.tags
        );
      } else {
        setLoading("Creando post...")
        res = await create("portfolio", formData, images);
      }

      navigate("/admin/portfolio");
      setIsCreated(true);
      setMessage(res);
    } catch (error) {
      setMessage("Error al crear/editar el post");
    }  finally {
      setLoading("")
    }
  };

  const handleTagsChange = (e) => {
    const { name, value } = e.target;

    const tags = value.split(",").map((element) => element.trim());

    setFormData((prevData) => ({
      ...prevData,
      [name]: tags,
    }));
  };

  const getChangedFields = () => {
    const changedFields = {};

    for (const key in formData) {
      if (formData[key] !== initialFormData[key] && key !== "tags") {
        changedFields[key] = formData[key];
      }
    }
    return changedFields;
  };

  const validateForm = () => {
    const requiredFields = ["title", "text", "embed"];

    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        setMessage(`Faltan datos`);
        return false;
      }
    }

    if (formData.path === "") {
      setMessage("Debes seleccionar una opcion 2D o 3D");
      return false;
    }

    if (formData.tags.length === 0) {
      setMessage("Debes incluir al menos una etiqueta.");
      return false;
    }

    if (images.length === 0) {
      setMessage("Debes incluir al menos una imagen en la galeria.");
      return false;
    }

    return true;
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
            2D/3D
          </option>
          <option value="2D">2D</option>
          <option value="3D">3D</option>
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
      {loading && <p className={styles.loadingMessage}>{loading}</p>}

      <TextEditor
        value={formData.text}
        onChange={(value) =>
          setFormData((prevData) => ({ ...prevData, text: value }))
        }
      />

      <div className={styles.pfInpContainer}>
        <div className={styles.pfGalleryContainer}>
          <ImageGallery images={images} setImages={setImages} />
          <input
            className={styles.input}
            type="text"
            placeholder="/ EMBED <>"
            name="embed"
            value={formData.embed}
            onChange={handleInputChange}
          />
        </div>
        <textarea
          style={{ height: "10rem", textAlign: "left" }}
          className={styles.input}
          type="text"
          placeholder="TAGS: java, 2d, 3d, bedrock, low poly, blockbench, photoshop, optifine, no optifine, "
          name="tags"
          value={formData.tags}
          onChange={handleTagsChange}
        />
      </div>
    </div>
  );
}

export default PFNewPost;
