{\rtf1\ansi\ansicpg1252\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red203\green35\blue57;\red255\green255\blue255;\red27\green31\blue34;
\red0\green0\blue0;\red87\green96\blue106;\red6\green33\blue79;\red107\green0\blue1;\red19\green118\blue70;
}
{\*\expandedcolortbl;;\cssrgb\c84314\c22745\c28627;\cssrgb\c100000\c100000\c100000;\cssrgb\c14118\c16078\c18039;
\cssrgb\c0\c0\c0;\cssrgb\c41569\c45098\c49020;\cssrgb\c1176\c18431\c38431;\cssrgb\c50196\c0\c0;\cssrgb\c3529\c52549\c34510;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  logging\cb1 \
\cf2 \cb3 \strokec2 from\cf4 \strokec4  flask \cf2 \strokec2 import\cf4 \strokec4  Flask\strokec5 ,\strokec4  render_template\cb1 \
\cf2 \cb3 \strokec2 from\cf4 \strokec4  gunicorn.app.base \cf2 \strokec2 import\cf4 \strokec4  BaseApplication\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 # Setup logging\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3 logging.basicConfig\strokec5 (\strokec4 level=logging.INFO\strokec5 )\cb1 \strokec4 \
\cb3 logger = logging.getLogger\strokec5 (\cf2 \strokec2 __name__\cf4 \strokec5 )\cb1 \strokec4 \
\
\cb3 app = Flask\strokec5 (\cf2 \strokec2 __name__\cf4 \strokec5 ,\strokec4  static_folder=\cf7 \strokec7 'static'\cf4 \strokec5 )\cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 @app\cf4 \strokec4 .route\strokec5 (\cf7 \strokec7 "/"\cf4 \strokec5 )\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 def\cf4 \strokec4  home_route\strokec5 ():\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 return\cf4 \strokec4  render_template\strokec5 (\cf7 \strokec7 "home.html"\cf4 \strokec5 )\cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 @app\cf4 \strokec4 .route\strokec5 (\cf7 \strokec7 "/backup"\cf4 \strokec5 )\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 def\cf4 \strokec4  backup_route\strokec5 ():\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf6 \strokec6 # Implement backup logic to store the table data for 24 hours\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 # TODO: Implement actual backup logic\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf7 \strokec7 "Backup functionality not yet implemented. This feature is under construction."\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 class\cf4 \strokec4  StandaloneApplication\strokec5 (\strokec4 BaseApplication\strokec5 ):\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf2 \strokec2 def\cf4 \strokec4  \cf2 \strokec2 __init__\cf4 \strokec5 (\cf2 \strokec2 self\cf4 \strokec5 ,\strokec4  app\strokec5 ,\strokec4  options=\cf2 \strokec2 None\cf4 \strokec5 ):\cb1 \strokec4 \
\cb3         \cf2 \strokec2 self\cf4 \strokec4 .application = app\cb1 \
\cb3         \cf2 \strokec2 self\cf4 \strokec4 .options = options \cf2 \strokec2 or\cf4 \strokec4  \strokec5 \{\}\cb1 \strokec4 \
\cb3         \cf2 \strokec2 super\cf4 \strokec5 ()\strokec4 .\cf2 \strokec2 __init__\cf4 \strokec5 ()\cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 def\cf4 \strokec4  load_config\strokec5 (\cf2 \strokec2 self\cf4 \strokec5 ):\cb1 \strokec4 \
\cb3         \cf6 \strokec6 # Apply configuration to Gunicorn\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 for\cf4 \strokec4  key\strokec5 ,\strokec4  value \cf2 \strokec2 in\cf4 \strokec4  \cf2 \strokec2 self\cf4 \strokec4 .options.items\strokec5 ():\cb1 \strokec4 \
\cb3             \cf2 \strokec2 if\cf4 \strokec4  key \cf2 \strokec2 in\cf4 \strokec4  \cf2 \strokec2 self\cf4 \strokec4 .cfg.settings \cf2 \strokec2 and\cf4 \strokec4  value \cf2 \strokec2 is\cf4 \strokec4  \cf2 \strokec2 not\cf4 \strokec4  \cf2 \strokec2 None\cf4 \strokec5 :\cb1 \strokec4 \
\cb3                 \cf2 \strokec2 self\cf4 \strokec4 .cfg.\cf2 \strokec2 set\cf4 \strokec5 (\strokec4 key.lower\strokec5 (),\strokec4  value\strokec5 )\cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 def\cf4 \strokec4  load\strokec5 (\cf2 \strokec2 self\cf4 \strokec5 ):\cb1 \strokec4 \
\cb3         \cf2 \strokec2 return\cf4 \strokec4  \cf2 \strokec2 self\cf4 \strokec4 .application\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 if\cf4 \strokec4  \cf2 \strokec2 __name__\cf4 \strokec4  == \cf7 \strokec7 "__main__"\cf4 \strokec5 :\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     options = \strokec5 \{\cb1 \strokec4 \
\cb3         \cf7 \strokec7 "bind"\cf4 \strokec5 :\strokec4  \cf7 \strokec7 "0.0.0.0:8080"\cf4 \strokec5 ,\cb1 \strokec4 \
\cb3         \cf7 \strokec7 "workers"\cf4 \strokec5 :\strokec4  \cf9 \strokec9 4\cf4 \strokec5 ,\cb1 \strokec4 \
\cb3         \cf7 \strokec7 "loglevel"\cf4 \strokec5 :\strokec4  \cf7 \strokec7 "info"\cf4 \strokec5 ,\cb1 \strokec4 \
\cb3         \cf7 \strokec7 "accesslog"\cf4 \strokec5 :\strokec4  \cf7 \strokec7 "-"\cf4 \cb1 \strokec4 \
\cb3     \strokec5 \}\cb1 \strokec4 \
\cb3     StandaloneApplication\strokec5 (\strokec4 app\strokec5 ,\strokec4  options\strokec5 )\strokec4 .run\strokec5 ()\cb1 \strokec4 \
}