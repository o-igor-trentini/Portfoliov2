export interface Project {
  id: string;
  title: string;
  description: {
    pt: string;
    en: string;
    es: string;
  };
  descriptionSimple: {
    pt: string;
    en: string;
    es: string;
  };
  image: string;
  tags: string[];
  problem: {
    pt: string;
    en: string;
    es: string;
  };
  solution: {
    pt: string;
    en: string;
    es: string;
  };
  stack: string[];
  architecture: {
    pt: string;
    en: string;
    es: string;
  };
  highlights: {
    pt: string[];
    en: string[];
    es: string[];
  };
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'realtime-chat',
    title: 'Chat em Tempo Real',
    description: {
      pt: 'Sistema de chat em tempo real com WebSockets, autenticação JWT, e arquitetura de microserviços',
      en: 'Real-time chat system with WebSockets, JWT authentication, and microservices architecture',
      es: 'Sistema de chat en tiempo real con WebSockets, autenticación JWT y arquitectura de microservicios',
    },
    descriptionSimple: {
      pt: 'Um aplicativo de mensagens instantâneas onde você pode conversar em tempo real com outras pessoas',
      en: 'An instant messaging app where you can chat in real-time with other people',
      es: 'Una aplicación de mensajería instantánea donde puedes chatear en tiempo real con otras personas',
    },
    image: 'https://images.unsplash.com/photo-1756903646251-5f9d4154fe80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tdW5pY2F0aW9uJTIwdGVjaHxlbnwxfHx8fDE3NjMyMTg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Golang', 'WebSockets', 'React', 'Redis', 'PostgreSQL'],
    problem: {
      pt: 'Empresas precisam de sistemas de comunicação interna escaláveis e seguros que suportem milhares de usuários simultâneos',
      en: 'Companies need scalable and secure internal communication systems that support thousands of simultaneous users',
      es: 'Las empresas necesitan sistemas de comunicación interna escalables y seguros que soporten miles de usuarios simultáneos',
    },
    solution: {
      pt: 'Implementação de WebSockets com Go para comunicação bidirecional, Redis para pub/sub, e PostgreSQL para persistência. Arquitetura de microserviços permite escalar horizontalmente',
      en: 'Implementation of WebSockets with Go for bidirectional communication, Redis for pub/sub, and PostgreSQL for persistence. Microservices architecture allows horizontal scaling',
      es: 'Implementación de WebSockets con Go para comunicación bidireccional, Redis para pub/sub y PostgreSQL para persistencia. La arquitectura de microservicios permite escalar horizontalmente',
    },
    stack: ['Golang', 'WebSockets', 'React', 'TypeScript', 'Redis', 'PostgreSQL', 'Docker'],
    architecture: {
      pt: 'API Gateway → Serviço de Auth → Serviço de Chat (WebSocket) → Redis Pub/Sub → PostgreSQL',
      en: 'API Gateway → Auth Service → Chat Service (WebSocket) → Redis Pub/Sub → PostgreSQL',
      es: 'API Gateway → Servicio de Auth → Servicio de Chat (WebSocket) → Redis Pub/Sub → PostgreSQL',
    },
    highlights: {
      pt: [
        'Suporta 10.000+ conexões simultâneas',
        'Latência média de 50ms',
        'Sistema de presença online em tempo real',
        'Histórico de mensagens com busca full-text',
      ],
      en: [
        'Supports 10,000+ simultaneous connections',
        'Average latency of 50ms',
        'Real-time online presence system',
        'Message history with full-text search',
      ],
      es: [
        'Soporta 10,000+ conexiones simultáneas',
        'Latencia promedio de 50ms',
        'Sistema de presencia online en tiempo real',
        'Historial de mensajes con búsqueda full-text',
      ],
    },
    github: 'https://github.com/igortrentini/realtime-chat',
  },
  {
    id: 'api-analytics',
    title: 'Analytics Dashboard',
    description: {
      pt: 'Dashboard de analytics em tempo real com processamento de eventos e visualizações interativas',
      en: 'Real-time analytics dashboard with event processing and interactive visualizations',
      es: 'Dashboard de analytics en tiempo real con procesamiento de eventos y visualizaciones interactivas',
    },
    descriptionSimple: {
      pt: 'Uma ferramenta que mostra gráficos e estatísticas sobre o uso de aplicativos e websites',
      en: 'A tool that shows graphs and statistics about app and website usage',
      es: 'Una herramienta que muestra gráficos y estadísticas sobre el uso de aplicaciones y sitios web',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzEyNzc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Golang', 'TimescaleDB', 'Chart.js'],
    problem: {
      pt: 'Necessidade de processar e visualizar milhões de eventos de analytics com baixa latência',
      en: 'Need to process and visualize millions of analytics events with low latency',
      es: 'Necesidad de procesar y visualizar millones de eventos de analytics con baja latencia',
    },
    solution: {
      pt: 'Sistema de ingestão de dados em batch com Go, TimescaleDB para séries temporais, e agregações pré-computadas. Frontend React com visualizações otimizadas',
      en: 'Batch data ingestion system with Go, TimescaleDB for time series, and pre-computed aggregations. React frontend with optimized visualizations',
      es: 'Sistema de ingestión de datos en batch con Go, TimescaleDB para series temporales y agregaciones pre-computadas. Frontend React con visualizaciones optimizadas',
    },
    stack: ['Golang', 'React', 'TypeScript', 'TimescaleDB', 'Redis', 'Recharts'],
    architecture: {
      pt: 'Event Collector → Message Queue → Processing Service → TimescaleDB → API → Dashboard',
      en: 'Event Collector → Message Queue → Processing Service → TimescaleDB → API → Dashboard',
      es: 'Event Collector → Message Queue → Processing Service → TimescaleDB → API → Dashboard',
    },
    highlights: {
      pt: [
        'Processa 1M+ eventos por segundo',
        'Consultas com resposta em <100ms',
        'Gráficos interativos com drill-down',
        'Exportação de relatórios customizados',
      ],
      en: [
        'Processes 1M+ events per second',
        'Queries with <100ms response',
        'Interactive charts with drill-down',
        'Custom report export',
      ],
      es: [
        'Procesa 1M+ eventos por segundo',
        'Consultas con respuesta en <100ms',
        'Gráficos interactivos con drill-down',
        'Exportación de informes personalizados',
      ],
    },
    github: 'https://github.com/igortrentini/analytics-dashboard',
  },
  {
    id: 'task-automation',
    title: 'Task Automation Platform',
    description: {
      pt: 'Plataforma de automação de tarefas com interface visual drag-and-drop e integrações com APIs externas',
      en: 'Task automation platform with visual drag-and-drop interface and external API integrations',
      es: 'Plataforma de automatização de tarefas com interfaz visual drag-and-drop e integraciones com APIs externas',
    },
    descriptionSimple: {
      pt: 'Uma ferramenta que conecta diferentes aplicativos e automatiza tarefas repetitivas sem precisar programar',
      en: 'A tool that connects different apps and automates repetitive tasks without coding',
      es: 'Una herramienta que conecta diferentes aplicaciones y automatiza tarefas repetitivas sin necesidad de programar',
    },
    image: 'https://images.unsplash.com/photo-1563884705074-7c8b15f16295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYzMjE4NzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Golang', 'PostgreSQL', 'Docker'],
    problem: {
      pt: 'Usuários não-técnicos precisam automatizar workflows complexos entre diferentes serviços sem conhecimento de código',
      en: 'Non-technical users need to automate complex workflows between different services without coding knowledge',
      es: 'Usuarios no técnicos necesitan automatizar workflows complejos entre diferentes servicios sin conocimiento de código',
    },
    solution: {
      pt: 'Editor visual drag-and-drop com React Flow, engine de execução em Go com workers paralelos, e sistema de plugins para integrações',
      en: 'Visual drag-and-drop editor with React Flow, execution engine in Go with parallel workers, and plugin system for integrations',
      es: 'Editor visual drag-and-drop con React Flow, motor de ejecución en Go con workers paralelos y sistema de plugins para integraciones',
    },
    stack: ['Golang', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'React Flow'],
    architecture: {
      pt: 'Visual Editor → Workflow Parser → Job Queue → Worker Pool → Plugin System → External APIs',
      en: 'Visual Editor → Workflow Parser → Job Queue → Worker Pool → Plugin System → External APIs',
      es: 'Visual Editor → Workflow Parser → Job Queue → Worker Pool → Plugin System → External APIs',
    },
    highlights: {
      pt: [
        '50+ integrações prontas para uso',
        'Execuções paralelas com retry automático',
        'Logs detalhados e debugging visual',
        'Webhooks e triggers customizados',
      ],
      en: [
        '50+ ready-to-use integrations',
        'Parallel executions with automatic retry',
        'Detailed logs and visual debugging',
        'Custom webhooks and triggers',
      ],
      es: [
        '50+ integraciones listas para usar',
        'Ejecuciones paralelas con retry automático',
        'Logs detallados y debugging visual',
        'Webhooks y triggers personalizados',
      ],
    },
    github: 'https://github.com/igortrentini/task-automation',
  },
];