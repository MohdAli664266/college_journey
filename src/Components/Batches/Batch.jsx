import React, { useEffect, useState } from "react";
import database from "../appwrite/database";
import BatcheCards from "./BatcheCards";

function Batch() {
  const [batchs, setBatch] = useState([]);
  const batch = async () => {
    await database
      .getAllBatches()
      .then((res) => {
        setBatch(res?.documents);
      })
      .catch((error) => alert(error));
  };
  useEffect(() => {
    batch();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center pt-10 flex-col gap-2">
        <div className="w-full font-extrabold flex flex-col p-4 bg-[#94b6ff] justify-center gap-4 mt-8">
          <div className="text-2xl text-white font-bold px-4 py-2">
            <h1>Batches</h1>
          </div>
          <div className="gap-4 p-4 grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 scrollbar-hide">
            {batchs && batchs.map((batch) => 
                <div key={batch.$id}><BatcheCards batch={batch} /></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Batch;
