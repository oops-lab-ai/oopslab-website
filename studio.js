/* Oops Lab studio concept — progressive enhancement only.
   Everything below is local UI state. Nothing is sent anywhere. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(pointer: fine)');

  /* ---------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------ */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.hidden = false;
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('.menu-toggle__label').textContent = open ? 'Close' : 'Menu';
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    var wide = window.matchMedia('(min-width: 760px)');
    var onWide = function (mq) { if (mq.matches) setOpen(false); };
    if (wide.addEventListener) wide.addEventListener('change', onWide); else wide.addListener(onWide);
  }

  /* ---------------------------------------------------------------------
     Hero depth: a gentle parallax on fine pointers only, never looping.
     ------------------------------------------------------------------ */
  var hero = document.querySelector('.hero');
  var artInner = document.querySelector('.hero__art-inner');
  if (hero && artInner && finePointer.matches && !reduceMotion.matches) {
    var frame = null;
    var target = { x: 0, y: 0 };
    var apply = function () {
      frame = null;
      artInner.style.transform = 'translate3d(' + target.x.toFixed(1) + 'px, ' + target.y.toFixed(1) + 'px, 0)';
    };
    hero.addEventListener('pointermove', function (e) {
      if (reduceMotion.matches) return;
      var r = hero.getBoundingClientRect();
      var nx = (e.clientX - r.left) / r.width - 0.5;
      var ny = (e.clientY - r.top) / r.height - 0.5;
      target.x = nx * -14;
      target.y = ny * -10;
      if (!frame) frame = requestAnimationFrame(apply);
    });
    hero.addEventListener('pointerleave', function () {
      target.x = 0; target.y = 0;
      if (!frame) frame = requestAnimationFrame(apply);
    });
  }

  /* Website layouts: one brand, three distinct compositions. */
  var site = document.getElementById('site-demo');
  var layoutControls = document.getElementById('site-layout-controls');
  if (site && layoutControls) {
    layoutControls.hidden = false;
    layoutControls.querySelectorAll('[data-layout]').forEach(function (button) {
      button.addEventListener('click', function () {
        site.dataset.layout = button.dataset.layout;
        layoutControls.querySelectorAll('button').forEach(function (b) {
          b.setAttribute('aria-pressed', String(b === button));
        });
        document.getElementById('site-layout-name').textContent = button.textContent + ' layout';
        document.getElementById('site-layout-status').textContent = 'Website example changed to the ' + button.textContent.toLowerCase() + ' layout.';
      });
    });
  }

  /* Local workflow illustration. Approval gates both output nodes. */
  var flow = document.getElementById('flow-demo');
  var controls = document.getElementById('flow-controls');
  if (flow && controls) {
    var run = document.getElementById('flow-run');
    var reset = document.getElementById('flow-reset');
    var approve = document.getElementById('flow-approve');
    var edit = document.getElementById('flow-edit');
    var reply = document.getElementById('flow-reply');
    var defaultReply = reply.value;
    var state = 0;
    var announce = document.getElementById('flow-status');
    var setState = function (next) {
      state = next;
      flow.dataset.step = String(next);
      run.disabled = next !== 0;
      reset.hidden = next === 0;
      document.getElementById('flow-review-panel').hidden = next === 0;
      document.querySelector('.flow__review-actions').hidden = next !== 1;
      ['trigger', 'ai', 'review', 'email', 'crm'].forEach(function (key) {
        var node = document.getElementById('flow-' + key);
        node.classList.toggle('is-complete', next === 2 || (next === 1 && (key === 'trigger' || key === 'ai')));
        node.classList.toggle('is-current', next === 1 && key === 'review');
      });
      document.getElementById('flow-trigger-state').textContent = next ? 'Received' : 'Ready';
      document.getElementById('flow-ai-state').textContent = next ? 'Draft ready' : 'Waiting';
      document.getElementById('flow-review-state').textContent = next === 2 ? 'Approved' : next === 1 ? 'Your turn' : 'Waiting';
      document.getElementById('flow-email-state').textContent = next === 2 ? 'Sent in demo' : 'After approval';
      document.getElementById('flow-crm-state').textContent = next === 2 ? 'Updated in demo' : 'After approval';
      document.getElementById('flow-reply-label').textContent = next === 2 ? 'Approved example reply' : 'Ready for your review';
      announce.textContent = [
        'Example: a website inquiry becomes a reviewed reply and a new CRM contact.',
        'AI prepared a reply to Sarah’s website inquiry. Review or edit it; both actions are waiting for your approval.',
        'Demo complete: your approved reply is marked as sent and Sarah is added to the CRM. Nothing was sent outside this page.'
      ][next];
    };
    controls.hidden = false;
    setState(0);
    run.addEventListener('click', function () { setState(1); approve.focus(); });
    edit.addEventListener('click', function () {
      reply.readOnly = false;
      reply.focus();
      document.getElementById('flow-edit-status').textContent = 'Edit the example reply, then approve when you’re ready.';
    });
    reply.addEventListener('input', function () {
      if (reply.value.trim()) document.getElementById('flow-edit-status').textContent = '';
    });
    approve.addEventListener('click', function () {
      if (state !== 1) return;
      if (!reply.value.trim()) {
        document.getElementById('flow-edit-status').textContent = 'Add a reply before approving the example.';
        reply.readOnly = false;
        reply.focus();
        return;
      }
      reply.readOnly = true;
      document.getElementById('flow-edit-status').textContent = '';
      setState(2);
      reset.focus();
    });
    reset.addEventListener('click', function () {
      reply.value = defaultReply;
      reply.readOnly = true;
      document.getElementById('flow-edit-status').textContent = '';
      setState(0);
      run.focus();
    });
  }

  /* Preset document search with a visible supporting excerpt. */
  var chatControls = document.getElementById('chat-controls');
  if (chatControls) {
    var topics = {
      onboarding: {
        question: 'Where is our onboarding checklist?',
        answer: 'Start with a welcome email, account access, and the team handbook. Then arrange a first-week check-in.',
        title: 'Onboarding checklist',
        excerpt: 'Before day one, send the welcome email, set up accounts, and share the team handbook. Schedule a first-week check-in and assign a buddy.'
      },
      timeoff: {
        question: 'How do I request time off?',
        answer: 'Submit your request in the HR tool at least two weeks ahead. Your manager will review it.',
        title: 'Time off policy',
        excerpt: 'Submit time off requests at least two weeks ahead. Your manager approves them in the HR tool. Once approved, add the dates to the shared calendar.'
      },
      expenses: {
        question: 'How do I submit an expense?',
        answer: 'Attach your receipt, choose the expense category, and submit it to your manager for approval.',
        title: 'Expense submissions',
        excerpt: 'Every expense needs an itemized receipt and a category. Submit it through the expense tool for manager approval before reimbursement.'
      }
    };
    chatControls.hidden = false;
    chatControls.querySelectorAll('[data-topic]').forEach(function (button) {
      button.addEventListener('click', function () {
        var topic = topics[button.dataset.topic];
        document.getElementById('chat-question').textContent = topic.question;
        document.getElementById('chat-answer-text').textContent = topic.answer;
        document.getElementById('chat-source-title').textContent = topic.title;
        document.getElementById('chat-source-excerpt').textContent = topic.excerpt;
        chatControls.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
      });
    });
  }
})();
