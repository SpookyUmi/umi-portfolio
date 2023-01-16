import Head from "next/head";
import Image from "next/image";
import sakura from "../../static/sakura_tree.svg";

export default function Resume() {
  return (
    <div className="container">
      <main className="main">
        <h1>CHLOÉ DANISEVICIUS</h1>

        <p className="description">
          <code>fullstack web developer</code>
        </p>

        <section>
          <h2>EDUCATION</h2>
          <h3>Fullstack JS program - O&apos;Clock, August 2020 to February 2021</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript, Node.js, Express, SQL, OOP</li>
            <li>SSH, Git Flow, UNIX & its CLI</li>
            <li>Conception team work : Agile, wireframes, user stories, deploy</li>
            <li>Specialisation : React & Redux</li>
          </ul>
          <p>
            <strong>→ Opquast certification (820pts) :</strong> Quality Web practices <br />{" "}
            <strong>→ Web & Web mobile professional certification</strong>
          </p>
          <h3>Mentoring with an experimented developer - March 2020 to August 2020</h3>
          <ul>
            <li>Basics : HTML5, CSS3</li>
            <li>Wes Bos&apos; courses : Flexbox, Grid, Beginner JavaScript</li>
            <li>Linux</li>
          </ul>
          <h3>Speech Therapy - CFUOB (FR), September 2017 to April 2020</h3>
          <ul>
            <li>3 years of Speech therapy classes and internships</li>
          </ul>
        </section>
        <section>
          <h2>PROFESSIONAL EXPERIENCE</h2>
          <h3>Fullstack Developer Gatsby & serverless (Freelance project)</h3>
          <div>
            <p>
              <strong>
                <a href="https://bebeaupaysdusommeil.com" target="_blank" rel="noopener noreferrer">
                  Bébé au Pays du Sommeil
                </a>
              </strong>{" "}
              - August 2022 to September 2022
            </p>
          </div>
          <ul>
            <li>Implementation of Stripe Elements</li>
            <li>Netlify&apos;s serverless functions</li>
            <li>Use of Sendgrid</li>
          </ul>
          <h3>Fullstack Developer React & React Native, Node.js</h3>
          <p>
            <strong>
              <a href="https://www.le-stud.com/" target="_blank" rel="noopener noreferrer">
                Le Stud
              </a>{" "}
              (formerly called Selego)
            </strong>{" "}
            - May 2021 to July 2022
          </p>
          <ul>
            <li>
              Learned React Native on{" "}
              <a href="https://moneywalkie.com/" target="_blank" rel="noopener noreferrer">
                MoneyWalkie
              </a>
            </li>
            <li>
              NodeJS, React, REST APIs, MongoDB, SysAdmin on OVH on{" "}
              <a href="https://www.snu.gouv.fr/" target="_blank" rel="noopener noreferrer">
                SNU
              </a>
            </li>
          </ul>
          <h3>Frontend Developer React - Product Owner</h3>
          <div>
            <p>
              <strong>O&apos;Clock Final Project :</strong>{" "}
              <a href="https://ofourneaux.xyz" target="_blank" rel="noopener noreferrer">
                O&apos;Fourneaux
              </a>{" "}
              (only the Front part is still available because of Heroku&apos;s fee update) - January 2021 to
              February 2021
            </p>
          </div>
        </section>
      </main>
      <section className="second">
        <article>
          <h2>HARD SKILLS</h2>
          <ul>
            <li>HTML5, CSS3, Sass, TailwindCSS</li>
            <li>Responsive Web Design, UI/UX</li>
            <li>JavaScript ES6+, React & Redux, React Native</li>
            <li>Node.js, Axios, Express, EJS</li>
            <li>PostgreSQL & MongoDB</li>
            <li>Linux, Git flow & GitHub</li>
            <li>Webpack</li>
            <li>Netlify, Heroku, Clever Cloud</li>
            <li>VueJS : currently learning</li>
          </ul>
        </article>
        <article>
          <h2>SOFT SKILLS</h2>
          <p>
            I&apos;m a <strong>creative</strong> and <strong>neurodivergent</strong> person. I&apos;m
            dedicated & <strong>enthusiastic</strong> about learning new things, especially regarding{" "}
            <strong>web development</strong> and <strong>art</strong> (drawing and painting). I love to work
            in a <strong>team</strong> but I also need to be <strong>independent</strong>. I try to be{" "}
            <strong>better</strong> everyday, both in my work and personal life.
          </p>
        </article>
        <article>
          <h2>HOBBIES</h2>
          <div className="hobbies">
            <p className="tag tag--pink">Nature & animals</p>
            <p className="tag tag--orange">Sports</p>
            <p className="tag tag--sun">Cuddling my cats</p>
            <p className="tag tag--lavender">ACNH</p>
            <p className="tag tag--blue">Singing & music</p>
            <p className="tag tag--sand">Cooking & baking</p>
            <p className="tag tag--yellow">Drawing & painting</p>
            <p className="tag tag--beige">Hollow Knight</p>
          </div>
        </article>
        <article>
          <h2>CONTACT</h2>
          <div className="contact">
            <Image width="100" height="100" src={sakura} alt="sakura tree icon" />
            <ul>
              <li>
                <a href="mailto:spookyumi.dev@gmail.com">spookyumi.dev@gmail.com</a>
              </li>
              <li>
                <a href="https://github.com/SpookyUmi" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/spookyumi/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://spookyumi.dev" target="_blank" rel="noopener noreferrer">
                  My old portfolio
                </a>{" "}
                (the new one&apos;s in progress !)
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
