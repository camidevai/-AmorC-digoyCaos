import { motion } from 'framer-motion';
import { FaCog, FaCode, FaGraduationCap, FaBrain, FaEnvelope, FaCalendar } from 'react-icons/fa';
import './InformatikAI.css';

const InformatikAI = () => {
    const services = [
        {
            icon: <FaCog />,
            title: "Automatización inteligente",
            description: "Optimizamos procesos con IA para ahorrar tiempo y recursos."
        },
        {
            icon: <FaCode />,
            title: "Desarrollo de software a medida",
            description: "Soluciones personalizadas que se adaptan a tu negocio."
        },
        {
            icon: <FaGraduationCap />,
            title: "Educación y talleres IA",
            description: "Formación práctica para dominar la Inteligencia Artificial."
        },
        {
            icon: <FaBrain />,
            title: "Consultoría estratégica",
            description: "Te ayudamos a integrar IA de forma efectiva en tu organización."
        }
    ];

    return (
        <section className="informatik-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="mb-md">
                        <span className="gradient-text">InformatiK-AI</span>
                    </h2>
                    <p className="informatik-subtitle">
                        Tecnología desde el sur, con propósito real.
                    </p>
                    <p className="informatik-description">
                        Creamos soluciones con Inteligencia Artificial aplicada a la vida real.
                        Desde Temuco para Chile y el mundo.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Impact Quote */}
                <motion.div
                    className="impact-quote"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="quote-mark">"</div>
                    <p className="quote-text">
                        InformatiK-AI nació de la necesidad de construir algo propio, desde el sur del mundo.
                        No solo usamos IA: <span className="highlight-warm">la creamos</span>, <span className="highlight-warm">la integramos</span> y <span className="highlight-warm">la enseñamos</span>.
                    </p>
                    <div className="quote-mark quote-mark-end">"</div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="informatik-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <button className="btn btn-primary">
                        <FaEnvelope /> Habla con nosotros
                    </button>
                    <button className="btn btn-secondary">
                        <FaCalendar /> Ver próximos talleres
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default InformatikAI;
