import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const RSVPForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    guests: '1',
    notes: '',
    attendance: 'yes',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Netlify Forms will handle the submission
    setSubmitted(true);
    // Scroll to top of form after submission
    setTimeout(() => {
      document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="card text-center">
        <CheckCircle className="mx-auto text-wedding-primary mb-4" size={64} />
        <h3 className="text-2xl font-serif text-wedding-dark mb-4">
          Děkujeme!
        </h3>
        <p className="text-gray-600 mb-6">
          Vaše potvrzení účasti bylo úspěšně odesláno. Těšíme se na vás!
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              contact: '',
              guests: '1',
              notes: '',
              attendance: 'yes',
            });
          }}
          className="btn-secondary"
        >
          Odeslat další odpověď
        </button>
      </div>
    );
  }

  return (
    <form
      name="rsvp"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card max-w-2xl mx-auto"
    >
      <input type="hidden" name="form-name" value="rsvp" />
      <input type="hidden" name="bot-field" />

      <h3 className="text-2xl font-serif text-wedding-dark mb-6 text-center">
        Potvrzení účasti
      </h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Jméno a příjmení *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wedding-primary focus:border-transparent outline-none"
            placeholder="Jan Novák"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail nebo telefon *
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wedding-primary focus:border-transparent outline-none"
            placeholder="jan.novak@email.cz nebo +420 123 456 789"
          />
        </div>

        <div>
          <label htmlFor="attendance" className="block text-sm font-medium text-gray-700 mb-2">
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
                className="mr-2 text-wedding-primary focus:ring-wedding-primary"
                required
              />
              <span className="text-gray-700">Ano, přijdu</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="attendance"
                value="no"
                checked={formData.attendance === 'no'}
                onChange={handleChange}
                className="mr-2 text-wedding-primary focus:ring-wedding-primary"
                required
              />
              <span className="text-gray-700">Bohužel nemohu</span>
            </label>
          </div>
        </div>

        {formData.attendance === 'yes' && (
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
              Počet osob (včetně vás) *
            </label>
            <select
              id="guests"
              name="guests"
              required={formData.attendance === 'yes'}
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wedding-primary focus:border-transparent outline-none"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'osoba' : num < 5 ? 'osoby' : 'osob'}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
            Poznámky (dietní omezení, alergie, atd.)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wedding-primary focus:border-transparent outline-none resize-none"
            placeholder="Např. vegetariánská strava, alergie na ořechy..."
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Odeslat potvrzení
        </button>
      </div>
    </form>
  );
};

export default RSVPForm;

