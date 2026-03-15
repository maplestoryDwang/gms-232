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
      cm.sendNormalTalk_Bottom("#face0#勇士，你来这里有什么事吗？", 37, 9111001, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("我是来传话的，鵺说有话要跟你讲，让你到妖怪森林入口去。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#鵺有话跟我说？可是妖怪森林入口好远，改成四岔路行不行？", 37, 9111001, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("嗯，好的。那我去转告他。", 57, 0, true, true);
          } else if (status === V++) {
            cm.updateInfoQuest(58803, "state=2");
            cm.dispose();
            cm.warp(800000000, 5, false);
          }
        }
      }
    }
  }
}