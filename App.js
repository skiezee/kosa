import Nav from './navigation/navigate';
import AuthProvider from './screen/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Nav/>    
    </AuthProvider>
  );
}


