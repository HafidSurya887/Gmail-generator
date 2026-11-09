:root{--bg:#eef1f5;--card:#fff;--ink:#14213d;--mute:#5b6678;--line:#d5dbe4;--acc:#0f766e;--acc-ink:#fff;--soft:#e3f2f0;--warn:#fff4e0;--warn-ink:#6b4400;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0e1522;--card:#17202f;--ink:#e8edf5;--mute:#9aa6ba;--line:#2a3547;--acc:#3cc4b6;--acc-ink:#06201d;--soft:#12302d;--warn:#2d2410;--warn-ink:#f0d38a}}
:root[data-theme="dark"]{--bg:#0e1522;--card:#17202f;--ink:#e8edf5;--mute:#9aa6ba;--line:#2a3547;--acc:#3cc4b6;--acc-ink:#06201d;--soft:#12302d;--warn:#2d2410;--warn-ink:#f0d38a}
*{box-sizing:border-box}
html{scroll-padding-top:env(safe-area-inset-top,0px)}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.5 "Bricolage Grotesque",system-ui,sans-serif}
main{max-width:520px;margin:0 auto;padding:20px 16px 40px}
h1{font-size:28px;line-height:1.15;margin:8px 0 6px;letter-spacing:-.02em}
.sub{color:var(--mute);margin:0 0 20px}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:14px}
label{display:block;font-weight:500;margin:0 0 6px}
input[type=text],input[type=email],input[type=number]{width:100%;font:inherit;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:15px;padding:12px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink)}
input:focus-visible,button:focus-visible,.seg label:focus-within{outline:3px solid var(--acc);outline-offset:2px}
.row{display:flex;gap:10px}.row>div{flex:1}
.field{margin-bottom:14px}.field:last-child{margin-bottom:0}
.seg{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.seg input{position:absolute;opacity:0;pointer-events:none}
.seg label{margin:0;text-align:center;padding:10px 6px;border:1px solid var(--line);border-radius:10px;cursor:pointer;font-weight:500;font-size:14px}
.seg input:checked+label{background:var(--acc);color:var(--acc-ink);border-color:var(--acc)}
.hint{font-size:13px;color:var(--mute);margin:6px 0 0}
button{font:inherit;font-weight:700;border:0;border-radius:10px;padding:13px 16px;cursor:pointer}
.go{width:100%;background:var(--acc);color:var(--acc-ink)}
.ghost{background:var(--soft);color:var(--ink);font-weight:500;padding:8px 12px;font-size:14px}
.err{color:#c0392b;font-size:14px;margin:8px 0 0;min-height:1em}
.head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.head b{font-size:15px}
ul{list-style:none;margin:0;padding:0}
li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:9px 0;border-top:1px solid var(--line)}
li:first-child{border-top:0}
li span{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:14px;overflow-wrap:anywhere}
.note{background:var(--warn);color:var(--warn-ink);border-radius:12px;padding:12px 14px;font-size:14px}
.note p{margin:0 0 6px}.note p:last-child{margin:0}
