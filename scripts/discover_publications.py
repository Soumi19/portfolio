#!/usr/bin/env python3
"""Collect possible new publications, not verified authorship. Human approval required."""
import json,urllib.parse,urllib.request,xml.etree.ElementTree as ET, pathlib,datetime
root=pathlib.Path(__file__).resolve().parents[1]
query='"Soumi Ganguly" (article OR research OR published)'
url='https://news.google.com/rss/search?q='+urllib.parse.quote(query)+'&hl=en-IN&gl=IN&ceid=IN:en'
try:
 req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 (publication-discovery; contact via portfolio)'})
 with urllib.request.urlopen(req,timeout=25) as response: data=response.read()
 doc=ET.fromstring(data)
except Exception as e:
 print('Discovery temporarily unavailable:',e);raise SystemExit(0)
output=root/'publication-candidates.json'
try:existing=json.loads(output.read_text())
except (FileNotFoundError,ValueError):existing=[]
seen={x.get('url') for x in existing}
for item in doc.findall('.//item'):
 title=(item.findtext('title') or '').strip();link=(item.findtext('link') or '').strip()
 if not title or not link or link in seen:continue
 existing.append({'title':title,'url':link,'publisher':item.findtext('source') or '', 'date':item.findtext('pubDate') or '', 'status':'NEEDS_AUTHOR_VERIFICATION'})
 seen.add(link)
output.write_text(json.dumps(existing[-150:],ensure_ascii=False,indent=2)+'\n')
print('Potential publication candidates:',len(existing))
