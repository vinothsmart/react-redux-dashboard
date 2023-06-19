export const Testing = () => {
  const hanldeAddSkill = () => {
    const skillList = document.getElementById("skillList");
    const skillInput = document.querySelector("input");
    const newSkill = document.createElement("li");
    newSkill.innerHTML = skillInput.value;
    skillList.appendChild(newSkill);
    skillInput.value = "";
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1> Testing Page</h1>
          <input type="text" placeholder="Enter Skill" />

          <button onClick={hanldeAddSkill()}>Add Skill</button>

          <ul id="skillList">
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </>
  );
};
