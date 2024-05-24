{\rtf1\ansi\ansicpg1252\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red27\green31\blue34;\red255\green255\blue255;\red0\green0\blue0;
\red6\green33\blue79;\red203\green35\blue57;\red87\green96\blue106;\red14\green110\blue109;\red19\green118\blue70;
}
{\*\expandedcolortbl;;\cssrgb\c14118\c16078\c18039;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c0\c0;
\cssrgb\c1176\c18431\c38431;\cssrgb\c84314\c22745\c28627;\cssrgb\c41569\c45098\c49020;\cssrgb\c0\c50196\c50196;\cssrgb\c3529\c52549\c34510;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 document\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'DOMContentLoaded'\cf2 \strokec4 ,\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  table \strokec4 =\strokec2  document\strokec4 .\strokec2 querySelector\strokec4 (\cf5 \strokec5 'table'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  clientNameInput \strokec4 =\strokec2  document\strokec4 .\strokec2 getElementById\strokec4 (\cf5 \strokec5 'client-name'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  resetButton \strokec4 =\strokec2  document\strokec4 .\strokec2 getElementById\strokec4 (\cf5 \strokec5 'reset-btn'\cf2 \strokec4 );\cb1 \strokec2 \
\
\cb3     \cf7 \strokec7 // Load saved data from localStorage\cf2 \cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  savedData \strokec4 =\strokec2  \cf8 \strokec8 JSON\cf2 \strokec4 .\strokec2 parse\strokec4 (\strokec2 localStorage\strokec4 .\strokec2 getItem\strokec4 (\cf5 \strokec5 'tableData'\cf2 \strokec4 ));\cb1 \strokec2 \
\cb3     \cf6 \strokec6 if\cf2 \strokec2  \strokec4 (\strokec2 savedData\strokec4 )\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         clientNameInput\strokec4 .\strokec2 value \strokec4 =\strokec2  savedData\strokec4 .\strokec2 clientName\strokec4 ;\cb1 \strokec2 \
\cb3         savedData\strokec4 .\strokec2 rows\strokec4 .\strokec2 forEach\strokec4 ((\strokec2 row\strokec4 ,\strokec2  index\strokec4 )\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3             \cf6 \strokec6 const\cf2 \strokec2  tableRow \strokec4 =\strokec2  table\strokec4 .\strokec2 rows\strokec4 [\strokec2 index \strokec4 +\strokec2  \cf9 \strokec9 1\cf2 \strokec4 ];\cb1 \strokec2 \
\cb3             tableRow\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 0\cf2 \strokec4 ].\strokec2 textContent \strokec4 =\strokec2  row\strokec4 .\strokec2 startTime\strokec4 ;\cb1 \strokec2 \
\cb3             tableRow\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 1\cf2 \strokec4 ].\strokec2 textContent \strokec4 =\strokec2  row\strokec4 .\strokec2 endTime\strokec4 ;\cb1 \strokec2 \
\cb3             tableRow\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 2\cf2 \strokec4 ].\strokec2 textContent \strokec4 =\strokec2  row\strokec4 .\strokec2 videoNumber\strokec4 ;\cb1 \strokec2 \
\cb3             tableRow\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 3\cf2 \strokec4 ].\strokec2 querySelector\strokec4 (\cf5 \strokec5 'select'\cf2 \strokec4 ).\strokec2 value \strokec4 =\strokec2  row\strokec4 .\strokec2 action\strokec4 ;\cb1 \strokec2 \
\cb3             tableRow\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 4\cf2 \strokec4 ].\strokec2 querySelector\strokec4 (\cf5 \strokec5 'input'\cf2 \strokec4 ).\strokec2 value \strokec4 =\strokec2  row\strokec4 .\strokec2 notes\strokec4 ;\cb1 \strokec2 \
\cb3         \strokec4 \});\cb1 \strokec2 \
\cb3     \strokec4 \}\cb1 \strokec2 \
\
\cb3     \cf7 \strokec7 // Save data to localStorage\cf2 \cb1 \strokec2 \
\cb3     \cf6 \strokec6 const\cf2 \strokec2  saveData \strokec4 =\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         \cf6 \strokec6 const\cf2 \strokec2  rows \strokec4 =\strokec2  \cf8 \strokec8 Array\cf2 \strokec4 .\cf6 \strokec6 from\cf2 \strokec4 (\strokec2 table\strokec4 .\strokec2 rows\strokec4 ).\strokec2 slice\strokec4 (\cf9 \strokec9 1\cf2 \strokec4 ).\strokec2 map\strokec4 (\strokec2 row \strokec4 =>\strokec2  \strokec4 (\{\cb1 \strokec2 \
\cb3             startTime\strokec4 :\strokec2  row\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 0\cf2 \strokec4 ].\strokec2 textContent\strokec4 ,\cb1 \strokec2 \
\cb3             endTime\strokec4 :\strokec2  row\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 1\cf2 \strokec4 ].\strokec2 textContent\strokec4 ,\cb1 \strokec2 \
\cb3             videoNumber\strokec4 :\strokec2  row\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 2\cf2 \strokec4 ].\strokec2 textContent\strokec4 ,\cb1 \strokec2 \
\cb3             action\strokec4 :\strokec2  row\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 3\cf2 \strokec4 ].\strokec2 querySelector\strokec4 (\cf5 \strokec5 'select'\cf2 \strokec4 ).\strokec2 value\strokec4 ,\cb1 \strokec2 \
\cb3             notes\strokec4 :\strokec2  row\strokec4 .\strokec2 cells\strokec4 [\cf9 \strokec9 4\cf2 \strokec4 ].\strokec2 querySelector\strokec4 (\cf5 \strokec5 'input'\cf2 \strokec4 ).\strokec2 value\cb1 \
\cb3         \strokec4 \}));\cb1 \strokec2 \
\cb3         \cf6 \strokec6 const\cf2 \strokec2  data \strokec4 =\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3             clientName\strokec4 :\strokec2  clientNameInput\strokec4 .\strokec2 value\strokec4 ,\cb1 \strokec2 \
\cb3             rows\cb1 \
\cb3         \strokec4 \};\cb1 \strokec2 \
\cb3         localStorage\strokec4 .\strokec2 setItem\strokec4 (\cf5 \strokec5 'tableData'\cf2 \strokec4 ,\strokec2  \cf8 \strokec8 JSON\cf2 \strokec4 .\strokec2 stringify\strokec4 (\strokec2 data\strokec4 ));\cb1 \strokec2 \
\cb3     \strokec4 \};\cb1 \strokec2 \
\
\cb3     \cf7 \strokec7 // Save data on input change\cf2 \cb1 \strokec2 \
\cb3     clientNameInput\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'input'\cf2 \strokec4 ,\strokec2  saveData\strokec4 );\cb1 \strokec2 \
\cb3     table\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'input'\cf2 \strokec4 ,\strokec2  saveData\strokec4 );\cb1 \strokec2 \
\
\cb3     \cf7 \strokec7 // Clear data on reset\cf2 \cb1 \strokec2 \
\cb3     resetButton\strokec4 .\strokec2 addEventListener\strokec4 (\cf5 \strokec5 'click'\cf2 \strokec4 ,\strokec2  \strokec4 ()\strokec2  \strokec4 =>\strokec2  \strokec4 \{\cb1 \strokec2 \
\cb3         localStorage\strokec4 .\strokec2 removeItem\strokec4 (\cf5 \strokec5 'tableData'\cf2 \strokec4 );\cb1 \strokec2 \
\cb3         location\strokec4 .\strokec2 reload\strokec4 ();\cb1 \strokec2 \
\cb3     \strokec4 \});\cb1 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec4 \});\cb1 \strokec2 \
}