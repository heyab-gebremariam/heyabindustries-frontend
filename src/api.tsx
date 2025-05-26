import type { ProjectsResponse } from './types';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchProjects = async (): Promise<ProjectsResponse> => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}; 