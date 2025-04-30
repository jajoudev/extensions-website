import { useEffect, useState } from "react";

import ButtonsActivity from "./components/ButtonsActivity";
import CardWrapper from "./components/CardWrapper";
import ExtensionIcon from "./components/ExtensionIcon";
import ExtensionName from "./components/ExtensionName";
import ExtensionContent from "./components/ExtensionContent";
import ToggleSwitch from "./components/ToggleSwitch";
import FooterCard from "./components/FooterCard";

import { FaMoon } from "react-icons/fa";

function App() {
  const [extensionData, setExtensionData] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [isDarkMd, setIsDarkMd] = useState(false)
  // const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/data.json");
      const data = await res.json();

      console.log(data);
      setExtensionData(data);
    }

    getData();
  }, []);

  return (
    <div className={`dark:bg-red-500 ${isDarkMd ? "dark" : ""}`} >
      <FaMoon onClick={() => setIsDarkMd(!isDarkMd)} className={`m-4 cursor-pointer animate-pulse ${
        isDarkMd ? "bg-white text-black" : "bg-black text-white"
      }`} />
      <header className="m-4 border border-[#D6E2F5] bg-white dark:bg-slate-900 dark:border-slate-700 p-2 rounded-lg shadow-lg md:w-[90%] md:ml-auto md:mr-auto lg:w-[90%] lg:block lg:ml-auto lg:mr-auto">
        <img src="./public/assets/images/logo.svg" />
      </header>
      <main className="flex flex-col min-h-screen mt-6">
        <div className="flex flex-col items-center justify-center md:flex md:justify-between md:flex-row md:ml-auto md:mr-auto md:w-[90%] lg:w-[90%]">
          <h1 className="text-2xl font-extrabold text-indigo-950 mb-5 dark:text-white">
            Extensions List
          </h1>
          <div className="flex gap-4 md:gap-8">
            <ButtonsActivity content="All" />
            <ButtonsActivity content="Active" />
            <ButtonsActivity content="Inactive" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[93%] mx-auto items-start">
          {extensionData.map((extension) => (
            <CardWrapper
              css="p-5 rounded-lg border border-[#D6E2F5] m-4 shadow-lg bg-white"
              key={extension.id}
            >
              <div className="flex mb-10">
                <ExtensionIcon css="mb-auto" src={extension.logo} />
                <div className="flex flex-col ml-5 mb-auto">
                  <ExtensionName
                    css="text-xl font-bold text-indigo-950"
                    name={extension.name}
                  />
                  <ExtensionContent
                    css="text-neutral-500"
                    content={extension.description}
                  />
                </div>
              </div>
              <FooterCard css="flex items-center justify-center w-full ml-auto mr-auto gap-40">
                <p className="rounded-full border border-[#C6C6C6] inline pt-2 pr-4 pb-2 pl-4 text-center">
                  Remove
                </p>
                <ToggleSwitch
                  isToggled={isToggled}
                  onToggle={() => setIsToggled(!isToggled)}
                />
              </FooterCard>
            </CardWrapper>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
