import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="http://266102459040-4djfu9fn7q08vmt8fkqcoq6c41lgofd7.apps.googleusercontent.com/">
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Erro ao fazer login');
        }}
        scope="profile email"
        prompt="select_account"
      />
    </GoogleOAuthProvider>
  );
}

export default App;
