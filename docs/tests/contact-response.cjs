const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(require('node:path').resolve(__dirname, '../../contact.js'), 'utf8');
async function check(body, expectedReset, expectedStatus) {
  const nodes = {};
  for (const id of ['inquiry-form','inquiry-submit','inquiry-copy','inquiry-availability','inquiry-status','inquiry-name','inquiry-message']) {
    nodes[id] = {value:'Valid inquiry with enough detail',dataset:{},events:{},addEventListener(k,f){this.events[k]=f;},setAttribute(){},removeAttribute(){},setCustomValidity(){}};
  }
  const form = nodes['inquiry-form'];
  form.elements = {_honey:{value:''}};
  form.reportValidity = () => true;
  form.reset = () => { form.resetCalled = true; };
  const sandbox = { document:{getElementById:id=>nodes[id]}, window:{OopsLabContact:{endpoint:'https://formsubmit.co/ajax/dev@oopslab.ai'},location:{href:'http://localhost/',origin:'http://localhost'},setTimeout,clearTimeout},navigator:{},URL,AbortController,FormData:class{get(k){return ({name:'Test',email:'dev@oopslab.ai',message:'Valid inquiry with enough detail',service:'Websites & SEO'})[k]||''}},fetch:async()=>({ok:true,headers:{get:()=> 'text/html'},json:async()=>JSON.parse(body)})};
  vm.runInNewContext(source,sandbox);
  await form.events.submit({preventDefault(){}});
  assert.equal(Boolean(form.resetCalled),expectedReset);
  assert.match(nodes['inquiry-status'].textContent,expectedStatus);
  assert.equal(nodes['inquiry-submit'].disabled,false);
}
(async()=>{
 await check('{"success":"true","message":"The form was submitted successfully."}',true,/Thank you/);
 await check('<html>Provider error</html>',false,/could not confirm/);
 await check('{"success":"false","message":"Activate your form"}',false,/awaiting email verification/);
 await check('{"success":"false"}',false,/could not confirm/);
 console.log('PASS: mislabeled JSON success; HTML rejection; activation; negative response.');
})();
