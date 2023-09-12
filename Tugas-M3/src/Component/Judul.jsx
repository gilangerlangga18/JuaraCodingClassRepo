import React, { useEffect, useState } from "react";

const Judul = () => {
  const [judul, setJudul] = useState("");
  const [H1, setH1] = useState("");

  const update = () => {
    setH1(judul);
  };
  useEffect(() => {
    setTimeout(() => {
      update();
    }, 4000);
  }, [judul]);
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "blue",
        }}
      >
        {H1}
      </h1>
      <form>
        <input
          type="text"
          placeholder="input judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
        {/* <button onClick={jpdateJudul}> add Judul </button> */}
      </form>
    </div>
  );
};

export default Judul;
