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
      cm.askMenu("确定要回到联盟会场吗？\r\n\r\n#b#L0#回到联盟会场。#l\r\n#L1#现在不回去。", 4, 1540795);
    } else {
      if (status === V++) {
        if (U == 0) {
          if (cm.getMapId() < 350100000) {
            cm.setNumberForQuestCustomData(1540447, cm.getMapId());
          } else {
            if (cm.getMapId() < 350120000) {
              cm.setNumberForQuestCustomData(1540448, cm.getMapId());
            } else {
              if (cm.getMapId() < 350130000) {
                cm.setNumberForQuestCustomData(1540450, cm.getMapId());
              } else {
                if (cm.getMapId() < 350140000) {
                  cm.setNumberForQuestCustomData(1540451, cm.getMapId());
                } else {
                  if (cm.getMapId() < 350150000) {
                    cm.setNumberForQuestCustomData(1540452, cm.getMapId());
                  } else if (cm.getMapId() < 350160000) {
                    cm.setNumberForQuestCustomData(1540449, cm.getMapId());
                  } else {
                    cm.setNumberForQuestCustomData(1540452, cm.getMapId());
                  }
                }
              }
            }
          }
          cm.sendOk("已记录下当前的位置。");
        } else {
          cm.dispose();
        }
      } else {
        cm.onActionBarResult(6, -1);
        cm.mapleHeroBecomeNpc(-1, 1);
        cm.warp(913050010, 0, false);
        cm.getPlayer().removeDragon();
        cm.dispose();
      }
    }
  }
}