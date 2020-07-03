# Tu clima
*Alumna: Marianela De Martino*

## La app del clima que no solo muestra tu país si no que también te dice la temperatura de la zona y lo lleva a nivel fisico con una led para hacerlo mas visible

### Target

Esta dirigido a todas las personas que les interese tener una ayuda visual con respecto al clima.


### Objetivo

La idea es poder desarrollar una aplicación que 


### Benchmark

Claro que existen las aplicaciónes y páginas que muestran la temperatuta de tu ubicación actual como: www.weather.com / www.accuweather.com y muchas otras más pero el distintivo de este proyecto es la integración de un elemento visual externo a la pantalla como una led que cambia de color según si la temperatura es fríao cálida para ayudar en caso de que la gente este apurada y no quiera fijarse en el celular por el clima directamente mira la luz antes de salir de la casa.





### Diseño


La interfaz sería bastante sencilla, que muestre en que país me encuento, mis coordenadas y segun eso, mi temperatura. Se busca que para el usuario sea algo bastante fácil de entender y que no necesite muchas acciones de este, aunque una idea en un futuro sería que pueda buscar la temperatura del lugar que desee.


### Implementación 

La información se traerá a través de dos API:
- de geolocalización
- de Clima: https://api.openweathermap.org

la de geolocalización se utiliza para poder tener los datos de donde se encuentra el usuario ubicado en tiempo real mientras que la de clima utiliza los datos de la primer API para usar en la URL la longitud y latitud y asia devolver en pantalla el país del usuario y el clima.
