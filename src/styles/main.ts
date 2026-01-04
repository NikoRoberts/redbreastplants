export const mainCss = `
/* Redbreast Plants - Main Stylesheet */
/* Adapted from Rails business-frontpage.css.scss */

* {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, h5, h6, form, img, span, div, ul, li, p {
  margin: 0;
  padding: 0;
  border: 0;
}

html {
  font-size: 14px; /* Bootstrap default base */
}

body {
  background: #fff;
  font: 1em/1.5 Helvetica, Arial, sans-serif;
  text-align: center;
  color: #131414;
}

a {
  text-decoration: underline;
  color: #46710b;
}

a:hover {
  text-decoration: none;
}

.floatleft { float: left; }
.floatright { float: right; }
.block { display: block; }
.bold { font-weight: bold; }
.italic { font-style: italic; }
.green { color: #46710B; }

/* Layout */
#centered {
  width: 940px;
  margin: 0 auto;
  text-align: left;
}

/* Header */
#header {
  height: 110px;
  padding-left: 24px;
  padding-right: 24px;
}

ul#navigation {
  float: right;
  display: table;
  margin-top: 48px;
  font-size: 1.08em;
  list-style: none;
}

ul#navigation li {
  display: table-cell;
  padding-left: 20px;
}

ul#navigation li a {
  display: block;
  padding: 5px 10px 5px 15px;
  color: #131414;
  text-decoration: none;
}

ul#navigation li a:hover {
  text-decoration: underline;
}

ul#navigation li.active a {
  background: #446f0b;
  padding: 5px 10px;
  color: #fff;
}

/* Banner */
#banner {
  margin-bottom: 10px;
  height: 320px;
  width: 940px;
}

#banner img {
  display: block;
}

#banner .info {
  width: 280px;
  height: 320px;
  background-color: rgba(0,0,0,0.44);
  position: relative;
  top: -320px;
  color: #fff;
}

#banner .info div {
  padding: 35px;
}

#banner .info div h1 {
  font: 1.9em Georgia, serif;
  margin-bottom: 10px;
}

#banner .info div p {
  font: 1em Georgia, serif;
  line-height: 1.8em;
  margin-bottom: 10px;
}

/* Four Column Layout */
#four-col {
  margin-bottom: 35px;
  float: left;
  width: 100%;
}

#four-col .column {
  width: 220px;
  margin-right: 20px;
  float: left;
}

#four-col h2 {
  padding: 8px 5px;
  font: 1.7em Georgia, serif;
}

#four-col p {
  line-height: 1.8em;
  padding: 7px 6px;
}

#four-col .last {
  margin-right: 0;
}

/* Two Column Layout */
#two-col #left {
  float: right;
  width: 620px;
  margin-bottom: 35px;
}

#two-col #right {
  float: left;
  width: 280px;
  margin-bottom: 35px;
}

#two-col h2 {
  font: 2.1em Georgia, serif;
}

/* Blog / Posts */
#blog .post {
  padding: 30px 0;
}

#blog .post h2 {
  font: 2.1em Georgia, serif;
}

#blog .post p {
  line-height: 1.9em;
}

/* Boxes */
.box1 {
  background: #e4e2d2;
  padding: 18px 0 12px 0;
  line-height: 1.8em;
  margin-bottom: 20px;
}

.box1 ul {
  margin: 0 18px;
}

.box1 h2 {
  font: 1.7em Georgia, serif;
  margin-bottom: 6px;
}

.box2 {
  background-color: #46710b;
  padding: 18px;
  color: #fff;
  margin-bottom: 25px;
}

.box2 h2 {
  font: normal 1.9em Georgia, serif;
  margin-bottom: 8px;
}

/* Category List */
ul.catlist {
  list-style: none;
}

ul.catlist li {
  border-bottom: 1px solid #d1cfbd;
  padding: 4px 10px;
}

ul.catlist li a {
  color: #000;
}

/* Plant List */
#plantlist {
  width: 890px;
}

h1.header {
  font: 1.9em Georgia, serif;
  margin-bottom: 10px;
}

/* Tables */
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.table th, .table td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

.table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.table-striped tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.table-hover tbody tr:hover {
  background-color: #f0f0f0;
}

/* Forms */
#form label {
  font-size: 1.2em;
  width: 90px;
  display: inline-block;
  text-align: right;
  margin-right: 15px;
  margin-bottom: 15px;
}

#form input[type="text"],
#form input[type="email"] {
  border: 1px solid #e4e2d2;
  padding: 5px 7px;
  margin-bottom: 15px;
  width: 200px;
}

#form select {
  width: 210px;
  font: 1.2em Tahoma, sans-serif;
  border: 1px solid #e4e2d2;
  padding: 5px 7px;
  margin-bottom: 15px;
}

#form textarea {
  border: 1px solid #e4e2d2;
  vertical-align: top;
  width: 350px;
  font: 1.1em Tahoma, sans-serif;
  line-height: 1.7em;
  padding: 9px;
  height: 200px;
}

/* Border */
.border {
  border-top: 4px solid #446f0b;
  padding-top: 30px;
}

/* Footer */
#footer {
  border-top: 4px solid #f0f0f0;
  padding: 23px 15px 0 15px;
  clear: both;
  height: 60px;
}

#footer .copyright {
  float: right;
}

#footer ul {
  list-style: none;
  float: left;
}

#footer ul li {
  display: inline;
  padding-right: 6px;
}

/* Tubestock Background */
.tubestockbg {
  display: inline-block;
  width: 100%;
  height: 50vh;
  background-position: center;
  background-size: cover;
}

/* Search */
.sortable-table select,
.sortable-table input {
  padding: 4px;
  margin: 0;
}

/* More link */
a.more {
  display: inline-block;
  padding: 5px 5px 5px 14px;
  color: #46710c;
}

/* Mobile Responsive */
@media only screen and (max-width: 800px) {
  html {
    font-size: 16px;
  }

  #centered {
    width: 100%;
  }

  .logo img.floatleft {
    float: none;
    height: 70px;
  }

  .logo {
    margin: auto;
    display: block;
    text-align: center;
  }

  ul#navigation {
    font-size: 0.8em;
    margin-top: 0;
    padding: 0;
    float: none;
    text-align: center;
  }

  ul#navigation li {
    display: inline-block;
    padding: 4px 7px;
  }

  ul#navigation li a {
    padding: 5px;
  }

  #banner, #banner .info {
    width: 100%;
    height: auto;
  }

  #banner img {
    width: 100%;
    height: auto;
  }

  #banner .info {
    position: static;
  }

  #banner .info div {
    padding: 15px;
  }

  #four-col {
    padding-left: 10px;
  }

  #four-col .column {
    width: 47%;
    margin-right: 10px;
    margin-top: 30px;
  }

  #four-col .column img {
    width: 100%;
  }

  #four-col a {
    display: block;
    text-align: center;
    font-size: 1.4em;
  }

  #two-col #left,
  #two-col #right {
    width: 100%;
    float: none;
    padding: 1em;
    margin: 0;
  }

  #plantlist {
    width: 100%;
    margin-top: 50px;
    padding: 10px;
  }

  .mobile-hide {
    display: none;
  }

  #footer {
    height: auto;
    padding: 15px;
  }

  #footer ul,
  #footer .copyright {
    float: none;
    text-align: center;
  }
}
`;
