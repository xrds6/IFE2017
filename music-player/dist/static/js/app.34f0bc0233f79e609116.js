webpackJsonp([0],[,,,function(t,s){},function(t,s){},function(t,s,i){i(15);var n=i(0)(i(9),i(26),null,null);t.exports=n.exports},,,function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(7),e=i(5),o=i.n(e),r=i(6),a=i(4),l=(i.n(a),i(3));i.n(l);n.a.use(r.a),n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:o.a}})},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(23),e=i.n(n),o=i(22),r=i.n(o),a=i(21),l=i.n(a),c=i(2),u=i.n(c),h=i(18);i.n(h);s.default={name:"app",components:{MusicPlayer:e.a,MusicList:r.a,Lyrics:l.a},data:function(){return{urlSearch:"http://115.159.46.181:3000/search?limit=20&keywords=",searchText:"metal gear solid",songList:[],playedList:[],currentSong:{},index:0,offset:0,allNum:1,playing:!1,playMode:"order",listScroll:null,scrollPos:0,listLoading:!1,albumpic:""}},methods:{default:function(){var t=this;this.search(function(s){t.updateSongData(s),t.currentSong=t.songList[t.index],t.$nextTick(function(){t.initScroll()})})},cloud2qqAdapter:function(t){var s={};return s.allNum=t.songCount,s.contentlist=t.songs.map(function(t){var s={};return s.songid=t.id,s.songname=t.name,s.singername=t.artists[0].name,s.albumId=t.album.id,s.albumname=t.album.name,s}),s},resetList:function(){this.offset=0,this.index=0,this.playedList=[]},handleInput:function(t){13===t.keyCode&&this.searchKeyword()},searchKeyword:function(){var t=this,s=this.$refs.searchInput.value;if(""!==s.trim()){this.songList=[],this.listLoading=!0;var i=s.split(" ");s="";for(var n=0;n<i.length;n++)""!==i[n]?s+=i[n]+"+":(i.splice(n,1),--n);this.searchText=s,this.search(function(s){t.resetSongData(s),t.resetList(),t.currentSong=t.songList[t.index],t.$nextTick(function(){t.reInitScroll()})})}},loadMore:function(){var t=this;this.songList.length>=this.allNum||(++this.offset,this.search(function(s){t.updateSongData(s),t.$nextTick(function(){t.reInitScroll()})}))},search:function(t){var s=this,i=this;this.listLoading=!0,this.$http.get(this.urlSearch+this.searchText+"&offset="+this.offset).then(function(n){var e=n.body.result;e=s.cloud2qqAdapter(e),t.call(i,e)})},resetSongData:function(t){this.listLoading=!1,this.allNum=t.allNum,this.songList=t.contentlist},updateSongData:function(t){this.listLoading=!1,this.allNum=t.allNum,this.songList=this.songList.concat(t.contentlist)},initScroll:function(){null===this.listScroll&&(this.listScroll=new u.a("#listWrapper",{mouseWheel:!0,scrollbars:"custom",startY:this.scrollPos}))},reInitScroll:function(){this.scrollPos=this.listScroll.y,null!==this.listScroll&&(this.listScroll.destroy(),this.listScroll=null),this.initScroll()},addPlayedList:function(){var t={song:this.currentSong,index:this.index};this.playedList.push(t)},playControl:function(t){if(this.songList[t].songid===this.currentSong.songid)return void this.switchState();this.addPlayedList(),this.index=t,this.playing=!0,this.currentSong=this.songList[t]},prevSong:function(){if(0!==this.playedList.length){var t=this.playedList.pop();return this.currentSong=t.song,void(this.index=t.index)}this.prevHandler()},nextSong:function(){this.addPlayedList(),this.nextHandler()},prevHandler:function(){({order:function(){0===this.index?this.index=this.songList.length-1:--this.index},random:function(){this.index=Math.floor(this.songList.length*Math.random())},cycle:function(){0===this.index?this.index=this.songList.length-1:--this.index}})[this.playMode].call(this),this.currentSong=this.songList[this.index]},nextHandler:function(){({order:function(){this.index===this.songList.length-1?this.index=0:++this.index},random:function(){this.index=Math.floor(this.songList.length*Math.random())},cycle:function(){this.index===this.songList.length-1?this.index=0:++this.index}})[this.playMode].call(this),this.currentSong=this.songList[this.index]},switchState:function(){this.playing=!this.playing},changeMode:function(){var t={order:"random",random:"cycle",cycle:"order"};this.playMode=t[this.playMode]},renderLyrics:function(){this.$refs.lyrics.renderLyrics()},checkLyric:function(t){this.$refs.lyrics.checkLyric(t)}},created:function(){this.default()}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(2),e=i.n(n);s.default={props:{song:{type:Object}},data:function(){return{defaultCover:"http://7xrkxs.com1.z0.glb.clouddn.com/music/default_album.jpg",cover:"http://7xrkxs.com1.z0.glb.clouddn.com/music/default_album.jpg",lyricApi:"http://115.159.46.181:3000/lyric?id=",albumApi:"http://115.159.46.181:3000/album?id=",lyricText:"",lyricList:{autoScrollAble:!1,list:[]},lyricScroll:null,loading:!1}},methods:{coverImage:function(){var t=this;this.song.albumpic?this.cover=this.song.albumpic:this.$http.get(this.albumApi+this.song.albumId).then(function(s){s.body.songs&&(t.song.albumpic=s.body.songs[0].al.picUrl,t.cover=t.song.albumpic);var i=t;t.cover=t.defaultCover;var n=new Image;n.src=t.song.albumpic,n.onload=function(){i.cover=n.src}})},renderLyrics:function(){var t=this;this.loading=!0,this.coverImage(),this.$http.get(this.lyricApi+this.song.songid).then(function(s){s.data.lrc?t.lyricText=s.data.lrc.lyric:t.lyricText="",t.$nextTick(function(){t.lyricList.list=t.getLyricList(),t.setListScroll(),t.loading=!1})})},getLyricList:function(){var t=this.$refs.lyricText.innerHTML;t=t.split("\n");var s=[];if("["===t[0][0]){if(this.lyricList.autoScrollAble=!0,"[00:00:00]此歌曲为没有填词的纯音乐，请您欣赏"===t[0]){var i={};return i.min=0,i.sec=0,i.ms=0,i.text="此歌曲为没有填词的纯音乐，请您欣赏",i.totalTime=0,s.push(i),s}t.forEach(function(t,i){var n={},e=/\[(\d+):(\d+)\.(\d+)?\](.*)/g,o=e.exec(t);o&&(n.min=parseFloat(o[1]),n.sec=parseFloat(o[2]),n.ms=parseFloat("0."+o[3]),n.text=o[4]||"",n.totalTime=60*n.min+n.sec+n.ms,n.on=!1,s.push(n))})}else if(this.lyricList.autoScrollAble=!1,t.forEach(function(t,i){var n={};n.text=t,n.on=!1,""!==n.text&&s.push(n)}),0===s.length){var n={text:"* 此歌曲暂无歌词 *",on:!1};s.push(n)}else{var e={text:"* 此歌词暂不支持自动滚动 *",on:!1};s.unshift(e)}return s},clearLyricHighlight:function(){for(var t=0;t<this.lyricList.list.length;t++)this.lyricList.list[t].on=!1},setLyricHighlight:function(t){this.lyricList.list[t].on=!0,t>2&&(this.$refs.lyricsContent.style.transform="translate3d(0, -"+34*(t-2)+"px, 0)")},checkLyric:function(t){if(this.lyricList.autoScrollAble){this.clearLyricHighlight();for(var s=this.lyricList.list.length,i=0;i<s;i++){if(this.lyricList.list[i].totalTime>t){var n=i-1;n=n>0?n:0,this.setLyricHighlight(n);break}t>this.lyricList.list[s-1].totalTime&&this.setLyricHighlight(s-1)}}},setListScroll:function(){var t=this;null!==this.lyricScroll&&(this.lyricScroll.destroy(),this.$refs.lyricsContent.style.transform="translate3d(0, 0, 0)",this.$refs.lyricsContent.style.transitionDuration="0.5s",this.lyricScroll=null),this.lyricList.autoScrollAble||this.$nextTick(function(){t.lyricScroll=new e.a("#lyricList")})}},computed:{backgroundObj:function(){return{backgroundImage:"url("+this.cover+")"}}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{songList:{type:Array},currentSong:{type:Object},playing:{type:Boolean},loading:{type:Boolean},currIndex:{type:Number},offset:{type:Number},allNum:{type:Number}},data:function(){return{song:this.currentSong}},methods:{playControl:function(t){this.$emit("playControl",t)},isPlaying:function(t){return this.playing&&this.currIndex===t},loadMore:function(){this.$emit("loadMore")}},computed:{morePages:function(){return this.songList.length<this.allNum&&!this.loading},noData:function(){if(0===this.allNum)return!0}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{song:{type:Object},playing:{type:Boolean},playMode:{type:String}},watch:{song:function(){var t=this;clearInterval(this.intervalId),this.$http.get(this.urlMusic+this.song.songid).then(function(s){t.url=s.body.data[0].url})},playing:function(){this.playing?this.$refs.audio.play():this.$refs.audio.pause()}},data:function(){return{urlMusic:"http://115.159.46.181:3000/music/url?id=",url:null,volPos:{max:80,btn:80},progressPos:{max:0,btn:0},posData:{mouseStartX:"",btnStartX:""},btnType:"",totalLen:0,currLen:0,intervalId:""}},methods:{switchState:function(){this.$emit("switchState")},drag:function(t,s){t.preventDefault(),this.posData.mouseStartX=t.pageX,this.posData.btnStartX=this[s].btn,this.btnType=s,this.btnDownManager(),window.addEventListener("mousemove",this._mousemoveCallback),window.addEventListener("mouseup",this._mouseupCallback)},_mousemoveCallback:function(t){var s=this;this._throttleV2(function(){s.moveBtn(t),s.btnMoveManager()},10,15)()},_mouseupCallback:function(t){window.removeEventListener("mousemove",this._mousemoveCallback),window.removeEventListener("mouseup",this._mouseupCallback),this.btnUpManager()},moveBtn:function(t){var s=t.pageX-this.posData.mouseStartX;this[this.btnType].btn=this.posData.btnStartX+s,this[this.btnType].btn<0&&(this[this.btnType].btn=0),this[this.btnType].btn>this[this.btnType].max&&(this[this.btnType].btn=this[this.btnType].max)},_throttleV2:function(t,s,i){var n=null,e=void 0;return function(){var o=this,r=arguments,a=+new Date;clearTimeout(n),e||(e=a),a-e>=i?(t.apply(o,r),e=a):n=setTimeout(function(){t.apply(o,r)},s)}},btnDownManager:function(){var t=this;({volPos:function(){},progressPos:function(){clearInterval(t.intervalId)}})[this.btnType]()},btnMoveManager:function(t){var s=this;({volPos:function(){s.setVolume()},progressPos:function(){s.currLen=(s.progressPos.btn/s.progressPos.max*s.totalLen).toFixed(4)}})[this.btnType]()},btnUpManager:function(t){var s=this;({volPos:function(){},progressPos:function(){s.$refs.audio.currentTime=(s.progressPos.btn/s.progressPos.max*s.$refs.audio.duration).toFixed(4),s.setProgress()}})[this.btnType]()},setVolume:function(){this.$refs.audio.volume=(this.volPos.btn/this.volPos.max).toFixed(2)},setProgress:function(){var t=this;this.intervalId=setInterval(function(){if(t.$refs.audio.ended)return t.currLen=0,void t.autoNextSong();t.currLen=t.$refs.audio.currentTime,t.progressPos.btn=parseFloat((t.currLen/t.totalLen*t.progressPos.max).toFixed(2)),t.$emit("checkLyric",t.currLen)},100)},changeVolPos:function(t){this.volPos.btn=t.offsetX,this.setVolume()},stopPass:function(){},initMusic:function(){var t=this;this.$refs.audio.addEventListener("loadedmetadata",function(){t.$emit("renderLyrics"),t.totalLen=t.$refs.audio.duration,t.playing&&t.$refs.audio.play(),t.setProgress()})},getTime:function(t){var s=Math.floor(t/60);s<10&&(s="0"+s);var i=Math.floor(t%60);return i<10&&(i="0"+i),s+":"+i},changeProgress:function(t){var s=t.offsetX;this.$refs.audio.currentTime=(s/this.$refs.progressBar.clientWidth*this.totalLen).toFixed(2),this.currLen=this.$refs.audio.currentTime},prevSong:function(){this.$emit("prevSong")},autoNextSong:function(){({order:function(){this.nextSong()},random:function(){this.nextSong()},cycle:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play()}})[this.playMode].call(this)},nextSong:function(){this.$emit("nextSong")},changeMode:function(){this.$emit("changeMode")}},computed:{controlClass:function(){var t={play:"play",pause:"pause"};return this.playing?t.pause:t.play},volumeClass:function(){var t={volumeOff:"volume-off",volumeOn:"volume-on"};return 0===this.volPos.btn?t.volumeOff:t.volumeOn},play_modClass:function(){return{order:"order",random:"random",cycle:"cycle"}[this.playMode]}},mounted:function(){this.initMusic(),this.progressPos.max=this.$refs.progressBar.clientWidth}}},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,,function(t,s,i){i(16);var n=i(0)(i(10),i(27),null,null);t.exports=n.exports},function(t,s,i){i(13);var n=i(0)(i(11),i(24),null,null);t.exports=n.exports},function(t,s,i){i(14);var n=i(0)(i(12),i(25),null,null);t.exports=n.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list-container"},[i("ul",{staticClass:"song-list"},[t._m(0),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.noData,expression:"noData"}],staticClass:"item text-center"},[t._v("未搜索到相关歌曲")]),t._v(" "),t._l(t.songList,function(s,n){return i("li",{staticClass:"item",class:{playing:t.isPlaying(n)}},[i("div",{staticClass:"song_num-wrapper inline-block"},[i("span",[t._v(t._s(n+1))])]),t._v(" "),i("div",{staticClass:"song_name-wrapper inline-block"},[i("span",[t._v(t._s(s.songname))])]),t._v(" "),i("div",{staticClass:"play_btn-wrapper inline-block"},[i("i",{staticClass:"play-btn",on:{click:function(s){t.playControl(n)}}})]),t._v(" "),i("div",{staticClass:"singer-wrapper inline-block"},[i("span",[t._v(t._s(s.singername||"未知"))])]),t._v(" "),i("div",{staticClass:"ablum-wrapper inline-block"},[i("span",[t._v(t._s(s.albumname||"未知"))])])])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"item text-center loading"},[t._v("加载中...")]),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.morePages,expression:"morePages"}],staticClass:"item text-center load-more",on:{click:t.loadMore}},[t._v("加载更多")])],2)])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",{staticClass:"item title"},[i("div",{staticClass:"song_num-wrapper inline-block"}),t._v(" "),i("div",{staticClass:"song_name-wrapper inline-block"},[i("span",[t._v("歌曲")])]),t._v(" "),i("div",{staticClass:"play_btn-wrapper inline-block"}),t._v(" "),i("div",{staticClass:"singer-wrapper inline-block"},[i("span",[t._v("歌手")])]),t._v(" "),i("div",{staticClass:"ablum-wrapper inline-block"},[i("span",[t._v("专辑")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"player-container"},[i("audio",{ref:"audio",attrs:{src:t.url}}),t._v(" "),i("div",{staticClass:"left-content"},[i("span",{staticClass:"bg-icon prev",on:{click:function(s){t.prevSong()}}}),t._v(" "),i("span",{staticClass:"bg-icon",class:t.controlClass,on:{click:t.switchState}}),t._v(" "),i("span",{staticClass:"bg-icon next",on:{click:function(s){t.nextSong()}}})]),t._v(" "),i("div",{staticClass:"right-content"},[i("div",{staticClass:"intro"},[i("span",{staticClass:"title"},[t._v(t._s(t.song.songname))]),t._v(" "),i("span",{staticClass:"singer"},[t._v(t._s(t.song.singername))])]),t._v(" "),i("div",{staticClass:"progress-wrapper"},[i("div",{staticClass:"time"},[i("span",{staticClass:"currTime"},[t._v(t._s(t.getTime(t.currLen)))]),t._v(" "),i("span",{staticClass:"totalTime"},[t._v(" / "+t._s(t.getTime(t.totalLen)))])]),t._v(" "),i("div",{staticClass:"volume-wrapper"},[i("span",{staticClass:"volume-btn",class:t.volumeClass}),t._v(" "),i("div",{ref:"bar",staticClass:"volume-bar",on:{click:t.changeVolPos}},[i("div",{staticClass:"current-bar",style:{width:t.volPos.btn+"px"}}),t._v(" "),i("div",{ref:"volumeController",staticClass:"controller",style:{left:t.volPos.btn+"px"},on:{click:function(s){s.stopPropagation(),t.stopPass(s)},mousedown:function(s){s.stopPropagation(),t.drag(s,"volPos")}}})])]),t._v(" "),i("span",{staticClass:"play_mod-icon",class:t.play_modClass,on:{click:t.changeMode}}),t._v(" "),i("div",{staticClass:"progress_bar-wrapper"},[i("div",{ref:"progressBar",staticClass:"progress_bar",on:{click:t.changeProgress}},[i("div",{staticClass:"current-progress",style:{width:t.progressPos.btn+"px"}})]),t._v(" "),i("div",{staticClass:"progress-btn",style:{left:t.progressPos.btn+"px"},on:{click:function(s){s.stopPropagation(),t.stopPass(s)},mousedown:function(s){s.stopPropagation(),t.drag(s,"progressPos")}}})])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"app",attrs:{id:"app"}},[i("div",{staticClass:"main-content"},[i("div",{staticClass:"search-container"},[i("div",{staticClass:"search-wrapper"},[i("input",{ref:"searchInput",staticClass:"search",attrs:{type:"text",placeholder:"搜索关键字"},on:{keyup:t.handleInput}}),t._v(" "),i("button",{staticClass:"search-btn",on:{click:t.searchKeyword}},[i("i",{staticClass:"search-icon"})])])]),t._v(" "),i("div",{staticClass:"list-wrapper",attrs:{id:"listWrapper"}},[i("MusicList",{attrs:{songList:t.songList,currentSong:t.currentSong,playing:t.playing,currIndex:t.index,offset:t.offset,allNum:t.allNum,loading:t.listLoading},on:{initScroll:t.initScroll,playControl:t.playControl,loadMore:t.loadMore}})],1),t._v(" "),i("div",{staticClass:"lyrics-wrapper"},[i("Lyrics",{ref:"lyrics",attrs:{song:t.currentSong}})],1)]),t._v(" "),i("div",{staticClass:"player-wrapper"},[i("MusicPlayer",{ref:"player",attrs:{playMode:t.playMode,playing:t.playing,song:t.currentSong},on:{nextSong:t.nextSong,prevSong:t.prevSong,switchState:t.switchState,changeMode:t.changeMode,renderLyrics:t.renderLyrics,checkLyric:t.checkLyric}})],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"lyrics-container"},[i("div",{staticClass:"backImg",style:t.backgroundObj}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"lyricText",staticClass:"lyrics-text",domProps:{innerHTML:t._s(t.lyricText)}}),t._v(" "),i("div",{staticClass:"cover"},[i("img",{staticClass:"img",attrs:{src:t.cover}})]),t._v(" "),i("div",{staticClass:"mask"}),t._v(" "),i("div",{staticClass:"lyrics-content-wrapper",attrs:{id:"lyricList"}},[i("ul",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],ref:"lyricsContent",staticClass:"lyrics-content"},t._l(t.lyricList.list,function(s){return i("li",{class:{on:s.on}},[t._v("\n                "+t._s(s.text)+"\n            ")])})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"},[t._v("\n            正在加载......\n        ")])])])},staticRenderFns:[]}},,function(t,s){}],[8]);
//# sourceMappingURL=app.34f0bc0233f79e609116.js.map