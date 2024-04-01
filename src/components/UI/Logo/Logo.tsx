import { useNavigate } from 'react-router-dom';
import './Logo.scss';
const Logo = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/', {replace: true})
  }
  return (
    <div>
      <button onClick={goToMain} className="logo">QPICK</button>
    </div>
  );
};

export default Logo;
