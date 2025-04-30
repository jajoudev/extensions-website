import { useState } from "react";

function ButtonsActivity({ content }) {
  const [isClick, setIsClick] = useState(false);
  return (
    <p
      onClick={() => setIsClick(!isClick)}
      className={`border border-[#D6E2F5] bg-white p-2 rounded-2xl shadow-lg cursor-pointer transition-colors duration-200 ${
        isClick ? "bg-orange-700 text-white dark:text-black" : "bg-white text-black dark:bg-black dark:text-white"
      }`}
    >
      {content}
    </p>
  );
}

export default ButtonsActivity;
