import { LoaderIcon } from "lucide-react";

const Loading = ({ isLoading }) => {
  return (
    <div className={`loading-container${isLoading === true ? " loading" : ""}`}>
      <div className="loading-spinner">
        <LoaderIcon />
      </div>
    </div>
  );
};

export default Loading;