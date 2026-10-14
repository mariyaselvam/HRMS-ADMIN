import { apiClient } from "@/services/api/apiClient";
import type { AxiosRequestConfig } from "axios";

/**
 * Standard HTTP Service wrapper around Axios client.
 * Provides unified HTTP methods (GET, POST, PUT, PATCH, DELETE, DOWNLOAD)
 * matching backend API conventions.
 */
export const baseHttpService = {
  /**
   * Generic GET request
   */
  async get<T>(
    endpoint: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await apiClient.get<T>(endpoint, {
      params,
      ...config,
    });
    return response.data;
  },

  /**
   * Generic POST request
   */
  async post<T>(
    endpoint: string,
    body?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await apiClient.post<T>(endpoint, body, config);
    return response.data;
  },

  /**
   * Generic PUT request
   */
  async put<T>(
    endpoint: string,
    body?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await apiClient.put<T>(endpoint, body, config);
    return response.data;
  },

  /**
   * Generic PATCH request
   */
  async patch<T>(
    endpoint: string,
    body?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await apiClient.patch<T>(endpoint, body, config);
    return response.data;
  },

  /**
   * Generic DELETE request
   */
  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await apiClient.delete<T>(endpoint, config);
    return response.data;
  },

  /**
   * Download binary file/blob (e.g. PDFs, Excel exports)
   */
  async download(
    endpoint: string,
    filename: string,
    params?: Record<string, any>,
  ): Promise<void> {
    const response = await apiClient.get(endpoint, {
      params,
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  },
};
