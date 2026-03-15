var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("欢迎回到我们的营地。我能帮你做点什么？#l\r\n#b#L0#这么说，你没见过杰克？#l\r\n#b#L1#这片森林和里面那些会移动的树是怎么回事？#l\r\n#b#L2#既然你们不是强盗，那你们到底是干什么的？#l#k", 0, 9201100);
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.sendNormalTalk("<吐痰> 你是说宝藏猎人？我的确看到过类似的人通过这里。如果你和他是一伙的，那就立刻给我离开这里。立刻！", 0, 9201100, false, true);
        } else {
          if (U == 1) {
            cm.askMenu("我们做什么不关你的事。爱管闲事的人通常都没有好下场。#l\r\n#b#L0#我才不怕你。但是我现在更关心的是在森林中失联的旅人。你和这件事有关系么？#l\r\n#b#L1#<咽口水！> 对不起，我不会多管闲事的，我现在就走！#l#k", 0, 9201100);
          } else if (U == 2) {
            cm.sendNormalTalk("强盗？  <大笑>  嘿，约库，你听到了么？这个弱鸡说我们是强盗！真好笑！", 0, 9201100, false, true);
          }
        }
        cm.dispose();
      }
    }
  }
}