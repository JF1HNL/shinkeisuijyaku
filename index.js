// うらがわ
console.log("流石に答えは隠して置きましたよ。")
const table_data = random_num();
// console.log(table_data);
const result_eria = document.querySelector(".result");
const FIRST_BASHO_RESET_OBJECT = [100];
// 取った番号をここに入れていく
const get_num = [];
let first_basho = FIRST_BASHO_RESET_OBJECT;
// 結果を表示中のときは関数を実行させない。
let show_num_flug = false;

function click_select(g){
  const basho = g.split("");
  const doc = document.querySelector(".a"  + basho[1] + basho[2]);
  if(!show_num_flug && doc.textContent === ""){
    const first_doc = document.querySelector(".a"  + first_basho[1] + first_basho[2]);
    result_eria.textContent = "";
    if(get_judge(table_data[basho[1]-1][basho[2]-1])){
      result_eria.textContent = "すでにとった場所です!"
    }else{
      // クリックしたところを表示
      doc.textContent = table_data[basho[1]-1][basho[2]-1];
      if(first_basho[0] == 100){
        first_basho = basho;
      }else{
        // 結果を表示中
        show_num_flug = true;
        let judge = false;
        if(table_data[basho[1]-1][basho[2]-1] === table_data[first_basho[1]-1][first_basho[2]-1]){
          judge = true;
          result_eria.textContent = "やったね！あってるよ！"
        }else{
          result_eria.textContent = "ざんねん。もういっかいチャレンジだ！"
        }
        setTimeout(function(){
          result_eria.textContent = "";
          if(judge){
            first_doc.className += " get";
            doc.className += " get";
            get_num.push(doc.textContent);
            if(get_num.length == 8){
              result_eria.textContent = "げーむくりあ！！";
            }
          }
          doc.textContent = "";
          first_doc.textContent = "";
          first_basho = FIRST_BASHO_RESET_OBJECT;
          // 結果を表示解除
          show_num_flug = false;
        },2000);
      }
    }
  }
}

function get_judge(k){
  let ret = false;
  for(let i in get_num){
    if(k == get_num[i]){
      ret = true;
    }
  }
  return ret;
}

function random_num(){
// ランダムでテーブルを作成
  const ret = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  const use_num  = [0,0,0,0,0,0,0,0];
  for(let i = 0; i < 4; i++){
    for(let j = 0; j< 4; j++){
      let num = 0;
      while(1){
        num = Math.floor(Math.random() * 8) + 1;
        if(use_num[num - 1] < 2){
          break;
        }
      }
      use_num[num - 1]++;
      ret[i][j] = num;
    }
  }
  return ret;
}
