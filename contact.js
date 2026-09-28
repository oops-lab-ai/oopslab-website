/* Inquiry delivery is separate from the illustrative homepage demos. */
(function () {
  'use strict';
  var form = document.getElementById('inquiry-form');
  if (!form) return;
  var submit = document.getElementById('inquiry-submit');
  var copy = document.getElementById('inquiry-copy');
  var availability = document.getElementById('inquiry-availability');
  var status = document.getElementById('inquiry-status');
  var endpoint = (window.OopsLabContact || {}).endpoint || '';
  var sending = false;
  try {
    var url = new URL(endpoint, window.location.href);
    if (!endpoint || (url.protocol !== 'https:' && url.origin !== window.location.origin)) endpoint = '';
  } catch (_) { endpoint = ''; }

  function announce(message, state) {
    status.textContent = message;
    status.dataset.state = state || '';
  }
  function details() {
    var data = new FormData(form);
    return {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      company: String(data.get('company') || '').trim(),
      service: String(data.get('service') || ''),
      message: String(data.get('message') || '').trim()
    };
  }
  function valid() {
    var name = document.getElementById('inquiry-name');
    name.setCustomValidity(name.value.trim() ? '' : 'Please enter your name.');
    var message = document.getElementById('inquiry-message');
    message.setCustomValidity(message.value.trim().length < 20 ? 'Please add at least 20 characters about your project.' : '');
    return form.reportValidity();
  }
  document.getElementById('inquiry-name').addEventListener('input', function () { this.setCustomValidity(''); });
  document.getElementById('inquiry-message').addEventListener('input', function () { this.setCustomValidity(''); });

  submit.disabled = !endpoint;
  availability.hidden = Boolean(endpoint);
  if (navigator.clipboard && window.isSecureContext) copy.hidden = false;

  copy.addEventListener('click', async function () {
    if (!valid()) return;
    var d = details();
    var brief = 'Project inquiry for Oops Lab\n\nName: ' + d.name + '\nEmail: ' + d.email +
      (d.company ? '\nBusiness: ' + d.company : '') + '\nInterested in: ' + d.service + '\n\n' + d.message;
    try {
      await navigator.clipboard.writeText(brief);
      announce('Project details copied. You can send them to dev@oopslab.ai.');
    } catch (_) {
      announce('Could not copy your details. They are still here; you can select and copy them manually.', 'error');
    }
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (sending) return;
    if (!endpoint) {
      announce('Online inquiries are not available yet. Please email dev@oopslab.ai.', 'error');
      return;
    }
    if (!valid()) return;
    if (form.elements._honey.value) {
      announce('Please leave the extra website field empty and try again.', 'error');
      return;
    }
    sending = true;
    submit.disabled = true;
    submit.setAttribute('aria-busy', 'true');
    form.setAttribute('aria-busy', 'true');
    announce('Sending your inquiry…');
    var controller = new AbortController();
    var timeout = window.setTimeout(function () { controller.abort(); }, 12000);
    try {
      var response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        credentials: 'omit',
        body: JSON.stringify(Object.assign(details(), {
          _subject: 'New Oops Lab project inquiry',
          _template: 'table',
          _url: 'https://oopslab.ai/#contact',
          _honey: form.elements._honey.value
        })),
        signal: controller.signal
      });
      if (!response.ok) throw new Error('Delivery failed');
      // FormSubmit can return JSON with a text/html Content-Type. Parse the
      // body and require explicit success; actual HTML still fails parsing.
      var result = await response.json();
      // FormSubmit uses success, which may be a boolean or a string.
      // Activation is not an inquiry-delivery confirmation.
      var providerMessage = typeof result.message === 'string' ? result.message : '';
      if (/activat|confirm.*email|email.*confirm|verif/i.test(providerMessage)) {
        announce('Online inquiries are awaiting email verification. Please email dev@oopslab.ai directly; your details are still here.', 'error');
        return;
      }
      if (result.success !== true && result.success !== 'true') throw new Error('Delivery not confirmed');
      form.reset();
      announce('Thank you — your inquiry has been submitted. We’ll reply to the email address you provided.');
    } catch (_) {
      announce('We could not confirm delivery. Your details are still here. Try again or email dev@oopslab.ai.', 'error');
    } finally {
      window.clearTimeout(timeout);
      sending = false;
      submit.disabled = false;
      submit.removeAttribute('aria-busy');
      form.removeAttribute('aria-busy');
    }
  });
})();
