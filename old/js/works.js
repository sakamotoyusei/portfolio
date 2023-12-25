$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() { 
    //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
    });




    //値をグラフに表示させる
    Chart.plugins.register({
        afterDatasetsDraw: function (chart, easing) {
            var ctx = chart.ctx;

            chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // 値の表示
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                    var fontSize = 12;//フォントサイズ
                    var fontStyle = 'normal';//フォントスタイル
                    var fontFamily = 'Arial';//フォントファミリー
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    var dataString = dataset.data[index].toString();
					
                    // 値の位置
                    ctx.textAlign = 'center';//テキストを中央寄せ
                    ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え

                    var padding = 5;//余白
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
		
                });
            }
        });
    }
});


//=========== 円グラフ（ドーナッツ型1） ============//
$('#chart02').on('inview', function(event, isInView) {//画面上に入ったらグラフ
if (isInView) {


var ctx=document.getElementById("chart02");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'doughnut',//グラフのタイプ
data:{//グラフのデータ
	//labels:["Illustrator"],//データの名前
	datasets:[{
			label:"職種別比率",//グラフのタイトル
			backgroundColor:["#ff8c00","#fff",],//グラフの背景色
			data:["80","20"]//データ
		}]
},



options:{//グラフのオプション
	maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
	cutoutPercentage:55,//中央からの空円の太さ。グラフの太さ変更
	legend:{
		display:true//グラフの説明を表示
	},
	tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
		callbacks:{
        label: function (tooltipItem, data) {
			return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
		}
    },		
	},
	title:{//上部タイトル表示の設定
		display: true,
		fontSize: 50,
		text: 'Illustrator'
	},
}
});

}
});





    //値をグラフに表示させる
    Chart.plugins.register({
        afterDatasetsDraw: function (chart, easing) {
            var ctx = chart.ctx;
    
            chart.data.datasets.forEach(function (dataset, i) {
                var meta = chart.getDatasetMeta(i);
                if (!meta.hidden) {
                    meta.data.forEach(function (element, index) {
                        // 値の表示
                        ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                        var fontSize = 12;//フォントサイズ
                        var fontStyle = 'normal';//フォントスタイル
                        var fontFamily = 'Arial';//フォントファミリー
                        ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
    
                        var dataString = dataset.data[index].toString();
                        
                        // 値の位置
                        ctx.textAlign = 'center';//テキストを中央寄せ
                        ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え
    
                        var padding = 5;//余白
                        var position = element.tooltipPosition();
                        ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
            
                    });
                }
            });
        }
    });
    
    



    //=========== 円グラフ（ドーナッツ型2） ============//
    $('#chart03').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
    if (isInView) {
    
    
    var ctx=document.getElementById("chart03");//グラフを描画したい場所のid
    var chart=new Chart(ctx,{
    type:'doughnut',//グラフのタイプ
    data:{//グラフのデータ
        //labels:["Photoshop"],//データの名前
        datasets:[{
                label:"職種別比率",//グラフのタイトル
                backgroundColor:["#00bfff","#fff",],//グラフの背景色
                data:["60","40"]//データ
            }]
    },
    
    
    
    options:{//グラフのオプション
        maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
        cutoutPercentage:55,//中央からの空円の太さ。グラフの太さ変更
        legend:{
            display:true//グラフの説明を表示
        },
        tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
            callbacks:{
            label: function (tooltipItem, data) {
                return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
            }
        },		
        },
        title:{//上部タイトル表示の設定
            display: true,
            fontSize:50,
            text: 'Photoshop'
        },
    }
    });
    
    }
    });
    //値をグラフに表示させる
    Chart.plugins.register({
        afterDatasetsDraw: function (chart, easing) {
            var ctx = chart.ctx;
    
            chart.data.datasets.forEach(function (dataset, i) {
                var meta = chart.getDatasetMeta(i);
                if (!meta.hidden) {
                    meta.data.forEach(function (element, index) {
                        // 値の表示
                        ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                        var fontSize = 12;//フォントサイズ
                        var fontStyle = 'normal';//フォントスタイル
                        var fontFamily = 'Arial';//フォントファミリー
                        ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
    
                        var dataString = dataset.data[index].toString();
                        
                        // 値の位置
                        ctx.textAlign = 'center';//テキストを中央寄せ
                        ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え
    
                        var padding = 5;//余白
                        var position = element.tooltipPosition();
                        ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
            
                    });
                }
            });
        }
    });
    
    
    //=========== 円グラフ（ドーナッツ型3） ============//
    $('#chart04').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
    if (isInView) {
    
    
    var ctx=document.getElementById("chart04");//グラフを描画したい場所のid
    var chart=new Chart(ctx,{
    type:'doughnut',//グラフのタイプ
    data:{//グラフのデータ
        //labels:["Premier"],//データの名前
        datasets:[{
                label:"職種別比率",//グラフのタイトル
                backgroundColor:["#4b0082","#fff",],//グラフの背景色
                data:["60","40"]//データ
            }]
    },
    
    
    
    options:{//グラフのオプション
        maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
        cutoutPercentage:55,//中央からの空円の太さ。グラフの太さ変更
        legend:{
            display:true//グラフの説明を表示
        },
        tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
            callbacks:{
            label: function (tooltipItem, data) {
                return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
            }
        },		
        },
        title:{//上部タイトル表示の設定
            display: true,
            fontSize:50,
            text: 'Premiere Pro'
        },
    }
    });
    
    }
    });
    //値をグラフに表示させる
    Chart.plugins.register({
        afterDatasetsDraw: function (chart, easing) {
            var ctx = chart.ctx;
    
            chart.data.datasets.forEach(function (dataset, i) {
                var meta = chart.getDatasetMeta(i);
                if (!meta.hidden) {
                    meta.data.forEach(function (element, index) {
                        // 値の表示
                        ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                        var fontSize = 12;//フォントサイズ
                        var fontStyle = 'normal';//フォントスタイル
                        var fontFamily = 'Arial';//フォントファミリー
                        ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
    
                        var dataString = dataset.data[index].toString();
                        
                        // 値の位置
                        ctx.textAlign = 'center';//テキストを中央寄せ
                        ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え
    
                        var padding = 5;//余白
                        var position = element.tooltipPosition();
                        ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
            
                    });
                }
            });
        }
    });
    
    
    //=========== 円グラフ（ドーナッツ型4） ============//
    $('#chart05').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
    if (isInView) {
    
    
    var ctx=document.getElementById("chart05");//グラフを描画したい場所のid
    var chart=new Chart(ctx,{
    type:'doughnut',//グラフのタイプ
    data:{//グラフのデータ
        //labels:["html"],//データの名前
        datasets:[{
                label:"職種別比率",//グラフのタイトル
                backgroundColor:["#ff4500","#fff",],//グラフの背景色
                data:["70","30"]//データ
            }]
    },
    
    
    
    options:{//グラフのオプション
        maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
        cutoutPercentage:55,//中央からの空円の太さ。グラフの太さ変更
        legend:{
            display:true//グラフの説明を表示
        },
        tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
            callbacks:{
            label: function (tooltipItem, data) {
                return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
            }
        },		
        },
        title:{//上部タイトル表示の設定
            display: true,
            fontSize:50,
            text: 'html'
        },
    }
    });
    
    }
    });
    //値をグラフに表示させる
    Chart.plugins.register({
        afterDatasetsDraw: function (chart, easing) {
            var ctx = chart.ctx;
    
            chart.data.datasets.forEach(function (dataset, i) {
                var meta = chart.getDatasetMeta(i);
                if (!meta.hidden) {
                    meta.data.forEach(function (element, index) {
                        // 値の表示
                        ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                        var fontSize = 12;//フォントサイズ
                        var fontStyle = 'normal';//フォントスタイル
                        var fontFamily = 'Arial';//フォントファミリー
                        ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
    
                        var dataString = dataset.data[index].toString();
                        
                        // 値の位置
                        ctx.textAlign = 'center';//テキストを中央寄せ
                        ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え
    
                        var padding = 5;//余白
                        var position = element.tooltipPosition();
                        ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
            
                    });
                }
            });
        }
    });
    
    
    //=========== 円グラフ（ドーナッツ型5） ============//
    $('#chart06').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
    if (isInView) {
    
    
    var ctx=document.getElementById("chart06");//グラフを描画したい場所のid
    var chart=new Chart(ctx,{
    type:'doughnut',//グラフのタイプ
    data:{//グラフのデータ
        //labels:["css"],//データの名前
        datasets:[{
                label:"職種別比率",//グラフのタイトル
                backgroundColor:["#7fffd4","#fff",],//グラフの背景色
                data:["50","50"]//データ
            }]
    },
    
    
    
    options:{//グラフのオプション
        maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
        cutoutPercentage:55,//中央からの空円の太さ。グラフの太さ変更
        legend:{
            display:true//グラフの説明を表示
        },
        tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
            callbacks:{
            label: function (tooltipItem, data) {
                return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
            }
        },		
        },
        title:{//上部タイトル表示の設定
            display: true,
            fontSize:50,
            text: 'css'
        },
    }
    });
    
    }
    });
    //値をグラフに表示させる
    Chart.plugins.register({
        afterDatasetsDraw: function (chart, easing) {
            var ctx = chart.ctx;
    
            chart.data.datasets.forEach(function (dataset, i) {
                var meta = chart.getDatasetMeta(i);
                if (!meta.hidden) {
                    meta.data.forEach(function (element, index) {
                        // 値の表示
                        ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                        var fontSize = 12;//フォントサイズ
                        var fontStyle = 'normal';//フォントスタイル
                        var fontFamily = 'Arial';//フォントファミリー
                        ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
    
                        var dataString = dataset.data[index].toString();
                        
                        // 値の位置
                        ctx.textAlign = 'center';//テキストを中央寄せ
                        ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え
    
                        var padding = 5;//余白
                        var position = element.tooltipPosition();
                        ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
            
                    });
                }
            });
        }
    });
    
    
    //=========== 円グラフ（ドーナッツ型6） ============//
    $('#chart07').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
    if (isInView) {
    
    
    var ctx=document.getElementById("chart07");//グラフを描画したい場所のid
    var chart=new Chart(ctx,{
    type:'doughnut',//グラフのタイプ
    data:{//グラフのデータ
        //labels:["JavaScript"],//データの名前
        datasets:[{
                label:"職種別比率",//グラフのタイトル
                backgroundColor:["#ffd700","#fff",],//グラフの背景色
                data:["40","60"]//データ
            }]
    },
    
    
    
    options:{//グラフのオプション
        maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
        cutoutPercentage:55,//中央からの空円の太さ。グラフの太さ変更
        legend:{
            display:true//グラフの説明を表示
        },
        tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
            callbacks:{
            label: function (tooltipItem, data) {
                return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
            }
        },		
        },
        title:{//上部タイトル表示の設定
            display: true,
            fontSize:50,
            text: 'JavaScript'
        },
    }
    });
    
    }
    });









