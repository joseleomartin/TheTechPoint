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
    link32.setAttribute('rel', 'icon');
    link32.setAttribute('type', 'image/png');
    link32.setAttribute('sizes', '32x32');
    link32.setAttribute('href', `/Fondo transparente.png?t=${timestamp}`);
    document.head.appendChild(link32);

    // 64x64 version for high DPI displays
    const link64 = document.createElement('link');
    link64.setAttribute('rel', 'icon');
    link64.setAttribute('type', 'image/png');
    link64.setAttribute('sizes', '64x64');
    link64.setAttribute('href', `/Fondo transparente.png?t=${timestamp}`);
    document.head.appendChild(link64);

    // 96x96 version
    const link96 = document.createElement('link');
    link96.setAttribute('rel', 'icon');
    link96.setAttribute('type', 'image/png');
    link96.setAttribute('sizes', '96x96');
    link96.setAttribute('href', `/Fondo transparente.png?t=${timestamp}`);
    document.head.appendChild(link96);

    // 128x128 version for better quality
    const link128 = document.createElement('link');
    link128.setAttribute('rel', 'icon');
    link128.setAttribute('type', 'image/png');
    link128.setAttribute('sizes', '128x128');
    link128.setAttribute('href', `/Fondo transparente.png?t=${timestamp}`);
    document.head.appendChild(link128);

    // 192x192 version for high resolution
    const link192 = document.createElement('link');
    link192.setAttribute('rel', 'icon');
    link192.setAttribute('type', 'image/png');
    link192.setAttribute('sizes', '192x192');
    link192.setAttribute('href', `/Fondo transparente.png?t=${timestamp}`);
    document.head.appendChild(link192);

    // Default favicon
    const link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    link.setAttribute('type', 'image/png');
    link.setAttribute('href', `/Fondo transparente.png?t=${timestamp}`);
    document.head.appendChild(link);

    // Shortcut icon
    const shortcut = document.createElement('link');
    shortcut.setAttribute('rel', 'shortcut icon');
    shortcut.setAttribute('type', 'image/png');
    shortcut.setAttribute('href', `/Fondo transparente.png?t=${timestamp}`);
    document.head.appendChild(shortcut);

    // Apple touch icon - larger for better visibility
    const apple = document.createElement('link');
    apple.setAttribute('rel', 'apple-touch-icon');
    apple.setAttribute('sizes', '180x180');
    apple.setAttribute('href', `/Fondo transparente.png?t=${timestamp}`);
    document.head.appendChild(apple);
  }, []);

  return null;
}
