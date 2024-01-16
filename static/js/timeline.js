'use strict';

function postTimeline(args, content) {
  if (args.length > 0) {
    return `<div class="timeline"><p class='p h2'>${args}</p>${content}</div>`;
  } else {
    return `<div class="timeline">${content}</div>`;
  }
}

function postTimenode(args, content) {
  args = args.join(' ').split(',')
  var time = args[0]
  return `<div class="timenode"><div class="meta"><p>${hexo.render.renderSync({text: time, engine: 'markdown'})}</p></div><div class="body">${hexo.render.renderSync({text: content, engine: 'markdown'}).split('\n').join('')}</div></div>`;
}
// <div class="timeline "></div>
hexo.extend.tag.register('timeline', postTimeline, {ends: true});
// <div class="timenode"><div class="meta"><p><p>time</p>
</p></div><div class="body"><p>// what happened<br>// </p></div></div>
hexo.extend.tag.register('timenode', postTimenode, {ends: true});