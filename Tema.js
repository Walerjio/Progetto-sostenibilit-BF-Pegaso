//Lingue e traduzioni pagina web
const translations = {
    it: {
        navContesto: "Contesto",
        navRisultati: "Risultati",
        navPilastri: "Pilastri",
        heroTitle: "Agricoltura Rigenerativa e Innovazione",
        heroSub: "Analisi della strategia ESG del Gruppo BF S.p.A.",
        titoloContesto: "Il Contesto Operativo",
        descrizioneContesto: "Il Gruppo BF rappresenta il più importante operatore agroindustriale italiano...",
        //KPI
        kpiEttari: "Ettari in Agricoltura di Precisione",
        kpiSementi: "% Sementi Certificate",
        kpiSicurezza: "Certificazione sicurezza ISO",
        // Pilastri
        titoloPilastri: "Pilastri della Strategia ESG",
        cardAmbienteTitolo: "Ambiente",
        cardAmbienteDesc: "Monitoraggio satellitare e agricoltura 4.0.",
        cardSocialeTitolo: "Sociale",
        cardSocialeDesc: "Sicurezza sul lavoro e formazione continua.",
        cardGovernanceTitolo: "Governance",
        cardGovernanceDesc: "Modello di business trasparente e obiettivi integrati.",
        btnScopri: "Scopri di più",
        downloadTitolo: "📄 Informazioni",
        downloadDesc: "Consulta il documento integrale approvato dal CdA per i dettagli metodologici.",
        footerText: "© 2026 Analisi Sostenibilità | Sviluppato per Progetto Didattico Avanzato",
        // Testi Modali (HTML)
        'modal-ambiente': `<h3>Ambiente</h3><p>Dettagli sull'agricoltura 4.0...</p>`,
        btnDownload: "Scarica DNF 2023 (PDF)"
        
    },
    en: {
        navContesto: "Context",
        navRisultati: "Results",
        navPilastri: "Pillars",
        btnDownload: "PDF Report",
        heroTitle: "Regenerative Agriculture & Innovation",
        heroSub: "ESG Strategy Analysis of BF Group S.p.A.",
        titoloContesto: "The Operational Context",
        descrizioneContesto: "The BF Group represents the most important Italian agro-industrial operator...",
        // KPI - ASSICURATI CHE SIANO SCRITTI COSI'
        kpiEttari: "Hectares in Precision Farming",
        kpiSementi: "% Certified Seeds",
        kpiSicurezza: "ISO Safety Certification", 
        // PILASTRI
        titoloPilastri: "ESG Strategy Pillars",
        cardAmbienteTitolo: "Environment",
        cardAmbienteDesc: "Satellite monitoring and agriculture 4.0.",
        cardSocialeTitolo: "Social",
        cardSocialeDesc: "Workplace safety and continuous training.",
        cardGovernanceTitolo: "Governance",
        cardGovernanceDesc: "Transparent business model and integrated objectives.",
        btnScopri: "Learn more",
        downloadTitolo: "📄 Information",
        downloadDesc: "Consult the full document approved by the Board of Directors for methodological details.",
        footerText: "© 2026 Sustainability Analysis | Developed for Advanced Educational Project"
    },
    fr: {
        navContesto: "Contexte",
        navRisultati: "Résultats",
        navPilastri: "Piliers",
        heroTitle: "Agriculture Régénératrice et Innovation",
        heroSub: "Analyse della stratégie ESG du Groupe BF S.p.A.",
        //traduci
        titoloContesto: "Le contexte opérationnel",
        descrizioneContesto: "Le Groupe BF représente le plus important opérateur agro-industriel italien.",
        kpiSicurezza: "Certification ISO Sécurité",
        kpiEttari: "Hectares en Agriculture de Précision",
        kpiSementi: "% Semences Certifiées",
        titoloPilastri: "Piliers de la Stratégie ESG",
        cardSocialeTitolo: "Social",
        cardSocialeDesc: "Sécurité au travail et formation continue.",
        cardGovernanceTitolo: "Gouvernance",
        cardGovernanceDesc: "Modèle d'affaires transparent et objectifs intégrés.",
        cardAmbienteTitolo: "Environnement",
        cardAmbienteDesc: "Suivi satellitaire et agriculture 4.0.",
        btnScopri: "Découvrir plus",
        downloadTitolo: "📄 Informations",
        downloadDesc: "Consultez le document intégral approuvé par le CdA pour les détails méthodologiques.",
        footerText: "© 2026 Analyse de Durabilité | Développé pour Projet Pédagogique Avancé",
        btnDownload: "Télécharger DNF 2023 (PDF)"
    },
    es: {
        navContesto: "Contexto",
        navRisultati: "Resultados",
        navPilastri: "Pilares",
        heroTitle: "Agricultura Regenerativa e Innovación",
        heroSub: "Análisis de la estrategia ESG del Grupo BF S.p.A.",
        //traduci
        titoloContesto: "El contexto operativo",
        descrizioneContesto: "El Grupo BF representa al operador agroindustrial italiano más importante...",
        kpiEttari: "Hectáreas en Agricultura de Precisión",
        kpiSementi: "% Semillas Certificadas",
        kpiSicurezza: "Certificación ISO de Seguridad",
        titoloPilastri: "Pilares de la Estrategia ESG",
        cardSocialeTitolo: "Social",
        cardSocialeDesc: "Seguridad laboral y formación continua.",
        cardGovernanceTitolo: "Gobernanza",
        cardGovernanceDesc: "Modelo de negocio transparente e objetivos integrados.",
        cardAmbienteTitolo: "Medio Ambiente",
        cardAmbienteDesc: "Seguimiento satelital y agricultura 4.0.",
        btnScopri: "Descubre más",
        downloadTitolo: "📄 Información",
        downloadDesc: "Consulta el documento íntegro aprobado por el CdA para detalles metodológicos.",
        footerText: "© 2026 Análisis de Sostenibilidad | Desarrollado para Proyecto Didáctico Avanzado",
        btnDownload: "Descargar DNF 2023 (PDF)"
    }
};

