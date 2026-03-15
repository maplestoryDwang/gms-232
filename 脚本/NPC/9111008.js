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
      cm.sendNormalTalk_Bottom("#face0#你把缘分之翼弄丢了吗？", 37, 9111008, false, true);
    } else {
      if (status === V++) {
        if (cm.haveItem(1102887)) {
          cm.sendNormalTalk_Bottom("#face0#你已经有了，我不能给你。", 37, 9111008, true, true);
          cm.dispose();
        } else {
          cm.sendNormalTalk_Bottom("#face0#喏，给你。以后请再接再厉守护樱之岛。", 37, 9111008, true, true);
        }
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#如果你把缘分之翼弄丢了，就再跟我对话。", 37, 9111008, true, true);
          cm.gainItem(1102887, 1);
        } else if (status === V++) {
          cm.dispose();
        }
      }
    }
  }
}