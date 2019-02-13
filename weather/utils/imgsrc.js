const getImgSrc = (cond)=> {
    let cond_text = ''
    if (cond == 100) {
      cond_text = "qing";
    } else if (cond >= 101 && cond <= 103) {
      cond_text = "duoyun";
    } else if (cond == 104) {
      cond_text = "yin";
    } else if (cond >= 200 && cond <= 213) {
      cond_text = "feng";
    } else if (cond == 300) {
      cond_text = "zhenyu";
    } else if (cond >= 301 && cond <= 303) {
      cond_text = "leizhenyu";
    } else if (cond == 304 || cond == 308 || cond == 313) {
      cond_text = "leizhenyubanbingbao";
    } else if (cond == 305 || cond == 309) {
      cond_text = "xiaoyu";
    } else if (cond == 306) {
      cond_text = "zhongyu";
    } else if (cond == 307) {
      cond_text = "dayu";
    } else if (cond == 310) {
      cond_text = "baoyu";
    } else if (cond == 311 || cond == 312) {
      cond_text = "dabaoyu";
    } else if (cond == 400) {
      cond_text = "xiaoxue";
    } else if (cond == 401) {
      cond_text = "zhongxue";
    } else if (cond == 402) {
      cond_text = "daxue";
    } else if (cond == 403) {
      cond_text = "baoxue";
    } else if (cond == 407) {
      cond_text = "zhenxue";
    } else if (cond >= 404 && cond <= 406) {
      cond_text = "yujiaxue";
    } else if (cond == 500 || cond == 501) {
      cond_text = "wu";
    } else if (cond == 502) {
      cond_text = "mai";
    } else if (cond == 503) {
      cond_text = "yangsha";
    } else if (cond == 504) {
      cond_text = "fuchen";
    } else if (cond == 506 || cond == 507) {
      cond_text = "shachenbao";
    } else if (cond == 508) {
      cond_text = "qiangshachenbao";
    } else {
      cond_text = "weizhi"
    }
    return `/images/condition-icons/${cond_text}.png`;
}

export {getImgSrc};