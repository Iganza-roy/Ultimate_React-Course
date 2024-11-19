import './App.css';
import Skill from './Skill';

export const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill='React' emoji='✌️' color='#123456' />
      <Skill skill='Javascript' emoji='🤞' color='orangered' />
      <Skill skill='Python' emoji='😁' color='orange'/>
    </div>
  );
};

export default SkillList;
