import { useEffect, useRef } from 'react';
import './index.css';

// ===================== STARS COMPONENT =====================
function Stars() {
  const stars = Array.from({ length: 160 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
  }));

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

// ===================== FLOATING PARTICLES =====================
function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? 'rgba(139,0,255,0.25)' : i % 3 === 1 ? 'rgba(0,212,255,0.2)' : 'rgba(255,255,255,0.08)',
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

// ===================== NAVBAR =====================
function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 40px',
        background: 'rgba(10,10,26,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(139,0,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontWeight: 900,
          fontSize: '1.3rem',
          background: 'linear-gradient(135deg, #8b00ff, #00d4ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '4px',
        }}
      >
        ✦ PLANETA
      </span>
      <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
        {[
          { label: 'INICIO', href: '#hero' },
          { label: '¿QUÉ ES?', href: '#about' },
          { label: 'BENEFICIOS', href: '#benefits' },
          { label: 'REGALOS', href: '#gifts' },
          { label: 'CONTACTO', href: '#contact' },
        ].map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ===================== HERO SECTION =====================
function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 20px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <FloatingParticles />

      {/* Glowing orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '5%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(139,0,255,0.18) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* Hero Image */}
      <div
        className="animate-on-scroll hero-image-glow"
        style={{ marginBottom: '16px', position: 'relative', zIndex: 1 }}
      >
        <img
          src="/images/planeta-hero.jpg"
          alt="Planeta Agency"
          style={{
            width: '220px',
            height: '220px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '3px solid rgba(139,0,255,0.6)',
            boxShadow: '0 0 40px rgba(139,0,255,0.5), 0 0 80px rgba(0,212,255,0.25), inset 0 0 40px rgba(0,0,0,0.5)',
          }}
        />
        {/* Orbit ring */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '270px', height: '270px',
          borderRadius: '50%',
          border: '1px solid rgba(139,0,255,0.35)',
          pointerEvents: 'none',
          animation: 'spin-slow 12s linear infinite',
        }} />
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '310px', height: '310px',
          borderRadius: '50%',
          border: '1px dashed rgba(0,212,255,0.2)',
          pointerEvents: 'none',
          animation: 'spin-slow 18s linear infinite reverse',
        }} />
      </div>

      {/* PLANETA Logo */}
      <h1
        className="neon-text animate-on-scroll"
        style={{
          fontSize: 'clamp(3.5rem, 10vw, 7rem)',
          fontWeight: 900,
          letterSpacing: '10px',
          color: '#ffffff',
          marginBottom: '8px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        PLANETA
      </h1>

      {/* Badge */}
      <div
        className="animate-on-scroll"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(139,0,255,0.15)',
          border: '1px solid rgba(139,0,255,0.4)',
          borderRadius: '50px',
          padding: '6px 20px',
          fontSize: '0.78rem',
          fontFamily: 'Orbitron, sans-serif',
          letterSpacing: '2px',
          color: '#00d4ff',
          marginBottom: '24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span style={{ color: '#8b00ff' }}>●</span>
        AGENCIA OFICIAL TIKTOK
        <span style={{ color: '#8b00ff' }}>●</span>
      </div>

      {/* Tagline */}
      <p
        className="animate-on-scroll"
        style={{
          fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
          fontWeight: 600,
          marginBottom: '16px',
          position: 'relative',
          zIndex: 1,
          color: 'rgba(255,255,255,0.95)',
        }}
      >
        🚀 Únete a la Agencia que lleva tu carrera al siguiente nivel
      </p>

      {/* Subtitle */}
      <p
        className="animate-on-scroll"
        style={{
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          color: 'rgba(255,255,255,0.65)',
          maxWidth: '620px',
          lineHeight: 1.8,
          marginBottom: '40px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Somos una agencia oficial de TikTok buscando streamers talentosos de Liga C para crecer juntos
      </p>

      {/* CTA Button */}
      <a
        href="#contact"
        className="btn-primary animate-on-scroll"
        style={{
          padding: '18px 48px',
          fontSize: '1rem',
          letterSpacing: '2px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        🚀 QUIERO UNIRME AHORA
      </a>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          opacity: 0.4,
          animation: 'bounce-soft 2s ease-in-out infinite',
        }}
      >
        <span style={{ fontSize: '0.65rem', fontFamily: 'Orbitron, sans-serif', letterSpacing: '2px' }}>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

// ===================== ABOUT SECTION =====================
function AboutSection() {
  const features = [
    { icon: '📈', label: 'Crecimiento', color: '#00d4ff' },
    { icon: '🌐', label: 'Comunidad', color: '#8b00ff' },
    { icon: '💰', label: 'Ganancias', color: '#FFD700' },
    { icon: '🛡️', label: 'Soporte 24/7', color: '#00d4ff' },
  ];

  return (
    <section id="about" style={{ padding: '100px 20px', position: 'relative' }}>
      <div className="glow-divider" style={{ maxWidth: '600px', marginBottom: '80px' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          className="animate-on-scroll"
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2
            className="section-title gradient-text"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '16px' }}
          >
            ¿QUÉ ES PLANETA?
          </h2>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto',
            background: 'linear-gradient(90deg, #8b00ff, #00d4ff)',
            borderRadius: '2px',
          }} />
        </div>

        <div
          className="glass-card animate-on-scroll"
          style={{ padding: '50px 40px', textAlign: 'center', marginBottom: '50px' }}
        >
          <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🪐</div>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            lineHeight: 2,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            <strong style={{ color: '#00d4ff' }}>Planeta</strong> es una agencia oficial dentro de{' '}
            <strong style={{ color: '#ff0050' }}>TikTok</strong> dedicada a impulsar el talento de streamers de{' '}
            <strong style={{ color: '#8b00ff' }}>Liga C</strong>. Te brindamos soporte, beneficios económicos y
            regalos de bienvenida para que puedas crecer en la plataforma de forma{' '}
            <strong style={{ color: '#00d4ff' }}>profesional y estable</strong>.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card animate-scale"
              style={{
                padding: '30px 20px',
                textAlign: 'center',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="icon-float" style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
                {f.icon}
              </div>
              <p style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '1px',
                color: f.color,
              }}>
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== BENEFITS SECTION =====================
function BenefitsSection() {
  const benefits = [
    {
      icon: '💰',
      title: 'GANANCIAS REALES',
      desc: 'Gana $100 USD o más mensualmente siendo parte de nuestra agencia',
      color: '#FFD700',
    },
    {
      icon: '🎁',
      title: 'REGALO DE BIENVENIDA',
      desc: 'Recibe diamantes o USD al unirte según tu nivel',
      color: '#00d4ff',
    },
    {
      icon: '📈',
      title: 'CRECIMIENTO GARANTIZADO',
      desc: 'Te ayudamos a subir de nivel con estrategias y soporte constante',
      color: '#8b00ff',
    },
    {
      icon: '🤝',
      title: 'COMUNIDAD Y SOPORTE',
      desc: 'Forma parte de una familia de streamers con respaldo 24/7',
      color: '#00d4ff',
    },
    {
      icon: '🏆',
      title: 'RECONOCIMIENTO',
      desc: 'Tu esfuerzo tiene recompensa. Entre más te dediques, más beneficios recibes',
      color: '#FFD700',
    },
    {
      icon: '🔓',
      title: 'SIN ATADURAS IMPOSIBLES',
      desc: 'Condiciones claras, justas y completamente negociables',
      color: '#8b00ff',
    },
  ];

  return (
    <section id="benefits" style={{ padding: '100px 20px', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(139,0,255,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '70px' }}>
          <h2
            className="section-title gradient-text"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '16px' }}
          >
            BENEFICIOS EXCLUSIVOS
          </h2>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto 20px',
            background: 'linear-gradient(90deg, #8b00ff, #00d4ff)',
            borderRadius: '2px',
          }} />
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>
            Todo lo que obtienes al unirte a la familia Planeta
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              className="glass-card animate-on-scroll shimmer"
              style={{
                padding: '36px 30px',
                borderLeft: `3px solid ${b.color}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow accent */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: `radial-gradient(circle, ${b.color}22 0%, transparent 70%)`,
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />

              <div style={{ fontSize: '2.8rem', marginBottom: '16px' }}>{b.icon}</div>
              <h3 style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 800,
                letterSpacing: '2px',
                color: b.color,
                marginBottom: '12px',
              }}>
                {b.title}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== GIFTS SECTION =====================
function GiftsSection() {
  const levels = [
    {
      emoji: '🦁',
      level: 'C1 - C2',
      badge: 'NIVEL ÉLITE',
      gift: 'Leoncito de 4,888 diamantes O 50 USD',
      note: '¡Todo es negociable!',
      cls: 'level-c1',
      badgeColor: '#FFD700',
      glow: 'rgba(255,215,0,0.15)',
    },
    {
      emoji: '⭐',
      level: 'C3',
      badge: 'NIVEL SILVER',
      gift: '2,150 a 3,000 diamantes O 20 USD',
      note: 'Negociable',
      cls: 'level-c3',
      badgeColor: '#C0C0C0',
      glow: 'rgba(192,192,192,0.1)',
    },
    {
      emoji: '💎',
      level: 'C4',
      badge: 'NIVEL BLUE',
      gift: 'Generalmente 1,000 diamantes',
      note: '',
      cls: 'level-c4',
      badgeColor: '#00d4ff',
      glow: 'rgba(0,212,255,0.1)',
    },
    {
      emoji: '🌟',
      level: 'C5',
      badge: 'NIVEL STARTER',
      gift: '500 a 1,000 diamantes',
      note: '',
      cls: 'level-c5',
      badgeColor: '#8b00ff',
      glow: 'rgba(139,0,255,0.1)',
    },
  ];

  return (
    <section id="gifts" style={{ padding: '100px 20px', position: 'relative' }}>
      <div className="glow-divider" style={{ maxWidth: '600px', marginBottom: '80px' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2
            className="section-title gradient-text"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '12px' }}
          >
            🎁 ¿Cuánto puedes ganar al unirte?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: '8px' }}>
            Según tu nivel en TikTok Liga C, estos son tus beneficios de bienvenida:
          </p>
          <div style={{
            width: '80px', height: '3px', margin: '20px auto 0',
            background: 'linear-gradient(90deg, #8b00ff, #00d4ff)',
            borderRadius: '2px',
          }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          marginBottom: '50px',
        }}>
          {levels.map((lv, i) => (
            <div
              key={i}
              className={`glass-card animate-scale ${lv.cls}`}
              style={{
                padding: '36px 24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: lv.glow
                  ? `linear-gradient(135deg, ${lv.glow}, rgba(255,255,255,0.02))`
                  : undefined,
              }}
            >
              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: `${lv.badgeColor}22`,
                border: `1px solid ${lv.badgeColor}55`,
                borderRadius: '20px',
                padding: '3px 10px',
                fontSize: '0.6rem',
                fontFamily: 'Orbitron, sans-serif',
                color: lv.badgeColor,
                letterSpacing: '1px',
              }}>
                {lv.badge}
              </div>

              <div style={{ fontSize: '3.5rem', marginBottom: '12px' }}>{lv.emoji}</div>
              <h3 style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '1.3rem',
                fontWeight: 800,
                color: lv.badgeColor,
                marginBottom: '16px',
                letterSpacing: '2px',
              }}>
                {lv.level}
              </h3>

              <div style={{
                background: 'rgba(0,0,0,0.25)',
                borderRadius: '10px',
                padding: '16px',
                marginBottom: lv.note ? '12px' : '0',
              }}>
                <p style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}>
                  💎 {lv.gift}
                </p>
              </div>

              {lv.note && (
                <p style={{
                  color: lv.badgeColor,
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}>
                  ✓ {lv.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Special Bonus Card */}
        <div className="bonus-card animate-on-scroll" style={{ padding: '40px 36px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '3rem', flexShrink: 0, animation: 'bounce-soft 2s ease-in-out infinite' }}>⚡</div>
            <div>
              <h3 style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '1rem',
                fontWeight: 800,
                color: '#FFD700',
                letterSpacing: '2px',
                marginBottom: '14px',
              }}>
                BONO ESPECIAL — REGALO AUMENTADO
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1rem',
                lineHeight: 1.8,
              }}>
                Si eres un streamer destacado, llevas cerca de{' '}
                <strong style={{ color: '#00d4ff' }}>25 días en vivo</strong>, eres fácil de tratar y{' '}
                <strong style={{ color: '#FFD700' }}>NO solicitas boletos dorados</strong>, podemos{' '}
                <strong style={{ color: '#8b00ff', fontSize: '1.05rem' }}>AUMENTAR tu regalo de bienvenida</strong>.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '16px',
                background: 'rgba(255,215,0,0.1)',
                border: '1px solid rgba(255,215,0,0.3)',
                borderRadius: '8px',
                padding: '10px 18px',
              }}>
                <span style={{ color: '#FFD700', fontSize: '1.1rem' }}>🌟</span>
                <span style={{
                  fontSize: '0.8rem',
                  color: '#FFD700',
                  fontFamily: 'Orbitron, sans-serif',
                  letterSpacing: '1px',
                }}>
                  CONDICIÓN CLAVE: NO solicitar boletos dorados
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== REQUIREMENTS SECTION =====================
function RequirementsSection() {
  const reqs = [
    { icon: '✅', text: 'Ser streamer activo en TikTok' },
    { icon: '✅', text: 'Pertenecer a Liga C (C1, C2, C3, C4 o C5)' },
    { icon: '✅', text: 'Tener actitud positiva y disposición para crecer' },
    { icon: '✅', text: 'Compromiso con tus horas de live' },
    { icon: '✅', text: 'NO solicitar boletos dorados' },
    { icon: '✅', text: 'No estar afiliado/a a ninguna otra agencia de TikTok' },
    { icon: '✅', text: 'Haber realizado más de 7 días de directos en el mes actual' },
    { icon: '✅', text: 'Ser fácil de tratar y tener buena comunicación' },
  ];

  return (
    <section id="requirements" style={{ padding: '100px 20px', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '30%', right: '-100px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            className="section-title gradient-text"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '16px' }}
          >
            REQUISITOS PARA UNIRTE
          </h2>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto 16px',
            background: 'linear-gradient(90deg, #8b00ff, #00d4ff)',
            borderRadius: '2px',
          }} />
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>
            ¿Qué necesitas para ser parte de <span style={{ color: '#00d4ff' }}>PLANETA</span>?
          </p>
        </div>

        <div>
          {reqs.map((req, i) => (
            <div
              key={i}
              className="check-item animate-on-scroll"
              style={{ '--transition-delay': `${i * 0.08}s` } as React.CSSProperties}
            >
              <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{req.icon}</span>
              <span style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1rem',
                lineHeight: 1.5,
              }}>
                {req.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== HOW TO JOIN SECTION =====================
function HowToJoinSection() {
  const steps = [
    {
      number: '01',
      icon: '📱',
      title: 'Contáctanos',
      desc: 'Escríbenos por Telegram o TikTok. Estamos disponibles para atenderte.',
      color: '#8b00ff',
    },
    {
      number: '02',
      icon: '🎤',
      title: 'Cuéntanos tu historia',
      desc: 'Dinos tu nivel y experiencia como streamer en TikTok.',
      color: '#00d4ff',
    },
    {
      number: '03',
      icon: '🤝',
      title: 'Negociamos juntos',
      desc: 'Acordamos tu regalo de bienvenida según tu perfil y nivel.',
      color: '#8b00ff',
    },
    {
      number: '04',
      icon: '🚀',
      title: '¡Bienvenido a Planeta!',
      desc: '¡Ya eres parte de la familia! Empieza a crecer con nosotros.',
      color: '#00d4ff',
    },
  ];

  return (
    <section id="how" style={{ padding: '100px 20px', position: 'relative' }}>
      <div className="glow-divider" style={{ maxWidth: '600px', marginBottom: '80px' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '70px' }}>
          <h2
            className="section-title gradient-text"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '16px' }}
          >
            CÓMO UNIRSE
          </h2>
          <div style={{
            width: '80px', height: '3px', margin: '0 auto',
            background: 'linear-gradient(90deg, #8b00ff, #00d4ff)',
            borderRadius: '2px',
          }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          position: 'relative',
        }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card animate-on-scroll"
              style={{
                padding: '36px 24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Step number bg */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-5px',
                fontSize: '5rem',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 900,
                color: `${step.color}10`,
                lineHeight: 1,
                userSelect: 'none',
              }}>
                {step.number}
              </div>

              {/* Step number badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${step.color}33, ${step.color}11)`,
                border: `2px solid ${step.color}66`,
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: step.color,
                marginBottom: '16px',
              }}>
                {step.number}
              </div>

              <div style={{ fontSize: '2.8rem', marginBottom: '16px' }}>{step.icon}</div>

              <h3 style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: step.color,
                letterSpacing: '1.5px',
                marginBottom: '12px',
              }}>
                {step.title}
              </h3>

              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
              }}>
                {step.desc}
              </p>

              {/* Connector line (visual) */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-13px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  display: 'none',
                }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline connector */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0',
          marginTop: '30px',
          padding: '0 20px',
          overflow: 'hidden',
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{
                width: '12px', height: '12px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`,
                boxShadow: `0 0 10px ${step.color}88`,
                flexShrink: 0,
              }} />
              {i < steps.length - 1 && (
                <div style={{
                  flex: 1, height: '2px',
                  background: `linear-gradient(90deg, ${step.color}88, ${steps[i + 1].color}88)`,
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== CONTACT SECTION =====================
function ContactSection() {
  return (
    <section id="contact" style={{ padding: '120px 20px', position: 'relative' }}>
      {/* Large glow background */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(139,0,255,0.12) 0%, rgba(0,212,255,0.08) 50%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="animate-on-scroll" style={{ marginBottom: '60px' }}>
          {/* Stars decoration */}
          <p style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.8rem',
            letterSpacing: '4px',
            color: 'rgba(139,0,255,0.8)',
            marginBottom: '20px',
          }}>
            ✦ ✦ ✦
          </p>

          <h2
            className="section-title gradient-text"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '20px' }}
          >
            ¿LISTO PARA DESPEGAR? 🚀
          </h2>

          <div style={{
            width: '100px', height: '3px', margin: '0 auto 24px',
            background: 'linear-gradient(90deg, #8b00ff, #00d4ff)',
            borderRadius: '2px',
          }} />

          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            lineHeight: 1.8,
            maxWidth: '560px',
            margin: '0 auto',
          }}>
            No esperes más. Únete a <strong style={{ color: '#00d4ff' }}>Planeta</strong> y lleva tu carrera al siguiente nivel
          </p>
        </div>

        {/* Contact Buttons */}
        <div
          className="animate-on-scroll"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          {/* Telegram Button */}
          <a
            href="https://t.me/EBMG360"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.open('https://t.me/EBMG360', '_blank')}
            className="btn-telegram"
            style={{
              padding: '20px 48px',
              fontSize: '1.05rem',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 700,
              letterSpacing: '1.5px',
              minWidth: '320px',
              justifyContent: 'center',
            }}
          >
            {/* Telegram SVG Icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
            </svg>
            📱 Contáctame en Telegram
          </a>

          {/* TikTok Button */}
          <a
            href="https://www.tiktok.com/@ntl171999"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.open('https://www.tiktok.com/@ntl171999', '_blank')}
            className="btn-tiktok"
            style={{
              padding: '20px 48px',
              fontSize: '1.05rem',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 700,
              letterSpacing: '1.5px',
              minWidth: '320px',
              justifyContent: 'center',
            }}
          >
            {/* TikTok SVG Icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.77 1.52V6.7a4.85 4.85 0 01-1-.01z"/>
            </svg>
            🎵 Sígueme en TikTok
          </a>
        </div>

        {/* Additional info */}
        <div
          className="animate-on-scroll"
          style={{
            marginTop: '60px',
            padding: '30px',
            background: 'rgba(139,0,255,0.06)',
            border: '1px solid rgba(139,0,255,0.2)',
            borderRadius: '16px',
          }}
        >
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
          }}>
            🌐 Te respondemos rápido — normalmente en menos de{' '}
            <strong style={{ color: '#00d4ff' }}>24 horas</strong>. Cuéntanos tu nivel de Liga C
            y negociamos los mejores beneficios para ti.
          </p>
        </div>
      </div>
    </section>
  );
}

