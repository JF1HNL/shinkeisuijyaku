// うらがわ
console.log("流石に答えは隠して置きましたよ。")
const text_img_data = "https://www.instagram.com/p/Bx1IeVkHkem/media/?size=m";
const all_insta_data = [
  "Bx3yYOOFM7W",
  "Bx1IeVkHkem",
  "Bxt6O6XHhhe",
  "BxluW6gHg8x",
  "Bxb36GunYIt",
  "BxWw03rliYb",
  "BxTwds8l2-4",
  "Bw5-F0tFYvE",
  "Bwvq5Chl_m7",
  "Bwl0YjBhu9J",
  "BwgNBrgBflT",
  "BwONWZ3hCEE",
  "Bv5kjoylo4B",
  "Bv28Ds7FSSF",
  "BvskGYTlo-Q",
  "BvqDKipFwIR",
  "BvdHjzznpMV",
  "BvIuhrXliE4",
  "BvBQpp4Fk3J",
  "Bu4xQzXFaXW",
  "BusNZbLl0B_",
  "BufZSUblxUQ",
  "Bua5ul6FpiD",
  "BtueRUEl0As",
  "Btfqrf4lPAF",
  "Btc3_-4loM-",
  "BtSF1BDlowi",
  "BtAR2T4FoeI",
  "BsuFnqQFmfw",
  "BsHjnIhFeBM",
  "Br1hOQ8FCJt",
  "BrjvmuXljWU",
  "BrWdKYeFrM5",
  "BrRWDO9lq09",
  "BrEa7MZl7Uk",
  "Bq1oxSpFSe4"
]
const table_data = random_num();
// console.log(table_data);
let tesuu = 0;
const tesuu_ele = document.querySelector("h3");
const result_eria = document.querySelector(".result");
const FIRST_BASHO_RESET_OBJECT = [100];
// 取った番号をここに入れていく
const get_num = [];
const TEMPLATE_IMG_URL = {
  template:"https://cdn.discordapp.com/attachments/496146508815532048/583949384228798465/20190530_09-29-30-5.png",
  get:"https://cdn.discordapp.com/attachments/496146508815532048/583987499999952896/20190530_09-29-30.png"
}
let first_basho = FIRST_BASHO_RESET_OBJECT;
// 結果を表示中のときは関数を実行させない。
let show_num_flug = false;

function click_select(g){
  const basho = g.split("");
  const doc = document.querySelector(".a"  + basho[1] + basho[2] + " img");
  if(!show_num_flug && doc.src.split("/")[2] != "www.instagram.com"){
    const first_doc = document.querySelector(".a"  + first_basho[1] + first_basho[2] + " img");
    result_eria.textContent = "";
    if(get_judge(table_data[basho[1]-1][basho[2]-1])){
      result_eria.textContent = "すでにとった場所です!"
    }else{
      // クリックしたところを表示
      doc.src = table_data[basho[1]-1][basho[2]-1];
      if(first_basho[0] == 100){
        first_basho = basho;
      }else{
        // 結果を表示中
        show_num_flug = true;
        let judge = false;
        if(table_data[basho[1]-1][basho[2]-1] === table_data[first_basho[1]-1][first_basho[2]-1]){
          judge = true;
          result_eria.textContent = "正解！"
        }else{
          result_eria.textContent = "ざんねん。"
        }
        tesuu++;
        tesuu_ele.innerText = "手数：" + tesuu;
        console.log(first_basho[1]+first_basho[2]+" "+basho[1]+basho[2]+"\n"+"judge:" + judge);
        setTimeout(function(){
          result_eria.textContent = "";
          if(judge){
            get_num.push(doc.src);
            first_doc.src = TEMPLATE_IMG_URL.get;
            doc.src = TEMPLATE_IMG_URL.get;
            if(get_num.length == 8){
              result_eria.textContent = "ゲームクリア！　手数：" + tesuu ;
            }
          }else{
            first_doc.src = TEMPLATE_IMG_URL.template;
            doc.src = TEMPLATE_IMG_URL.template;  
          }
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
  
  // 使う写真のデータをランダムで抽出
  const img_data = [];
  for(let i = 0; i < 8; i++){
    while(1){
      let img_num = Math.floor(Math.random() * all_insta_data.length)
      let index_flug = true;
      for(let j in img_data){
        if(img_data[j] == all_insta_data[img_num]){
          index_flug = false;
          break;
        }
      }
      if(index_flug){
        img_data.push(all_insta_data[img_num]);
        break;
      }
    }
  }
  const ret = [["","","",""],["","","",""],["","","",""],["","","",""]];
  const use_num  = [0,0,0,0,0,0,0,0];
  // const img_data = [
  //   "Bx3yYOOFM7W",
  //   "Bx1IeVkHkem",
  //   "Bxt6O6XHhhe",
  //   "BxluW6gHg8x",
  //   "Bxb36GunYIt",
  //   "BxWw03rliYb",
  //   "BxTwds8l2-4",
  //   "Bw5-F0tFYvE"
  // ];
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
      ret[i][j] = "https://www.instagram.com/p/" + img_data[num - 1] + "/media/?size=m";
    }
  }
  console.log(ret);
  return ret;
}
