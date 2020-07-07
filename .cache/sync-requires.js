const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/aidar/Desktop/projects/Portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/aidar/Desktop/projects/Portfolio/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/aidar/Desktop/projects/Portfolio/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/aidar/Desktop/projects/Portfolio/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/aidar/Desktop/projects/Portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/aidar/Desktop/projects/Portfolio/src/pages/projects.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/aidar/Desktop/projects/Portfolio/src/pages/resume.js")))
}

