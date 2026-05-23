export default function Bokeh() {
  const orbs = [
    { className: "bokeh-orb--gold", size: 180, top: "8%", left: "10%", animation: "bokeh-float-1 25s ease-in-out infinite", opacity: 0.7 },
    { className: "bokeh-orb--amber", size: 120, top: "15%", left: "75%", animation: "bokeh-float-2 30s ease-in-out infinite", opacity: 0.5 },
    { className: "bokeh-orb--warm", size: 200, top: "30%", left: "50%", animation: "bokeh-float-3 35s ease-in-out infinite", opacity: 0.4 },
    { className: "bokeh-orb--soft", size: 90, top: "45%", left: "20%", animation: "bokeh-float-2 22s ease-in-out infinite", opacity: 0.6 },
    { className: "bokeh-orb--gold", size: 150, top: "55%", left: "80%", animation: "bokeh-float-1 28s ease-in-out infinite", opacity: 0.5 },
    { className: "bokeh-orb--amber", size: 70, top: "25%", left: "35%", animation: "bokeh-float-3 20s ease-in-out infinite", opacity: 0.7 },
    { className: "bokeh-orb--soft", size: 220, top: "70%", left: "60%", animation: "bokeh-float-2 32s ease-in-out infinite", opacity: 0.35 },
    { className: "bokeh-orb--warm", size: 100, top: "80%", left: "15%", animation: "bokeh-float-1 26s ease-in-out infinite", opacity: 0.5 },
    { className: "bokeh-orb--gold", size: 60, top: "12%", left: "55%", animation: "bokeh-float-3 18s ease-in-out infinite", opacity: 0.8 },
    { className: "bokeh-orb--amber", size: 140, top: "65%", left: "40%", animation: "bokeh-float-1 33s ease-in-out infinite", opacity: 0.4 },
    { className: "bokeh-orb--soft", size: 80, top: "90%", left: "70%", animation: "bokeh-float-2 24s ease-in-out infinite", opacity: 0.6 },
    { className: "bokeh-orb--warm", size: 110, top: "40%", left: "90%", animation: "bokeh-float-3 29s ease-in-out infinite", opacity: 0.45 },
  ];

  return (
    <div className="bokeh-container">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`bokeh-orb ${orb.className}`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            animation: orb.animation,
            opacity: orb.opacity,
          }}
        />
      ))}
    </div>
  );
}
