'use client'
import { useCallback } from "react";
import { useAuth } from "react-oidc-context";

export const useApi = () => {
  const auth = useAuth();
  const authorId = auth.user?.profile.sub;
  
  const apiFetch = useCallback(
    async (url: string, options: RequestInit = {}) => {
      const token = auth.user?.access_token;
      if (!token) {
        throw new Error("Access token not available");
      }
      const res = await fetch(url, {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    },
    [auth.user?.access_token]
  );
  
  return { apiFetch, authorId };
};

export const signoutRedirect = () => {
  if (typeof window === 'undefined') return;
  
  sessionStorage.clear();
  localStorage.clear();
  
  const clientId = "59n0rkhsdagoehhi3kf8q25t1f";
  const logoutUri = process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI;
  
  if (!logoutUri) {
    throw new Error("NEXT_PUBLIC_COGNITO_REDIRECT_URI is not configured");
  }
  
  const customDomain = "https://auth.dblck.com";
  
  window.location.href = `${customDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
    logoutUri
  )}`;
};
