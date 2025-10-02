import { useState } from "react";
import "./index.css";

function App() {
  // CAPM State
  const [riskFree, setRiskFree] = useState<number>(2);
  const [marketReturn, setMarketReturn] = useState<number>(8);
  const [beta, setBeta] = useState<number>(1.1);

  // Fama-French State
  const [smb, setSMB] = useState<number>(1.5);
  const [hml, setHML] = useState<number>(2.0);
  const [smbCoef, setSMBCoef] = useState<number>(0.3);
  const [hmlCoef, setHMLCoef] = useState<number>(0.2);

  // Calculations
  const capmReturn =
    riskFree + beta * (marketReturn - riskFree);
  const famaFrenchReturn =
    riskFree +
    beta * (marketReturn - riskFree) +
    smbCoef * smb +
    hmlCoef * hml;

  return (
    <div className="app-container" style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <h1>My Stock App</h1>
      <p>
        Welcome to My Stock App! This tool helps you calculate the <b>expected return</b> of a stock using two popular financial models:
        <ul>
          <li><b>CAPM (Capital Asset Pricing Model)</b></li>
          <li><b>Fama-French 3 Factor Model</b></li>
        </ul>
      </p>
      <hr />
      <section style={{ marginBottom: 32 }}>
        <h2>CAPM Calculator</h2>
        <p>
          The CAPM formula is:<br />
          <code>
            Expected Return = Risk-Free Rate + Beta × (Market Return − Risk-Free Rate)
          </code>
        </p>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 400 }}
          onSubmit={e => e.preventDefault()}
        >
          <label>
            Risk-Free Rate (%):
            <input
              type="number"
              value={riskFree}
              step="0.01"
              onChange={e => setRiskFree(Number(e.target.value))}
              placeholder="e.g. 2"
            />
          </label>
          <label>
            Expected Market Return (%):
            <input
              type="number"
              value={marketReturn}
              step="0.01"
              onChange={e => setMarketReturn(Number(e.target.value))}
              placeholder="e.g. 8"
            />
          </label>
          <label>
            Beta:
            <input
              type="number"
              value={beta}
              step="0.01"
              onChange={e => setBeta(Number(e.target.value))}
              placeholder="e.g. 1.1"
            />
          </label>
        </form>
        <div style={{ marginTop: 16, background: "#f9f9f9", padding: 12, borderRadius: 4 }}>
          <b>Expected Return (CAPM):</b> <span style={{ fontSize: 18 }}>{capmReturn.toFixed(2)}%</span>
        </div>
        <p style={{ fontSize: "0.95em", color: "#444" }}>
          <i>
            Example: With a risk-free rate of 2%, market return of 8%, and beta of 1.1,<br />
            Expected Return = 2 + 1.1 × (8 − 2) = 2 + 1.1 × 6 = 8.6%
          </i>
        </p>
      </section>
      <section>
        <h2>Fama-French 3 Factor Calculator</h2>
        <p>
          The Fama-French formula adds two factors to CAPM:<br />
          <code>
            Expected Return = Risk-Free Rate + Beta × (Market Return − Risk-Free Rate)
            + SMB Coef × SMB + HML Coef × HML
          </code>
        </p>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 400 }}
          onSubmit={e => e.preventDefault()}
        >
          <label>
            Risk-Free Rate (%):
            <input
              type="number"
              value={riskFree}
              step="0.01"
              onChange={e => setRiskFree(Number(e.target.value))}
              placeholder="e.g. 2"
            />
          </label>
          <label>
            Expected Market Return (%):
            <input
              type="number"
              value={marketReturn}
              step="0.01"
              onChange={e => setMarketReturn(Number(e.target.value))}
              placeholder="e.g. 8"
            />
          </label>
          <label>
            Beta:
            <input
              type="number"
              value={beta}
              step="0.01"
              onChange={e => setBeta(Number(e.target.value))}
              placeholder="e.g. 1.1"
            />
          </label>
          <label>
            SMB (Small Minus Big) Factor (%):
            <input
              type="number"
              value={smb}
              step="0.01"
              onChange={e => setSMB(Number(e.target.value))}
              placeholder="e.g. 1.5"
            />
          </label>
          <label>
            SMB Coefficient:
            <input
              type="number"
              value={smbCoef}
              step="0.01"
              onChange={e => setSMBCoef(Number(e.target.value))}
              placeholder="e.g. 0.3"
            />
          </label>
          <label>
            HML (High Minus Low) Factor (%):
            <input
              type="number"
              value={hml}
              step="0.01"
              onChange={e => setHML(Number(e.target.value))}
              placeholder="e.g. 2"
            />
          </label>
          <label>
            HML Coefficient:
            <input
              type="number"
              value={hmlCoef}
              step="0.01"
              onChange={e => setHMLCoef(Number(e.target.value))}
              placeholder="e.g. 0.2"
            />
          </label>
        </form>
        <div style={{ marginTop: 16, background: "#f9f9f9", padding: 12, borderRadius: 4 }}>
          <b>Expected Return (Fama-French 3 Factor):</b> <span style={{ fontSize: 18 }}>{famaFrenchReturn.toFixed(2)}%</span>
        </div>
        <p style={{ fontSize: "0.95em", color: "#444" }}>
          <i>
            Example: With risk-free rate 2%, market return 8%, beta 1.1, SMB 1.5%, SMB coef 0.3, HML 2%, HML coef 0.2,<br />
            Expected Return = 2 + 1.1 × (8 − 2) + 0.3 × 1.5 + 0.2 × 2 = 8.6 + 0.45 + 0.4 = 9.45%
          </i>
        </p>
      </section>
      <hr />
      <section style={{ marginTop: 24 }}>
        <h3>Interpretation</h3>
        <p>
          The <b>expected return</b> is the annual return you might expect from your stock, based on the model and inputs.
          <br />
          <b>CAPM</b> considers only market risk, while <b>Fama-French</b> adds factors for company size (SMB) and value (HML).
        </p>
        <p style={{ fontSize: "0.95em", color: "#666" }}>
          <i>
            All values are in percent (%). Example values are for demonstration only.
            Please consult financial data sources for accurate factor values and coefficients.
          </i>
        </p>
      </section>
    </div>
  );
}

export default App;
