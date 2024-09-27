const teamMembers = [
    { name: 'Member 1', role: 'Frontend Developer' },
    { name: 'Member 2', role: 'Backend Developer' },
    { name: 'Member 3', role: 'UI/UX Designer' },
    { name: 'Member 4', role: 'Full-Stack Developer' },
    { name: 'Member 5', role: 'Content Strategist' },
    { name: 'Member 6', role: 'Project Manager' },
  ];
  
  function Team() {
    return (
      <section>
        <h2>Meet Our Team</h2>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Team;
  