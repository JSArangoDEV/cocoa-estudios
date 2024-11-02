import { useState, useEffect } from 'react'
import '../../styles/pages/App.css'

/* - - - - - - */

import ImageNavLogo from '../../assets/images/sections/navigation/logo.png'
import ImageJuegosG1 from '../../assets/images/sections/juegos/g1-icon.svg'
import ImageSobreNosotros1 from '../../assets/images/sections/sobrenosotros/1.png'
import ImageSobreNosotros2 from '../../assets/images/sections/sobrenosotros/2.png'
import ImageSobreNosotros3 from '../../assets/images/sections/sobrenosotros/3.png'
import ImageSobreNosotros4 from '../../assets/images/sections/sobrenosotros/4.png'
import ImageSobreNosotros5 from '../../assets/images/sections/sobrenosotros/5.png'
import ImageSobreNosotros6 from '../../assets/images/sections/sobrenosotros/6.png'
import ImageSobreNosotros7 from '../../assets/images/sections/sobrenosotros/7.png'

/* - - - - - - */

function App() {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  const closeMenu = () => {
    setMenuActive(false)
  }

  return (
    <main>
      <nav>
        <div className="logo">
          <img src={ImageNavLogo} alt="Logo" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`buttons ${menuActive ? 'active' : ''}`}>
          <ul id='buttonsul'>
            <li>
              <a href="#" onClick={closeMenu}>Inicio</a>
            </li>
            <li>
              <a href="#s2" onClick={closeMenu}>Juegos</a>
            </li>
            <li>
              <a href="#s3" onClick={closeMenu}>Sobre nosotros</a>
            </li>
            <li>
              <a href="#s4" onClick={closeMenu}>Redes sociales</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="s1">
        <div className="text">
          <span className="title">Aprende mientras juegas videojuegos</span>
          <span className="subtitle">
            Juegos educativos atractivos que hacen que la salud sea divertida y
            accesible
          </span>
        </div>
        <button>Explora nuestro contenido</button>
      </section>
      <section className="s2" id='s2'>
        <span className="title">Juegos Destacados</span>
        <figure className="game">
          <img src={ImageJuegosG1} alt="Juego" />
          <span className="gametitle">Primeros Auxilios</span>
          <span className="subtitle">Aprende de primeros auxilios básicos</span>
        </figure>
      </section>
      <section className="s3" id='s3'>
        <span className="title">Sobre Nosotros</span>
        <span className="subtitle">¿Quiénes somos? Nuestra historia</span>
        <p>
          Después de varios años compartiendo juntos nuestro viaje por el
          colegio secundario como estudiantes de 5to año del Colegio ISEP, ha
          llegado el momento de crear nuestro proyecto de Tesis. Siete amigos
          formamos un grupo y pusimos manos a la obra en el proyecto. Así nació
          <span className="bold">Cocoa Estudios</span>, una empresa de desarrollo de videojuegos educativos y
          comprometida con aportar. Somos una organización comprometida con la
          ayuda social, nos preocupa que en la sociedad actual existe mucha
          desinformación acerca de varios aspectos sociales, tales como los
          primeros auxilios, la salud mental, y muchos otros. Nuestro objetivo
          es crear un impacto social educando mediante videojuegos divertidos y
          dinámicos.
        </p>
        <div className="users">
          <figure>
            <img src={ImageSobreNosotros1} alt="1" />
            <span className="name">Juan Santiago Arango</span>
            <span className="role">CEO</span>
          </figure>
          <figure>
            <img src={ImageSobreNosotros2} alt="2" />
            <span className="name">Matias Roberti</span>
            <span className="role">Programación</span>
          </figure>
          <figure>
            <img src={ImageSobreNosotros3} alt="3" />
            <span className="name">Lautaro Godoy</span>
            <span className="role">Diseño</span>
          </figure>
          <figure>
            <img src={ImageSobreNosotros4} alt="4" />
            <span className="name">Florencia Avila</span>
            <span className="role">Diseño</span>
          </figure>
          <figure>
            <img src={ImageSobreNosotros5} alt="5" />
            <span className="name">Lautaro Barac</span>
            <span className="role">Diseño</span>
          </figure>
          <figure>
            <img src={ImageSobreNosotros6} alt="6" />
            <span className="name">Diana Guillot</span>
            <span className="role">Testing</span>
          </figure>
          <figure>
            <img src={ImageSobreNosotros7} alt="7" />
            <span className="name">Nicolás Díaz</span>
            <span className="role">Testing</span>
          </figure>
        </div>
        <span className="subtitle">Misión</span>
        <p>
          Promover la educación mediante las nuevas tecnologías.
        </p>
        <span className="subtitle">Visión</span>
        <p>
          La visión de nuestra empresa es poder promover los videojuegos con
          temáticas sociales, creando un impacto social que nos convierta en
          líderes de los creadores de videojuegos educativos.
        </p>
        <span className="subtitle">Valores</span>
        <p>
          Nuestros valores se basan en el poder esparcir el conocimiento a la
          población y proporcionar productos de calidad, en la seguridad tanto
          de nuestros usuarios y posibles inversores, el compromiso con la
          sociedad y nuestra transparencia hacia los públicos.
        </p>
        <figure className="line"></figure>
        <span className="subtitle">Creencias Compartidas</span>
        <p>
          Trabajo en equipo, comunicación, escucha, compromiso con el objetivo,
          eficiencia al momento de trabajar y democracia al momento de tomar
          decisiones.
        </p>
        <span className="subtitle">Valores Compartidos</span>
        <p>
          Desde Cocoa Estudios asumimos la responsabilidad de la acción social
          en nuestros juegos y en todos nuestros proyectos. Solo así, con
          políticas y objetivos realizables, entendemos que estaremos más cerca
          de generar efectos tangibles y duraderos.
        </p>
        <span className="subtitle">Pautas de Trabajo</span>
        <p>
          En nuestro equipo tenemos distintos niveles de jerarquía, pero todos
          trabajamos en conjunto, escuchando y respetando las ideas de cada uno
          y tratandonos como pares.
        </p>
      </section>
      <section className="s4" id='s4'>
        <span className="title">Redes Sociales</span>
        <div className="icons">
          <a href="https://www.instagram.com/cocoa.estudios/" target='_blank'>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
          </a>
          <a href="https://www.youtube.com/" target='_blank'>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>
          </a>
        </div>
      </section>
      <footer>
        <span>© 2024 Cocoa Estudios. Todos los derechos reservados.</span>
      </footer>
    </main>
  )
}

export default App
