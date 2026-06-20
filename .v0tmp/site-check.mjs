import fs from 'fs';

const BASE_URL = 'http://localhost:3000';
const PAGES = [
  '/',
  '/about',
  '/products',
  '/certifications',
  '/blogs',
  '/contact'
];

async function checkPage(path) {
  try {
    const response = await fetch(BASE_URL + path);
    return {
      path,
      status: response.status,
      ok: response.ok,
      error: response.ok ? null : `HTTP ${response.status}`
    };
  } catch (err) {
    return {
      path,
      status: null,
      ok: false,
      error: err.message
    };
  }
}

async function checkLinks() {
  console.log('Starting site check...\n');
  console.log('=== PAGE STATUS ===');
  
  const results = [];
  for (const page of PAGES) {
    const result = await checkPage(page);
    results.push(result);
    const status = result.ok ? '✓' : '✗';
    console.log(`${status} ${page} - ${result.status || 'Failed'} ${result.error ? `(${result.error})` : ''}`);
  }
  
  const allOk = results.every(r => r.ok);
  console.log(`\n${allOk ? 'All pages accessible' : 'Some pages have errors'}`);
  
  return results;
}

checkLinks().catch(console.error);
