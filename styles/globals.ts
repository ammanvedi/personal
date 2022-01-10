import {createGlobalStyle, css} from 'styled-components';
import { getColor, getMq } from '../component/style/theme';

const reset = css`
    /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

    /* Document
    ========================================================================== */

    /**
     * 1. Correct the line height in all browsers.
     * 2. Prevent adjustments of font size after orientation changes in iOS.
     */

    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }

    /* Sections
    ========================================================================== */

    /**
     * Remove the margin in all browsers.
     */

    body {
        margin: 0;
    }


    main {
        display: block;
    }

    /* Grouping content
    ========================================================================== */

    /**
     * 1. Add the correct box sizing in Firefox.
     * 2. Show the overflow in Edge and IE.
     */

    hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
    }

    pre {
        font-family: monospace, monospace; /* 1 */
        font-size: 0.7rem; /* 2 */
    }

    /* Text-level semantics
    ========================================================================== */

    /**
     * Remove the gray background on active links in IE 10.
     */

    a {
        background-color: transparent;
        text-decoration: none;
        color: ${getColor('link')};
    }

    a:hover {
        text-decoration: underline;
        text-decoration-thickness: 3px;
    }

    /**
     * 1. Remove the bottom border in Chrome 57-
     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
     */

    abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
    }

    /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }

    /**
     * Add the correct font size in all browsers.
     */

    small {
        font-size: 80%;
    }


    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    /* Embedded content
    ========================================================================== */

    /**
     * Remove the border on images inside links in IE 10.
     */

    img {
        border-style: none;
        border-radius: 8px;
    }

    /* Forms
    ========================================================================== */

    /**
     * 1. Change the font styles in all browsers.
     * 2. Remove the margin in Firefox and Safari.
     */

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }

    /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge.
     */

    button,
    input { /* 1 */
        overflow: visible;
    }

    /**
     * Remove the inheritance of text transform in Edge, Firefox, and IE.
     * 1. Remove the inheritance of text transform in Firefox.
     */

    button,
    select { /* 1 */
        text-transform: none;
    }

    /**
     * Correct the inability to style clickable types in iOS and Safari.
     */

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    /**
     * Remove the inner border and padding in Firefox.
     */

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    /**
     * Restore the focus styles unset by the previous rule.
     */

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    /**
     * Correct the padding in Firefox.
     */

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }


    legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
    }

    /**
     * Add the correct vertical alignment in Chrome, Firefox, and Opera.
     */

    progress {
        vertical-align: baseline;
    }

    /**
     * Remove the default vertical scrollbar in IE 10+.
     */

    textarea {
        overflow: auto;
    }

    /**
     * 1. Add the correct box sizing in IE 10.
     * 2. Remove the padding in IE 10.
     */

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
    }

    /**
     * Correct the cursor style of increment and decrement buttons in Chrome.
     */

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    /**
     * 1. Correct the odd appearance in Chrome and Safari.
     * 2. Correct the outline style in Safari.
     */

    [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
    }

    /**
     * Remove the inner padding in Chrome and Safari on macOS.
     */

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }


    ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
    }

    /* Interactive
    ========================================================================== */

    /*
    * Add the correct display in Edge, IE 10+, and Firefox.
    */

    details {
        display: block;
    }

    /*
    * Add the correct display in all browsers.
    */

    summary {
        display: list-item;
    }

    /* Misc
    ========================================================================== */

    /**
     * Add the correct display in IE 10+.
     */

    template {
        display: none;
    }

    /**
     * Add the correct display in IE 10.
     */

    [hidden] {
        display: none;
    }

    blockquote {
        margin: 0;
        padding-left: 40px;
        border-left: 4px solid #f8f8f8;
    }

    li {
        margin-top: 8px;
    }

`;

const typography = css`
    html {
        font-size: 100%;

        @media(min-width: ${getMq('t')}) {
            font-size: 112.5%;
        }

        @media(min-width: ${getMq('d')}) {
            font-size: 131.3%;
        }
    }

    body {
        font-family: Helvetica Neue, Helvetica, sans-serif;
    }
`

const code = css`
    /**
     * Nord Theme Originally by Arctic Ice Studio
     * https://nordtheme.com
     *
     * Ported for PrismJS by Zane Hitchcoxc (@zwhitchcox) and Gabriel Ramos (@gabrieluizramos)
     */

    code[class*="language-"],
    pre[class*="language-"] {
        color: #f8f8f2;
        background: none;
        font-family: "Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    /* Code blocks */
    pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
        border-radius: 0.3em;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: #2E3440;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
        white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #636f88;
    }

    .token.punctuation {
        color: #81A1C1;
    }

    .namespace {
        opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #81A1C1;
    }

    .token.number {
        color: #B48EAD;
    }

    .token.boolean {
        color: #81A1C1;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #A3BE8C;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
        color: #81A1C1;
    }

    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.class-name {
        color: #88C0D0;
    }

    .token.keyword {
        color: #81A1C1;
    }

    .token.regex,
    .token.important {
        color: #EBCB8B;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }

    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }
`

export default createGlobalStyle`
    ${reset}
    ${typography}
    ${code}
`