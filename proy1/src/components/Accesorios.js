import React from 'react';
import '../Acce.css'; 
export default function Accesorios() {
  return (
    <div className='bodyAccesorios'>
      {/* effect-1 */}
      <div className="crd crd--effect-1">
        <div className="crd-img" style={{backgroundImage: 'url("https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/06/10/iphone-cargando.jpeg")'}}></div>
        <div className="crd-info">
          <h2 className="crd-heading">Cargadores</h2>
          <p className="crd-text">Don Baraton</p>
        </div>
      </div>

      {/* effect-2 */}
      <div className="crd crd--effect-2">
  <div className="crd-img" style={{backgroundImage: 'url("https://mansacarcasa.cl/cdn/shop/files/carcasas_copia.jpg?v=1671055375&width=1500")'}}></div>
  <div className="crd-info">
    <h2 className="crd-heading">Carcasas</h2>
    <p className="crd-text">Al 10% de Descuento!</p>
  </div>
</div>

      {/* effect-3 */}
      <div className="crd crd--effect-3">
        <div className="crd-img" style={{backgroundImage: 'url("https://www.lanacion.com.ar/resizer/v2/el-galaxy-watch5-pro-tiene-una-caja-de-titanio-de-P2HHKXMUVBAF3GUA6AI752Y6II.jpg?auth=f0a73de728c409b706e40cf783552c3125df63a593b90f66a09ffda2ca38a0e6&width=420&height=280&quality=70&smart=true")'}}></div>
        <div className="crd-info">
          <h2 className="crd-heading"> Smartwach</h2>
          <p className="crd-text">Llevatelo con 30% de descuento!</p>
        </div>
      </div>

      {/* effect-4 */}
      <div className="crd crd--effect-4">
        <div className="crd-img" style={{backgroundImage: 'url("https://www.educaciontrespuntocero.com/wp-content/uploads/2023/05/destacada_auriculares_E.jpg")'}}></div>
        <div className="crd-info">
          <h2 className="crd-heading">Audifonos</h2>
          <p className="crd-text">La mejor calidad de sonido</p>
        </div>
      </div>

     
    </div>
  );
}
