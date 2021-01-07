export function socialLinkClick(vue, label) {
  vue.$ga.event({
    eventCategory: "Social Link",
    eventAction: "Click",
    eventLabel: label
  });
}

export function postLinkClick(vue, postTitle, linkLabel) {
  vue.$ga.event({
    eventCategory: "Post Link",
    eventAction: "Click",
    eventLabel: postTitle + " - " + linkLabel
  });
}

export function sharePost(vue, postTitle) {
  vue.$ga.event({
    eventCategory: "Post",
    eventAction: "Share",
    eventLabel: postTitle
  });
}

export function projectCardClick(vue, projectTitle) {
  vue.$ga.event({
    eventCategory: "Project Card",
    eventAction: "Click",
    eventLabel: projectTitle
  });
}
