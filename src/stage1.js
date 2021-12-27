//横方向の長さ
var stageWidth = new Array();
//縦方向の長さ
var stageHeight = new Array();
//盤面情報
var setStages = new Array();
//ヒント
var stageHint = new Array();
//ブロックの推定必要数
var requiredBlock = new Array();
//ミッション
//mission[num][0] = Int ブロック数
//mission[num][1] = Int 特殊条件
var mission = new Array();
//ステージ数
countBoard = 20;

/*
「どうなっている」の判別
> 0: 使わない
> 15: 使う
> 1~14: n以下

「何」の判別
> 0: 前進する
> 1: 後ろを向く
> 2: 左を向く
> 3: 右を向く
> 4: 前に進めるなら
> 5: 後ろ進めるなら
> 6: 左に進めるなら
> 7: 右に進めるなら
> 8: 繰り返し動作
> 9: 関数nへ移動
> 10: 関数nを開始 (未使用のものを除く)

「何」の数値を4ビット左にシフト(数値を16倍)する。
*/

//特殊条件の数値の準備
function setM(what, how){
	return what * 16 + (how % 16);
}

//ステージ1
stageWidth[0] = 3;
stageHeight[0] = 1;
setStages[0] = [ [ 5, 1, 3] ];
stageHint[0] = "前に進んで星を取ろう!"
requiredBlock[0] = 3;
mission[0] = [3, setM(0, 15)];

//ステージ1
stageWidth[1] = 3;
stageHeight[1] = 3;
setStages[1] = [ [ 0, 0, 3]
				,[ 0, 0, 3]
				,[ 1, 1,21] ];
stageHint[1] = "右にある星を全て取ろう!\nそのためにまず右を向こう!"
requiredBlock[1] = 4;
mission[1] = [0, 0];
mission[1] = [4, setM(3, 15)];

//ステージ2
stageWidth[2] = 5;
stageHeight[2] = 5;
setStages[2] = [ [ 0, 0, 3, 0, 0]
				,[ 0, 0, 1, 0, 0]
				,[ 3, 1, 5, 1, 3]
				,[ 0, 0, 1, 0, 0]
				,[ 0, 0, 3, 0, 0] ];
stageHint[2] = "繰り返し動作をしよう!\n「繰り返し動作」ブロックを使うと\n「動作開始」に戻るよ!"
requiredBlock[2] = 8;
mission[2] = [8, setM(8, 15)];

//ステージ3
stageWidth[3] = 5;
stageHeight[3] = 5;
setStages[3] = [ [ 5, 1, 1, 3, 1]
				,[ 0, 0, 0, 1, 0]
				,[ 1, 3, 0, 1, 0]
				,[ 1, 0, 0, 1, 1]
				,[ 3, 1, 1, 3, 1] ];
stageHint[3] = "緑色のブロックで右方向を確認をしよう!\n基本は「確認して1歩進む」!\n進めるならブロックの右\n進めないならブロックの下を読むよ!"
requiredBlock[3] = 6;
mission[3] = [7, setM(7, 15)];

//ステージ4
stageWidth[4] = 4;
stageHeight[4] = 4;
setStages[4] = [ [29, 0, 3, 1]
				,[ 1, 0, 0, 1]
				,[ 1, 0, 0, 1]
				,[ 1, 3, 0,13] ];
stageHint[4] = "2つのキャラクターを動かそう!\nどっちも同じ動きをするよ!"
requiredBlock[4] = 6;
mission[4] = [6, setM(2, 15)];


//ステージ5
stageWidth[5] = 6;
stageHeight[5] = 6;
setStages[5] = [ [ 5, 1, 1, 1, 1, 1]
        	   , [ 0, 0, 0, 0, 3, 0]
        	   , [ 5, 1, 0, 3, 0, 0]
        	   , [ 3, 0, 1, 1, 1,21]
        	   , [ 0, 3, 0, 0, 0, 0]
        	   , [ 1, 1, 1, 1, 1,21] ];
stageHint[5] = "星を1つずつ取ろう!\n右に星がある時に取りにいこう!";
requiredBlock[5] = 6;
mission[5] = [6, setM(8, 1)];

