template = `
{{#each this}}
<div class="entry">
  <h1>{{action}}</h1>
  <div class="body">
    {{value}}
  </div>
</div>
{{/each}}
`

var context = [
{action: 'input', type: 'text', value: 'gnanasuriyan.gnanaoli@freshworks.com', label: 'Email*'},
{action: 'input', type: 'text', value: 'test subject', label: 'Subject'},
{action: 'input', type: 'text', value: '12.34', label: 'deci'},
{action: 'input', type: '', value: '', label: '', screenshot: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='}
]


// Report
chrome.storage.local.get("output", function(output) {
  console.log(output);
  context = output;
  var template = Handlebars.templates.sample;
  document.body.innerHTML += template(context.output)
  // var compiled = Handlebars.compile(template);
  // document.body.innerHTML += compiled(output);
});


