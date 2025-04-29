import { useEffect, useState } from "react";

import CardWrapper from "./components/CardWrapper";
import ExtensionIcon from "./components/ExtensionIcon";
import ExtensionName from "./components/ExtensionName";
import ExtensionContent from "./components/ExtensionContent";
import ToggleSwitch from "./components/ToggleSwitch";
import FooterCard from "./components/FooterCard";

function App() {
  const [extensionData, setExtensionData] = useState([]);
  const [isToggled, setIsToggled] = useState(false);

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
    <>
      <header className="m-4 border border-[#D6E2F5] bg-white p-2 rounded-lg shadow-lg">
        <img src="./public/assets/images/logo.svg" />
      </header>
      <main className="flex flex-col items-center justify-between min-h-screen mt-6">
        <h1 className="text-3xl font-extrabold text-indigo-950">
          Extensions List
        </h1>
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
      </main>
    </>
  );
}

export default App;
