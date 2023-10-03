import { useNavigate } from 'react-router-dom';

function Navigate() {
  // Use the useNavigate hook to get the navigation function
  const navigate = useNavigate();

  const handleClick = () => {
    // Use the navigate function to navigate to a different route
    navigate('/');
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}

export default Navigate;
