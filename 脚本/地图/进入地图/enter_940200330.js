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
      cm.npc_ChangeController(3003363, "oid=201112", 1623, -101, 42, 1573, 1673, 1, false, false);
      cm.setPartner(1, 3003350, 80002267, 0);
      cm.setPartner(1, 3003351, 80002273, 0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 80);
      cm.inGameDirectionEvent_AskAnswerTime(900);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#从凋零的草叶笛中获得种子，在草叶笛附近按下空格键。", 37, 3003301, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#搬到最容易照到月光的地方种下~种下，种下~", 37, 3003302, false, true);
          } else {
            if (status === V++) {
              cm.getMap().spawnReactorIfNotExist(3600000, 0, -433, 133, 0, '');
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else if (status === V++) {
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
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