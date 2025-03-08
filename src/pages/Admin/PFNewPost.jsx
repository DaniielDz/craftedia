import { useEffect, useState } from "react";
import { getById } from "../../api/postApi";

function PFNewPost() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await getById(8);
    const { content } = res;

    setData(res);

    console.log(content);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>{data && <div dangerouslySetInnerHTML={{ __html: data.content }} />}</>
  );
}

export default PFNewPost;
