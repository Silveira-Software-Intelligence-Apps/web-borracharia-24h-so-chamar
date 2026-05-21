"use client";
import WhatsAppButton from '../components/WhatsAppButton';
import CinematicMotion from '../components/CinematicMotion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal:not(.motion-reveal)').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="cinematic-shell" style={{ background: '#0a0a0a', color: '#f5f5f5' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"LocalBusiness","name":"Borracharia 24h Só Chamar","description":"Atendimento rápido, preço justo e resultado com garantia. A Borracharia 24h Só Chamar em Osasco resolve para você hoje mesmo.","telephone":"+555511967342602","address":{"@type":"PostalAddress","addressLocality":"Osasco","addressCountry":"BR"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.2","bestRating":"5","reviewCount":"52"}}' }} />
      <CinematicMotion />

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#0a0a0ae8', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid #222222', height: '68px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1rem', color: '#000' }}>B</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f5f5f5' }}>Borracharia 24h Só Chamar</div>
          </div>
          <div className="hide-mobile" style={{ display: 'flex', gap: '36px', fontSize: '0.875rem', fontWeight: 500 }}>
            <a href="#servicos" style={{ color: '#999999', transition: 'color .15s' }}>Serviços</a>
            <a href="#galeria" style={{ color: '#999999', transition: 'color .15s' }}>Galeria</a>
            <a href="#sobre" style={{ color: '#999999', transition: 'color .15s' }}>Sobre</a>
            <a href="#avaliacoes" style={{ color: '#999999', transition: 'color .15s' }}>Avaliações</a>
            <a href="#faq" style={{ color: '#999999', transition: 'color .15s' }}>FAQ</a>
            <a href="#contato" style={{ color: '#999999', transition: 'color .15s' }}>Contato</a>
          </div>
          <a href="https://wa.me/555511967342602?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            WhatsApp
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="cinematic-hero" data-cinematic-hero style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '68px', overflow: 'hidden' }}>
        <div data-hero-bg className="motion-parallax" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, #0a0a0af8 0%, #0a0a0aee 50%, #0a0a0acc 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, #0a0a0a, transparent)' }} />
        <div data-hero-copy style={{ position: 'relative', zIndex: 10, maxWidth: '1160px', margin: '0 auto', padding: '80px 28px', width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#181818', border: '1px solid #f9731633', borderRadius: '50px', padding: '6px 14px', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f97316', display: 'inline-block' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f97316', textTransform: 'uppercase', letterSpacing: '.08em' }}>Borracharia · Osasco</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, lineHeight: 1.0, marginBottom: '24px', color: '#f5f5f5', maxWidth: '700px' }}>
            Borracharia 24h Só Chamar: Solicitar orcamento rapido em Osasco
          </h1>
          <p className="hero-sub" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)', color: '#999999', maxWidth: '540px', marginBottom: '44px', lineHeight: 1.75 }}>
            Borracharia em Osasco com atendimento direto, prova local e caminho rapido para contato. Use a reputacao de 4.2/5 no Google com 40 avaliacoes como prova no topo da pagina.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://wa.me/555511967342602?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa" style={{ fontSize: '1.05rem', padding: '17px 36px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Pedir orcamento
            </a>
            <a href="#servicos" className="btn-outline" style={{ fontSize: '1.05rem', padding: '15px 34px' }}>Ver especialidades ↓</a>
          </div>
          <div className="hero-badge" style={{ marginTop: '48px', display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#181818', border: '1px solid #222222', borderRadius: '50px', padding: '10px 20px' }}>
            <span style={{ color: '#fbbf24', fontSize: '1rem', letterSpacing: '2px' }}>★★★★☆</span>
            <span style={{ width: '1px', height: '16px', background: '#222222' }} />
            <span style={{ color: '#f5f5f5', fontSize: '0.9rem', fontWeight: 600 }}>4.2 no Google</span>
          </div>
        </div>
      </section>

      {/* ── SOBRE + IMAGEM ── */}
      <section id="sobre" className="story-beat" data-story-beat="sobre" style={{ padding: '104px 28px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="grid-2-responsive">
          <div className="reveal motion-reveal">
            <span className="section-label">Confiança</span>
            <h2 className="section-title">Experiência que Resolve</h2>
            <p style={{ color: '#999999', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '32px' }}>
              <strong style={{ color: '#f5f5f5' }}>Borracharia 24h Só Chamar</strong> — Na Borracharia 24h Só Chamar, Borracharia é feito com responsabilidade e transparência, aqui em Osasco. Cada serviço é executado com atenção aos detalhes. Avaliação 4.2★ no Google.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <div key={0} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#f9731618', border: '1px solid #f9731644', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: '#999999', fontSize: '0.95rem' }}>Diagnóstico rápido e preciso</span>
              </div>
              <div key={1} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#f9731618', border: '1px solid #f9731644', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: '#999999', fontSize: '0.95rem' }}>Peças de qualidade com garantia</span>
              </div>
              <div key={2} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#f9731618', border: '1px solid #f9731644', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: '#999999', fontSize: '0.95rem' }}>Preço justo e orçamento transparente</span>
              </div>
              <div key={3} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#f9731618', border: '1px solid #f9731644', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ color: '#999999', fontSize: '0.95rem' }}>Atendimento de emergência disponível</span>
              </div>
            </div>
            <a href="https://wa.me/555511967342602?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa">Pedir orcamento →</a>
          </div>
          <div className="reveal motion-reveal motion-parallax reveal-delay-2" style={{ position: 'relative' }}>
            <div className="cinematic-frame" style={{ borderRadius: '24px', overflow: 'hidden', height: '520px', boxShadow: '0 32px 64px #0a0a0a99' }}>
              <img src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=900&q=80&auto=format&fit=crop" alt="Borracharia 24h Só Chamar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a88, transparent 60%)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: '#181818ee', backdropFilter: 'blur(12px)', border: '1px solid #222222', borderRadius: '16px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '1.8rem' }}>⭐</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#f5f5f5' }}>4.2</div>
                <div style={{ fontSize: '0.75rem', color: '#999999' }}>Avaliação Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES ── */}
      <section id="avaliacoes" className="story-beat" data-story-beat="avaliacoes" style={{ background: '#111111', padding: '104px 28px', borderTop: '1px solid #222222' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-label">Quem confia</span>
            <h2 className="section-title">Clientes Satisfeitos</h2>
            <p style={{ color: '#999999', fontSize: '1rem', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>Resultado real, avaliado por quem já precisou.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="review-card reveal motion-reveal reveal-delay-1">
          <div style={{ color: '#f97316', fontSize: '1rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
          <p style={{ color: '#999999', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"Levei o carro na Borracharia 24h Só Chamar e resolveram rápido. Orçamento justo, sem surpresa na hora de pagar. Virei cliente fiel."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #222222', paddingTop: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #f9731644, #ea580c44)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>🧑</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f5f5f5' }}>Ricardo S.</div>
              <div style={{ fontSize: '0.75rem', color: '#f97316', display: 'flex', alignItems: 'center', gap: '4px' }}>✓ Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="review-card reveal motion-reveal reveal-delay-2">
          <div style={{ color: '#f97316', fontSize: '1rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
          <p style={{ color: '#999999', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"Confiança é tudo nesse ramo e a equipe da Borracharia 24h Só Chamar passou credibilidade desde o primeiro contato. Melhor oficina em Osasco."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #222222', paddingTop: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #f9731644, #ea580c44)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>🧑‍🔧</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f5f5f5' }}>Marcos A.</div>
              <div style={{ fontSize: '0.75rem', color: '#f97316', display: 'flex', alignItems: 'center', gap: '4px' }}>✓ Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="review-card reveal motion-reveal reveal-delay-3">
          <div style={{ color: '#f97316', fontSize: '1rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★</div>
          <p style={{ color: '#999999', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"Atendimento rápido, mecânico honesto e peças de qualidade. Recomendo para quem precisa de confiança."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #222222', paddingTop: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #f9731644, #ea580c44)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>👩</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f5f5f5' }}>Patricia F.</div>
              <div style={{ fontSize: '0.75rem', color: '#f97316', display: 'flex', alignItems: 'center', gap: '4px' }}>✓ Cliente verificado</div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="story-beat" data-story-beat="contato" style={{ background: '#111111', padding: '104px 28px', borderTop: '1px solid #222222' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Precisa de ajuda?</span>
            <h2 className="section-title">Fale Agora</h2>
            <p style={{ color: '#999999', maxWidth: '460px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Orçamento rápido, sem compromisso. Atendemos em Osasco e região.
            </p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            const n = e.target.nome.value.trim();
            const f = e.target.fone.value.trim();
            const m = e.target.msg.value.trim();
            const text = encodeURIComponent('Olá Borracharia 24h Só Chamar! Vi o site e gostaria de um orçamento. Nome: ' + n + ', Tel: ' + f + (m ? ', Mensagem: ' + m : ''));
            window.open('https://wa.me/555511967342602' + ('5511967342602' ? '?text=' + text : ''), '_blank');
          }} style={{ display: 'grid', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-2-responsive">
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f5f5f5', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Seu nome *</label>
                <input name="nome" required placeholder="Ex: João Silva" style={{ width: '100%', padding: '14px 18px', background: '#181818', border: '1px solid #222222', borderRadius: '12px', color: '#f5f5f5', fontSize: '0.95rem', outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor='#f97316'} onBlur={e => e.target.style.borderColor='#222222'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f5f5f5', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Telefone / WhatsApp *</label>
                <input name="fone" required placeholder="(11) 9 9999-0000" style={{ width: '100%', padding: '14px 18px', background: '#181818', border: '1px solid #222222', borderRadius: '12px', color: '#f5f5f5', fontSize: '0.95rem', outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor='#f97316'} onBlur={e => e.target.style.borderColor='#222222'} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f5f5f5', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Mensagem (opcional)</label>
              <textarea name="msg" rows={4} placeholder="Descreva o que você precisa..." style={{ width: '100%', padding: '14px 18px', background: '#181818', border: '1px solid #222222', borderRadius: '12px', color: '#f5f5f5', fontSize: '0.95rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor='#f97316'} onBlur={e => e.target.style.borderColor='#222222'} />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '4px 0 8px' }}>
              <input type="checkbox" name="lgpd" id="lgpd" required style={{ marginTop: '3px', accentColor: '#f97316', cursor: 'pointer', flexShrink: 0 }} />
              <label htmlFor="lgpd" style={{ fontSize: '0.78rem', color: '#999999', lineHeight: 1.5, cursor: 'pointer' }}>Concordo com o uso dos meus dados para contato comercial, conforme a <strong style={{ color: '#f5f5f5' }}>LGPD (Lei 13.709/2018)</strong>. Seus dados não serão compartilhados com terceiros.</label>
            </div>
            <div style={{ textAlign: 'center', paddingTop: '8px' }}>
              <button type="submit" className="btn-wa" style={{ fontSize: '1.05rem', padding: '17px 48px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Enviar pelo WhatsApp
              </button>
              <p style={{ marginTop: '12px', fontSize: '0.8rem', color: '#999999' }}>✓ Resposta rápida &nbsp;&middot;&nbsp; ✓ Sem compromisso &nbsp;&middot;&nbsp; ✓ 100% gratuito</p>
            </div>
          </form>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="story-beat" data-story-beat="faq" style={{ padding: '104px 28px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Dúvidas rápidas</span>
            <h2 className="section-title">Perguntas Comuns</h2>
          </div>
          <div>
        <div className="faq-item reveal motion-reveal reveal-delay-1">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Vocês fazem orçamento gratuito?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Sim! O orçamento é 100% gratuito e sem compromisso. Traga o veículo ou envie os dados pelo WhatsApp.</div>
        </div>
        <div className="faq-item reveal motion-reveal reveal-delay-2">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Qual o prazo para atendimento?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Serviços rápidos no mesmo dia. Revisões completas com prazo combinado no orçamento.</div>
        </div>
        <div className="faq-item reveal motion-reveal reveal-delay-1">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Os serviços têm garantia?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Todos os serviços têm garantia. Trabalhamos com peças originais e de qualidade.</div>
        </div>
        <div className="faq-item reveal motion-reveal reveal-delay-2">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Quais formas de pagamento?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Aceitamos dinheiro, cartão, PIX e parcelamos no cartão em até 6x sem juros.</div>
        </div>
        <div className="faq-item reveal motion-reveal reveal-delay-1">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Vocês atendem por agendamento?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Atendemos com e sem agendamento, mas para serviços maiores recomendamos agendar.</div>
        </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: '#999999', marginBottom: '20px', fontSize: '0.95rem' }}>Sua dúvida não está aqui?</p>
            <a href="https://wa.me/555511967342602?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-outline">Perguntar pelo WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="story-beat" data-story-beat="servicos" style={{ padding: '104px 28px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-label">O que fazemos</span>
            <h2 className="section-title">Serviços Automotivos</h2>
            <p style={{ color: '#999999', maxWidth: '500px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Diagnóstico, reparo e manutenção com garantia.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="card reveal motion-reveal reveal-delay-1">
          <div className="card-icon">🔍</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px' }}>Fornecedor de produtos de borracha</h3>
          <p style={{ fontSize: '0.875rem', color: '#999999', lineHeight: 1.7 }}>Fornecedor de produtos de borracha com atendimento direto da Borracharia 24h Só Chamar. em Osasco</p>
        </div>
        <div className="card reveal motion-reveal reveal-delay-2">
          <div className="card-icon">🔧</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5f5f5', marginBottom: '8px' }}>Borracharia</h3>
          <p style={{ fontSize: '0.875rem', color: '#999999', lineHeight: 1.7 }}>Borracharia pensado para quem procura Borracharia em Osasco.</p>
        </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="https://wa.me/555511967342602?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa">Falar sobre um serviço →</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="divider-gradient" />
      <section className="story-beat" data-story-beat="stats" style={{ background: '#111111', borderBottom: '1px solid #222222' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', divideX: '1px solid #222222' }}>
        <div className="stat-card reveal motion-reveal">
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#f97316', lineHeight: 1 }}>15+</div>
          <div style={{ width: '32px', height: '2px', background: '#f97316', margin: '12px auto', borderRadius: '2px' }} />
          <div style={{ fontSize: '0.875rem', color: '#999999' }}>Anos no mercado</div>
        </div>
        <div className="stat-card reveal motion-reveal">
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#f97316', lineHeight: 1 }}>10k+</div>
          <div style={{ width: '32px', height: '2px', background: '#f97316', margin: '12px auto', borderRadius: '2px' }} />
          <div style={{ fontSize: '0.875rem', color: '#999999' }}>Veículos atendidos</div>
        </div>
        <div className="stat-card reveal motion-reveal">
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#f97316', lineHeight: 1 }}>4.2★</div>
          <div style={{ width: '32px', height: '2px', background: '#f97316', margin: '12px auto', borderRadius: '2px' }} />
          <div style={{ fontSize: '0.875rem', color: '#999999' }}>Google (40 avaliações)</div>
        </div>
        </div>
      </section>
      <div className="divider-gradient" />

      {/* ── CTA FINAL ── */}
      <section className="story-beat cinematic-cta" data-story-beat="cta-final" style={{ position: 'relative', overflow: 'hidden', padding: '120px 28px' }}>
        <div className="motion-parallax" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=900&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0a0af0 0%, #0a0a0acc 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Resolva agora</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', color: '#f5f5f5' }}>
            Fale com a <span style={{ color: '#f97316' }}>Borracharia 24h Só Chamar</span><br />agora mesmo
          </h2>
          <p style={{ color: '#999999', fontSize: '1.1rem', marginBottom: '44px', lineHeight: 1.7 }}>
            Borracharia direto no WhatsApp, sem enrolação. Na Borracharia 24h Só Chamar em Osasco, a resposta é rápida.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://wa.me/555511967342602?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa" style={{ fontSize: '1.1rem', padding: '18px 44px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Pedir orcamento
            </a>
            
          </div>
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section id="galeria" className="story-beat" data-story-beat="galeria" style={{ background: '#111111', padding: '104px 28px', borderTop: '1px solid #222222' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Estrutura</span>
            <h2 className="section-title">Nossa Oficina</h2>
            <p style={{ color: '#999999', maxWidth: '480px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Equipamentos modernos e ambiente organizado.
            </p>
          </div>
          <div className="gallery-grid">
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-1">
          <img src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=80&auto=format&fit=crop" alt="Borracharia 24h Só Chamar — foto 1" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-2">
          <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80&auto=format&fit=crop" alt="Borracharia 24h Só Chamar — foto 2" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-3">
          <img src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80&auto=format&fit=crop" alt="Borracharia 24h Só Chamar — foto 3" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-1">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80&auto=format&fit=crop" alt="Borracharia 24h Só Chamar — foto 4" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-2">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop" alt="Borracharia 24h Só Chamar — foto 5" loading="lazy" />
        </div>
        <div className="gallery-item cinematic-frame reveal motion-reveal reveal-delay-3">
          <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80&auto=format&fit=crop" alt="Borracharia 24h Só Chamar — foto 6" loading="lazy" />
        </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0a0a0a', borderTop: '1px solid #222222', padding: '64px 28px 32px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #222222' }} className="grid-responsive">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.1rem', color: '#000' }}>B</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f5f5f5' }}>Borracharia 24h Só Chamar</div>
              </div>
              <p style={{ color: '#999999', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: '280px' }}>
                Borracharia em Osasco. Qualidade e confiança em cada atendimento.
              </p>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <a href="https://wa.me/555511967342602?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#25d36622', border: '1px solid #25d36644', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25d366', fontSize: '0.9rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                </a>
                
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f5f5f5', marginBottom: '18px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '.1em' }}>Menu</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[['#', 'Início'], ['#servicos', 'Serviços'], ['#galeria', 'Galeria'], ['#sobre', 'Sobre'], ['#avaliacoes', 'Avaliações'], ['#faq', 'FAQ'], ['#contato', 'Contato']].map(([href, label]) => (
                  <a key={label} href={href} style={{ color: '#999999', fontSize: '0.875rem', transition: 'color .15s' }}>{label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f5f5f5', marginBottom: '18px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '.1em' }}>Contato</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a href="https://wa.me/555511967342602?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" style={{ color: '#999999', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#25d366' }}>📱</span> 5511967342602</a>
                <div style={{ color: '#999999', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#f97316' }}>📍</span> Osasco</div>
                
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: '#999999', fontSize: '0.8rem' }}>© 2026 Borracharia 24h Só Chamar. Todos os direitos reservados.</p>
            <p style={{ color: '#999999', fontSize: '0.75rem', opacity: .4 }}>Site criado por Lead Machine</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
