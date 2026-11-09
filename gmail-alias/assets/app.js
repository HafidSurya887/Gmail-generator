(function(){
  var $=function(i){return document.getElementById(i)};
  var results=[];

  function dotVariants(name,count){
    var n=name.length-1;
    if(n<1) return [];
    var total=Math.pow(2,n)-1; // tanpa varian asli
    var masks=[],i;
    if(count>=total||total<=4000){
      for(i=1;i<=total&&masks.length<count;i++) masks.push(i);
      if(count<total){ // acak biar bervariasi
        masks=[];var seen={};
        while(masks.length<count){var r=1+Math.floor(Math.random()*total);if(!seen[r]){seen[r]=1;masks.push(r)}}
      }
    }else{
      var s={};
      while(masks.length<count){var r2=1+Math.floor(Math.random()*total);if(!s[r2]){s[r2]=1;masks.push(r2)}}
    }
    return masks.map(function(m){
      var out=name[0];
      for(var k=0;k<n;k++){ if(Math.floor(m/Math.pow(2,k))%2===1) out+="."; out+=name[k+1]; }
      return out;
    });
  }

  function build(){
    var err=$("err");err.textContent="";
    var raw=$("em").value.trim().toLowerCase();
    var m=raw.match(/^([a-z0-9._+-]+)@(gmail\.com|googlemail\.com)$/);
    if(!m){err.textContent="Masukkan alamat Gmail yang valid, contoh: nama@gmail.com";return null}
    var name=m[1].split("+")[0].replace(/\./g,"");
    if(name.length<1){err.textContent="Nama email tidak valid.";return null}
    var count=parseInt($("n").value,10);
    if(!count||count<1){err.textContent="Jumlah minimal 1.";return null}
    if(count>200){count=200;$("n").value=200}
    var tag=$("tag").value.trim().toLowerCase().replace(/[^a-z0-9_-]/g,"");
    var mode=document.querySelector('input[name=m]:checked').value;
    var dom="@gmail.com",list=[],i;

    if(mode==="plus"){
      for(i=1;i<=count;i++) list.push(name+"+"+tag+i+dom);
    }else if(mode==="dot"){
      list=dotVariants(name,count).map(function(v){return v+dom});
      if(list.length<count) err.textContent="Nama terlalu pendek, hanya ada "+list.length+" variasi titik. Coba jenis Plus atau Keduanya.";
      if(!list.length){err.textContent="Nama terlalu pendek untuk variasi titik. Pakai jenis Plus.";return null}
    }else{
      var d=dotVariants(name,count);
      if(!d.length) d=[name];
      for(i=0;i<count;i++) list.push(d[i%d.length]+"+"+tag+(i+1)+dom);
    }
    return list;
  }

  function render(list){
    results=list;
    var ul=$("list");ul.textContent="";
    list.forEach(function(a){
      var li=document.createElement("li");
      var sp=document.createElement("span");sp.textContent=a;
      var b=document.createElement("button");b.type="button";b.className="ghost";b.textContent="Salin";
      b.addEventListener("click",function(){copy(a,b)});
      li.appendChild(sp);li.appendChild(b);ul.appendChild(li);
    });
    $("cnt").textContent=list.length+" alias";
    $("out").hidden=false;
  }

  function copy(text,btn){
    var done=function(){var t=btn.textContent;btn.textContent="Tersalin";setTimeout(function(){btn.textContent=t},1200)};
    var fallback=function(){
      try{var ta=document.createElement("textarea");ta.value=text;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);done()}catch(e){btn.textContent="Gagal"}
    };
    try{
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done,fallback)}else{fallback()}
    }catch(e){fallback()}
  }

  $("gen").addEventListener("click",function(){var l=build();if(l)render(l)});
  $("all").addEventListener("click",function(){copy(results.join("\n"),$("all"))});
  $("em").addEventListener("keydown",function(e){if(e.key==="Enter"){var l=build();if(l)render(l)}});
})();

if("serviceWorker" in navigator){
  window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").catch(function(){})});
}
