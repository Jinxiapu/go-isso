export default {
  inline: `
#isso-thread * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
#isso-thread .isso-comment-header a {
    text-decoration: none;
}

#isso-thread {
    padding: 0;
    margin: 0;
}
#isso-thread > h4 {
    color: #555;
    font-weight: bold;
}
#isso-thread > .isso-feedlink {
    float: right;
    padding-left: 1em;
}
#isso-thread > .isso-feedlink > a {
    font-size: 0.8em;
    vertical-align: bottom;
}
#isso-thread .textarea {
    min-height: 58px;
    outline: 0;
}
#isso-thread .textarea.placeholder {
    color: #757575;
}

#isso-root .isso-comment {
    max-width: 68em;
    padding-top: 0.95em;
    margin: 0.95em auto;
}
#isso-root .preview .isso-comment {
    padding-top: 0;
    margin: 0;
}
#isso-root .isso-comment:not(:first-of-type),
.isso-follow-up .isso-comment {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.isso-comment > div.avatar {
    display: block;
    float: left;
    width: 7%;
    margin: 3px 15px 0 0;
}
.isso-comment > div.avatar > svg {
    max-width: 48px;
    max-height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.isso-comment > div.text-wrapper {
    display: block;
}
.isso-comment .isso-follow-up {
    padding-left: calc(7% + 20px);
}
.isso-comment > div.text-wrapper > .isso-comment-header, .isso-comment > div.text-wrapper > .isso-comment-footer {
    font-size: 0.95em;
}
.isso-comment > div.text-wrapper > .isso-comment-header {
    font-size: 0.85em;
}
.isso-comment > div.text-wrapper > .isso-comment-header .spacer {
    padding: 0 6px;
}
.isso-comment > div.text-wrapper > .isso-comment-header .spacer,
.isso-comment > div.text-wrapper > .isso-comment-header a.permalink,
.isso-comment > div.text-wrapper > .isso-comment-header .note,
.isso-comment > div.text-wrapper > .isso-comment-header a.parent {
    color: gray !important;
    font-weight: normal;
    text-shadow: none !important;
}
.isso-comment > div.text-wrapper > .isso-comment-header .spacer:hover,
.isso-comment > div.text-wrapper > .isso-comment-header a.permalink:hover,
.isso-comment > div.text-wrapper > .isso-comment-header .note:hover,
.isso-comment > div.text-wrapper > .isso-comment-header a.parent:hover {
    color: #606060 !important;
}
.isso-comment > div.text-wrapper > .isso-comment-header .note {
    float: right;
}
.isso-comment > div.text-wrapper > .isso-comment-header .author {
    font-weight: bold;
    color: #555;
}
.isso-comment > div.text-wrapper > .textarea-wrapper .textarea,
.isso-comment > div.text-wrapper > .textarea-wrapper .preview {
    margin-top: 0.2em;
}
.isso-comment > div.text-wrapper > div.text p {
    margin-top: 0.2em;
}
.isso-comment > div.text-wrapper > div.text p:last-child {
    margin-bottom: 0.2em;
}
.isso-comment > div.text-wrapper > div.text h1,
.isso-comment > div.text-wrapper > div.text h2,
.isso-comment > div.text-wrapper > div.text h3,
.isso-comment > div.text-wrapper > div.text h4,
.isso-comment > div.text-wrapper > div.text h5,
.isso-comment > div.text-wrapper > div.text h6 {
    font-size: 130%;
    font-weight: bold;
}
.isso-comment > div.text-wrapper > div.textarea-wrapper .textarea,
.isso-comment > div.text-wrapper > div.textarea-wrapper .preview {
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    box-shadow: 0 0 2px #888;
}
.isso-comment > div.text-wrapper > .isso-comment-footer {
    font-size: 0.80em;
    color: gray !important;
    clear: left;
}
.isso-feedlink,
.isso-comment > div.text-wrapper > .isso-comment-footer a {
    font-weight: bold;
    text-decoration: none;
}
.isso-feedlink:hover,
.isso-comment > div.text-wrapper > .isso-comment-footer a:hover {
    color: #111111 !important;
    text-shadow: #aaaaaa 0 0 1px !important;
}
.isso-comment > div.text-wrapper > .isso-comment-footer > a {
    position: relative;
    top: .2em;
}
.isso-comment > div.text-wrapper > .isso-comment-footer > a + a {
    padding-left: 1em;
}
.isso-comment > div.text-wrapper > .isso-comment-footer .votes {
    color: gray;
}
.isso-comment > div.text-wrapper > .isso-comment-footer .upvote svg,
.isso-comment > div.text-wrapper > .isso-comment-footer .downvote svg {
    position: relative;
    top: .2em;
}
.isso-comment .isso-postbox {
    margin-top: 0.8em;
}
.isso-comment.isso-no-votes > * > .isso-comment-footer span.votes {
    display: none;
}

.isso-postbox {
    max-width: 68em;
    margin: 0 auto 2em;
    clear: right;
}
.isso-postbox > .form-wrapper {
    display: block;
    padding: 0;
}
.isso-postbox > .form-wrapper > .auth-section,
.isso-postbox > .form-wrapper > .auth-section .post-action {
    display: block;
}
.isso-postbox > .form-wrapper .textarea,
.isso-postbox > .form-wrapper .preview {
    margin: 0 0 .3em;
    padding: .4em .8em;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.isso-postbox > .form-wrapper input[type=checkbox] {
    vertical-align: middle;
    position: relative;
    bottom: 1px;
    margin-left: 0;
}
.isso-postbox > .form-wrapper .notification-section {
    font-size: 0.90em;
    padding-top: .3em;
}
#isso-thread .textarea:focus,
#isso-thread input:focus {
    border-color: rgba(0, 0, 0, 0.8);
}
.isso-postbox > .form-wrapper > .auth-section .input-wrapper {
    display: inline-block;
    position: relative;
    max-width: 25%;
    margin: 0;
}
.isso-postbox > .form-wrapper > .auth-section .input-wrapper input {
    padding: .3em 10px;
    max-width: 100%;
    border-radius: 3px;
    background-color: #fff;
    line-height: 1.4em;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.isso-postbox > .form-wrapper > .auth-section .post-action {
    display: inline-block;
    float: right;
    margin: 0 0 0 5px;
}
.isso-postbox > .form-wrapper > .auth-section .post-action > input {
    padding: calc(.3em - 1px);
    border-radius: 2px;
    border: 1px solid #CCC;
    background-color: #DDD;
    cursor: pointer;
    outline: 0;
    line-height: 1.4em;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.isso-postbox > .form-wrapper > .auth-section .post-action > input:hover {
    background-color: #CCC;
}
.isso-postbox > .form-wrapper > .auth-section .post-action > input:active {
    background-color: #BBB;
}
.isso-postbox > .form-wrapper .preview,
.isso-postbox > .form-wrapper input[name="edit"],
.isso-postbox.preview-mode > .form-wrapper input[name="preview"],
.isso-postbox.preview-mode > .form-wrapper .textarea {
    display: none;
}
.isso-postbox.preview-mode > .form-wrapper .preview {
    display: block;
}
.isso-postbox.preview-mode > .form-wrapper input[name="edit"] {
    display: inline;
}
.isso-postbox > .form-wrapper .preview {
    background-color: #f8f8f8;
    background: repeating-linear-gradient(
        -45deg,
        #f8f8f8,
        #f8f8f8 10px,
        #fff 10px,
        #fff 20px
    );
}
.isso-postbox > .form-wrapper > .notification-section {
    display: none;
    padding-bottom: 10px;
}
@media screen and (max-width:600px) {
    .isso-postbox > .form-wrapper > .auth-section .input-wrapper {
        display: block;
        max-width: 100%;
        margin: 0 0 .3em;
    }
    .isso-postbox > .form-wrapper > .auth-section .input-wrapper input {
        width: 100%;
    }
}
    `
}
