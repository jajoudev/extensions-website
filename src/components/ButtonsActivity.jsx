import { useState } from "react";

function ButtonsActivity({ content }) {
  const [isClick, setIsClick] = useState(false);
  return (
    <p
      onClick={() => setIsClick(!isClick)}
      className={`border border-[#D6E2F5] bg-white p-2 rounded-2xl shadow-lg cursor-pointer transition-colors duration-200 ${
        isClick ? "bg-orange-700 text-black dark:text-black" : "bg-orange-500 text-black dark:bg-orange-500 dark:text-black"
      }`}
    >
      {content}
    </p>
  );
}

export default ButtonsActivity;
