import React from 'react';

interface EnvelopeCardProps {
  title: string;
  description: string;
  hueRotate?: string;
}

export const EnvelopeCard = ({ title, description, hueRotate = '0deg' }: EnvelopeCardProps) => {
  return (
    <>
      <style>{`
        .env-card {
          position: relative;
          --card-w: min(280px, 85vw);
          --card-h: 300px;
          height: var(--card-h);
          width: var(--card-w);
          margin: 0 auto;
        }
        .env-card .boxshadow {
          position: absolute;
          height: 100%;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          transform: scale(0.8);
          box-shadow: rgba(255, 255, 255, 0.05) 0px 20px 50px 0px;
          transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }
        .env-card .main {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: linear-gradient(0deg, #0a0a0a 0%, rgba(255, 255, 255, 0.45) 55%, #0a0a0a 100%);
          position: relative;
          clip-path: polygon(0 0, 100% 0, 100% 40px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 40px 100%, 0 calc(100% - 40px));
          box-shadow: rgba(255, 255, 255, 0.05) 0px 5px 20px 0px;
          transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }
        .env-card .main .top {
          position: absolute;
          top: 0px;
          left: 0;
          width: 0px;
          height: 0px;
          z-index: 2;
          border-top: calc(var(--card-w) / 2) solid #000000;
          border-left: calc(var(--card-w) / 2) solid transparent;
          border-right: calc(var(--card-w) / 2) solid transparent;
          transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }
        .env-card .main .side {
          position: absolute;
          width: 100%;
          top: 0;
          transform: translateX(-50%);
          height: 101%;
          background: #000000;
          clip-path: polygon(0% 0%, 50% 0, 95% 45%, 100% 100%, 0% 100%);
          transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;
        }
        .env-card .main .left { left: 0; }
        .env-card .main .right { right: 0; transform: translateX(50%) scale(-1, 1); }
        
        .env-card .main .cover-title {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 60px;
          z-index: 5;
          font-weight: 600;
          color: white;
          text-align: center;
          transition: all 0.3s;
          pointer-events: none;
        }

        .env-card .main .inner-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          opacity: 0;
          z-index: -1;
          transform: translateY(20px);
          transition: all 0.3s ease-out 0s;
        }

        .env-card:hover .boxshadow {
          transform: scale(1);
          box-shadow: rgba(255, 255, 255, 0.15) 0px 25px 80px 0px;
        }
        .env-card:hover .main {
          transform: scale(1.05);
        }
        .env-card:hover .main .top { top: calc(var(--card-w) / -2); }
        .env-card:hover .main .left { left: calc(var(--card-w) / -2); transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s; }
        .env-card:hover .main .right { right: calc(var(--card-w) / -2); transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s; }
        .env-card:hover .main .cover-title { opacity: 0; }
        .env-card:hover .main .inner-content {
          opacity: 1;
          transform: translateY(0);
          z-index: 1;
          transition: all 0.4s ease-out 0.2s;
        }
      `}</style>

      <div className="env-card cursor-pointer group">
        <div className="boxshadow" />
        <div className="main">
          {/* Cover Title (centered text only) */}
          <div className="cover-title">
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          </div>

          <div className="top" />
          <div className="left side" />
          <div className="right side" />

          {/* Inner Content Revealed */}
          <div className="inner-content bg-black/40 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
            <p className="text-sm text-white/80 leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
