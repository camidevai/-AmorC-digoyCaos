import { motion } from 'framer-motion';
import './StoryBridge.css';

const StoryBridge = () => {
    return (
        <section className="story-bridge section">
            <div className="container">
                <motion.div
                    className="bridge-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="bridge-title">
                        🚀 Y así nació <span className="gradient-text">Informatik-AI</span>
                    </h2>

                    <div className="bridge-video-container">
                        <motion.video
                            src="/informatikAI/nacimiento.mp4"
                            className="bridge-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        />
                        <div className="video-glow"></div>
                    </div>

                    <motion.div
                        className="bridge-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <p className="bridge-message">
                            Mezclando nuestros conocimientos de ingeniería.
                        </p>
                        <p className="bridge-message">
                            Nuestra experiencia en distintas empresas.
                        </p>
                        <p className="bridge-highlight">
                            <strong>Creamos software con Inteligencia Artificial</strong>
                        </p>
                    </motion.div>

                    <motion.div
                        className="bridge-stats"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <div className="stat-item">
                            <div className="stat-icon">💻</div>
                            <div className="stat-label">Desarrollo de Software</div>
                        </div>
                        <div className="stat-plus">+</div>
                        <div className="stat-item">
                            <div className="stat-icon">🤖</div>
                            <div className="stat-label">Inteligencia Artificial</div>
                        </div>
                        <div className="stat-equals">=</div>
                        <div className="stat-item stat-result">
                            <div className="stat-icon">🚀</div>
                            <div className="stat-label">Informatik-AI</div>
                        </div>
                    </motion.div>

                    <motion.p
                        className="bridge-footer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        También damos charlas y cursos personalizados 🎓
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default StoryBridge;

