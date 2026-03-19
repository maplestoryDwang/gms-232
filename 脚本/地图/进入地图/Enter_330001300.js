var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(32817)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("你来了？喂，这人真可笑？说是要制作什么爱情灵药，结果竟成了这副样子？", 37, 1530030, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("随着砰的一声巨响，就晕倒了。再过一会儿应该就能醒过来了。", 37, 1530030, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("现在的问题是尘土怪。因为这家伙搞出‘砰’的一声巨响，把科学室里的尘土怪都给惊醒了。你可以去消灭那些家伙吗？\r\n#b（去科学室的尘土地带消灭90只尘土怪后再回来吧。）#k", 37, 1530030, true, true);
        } else if (status === V++) {
          cm.updateInfoQuest(32843, "ph1=1;ph2=1;ph3=1;notice=1");
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;