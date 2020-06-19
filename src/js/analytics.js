export function socialLinkClick(vue, label) {
  vue.$ga.event({
    eventCategory: 'Social Link',
    eventAction: 'Click',
    eventLabel: label
  });
}

export function postLinkClick(vue, postTitle, linkLabel) {
  vue.$ga.event({
    eventCategory: 'Post Link',
    eventAction: 'Click',
    eventLabel: postTitle + " - " + linkLabel
  });
  console.log('done');
}
