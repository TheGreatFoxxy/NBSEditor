(
  function(t){
    function e(e){
      for(var n,s,o=e[0],r=e[1],l=e[2],u=0,d=[];
          u<o.length;
          u++)s=o[u],a[s]&&d.push(a[s][0]),a[s]=0;
      for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);
      c&&c(e);
      while(d.length)d.shift()();
      return A.push.apply(A,l||[]),i()
    }
    function i(){
      for(var t,e=0;
          e<A.length;
          e++){
        for(var i=A[e],n=!0,o=1;
            o<i.length;
            o++){
          var r=i[o];
          0!==a[r]&&(n=!1)
        }
        n&&(A.splice(e--,1),t=s(s.s=i[0]))
      }
      return t
    }
    var n={},a={app:0},A=[];
    function s(e){
      if(n[e])
        return n[e].exports;
      var i=n[e]={i:e,l:!1,exports:{}
                 };
      return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports
    }
    s.m=t,s.c=n,s.d=function(t,e,i){
      s.o(t,e)||Object.defineProperty(t,e,{
        enumerable:!0,get:i
      })
    },
      s.r=function(t){
      "undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),
        Object.defineProperty(t,"__esModule",{value:!0})
    },
      s.t=function(t,e){
      if(1&e&&(t=s(t)),8&e)
        return t;
      if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;
      var i=Object.create(null);
      if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),
         2&e&&"string"!=typeof t)
        for(var n in t)s.d(i,n,function(e){
          return t[e]
        }.bind(null,n));
      return i
    },
      s.n=function(t){
      var e=t&&t.__esModule?function(){
        return t["default"]}:function(){return t};
      return s.d(e,"a",e),e
    },
      s.o=function(t,e){
      return Object.prototype.hasOwnProperty.call(t,e)
    },
      s.p="";
    var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);
    o.push=e,o=o.slice();
    for(
      var l=0;
      l<o.length;
      l++)e(o[l]);
    var c=r;
    A.push([0,"chunk-vendors"]),
      i()
  })
