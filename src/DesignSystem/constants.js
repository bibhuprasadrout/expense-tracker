import { createGlobalStyle } from "styled-components";
export const ResetCSS = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
html {
    overflow: hidden;
    height: 100%;
}
body {
	overflow: hidden auto;
	height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#root {
		overflow: hidden auto;
		width: 100%;
		height: 100%;
		padding: 1rem;
		::-webkit-scrollbar{
			display: none;
			width: 0;
			height: 0;
		}
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font-family: Tahoma, Verdana, sans-serif;
	border-radius: 7px;
}
code {
  font-family: monospace;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
li, ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.link,.link:hover,a {
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
	font-family: inherit;
	font-style: inherit;
	text-decoration: none;
}
`;

export const GlobalTheme = {
  light: "rgba(250,250,250,.7)",
  dark: "rgba(0,0,0,.7)",
};
