import React from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import { useState } from 'react';
import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('title');
  const [subtitle, setSubtitle] = useState('subtitle');
  const [font, setFont] = useState('architect');
  const [align, setAlign] = useState('center');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} align={align} />
      <Editor setTitle={setTitle} setSubtitle={setSubtitle} setFont={setFont} setAlign={setAlign} />
    </main>
  );
}