({
  0:function(t,e,i){
  t.exports=i("56d7")
  },
  "022f":function(t,e,i){
    "use strict";
    var n=i("baf4"),a=i.n(n);
    a.a
  },
  "034f":function(t,e,i){
    "use strict";
    var n=i("64a9"),a=i.n(n);
    a.a
  },
  "0379":function(t,e,i){
    "use strict";
    var n=i("f4a7"),a=i.n(n);
    a.a
  },
  "0442":function(t,e,i){
    t.exports=i.p+"media/pling.5e0a5ea2.ogg"
  },
  "0d08":function(t,e,i){},
  "13d3":function(t,e,i){},
  "157e":function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAAyUlEQVQ4y43Tq3KGQAwF4K+duqzAIXjoPiUCt4L1vyBbqCIxzMCcS84JX7+u6QbCcGqIfP/tZX46hjASEwKHUxNGgYHhdGoGqc+an6PEEDZ0iy4s6GAUtxgiM7h2YbEkQ5QYIrWna/bc5sRW8oBU3W3pvmWivZzkoTk1u8hdZjfvDBt/OU4v91TanLgb/5/pneGw2tP5kQmM1K8xrNnA8xLC1Wm3FJOcqPlvcGS2lRwurZE8soU1O63cw63r8WQrJ/lEjUcevXrVH/utSPdo3chkAAAAAElFTkSuQmCC"
  },
  "17e2":function(t,e,i){},
  1824:function(t,e,i){},
  "1c94":function(t,e,i){
    t.exports=i.p+"media/bell.bda178e0.ogg"
  },
  "226a":function(t,e,i){
    t.exports=i.p+"img/settings.4ba07f42.svg"
  },
  2397:function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAA6UlEQVRIx7WVPQ6CQBCFvzGWJrQWUtDTGhMv4hk9CqHF2sITkGC9Ni7Mzi6JicOrYGez782/HDuQiQUj66jS33CAHX9iLxNw/+FmC+EB8lqO5OahYM0QasXWAu+UPWIbBeEC0infR8PeAoObApN3y84Aoi+cgf77PXrHIGFn8XPV7hMD5Zt9PUFTtjsq6NWpynNk51l+YINK1Hm27NbmrsDmOdQgkb0pxMlXQSHPsQOzCowdenJRUBlfDUrs83S6esVg9rVOJ88au65KvyxY9qw7S7PRVUE2dU3NZ7PRS4Fk21nDbuottvMH0A9KYThzPBQAAAAASUVORK5CYII="
  },
  "284a":function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAG1BMVEWKcyC/qzGUgB7LtjCrkiWlSSykUSuSQSOHNRz5UfPmAAAAl0lEQVQoz22RgQ1EIQhDu4IrdAVWYAVXcAVWuLGv4M9P7kCjwIuaUoHFBaN2z2VoIFMm8ETwDkAFlaAK9wHsE+eciPhUPB3oMR2l36iLHZQgGF70D1xyU1pFiZtBIrebDcB+5wR40+dqB7jmuFNFWtRAqOsdW+tpvwGQ0FDbZSMHUD5n22QZ3UAZmB+xClsHVabkFK7ZwBcAu11fTJ/qrAAAAABJRU5ErkJggg=="
  },
  2854:function(t,e,i){
    "use strict";
    var n=i("17e2"),a=i.n(n);
    a.a
  },
  "2ed3":function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEXEbxSgVgurYRLjih3jpkt+PQ4K55LmAAAAcUlEQVQoz6XR0Q2AMAgE0FvhVmAFVmAF9l9FoH5oIWpi4iG8pn4IADAjUYTVb6CqWcCVCcwoZkqLBjYA1aSGOAENE9THNBPlHXQE/Q74CX75Dw0qvl27gz8DcsCJtZQOntvyFXbwesgcsp8g3qzimQYHAl1JL1g18PUAAAAASUVORK5CYII="
  },
  "2f7d":function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEX72nTMhlSFUClvRSL/////8NqIaDlzTiZIrTq4AAAAp0lEQVQoz22QQQEEMQgDsRALWIgFLGABC9jf5J5HPy2dQghEIEkEwKxGThzQAe4mOGjHFzjMFJul3nPBKNfCW7HkPAAX1W31xk7HA6TCkLbqpusB1sbVT7IjygtChmRu7XHSn/+gdTOVXi0LUQ8ApMb28LDzC2AhpE935gUaOdWyh+qdsxfseMuaSpKywAsmtB/VIOXKi7oA/duxxX0/wDpbcismZwd8ar5sgzQCBhwAAAAASUVORK5CYII="
  },
  3500:function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAFVBMVEW4lF+vj1XCnWKWdEGfhE1+YjdnUCz7bB8LAAAAmElEQVQoz22RUQ3AMAhEzwIWagELZwEL9S9hd3RfpSyB5mXjQQcEluPPiQkQkYyuADlBHxFUmOQEWZVZe1dt5z0BFu1zUltLbqBGwWB2y+5/A9n0apyR5Z7AQmtdfZgArVt/gA9wbN5ND3OCdWyay1WfDCBdr69SLhMsWgz2Ffg4wLl890Nv+QC9f09oOyfw/duc/Rs8xwU+y/VXqQ4gnnwAAAAASUVORK5CYII="
  },
  "3c2f":function(t,e,i){},
  "3d00":function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEXJxafOyq3c2cDj4Mro5dLDv6H+XbVfAAAAhUlEQVQoz3XR4QGFIAgE4FvhVmAFVnAF9l/lcVg9U/JX9xWaANDcRy13Q+AAZTeSVg84wRSzMoJ6ZycoZ0JSSQeMWkUdDAsoltBGB/r2qooWqHwR+AF3/IDnWK0e/jUx/2ODvJwEc8952x2yw3NPPB17gc0hqM1L11fAe1A8IbAOW73Y4AdRzluD+fSjHgAAAABJRU5ErkJggg=="
  },
  "3d0b":function(t,e,i){
    "use strict";
    var n=i("45b9"),a=i.n(n);
    a.a
  },
  "45b9":function(t,e,i){},
  "45c3":function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAG1BMVEX1zCf5vSPTljL//ZD+/73/7E//2D7+4EjMjie9BMWyAAAAjUlEQVQoz3WQwRHAIAgEaYEWbIEWbIEWaOFasOxwMskHoolmd8LJKJJD9S7clnRhe7ubmXuE2SR2BEgsxI8gIzIX8EGow4sDiFm8fINPF8LE/Ln4R1wGy1QGoR+ztVizKE6DUUQdyeFgaBNSPUkIt1m895etMbQJ5YeyMuswiZzFvEQ/Xax18jl34dvEA1KihI1YsoPEAAAAAElFTkSuQmCC"
  },
  "49b8":function(t,e,i){
    "use strict";
    var n=i("e891"),a=i.n(n);
    a.a
  },
  5485:function(t,e,i){},
  "56d7":function(t,e,i){
    "use strict";
    i.r(e);
    i("cadf"),i("551c"),i("097d");
    var n=i("2b0e"),
        a=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",{attrs:{id:"app"}},
                   [i("vue-title",{attrs:{title:t.tabTitle}}),
                    i("overlay",{ref:"welcomeOverlay",attrs:{dismissable:""},model:{value:t.state.showWelcome,callback:
                                                                                    function(e){
                                                                                      t.$set(t.state,"showWelcome",e)
                                                                                    },
                                                                                    expression:"state.showWelcome"
                                                                                   }
                                },
                      [i("welcome-overlay")],
                      1),
                    i("overlay",{attrs:{visible:t.state.loading}},
                      [i("loading-overlay")],
                      1),
                    i("overlay",{attrs:{dismissable:""},model:{value:t.state.showSongDetails,callback:
                                                               function(e){
                                                                 t.$set(t.state,"showSongDetails",e)
                                                               },
                                                               expression:"state.showSongDetails"
                                                              }
                                },
                      [i("song-details-overlay",{attrs:{song:t.state.song}})],
                      1),
                    i("overlay",{attrs:{dismissable:""},model:{value:t.state.showSettings,callback:
                                                               function(e){
                                                                 t.$set(t.state,"showSettings",e)
                                                               },
                                                               expression:"state.showSettings"
                                                              }
                                },
                      [i("settings-overlay",{attrs:{options:t.state.options}})],
                      1),
                    i("div",{attrs:{id:"main"}},[i("toolbar",{attrs:{id:"toolbar"}}),
                                                 i("div",{attrs:{id:"middle"}},
                                                   [i("layer-list",{attrs:{song:t.state.song,id:"layer-list"}}),
                                                    i("editor",{ref:"canvas",attrs:{song:t.state.song,editor:t.state.editor,id:"editor"}})],
                                                   1),
                                                 i("keyboard",{attrs:{id:"keyboard",editor:t.state.editor}})],
                      1)],
                   1)},
        A=[],s=(i("ac4d"),i("8a81"),i("ac6a"),i("5df3"),i("d4ec")),o=i("bee2"),r=new AudioContext,l=r.createGain();
    l.connect(r.destination);
    var c=function(){
      function t(){
        Object(s["a"])(this,t)
      }return Object(o["a"])(t,null,[{key:"setVolume",value:function(t){l.gain.value=t}
                                     },
                                     {key:"playNote",value:function(t,e,i){
                                       var n=Math.pow(2,t/12),a=r.createBufferSource();
                                       if(a.playbackRate.value=n,a.buffer=e.audioBuffer,a.start(0),100!==i){
                                         var A=r.createGain();
                                         A.gain.value=i,a.connect(A),a=A}a.connect(l)
                                     }
                                     },
                                     {
                                       key:"decodeAudioData",value:function(t){
                                         return r.decodeAudioData(t)
                                       }
                                     }]),
        t
    }(),
        u=function(){
          function t(){
            Object(s["a"])(this,t),
              this.name="",this.author="",this.originalAuthor="",this.description="",this.layers=[],this.tempo=5,this.size=0,this.currentTick=0,this.paused=!0,this.timeSignature=4,this.minutesSpent=0,this.leftClicks=0,this.rightClicks=0,this.blocksAdded=0,this.blocksRemoved=0,this.midiName="",this.instruments=h.builtin
          }
          return Object(o["a"])(t,[{
            key:"addLayer",value:function(){
              var t=new d(this,this.layers.length+1);
              return this.layers.push(t),t
            }
          },
                                   {
                                     key:"deleteLayer",value:function(t){
                                       var e=this.layers.indexOf(t);
                                       this.layers.splice(e,1)
                                     }
                                   },
                                   {
                                     key:"play",value:function(){
                                       this.currentTick>=this.size&&(this.currentTick=0),this.paused=!1
                                     }
                                   },
                                   {
                                     key:"pause",value:function(){this.paused=!0}
                                   },
                                   {
                                     key:"timePerTick",get:function(){return 20/this.tempo*50}
                                   },
                                   {
                                     key:"currentTime",get:function(){
                                       return this.currentTick*this.timePerTick
                                     }
                                   },
                                   {
                                     key:"endTime",get:function(){
                                       return this.size*this.timePerTick
                                     }
                                   },
                                   {
                                     key:"tick",get:function(){
                                       return Math.floor(this.currentTick)
                                     }
                                   }]),
            t
        }
    (),d=function(){
      function t(e,i){
        Object(s["a"])(this,t),
          this.song=e,this.name="",this.volume=1,this.notes=[],this.id=i
      }
      return Object(o["a"])(t,[{key:"delete",value:function(){
        this.song.deleteLayer(this)
      }
                               },
                               {
                                 key:"setNote",value:function(t,e,i){
                                   t+1>this.song.size&&(this.song.size=t+1);
                                   var n=new m(this,t);
                                   return n.key=e,n.instrument=i,this.notes[t]=n,n
                                 }
                               },
                               {
                                 key:"deleteNote",value:function(t){
                                   delete this.notes[t]
                                 }
                               },
                               {
                                 key:"placeholder",get:function(){
                                   return"Layer "+this.id
                                 }
                               }]),
        t
    }(),m=function t(e,i){
      Object(s["a"])(this,t),this.layer=e,this.tick=i,this.key=45,this.instrument=null,this.lastPlayed=null
    },
        h=function(){
          function t(e,i,n,a,A){
            Object(s["a"])(this,t),this.name=e,this.id=i,this.audioSrc=n,this.textureSrc=a,this.pressKey=A,this.audioBuffer=null
          }
          return Object(o["a"])(t,[{
            key:"load",value:function(){
              return Promise.all([this.loadAudio(),this.loadTexture()])
            }
          },
                                   {
                                     key:"loadAudio",value:function(){
                                       var t=this;
                                       return fetch(this.audioSrc).then(function(t){
                                         return t.arrayBuffer()
                                       }).then(function(t){
                                         return c.decodeAudioData(t)
                                       }).then(function(e){
                                         return t.audioBuffer=e
                                       })
                                     }
                                   },
                                   {
                                     key:"loadTexture",value:function(){
                                       var t=this;
                                       return new Promise(function(e,i){
                                         var n=new Image;
                                         n.src=t.textureSrc,t.baseTexture=n,n.onload=function(){return e(n)},
                                           n.onerror=function(t){
                                           return i(t)
                                         }
                                       })
                                     }
                                   }]),
            t
        }();
    h.builtin=[
      new h("Harp",0,i("9661"),i("cdab"),!0),
      new h("Double Bass",1,i("9566"),i("3500"),!1),
      new h("Bass Drum",2,i("6b8b"),i("157e"),!1),
      new h("Snare Drum",3,i("6060"),i("cc70"),!1),
      new h("Click",4,i("a8d2"),i("2397"),!1),
      new h("Guitar",5,i("645e"),i("9398"),!1),
      new h("Flute",6,i("c83b"),i("a35c"),!1),
      new h("Bell",7,i("1c94"),i("45c3"),!1),
      new h("Chime",8,i("c509"),i("dc2c"),!1),
      new h("Xylo-bone",9,i("8786"),i("3d00"),!1),
      new h("Iron Xylophone",10,i("96d7"),i("6361")),
      new h("Cow Bell",11,i("6823"),i("c303")),
      new h("Didgeridoo",12,i("e92b"),i("2ed3")),
      new h("Bit",13,i("c34a"),i("6f5e")),
      new h("Banjo",14,i("b6b8"),i("284a")),
      new h("Pling",15,i("0442"),i("2f7d")),
      new h("Amythest",16,i("amyt"),i("hest")),
      new h("Portal",17,i("prtl"),i("otal")),
      new h("XP Orb",18,i("xpob"),i("xprb")),
      new h("Firework Blast",19,i("fire"),i("work"))
    ],
      u.fromArrayBuffer=function(t){
      var e=new u,i=new DataView(t),n=0;
      function a(){
        var t=i.getInt8(n,!0);
        return n+=1,t
      }
      function A(){
        var t=i.getUint8(n,!0);
        return n+=1,t
      }
      function s(){
        var t=i.getInt16(n,!0);
        return n+=2,t
      }
      function o(){
        var t=i.getInt32(n,!0);
        return n+=4,t
      }
      function r(){
        for(var t=o(),e="",i=0;i<t;i++){
          var n=A();
          e+=String.fromCharCode(n)
        }
        return e
      }
      e.size=s();
      var l=s();
      e.name=r(),e.author=r(),e.originalAuthor=r(),e.description=r(),e.tempo=s()/100,a(),a(),e.timeSignature=a(),e.minutesSpent=o(),e.leftClicks=o(),e.rightClicks=o(),e.blocksAdded=o(),e.blocksRemoved=o(),e.midiName=r();
      var c=-1,d=[];
      while(1){
        var m=s();
        if(0===m)break;
        c+=m;
        var h=-1;
        while(1){
          var f=s();
          if(0===f)break;
          h+=f;
          var g=a(),p=a();
          d.push({
            instrument:g,key:p,layer:h,tick:c
          })
        }
      }
      if(t.byteLength>n)
        for(var V=0;
            V<l;
            V++){
          var v=e.addLayer();
          v.name=r(),v.volume=a()/100
        }
      for(var b=0;b<d.length;b++){
        var y=d[b];
        if(y.layer>=e.layers.length)
          while(y.layer>=e.layers.length)e.addLayer();
        var C=e.layers[y.layer],E=y.key,k=y.tick,U=e.instruments[y.instrument];
        C.setNote(k,E,U)
      }
      return e
    },u.toArrayBuffer=function(t){
      function e(e){
        var i=e.writeString,n=e.writeByte,a=e.writeShort,A=e.writeInt;a(t.size),a(t.layers.length),i(t.name),i(t.author),i(t.originalAuthor),i(t.description),a(100*t.tempo),n(0),n(0),n(t.timeSignature),A(t.minutesSpent),A(t.leftClicks),A(t.rightClicks),A(t.blocksAdded),A(t.blocksRemoved),i(t.midiName);
        for(var s=-1,o=0;o<t.size;o++){
          var r=!1,l=!0,c=!1,u=void 0;
          try{
            for(var d,m=t.layers[Symbol.iterator]();
                !(l=(d=m.next()).done);
                l=!0){
              var h=d.value;
              if(h.notes[o]){r=!0;break}
            }
          }
          catch(q){c=!0,u=q}
          finally{
            try{l||null==m.return||m.return()}
            finally{if(c)throw u}
          }
          if(r){
            var f=o-s;s=o,a(f);
            for(var g=-1,p=0;p<t.layers.length;p++){
              var V=t.layers[p],v=V.notes[o];
              if(v){
                var b=p-g;g=p,a(b),n(v.instrument.id),n(v.key)
              }
            }
            a(0)
          }
        }
        a(0);
        var y=!0,C=!1,E=void 0;
        try{
          for(var k,U=t.layers[Symbol.iterator]();
              !(y=(k=U.next()).done);
              y=!0){
            var w=k.value;
            i(w.name),n(Math.floor(100*w.volume))
          }
        }
        catch(q){C=!0,E=q}
        finally{
          try{
            y||null==U.return||U.return()
          }
          finally{
            if(C)throw E
          }
        }
        n(0)
      }
      var i=0;e({
        writeString:function(t){i+=t.length+4},writeByte:function(){i+=1},writeShort:function(){i+=2},writeInt:function(){i+=4}
      });
      var n=new ArrayBuffer(i),a=new DataView(n),A=0;
      function s(t){a.setInt8(A,t,!0),A+=1}
      function o(t){a.setUint8(A,t,!0),A+=1}
      function r(t){a.setInt16(A,t,!0),A+=2}
      function l(t){a.setInt32(A,t,!0),A+=4}
      function c(t){l(t.length);
                    var e=!0,i=!1,n=void 0;
                    try{for(var a,A=t[Symbol.iterator]();
                            !(e=(a=A.next()).done);
                            e=!0){
                      var s=a.value;
                      o(s.charCodeAt(0))
                    }
                       }
                    catch(r){i=!0,n=r}
                    finally{
                      try{e||null==A.return||A.return()}
                      finally{if(i)throw n}
                    }
                   }
      return e({
        writeByte:s,writeShort:r,writeInt:l,writeString:c
      }),n
    },u.new=function(){
      var t=new u;
      return t.addLayer(),t
    };
    var f,g,p=function(){
      var t=this,e=t.$createElement,i=t._self._c||e;
      return i("div",{staticClass:"editor"},[i("canvas",{ref:"canvas",on:{
        mousedown:function(e){
          return e.preventDefault(),t.handleMouse(e)
        },
        mouseup:function(e){
          return e.preventDefault(),t.handleMouse(e)
        },
        mousemove:t.handleMouse,contextmenu:function(t){
          t.preventDefault()
        }
      }
                                                        })])
    },
        V=[],v=(i("6c7b"),function(){
          function t(){
            Object(s["a"])(this,t),this.firstTick=0
          }
          return Object(o["a"])(t,[{
            key:"lastTick",get:function(){
              return this.firstTick+this.width
            },
            set:function(t){
              this.firstTick=t-this.width
            }
          }]),
            t
        }
                ()),b=function(){
          function t(e){
            Object(s["a"])(this,t),this.song=e,this.currentKey=45,this.currentInstrument=e.instruments[0],this.viewport=new v,this.modified=!1
          }
          return Object(o["a"])(t,null,[{
            key:"formatKey",value:function(t){var e=[
              "C-","C#","D-","D#","E-","F-","F#","G-","G#","A-","A#","B-"],i=e[(t-3)%12],n=Math.floor((t-3)/12)+1;
                                              return"".concat(i).concat(n)
                                             }
          }]),
            Object(o["a"])(t,[{
            key:"getLayer",value:function(t){
              if(t instanceof d)return t;
              if("number"===typeof t&&this.song.layers[t])
                return this.song.layers[t];
              throw new Error("Unknown layer: "+t)
            }
          },
                              {
                                key:"placeNote",value:function(t,e){
                                  return this.modified=!0,this.setNote(t,e,this.currentKey,this.currentInstrument)
                                }
                              },
                              {
                                key:"getNote",value:function(t,e){
                                  return this.getLayer(t).notes[e]
                                }
                              },
                              {
                                key:"setNote",value:function(t,e,i,n){
                                  return this.getLayer(t).setNote(e,i,n)
                                }
                              },
                              {
                                key:"deleteNote",value:function(t,e){
                                  this.modified=!0,this.getLayer(t).deleteNote(e)
                                }
                              },
                              {
                                key:"pickNote",value:function(t){
                                  this.currentInstrument=t.instrument,this.currentKey=t.key
                                }
                              },
                              {
                                key:"seekTick",value:function(t){
                                  this.song.currentTick=t
                                }
                              },
                              {
                                key:"updateViewport",value:function(){
                                  this.song.currentTick>=this.viewport.lastTick&&(this.viewport.firstTick=this.song.tick),this.song.currentTick<this.viewport.firstTick&&(this.viewport.firstTick=this.song.tick)
                                }
                              }]),
            t
        }(),y=32,C=i("45eb"),E=i("99de"),k=i("7e84"),U=i("262e"),w=new n["a"]({
              data:function(){
                var t={
                  loading:!0,song:u.new(),editor:null,showWelcome:!1,showSongDetails:!1,showSettings:!1,options:{
                    keyOffset:45,loop:!1,volume:1
                  }
                };
                return t.editor=new b(t.song),t
              },
              watch:{
                "options.volume":function(t){c.setVolume(t)},
                "options.loop":function(t){t&&this.song.tick===this.song.size&&this.song.play()}
              },
              methods:{
                setSong:function(t){
                  this.song=t,this.editor=new b(t)
                },
                playNote:function(t,e,i){
                  if(e instanceof h)
                    var n="number"===typeof t?t:t.key,a=e,A=i?i.volume:100;
                  else n=t.key,a=t.instrument,A=e?e.volume:100;
                  c.playNote(n-this.options.keyOffset,a,A)
                },
                loadFile:function(t){
                  var e=this;
                  this.loading=!0;
                  var i=new FileReader;
                  return i.readAsArrayBuffer(t),new Promise(function(t,n){
                    i.onload=function(i){
                      try{
                        var a=u.fromArrayBuffer(i.target.result)
                        }
                      catch(i){
                        return void n(i)
                      }
                      e.loading=!1,e.setSong(a),(a.name||a.author||a.originalAuthor||a.description)&&(e.showSongDetails=!0),t(a)
                    },
                      i.onerror=function(t){
                      return n(t)
                    }
                  })
                }
              }
        }),
        q=function(){
          function t(){
            Object(s["a"])(this,t),this.x=0,this.y=0,this.height=0,this.width=0
          }
          return Object(o["a"])(t,[{
            key:"update",value:function(t){}
          },
                                   {
                                     key:"intersectsPoint",value:function(t,e){
                                       if(e)i=t,n=e;
                                       else var i=t.x,n=t.y;
                                       var a=this.x,A=this.y,s=this.width,o=this.height;
                                       return i>=a&&i<=a+s&&n>=A&&n<=A+o
                                     }
                                   },
                                   {
                                     key:"render",value:function(t){
                                       throw new Error("EditorObject did not implement `render(ctx) { ... }`")}
                                   },
                                   {
                                     key:"interact",value:function(t){return!1}
                                   },
                                   {
                                     key:"dragged",value:function(t,e,i){}
                                   },
                                   {
                                     key:"interactEnd",value:function(t,e){}
                                   },
                                   {
                                     key:"centerX",get:function(){
                                       return this.x+this.width/2
                                     }
                                   }]),
            t
        }
    (),Q=function(t){
      function e(){
        var t;
        return Object(s["a"])(this,e),t=Object(E["a"])(this,Object(k["a"])(e).call(this)),t.color="black",t.height=16,t.mouseHover=!1,t.active=!1,t.visible=!0,t
      }
      return Object(U["a"])(e,t),Object(o["a"])(e,[{
        key:"update",value:function(t){
          this.width=Math.max(t.editor.viewport.width/t.song.size*t.canvas.width,12),
            this.x=t.editor.viewport.firstTick/t.song.size*t.ctx.canvas.width,
            this.y=t.canvas.height-this.height,
            this.visible=t.song.size>t.editor.viewport.width,
            this.active?this.color="#555":this.intersectsPoint(t.mouse)?this.color="#666":this.color="#777"
        }
      },
                                                   {
                                                     key:"render",value:function(t){
                                                       this.visible&&(t.fillStyle=this.color,t.fillRect(this.x,this.y,this.width,this.height))
                                                     }
                                                   },
                                                   {
                                                     key:"interact",value:function(t,e){
                                                       return 0===e&&(this.active=!0,!0)
                                                     }
                                                   },
                                                   {
                                                     key:"interactEnd",value:function(t){this.active=!1}
                                                   },
                                                   {
                                                     key:"dragged",value:function(t,e,i){
                                                       var n=e/t.canvas.width*t.song.size,a=t.song.currentTick+n;t.song.currentTick=a,t.editor.viewport.firstTick=Math.floor(a)-1,t.song.pause()
                                                     }
                                                   }]),
        e
    }(q),B=function(t){
      function e(){
        var t;
        return Object(s["a"])(this,e),t=Object(E["a"])(this,Object(k["a"])(e).call(this)),t.value=0,t.visualWidth=2,t.width=4,t.draggable=!1,t.dragging=!1,t.color="black",t
      }
      return Object(U["a"])(e,t),Object(o["a"])(e,[{
        key:"update",value:function(t){
          this.x=(this.value-t.editor.viewport.firstTick)*y-this.width/2,this.height=t.ctx.canvas.height,this.draggable&&(this.dragging||this.intersectsPoint(t.mouse))&&(t.cursor="ew-resize")
        }
      },
                                                   {
                                                     key:"render",value:function(t){
                                                       var e=this.centerX-this.visualWidth/2;e+this.width<0||e>t.canvas.width||(t.fillStyle=this.color,t.fillRect(e,0,this.visualWidth,this.height))
                                                     }
                                                   },
                                                   {
                                                     key:"interact",value:function(t,e){
                                                       return!(0!==e||!this.draggable)&&(this.dragging=!0,!0)
                                                     }
                                                   },
                                                   {
                                                     key:"interactEnd",value:function(t){
                                                       this.dragging=!1
                                                     }
                                                   }]),
        e
    }
    (q),I=function(t){
      function e(){
        return Object(s["a"])(this,e),Object(E["a"])(this,Object(k["a"])(e).apply(this,arguments))
      }
      return Object(U["a"])(e,t),Object(o["a"])(e,[{
        key:"update",value:function(t){
          this.value=t.song.currentTick,this.draggable=!0,Object(C["a"])(Object(k["a"])(e.prototype),"update",this).call(this,t)
        }
      },
                                                   {
                                                     key:"dragged",value:function(t,e,i){
                                                       var n=e/y;
                                                       t.song.currentTick+=n,t.song.pause()
                                                     }
                                                   },
                                                   {
                                                     key:"render",value:function(t){
                                                       Object(C["a"])(Object(k["a"])(e.prototype),"render",this).call(this,t),t.beginPath(),t.moveTo(this.centerX-8,0),t.lineTo(this.centerX+8,0),t.lineTo(this.centerX,8),t.fill()
                                                     }
                                                   }]),
        e
    }
    (B),S=function(t){
      function e(){
        var t;
        return Object(s["a"])(this,e),t=Object(E["a"])(this,Object(k["a"])(e).call(this)),t.value=0,t.visualWidth=1,t.color="#999",t
      }
      return Object(U["a"])(e,t),e}(B),R=function(t){
        function e(){
          var t;
          return Object(s["a"])(this,e),t=Object(E["a"])(this,Object(k["a"])(e).call(this)),t.visualWidth=1,t.color="#999",t.draggable=!0,t
        }
        return Object(U["a"])(e,t),Object(o["a"])(e,[{
          key:"update",value:function(t){
            this.dragging||(this.value=t.song.size),Object(C["a"])(Object(k["a"])(e.prototype),"update",this).call(this,t)
          }
        },
                                                     {
                                                       key:"dragged",value:function(t,e,i){
                                                         this.value+=e/y
                                                       }
                                                     },
                                                     {
                                                       key:"interactEnd",value:function(t){
                                                         this.value=Math.round(this.value),t.song.size=this.value,Object(C["a"])(Object(k["a"])(e.prototype),"interactEnd",this).call(this,t)
                                                       }
                                                     }]),
          e
      }
    (B),x=function(t){
      function e(){
        var t;
        return Object(s["a"])(this,e),t=Object(E["a"])(this,Object(k["a"])(e).call(this)),t.reset(),t
      }
      return Object(U["a"])(e,t),Object(o["a"])(e,[{key:"intersectsPoint",value:function(){return!0}
                                                   },
                                                   {
                                                     key:"render",value:function(){}
                                                   },
                                                   {
                                                     key:"reset",value:function(){
                                                       this.button=0,this.moved=!1
                                                     }
                                                   },
                                                   {
                                                     key:"interact",value:function(t,e){
                                                       this.button=e;
                                                       var i=Math.floor(t.mouse.x/y)+t.editor.viewport.firstTick,n=Math.floor(t.mouse.y/y)-1;
                                                       if(0===this.button){
                                                         var a=t.editor.placeNote(n,i);
                                                         w.playNote(a)
                                                       }
                                                       else if(1===e){
                                                         var A=t.editor.getNote(n,i);
                                                         A&&t.editor.pickNote(A)
                                                       }
                                                       else 2===e&&t.editor.deleteNote(n,i);
                                                       return!0
                                                     }
                                                   }]),
        e
    }
    (q),O={
      props:{editor:b,song:u},data:function(){
        return{
          canvas:null,ctx:null,textureCache:{},cursor:"",mouse:{
            x:0,y:0,right:!1,left:!1,middle:!1
          },
          boundingRects:null,objects:[],interaction:null
        }
      },
      mounted:function(){
        this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.objects.push(new x),this.objects.push(new R),this.objects.push(new S),this.objects.push(new I),this.objects.push(new Q)
      },
      methods:{
        handleMouse:function(t){
          if("mouseup"===t.type||"mousedown"===t.type){
            var e="mousedown"===t.type;
            0===t.button?this.mouse.left=e:1===t.button?this.mouse.middle=e:2===t.button&&(this.mouse.right=e),e?this.findInteraction(t.button):this.endInteraction()
          }
          else if("mousemove"===t.type){
            var i=this.mouse.x,n=this.mouse.y;
            if(this.mouse.x=t.clientX-this.boundingRects.left,this.mouse.y=t.clientY-this.boundingRects.top,this.interaction){
              var a=this.mouse.x-i,A=this.mouse.y-n;this.interaction.dragged(this,a,A)
            }
          }
        },
        endInteraction:function(){
          this.interaction&&(this.interaction.interactEnd(this),this.interaction=null)
        },
        findInteraction:function(t){
          var e=this.objects.length;
          while(e--){
            var i=this.objects[e];
            if(i.intersectsPoint(this.mouse)){
              var n=i.interact(this,t);
              if(n)return this.interaction=i,!0
            }
          }
          return!1
        },
        updateObjects:function(){
          var t=!0,e=!1,i=void 0;
          try{
            for(var n,a=this.objects[Symbol.iterator]();
                !(t=(n=a.next()).done);t=!0){
              var A=n.value;A.update(this)
            }
          }
          catch(s){e=!0,i=s}
          finally{
            try{
              t||null==a.return||a.return()
            }
            finally{
              if(e)throw i
            }
          }
        },
        renderObjects:function(t){
          var e=!0,i=!1,n=void 0;
          try{
            for(var a,A=this.objects[Symbol.iterator]();
                !(e=(a=A.next()).done);
                e=!0){
              var s=a.value;s.render(this.ctx,t)
            }
          }
          catch(o){i=!0,n=o}
          finally{
            try{
              e||null==A.return||A.return()
            }
            finally{
              if(i)throw n
            }
          }
        },
        drawNotes:function(t){
          for(var e=function(t,e){
            var i=document.createElement("canvas");i.width=y,i.height=y;
            var n=i.getContext("2d");
            n.drawImage(t.baseTexture,0,0),n.fillStyle="rgba(0, 0, 0, 0.35)",n.strokeStyle="black",n.lineWidth=4,n.rect(0,0,i.width,i.height),n.fill(),n.stroke(),
              n.fillStyle="white",
              n.font="12px sans-serif",
              n.textAlign="center",
              n.textBaseline="middle";
            var a=b.formatKey(e);
            return n.fillText(a,y/2,y/2),i
          },
              i=(this.editor.viewport.width,this.editor.viewport.firstTick),n=this.editor.viewport.lastTick,a=0;a<this.song.layers.length;a++){
            var A=this.song.layers[a];
            if(!(A.notes.length<i))
              for(
                var s=a*y,o=i;o<n;o++){
                var r=(o-i)*y,l=A.notes[o];
                if(l){
                  var c=null===l.lastPlayed?1/0:t-l.lastPlayed;
                  c<1e3&&(this.ctx.globalAlpha=1-(1e3-c)/2e3);
                  var u="".concat(l.instrument.id,"-").concat(l.key);
                  if(!(u in this.textureCache)){
                    var d=e(l.instrument,l.key);
                    this.textureCache[u]=d
                  }
                  this.ctx.drawImage(this.textureCache[u],r,s),c<1e3&&(this.ctx.globalAlpha=1)
                }
              }
          }
        },
        update:function(t){
          if(!this.isHidden()){
            var e=this.canvas.getBoundingClientRect();
            this.canvas.height=e.height,this.canvas.width=e.width,this.boundingRects=e,this.editor.viewport.width=this.canvas.width/y,this.editor.updateViewport(),this.cursor="",this.updateObjects(),this.ctx.save(),this.ctx.translate(0,y),this.drawNotes(t),this.ctx.restore(),this.renderObjects(t),this.canvas.style.cursor=this.cursor
          }
        },
        isHidden:function(){
          return!!(document.hidden||document.msHidden||document.webkitHidden||document.mozHidden)
        }
      }
    },
        Z=O,K=(i("8850"),i("2877")),W=Object(K["a"])(Z,p,V,!1,null,"16ee9940",null),X=W.exports,F=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",{staticClass:"layer-list"},
                   [i("time-box",{attrs:{song:t.song}}),
                    t._l(t.song.layers,function(t){
                      return i("layer-meta",{key:t.id,attrs:{layer:t}
                                            })
                    }),
                    i("button",{
                      staticClass:"row",on:{
                        click:function(e){
                          t.song.addLayer()
                        }
                      }
                    },
                      [t._v("+ layer")])],2)
        },
        N=[],M=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",{staticClass:"row layer"},[i("div",{staticClass:"child"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.layer.name,expression:"layer.name"}],attrs:{type:"text",placeholder:t.layer.placeholder,name:"name"},domProps:{value:t.layer.name},on:{input:function(e){
            e.target.composing||t.$set(t.layer,"name",e.target.value)
          }
          }
                                                                                             }),
                                                                                   i("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"no-spinners",attrs:{type:"number",name:"volume"},domProps:{value:t.volume},on:{input:function(e){
                                                                                     e.target.composing||(t.volume=e.target.value)
                                                                                   }
                                                                                   }
                                                                                             }),
                                                                                   i("a",{staticClass:"delete-button",attrs:{title:"Delete layer"},on:{click:function(e){
                                                                                     t.layer["delete"]()
                                                                                   }
                                                                                                                                                      }
                                                                                         },
                                                                                     [t._v("×")])])])
        },
        G=[],j={props:{layer:d},computed:{volume:{get:function(){return 100*this.layer.volume},set:function(t){this.layer.volume=t/100}
                                                 }
                                         }
               },
        T=j,z=(i("3d0b"),Object(K["a"])(T,M,G,!1,null,"70e6c380",null)),D=z.exports,Y=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",{staticClass:"row flex flex-row flex-center timebox"},[i("div",{staticClass:"times"},[i("div",{staticClass:"current"},[t._v(t._s(t.currentTime))]),i("div",{staticClass:"end"},[t._v(t._s(t.endTime))])]),i("div",{staticClass:"tempo-container",attrs:{"vanilla-friendly":t.isVanillaFriendlyTempo,title:"Tempo in ticks per second"},on:{click:function(e){
            return e.target!==e.currentTarget?null:t.focusTempo(e)
          }
          }
          },
          [i("input",{directives:[{
            name:"model",rawName:"v-model.number",value:t.song.tempo,expression:"song.tempo",modifiers:{number:!0}
          }],
                      ref:"tempo",staticClass:"no-spinners",attrs:{type:"number",name:"tempo",step:"0.25"},domProps:{value:t.song.tempo},on:{input:function(e){
                        e.target.composing||t.$set(t.song,"tempo",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}
                                                                                                                                            }
                     }),
           t._v("\n    t/s\n  ")])])
        },
        J=[],H=(i("6b54"),i("f576"),i("6762"),[2.5,5,10]),L={props:{song:u},computed:{currentTime:function(){
          return this.formatTime(this.song.currentTime)
        },
                                                                                      endTime:function(){
                                                                                        return this.formatTime(this.song.endTime)
                                                                                      },
                                                                                      isVanillaFriendlyTempo:function(){
                                                                                        return H.includes(this.song.tempo)
                                                                                      }
                                                                                     },
                                                             methods:{formatTime:function(t){
                                                               var e=Math.abs(t)/1e3,i=Math.floor(e/3600).toString().padStart(2,"0"),n=Math.floor(e/60%60).toString().padStart(2,"0"),a=Math.floor(e%60).toString().padStart(2,"0"),A=Math.floor(Math.abs(t)%1e3).toString().padStart(3,"0"),s="".concat(i,":").concat(n,":").concat(a,".").concat(A);
                                                               return t<0?"-"+s:s
                                                             },
                                                                      focusTempo:function(){
                                                                        this.$refs.tempo.focus()
                                                                      }
                                                                     }
                                                            },
        P=L,_=(i("9a1d"),Object(K["a"])(P,Y,J,!1,null,"f07f5182",null)),$=_.exports,tt={props:{song:u},components:{LayerMeta:D,TimeBox:$}},et=tt,it=(i("78a5"),Object(K["a"])(et,F,N,!1,null,"583a690e",null)),nt=it.exports,at=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return t.visible?i("div",{staticClass:"overlay-container",on:{click:function(e){
            return e.target!==e.currentTarget?null:t.dismiss(e)
          }
                                                                       }
                                   },
                             [i("div",{staticClass:"overlay"},[t._t("default")],2)]):t._e()
        },
        At=[],st={props:{visible:{type:Boolean,default:!0}},model:{prop:"visible",event:"visibilityChanged"},data:function(){
          return{dismissable:!1}
        },
                  provide:function(){
                    return{hide:this.hide,show:this.show}
                  },
                  mounted:function(){
                    "dismissable"in this.$attrs&&(this.dismissable=!0)
                  },
                  methods:{
                    hide:function(){
                      this.$emit("visibilityChanged",!1)
                    },
                    show:function(){
                      this.$emit("visibilityChanged",!0)
                    },
                    dismiss:function(){
                      this.dismissable&&this.hide()
                    }
                  }
                 },
        ot=st,rt=(i("0379"),Object(K["a"])(ot,at,At,!1,null,"54151350",null)),lt=rt.exports,ct=function(){
          var t=this,e=t.$createElement;t._self._c;
          return t._m(0)},ut=[function(){
            var t=this,e=t.$createElement,i=t._self._c||e;
            return i("div",[i("b",[t._v("Loading App...")])])}],dt={},mt=Object(K["a"])(dt,ct,ut,!1,null,null,null),ht=mt.exports,ft=function(){
              var t=this,e=t.$createElement,i=t._self._c||e;
              return i("div",{staticClass:"flex flex-row"},
                       [t._m(0),i("div",{staticClass:"actions section"},
                                  [i("div",{staticClass:"load-song button flex flex-row flex-center"},
                                     [i("font-awesome-icon",{attrs:{icon:"folder-open","fixed-width":"",size:"2x"}
                                                            }),
                                      i("div",{staticClass:"button-body"},
                                        [t._v("Load a song")]),i("input",{staticClass:"file-input",attrs:{type:"file",accept:".nbs"},on:{change:t.inputFile}
                                                                         })],
                                     1),i("div",{staticClass:"new-song button flex flex-row flex-center",on:{click:t.newSong}
                                                },
                                          [i("font-awesome-icon",{attrs:{icon:"file","fixed-width":"",size:"2x"}
                                                                 }),
                                           i("div",{staticClass:"button-body"},[t._v("Create a new song")])],
                                          1),i("div",{staticClass:"new-song button flex flex-row flex-center",on:{click:t.hide}
                                                     },
                                               [i("font-awesome-icon",{attrs:{icon:"times-circle","fixed-width":"",size:"2x"}
                                                                      }),
                                                i("div",{staticClass:"button-body"},[t._v("Dismiss")])],
                                               1)])])},
        gt=[function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",{staticClass:"about section"},
                   [i("h1",[t._v("NBSEditor")]),i("p",[t._v("It's a Note Block Studio that runs in your browser.")]),
                    i("p",[t._v("Some Note sounds and textures are owned by Mojang. Not approved by or associated with Mojang.")])])
        }],
        pt={inject:["hide"],methods:{inputFile:function(t){
          var e=this;
          if(0!==t.target.files.length){
            var i=t.target.files[0];
            w.loadFile(i).then(function(){return e.hide()})
          }
        },
                                     newSong:function(){
                                       w.setSong(u.new()),
                                         this.hide()
                                     }
                                    }
           },
        Vt=pt,vt=(i("eaaa"),Object(K["a"])(Vt,ft,gt,!1,null,"f4849b4a",null)),bt=vt.exports,yt=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",[i("h3",[t._v("Settings")]),i("div",[i("label",[t._v("Key Offset "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.options.keyOffset,expression:"options.keyOffset",modifiers:{number:!0}
                                                                                                                    }],
                                                                                                        attrs:{type:"number"},domProps:{value:t.options.keyOffset},on:{input:function(e){
                                                                                                          e.target.composing||t.$set(t.options,"keyOffset",t._n(e.target.value))
                                                                                                        },
                                                                                                        blur:function(e){
                                                                                                          t.$forceUpdate()
                                                                                                        }
                                                                                                        }
                                                                                                       })])]),
                          i("button",{on:{click:t.hide}},
                            [t._v("Save & Close")])])
        },
        Ct=[],Et={inject:["hide"],props:{options:Object}},kt=Et,Ut=Object(K["a"])(kt,yt,Ct,!1,null,null,null),wt=Ut.exports,qt=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",{staticClass:"details"},[i("h2",{staticClass:"title"},[t._v(t._s(t.title))]),
                                                  t.song.author?i("div",[t._v("Created by: "),i("b",{staticClass:"author"},[t._v(t._s(t.song.author))])]):t._e(),
                                                  t.song.originalAuthor?i("div",[t._v("Originally created by: "),i("b",{staticClass:"original-author"},[t._v(t._s(t.song.originalAuthor))])]):t._e(),
                                                  i("div",[t.song.description?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.song.description,expression:"song.description"}],staticClass:"description",attrs:{readonly:""},
                                                                                            domProps:{value:t.song.description},on:{input:function(e){
                                                                                              e.target.composing||t.$set(t.song,"description",e.target.value)
                                                                                            }
                                                                                                                                   }
                                                                                           }):t._e()]),
                                                  i("div",[i("button",{on:{click:t.hide}
                                                                      },
                                                             [t._v("Dismiss")])])])
        },
        Qt=[],Bt={inject:["hide"],props:{song:u},computed:{title:function(){
          return this.song.name||"Unnamed Song"
        }
                                                          }
                 },
        It=Bt,St=(i("49b8"),Object(K["a"])(It,qt,Qt,!1,null,"fb871bbe",null)),Rt=St.exports,xt={
          name:"vue-title",props:{title:String},created:function(){
            document.title=this.title
          },
          watch:{title:function(){document.title=this.title}},
          render:function(){
            //noop
          }
        },
        Ot=xt,Zt=Object(K["a"])(Ot,f,g,!1,null,null,null),Kt=Zt.exports,Wt=function(){
          var t=this,e=t.$createElement,n=t._self._c||e;
                                                                                      return n("div",{staticClass:"toolbar"},
                                                                                               [n("a",{
                                                                                        staticClass:"button",attrs:{title:"New Song"},on:{click:t.newSong}
                                                                                               },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("a11e"),alt:"New"}
                                                                                                           })]),
                                                                                                n("a",{
                                                                                                  staticClass:"button",attrs:{title:"Save Song"},on:{click:t.save}
                                                                                                },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("773d"),alt:"Save"}
                                                                                                           })]),
                                                                                                n("a",{staticClass:"open button",attrs:{title:"Open Song"}
                                                                                                      },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("d1dd"),alt:"Open"}
                                                                                                           }),
                                                                                                   n("input",{attrs:{type:"file",accept:".nbs"},on:{change:t.loadFile}
                                                                                                             })]),
                                                                                                n("div",{staticClass:"separator"}),
                                                                                                n("a",{staticClass:"button",attrs:{value:!t.paused,title:"Play"},on:{click:t.play}
                                                                                                      },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("8af6"),alt:"Play Song"}
                                                                                                           })]),
                                                                                                n("a",{staticClass:"button",attrs:{value:t.paused,title:"Pause Song"},on:{click:t.pause}
                                                                                                      },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("bc8f"),alt:"Pause Song"}
                                                                                                           })]),
                                                                                                n("a",{staticClass:"button",attrs:{value:t.stopped,title:"Stop Song"},on:{click:t.stop}
                                                                                                      },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("6ea7"),alt:"Stop Song"}
                                                                                                           })]),
                                                                                                n("div",{staticClass:"separator"}),
                                                                                                n("a",{staticClass:"button",attrs:{value:t.state.options.loop,title:"Loop Current Song"},on:{click:t.toggleLoop}
                                                                                                      },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("9cf3"),alt:"Loop Current Song"}
                                                                                                           })]),
                                                                                                n("a",{staticClass:"button",attrs:{title:"Info"},on:{click:t.openInfo}
                                                                                                      },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("e78b"),alt:"Info"}
                                                                                                           })]),
                                                                                                n("a",{staticClass:"button",attrs:{title:"Open Settings"},on:{click:t.openSettings}
                                                                                                      },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("226a"),alt:"Open Settings"}
                                                                                                           })]),
                                                                                                n("a",{staticClass:"volume button",attrs:{title:"Volume"}
                                                                                                      },
                                                                                                  [n("img",{staticClass:"button-image",attrs:{src:i("96be"),alt:"Volume"}
                                                                                                           }),
                                                                                                   n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.state.options.volume,expression:"state.options.volume",modifiers:{number:!0}}],
                                                                                                              attrs:{type:"range",name:"volume",min:"0",max:"1",step:"0.01"},domProps:{value:t.state.options.volume},
                                                                                                              on:{__r:function(e){
                                                                                                                t.$set(t.state.options,"volume",t._n(e.target.value))
                                                                                                              },
                                                                                                                  blur:function(e){t.$forceUpdate()}
                                                                                                                 }
                                                                                                             }),
                                                                                                   n("span",{staticClass:"volume-amount"},[t._v(t._s(t.formattedVolume)+"%")])]),
                                                                                                n("div",{staticClass:"separator"}),t._l(t.state.song.instruments,function(e){
                                                                                                  return n("instrument-button",{key:e.id,attrs:{instrument:e,editor:t.state.editor}})
                                                                                                })],
                                                                                               2)},
        Xt=[],Ft=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("a",{
            staticClass:"button",attrs:{value:t.active,title:t.title},on:{click:t.activate}
          },
                   [i("div",{staticClass:"instrument-body"},[t._v(t._s(t.text))])])
        },
        Nt=[],Mt=(i("28a5"),{props:{instrument:h,editor:b},computed:{text:function(){
          var t=this.instrument.name.split(" ");
          return 1===t.length?this.instrument.name.substr(0,2):t.slice(0,2).map(function(t){
            return t[0]}).join("")},active:function(){
            return this.editor.currentInstrument===this.instrument
          },
                                                                     title:function(){
                                                                       return"Set Instrument to "+this.instrument.name
                                                                     }
                                                                    },
                             methods:{
                               activate:function(){
                                 this.editor.currentInstrument=this.instrument,w.playNote(this.editor.currentKey,this.instrument)
                               }
                             }
                            }),
        Gt=Mt,jt=(i("022f"),Object(K["a"])(Gt,Ft,Nt,!1,null,"5a43b30b",null)),Tt=jt.exports,zt={
          data:function(){
            return{state:w}
          },
          components:{InstrumentButton:Tt},computed:{formattedVolume:function(){
            return(100*this.state.options.volume).toFixed(0)
          },
                                                     paused:function(){return this.state.song.paused},
                                                     stopped:function(){return this.paused&&0===this.state.song.currentTime}
                                                    },
          methods:{pause:function(){this.state.song.pause()},
                   play:function(){this.state.song.play()},
                   stop:function(){this.state.song.pause(),this.state.song.currentTick=0},
                   openSettings:function(){this.state.showSettings=!0},
                   openInfo:function(){this.state.showSongDetails=!0},
                   toggleLoop:function(){this.state.options.loop=!this.state.options.loop},
                   loadFile:function(t){this.pause();var e=t.target.files[0];w.loadFile(e)},
                   newSong:function(){w.setSong(u.new())},
                   save:function(){var t=u.toArrayBuffer(this.state.song),
                       e=new Blob([t],{type:"application/octet-stream"}),
                       i=URL.createObjectURL(e),n=document.createElement("a");n.href=i,n.download=(this.state.song.name||"My Song")+".nbs",document.body.appendChild(n),n.click(),document.body.removeChild(n),w.editor.modified=!1}
                  }
        },
        Dt=zt,Yt=(i("e6b4"),Object(K["a"])(Dt,Wt,Xt,!1,null,"372f748e",null)),Jt=Yt.exports,Ht=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",{
            staticClass:"keyboard flex flex-row"
          },
                   [i("octave",{attrs:{editor:t.editor,start:21}}),
                    i("octave",{attrs:{editor:t.editor,start:33}}),
                    i("octave",{attrs:{editor:t.editor,start:45}}),
                    i("octave",{attrs:{editor:t.editor,start:57}})
                   ],
                   1)
        },
        Lt=[],Pt=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",{
            staticClass:"key",class:{
              sharp:t.sharp,vanilla:t.vanillaFriendly,selected:t.selected
            },
            on:{click:t.select}
          },
                   [i("div",{staticClass:"text"},[t._v(t._s(t.text))])])
        },
        _t=[],$t=(i("c5f6"),{
          props:{note:Number,sharp:Boolean},
          computed:{
            text:function(){
              return b.formatKey(this.note)
            },
            vanillaFriendly:function(){
              return this.note>=33&&this.note<=59
            },
            editor:function(){return this.$parent.editor},
            selected:function(){return this.editor.currentKey===this.note}
          },
          methods:{
            select:function(){
              this.editor.currentKey=this.note,w.playNote(this.note,this.editor.currentInstrument)
            }
          }
        }),
        te=$t,ee=(i("2854"),Object(K["a"])(te,Pt,_t,!1,null,"e828db60",null)),ie=ee.exports,
        ne=function(){
          var t=this,e=t.$createElement,i=t._self._c||e;
          return i("div",{staticClass:"octave"},
                   [i("div",{staticClass:"keyboard-key"},
                      [i("key",{attrs:{note:t.start+1,sharp:!1}}),
                       i("key",{attrs:{note:t.start+2,sharp:!0}})
                      ],
                      1),
                    i("div",{staticClass:"keyboard-key"
                            },
                      [i("key",{attrs:{note:t.start+3,sharp:!1}}),
                       i("key",{attrs:{note:t.start+4,sharp:!0}})
                      ],
                      1),
                    i("div",{staticClass:"keyboard-key"},
                      [i("key",{attrs:{note:t.start+5,sharp:!1}})
                      ],
                      1),
                    i("div",{staticClass:"keyboard-key"},
                      [i("key",{attrs:{note:t.start+6,sharp:!1}}),
                       i("key",{attrs:{note:t.start+7,sharp:!0}})
                      ],
                      1),
                    i("div",{staticClass:"keyboard-key"},
                      [i("key",{attrs:{note:t.start+8,sharp:!1}}),
                       i("key",{attrs:{note:t.start+9,sharp:!0}})
                      ],
                      1),
                    i("div",{staticClass:"keyboard-key"},
                      [i("key",{attrs:{note:t.start+10,sharp:!1}})
                      ],
                      1),
                    i("div",{staticClass:"keyboard-key"},[
                      i("key",{attrs:{note:t.start+11,sharp:!1}}),
                      i("key",{attrs:{note:t.start+12,sharp:!0}})
                    ],
                      1)
                   ])
        },
        ae=[],Ae={
          props:{start:Number,editor:b},
          components:{Key:ie}
        },
        se=Ae,oe=(i("c8d5"),Object(K["a"])(se,ne,ae,!1,null,"087acd99",null)),re=oe.exports,le={props:{editor:b},
                                                                                                components:{Key:ie,Octave:re}
                                                                                               },
        ce=le,ue=(i("a261"),Object(K["a"])(ce,Ht,Lt,!1,null,"61f4b92c",null)),de=ue.exports,me={
          components:{
            Editor:X,
            Overlay:lt,
            LoadingOverlay:ht,
            WelcomeOverlay:bt,
            SettingsOverlay:wt,
            SongDetailsOverlay:Rt,
            Toolbar:Jt,
            LayerList:nt,
            Keyboard:de,
            VueTitle:Kt
          },
          data:function(){
            return{
              state:w,previousTime:-1,lastPlayedTick:-1,interval:0
            }
          },
          mounted:function(){
            var t=this,e=h.builtin;Promise.all(e.map(function(t){return t.load()})).then(function(){
              t.state.loading=!1,t.state.showWelcome=!0,t.interval=setInterval(function(){return t.tick()})
            }),
              window.onbeforeunload=function(e){if(t.state.editor.modified)return"Your changes will NOT be saved! Please save your changes to your device."}
          },
          beforeDestroy:function(){clearInterval(this.interval)},
          computed:{tabTitle:function(){
            var t=w.song.name?"".concat(w.song.name," - NBSEditor"):"NBSEditor";return w.editor.modified?"*".concat(t):t}
                   },
          methods:{
            advanceSong:function(t,e){
              var i=this.state.song;
              if(!i.paused)
                if(i.currentTick>=i.size)
                  this.state.options.loop?i.currentTick=0:i.paused=!0;
                else{
                  var n=e/i.timePerTick;
                  if(i.currentTick+=n,i.tick!==this.lastPlayedTick){
                    this.lastPlayedTick=i.tick;
                    var a=!0,A=!1,s=void 0;
                    try{
                      for(var o,r=i.layers[Symbol.iterator]();
                          !(a=(o=r.next()).done);a=!0){
                        var l=o.value,c=l.notes[i.tick];c&&(w.playNote(c,l),c.lastPlayed=t)
                      }
                    }
                    catch(u){A=!0,s=u
                            }
                    finally{
                      try{
                        a||null==r.return||r.return()
                      }
                      finally{
                        if(A)throw s
                      }
                    }
                  }
                }
            },
            tick:function(){
              var t=performance.now(),e=Math.min(t-this.previousTime,500);
              this.previousTime=t,
                this.advanceSong(t,e),
                this.$refs.canvas&&this.$refs.canvas.update(t)
            }
          }
        },
        he=me,fe=(i("034f"),Object(K["a"])(he,a,A,!1,null,null,null)),ge=fe.exports,pe=i("ecee"),Ve=i("c074"),ve=i("ad3d");pe["c"].add(Ve["a"]),pe["c"].add(Ve["b"]),pe["c"].add(Ve["c"]),n["a"].component("font-awesome-icon",ve["a"]),n["a"].config.productionTip=!1,n["a"].config.performance=!1,new n["a"]({
          render:function(t){
            return t(ge)
          }
        }).$mount("#app")
  },
  6060:function(t,e){
    t.exports="data:audio/ogg;base64,T2dnUwACAAAAAAAAAADirEhmAAAAAH7gCegBHgF2b3JiaXMAAAAAAUSsAAAAAAAAAH0AAAAAAADJAU9nZ1MAAAAAAAAAAAAA4qxIZgEAAADorZb0Dy3/////////////////NQN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNTAzMDQAAAAAAQV2b3JiaXMfQkNWAQAAAQAUY1YpZplSkluKGXOYMWcZY9RaiiWEFEIopXNWW6sptZpayrnFnHPOlWJSKUWZUlBbihljUikGGVMSW2khhBRCB6FzEltpraXYWmo5tpxzrZVSTimkGFOISuiYUkwppBhTikronHPQOeacU4xKCDWVWlPJMYWUW0spdE5CB6mEzlJLsXSQSgcldFA6azmVElMpnWNWQmq5pRxTyq2mmHOMgdCQVQAAAQDAQBAasgoAUAAAEIahKIoChIasAgAyAAAE4CiO4iiSIjmSYzkWEBqyCgAAAgAQAADAcBRJkRTL0RxN0izN0jxTlmVZlmVZlmVZll3XdV0gNGQVAAABAEAoBxnFGBCElLISCA1ZBQAgAAAAgijDEANCQ1YBAAABAAhRHiHmoaPee+8Rch4h5h2D3nvvIbReOeqhpN577733Hnvvuffee++RYV4h56GT3nvvEWIcGcWZct577yGknDHonYPee++9955z7jnX3nvvnaPeQemp1N5775WTXjHpnaNee+8l1R5C6qWk3nvvvffee++999577733nnvvvffee++t595q77333nvvvffee++9995777333nvvvffee++B0JBVAAAQAABhGDaIccek99p7YZgnhmnnpPeee+WoZwx6CrH3nnvvvdfee++99957IDRkFQAACAAAIYQQUkghhRRSSCGGGGLIIYccgggqqaSiiiqqqKKKKqoso4wyyiiTjDLKLKOOOuqow85CCimk0koLrbRUW28t1R6EEEIIIYQQQgghhBC+9x4IDVkFAIAAADDGGGOMQQghhBBCSCmllGKKKaaYAkJDVgEAgAAAAgAAACxJkzRHczzHczzHUzxHdERHdERHlERJtERN9ERRNEVVtEXd1E3d1E1d1U3btVVbtmVd111d12Vd1mVd13Vd13Vd13Vd13Vdt4HQkFUAAAgAAGGQQQYZhBBCSCGFlFKKMcYYc845IDRkFQAACAAgAAAA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"},6361:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEXRz8/BwcHy8vLs7Ozq6urm5ua5ubmxsLDc3Nzg4ODW1taRhrfXAAAAd0lEQVQoz5WQQRHAIAwEsXAWaiEWagELWMBCLcRCVZZAWkrCTOkOD2Yfd0lCAIIC1L8V2AQi2qOAiYgDyYt8NJj5LGQvWqik3hlOLLawZj4tL4EaqJHaYsTyLjp79qKPTnYX+tnC9mI8XqzPnibiswWNlMoTnLgAaFOoi0ggE8QAAAAASUVORK5CYII="
    },
  "645e":function(t,e,i){
    t.exports=i.p+"media/guitar.4ffa7575.ogg"
  },
  "64a9":function(t,e,i){},
  6823:function(t,e,i){
    t.exports=i.p+"media/cow_bell.5176e061.ogg"
  },
  "6b8b":function(t,e){
    t.exports="data:audio/ogg;base64,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m64rDKcsC7/t68az+76yjK7r+6osC78q28Kx677z/L6wLKPs+sJqy8Kw2rYx3L5uLL9wHMtr68ox675RtnV8X3gKw/N0dV15Zl3H9nV040c4fsoAAIABBwCAABPKQKEhKwKAOAEAjySJomRZoihZliiKpui6omi6rqRppqlpnmlammeapmmqsimarixpmmlanmaamqeZpmiarmuapqyKpinLpmrKsmmasuy6sm27rmzbomnKsmmasmyapiy7sqvbruzquqRZpql5nmlqnmeapmrKsmmarqt5nmp6nmiqniiqqmqqqq2qqixbnmeamuippieKqmqqpq2aqirLpqrasmmqtmyqqm27quz6sm3rummqsm2qpi2bqmrbruzqsizbui9pmmlqnmeamueZpmmasmyaqitbnqeaniiqquaJpmqqqiybpqrKlueZqieKquqJnmuaqirLpmraqmmatmyqqi2bpirLrm37vuvKsm6qqmybqmrrpmrKsmzLvu/Kqu6KpinLpqrasmmqsi3bsu/Lsqz7omnKsmmqsm2qqi7Lsm0bs2z7umiasm2qpi2bqirbsi37uizbuu/Krm+rqqzrsi37uu76rnDrujC8smz7qqz6uivbum/rMtv2fUTTlGVTNW3bVFVZdmXZ9mXb9n3RNG1bVVVbNk3VtmVZ9n1Ztm1hNE3ZNlVV1k3VtG1Zlm1htmXhdmXZt2Vb9nXXlXVf133j12Xd5rqy7cuyrfuqq/q27vvCcOuu8AoAABhwAAAIMKEMFBqyEgCIAgAAjGGMMQiNUs45B6FRyjnnIGTOQQghlcw5CCGUkjkHoZSUMucglJJSCKGUlFoLIZSUUmsFAAAUOAAABNigKbE4QKEhKwGAVAAAg+NYlueZomrasmNJnieKqqmqtu1IlueJommqqm1bnieKpqmqruvrmueJommqquvqumiapqmqruu6ui6aoqmqquu6sq6bpqqqriu7suzrpqqqquvKriz7wqq6rivLsm3rwrCqruvKsmzbtm/cuq7rvu/7wpGt67ou/MIxDEcBAOAJDgBABTasjnBSNBZYaMhKACADAIAwBiGDEEIGIYSQUkohpZQSAAAw4AAAEGBCGSg0ZCUAEAMAABABIYMQQgghhBBCCCGEEEIIIYQQQuecc84555xzzgkA2I9wAJB6MDExhYWGrAQAUgEAAGOUUoox5yBEjDnGGHQSSooYc44xB6WkVDkHIYRUWsutcg5CCCm1VFvmnJTWYow5xsw5KSnFVnPOoZTUYqy55po7Ka3VmmvNuZbWas0151xzLq3FmmvONefccsw155xzzjnGnHPOOeeccwEAOA0OAKAHNqyOcFI0FlhoyEoAIBUAgEBGKcaccw46hBRjzjkHIYRIIcaccw5CCBVjzjkHHYQQKsYccw5CCCFkzjkHIYQQQsicgw46CCGE0EEHIYQQQiilcxBCCCGEEkoIIYQQQgghhA5CCCGEEEIIIYQQQgihlBJCCCGEUEIoJRQAAFjgAAAQYMPqCCdFY4GFhqwEAIAAACCHJaiUM2GQY9BjQ5By1EyDEFNOdKaYk9pMxRRkDkQnnUSGWlC2l8wCAAAgCAAIMAEEBggKvhACYgwAQBAiM0RCYRUsMCiDBod5APAAESERACQmKNIuLqDLABd0cdeBEIIQhCAWB1BAAg5OuOGJNzzhBifoFJU6CAAAAAAAAwB4AAA4KICIiOYqLC4wMjQ2ODo8AgAAAADABQA+AACODyAiorkKiwuMDI0Njg6PAAAAAAAAAAAAICAgAAAAAAAQAAAAICBPZ2dTAASJFQAAAAAAAAq9hxUCAAAArTBDVAgnIGM5PISQZ4zjc8+3y+ozSOH/U7xLYjvj/01PnZr43B/yw67jF1rOW/W5kl26AYTpy7NcB4jwcgBXT5Vn1tuxfflynL18tSrHrsuBt7Y9OuzezH3MPEJZDAc4AwAcUhOxAcvCAAAAAADWNFjz+Xwec3I04+///f/xtyKSGnrLNqbuf/blWvOmf6583tDhrzows3nDW1DDiXi0oeG5+m6/2+92c+vrw+vl+jq8vr7dAvQOHr3+h1vK6QK4geuTKQBgUQAAAAAAYusCUBJRNE5DiufbNYTNnvugRi7mfosfCOZKNG1nA0YTLHgAvhv+Px+l0wSwAwYneNwJAGGFAgAAAEubEQCau0LbXj5ikuU487R6g1PTLSqFwM4ZB0WjXQyANyFBAQAmflr9/3/3BlUF7PrgBH86AKC8skQxCr1nEICeOhpgMgld8WPSEifVO6y2KfRPC3OhnEaZywcLAU0fvKoXMjllTavyrjsdoros0v53LZ7Y/vEzXqJzeZv1es5WFzcj5lTR2GnGvOsDpU6OCW2nUBBvwXD2x+BCD9qY0R7I8fbYDjABKNAAvlj997FMXYr/YAPXnQBg1UqtSaJQP3cocBAPTIadT/UB86HemaEeust2rncQPzUMPY+PG/tEPdmJpsfQN+SG/ZsVYgMVBt98BT8U3/SdbIcOvU9mqxXG998UMiODw5dxcZGODDHWpdy5JbDUrWx6u6nWRg5JbeEJaXtCYwUNocA78cdFMIC+3G5ZCgEoAMACvkf9u21vSgAHWBfLCrIqFPQwfBycVbmJrjJNiul1AOj1daBqeNX1nQG/uzV2HV3/oHRsGIv9mvJIA/CPm6hBVu+q3TU2l03WLU6vWrdfOW/emn28tWIAdGBTBOAWAB8gABITgAAPAA=="},"6ca3":function(t,e,i){},"6ea7":function(t,e,i){t.exports=i.p+"img/stop.a17f0e77.svg"},"6f5e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEUXxUQarjWC9q1B84QX3WIcmCkfzar4AAAAfklEQVQoz33PwQ3DMAwDQK3AFbgCV+AK2X+VUklT1I1cGvDjANpS1RrUE9hRDm3pmOCrjBFU6o4TzcC7lAK4g+6IMDyBGqR+0qgZQuIfYJOd2XM8gS5AFzYA51FXTNcvv5B58c4GMhbd22f8e7kVPoWzNEI+zH1e4gA4luABL/RWQvGQFkEZAAAAAElFTkSuQmCC"
    },
  "773d":function(t,e,i){
    t.exports=i.p+"img/save.8c39c38f.svg"
  },
  "78a5":function(t,e,i){
    "use strict";
    var n=i("3c2f"),a=i.n(n);a.a
  },
  8786:function(t,e,i){
    t.exports=i.p+"media/xylophone.609a67fc.ogg"
  },
  8850:function(t,e,i){
    "use strict";
    var n=i("1824"),a=i.n(n);a.a
  },
  "8af6":function(t,e,i){
    t.exports=i.p+"img/play.51251b35.svg"
  },
  "8e0b":function(t,e,i){},
  9398:function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEXa3+Dg5OTX3N3Z3t/o6+v19/fb4OHe4uPw8vLz9PXT2drY3d7r7u7V2tvp7Ozv8fL+/v74+fnk5+jj5ufQ1tfW29zl6en6+vrm6er9/f3s7+/y9PT19vbh5OX5+vrR19jS2Nnc4eHU2tvh5eb3+Pj6+/vu8PH8/PyKR7C5AAABeUlEQVQ4y4WT65LEEBBGx0hcQiIYRASzyWbm/d9wde0DOH8UdUr1p9vj8UDo+cR4GMaREEoZ43yahJANIeb50RWWRam1oTXnxliL8TxTau3r5RxC3vcFrUOwdttiDGHfreU8hNSIcV05V6ovLAtCxwFSzsMQAiHGhAacr2spfUEp7wlZlnE8jmmqlVIpKXVubAgxTX3Buff75weurhUeDVaErD1PSjG+rr4Aj/T7exxDw3sptV5XxoyBc873vS8gBHFgw1gIpWBMKcRmTKn7bjG7AucpOUdpKYwRkjM0itLzHAZjnk/n+gKlxlyX1rVOkzGfDyH/7d+2lGDtC6XcN2+sawhQ6H1rba2USg2DEMvSF4Qg5NNAKOdxTAljGF2l3o3ragPTFXJGCAosJUbnaoXxl/K/QKXOsy+kxBgMaCmcS2ltrRAwBO+3LYQWsyvE+P0uCwwqRDsO+EK0se8p5YxxX5hnQkrZd4xzDiFG7xFiDNpOCHyqrvAHvJ9DJd4fFTUAAAAASUVORK5CYII="},9566:function(t,e,i){t.exports=i.p+"media/dbass.408dc5a7.ogg"
    },
  9661:function(t,e,i){
    t.exports=i.p+"media/harp.f259743e.ogg"
  },
  "96be":function(t,e,i){
    t.exports=i.p+"img/volume.464474a3.svg"
  },
  "96d7":function(t,e,i){
    t.exports=i.p+"media/iron_xylophone.9f0ae0bd.ogg"
  },
  "9a1d":function(t,e,i){
    "use strict";
    var n=i("5485"),a=i.n(n);a.a
  },
  "9cf3":function(t,e,i){
    t.exports=i.p+"img/loop.8f18c336.svg"
  },
  a11e:function(t,e,i){
    t.exports=i.p+"img/new.a634cdff.svg"
  },
  a261:function(t,e,i){
    "use strict";
    var n=i("6ca3"),a=i.n(n);a.a
  },
  a35c:function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEWUmaSao7Osrr2vudahp7GcoazLIinTAAAAoUlEQVQoz22Q0Q1FIQxCXYEVWMEVWIH9V3ngfV9WE5v0aFvoWuCmREGNaw3QIMGQw60HSEiKZtviBDb477tSpwk6jrl2qlP8AN/fNhUWMAGSMeqsfV4nOK5qLALafgJhZ6SAyOauuQHs+M6aWhftEzjWWIFsSr9AGsa9652dfoMo73bPBjKXE+goYg2m+Ei/QfLojvtu8Si9wO5H9XQHnuAHKelleWB83UAAAAAASUVORK5CYII="
    },
  a8d2:function(t,e){
    t.exports="data:audio/ogg;base64,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m64rDKcsC7/t68az+76yjK7r+6osC78q28Kx677z/L6wLKPs+sJqy8Kw2rYx3L5uLL9wHMtr68ox675RtnV8X3gKw/N0dV15Zl3H9nV040c4fsoAAIABBwCAABPKQKEhKwKAOAEAjySJomRZoihZliiKpui6omi6rqRppqlpnmlammeapmmqsimarixpmmlanmaamqeZpmiarmuapqyKpinLpmrKsmmasuy6sm27rmzbomnKsmmasmyapiy7sqvbruzquqRZpql5nmlqnmeapmrKsmmarqt5nmp6nmiqniiqqmqqqq2qqixbnmeamuippieKqmqqpq2aqirLpqrasmmqtmyqqm27quz6sm3rummqsm2qpi2bqmrbruzqsizbui9pmmlqnmeamueZpmmasmyaqitbnqeaniiqquaJpmqqqiybpqrKlueZqieKquqJnmuaqirLpmraqmmatmyqqi2bpirLrm37vuvKsm6qqmybqmrrpmrKsmzLvu/Kqu6KpinLpqrasmmqsi3bsu/Lsqz7omnKsmmqsm2qqi7Lsm0bs2z7umiasm2qpi2bqirbsi37uizbuu/Krm+rqqzrsi37uu76rnDrujC8smz7qqz6uivbum/rMtv2fUTTlGVTNW3bVFVZdmXZ9mXb9n3RNG1bVVVbNk3VtmVZ9n1Ztm1hNE3ZNlVV1k3VtG1Zlm1htmXhdmXZt2Vb9nXXlXVf133j12Xd5rqy7cuyrfuqq/q27vvCcOuu8AoAABhwAAAIMKEMFBqyEgCIAgAAjGGMMQiNUs45B6FRyjnnIGTOQQghlcw5CCGUkjkHoZSUMucglJJSCKGUlFoLIZSUUmsFAAAUOAAABNigKbE4QKEhKwGAVAAAg+NYlueZomrasmNJnieKqqmqtu1IlueJommqqm1bnieKpqmqruvrmueJommqquvqumiapqmqruu6ui6aoqmqquu6sq6bpqqqriu7suzrpqqqquvKriz7wqq6rivLsm3rwrCqruvKsmzbtm/cuq7rvu/7wpGt67ou/MIxDEcBAOAJDgBABTasjnBSNBZYaMhKACADAIAwBiGDEEIGIYSQUkohpZQSAAAw4AAAEGBCGSg0ZCUAEAMAABABIYMQQgghhBBCCCGEEEIIIYQQQuecc84555xzzgkA2I9wAJB6MDExhYWGrAQAUgEAAGOUUoox5yBEjDnGGHQSSooYc44xB6WkVDkHIYRUWsutcg5CCCm1VFvmnJTWYow5xsw5KSnFVnPOoZTUYqy55po7Ka3VmmvNuZbWas0151xzLq3FmmvONefccsw155xzzjnGnHPOOeeccwEAOA0OAKAHNqyOcFI0FlhoyEoAIBUAgEBGKcaccw46hBRjzjkHIYRIIcaccw5CCBVjzjkHHYQQKsYccw5CCCFkzjkHIYQQQsicgw46CCGE0EEHIYQQQiilcxBCCCGEEkoIIYQQQgghhA5CCCGEEEIIIYQQQgihlBJCCCGEUEIoJRQAAFjgAAAQYMPqCCdFY4GFhqwEAIAAACCHJaiUM2GQY9BjQ5By1EyDEFNOdKaYk9pMxRRkDkQnnUSGWlC2l8wCAAAgCAAIMAEEBggKvhACYgwAQBAiM0RCYRUsMCiDBod5APAAESERACQmKNIuLqDLABd0cdeBEIIQhCAWB1BAAg5OuOGJNzzhBifoFJU6CAAAAAAAAwB4AAA4KICIiOYqLC4wMjQ2ODo8AgAAAADABQA+AACODyAiorkKiwuMDI0Njg6PAAAAAAAAAAAAICAgAAAAAAAQAAAAICBPZ2dTAATGCgAAAAAAAD2C0i0CAAAAKHOoZAwoJR8bJCcjJiS/mxv01BWPcZ4q6kgdMo5h/78+7DTPc+RTBa/6qdDeZr2zzzly/6X4SLAJDNkVQ8X8+xoFG2IR45ir3ylO9C+uMyt3cvyNHXl5X81TlYxjoizPeT7yqJwJ7L9tH1arnvri2fkdxlyMvSdkW5IruQEsyVLE21YUwJKu7F8Q+3V5aT71skj5SPGRagf0TPcy5H1vVaiz6Hs6V8V/97RQ/QfR3iNT9dzmDv8RjvzKvgHkykrNePrTpzCKXL5bDO96xurl5u4Uz8XLETuFlk0iPeyXscB+agDcyCsc0X46FUiB5nZUe8rqPd/zeEfDO8x5Ryehf2LAN+gyAKRE7/vIO+8OKEXzPvZOP345Uxbqc3Vdef3/+7uuN3lzysRdZ7YKxEj3Y8qPRyOQKS27vYPYDoLhOngtT2j5zcllwCVNPggRnqGZmld1c/1lcj0/X36/aAU2BXZ9YIwxxhgPjycH55xzAFayrAonIiQCPJ7D97if5/8dNz9ZiedoQD3fP7e5ubn5/T+nA1g2//Gf++f+ube3txTW1/Xt7e3t7e0tJTa8u3f7udqAt29vb29vKQHsNE3TzeXLl19//fW7/9ymDoAyAPD29vb2Br2u8BaJACniBmCwvr6+vr6+vr6+vr5eh15fX19fXy8GXt9SUmpQ0OsCTluAw9vr29vb29ubR6+tFwO+V31f4q9sgKCBK3xlBbaVJMwMBbNujKl7Hnsuj92cOZNx0/HDBShg0dUzMmIggUiOFPyU+Vs0YqpeusYaT77q9nVVsvp9d1i+xFQVcxhUSTePcZXb1Gwmu69LJ66xgzytL7744lPeHhN1aW+VUsYUNESjIT0fd4QkWcWYp+yyTAN5LBps+mPWpncXkgZdRpUuy2HECjFhjtXEEL5H/edZvjQGHABAQCGgAAAAAABuR1sCdAC0BA=="
  },
  b6b8:function(t,e,i){
    t.exports=i.p+"media/banjo.fc0ae6b8.ogg"
  },
  baf4:function(t,e,i){},
  bc8f:function(t,e,i){
    t.exports=i.p+"img/pause.0569865e.svg"
  },
  c303:function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEVbRThCMSc1KSJJNyxqUkR5YVKqJu6EAAAAm0lEQVQoz23QQREFMQwCUCxgAQtYwEL8W/mkM/+UPe3mTdKSAoQEWKYUBAcezYCtjeiC4jBDdIT9vcC0EZ7YtKELghOz0JrEBbQvbCS7CcwL3jzcGpzKBzx5g9N4uvCael8xmS8I3oT6BumiuOB9ln7lbKoP0D/5y9DqwjtsYdewLqSbZZ+n2XbiwrSpS73sredC2rdHao8NL/wARMhIH9AfukcAAAAASUVORK5CYII="},c34a:function(t,e,i){t.exports=i.p+"media/bit.37c995c8.ogg"},c509:function(t,e,i){t.exports=i.p+"media/chime.ce409f32.ogg"
    },
  c83b:function(t,e,i){
    t.exports=i.p+"media/flute.2feb0297.ogg"
  },
  c8d5:function(t,e,i){
    "use strict";
    var n=i("0d08"),a=i.n(n);a.a
  },
  cc70:function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEXn5Lvaz6Pj27DVxJbRuort68s4ewItAAAAlUlEQVQoz22R0Q3DMBBCvQIrsAIr3Aref5UepOpHSRRZ5MU+CDkHIMTvIp4CAgSJo4M7OA2I0WpffoEGIFfstL0XvQDhPq70GbBBVno3k6DBWkrXjhPjBsjGhMqABrIfNZvNFaBBzvirJgHUYEVSucmRo/8DCQ+hfe1SIO1soEuPZoN0M/hV1MDi8nke4gVE5l8jsMAH5PVBFfMInTEAAAAASUVORK5CYII="
  },
  cdab:function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUpJCIxLCg1Lys0LionIiB5VUODV0KEUjx0UDmIXEZQMyGCVzlbOCiUX0RfPCybZktbNSQzLSqAUj5GKR6VWj5HKh2RWEA0LClHLSA/KRtKMCIoIyA1LCkwKykgBHbvAAABGElEQVQ4y42TUZKDIBBEFeMAIoKoQUxy/2suLUE3P2JXtSjVBbwZqaqq/opFNU0asx6PqhhgrG2JOKcocQjvRG1b13cCUnadUnDfaz0MxgyD1tYaI+WdwDg6N03zvCynp+n5hDn3vhxgTIi0ARbvOlgpa7XueyLGyoG6FmKe11XrdTUmBIywUiEIEQ9ZDAATWAkvbQZEfEu5n6EQ8J7zjJVxfzCLAWyRFrQ2oaLgfY+5oxeXAWACSalty3hKLQuQjzpcBhgjym3+33aY6E7Ae+dOtN+WO7fXoRA4MXOrk/HTHb24DDQN2r1txsAhGIN2AxWYTVMO4OKkyyKj8pMIY9vuZygEXi8f9X6PUXj6XeP4+WAmFqoU+AMBGDOVB7g7DgAAAABJRU5ErkJggg=="
  },
  d1dd:function(t,e,i){
    t.exports=i.p+"img/open.cc914ee5.svg"
  },
  dc2c:function(t,e){
    t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEV8pfSFrfiSuf6hw/+81P/I3P+pzQJfAAAAkUlEQVQoz22QgQ0EIQgEaWFboAVasIXrv5UfwP/kD2JEGZF1NTO5R7jLWMJsAvITIipCtoDKibA6n4CObLI6AXMBCFpN57ovIKMqrwdOUE/KULk0QUrxaG+LbeYFKMc8S5zr9gW6Xco+v+/4B5RXLz/OKWOAK9YUgQniu1MLbKActscdSJ22vzOB7u9wlfDEAB8bDzR3WtoT4wAAAABJRU5ErkJggg=="
  },
  e6b4:function(t,e,i){
    "use strict";
    var n=i("8e0b"),a=i.n(n);a.a
  },
  e78b:function(t,e,i){
    t.exports=i.p+"img/info.f906c4e5.svg"
  },
  e891:function(t,e,i){},
  e92b:function(t,e,i){
    t.exports=i.p+"media/didgeridoo.2d131d3e.ogg"
  },
  amyt:function(t,e,i){
    t.exports=i.p+"media/amythest.ogg"
  },
  hest:function(t,e,i){
    t.exports=i.p+"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"
  },
  prtl:function(t,e,i){
    t.exports=i.p+"media/portal.ogg"
  },
  otal:function(t,e,i){
    t.exports=i.p+"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"
  },
  xpob:function(t,e,i){
    t.exports=i.p+"media/xp_orb.ogg"
  },
  xprb:function(t,e,i){
    t.exports=i.p+"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"
  },
  fire:function(t,e,i){
    t.exports=i.p+"media/firework_blast.ogg"
  },
  work:function(t,e,i){
    t.exports=i.p+"data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D"
  },
  eaaa:function(t,e,i){
    "use strict";
    var n=i("13d3"),a=i.n(n);a.a
  },
  f4a7:function(t,e,i){}
}); // Thus ends App.JS of NBSEditor
//# sourceMappingURL=app.js.map
