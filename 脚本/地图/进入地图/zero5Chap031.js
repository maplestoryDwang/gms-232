var status = -1;
var selectionLog = [];
function action(f, E, e) {
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
      cm.onZeroInfo(2);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.spawnMobLimit(9300789, 1, 764, 83, 100);
        cm.sendNormalTalk("你这么快就来到第二个庭院了啊！你没想到吧，#p2400006#？我是说#p2400006#你没想到自己这么强吧……", 33, 2460000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你经常和#p2400005#一起行动，所以还不太清楚你自己的实力！你还不知道自己是多么强大、多么出色呢。", 33, 2460000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("如果#p2400005#能让#p2400006#你发挥你的才能就好了……可惜他似乎没能那么做。也是，想要驾驭自己也不是件容易的事。", 33, 2460000, true, true);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
          }
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