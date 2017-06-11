# Raiola Manda Y No El Panda

El Script del juego se encuentra en la carpeta "script" con el nombre "raiola-manda-y-no-el-panda.js" y es un juego hecho en HTML5 que ahora conecta la tabla de posiciones con una base de datos remota.

![alt text](http://raiolapanda.com/wp-content/uploads/2017/06/panda-google-277x300.png)

Se envia y solicita Score de la tabla de posiciones en formato JSON por lo que todos pueden colocar su nickname o website y se vera en todos los sitios que utilicen el juego. Se extraen las posiciones desde la siguiente dirección
```
https://autouploader.net/score.php
```

Pueden probar un ejemplo del juego ejecutando "example.html" desde
```
https://cdn.rawgit.com/Rodrhigo/RAIOLA-MANDA-Y-NO-EL-PANDA/378e72b4/example.html
```

Si lo deseas descargar tienes que darle a la opción "Clone or Download" y luego le dan a "Download Zip" y para descomprimir solo necesitan alguna aplicación como Winrar y luego puedes ejecutar "example.html" para probar(si lo ejecutas localmente y no en un servidor no se reproducira el sonido y saldrá una advertencia).

# Script del Juego
```
<div id="raiola-manda-no-el-panda-script" style="position:relative;float:left;">
<canvas id="canvas" width="650" height="500" style="image-rendering: optimizeSpeed; -webkit-interpolation-mode: nearest-neighbor; -ms-touch-action: none; margin: 0px; padding: 0px; border: 0px;width: 100%; height: 100%;">
<p>Your browser doesn't support HTML5 canvas.</p>
</canvas>
</div>
</div>
<script type="text/javascript" src="script/raiola-manda-y-no-el-panda.js"></script>
```

Cuando se ejecuta el Script deben saber que el navegador buscara las texturas en la carpeta "script" relativos a la posición actual del sitio, por ejemplo:
```
http://example.com/raiola-manda-y-no-el-panda/
//Busca la carpeta "script" en
http://example.com/raiola-manda-y-no-el-panda/script/
```

Mientras que si tu URL no termina en slash 
```
http://example.com/raiola-manda-y-no-el-panda
//Las texturas buscan la carpeta "script" en
http://example.com/script/
```

Saludos y que gane el mejor.