//ステージ6
stageWidth[6] = 8;
stageHeight[6] = 9;
setStages[6] = [ [ 0, 1, 0, 0, 1, 0, 1, 3]
				,[ 0, 1, 0, 0, 1, 0, 3, 0]
				,[ 1, 1, 1, 1, 1, 3, 1, 1]
				,[ 0, 1, 0, 0, 3, 0, 1, 0]
				,[ 0, 1, 1, 1, 3, 0, 1, 1]
				,[ 0, 1, 0, 0, 3, 0, 0, 0]
				,[ 1, 1, 3, 3, 1, 1, 1, 1]
				,[ 0, 3, 0, 0, 1, 0, 0, 1]
				,[ 5, 1, 1, 1, 1, 1, 1, 1] ];
stageHint[6] = "関数を使おう!\n「関数nへ移動」に入力した数字と\n同じ関数に移動するよ!\n左と右を交互に調べて進もう!"
requiredBlock[6] = 12;
mission[6] = [12, setM(10, 15)];

//ステージ7
stageWidth[7] = 5;
stageHeight[7] = 5;
setStages[7] = [ [ 3, 0, 0, 0,29]
				,[ 1, 0, 0, 3, 1]
				,[ 1, 3, 0, 0, 1]
				,[ 1, 0, 0, 3, 1]
				,[13, 0, 0, 0, 3] ];
stageHint[7] = "関数を使って星を取ろう!\n右に星がある時に取ってこよう!"
requiredBlock[7] = 10;
mission[7] = [12, setM(1, 15)];
/*
//ステージ6
stageWidth[6] = 9;
stageHeight[6] = 4;
setStages[6] = [ [ 0, 0, 1, 0, 1, 1, 1, 1, 1]
				,[ 0, 0, 3, 1, 3, 3, 3, 3, 3]
				,[ 0, 0, 1, 0, 1, 1, 1, 1, 1]
				,[ 5, 1, 3, 1, 0, 0, 0, 0, 0] ];
stageHint[6] = "左に曲がって右に曲がって\n最後は前進!"
requiredBlock[6] = 12;
*/
//ステージ8
stageWidth[8] = 7;
stageHeight[8] = 7;
setStages[8] = [ [ 1, 1, 1, 1, 3, 1, 3]
				,[ 5, 1, 1, 1, 3, 0, 3]
				,[ 1, 0, 1, 1, 3, 1, 3]
				,[ 3, 3, 3, 1, 1, 1, 3]
				,[ 1, 3, 1, 1, 1, 1, 0]
				,[ 0, 3, 1, 3, 3, 3, 3]
				,[ 1, 3, 1, 1, 0, 1, 1] ];
stageHint[8] = "まずは前進!\n左に行ったら回れ右!"
requiredBlock[8] = 12;
mission[8] = [12, setM(4, 2)];

//ステージ9
stageWidth[9] = 7;
stageHeight[9] = 7;
setStages[9] = [ [ 1, 1, 1, 0, 0,29, 0]
				,[ 1, 0, 1, 1, 0, 1, 0]
				,[ 1, 1, 0, 1, 0, 1, 1]
				,[ 0, 1, 0, 1, 0, 0, 1]
				,[ 1, 1, 0, 1, 1, 1, 1]
				,[ 1, 0, 0, 0, 0, 0, 0]
				,[ 1, 1, 1, 1, 1, 1, 3] ];
stageHint[9] = "チュートリアル最後のステージ!\n曲がる所は曲がって先に進もう!"
requiredBlock[9] = 9;
mission[9] = [9, setM(8, 3)];


//ステージ10
stageWidth[10] = 5;
stageHeight[10] = 5;
setStages[10] = [[ 0, 0, 3, 1, 3]
        	   , [ 0, 0, 1, 0, 1]
        	   , [ 3, 1, 5, 1, 3]
        	   , [ 1, 0, 1, 0, 0]
        	   , [ 3, 1, 3, 0, 0] ];
stageHint[10] = "ここからはノーヒントです"
requiredBlock[10] = 8;
mission[10] = [10, setM(10, 0)];

//ステージ11
stageWidth[11] = 9;
stageHeight[11] = 4;
setStages[11] = [[ 3, 1, 3, 0, 0, 0, 3, 1, 3]
        	   , [ 3, 0, 1, 1, 5, 1, 1, 0, 3]
        	   , [ 3, 0, 1, 1, 1, 1, 1, 0, 3]
        	   , [ 3, 1, 3, 0, 0, 0, 3, 1, 3] ];
stageHint[11] = ""
requiredBlock[11] = 9;
mission[11] = [15, setM(7, 0)];

