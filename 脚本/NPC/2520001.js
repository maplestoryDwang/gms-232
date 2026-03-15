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
      if (cm.isQuestActive(32607)) {
        cm.forceStartQuest(32626, '1');
      }
      var w = "我能成为女皇吗? \r\n\r\n";
      var N = 2520001;
      if (cm.isQuestFinished(32610)) {
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/0#  #fUI/UIWindow4.img/libraryCygnus/1/4#  #fUI/UIWindow4.img/libraryCygnus/2/4#  \r\n";
      } else {
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/0#  #fUI/UIWindow4.img/libraryCygnus/1/1#  #fUI/UIWindow4.img/libraryCygnus/2/1#  \r\n";
      }
      if (cm.isQuestFinished(32617)) {
        N = 2520002;
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/1#  #fUI/UIWindow4.img/libraryCygnus/1/4#  #fUI/UIWindow4.img/libraryCygnus/2/4#  \r\n";
      } else {
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/1#  #fUI/UIWindow4.img/libraryCygnus/1/1#  #fUI/UIWindow4.img/libraryCygnus/2/1#  \r\n";
      }
      if (cm.isQuestFinished(32617) && !cm.isQuestFinished(32623)) {
        N = 2520003;
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/2#  #fUI/UIWindow4.img/libraryCygnus/1/0#  #fUI/UIWindow4.img/libraryCygnus/2/0#  \r\n";
      } else if (cm.isQuestFinished(32624)) {
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/2#  #fUI/UIWindow4.img/libraryCygnus/1/3#  #fUI/UIWindow4.img/libraryCygnus/2/3#  \r\n";
      } else {
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/2#  #fUI/UIWindow4.img/libraryCygnus/1/1#  #fUI/UIWindow4.img/libraryCygnus/2/1#  \r\n";
      }
      if (cm.isQuestFinished(32617) && !cm.isQuestFinished(32623)) {
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/3#  #fUI/UIWindow4.img/libraryCygnus/1/0#  #fUI/UIWindow4.img/libraryCygnus/2/0#  \r\n";
      } else if (cm.isQuestFinished(32624)) {
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/3#  #fUI/UIWindow4.img/libraryCygnus/1/4#  #fUI/UIWindow4.img/libraryCygnus/2/4#  \r\n";
      } else {
        w += "          #fUI/UIWindow4.img/libraryCygnus/0/3#  #fUI/UIWindow4.img/libraryCygnus/1/2#  #fUI/UIWindow4.img/libraryCygnus/2/2#  \r\n";
      }
      cm.sendNormalTalk_Illus(w, N, 0, false, false, 0);
    } else {
      cm.dispose();
    }
  }
}