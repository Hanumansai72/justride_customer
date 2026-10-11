import { useEffect, useState } from 'react';
import Logo from '../components/common/Logo';
import './reset-password.css';

const API_BASE = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '/api' : 'https://justfai-backend.vercel.app/api');

export default function ResetPasswordPage() {
  const [token] = useState(() => {
    const value = window.location.hash.slice(1);
    return /^[a-f0-9]{64}$/i.test(value) ? value : '';
  });
  useEffect(() => { window.history.replaceState({}, '', window.location.pathname); }, []);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get('password') !== form.get('confirm')) { setStatus('Passwords must match.'); return; }
    setBusy(true);
    setStatus('');
    try {
      const response = await fetch(`${API_BASE}/users/reset-password`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password: form.get('password') }),
      });
      if (response.ok) { setDone(true); setStatus('Password updated. You can now sign in to the JustRide app.'); }
      else if (response.status === 400) setStatus('This link has expired or is invalid. Request a new reset link in the app.');
      else setStatus('Unable to reset your password right now. Please try again later.');
    } catch { setStatus('Connection failed. Please try again.'); }
    finally { setBusy(false); }
  }

  return <section className="reset-password"><div className="reset-password-card">
    <a href="/" aria-label="JustRide homepage"><Logo /></a>
    <h1>Choose a new password</h1>
    {!token ? <p>This reset link is invalid. Request a new link in the JustRide app.</p> :
      !done && <form onSubmit={submit}>
        <label>New password<input name="password" type="password" autoComplete="new-password" minLength={6} required /></label>
        <label>Confirm password<input name="confirm" type="password" autoComplete="new-password" minLength={6} required /></label>
        <button className="btn btn--primary" disabled={busy}>{busy ? 'Updating…' : 'Update password'}</button>
      </form>}
    <p role="status">{status}</p><a href="/">Back to JustRide</a>
  </div></section>;
}
