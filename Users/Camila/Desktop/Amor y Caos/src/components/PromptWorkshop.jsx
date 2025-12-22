import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle, FaLightbulb, FaCopy } from 'react-icons/fa';
import './PromptWorkshop.css';

const PromptWorkshop = () => {
    const [formData, setFormData] = useState({
        role: '',
        objective: '',
        format: '',
        constraints: '',
        example: ''
    });

    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [copied, setCopied] = useState(false);

    // ✅ NUEVA CHECKLIST CONGRUENTE
    const checklist = [
        { id: 1, text: "Define a quién debe interpretar la IA", field: "role" },
        { id: 2, text: "Define qué quieres lograr", field: "objective" },
        { id: 3, text: "Agrega contexto real", field: "constraints" },
        { id: 4, text: "Pide un formato de salida claro", field: "format" },
        { id: 5, text: "Inspírate con un ejemplo o referencia", field: "example" }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const generatePrompt = () => {
        const parts = [];

        if (formData.role) parts.push(`Actúa como ${formData.role}.`);
        if (formData.objective) parts.push(`Tu objetivo es: ${formData.objective}.`);
        if (formData.constraints) parts.push(`Contexto: ${formData.constraints}.`);
        if (formData.format) parts.push(`Formato de salida: ${formData.format}.`);
        if (formData.example) parts.push(`Ejemplo esperado: ${formData.example}.`);

        const prompt = parts.join(' ');
        setGeneratedPrompt(prompt || 'Completa al menos un campo para generar un prompt.');
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const isFieldFilled = (field) => {
        return formData[field] && formData[field].trim() !== '';
    };

    return (
        <section className="section workshop-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-center gradient-text mb-md">🛠 Taller Interactivo</h2>
                    <p className="text-center section-subtitle">
                        Aprende a crear prompts claros que funcionen con IA.
                    </p>
                </motion.div>

                <div className="workshop-container grid gap-lg md:grid-cols-2 mt-lg">
                    {/* 🧠 Checklist */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="card"
                    >
                        <h3 className="checklist-title flex items-center gap-sm mb-md">
                            <FaLightbulb /> Pasos para un buen prompt
                        </h3>
                        <ul className="checklist flex flex-col gap-sm">
                            {checklist.map((item, index) => (
                                <motion.li
                                    key={item.id}
                                    className={`checklist-item flex items-center gap-sm ${isFieldFilled(item.field) ? "checked" : ""}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                >
                                    <FaCheckCircle className="check-icon text-green-400" />
                                    <span>{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="mt-md text-sm text-gray-400 italic">
                            💡 Los prompts más claros → mejores resultados.
                        </p>
                    </motion.div>

                    {/* 🔧 Prompt Builder */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="card"
                    >
                        <h3 className="mb-md gradient-text">🧠 Arma tu Prompt</h3>
                        <div className="builder-form flex flex-col gap-md">
                            {/* IA ACTÚA COMO */}
                            <div className="form-group">
                                <label htmlFor="role">La IA debe actuar como:</label>
                                <input
                                    id="role"
                                    type="text"
                                    placeholder="Ej: artista de estilo Ghibli, ilustrador digital tierno"
                                    value={formData.role}
                                    onChange={(e) => handleInputChange("role", e.target.value)}
                                />
                            </div>

                            {/* OBJETIVO */}
                            <div className="form-group">
                                <label htmlFor="objective">Objetivo:</label>
                                <input
                                    id="objective"
                                    type="text"
                                    placeholder="Ej: crear una imagen estilo anime tipo Ghibli de un gatito recién nacido"
                                    value={formData.objective}
                                    onChange={(e) => handleInputChange("objective", e.target.value)}
                                />
                            </div>

                            {/* FORMATO */}
                            <div className="form-group">
                                <label htmlFor="format">Formato de la imagen:</label>
                                <input
                                    id="format"
                                    type="text"
                                    placeholder="Ej: ilustración digital, plano medio, fondo suave, colores pastel, formato cuadrado"
                                    value={formData.format}
                                    onChange={(e) => handleInputChange("format", e.target.value)}
                                />
                            </div>

                            {/* CONTEXTO */}
                            <div className="form-group">
                                <label htmlFor="constraints">Contexto y detalles:</label>
                                <input
                                    id="constraints"
                                    type="text"
                                    placeholder="Ej: gatito muy pequeño, expresión feliz, con su mamá, ambiente cálido, estilo tierno y emocional"
                                    value={formData.constraints}
                                    onChange={(e) => handleInputChange("constraints", e.target.value)}
                                />
                            </div>

                            {/* EJEMPLO */}
                            <div className="form-group">
                                <label htmlFor="example">Estilo visual de referencia:</label>
                                <input
                                    id="example"
                                    type="text"
                                    placeholder="Ej: anime estilo Ghibli, ilustración suave, luz cálida, estética cute, sin realismo"
                                    value={formData.example}
                                    onChange={(e) => handleInputChange("example", e.target.value)}
                                />
                            </div>

                            <button className="btn btn-primary mt-md" onClick={generatePrompt}>
                                ➡️ Generar prompt de imagen
                            </button>
                        </div>

                        {/* ✅ Prompt generado */}
                        {generatedPrompt && (
                            <motion.div
                                className="generated-prompt mt-lg glass p-md rounded"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="prompt-header flex justify-between items-center mb-sm">
                                    <h4>🎯 Prompt generado:</h4>
                                    <button className="btn-secondary btn-sm" onClick={copyToClipboard}>
                                        <FaCopy /> {copied ? "¡Copiado!" : "Copiar"}
                                    </button>
                                </div>
                                <pre className="prompt-text bg-dark p-sm rounded text-sm text-left">
                                    {generatedPrompt}
                                </pre>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PromptWorkshop;
