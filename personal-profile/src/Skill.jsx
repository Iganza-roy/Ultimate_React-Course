const Skill = (props) => {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span style={{ color: 'white' }}>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

export default Skill;
