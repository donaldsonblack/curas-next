'use client'

import type { ReactNode } from "react";
import { AuthProvider } from "react-oidc-context";


const cognitoAuthConfig = {
	authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY,
	client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
  redirect_uri: process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI,
  response_type: process.env.NEXT_PUBLIC_COGNITO_RESPONSE_TYPE,
  scope: process.env.NEXT_PUBLIC_COGNITO_SCOPE,
};

interface AuthProviderProps {
  children: ReactNode;
}

export default function Auth({ children }: AuthProviderProps) {
  if (
    !cognitoAuthConfig.authority ||
    !cognitoAuthConfig.client_id ||
    !cognitoAuthConfig.redirect_uri
  ) {
    console.error("Missing OIDC config:", cognitoAuthConfig);
    return <div>Missing OIDC config.</div>;
  }

  return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>;
}
