import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBrain, FaRobot, FaCheckCircle, FaTimesCircle, FaPaperPlane } from 'react-icons/fa';
import './AIExplanation.css';

const AIExplanation = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const cards = [
        {
            icon: <FaTimesCircle />,
            title: "Qué NO es IA",
            items: [
                "No tiene conciencia",
                "No tiene emociones reales",
                "No piensa como humanos",
                "No tiene intenciones propias"
            ],
            color: "warm"
        },
        {
            icon: <FaCheckCircle />,
            title: "Qué SÍ es IA",
            items: [
                "Aprende patrones de datos",
                "Predice resultados probables",
                "Procesa información rápido",
                "Se adapta con entrenamiento"
            ],
            color: "primary"
        },
        {
            icon: <FaRobot />,
            title: "Qué puede hacer",
            items: [
                "Automatizar tareas repetitivas",
                "Generar código y contenido",
                "Analizar grandes volúmenes",
                "Asistir en decisiones"
            ],
            color: "tertiary"
        },
        {
            icon: <FaBrain />,
            title: "Qué NO puede (aún)",
            items: [
                "Tomar decisiones morales",
                "Comprender emociones",
                "Crear sin datos previos",
                "Reemplazar juicio humano"
            ],
            color: "secondary"
        }
    ];

    const handlePromptSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim()) {
            // Simulated AI response
            setResponse(`Basándome en tu prompt "${prompt}", puedo ayudarte a: analizar el contexto, generar ideas relacionadas, y sugerir próximos pasos. ¿Qué te gustaría explorar primero?`);
        }
    };

    return (
        <section className="ai-explanation-section section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-center mb-md">
                        🤖 ¿Qué es la <span className="gradient-text">IA</span> (de verdad)?
                    </h2>
                    <p className="section-subtitle text-center">
                        Inteligencia Artificial = <span className="highlight">Patrones</span> + <span className="highlight">Predicciones</span> + <span className="highlight">Propósito humano</span>
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="ai-cards-grid">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`ai-card ai-card-${card.color}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="ai-card-icon">{card.icon}</div>
                            <h3 className="ai-card-title">{card.title}</h3>
                            <ul className="ai-card-list">
                                {card.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + i * 0.1, duration: 0.3 }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Prompt Box */}
                <motion.div
                    className="prompt-demo"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="prompt-demo-title">
                        🧪 Escribe un prompt y mira qué responde
                    </h3>
                    <form onSubmit={handlePromptSubmit} className="prompt-form">
                        <input
                            type="text"
                            className="prompt-input"
                            placeholder="Ej: Ayúdame a crear un plan de estudio para aprender IA..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">
                            <FaPaperPlane /> Enviar
                        </button>
                    </form>

                    {response && (
                        <motion.div
                            className="prompt-response"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="response-label">Respuesta de la IA:</div>
                            <p>{response}</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default AIExplanation;
