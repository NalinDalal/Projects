// src/components/Auth.tsx
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

const Auth: React.FC = () => {
  const [signInWithGoogle, userCredential, loading, error] =
    useSignInWithGoogle(auth);
  const { user } = userCredential || {};

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <p>Welcome, {user.displayName}</p>
      ) : (
        <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Auth;
