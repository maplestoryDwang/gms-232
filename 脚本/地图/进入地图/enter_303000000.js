var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(32617) && !cm.isQuestFinished(32618)) {
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
      cm.sendNormalTalk("出事了，#h0#。希纳斯患#r#e病#n#k了。", 5, 2520000, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Illus("对不起，南哈特……还有#h0#。", 0, 5, true, true, 5);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("没什么，只要痊愈了就好。", 5, 2520000, true, true);
        } else if (status === V++) {
          cm.sendNormalTalk_Illus("啊，眼前好晕……可以休息一下吗？\r\n\r\n          #fUI/UIWindow4.img/libraryCygnus/0/2#  #fUI/UIWindow4.img/libraryCygnus/1/0#  #fUI/UIWindow4.img/libraryCygnus/2/0#  \r\n          #fUI/UIWindow4.img/libraryCygnus/0/3#  #fUI/UIWindow4.img/libraryCygnus/1/0#  #fUI/UIWindow4.img/libraryCygnus/2/0#  ", 0, 5, true, false, 5);
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