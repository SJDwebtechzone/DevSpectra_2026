import { getAuthToken } from './auth';

export const API_BASE_URL =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) ||
  'http://localhost:5000';

export function getFullApiUrl(endpoint: string): string {
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    return endpoint;
  }
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL.replace(/\/+$/, '')}${cleanEndpoint}`;
}

export function getAuthHeaders(contentType: boolean = true): HeadersInit {
  const token = getAuthToken();
  const headers: Record<string, string> = {};

  if (contentType) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

export async function apiFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const url = getFullApiUrl(endpoint);
  const token = getAuthToken();

  const headers = new Headers(options.headers || {});
  
  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  if (!headers.has('Content-Type') && options.body && typeof options.body === 'string') {
    headers.set('Content-Type', 'application/json');
  }

  return fetch(url, {
    ...options,
    headers,
  });
}

export async function apiGet<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await apiFetch(endpoint, {
    method: 'GET',
    ...options,
  });

  if (!res.ok) {
    let errorMsg = `HTTP Error ${res.status}: ${res.statusText}`;
    try {
      const errJson = await res.json();
      errorMsg = errJson.message || errorMsg;
    } catch {
      // no JSON body
    }
    throw new Error(errorMsg);
  }

  return res.json();
}

export async function apiPost<T = any>(endpoint: string, body?: any, options: RequestInit = {}): Promise<T> {
  const res = await apiFetch(endpoint, {
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (!res.ok) {
    let errorMsg = `HTTP Error ${res.status}: ${res.statusText}`;
    try {
      const errJson = await res.json();
      errorMsg = errJson.message || errorMsg;
    } catch {
      // no JSON body
    }
    throw new Error(errorMsg);
  }

  return res.json();
}

export async function apiPatch<T = any>(endpoint: string, body?: any, options: RequestInit = {}): Promise<T> {
  const res = await apiFetch(endpoint, {
    method: 'PATCH',
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (!res.ok) {
    let errorMsg = `HTTP Error ${res.status}: ${res.statusText}`;
    try {
      const errJson = await res.json();
      errorMsg = errJson.message || errorMsg;
    } catch {
      // no JSON body
    }
    throw new Error(errorMsg);
  }

  return res.json();
}

export async function apiDelete<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await apiFetch(endpoint, {
    method: 'DELETE',
    ...options,
  });

  if (!res.ok) {
    let errorMsg = `HTTP Error ${res.status}: ${res.statusText}`;
    try {
      const errJson = await res.json();
      errorMsg = errJson.message || errorMsg;
    } catch {
      // no JSON body
    }
    throw new Error(errorMsg);
  }

  return res.json();
}