//ChangeLang
function changeLang(lang) {
    const flags = { it: '🇮🇹', en: 'EN', fr: '🇫🇷', es: '🇪🇸' };
    const currentBtn = document.querySelector('.lang-current');
    if (currentBtn) currentBtn.innerText = flags[lang];

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        
        if (translations[lang] && translations[lang][key]) {
            // ✅ Usiamo innerHTML invece di innerText
            element.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem('selectedLang', lang);
}

// Al caricamento della pagina, ripristina la lingua salvata (opzionale ma consigliato)
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'it';
    changeLang(savedLang);
});

// Definizione della variabile (FONDAMENTALE: deve esserci!)
const themeToggle = document.getElementById('theme-toggle');

// Controllo se il bottone esiste per evitare errori in console
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        
        // Cambia l'emoji dinamicamente
        themeToggle.innerText = isDark ? '☀️' : '🌙';
        
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.innerText = '☀️';
    }
});

// Animazione Numeri
const counters = document.querySelectorAll('.kpi-num');
const speed = 100;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            // Usiamo || 0 per evitare che un campo vuoto blocchi l'animazione
            const count = +counter.innerText || 0;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Intersection Observer
const targetSection = document.querySelector('.kpi-grid');
if (targetSection) {
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            startCounters();
            // Una volta partita, smettiamo di osservare (così non riparte ogni volta)
            observer.unobserve(targetSection);
        }
    }, { threshold: 0.5 });

    observer.observe(targetSection);
}

