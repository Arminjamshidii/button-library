import './App.css'

import './App.css';
import Button from './components/Button';

function App() {
  return (
    <>
      {/* Primary button with medium size */}
      <Button variant="primary" size="md">
        Primary Button
      </Button>

      {/* Submit button with small size */}
      <Button variant="submit" size="sm">
        Submit Button
      </Button>

      {/* Secondary button with small size */}
      
      <Button variant="secondary" size="sm">
        Secondary Button
      </Button>

      {/* Delete button with large size */}
      <Button variant="delete" size="lg">
        Delete Button
      </Button>
    </>
  );
}

export default App;

