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
      if (cm.isQuestActive(33050) && cm.getNumberFromQuestInfo(33050, "photo") == 1 && cm.getNumberFromQuestInfo(33050, 'ok') == 0) {
        cm.sendNormalTalk_Bottom("那是什么? ", 37, 1530070, false, true, 1);
      } else {
        cm.sendNormalTalk_Bottom("你有话对我说吗？", 37, 1530070, false, true);
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom(" (哎……? 奇了怪了, 看了照片, 南哈特居然也没有变成乌贼. )", 57, 0, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0# 喂, 学生会长! 你怎么没有变成乌贼啊! ", 37, 1530100, true, true, 1);
          cm.effect_Voice("Voice2.img/Friends/HID_05/2", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#你不知道吗? 我可是稳坐我们学校人气投票第1名的人物. ", 37, 1530070, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0# 只有我变成乌贼……只有我变成乌贼了! ", 37, 1530100, true, true, 1);
              cm.effect_Voice("Voice2.img/Friends/HID_05/4", 100);
            } else if (status === V++) {
              cm.updateInfoQuest(33050, "photo=1;ok=1");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}