const testiApprofonditi = {
    it: {
        'modal-ambiente': `
            <h3>Responsabilità Ambientale</h3>
            <p>Il Gruppo BF promuove una gestione responsabile delle risorse attraverso tecnologie avanzate:</p>
            <ul>
                <li><strong>Agricoltura di Precisione:</strong> Implementata sul 58% delle superfici 
                coltivabili nelle tenute di Jolanda, Cortona e Marrubio, con riduzione del 14,35% 
                delle arature profonde rispetto al 2022.</li>
                <li><strong>Energia Rinnovabile:</strong> Installati impianti fotovoltaici per 4.237 kWp, 
                in grado di coprire il 77% del fabbisogno energetico.</li>
                <li><strong>Certificazione ISO 50001:</strong> Gestione certificata dei consumi energetici 
                per BF Agricola, Bonifiche Ferraresi e BF Agroindustriale.</li>
                <li><strong>BF Energy:</strong> Newco dedicata alla transizione energetica, con obiettivo 
                di riduzione di 270.000 tonnellate di CO₂ all'anno entro il 2026.</li>
            </ul>`,
        'modal-sociale': `
            <h3>Capitale Umano e Sicurezza</h3>
            <p>Nel 2023 il Gruppo BF ha registrato una crescita occupazionale del 22%, 
            raggiungendo 1.107 dipendenti equivalenti a tempo pieno (ETP):</p>
            <ul>
                <li><strong>Certificazione ISO 45001:</strong> Standard internazionale per 
                la salute e sicurezza nei luoghi di lavoro.</li>
                <li><strong>Diversità e Inclusione:</strong> 19,6 dipendenti appartenenti a categorie 
                protette, di cui il 64% donne. Le donne rappresentano il 25% della forza lavoro totale.</li>
                <li><strong>Academy BF:</strong> Programmi di alta formazione per i professionisti 
                dell'agritech.</li>
                <li><strong>Zero episodi</strong> di corruzione o discriminazione registrati nel 2023.</li>
            </ul>`,
        'modal-governance': `
            <h3>Governance e Trasparenza</h3>
            <p>Il Gruppo BF adotta un modello di governance basato su responsabilità, 
            integrità e creazione di valore per tutti gli stakeholder:</p>
            <ul>
                <li><strong>Consiglio di Amministrazione:</strong> Composto da 11 membri, 
                con il 46% di genere femminile, tre comitati interni: Controllo e Rischi, 
                Nomine e Remunerazioni, Operazioni con Parti Correlate.</li>
                <li><strong>Comitato Manageriale di Sostenibilità:</strong> Coordina l'analisi 
                di materialità e supervisiona la rendicontazione secondo gli standard GRI.</li>
                <li><strong>Codice Etico:</strong> Aggiornato nel 2023, stabilisce regole 
                di condotta per tutti gli attori coinvolti nei rapporti con il Gruppo.</li>
                <li><strong>Quotazione Euronext Milan:</strong> Capitale sociale di €261.883.391, 
                garantendo piena trasparenza verso il mercato.</li>
            </ul>`
    },
    en: {
        'modal-ambiente': `
            <h3>Environmental Responsibility</h3>
            <p>BF Group promotes responsible resource management through advanced technologies:</p>
            <ul>
                <li><strong>Precision Agriculture:</strong> Implemented on 58% of cultivable 
                land at Jolanda, Cortona and Marrubio estates, with a 14.35% reduction 
                in deep ploughing compared to 2022.</li>
                <li><strong>Renewable Energy:</strong> Photovoltaic systems installed for 4,237 kWp, 
                covering 77% of the Group's energy needs.</li>
                <li><strong>ISO 50001 Certification:</strong> Certified energy management 
                for BF Agricola, Bonifiche Ferraresi and BF Agroindustriale.</li>
                <li><strong>BF Energy:</strong> Newco dedicated to energy transition, targeting 
                a reduction of 270,000 tonnes of CO₂ per year by 2026.</li>
            </ul>`,
        'modal-sociale': `
            <h3>Human Capital and Safety</h3>
            <p>In 2023, BF Group recorded a 22% employment growth, 
            reaching 1,107 full-time equivalent (FTE) employees:</p>
            <ul>
                <li><strong>ISO 45001 Certification:</strong> International standard for 
                occupational health and safety.</li>
                <li><strong>Diversity and Inclusion:</strong> 19.6 employees from protected 
                categories, 64% of whom are women. Women represent 25% of the total workforce.</li>
                <li><strong>BF Academy:</strong> Advanced training programmes for agritech 
                professionals.</li>
                <li><strong>Zero incidents</strong> of corruption or discrimination recorded in 2023.</li>
            </ul>`,
        'modal-governance': `
            <h3>Governance and Transparency</h3>
            <p>BF Group adopts a governance model based on responsibility, 
            integrity and value creation for all stakeholders:</p>
            <ul>
                <li><strong>Board of Directors:</strong> Composed of 11 members, 
                46% female, with three internal committees: Control and Risk, 
                Nominations and Remuneration, Related Party Transactions.</li>
                <li><strong>Sustainability Management Committee:</strong> Coordinates the 
                materiality analysis and oversees non-financial reporting per GRI standards.</li>
                <li><strong>Code of Ethics:</strong> Updated in 2023, establishes conduct 
                rules for all parties involved with the Group.</li>
                <li><strong>Euronext Milan Listed:</strong> Share capital of €261,883,391, 
                ensuring full market transparency.</li>
            </ul>`
    },
    fr: {
        'modal-ambiente': `
            <h3>Responsabilité Environnementale</h3>
            <p>Le Groupe BF promeut une gestion responsable des ressources grâce à des technologies avancées :</p>
            <ul>
                <li><strong>Agriculture de Précision :</strong> Mise en œuvre sur 58% des surfaces 
                cultivables dans les domaines de Jolanda, Cortona et Marrubio, avec une réduction 
                de 14,35% des labours profonds par rapport à 2022.</li>
                <li><strong>Énergie Renouvelable :</strong> Installations photovoltaïques pour 4 237 kWc, 
                couvrant 77% des besoins énergétiques du Groupe.</li>
                <li><strong>Certification ISO 50001 :</strong> Gestion certifiée de la consommation 
                énergétique pour BF Agricola, Bonifiche Ferraresi et BF Agroindustriale.</li>
                <li><strong>BF Energy :</strong> Newco dédiée à la transition énergétique, visant 
                une réduction de 270 000 tonnes de CO₂ par an d'ici 2026.</li>
            </ul>`,
        'modal-sociale': `
            <h3>Capital Humain et Sécurité</h3>
            <p>En 2023, le Groupe BF a enregistré une croissance de l'emploi de 22%, 
            atteignant 1 107 équivalents temps plein (ETP) :</p>
            <ul>
                <li><strong>Certification ISO 45001 :</strong> Norme internationale pour 
                la santé et la sécurité au travail.</li>
                <li><strong>Diversité et Inclusion :</strong> 19,6 employés appartenant à des 
                catégories protégées, dont 64% de femmes. Les femmes représentent 25% de l'effectif total.</li>
                <li><strong>Académie BF :</strong> Programmes de formation avancée pour les 
                professionnels de l'agritech.</li>
                <li><strong>Zéro incident</strong> de corruption ou de discrimination enregistré en 2023.</li>
            </ul>`,
        'modal-governance': `
            <h3>Gouvernance et Transparence</h3>
            <p>Le Groupe BF adopte un modèle de gouvernance fondé sur la responsabilité, 
            l'intégrité et la création de valeur pour toutes les parties prenantes :</p>
            <ul>
                <li><strong>Conseil d'Administration :</strong> Composé de 11 membres, 
                dont 46% de femmes, avec trois comités internes : Contrôle et Risques, 
                Nominations et Rémunérations, Transactions avec Parties Liées.</li>
                <li><strong>Comité Managérial de Durabilité :</strong> Coordonne l'analyse 
                de matérialité et supervise le reporting non financier selon les normes GRI.</li>
                <li><strong>Code d'Éthique :</strong> Mis à jour en 2023, établit des règles 
                de conduite pour tous les acteurs impliqués avec le Groupe.</li>
                <li><strong>Coté sur Euronext Milan :</strong> Capital social de 261 883 391 €, 
                garantissant une transparence totale envers le marché.</li>
            </ul>`
    },
    es: {
        'modal-ambiente': `
            <h3>Responsabilidad Ambiental</h3>
            <p>El Grupo BF promueve una gestión responsable de los recursos mediante tecnologías avanzadas:</p>
            <ul>
                <li><strong>Agricultura de Precisión:</strong> Implementada en el 58% de las superficies 
                cultivables en las fincas de Jolanda, Cortona y Marrubio, con una reducción del 14,35% 
                de las labores profundas respecto a 2022.</li>
                <li><strong>Energía Renovable:</strong> Instalaciones fotovoltaicas de 4.237 kWp, 
                cubriendo el 77% de las necesidades energéticas del Grupo.</li>
                <li><strong>Certificación ISO 50001:</strong> Gestión certificada del consumo energético 
                para BF Agricola, Bonifiche Ferraresi y BF Agroindustriale.</li>
                <li><strong>BF Energy:</strong> Filial dedicada a la transición energética, con objetivo 
                de reducir 270.000 toneladas de CO₂ al año para 2026.</li>
            </ul>`,
        'modal-sociale': `
            <h3>Capital Humano y Seguridad</h3>
            <p>En 2023, el Grupo BF registró un crecimiento del empleo del 22%, 
            alcanzando 1.107 empleados equivalentes a tiempo completo (ETC):</p>
            <ul>
                <li><strong>Certificación ISO 45001:</strong> Norma internacional para 
                la salud y seguridad en el trabajo.</li>
                <li><strong>Diversidad e Inclusión:</strong> 19,6 empleados pertenecientes a categorías 
                protegidas, el 64% mujeres. Las mujeres representan el 25% de la plantilla total.</li>
                <li><strong>Academia BF:</strong> Programas de formación avanzada para los 
                profesionales del agritech.</li>
                <li><strong>Cero incidentes</strong> de corrupción o discriminación registrados en 2023.</li>
            </ul>`,
        'modal-governance': `
            <h3>Gobernanza y Transparencia</h3>
            <p>El Grupo BF adopta un modelo de gobernanza basado en responsabilidad, 
            integridad y creación de valor para todos los grupos de interés:</p>
            <ul>
                <li><strong>Consejo de Administración:</strong> Compuesto por 11 miembros, 
                con el 46% de género femenino, y tres comités internos: Control y Riesgos, 
                Nombramientos y Retribuciones, Operaciones con Partes Vinculadas.</li>
                <li><strong>Comité de Sostenibilidad:</strong> Coordina el análisis de materialidad 
                y supervisa la información no financiera según los estándares GRI.</li>
                <li><strong>Código Ético:</strong> Actualizado en 2023, establece normas de conducta 
                para todos los actores vinculados al Grupo.</li>
                <li><strong>Cotizada en Euronext Milan:</strong> Capital social de €261.883.391, 
                garantizando plena transparencia ante el mercado.</li>
            </ul>`
    }
};

