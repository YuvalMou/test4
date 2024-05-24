{\rtf1\ansi\ansicpg1252\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red27\green31\blue34;\red255\green255\blue255;\red0\green0\blue0;
\red6\green33\blue79;\red203\green35\blue57;\red14\green110\blue109;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c14118\c16078\c18039;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c0\c0;
\cssrgb\c1176\c18431\c38431;\cssrgb\c84314\c22745\c28627;\cssrgb\c0\c50196\c50196;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 document\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'DOMContentLoaded'\cf2 \strokec4 ,\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  toggleButton \strokec4 =\strokec2  document\strokec4 .\strokec2 querySelector\strokec4 (\cf5 \strokec5 '[data-collapse-toggle="mobile-menu"]'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  menu \strokec4 =\strokec2  document\strokec4 .\strokec2 querySelector\strokec4 (\cf5 \strokec5 '#mobile-menu'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3     toggleButton\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'click'\cf2 \strokec4 ,\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         \cf6 \strokec6 if\cf2 \strokec2  \strokec4 (\strokec2 menu\strokec4 .\strokec2 classList\strokec4 .\strokec2 contains\strokec4 (\cf5 \strokec5 'hidden'\cf2 \strokec4 ))\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3             menu\strokec4 .\strokec2 classList\strokec4 .\strokec2 remove\strokec4 (\cf5 \strokec5 'hidden'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3         \strokec4 \}\strokec2  \cf6 \strokec6 else\cf2 \strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3             menu\strokec4 .\strokec2 classList\strokec4 .\strokec2 add\strokec4 (\cf5 \strokec5 'hidden'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3         \strokec4 \}\cb1 \strokec2 \
\cb3     \strokec4 \});\cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  stopwatch \strokec4 =\strokec2  document\strokec4 .\strokec2 getElementById\strokec4 (\cf5 \strokec5 'stopwatch'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  startSetButton \strokec4 =\strokec2  document\strokec4 .\strokec2 getElementById\strokec4 (\cf5 \strokec5 'start-set-btn'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3     \cf6 \strokec6 let\cf2 \strokec2  startTime\strokec4 ;\cb1 \strokec2 \
\cb3     \cf6 \strokec6 let\cf2 \strokec2  interval\strokec4 ;\cb1 \strokec2 \
\cb3     startSetButton\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'click'\cf2 \strokec4 ,\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         startTime \strokec4 =\strokec2  \cf7 \strokec7 Date\cf2 \strokec4 .\strokec2 now\strokec4 ();\cb1 \strokec2 \
\cb3         \cf6 \strokec6 if\cf2 \strokec2  \strokec4 (\strokec2 interval\strokec4 )\strokec2  clearInterval\strokec4 (\strokec2 interval\strokec4 );\cb1 \strokec2 \
\cb3         interval \strokec4 =\strokec2  setInterval\strokec4 (()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  elapsedTime \strokec4 =\strokec2  \cf7 \strokec7 Date\cf2 \strokec4 .\strokec2 now\strokec4 ()\strokec2  \strokec4 -\strokec2  startTime\strokec4 ;\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  hours \strokec4 =\strokec2  \cf7 \strokec7 Math\cf2 \strokec4 .\strokec2 floor\strokec4 (\strokec2 elapsedTime \strokec4 /\strokec2  \cf8 \strokec8 3600000\cf2 \strokec4 );\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  minutes \strokec4 =\strokec2  \cf7 \strokec7 Math\cf2 \strokec4 .\strokec2 floor\strokec4 ((\strokec2 elapsedTime \strokec4 %\strokec2  \cf8 \strokec8 3600000\cf2 \strokec4 )\strokec2  \strokec4 /\strokec2  \cf8 \strokec8 60000\cf2 \strokec4 );\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  seconds \strokec4 =\strokec2  \cf7 \strokec7 Math\cf2 \strokec4 .\strokec2 floor\strokec4 ((\strokec2 elapsedTime \strokec4 %\strokec2  \cf8 \strokec8 60000\cf2 \strokec4 )\strokec2  \strokec4 /\strokec2  \cf8 \strokec8 1000\cf2 \strokec4 );\cb1 \strokec2 \
\cb3             stopwatch\strokec4 .\strokec2 textContent \strokec4 =\strokec2  \cf5 \strokec5 `\cf2 \strokec4 $\{\strokec2 hours\strokec4 .\strokec2 toString\strokec4 ().\strokec2 padStart\strokec4 (\cf8 \strokec8 2\cf2 \strokec4 ,\strokec2  \cf5 \strokec5 '0'\cf2 \strokec4 )\}\cf5 \strokec5 :\cf2 \strokec4 $\{\strokec2 minutes\strokec4 .\strokec2 toString\strokec4 ().\strokec2 padStart\strokec4 (\cf8 \strokec8 2\cf2 \strokec4 ,\strokec2  \cf5 \strokec5 '0'\cf2 \strokec4 )\}\cf5 \strokec5 :\cf2 \strokec4 $\{\strokec2 seconds\strokec4 .\strokec2 toString\strokec4 ().\strokec2 padStart\strokec4 (\cf8 \strokec8 2\cf2 \strokec4 ,\strokec2  \cf5 \strokec5 '0'\cf2 \strokec4 )\}\cf5 \strokec5 `\cf2 \strokec4 ;\cb1 \strokec2 \
\cb3         \strokec4 \},\strokec2  \cf8 \strokec8 1000\cf2 \strokec4 );\cb1 \strokec2 \
\cb3     \strokec4 \});\cb1 \strokec2 \
\cb3     document\strokec4 .\strokec2 querySelectorAll\strokec4 (\cf5 \strokec5 '.start-time-btn'\cf2 \strokec4 ).\strokec2 forEach\strokec4 ((\strokec2 btn\strokec4 )\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         btn\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'click'\cf2 \strokec4 ,\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  row \strokec4 =\strokec2  btn\strokec4 .\strokec2 closest\strokec4 (\cf5 \strokec5 'tr'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3             row\strokec4 .\strokec2 cells\strokec4 [\cf8 \strokec8 0\cf2 \strokec4 ].\strokec2 textContent \strokec4 =\strokec2  stopwatch\strokec4 .\strokec2 textContent\strokec4 ;\cb1 \strokec2 \
\cb3         \strokec4 \});\cb1 \strokec2 \
\cb3     \strokec4 \});\cb1 \strokec2 \
\cb3     document\strokec4 .\strokec2 querySelectorAll\strokec4 (\cf5 \strokec5 '.end-time-btn'\cf2 \strokec4 ).\strokec2 forEach\strokec4 ((\strokec2 btn\strokec4 )\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         btn\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'click'\cf2 \strokec4 ,\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  row \strokec4 =\strokec2  btn\strokec4 .\strokec2 closest\strokec4 (\cf5 \strokec5 'tr'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3             row\strokec4 .\strokec2 cells\strokec4 [\cf8 \strokec8 1\cf2 \strokec4 ].\strokec2 textContent \strokec4 =\strokec2  stopwatch\strokec4 .\strokec2 textContent\strokec4 ;\cb1 \strokec2 \
\cb3         \strokec4 \});\cb1 \strokec2 \
\cb3     \strokec4 \});\cb1 \strokec2 \
\cb3     document\strokec4 .\strokec2 getElementById\strokec4 (\cf5 \strokec5 'export-btn'\cf2 \strokec4 ).\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'click'\cf2 \strokec4 ,\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         \cf6 \strokec6 let\cf2 \strokec2  table \strokec4 =\strokec2  document\strokec4 .\strokec2 querySelector\strokec4 (\cf5 \strokec5 'table'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3         \cf6 \strokec6 let\cf2 \strokec2  rows \strokec4 =\strokec2  \cf7 \strokec7 Array\cf2 \strokec4 .\cf6 \strokec6 from\cf2 \strokec4 (\strokec2 table\strokec4 .\strokec2 rows\strokec4 ).\strokec2 filter\strokec4 (\strokec2 row \strokec4 =>\strokec2  row\strokec4 .\strokec2 cells\strokec4 [\cf8 \strokec8 0\cf2 \strokec4 ].\strokec2 textContent \strokec4 !==\strokec2  \cf5 \strokec5 '\uc0\u1492 \u1511 \u1508 \u1488 \u1492 '\cf2 \strokec4 );\cb1 \strokec2 \
\cb3         \cf6 \strokec6 let\cf2 \strokec2  clientName \strokec4 =\strokec2  document\strokec4 .\strokec2 getElementById\strokec4 (\cf5 \strokec5 'client-name'\cf2 \strokec4 ).\strokec2 value\strokec4 ;\cb1 \strokec2 \
\cb3         \cf6 \strokec6 if\cf2 \strokec2  \strokec4 (!\strokec2 clientName\strokec4 )\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3             alert\strokec4 (\cf5 \strokec5 "Please enter the client's name."\cf2 \strokec4 );\cb1 \strokec2 \
\cb3             \cf6 \strokec6 return\cf2 \strokec4 ;\cb1 \strokec2 \
\cb3         \strokec4 \}\cb1 \strokec2 \
\cb3         \cf6 \strokec6 let\cf2 \strokec2  csvContent \strokec4 =\strokec2  rows\strokec4 .\strokec2 map\strokec4 (\strokec2 row \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  cells \strokec4 =\strokec2  \cf7 \strokec7 Array\cf2 \strokec4 .\cf6 \strokec6 from\cf2 \strokec4 (\strokec2 row\strokec4 .\strokec2 cells\strokec4 );\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  actionSelect \strokec4 =\strokec2  cells\strokec4 [\cf8 \strokec8 3\cf2 \strokec4 ].\strokec2 querySelector\strokec4 (\cf5 \strokec5 'select'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  action \strokec4 =\strokec2  actionSelect \strokec4 ?\strokec2  actionSelect\strokec4 .\strokec2 value \strokec4 :\strokec2  \cf5 \strokec5 ''\cf2 \strokec4 ;\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  notesInput \strokec4 =\strokec2  cells\strokec4 [\cf8 \strokec8 4\cf2 \strokec4 ].\strokec2 querySelector\strokec4 (\cf5 \strokec5 'input'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3             \cf6 \strokec6 let\cf2 \strokec2  notes \strokec4 =\strokec2  notesInput \strokec4 ?\strokec2  notesInput\strokec4 .\strokec2 value \strokec4 :\strokec2  \cf5 \strokec5 ''\cf2 \strokec4 ;\cb1 \strokec2 \
\cb3             \cf6 \strokec6 return\cf2 \strokec2  \strokec4 [\strokec2 clientName\strokec4 ,\strokec2  cells\strokec4 [\cf8 \strokec8 0\cf2 \strokec4 ].\strokec2 textContent\strokec4 ,\strokec2  cells\strokec4 [\cf8 \strokec8 1\cf2 \strokec4 ].\strokec2 textContent\strokec4 ,\strokec2  cells\strokec4 [\cf8 \strokec8 2\cf2 \strokec4 ].\strokec2 textContent\strokec4 ,\strokec2  action\strokec4 ,\strokec2  notes\strokec4 ].\strokec2 join\strokec4 (\cf5 \strokec5 ','\cf2 \strokec4 );\cb1 \strokec2 \
\cb3         \strokec4 \}).\strokec2 join\strokec4 (\cf5 \strokec5 '\\n'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3         \cf6 \strokec6 let\cf2 \strokec2  blob \strokec4 =\strokec2  \cf6 \strokec6 new\cf2 \strokec2  \cf7 \strokec7 Blob\cf2 \strokec4 ([\strokec2 csvContent\strokec4 ],\strokec2  \strokec4 \{\strokec2  type\strokec4 :\strokec2  \cf5 \strokec5 'text/csv;charset=utf-8;'\cf2 \strokec2  \strokec4 \});\cb1 \strokec2 \
\cb3         \cf6 \strokec6 let\cf2 \strokec2  link \strokec4 =\strokec2  document\strokec4 .\strokec2 createElement\strokec4 (\cf5 \strokec5 'a'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3         link\strokec4 .\strokec2 href \strokec4 =\strokec2  \cf7 \strokec7 URL\cf2 \strokec4 .\strokec2 createObjectURL\strokec4 (\strokec2 blob\strokec4 );\cb1 \strokec2 \
\cb3         link\strokec4 .\strokec2 download \strokec4 =\strokec2  \cf5 \strokec5 `\cf2 \strokec4 $\{\strokec2 clientName\strokec4 \}\cf5 \strokec5 _video_tasks.csv`\cf2 \strokec4 ;\cb1 \strokec2 \
\cb3         link\strokec4 .\strokec2 click\strokec4 ();\cb1 \strokec2 \
\cb3     \strokec4 \});\cb1 \strokec2 \
\cb3     \strokec4 \});\cb1 \strokec2 \
\cb3     window\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'beforeunload'\cf2 \strokec4 ,\strokec2  \strokec4 (\strokec2 event\strokec4 )\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         event\strokec4 .\strokec2 preventDefault\strokec4 ();\cb1 \strokec2 \
\cb3         event\strokec4 .\strokec2 returnValue \strokec4 =\strokec2  \cf5 \strokec5 ''\cf2 \strokec4 ;\cb1 \strokec2 \
\cb3     \strokec4 \});\cb1 \strokec2 \
\cb3     document\strokec4 .\strokec2 getElementById\strokec4 (\cf5 \strokec5 'reset-btn'\cf2 \strokec4 ).\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'click'\cf2 \strokec4 ,\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         location\strokec4 .\strokec2 reload\strokec4 ();\cb1 \strokec2 \
\cb3     \strokec4 \});\cb1 \strokec2 \
}