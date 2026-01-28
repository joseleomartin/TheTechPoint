'use client';

import { useEffect } from 'react';

export function Favicon() {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    existingLinks.forEach(link => link.remove());

    // Create new favicon link with timestamp to force refresh
    const timestamp = new Date().getTime();
    
    // Main favicon - 32x32 for better visibility
    const link32 = document.createElement('link');
    link32.rel = 'icon';
    link32.type = 'image/png';
    link32.sizes = '32x32';
    link32.href = `/Fondo transparente.png?t=${timestamp}`;
    document.head.appendChild(link32);

    // 64x64 version for high DPI displays
    const link64 = document.createElement('link');
    link64.rel = 'icon';
    link64.type = 'image/png';
    link64.sizes = '64x64';
    link64.href = `/Fondo transparente.png?t=${timestamp}`;
    document.head.appendChild(link64);

    // 96x96 version
    const link96 = document.createElement('link');
    link96.rel = 'icon';
    link96.type = 'image/png';
    link96.sizes = '96x96';
    link96.href = `/Fondo transparente.png?t=${timestamp}`;
    document.head.appendChild(link96);

    // 128x128 version for better quality
    const link128 = document.createElement('link');
    link128.rel = 'icon';
    link128.type = 'image/png';
    link128.sizes = '128x128';
    link128.href = `/Fondo transparente.png?t=${timestamp}`;
    document.head.appendChild(link128);

    // 192x192 version for high resolution
    const link192 = document.createElement('link');
    link192.rel = 'icon';
    link192.type = 'image/png';
    link192.sizes = '192x192';
    link192.href = `/Fondo transparente.png?t=${timestamp}`;
    document.head.appendChild(link192);

    // Default favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = `/Fondo transparente.png?t=${timestamp}`;
    document.head.appendChild(link);

    // Shortcut icon
    const shortcut = document.createElement('link');
    shortcut.rel = 'shortcut icon';
    shortcut.type = 'image/png';
    shortcut.href = `/Fondo transparente.png?t=${timestamp}`;
    document.head.appendChild(shortcut);

    // Apple touch icon - larger for better visibility
    const apple = document.createElement('link');
    apple.rel = 'apple-touch-icon';
    apple.sizes = '180x180';
    apple.href = `/Fondo transparente.png?t=${timestamp}`;
    document.head.appendChild(apple);
  }, []);

  return null;
}
