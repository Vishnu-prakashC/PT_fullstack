const Skills = () => {
    return (
        <div>
           <h1> Skills</h1>
  <ul>
    {skills && skills.map((s, index) => (
      <li key={index}>{s}</li>
    ))}
  </ul>
            </div>
    );
}