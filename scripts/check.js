const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const required = [
  '다올투자증권',
  'MCP',
  '삼성전자',
  '005930',
  '346,500원',
  'target="_blank"',
  'https://www.daolsecurities.com/index.html',
  'korean-stock-mcp-builder',
  'yfinance',
  'Python MCP SDK',
  'get_quote',
  'search_symbol',
  'get_history',
  '.KS',
  '.KQ',
  '15~20분 지연',
  'uv run mcp dev server.py',
  '.mcp.json'
];
for (const s of required) {
  if (!html.includes(s)) {
    console.error('missing:', s);
    process.exit(1);
  }
}
if (!/<html lang="ko">/.test(html)) process.exit(1);
console.log('HTML content checks passed:', required.length);
