import axios from 'axios';

const baseURL = 'https://codebydhaval-php-portfolio-cms.000webhostapp.com/';

const api = axios.create({
    baseURL: baseURL,
});

export const fetchEducationData = () => api.get('/api/education', { header: { 'userId': "12" } });
export const fetchProjectsData = () => api.get('./api/projects', { header: { 'user-id': 12 } })
export const fetchSkillsData = () => api.get('/api/skills');

