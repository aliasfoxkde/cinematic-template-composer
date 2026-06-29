// src/main.ts — entry point
import { mountApp } from './App.js';

const root = document.getElementById('app');
if (!root) throw new Error('#app element not found');
mountApp(root);
