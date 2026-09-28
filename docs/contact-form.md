# Project inquiry form — FormSubmit

The homepage sends inquiry JSON to https://formsubmit.co/ajax/dev@oopslab.ai. The public endpoint is in contact-config.js; no API key is used. The HTML form also has a normal POST action at https://formsubmit.co/dev@oopslab.ai for browsers without JavaScript.

## One-time activation and delivery verification

FormSubmit sends an activation email to the recipient on the first real submission. The owner must confirm it from dev@oopslab.ai. Then submit a test inquiry from the final website origin and verify it arrives in that inbox (including spam). On September 27, 2026 (ET), the local preview form was activated and actual inquiries were confirmed in the recipient’s business Gmail account. Initial test inquiries landed in Spam. The production origin was then activated and a final inquiry from https://oopslab.ai/ was confirmed in received email at 01:11 UTC on September 28 (9:11 PM ET September 27). The live form displayed success and cleared the fields.

Official setup: https://formsubmit.co/
AJAX: https://formsubmit.co/ajax-documentation
Fields and spam controls: https://formsubmit.co/documentation

## Behavior

- Primary contact actions open the on-page inquiry form.
- The submit button is enabled after the configured script initializes, with native POST fallback when JavaScript is unavailable.
- Required fields and whitespace validation run before submission. Requests have a12-second timeout and prevent duplicate clicks while pending.
- Payload includes name, email, company, service, message, _subject, _template:table, _url, and FormSubmit's _honey field. The email field supplies the reply address.
- No _captcha:false setting is sent; provider defaults are retained. There is no autoresponse/CC or extra recipient.
- Only boolean true or string "true" in result.success counts as accepted. HTTP errors, non-JSON responses, negative/missing success and activation messages do not clear the fields or claim delivery.
- The page identifies FormSubmit as the inquiry processor. No inquiry is stored in localStorage or URL query parameters.

## Earlier mocked checks

Actual contact.js and identical form markup were exercised in an isolated browser harness with fetch mocked. String success, boolean success, activation required, rejected submission, HTML200 and network failure behaved as intended. Payload includes the documented provider field names. No real requests or emails were made by those tests. Temporary harness removed. All local links/assets validated and configuration synchronized with the working preview.

## Live-provider compatibility

The launch test found that FormSubmit can send valid JSON with `Content-Type: text/html`. The handler therefore parses the body as JSON regardless of the MIME header, then requires explicit success. Actual HTML still fails JSON parsing and preserves the inquiry.

## Launch checks

Actual FormSubmit requests returned explicit success, and their unique test references were found in received email. A regression check covers JSON labeled as HTML, actual HTML rejection, activation messages, and negative responses. Browser replay of the captured provider success confirms that the fixed handler clears the form and displays the success message.
