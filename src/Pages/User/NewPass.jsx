import  { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';

import { resetPassword } from '../../Redux/Slices/AuthSlice'; // Assuming Redux for state management

const NewPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { token } = params;

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Validate token from API (optional)
    // If invalid, redirect to error page or request new token
  }, [dispatch, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError('Please enter both password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await dispatch(resetPassword({ token, newPassword }));
        if (res.payload && res.payload.success) {
           
            const message = res.payload.message;
            console.log(message); 
          }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="password" className="block mb-1">New Password:</label>
        <input
          type="password"
          id="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Reset Password</button>
    </form>
  </div>

    
  );
};

export default NewPass;