//ステージ12
stageWidth[12] = 7;
stageHeight[12] = 7;
setStages[12] = [[ 1, 3, 1, 0, 1, 3, 1]
        	   , [ 3, 0, 3,13, 3, 0, 3]
        	   , [ 1, 3, 1, 0, 1, 3, 1]
        	   , [ 0, 1, 0, 0, 0, 1, 0]
        	   , [ 1, 3, 1, 0, 1, 3, 1]
        	   , [ 3, 0, 3,29, 3, 0, 3]
        	   , [ 1, 3, 1, 0, 1, 3, 1] ];
stageHint[12] = ""
requiredBlock[12] = 12;
mission[12] = [15, setM(2, 1)];

//ステージ13
stageWidth[13] = 5;
stageHeight[13] = 5;
setStages[13] = [[ 3, 3, 0, 3, 3]
        	   , [ 3, 3, 1, 3, 3]
        	   , [ 0, 1, 5, 1, 0]
        	   , [ 3, 3, 1, 3, 3]
        	   , [ 3, 3, 0, 3, 3] ];
stageHint[13] = ""
requiredBlock[13] = 6;
mission[13] = [9, setM(3, 1)];

//ステージ14
stageWidth[14] = 7;
stageHeight[14] = 7;
setStages[14] = [[ 1, 0, 1, 0, 1, 0, 1]
        	   , [ 0, 1,21, 3, 1, 1, 0]
        	   , [ 1, 1, 1, 1, 1,13, 3]
        	   , [ 0, 1, 1, 1, 1, 1, 0]
        	   , [ 1,29, 3, 1, 1, 1, 1]
        	   , [ 0, 1, 1, 1, 5, 3, 0]
        	   , [ 1, 0, 1, 0, 1, 0, 1] ];
stageHint[14] = ""
requiredBlock[14] = 6;
mission[14] = [6, setM(4, 0)];

//ステージ15
stageWidth[15] = 7;
stageHeight[15] = 7;
setStages[15] = [ [ 0, 0, 1, 3, 1, 0, 0]
				, [ 0, 1, 1, 1, 1, 1, 0]
				, [ 1, 1, 3, 1, 3, 1, 1]
				, [ 5, 1, 1, 1, 1, 1, 3]
				, [ 1, 1, 3, 1, 3, 1, 1]
				, [ 0, 1, 1, 1, 1, 1, 0]
				, [ 0, 0, 1, 3, 1, 0, 0] ];
stageHint[15] = ""
requiredBlock[15] = 7;
mission[15] = [12, setM(0, 12)];

//ステージ17
stageWidth[17] = 9;
stageHeight[17] = 9;
setStages[17] = [[ 5, 1, 1, 1, 3, 1, 1, 3, 1]
        	   , [ 0, 0, 0, 0, 0, 0, 1, 3, 1]
        	   , [ 1, 1, 1, 1, 1, 0, 1, 3, 1]
        	   , [ 1, 3, 1, 0, 3, 0, 1, 3, 1]
        	   , [ 1, 3, 1, 0, 0, 0, 1, 3, 1]
        	   , [ 1, 3, 1, 0, 3, 0, 1, 3, 1]
        	   , [ 1, 3, 1, 0, 1, 1, 1, 1, 1]
        	   , [ 1, 3, 1, 0, 0, 0, 0, 0, 0]
        	   , [ 5, 3, 1, 1, 3, 1, 1, 1, 3] ];
stageHint[17] = ""
requiredBlock[17] = 20;
mission[17] = [26, setM(10, 2)];

//ステージ16
stageWidth[16] = 9;
stageHeight[16] = 8;
setStages[16] = [ [ 5, 1, 1, 1, 1, 1, 1, 1, 3]
        	   , [ 0, 0, 0, 0, 0, 1, 0, 0, 0]
        	   , [ 3, 1, 1, 1, 1, 1, 1, 1, 3]
        	   , [ 0, 1, 0, 0, 0, 0, 0, 0, 0]
        	   , [ 3, 1, 1, 1, 1, 1, 1, 1, 3]
        	   , [ 0, 0, 0, 0, 0, 0, 0, 1, 0]
        	   , [ 3, 1, 1, 1, 1, 1, 1, 1, 3]
        	   , [ 0, 0, 0, 3, 0, 0, 0, 0, 0] ];
stageHint[16] = ""
requiredBlock[16] = 9;
mission[16] = [20, setM(10, 2)];

