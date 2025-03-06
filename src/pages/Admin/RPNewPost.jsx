import { useState } from "react";
import TextEditor from "../../components/TextEditor";

function RPNewPost() {
  const [content, setContent] = useState("");

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div>
        {/* Top */}
      </div>

      <TextEditor value={content} onChange={setContent} />
      
      <div>
        {/* Bottom */}
        <div>
          {/* Left */}
          <div>
            {/* Inputs */}
          </div>
          <div>
            {/* Gallery */}
          </div>
        </div>
        <div>
          {/* Right */}
          
        </div>
      </div>
    </div>
  );
}

export default RPNewPost;