import React from 'react';

export default function Header({title, name, children}) {
  return (
    <header>
      <h1>{title}</h1>
      
      <h2>{name}</h2>
      {children}
    </header>
  );
}