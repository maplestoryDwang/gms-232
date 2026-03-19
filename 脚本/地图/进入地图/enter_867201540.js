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
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_ForcedFlip(-1);
    cm.setPartner(1, 9400580, 80011692, 0);
    cm.setPartnerAction(1, 9400595, 80011701, 200, 0, 0);
    cm.forceStartQuest(64078, '');
    cm.updateInfoQuest(64078, "chk1=1");
    cm.addPopupSay(9400580, 3000, "#face0#好温暖啊！就像是哈瓦尔的歌那样……", '', 0);
    cm.addPopupSay(9400580, 3000, "#face0##h0#，去那边！", '', 0);
    cm.curNodeEventEnd(true);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;