// Variabile per tenere traccia della lingua attiva
let currentLang = localStorage.getItem('selectedLang') || 'it';

function changeLang(lang) {
    currentLang = lang; // aggiorna la lingua corrente
    const flags = { it: '🇮🇹', en: '🇬🇧', fr: '🇫🇷', es: '🇪🇸' };
    const currentBtn = document.querySelector('.lang-current');
    if (currentBtn) currentBtn.innerText = flags[lang];

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem('selectedLang', lang);
}

function apriModal(id) {
    const modal = document.getElementById('modal-container');
    const body = document.getElementById('modal-body');
    // Legge il testo nella lingua corrente, con fallback all'italiano
    body.innerHTML = testiApprofonditi[currentLang]?.[id] 
                  || testiApprofonditi['it'][id] 
                  || '<p>Contenuto non disponibile.</p>';
    modal.style.display = "block";
}

function chiudiModal() {
    document.getElementById('modal-container').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-container');
    if (event.target == modal) chiudiModal();
}

// Immagini che cambiano nel tempo
const sfondi = [
    'campi-bf.webp',
    'Agricoltura.webp',
    'Fattoria.webp'
];

const layers = document.querySelectorAll('.hero-bg');
let indiceCorrente = 0;
let layerAttivo = 0;

// Imposta la prima immagine subito
layers[0].style.backgroundImage = `url('${sfondi[0]}')`;
layers[0].classList.add('attivo');

function cambiaSfondo() {
    const prossimo = (indiceCorrente + 1) % sfondi.length;
    const layerProssimo = 1 - layerAttivo; // alterna tra 0 e 1

    // Prepara il layer nascosto con la nuova immagine
    layers[layerProssimo].style.backgroundImage = `url('${sfondi[prossimo]}')`;
    
    // Sfuma dentro il nuovo, sfuma fuori il vecchio
    layers[layerProssimo].classList.add('attivo');
    layers[layerAttivo].classList.remove('attivo');

    indiceCorrente = prossimo;
    layerAttivo = layerProssimo;
}

setInterval(cambiaSfondo, 5000);