//ステージ18
stageWidth[18] = 5;
stageHeight[18] = 5;
setStages[18] = [[ 3, 3, 3, 3, 3]
        	   , [ 3, 3, 3, 3, 3]
        	   , [ 3, 3, 5, 3, 3]
        	   , [ 3, 3, 3, 3, 3]
        	   , [ 3, 3, 3, 3, 3] ];
stageHint[18] = ""
requiredBlock[18] = 19;
mission[18] = [20, setM(10, 1)];

//ステージ19
stageWidth[19] = 11;
stageHeight[19] = 9;
setStages[19] = [ [ 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0]
        	   , [ 0, 1, 0, 3, 1, 3, 1, 3, 0, 1, 0]
        	   , [ 3, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        	   , [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        	   , [ 0, 3, 0, 3, 0, 3, 0, 3, 1, 1,21]
        	   , [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        	   , [ 3, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        	   , [ 0, 1, 0, 3, 1, 3, 1, 3, 0, 1, 0]
        	   , [ 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0] ];
stageHint[19] = "草"
requiredBlock[19] = 31;
mission[19] = [93, setM(10, 3)];

/*
//ステージ10
stageWidth[10] = 7;
stageHeight[10] = 7;
setStages[10] = [ [ 0, 0, 1, 3, 1, 0, 0]
        	   , [ 0, 1, 1, 1, 1, 1, 0]
        	   , [ 1, 1, 3, 1, 3, 1, 1]
        	   , [ 5, 1, 1, 1, 1, 1, 3]
        	   , [ 1, 1, 3, 1, 3, 1, 1]
        	   , [ 0, 1, 1, 1, 1, 1, 0]
        	   , [ 0, 0, 1, 3, 1, 0, 0] ];
stageHint[10] = "どの順番で星を取るか考えてみよう!"
requiredBlock[10] = 7;

//ステージ11
stageWidth[11] = 7;
stageHeight[11] = 7;
setStages[11] = [ [ 0, 5, 3, 3, 3, 3, 1]
        	   , [29, 0, 0, 0, 0, 0, 3]
        	   , [ 3, 0, 1, 3, 3, 3, 1]
        	   , [ 3, 0, 3, 0, 0, 0, 0]
        	   , [ 3, 0, 3, 1, 1, 1, 0]
        	   , [ 1, 3, 3, 3, 3, 3, 3]
        	   , [ 1, 0, 3, 1, 1, 1, 0] ];
stageHint[11] = "最後はひたすら前進!"
requiredBlock[11] = 12;

//ステージ12
stageWidth[12] = 9;
stageHeight[12] = 8;
setStages[12] = [ [ 5, 1, 1, 1, 1, 1, 1, 1, 3]
        	   , [ 0, 0, 0, 0, 0, 1, 0, 0, 0]
        	   , [ 3, 1, 1, 1, 1, 1, 1, 1, 3]
        	   , [ 0, 1, 0, 0, 0, 0, 0, 0, 0]
        	   , [ 3, 1, 1, 1, 1, 1, 1, 1, 3]
        	   , [ 0, 0, 0, 0, 0, 0, 0, 1, 0]
        	   , [ 3, 1, 1, 1, 1, 1, 1, 1, 3]
        	   , [ 0, 0, 0, 3, 0, 0, 0, 0, 0] ];
stageHint[12] = "1列ずつ星を取る?\n1つ取ったら先に進む?"
requiredBlock[12] = 9;

//ステージ15
stageWidth[15] = 11;
stageHeight[15] = 9;
setStages[15] = [ [ 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0]
        	   , [ 0, 1, 0, 3, 1, 3, 1, 3, 0, 1, 0]
        	   , [ 3, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        	   , [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        	   , [ 0, 3, 0, 3, 0, 3, 0, 3, 1, 1,21]
        	   , [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        	   , [ 3, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        	   , [ 0, 1, 0, 3, 1, 3, 1, 3, 0, 1, 0]
        	   , [ 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0] ];
stageHint[15] = "草"
requiredBlock[15] = 31;

//ステージ16
stageWidth[16] = 11;
stageHeight[16] = 9;
setStages[16] = [ [ 3, 0, 3, 0, 0, 3, 0, 3, 3, 3, 0]
        	   , [ 5, 1, 1, 1, 1, 1, 1, 1, 0, 1, 3]
        	   , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        	   , [ 1, 1, 0, 1, 0, 1, 3, 1, 0, 1, 0]
        	   , [ 5, 1, 3, 1, 3, 1, 0, 1, 3, 1, 3]
        	   , [ 1, 1, 0, 1, 0, 1, 3, 1, 0, 1, 0]
        	   , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        	   , [ 5, 3, 3, 1, 3, 3, 3, 1, 0, 3, 3]
        	   , [ 1, 1, 3, 3, 3, 1, 3, 3, 3, 3, 0] ];
stageHint[16] = "各キャラクターに異なる動作をさせる\nその方法とは!?"
requiredBlock[16] = 48;

//ステージ17
stageWidth[17] = 11;
stageHeight[17] = 9;
setStages[17] = [[ 0,29, 0, 0,29, 0, 0,29, 0, 0,29]
        	   , [ 0, 1, 1, 1, 1, 0, 3, 1, 1, 1, 1]
        	   , [ 5, 1, 0, 0, 3, 1, 1, 0, 0, 0, 1]
        	   , [ 0, 3, 1, 3, 1, 0, 1, 3, 1, 1, 3]
        	   , [ 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        	   , [ 5, 1, 3, 0, 1, 0, 1, 0, 0, 1, 0]
        	   , [ 0, 0, 1, 1, 3, 1, 3, 1, 3, 1, 3]
        	   , [ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        	   , [ 5, 1, 3, 0, 0, 3, 1, 1, 3, 0, 3] ];
stageHint[17] = "適当なステージには適当なプログラムを?\n試行錯誤してみよう!"
requiredBlock[17] = 13;

//ステージ13
stageWidth[13] = 5;
stageHeight[13] = 5;
setStages[13] = [[ 3, 3, 3, 3, 3]
        	   , [ 3, 3, 3, 3, 3]
        	   , [ 3, 3, 5, 3, 3]
        	   , [ 3, 3, 3, 3, 3]
        	   , [ 3, 3, 3, 3, 3] ];
stageHint[13] = "ボーナスステージ!\n全部取ろう!"
requiredBlock[13] = 20;

//ステージ18
stageWidth[18] = 9;
stageHeight[18] = 9;
setStages[18] = [[ 0, 0, 3, 3, 3, 3, 3, 0, 0]
        	   , [ 0, 0, 0, 3, 3, 3, 0, 0, 0]
        	   , [ 3, 0, 3, 3, 3, 3, 3, 0, 3]
        	   , [ 3, 3, 3, 3, 3, 3, 3, 3, 3]
        	   , [ 3, 3, 3, 3, 5, 3, 3, 3, 3]
        	   , [ 3, 3, 3, 3, 3, 3, 3, 3, 3]
        	   , [ 3, 0, 3, 3, 3, 3, 3, 0, 3]
        	   , [ 0, 0, 0, 3, 3, 3, 0, 0, 0]
        	   , [ 0, 0, 3, 3, 3, 3, 3, 0, 0] ];
stageHint[18] = "ボーナスステージ!!!\n全部取ろう!!!"
requiredBlock[18] = 46;

//ステージ14
stageWidth[14] = 9;
stageHeight[14] = 9;
setStages[14] = [[ 3, 1, 3, 0, 0, 0, 3, 1, 3]
        	   , [ 1, 3, 1, 1, 1, 0, 1, 3, 1]
        	   , [ 3, 1, 3, 0, 1, 0, 3, 1, 3]
        	   , [ 0, 1, 0, 3, 1, 3, 0, 1, 0]
        	   , [ 5, 1, 0, 1, 3, 1, 1, 1,21]
        	   , [ 0, 1, 0, 3, 1, 3, 0, 1, 0]
        	   , [ 3, 1, 3, 0, 1, 0, 3, 1, 3]
        	   , [ 1, 3, 1, 1, 1, 0, 1, 3, 1]
        	   , [ 3, 1, 3, 0, 0, 0, 3, 1, 3] ];
stageHint[14] = "5つの星が5ヶ所"
requiredBlock[14] = 28;

//ステージ19
stageWidth[19] = 17;
stageHeight[19] = 7;
setStages[19] = [ [29, 1, 1, 1, 3, 0,29, 0, 0, 0, 3, 0,29, 1, 1, 3, 0]
				, [ 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 3]
				, [ 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1]
				, [ 1, 1, 1, 1, 3, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1]
				, [ 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1]
				, [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 3]
				, [ 3, 1, 1, 1, 3, 0, 3, 0, 0, 0, 3, 0, 3, 1, 1, 3, 0] ];
stageHint[19] = "Thank you for Playing!\n今更こんなステージ簡単だよなぁ!"
requiredBlock[19] = 9;
*/