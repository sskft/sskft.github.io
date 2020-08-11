$(function(){
var song = [
{
'cover' : 'https://tva2.sinaimg.cn/large/007qKirjgy1gh7j1cc41ij30dw07tdgh.jpg',
'src' : '../music/949859.mp3',
'title' : 'Dear My Friend - 프린세스 라라의 두 번째 O.S.T - 테일즈런너'
},
{
'cover' : 'https://tva2.sinaimg.cn/large/007qKirjgy1gh7j1cc41ij30dw07tdgh.jpg',
'src' : '../music/949858.mp3',
'title' : 'LaLa - Dear My Friend - 粵語版 - 跑Online主題曲'
},
{
'cover' : 'https://tva3.sinaimg.cn/large/007qKirjgy1gh7iim7nu5j308c08caa4.jpg',
'src' : '../music/36543555.mp3',
'title' : 'Ocean(Master AR)'
},
{
'cover' : 'https://tva4.sinaimg.cn/large/007qKirjgy1gh7iio0u3uj308c08ajta.jpg',
'src' : '../music/3546874.mp3',
'title' : '神保町哀歌 - 邪神ちゃん'
},
{
'cover' : 'https://tva4.sinaimg.cn/large/007qKirjgy1gh7iio0u3uj308c08ajta.jpg',
'src' : '../music/3543554.mp3',
'title' : '神保町哀歌(instrumental) - 邪神ちゃん'
},
{
'cover' : 'https://tva3.sinaimg.cn/large/007qKirjgy1gh7iim7nu5j308c08caa4.jpg',
'src' : '../music/321502534.mp3',
'title' : 'unknown'
},
{
'cover' : 'https://tva1.sinaimg.cn/large/007qKirjgy1gh7ioe73j3j30dv0dstak.jpg',
'src' : '../music/1000737681.mp3',
'title' : 'canzoni preferite - TVアニメ「ジョジョの奇妙な冒険 黄金の風」'
},
{
'cover' : 'https://tva1.sinaimg.cn/large/007qKirjgy1gh7iip55ztj30dw0ccq4w.jpg',
'src' : '../music/0015709461.mp3',
'title' : 'Strange Meat Pie - TVアニメ「ドロヘドロ」'
},
{
'cover' : 'https://tva3.sinaimg.cn/large/007qKirjgy1gh7iim7nu5j308c08caa4.jpg',
'src' : '../music/124992149.mp3',
'title' : '超级小白片尾曲 - SuperShiro - みゆはん'
},
{
'cover' : 'https://tva3.sinaimg.cn/large/007qKirjgy1gh7iim7nu5j308c08caa4.jpg',
'src' : '../music/354962547.mp3',
'title' : 'Hop - Azis'
},
{
'cover' : 'https://tva3.sinaimg.cn/large/007qKirjgy1gh7ioeceoyj30ft0jrtas.jpg',
'src' : '../music/352481369.mp3',
'title' : '大好真々子 - 通常攻撃が全体攻撃で二回攻撃ママ - 茅野愛衣'
},
{
'cover' : 'https://tva2.sinaimg.cn/large/007qKirjgy1gh7ioe10nkj30go0gomzh.jpg',
'src' : '../music/0015377566.mp3',
'title' : 'イこうぜ☆パラダイス- TVアニメ「異種族レビュアーズ」'
},
{
'cover' : 'https://tva2.sinaimg.cn/large/007qKirjgy1gh7ioe10nkj30go0gomzh.jpg',
'src' : '../music/0015377567.mp3',
'title' : 'ハナビラ音頭 - TVアニメ「異種族レビュアーズ」'
},
{
'cover' : 'https://tva2.sinaimg.cn/large/007qKirjgy1gh7ioe5fpkj30dw0jnmz5.jpg',
'src' : '../music/0015242300.mp3',
'title' : 'Welcome トゥ 混沌 - TVアニメ「ドロヘドロ」'
},
{
'cover' : 'https://tva1.sinaimg.cn/large/007qKirjgy1gh7iip55ztj30dw0ccq4w.jpg',
'src' : '../music/0015709458.mp3',
'title' : 'Who am I ? - TVアニメ「ドロヘドロ」'
},
{
'cover' : 'https://tva1.sinaimg.cn/large/007qKirjgy1gh7iip55ztj30dw0ccq4w.jpg',
'src' : '../music/0015709459.mp3',
'title' : 'Night SURFING - TVアニメ「ドロヘドロ」'
},
{
'cover' : 'https://tva1.sinaimg.cn/large/007qKirjgy1gh7iip55ztj30dw0ccq4w.jpg',
'src' : '../music/0015709460.mp3',
'title' : 'D.D.D.D. - TVアニメ「ドロヘドロ」'
},
{
'cover' : 'https://tva1.sinaimg.cn/large/007qKirjgy1gh7iip55ztj30dw0ccq4w.jpg',
'src' : '../music/0015709462.mp3',
'title' : 'SECONDs FLY - TVアニメ「ドロヘドロ」'
},
{
'cover' : 'https://tva1.sinaimg.cn/large/007qKirjgy1gh7iip55ztj30dw0ccq4w.jpg',
'src' : '../music/0015709463.mp3',
'title' : '404 - TVアニメ「ドロヘドロ」'
},
{
'cover' : 'https://tva1.sinaimg.cn/large/007qKirjgy1gh7iip55ztj30dw0ccq4w.jpg',
'src' : '../music/0015709464.mp3',
'title' : '脳GRIND - TVアニメ「ドロヘドロ」'
},
{
'cover' : 'https://tva1.sinaimg.cn/large/007qKirjgy1gh7iip55ztj30dw0ccq4w.jpg',
'src' : '../music/0015709467.mp3',
'title' : 'BAD NICK - TVアニメ「ドロヘドロ」'
},
];

var audioFn = audioPlay({
song : song,
autoPlay : false  //是否立即播放第一首，autoPlay为true且song为空，会alert文本提示并退出
});

/* 向歌单中添加新曲目，第二个参数true为新增后立即播放该曲目，false则不播放 */
audioFn.newSong({
'cover' : 'https://tva4.sinaimg.cn/large/007qKirjgy1gh7iip72btj30go0gg0tv.jpg',
'src' : '../music/543615945.mp3',
'title' : 'Pray - TVアニメ『殺戮の天使』'
},false);

/* 暂停播放 */
audioFn.stopAudio();

/* 开启播放 */
audioFn.playAudio();

/* 选择歌单中索引为3的曲目(索引是从0开始的)，第二个参数true立即播放该曲目，false则不播放 */
//audioFn.selectMenu(3,true);

/* 查看歌单中的曲目 */
//console.log(audioFn.song);

/* 当前播放曲目的对象 */
//console.log(audioFn.audio);
});