import styled from "styled-components";
import { uploadFiles } from "@service";
import { useUpdateList } from "@/store";
const Btn = styled.div`
  background: ${(props) => props.theme.$frountColor};
  height: 64px;
  width: 164px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
  }
`;

export default function UploadBtn() {
  const update = useUpdateList("upload");
  console.log(update);
  function onChange(event) {
    console.log(event.target.files[0]);
    const curFile = event.target.files[0];
    const setProgress = update({ name: curFile.name, size: curFile.size });
    setProgress(0);
    uploadFiles(event.target.files, setProgress);
  }
  return (
    <Btn>
      ＋Upload
      <input type="file" onChange={onChange} className="form-control" />
    </Btn>
  );
}
