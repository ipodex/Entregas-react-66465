import React, { useContext } from 'react';
import './about.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../CartContext';

const About = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,  // Asegúrate de tener estas propiedades en tu objeto product
      name: product.name,
      quantity: 1,  // Puedes ajustar la cantidad según sea necesario
      price: product.price,
    });
  };

  return (
    <div className='cardContainer col-md-10 mb-3'>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="./src/assets/4070.png" />
        <Card.Body>
          <Card.Title>Placa de video 4070</Card.Title>
          <Card.Text>
            Placa de video gama media.
          </Card.Text>
          <Button variant="primary" onClick={() => handleAddToCart({ id: 1, name: 'Placa de video 4070', price: 300 })}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="./src/assets/4080.png" />
        <Card.Body>
          <Card.Title>Placa de video 4080</Card.Title>
          <Card.Text>
            Placa de video gama alta.
          </Card.Text>
          <Button variant="primary" onClick={() => handleAddToCart({ id: 2, name: 'Placa de video 4080', price: 500 })}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>

    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="./src/assets/fuente 1200 w thor.png" />
      <Card.Body>
        <Card.Title>Fuente ROG THOR 1200W</Card.Title>
        <Card.Text>
          Fuente gama alta.
        </Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart({ id: 3, name: 'Fuente 1200 w thor', price: 700 })}>
            Agregar al carrito
          </Button>

      </Card.Body>
    </Card>

    <Card  style={{ width: '30rem' }}>
      <Card.Img variant="top" src="./src/assets/gabinete msi.png" />
      <Card.Body>
        <Card.Title>Gabinete MSI</Card.Title>
        <Card.Text>
          Gabinete negro MSI.
        </Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart({ id: 4, name: 'gabinete msi', price: 300 })}>
            Agregar al carrito
          </Button>

      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }}>
      <Card.Img  variant="top"  src="./src/assets/mother gigabyte.png" />
      <Card.Body >
        <Card.Title >Motherboard Gigabyte</Card.Title>
        <Card.Text>
          Motherboard gama alta.
        </Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart({ id: 5, name: 'mother gigabyte', price: 500 })}>
            Agregar al carrito
          </Button>

      </Card.Body>
    </Card>

    <Card  style={{ width: '30rem' }}>
      <Card.Img variant="top" src="./src/assets/ryzen 5 8600g.png" />
      <Card.Body>
        <Card.Title>Ryzen 5 8600g</Card.Title>
        <Card.Text>
          Procesador con graficos integrados ryzen 5 8600g.
        </Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart({ id: 6, name: 'ryzen 5 8600g', price: 400 })}>
            Agregar al carrito
          </Button>

      </Card.Body>
    </Card>

    <Card  style={{ width: '30rem' }}>
      <Card.Img variant="top" src="./src/assets/ryzen 7 7800x3D.png" />
      <Card.Body>
        <Card.Title>Ryzen 7 7800x3D</Card.Title>
        <Card.Text>
          Procesador Ryzen 7 7800x3D de los mejores procesadores para gaming.
        </Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart({ id: 7, name: 'ryzen 7 7800x3D', price: 600 })}>
            Agregar al carrito
          </Button>

      </Card.Body>
    </Card>

    <Card  style={{ width: '30rem' }}>
      <Card.Img variant="top" src="./src/assets/vengeance 4600 mhz.png" />
      <Card.Body>
        <Card.Title>Corsair 16gb X2 4600MHZ</Card.Title>
        <Card.Text>
          Memorias ram corsair 4600 mhz vengeance de las mejores del mercado.
        </Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart({ id: 8, name: 'vengeance 4600mhz', price: 200 })}>
            Agregar al carrito
          </Button>

      </Card.Body>
    </Card>
    <Card  style={{ width: '30rem' }}>
      <Card.Img variant="top" src="./src/assets/watercooling.png" />
      <Card.Body>
        <Card.Title>Watercooling Coolermaster</Card.Title>
        <Card.Text>
          Refrigeracion liquida Cooler master.
        </Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart({ id: 9, name: 'watercooling', price: 300 })}>
            Agregar al carrito
          </Button>

      </Card.Body>
    </Card>
    
    </div>
  )
}

export default About