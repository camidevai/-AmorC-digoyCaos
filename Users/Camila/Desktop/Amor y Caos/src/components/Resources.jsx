import { motion } from 'framer-motion';
import { FaDownload, FaYoutube, FaCalendarAlt, FaDiscord, FaRocket } from 'react-icons/fa';
import './Resources.css';

const Resources = () => {
    const resources = [
        {
            icon: <FaDownload />,
            title: "Guía de Prompts",
            description: "PDF descargable con las mejores prácticas para crear prompts efectivos.",
            cta: "Descargar PDF",
            color: "primary"
        },
        {
            icon: <FaYoutube />,
            title: "Playlist de Videos",
            description: "Serie completa de tutoriales para aprender IA desde cero.",
            cta: "Ver playlist",
            color: "warm"
        },
        {
            icon: <FaCalendarAlt />,
            title: "Calendario de Talleres",
            description: "Talleres prácticos y sesiones en vivo para profundizar tu aprendizaje.",
            cta: "Ver calendario",
            color: "tertiary"
        },
        {
            icon: <FaDiscord />,
            title: "Comunidad Discord",
            description: "Únete a nuestra comunidad y aprende junto a otros entusiastas de la IA.",
            cta: "Unirse ahora",
            color: "secondary"
        }
    ];

    return (
        <section className="resources-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-center mb-md">
                        📚 Recursos para <span className="gradient-text">seguir aprendiendo</span>
                    </h2>
                    <p className="resources-intro text-center">
                        Todo lo que necesitas para continuar tu viaje en el mundo de la Inteligencia Artificial.
                    </p>
                </motion.div>

                {/* Resources Grid */}
                <div className="resources-grid">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            className={`resource-card resource-card-${resource.color}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="resource-icon-wrapper">
                                <div className="resource-icon">{resource.icon}</div>
                            </div>
                            <h3 className="resource-title">{resource.title}</h3>
                            <p className="resource-description">{resource.description}</p>
                            <button className={`btn btn-resource btn-${resource.color}`}>
                                {resource.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Main CTA */}
                <motion.div
                    className="resources-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <button className="btn btn-primary btn-large">
                        <FaRocket /> Empieza tu primer proyecto hoy
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Resources;
