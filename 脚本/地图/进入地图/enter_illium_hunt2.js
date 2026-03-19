var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.setPartner(1, 3001330, 80002330, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.sendNormalTalk_Bottom("#face0#快看那！", 37, 3001351, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#呃……好多豪猪啊……", 37, 3001351, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#太好了。这次一定能获得配件。", 37, 3001300, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#消灭豪猪后,掉落的配件可按击#rZ键#k拾取。快去收集配件吧。", 37, 3001300, true, true, 1);
          } else {
            if (status === V++) {
              cm.getTopMsgFont("点击[Z]键可以拾取道具。", 3, 20, 20, 0, 0);
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else if (status === V++) {
              cm.effect_OnUserEff("UI/tutorial.img/illium/pickup");
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}