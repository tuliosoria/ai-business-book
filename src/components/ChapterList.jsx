import React from 'react';

export default function ChapterList({ chapters, selectedIndex, onSelect }) {
  return (
    <aside style={{width: 260, borderRight: '1px solid #e6e6e6', padding: 12, boxSizing: 'border-box'}}>
      <h3 style={{marginTop:0}}>Chapters</h3>
      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
        {chapters.map((c, i) => (
          <li key={c.id} style={{marginBottom:8}}>
            <button
              onClick={() => onSelect(i)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '8px 10px',
                borderRadius: 6,
                border: selectedIndex === i ? '2px solid #2563eb' : '1px solid #e6e6e6',
                background: selectedIndex === i ? '#eef2ff' : '#fff'
              }}
            >
              <strong style={{display:'block'}}>{c.title}</strong>
              <small style={{color:'#666'}}>{c.content.slice(0,80).replace(/\n/g,' ')}{c.content.length>80? '…':''}</small>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
