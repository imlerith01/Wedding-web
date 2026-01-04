import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const RSVPForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    notes: '',
    attendance: 'yes' as 'yes' | 'no',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare data for API
      const payload = {
        name: formData.name.trim(),
        contact: formData.contact.trim(),
        attendance: formData.attendance,
        guests: 0, // Počet osob již není v formuláři, vždy 0
        note: formData.notes.trim() || undefined,
      };

      const response = await fetch('/.netlify/functions/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'Chyba při odesílání formuláře');
      }

      // Success
      setSubmitted(true);
      // Scroll to top of form after submission
      setTimeout(() => {
        document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Chyba při odesílání formuláře');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="card text-center">
        <CheckCircle className="mx-auto text-wedding-accent mb-4" size={64} />
        <h3 className="text-2xl font-serif text-wedding-dark mb-4">
          Děkujeme!
        </h3>
        <p className="text-wedding-text-secondary mb-6">
          Děkujeme za odpověď, moc se na vás těšíme ❤️
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setError(null);
            setFormData({
              name: '',
              contact: '',
              notes: '',
              attendance: 'yes',
            });
          }}
          className="btn-secondary"
        >
          Přihlásit dalšího hosta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card max-w-2xl mx-auto"
    >
      {error && (
        <div className="mb-6 p-4 bg-red-50/80 border border-red-300/50 rounded-lg flex items-start gap-3">
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-wedding-dark mb-2">
            Jméno a příjmení *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#F7F5EE] border border-wedding-primary/20 rounded-lg focus:ring-2 focus:ring-wedding-accent focus:border-wedding-accent outline-none text-wedding-dark"
            placeholder="Jan Novák"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-wedding-dark mb-2">
            E-mail nebo telefon *
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#F7F5EE] border border-wedding-primary/20 rounded-lg focus:ring-2 focus:ring-wedding-accent focus:border-wedding-accent outline-none text-wedding-dark"
            placeholder="jan.novak@email.cz nebo +420 123 456 789"
          />
        </div>

        <div>
          <label htmlFor="attendance" className="block text-sm font-medium text-wedding-dark mb-2">
            Potvrzuji účast *
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="attendance"
                value="yes"
                checked={formData.attendance === 'yes'}
                onChange={handleChange}
                className="mr-2 text-wedding-accent focus:ring-wedding-accent"
                required
              />
              <span className="text-wedding-dark">Ano, přijdu</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="attendance"
                value="no"
                checked={formData.attendance === 'no'}
                onChange={handleChange}
                className="mr-2 text-wedding-accent focus:ring-wedding-accent"
                required
              />
              <span className="text-wedding-dark">Bohužel nemohu</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-wedding-dark mb-2">
            Poznámky (dietní omezení, alergie, atd.)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#F7F5EE] border border-wedding-primary/20 rounded-lg focus:ring-2 focus:ring-wedding-accent focus:border-wedding-accent outline-none resize-none text-wedding-dark"
            placeholder="Např. vegetariánská strava, alergie na ořechy..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
          {loading ? 'Odesílám…' : 'Odeslat potvrzení'}
        </button>
      </div>
    </form>
  );
};

export default RSVPForm;

