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

  /* ---------------------------------------------------------------------
     Demo 1: website concept — switch the illustrative palette
     ------------------------------------------------------------------ */
  var site = document.getElementById('site-demo');
  var styleBtn = document.getElementById('site-style');
  var styleStatus = document.getElementById('site-style-status');
  if (site && styleBtn) {
    styleBtn.hidden = false;
    styleBtn.addEventListener('click', function () {
      var next = site.getAttribute('data-style') === 'sage' ? 'graphite' : 'sage';
      site.setAttribute('data-style', next);
      styleBtn.textContent = next === 'sage' ? 'Change style' : 'Change style back';
      if (styleStatus) styleStatus.textContent = 'Website concept now shown in the ' + next + ' style.';
    });
  }

  /* ---------------------------------------------------------------------
     Demo 2: automation — inquiry → draft for review → CRM summary.
     Purely local; this demo never sends email or contacts any service.
     ------------------------------------------------------------------ */
  var flow = document.getElementById('flow-demo');
  var flowControls = document.getElementById('flow-controls');
  if (flow && flowControls) {
    var runBtn = document.getElementById('flow-run');
    var approveBtn = document.getElementById('flow-approve');
    var resetBtn = document.getElementById('flow-reset');
    var status = document.getElementById('flow-status');
    var draftStatus = document.getElementById('flow-draft-status');
    var tag = document.getElementById('flow-tag');

    var messages = {
      0: 'A new inquiry has arrived. Run the example to draft a reply for review.',
      1: 'Draft ready. Nothing goes out until you approve it.',
      2: 'Approved. The reply is marked as sent in this example and Sarah is now a lead in the CRM.'
    };

    var setStep = function (step) {
      flow.setAttribute('data-step', String(step));
      runBtn.disabled = step !== 0;
      approveBtn.disabled = step !== 1;
      resetBtn.hidden = step === 0;
      status.textContent = messages[step];
      draftStatus.textContent = step === 2 ? 'Approved' : 'For your review';
      tag.textContent = step === 2 ? 'Added' : 'Pending';
      tag.classList.toggle('is-added', step === 2);
    };

    flowControls.hidden = false;
    setStep(0);

    runBtn.addEventListener('click', function () {
      setStep(1);
      approveBtn.focus();
    });
    approveBtn.addEventListener('click', function () {
      setStep(2);
      resetBtn.focus();
    });
    resetBtn.addEventListener('click', function () {
      setStep(0);
      runBtn.focus();
    });
  }

  /* ---------------------------------------------------------------------
     Demo 3: knowledge assistant — two predefined example questions.
     Answers come from a fixed sample handbook; there is no live model.
     ------------------------------------------------------------------ */
  var chatControls = document.getElementById('chat-controls');
  if (chatControls) {
    var topics = {
      onboarding: {
        question: 'Where is our onboarding checklist?',
        answer: 'Here is the checklist from your team handbook.',
        title: 'Onboarding checklist',
        items: ['Send welcome email', 'Set up accounts', 'Share key resources', 'Schedule first-week check-in', 'Assign a buddy']
      },
      timeoff: {
        question: 'How do I request time off?',
        answer: 'Here’s how time off requests work, from your team handbook.',
        title: 'Time off policy',
        items: ['Submit requests at least two weeks ahead', 'Your manager approves in the HR tool', 'Add the dates to the shared team calendar', 'Set an out-of-office reply before you leave']
      }
    };

    var q = document.getElementById('chat-question');
    var a = document.getElementById('chat-answer-text');
    var t = document.getElementById('chat-source-title');
    var list = document.getElementById('chat-source-list');
    var buttons = chatControls.querySelectorAll('.seg__btn');

    var show = function (key) {
      var data = topics[key];
      if (!data) return;
      q.textContent = data.question;
      a.textContent = data.answer;
      t.textContent = data.title;
      while (list.firstChild) list.removeChild(list.firstChild);
      data.items.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
      Array.prototype.forEach.call(buttons, function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-topic') === key ? 'true' : 'false');
      });
    };

    chatControls.hidden = false;
    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener('click', function () { show(b.getAttribute('data-topic')); });
    });
  }
})();
