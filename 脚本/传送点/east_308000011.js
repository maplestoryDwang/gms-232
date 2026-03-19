function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.isQuestActive(37808)) {
        cm.sendNormalTalk_Bottom("#face0#等等，走水路可以再缩短点时间。", 36, 2570104, false, true, 1);
      } else {
        cm.sendNormalTalk_Bottom('现在还无法移动。', 56, 0, false, true, 1);
        cm.dispose();
      }
    } else {
      if (status === R++) {
        cm.sendNormalTalk_Bottom("#face0#敌人也会少得多。", 36, 2570104, true, true, 1);
      } else {
        if (status === R++) {
          cm.sendNormalTalk_Bottom("#face0#我也这么想。", 36, 2570102, true, true, 1);
        } else {
          if (status === R++) {
            cm.sendNormalTalk_Bottom("#face0#确实，会变得更轻松。", 36, 2570105, true, true, 1);
          } else {
            if (status === R++) {
              cm.sendNormalTalk_Bottom("#face5#走水路的话……会进入与目前为止不同的路线吗？", 36, 2570101, true, true, 1);
            } else {
              if (status === R++) {
                cm.sendNormalTalk_Bottom("应该是吧。有什么问题吗？", 56, 0, true, true, 1);
              } else {
                if (status === R++) {
                  cm.sendNormalTalk_Bottom("#face2#不……不是的。", 36, 2570101, true, true, 1);
                } else {
                  if (status === R++) {
                    cm.sendNormalTalk_Bottom("全体移动。", 56, 0, true, true, 1);
                  } else if (status === R++) {
                    cm.getTopMsgFont("你必须消灭区域内的所有怪物，才能进入下一个关卡。", 3, 20, 20, 0, 0);
                    cm.forceJoinEvent("圣瑞尼亚的骑士_清怪5");
                    cm.dispose();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}