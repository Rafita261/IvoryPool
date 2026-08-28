"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Droplets,
  Hammer,
  MapPin,
  Menu,
  Phone,
  Play,
  Waves,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  ["À propos", "#about"],
  ["Nos services", "#services"],
  ["Nos réalisations", "#projects"],
  ["FAQ", "#faq"],
];

const services = [
  {
    title: "Nous construisons des piscines sur mesure modernes et adaptées parfaitement",
    description: "Étude du terrain, conception, terrassement et mise en eau : un interlocuteur unique pilote votre projet jusqu’à la première baignade.",
    image: "sheet-2 q4",
  },
  {
    title: "Nous assurons l’entretien et la maintenance complète de votre piscine régulièrement",
    description: "Contrôle de l’eau, nettoyage, filtration et assistance technique pour conserver un bassin sain, limpide et performant toute l’année.",
    image: "sheet-3 q1",
  },
  {
    title: "Nous rénovons et modernisons les piscines existantes selon vos besoins",
    description: "Revêtement, étanchéité, éclairage et équipements : nous donnons une nouvelle vie à votre piscine sans repartir de zéro.",
    image: "sheet-3 q2",
  },
];

const faqs = [
  ["Combien de temps dure la construction d’une piscine ?", "Selon la taille et les contraintes du terrain, un projet standard prend généralement entre 6 et 10 semaines après validation de l’étude."],
  ["Proposez-vous des piscines sur mesure ?", "Oui. Dimensions, forme, profondeur, revêtement, plage et équipements sont définis selon votre terrain, votre usage et votre budget."],
  ["Quel type de piscine est le plus adapté à mon terrain ?", "Une visite technique nous permet d’évaluer l’accès, le sol, la pente et l’ensoleillement avant de vous recommander la solution la plus pertinente."],
  ["Proposez-vous des éclairages LED pour piscine ?", "Oui, avec plusieurs ambiances, puissances et options de commande pour une mise en lumière élégante et économe."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [projectOrder, setProjectOrder] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="topbar">
        <button
          className="menu-trigger"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <a className="topbar-brand" href="#home">Ivoir Pool</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade" />
        <div className="socials" aria-label="Réseaux sociaux">
          <a href="#contact" aria-label="Instagram">ig</a>
          <a href="#contact" aria-label="Facebook">f</a>
        </div>

        <nav className={`hero-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
          {navItems.slice(0, 2).map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="brand-pill" href="#home"><span />IVOIRE POOL</a>
          {navItems.slice(2).map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="contact-pill" href="#contact">Contact</a>

        <div className="hero-content shell">
          <h1>Votre piscine<br />sur mesure</h1>
          <div className="hero-copy">
            <p>
              Entre Piscinelle et Compass Pools, le haut de gamme africain,
              tropical et unique sur le marché ivoirien. Pas une piscine
              française générique&nbsp;: une ambiance villa luxe d’Abidjan.
            </p>
            <a className="button button-blue" href="#contact">Estimer</a>
          </div>
        </div>

        <div className="hero-bottom shell">
          <div className="stats">
            <article className="stat-card stat-light">
              <Waves />
              <strong>+435</strong>
              <span>Projets réalisés</span>
            </article>
            <article className="stat-card stat-dark">
              <ArrowUpRight />
              <strong>+752</strong>
              <span>Études personnalisées</span>
            </article>
          </div>
          <div className="client-pill"><b>+1000</b><span>clients satisfaits</span></div>
        </div>
        <div className="hero-watermark">IVOIRE POOL</div>
      </section>

      <section className="intro shell" id="about" data-reveal>
        <p className="eyebrow-copy">
          Depuis Abidjan, nous transformons les extérieurs en lieux de vie.
          Chaque bassin associe exigence technique, confort et élégance durable.
        </p>
        <h2>Bienvenue sur Ivoire Pool,<br />experts en piscines modernes<br />et durables</h2>
        <div className="intro-gallery">
          <div className="image-tile sheet-2 q1" />
          <div className="image-tile sheet-2 q3" />
        </div>
        <article className="intro-feature">
          <span className="icon-chip"><Waves /></span>
          <small>Votre projet, notre expertise</small>
          <h3>Des piscines sur mesure pour chaque projet</h3>
          <p>
            Forme, profondeur, revêtement et ambiance&nbsp;: nous concevons un
            bassin qui épouse votre terrain et votre manière de vivre.
          </p>
          <a className="button button-blue" href="#contact">Estimer mon projet</a>
        </article>
      </section>

      <section className="blue-showcase shell" data-reveal>
        <div className="blue-copy">
          <h2>Nous construisons des piscines personnalisées, équipées et de qualité.</h2>
          <div className="mini-pools">
            <div className="sheet-2 q1" role="img" aria-label="Piscine contemporaine vue du ciel" />
            <div className="sheet-2 q2" role="img" aria-label="Piscine tropicale lumineuse" />
          </div>
          <a className="button button-orange" href="#contact">Demander une estimation</a>
        </div>
        <div className="blue-visual">
          <span className="outline-card outline-one" />
          <span className="outline-card outline-two" />
          <div className="showcase-pool sheet-2 q2" role="img" aria-label="Piscine dans une villa tropicale" />
        </div>
        <div className="partners" aria-label="Partenaires">
          {['Aqua Côte', 'Compass', 'Piscinelle', 'Fluidra'].map((partner, index) => (
            <div key={partner}><span>{['≈', '△', '○', '◉'][index]}</span>{partner}</div>
          ))}
        </div>
      </section>

      <section className="services shell" id="services" data-reveal>
        <h2>Nous concevons, construisons et<br />entretenons des piscines modernes,<br />durables et sur mesure</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.title} data-reveal>
              <div className={`service-image ${service.image}`} role="img" aria-label={`Service piscine ${index + 1}`} />
              <div className="service-copy">
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Demander une estimation <ArrowUpRight /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="orange-stage shell" data-reveal>
        <div className="orange-lead">
          <h2>Une vision locale,<br />une exécution premium,<br />un bassin qui vous ressemble.</h2>
          <p>
            Pensées pour le climat ivoirien, nos piscines réunissent matériaux
            durables, filtration efficace et lignes architecturales sobres.
          </p>
        </div>
        <article className="orange-card">
          <div className="orange-card-image sheet-2 q4" role="img" aria-label="Piscine géométrique moderne" />
          <div>
            <h3>Consectetur<br />adipiscing libero</h3>
            <p>Une conception précise, du premier croquis à la mise en eau.</p>
            <a className="button button-blue" href="#contact">Estimer</a>
          </div>
        </article>
        <div className="orange-gallery">
          <div className="sheet-2 q3" role="img" aria-label="Piscine intimiste en soirée" />
          <div className="sheet-2 q1" role="img" aria-label="Piscine sur terrasse en bois" />
        </div>
        <div className="orange-values">
          <p>
            Une approche claire, un accompagnement humain et des finitions
            maîtrisées pour profiter longtemps de votre extérieur.
          </p>
          <div className="value-pills">
            {['Innovation', 'Piscines sur mesure', 'Confort & bien-être', 'Excellence durable', 'Design élégant', 'Entretien professionnel'].map((value) => <span key={value}>{value}</span>)}
          </div>
        </div>
      </section>

      <section className="projects shell" id="projects" data-reveal>
        <div className="projects-intro">
          <h2>Découvrez nos différents projets réalisés afin de satisfaire nos clients.</h2>
          <p>
            Du petit jardin urbain à la grande villa tropicale, chaque réalisation
            est conçue pour dialoguer avec son architecture et son environnement.
          </p>
          <div className="project-controls">
            <button type="button" aria-label="Projet précédent" onClick={() => setProjectOrder(false)}><ArrowLeft /></button>
            <button type="button" aria-label="Projet suivant" onClick={() => setProjectOrder(true)}><ArrowRight /></button>
          </div>
        </div>
        <div className="project-gallery">
          <div className={`project-image sheet-2 ${projectOrder ? 'q3' : 'q1'}`} role="img" aria-label="Projet de piscine résidentielle" />
          <div className={`project-image sheet-3 ${projectOrder ? 'q3' : 'q2'}`} role="img" aria-label="Projet de piscine tropicale" />
        </div>

        <div className="proof-grid">
          <h2>Construire du beau,<br />qui reste beau,<br />saison après saison.</h2>
          <article className="testimonial">
            <span className="quote-dot" />
            <h3>Une équipe présente du début à la fin</h3>
            <p>« Le chantier était clair, suivi et fidèle au rendu annoncé. Notre terrasse est devenue la pièce préférée de la maison. »</p>
            <small>— Aïcha &amp; Karim, Cocody</small>
          </article>
          <div className="proof-images">
            <div className="sheet-2 q3" role="img" aria-label="Piscine de villa éclairée" />
            <div className="sheet-2 q4" role="img" aria-label="Piscine contemporaine minimaliste" />
          </div>
          <div className="proof-note">
            <b>Notre engagement</b>
            <p>Des choix techniques expliqués, un budget maîtrisé et un service qui reste disponible après la livraison.</p>
          </div>
        </div>
      </section>

      <section className="faq shell" id="faq" data-reveal>
        <article className="contact-panel" id="contact">
          <div>
            <h2>Vous avez des questions&nbsp;?<br />Nous sommes là pour vous aider.</h2>
            <p>Consultez les réponses les plus fréquentes ou échangez directement avec notre équipe.</p>
          </div>
          <div className="contact-team" aria-label="Équipe Ivoire Pool">
            <span>YK</span><span>AN</span><span>KM</span><span>IP</span>
          </div>
          <small>Du lundi au samedi, de 8h à 18h<br />Délai de réponse moyen&nbsp;: 24 h</small>
          <a className="button button-white" href="tel:+2250750271157">Nous contacter</a>
        </article>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFaq === index;
            return (
              <article className={`faq-item ${isOpen ? 'open' : ''}`} key={question}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}>
                  <span>{question}</span><ChevronDown />
                </button>
                <p>{answer}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience shell" data-reveal>
        <div className="experience-shade" />
        <h2>Eau azurée contrastant<br />avec le ciel ivoirien</h2>
        <div className="experience-cards">
          <article className="experience-card featured">
            <span><Droplets /></span>
            <h3>Conception d’espaces aquatiques élégants et lumineux</h3>
            <a href="#contact">Faire une estimation</a>
          </article>
          <article className="experience-card">
            <span><Wrench /></span>
            <h3>Installation d’équipements premium pour piscines modernes</h3>
          </article>
          <article className="experience-card">
            <span><Hammer /></span>
            <h3>Aménagement de piscines élégantes et haut de gamme</h3>
          </article>
        </div>
      </section>

      <section className="film shell" data-reveal>
        <h2>L’élégance d’un projet bien pensé,<br />la sérénité d’un suivi maîtrisé.</h2>
        <p>Découvrez l’univers Ivoire Pool et notre manière de transformer un espace extérieur en expérience quotidienne.</p>
        <button className="film-image sheet-3 q4" type="button" aria-label="Lire la présentation vidéo">
          <span><Play /></span>
        </button>
      </section>

      <footer className="footer" data-reveal>
        <div className="footer-main shell">
          <div>
            <h2>Liens utiles</h2>
            <a href="#contact">Estimer un projet</a>
            <a href="#projects">Nos réalisations</a>
            <a href="#services">Nos services</a>
            <a href="#contact">Nous contacter</a>
          </div>
          <div>
            <h2>Pages légales</h2>
            <a href="#home">Mentions légales</a>
            <a href="#home">Conditions générales d’utilisation</a>
            <a href="#home">Politique de confidentialité</a>
          </div>
          <div className="footer-contact">
            <a className="footer-logo" href="#home"><span />IVOIRE POOL</a>
            <p>Ivoire Pool conçoit, construit et entretient des piscines modernes et sur mesure en Côte d’Ivoire.</p>
            <address>
              <span><MapPin /> 12 rue des Jardins, Cocody 2 Plateaux, Abidjan</span>
              <a href="tel:+2250750271157"><Phone /> +225 07 50 27 11 57</a>
            </address>
          </div>
        </div>
        <div className="footer-word">IVOIRE POOL</div>
        <p className="copyright">© Ivoire Pool · Tous droits réservés</p>
        <div className="footer-social"><a href="#contact">ig</a><a href="#contact">f</a></div>
      </footer>
    </main>
  );
}