//ふわっと出てくるやつ


    $(function(){
        $(".profile img").on("inview", function(event, isInView){
            if(isInView){
                $(this).addClass("is-inview");
            }
        })
    });

    $(function(){
        $(".profile-text").on("inview", function(event, isInView){
            if(isInView){
                $(this).addClass("is-inview");
            }
        })
    });

    $(function(){
        $(".g22414").on("inview", function(event, isInView){
            if(isInView){
                $(this).addClass("is-inview");
            }
        })
    });









    //任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});



// $(document).ready ( function(){
//     $(window).on('load', function () {
//         $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
//         $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
//         var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
//         GethashID (hashName);//設定したタブの読み込み
//     });
// });



$(function(){
    $(".rekishi1").on("inview", function(event, isInView){
        if(isInView){
            $(this).addClass("is-inview");
        }
    })
});

$(function(){
    $(".rekishi h2").on("inview", function(event, isInView){
        if(isInView){
            $(this).addClass("is-inview");
        }
    })
});

$(function(){
    $(".illustt").on("inview", function(event, isInView){
        if(isInView){
            $(this).addClass("is-inview");
        }
    })
});

$(function(){
    $(".illust").on("inview", function(event, isInView){
        if(isInView){
            $(this).addClass("is-inview");
        }
    })
});

$(function(){
    $(".illust3").on("inview", function(event, isInView){
        if(isInView){
            $(this).addClass("is-inview");
        }
    })
});


const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")
const navLinks =document.querySelectorAll(".nav-links li")

burger.addEventListener("click",() => {
	nav.classList.toggle("nav-active")

	navLinks.forEach((link,index) => {
		if(link.style.animation) {
			link.style.animation = "";
		}else {
			link.style.animation = `navLinksFade 0.5s ease forwards ${index /3 }s`;
		}
	});
	burger.classList.toggle("toggle");
});