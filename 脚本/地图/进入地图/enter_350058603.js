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
      cm.npc_ChangeController(1540725, "oid=55830", 198, 116, 2, 148, 248, 1, false, 0, false);
      cm.npc_ChangeController(1540726, "oid=55831", 48, 116, 2, -2, 98, 1, false, 0, false);
      cm.npc_ChangeController(1540727, "oid=55832", -99, 116, 2, -149, -49, 1, false, 0, false);
      cm.npc_ChangeController(1540728, "oid=55833", -438, 116, 1, -488, -388, 1, false, 0, false);
      cm.setPartner(1, 1540721, 80001638, 0);
      cm.setPartner(1, 1540722, 80001637, 0);
      cm.setPartner(1, 1540451, 80001636, 0);
      cm.sendNormalTalk_Bottom("那是……预知力？", 37, 1540453, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("我也不知道。\r\n自从神兽离开之后，女皇确实发生了一些变化。", 37, 1540451, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("等等，现在这并不重要！\r\n如果那些炸弹按照计划掉落到地面？！", 37, 1540452, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("…………我们已经知道了格里梅尔的目的。\r\n我和吉格蒙特会立刻回去，想想对策。", 37, 1540451, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#对策？\r\n我们没法阻止这么多的炸弹！", 37, 1540452, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1##fs20#第1个轰炸地就是埃德尔斯坦！", 37, 1540452, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("请不要动摇！\r\n如果我们没能阻止轰炸，那就想办法把损害最小化。", 37, 1540451, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("赫丽娜，还有#h0#。\r\n请你们一定要阻止格里梅尔。", 37, 1540451, true, true);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(350058700, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;