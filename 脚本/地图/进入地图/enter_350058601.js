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
      cm.setPartner(1, 1540721, 80001638, 0);
      cm.setPartner(1, 1540722, 80001637, 0);
      cm.setPartner(1, 1540451, 80001636, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("…………这是轰炸目标地区。", 37, 1540453, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("女皇的判断没有错。\r\n如果我们没在空中阻止黑色天堂，而是在地面上进行防御的话……", 37, 1540451, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("肯定只能束手无策地被攻击。", 37, 1540453, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("没错。\r\n敌人的目标从一开始就不是侵袭，而是轰炸。", 37, 1540451, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
              cm.warp(350058602, 0, true);
            }
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