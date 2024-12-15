import { StatusBar } from 'expo-status-bar';
import Profile from '@/app/Profile';
import "@/styles/global.css"
import React from 'react';

export default function App() {
  return (
    <>
      <Profile />
      <StatusBar style='light'/>
    </>
  );
}