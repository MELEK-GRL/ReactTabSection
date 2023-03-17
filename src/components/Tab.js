import { useState } from "react";

export default function Tab({ data }) {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex w-full">
      {data.map((item) => (
        <div key={item.id} className="flex w-full flex-col ">
          <div className="flex flex-col">
            <div
              className={`  ${tab === 0 ? "tabItems" : "tabItemsNone"}`}
              hidden={tab !== 0}
            >
              <img
                src={item.image01}
                alt={item.image01}
                className="object-cover h-[80%] w-[80%]"
              />
            </div>
          </div>
          <div
            className={`  ${tab === 1 ? "tabItems" : "tabItemsNone"}`}
            hidden={tab !== 1}
          >
            <img
              alt={item.image02}
              src={item.image02}
              className="object-cover h-[80%] w-[80%]"
            />
          </div>
          <div
            className={`  ${tab === 2 ? "tabItems" : "tabItemsNone"}`}
            hidden={tab !== 2}
          >
            <img src={item.image03} alt={item.image03} className="object-coverh-[80%] w-[80%]" />
          </div>
          <div
            className={`  ${tab === 3 ? "tabItems" : "tabItemsNone"}`}
            hidden={tab !== 3}
          >
            <img src={item.image04} alt={item.image04} className="object-cover h-[80%] w-[80%]" />
          </div>

          <div className="flex w-full flex-col gap-2 px-1">
            <span className="text-[12.8px]">{item.title}</span>
            <div className="flex items-center justify-between w-full gap-2">
              <span className="text-[12.8px] font-semibold">£{item.price}</span>
              <div className="boxCenter  gap-2">
                <button
                  onClick={() => setTab(0)}
                  className={`bg-blue-600 colorTabs ${
                    tab === 0 ? "active" : null
                  }`}
                />
                <button
                  onClick={() => setTab(1)}
                  className={`bg-orange-600 colorTabs ${
                    tab === 1 ? "active" : null
                  }`}
                />

                <button
                  onClick={() => setTab(2)}
                  className={`bg-purple-600 colorTabs ${
                    tab === 2 ? "active" : null
                  }`}
                />

                <button
                  onClick={() => setTab(3)}
                  className={`bg-green-600 colorTabs ${
                    tab === 3 ? "active" : null
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}