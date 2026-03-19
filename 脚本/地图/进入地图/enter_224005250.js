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
      cm.npc_ChangeController(2074112, "oid=14029", 1897, 153, 26, 1847, 1947, 1, false, 0, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("#face2#哎哟！\r\n那个，#g船上装的行李#k刚刚动了一下！\r\n那不是单纯的行李吧！", 37, 2074100, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("青儿！青儿！！！", 37, 2074110, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("额！还有两下子嘛！\r\n但绝对要阻止他们碰到#g祭物#k~\r\n没办法了，放#b老虎#k！", 37, 2074112, true, true);
        } else if (status === V++) {
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
          cm.warp(224005300, 0, true);
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