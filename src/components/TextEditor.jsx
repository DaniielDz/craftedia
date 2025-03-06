import { useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/TextEditor.css"

const TextEditor = ({ value, onChange }) => {
  const quillRef = useRef(null); // Referencia para la instancia de Quill

  // Memoizar el objeto `modules` para evitar recrearlo en cada renderizado
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
        [{ embed: "Embed" }], // Botón personalizado para incrustar modelos 3D
      ],
      handlers: {
        // Manejador para el botón de incrustación
        embed: () => {
          const url = prompt("Ingresa la URL del modelo 3D de Sketchfab:");
          if (url) {
            const embedCode = `<iframe src="${url}/embed" width="600" height="400" frameborder="0" allowfullscreen></iframe>`;
            const quill = quillRef.current.getEditor(); // Accede a la instancia de Quill
            const range = quill.getSelection();
            quill.clipboard.dangerouslyPasteHTML(range.index, embedCode);
          }
        },
      },
    },
  }), []); // Dependencias vacías: el objeto `modules` no cambiará entre renderizados

  return (
    <ReactQuill
      ref={quillRef} // Asigna la referencia al componente ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      theme="snow"
      placeholder="Escribe aquí..."
    />
  );
};

export default TextEditor;