// ===================== FOOTER =====================
function Footer() {
  return (
    <footer
      className="footer-bg"
      style={{
        padding: '60px 20px 30px',
        borderTop: '1px solid rgba(139,0,255,0.2)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top footer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #8b00ff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '4px',
              marginBottom: '12px',
            }}>
              ✦ PLANETA
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.85rem',
              lineHeight: 1.7,
            }}>
              La agencia oficial de TikTok que impulsa el talento de streamers Liga C.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#00d4ff',
              marginBottom: '16px',
            }}>
              NAVEGACIÓN
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Inicio', href: '#hero' },
                { label: '¿Qué es Planeta?', href: '#about' },
                { label: 'Beneficios', href: '#benefits' },
                { label: 'Regalos', href: '#gifts' },
                { label: 'Requisitos', href: '#requirements' },
                { label: 'Contacto', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#00d4ff',
              marginBottom: '16px',
            }}>
              CONTÁCTANOS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://t.me/EBMG360"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0088cc')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0088cc">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
                </svg>
                @EBMG360 en Telegram
              </a>
              <a
                href="https://www.tiktok.com/@ntl171999"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ff0050')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff0050">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.77 1.52V6.7a4.85 4.85 0 01-1-.01z"/>
                </svg>
                @ntl171999 en TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="glow-divider" style={{ marginBottom: '24px' }} />

        {/* Bottom footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: '0.8rem',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '1px',
          }}>
            © 2025 Planeta Agency — Todos los derechos reservados
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.25)',
            fontSize: '0.75rem',
          }}>
            Agencia Oficial TikTok • Liga C Streamers
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===================== SCROLL ANIMATION HOOK =====================
function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-left, .animate-right, .animate-scale'
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);
}

// ===================== MAIN APP =====================
export default function App() {
  useScrollAnimation();

  return (
    <div
      style={{
        background: '#0a0a1a',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Global Stars Background */}
      <Stars />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <GiftsSection />
        <RequirementsSection />
        <HowToJoinSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
