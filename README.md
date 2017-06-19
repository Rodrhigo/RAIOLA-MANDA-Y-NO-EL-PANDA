# Raiola Manda Y No El Panda

El Script del juego se encuentra en la carpeta "script" con el nombre "raiola-manda-y-no-el-panda.js" y es un juego hecho en HTML5 que ahora conecta la tabla de posiciones con una base de datos remota.

![alt text](http://raiolapanda.com/wp-content/uploads/2017/06/panda-google-277x300.png)

Pueden probar un ejemplo del juego ejecutando "example.html" desde
```
https://cdn.rawgit.com/Rodrhigo/RAIOLA-MANDA-Y-NO-EL-PANDA/963458a0/example.html
```

Se envia y solicita el Score de la tabla de posiciones en formato JSON por lo que todos pueden colocar su nickname o website y se vera en todos los sitios que utilicen el juego. Se extraen las posiciones desde la siguiente dirección
```
https://autouploader.net/score.php
```

Si lo deseas descargar tienes que darle a la opción "Clone or Download" y luego le dan a "Download Zip" y para descomprimir solo necesitan alguna aplicación como Winrar y luego puedes ejecutar "example.html" para probar(si lo ejecutas localmente y no en un servidor no se reproducira el sonido y saldrá una advertencia).

# Script del Juego
La opción más fácil es por medio de un iframe hacia el repositorio, pueden usar RawGit obtener una copia del estado actual de repositorio y pueden hacer una incrustación simplemente pegando este código en su web.
```
<iframe id="raiola-manda-y-no-el-panda-juego" src="https://cdn.rawgit.com/Rodrhigo/RAIOLA-MANDA-Y-NO-EL-PANDA/5ff54ea3/example.html" width="100%" height="500" frameborder="0" scrolling="no"></iframe>
```

La segunda opción y más difícil es cargar subir el script a tu web y para cargarlo debes pegar este código en la posición en donde quieras que aparezca.
```
<div id="raiola-manda-no-el-panda-script" style="position:relative;float:left;width:650px;height:500px;">
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
//Por lo que deberas crear la carpeta y colocar la carpeta script ahí
```

Mientras que si tu URL no termina en slash 
```
http://example.com/raiola-manda-y-no-el-panda
//Las texturas buscan la carpeta "script" en
http://example.com/script/
```

**Puedes usar el Script libremente** pero dejo en claro que *No soy dueño de los recursos usados en este juego*

### [Descargar Raiola Manda y No El Panda - Script Juego](https://autouploader.net/raiola-manda-y-no-el-panda/)


