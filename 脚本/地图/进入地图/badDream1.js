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
      cm.npc_ChangeController(1105000, 'oid=221117', -405, 37, 57, -455, -355, 1, false, 0, false);
      cm.npc_ChangeController(1105002, "oid=221118", -133, 37, 57, -183, -83, 1, false, 0, false);
      cm.npc_ChangeController(1105003, "oid=221119", -482, 37, 57, -532, -432, 1, false, 0, false);
      cm.npc_ChangeController(1105004, 'oid=221120', -721, 88, 14, -771, -671, 1, false, 0, false);
      cm.npc_ChangeController(1105005, 'oid=221121', -700, 88, 13, -750, -650, 1, false, 0, false);
      cm.npc_ChangeController(1105006, "oid=221122", -775, 88, 14, -825, -725, 1, false, 0, false);
      cm.npc_ChangeController(1105007, "oid=221123", -842, -88, 39, -892, -792, 1, false, 0, false);
      cm.npc_ChangeController(1105008, 'oid=221124', -66, 37, 57, -116, -16, 1, false, 0, false);
      cm.npc_ChangeController(1105009, "oid=221125", 1, 37, 57, -49, 37, 1, false, 0, false);
      cm.npc_ChangeController(1105010, "oid=221126", 79, 88, 3, 29, 129, 1, false, 0, false);
      cm.npc_ChangeController(1105011, "oid=221127", 122, 88, 2, 72, 172, 1, false, 0, false);
      cm.npc_ChangeController(1105012, "oid=221128", 165, 88, 2, 115, 215, 1, false, 0, false);
      cm.npc_ChangeController(1105013, 'oid=221129', 206, 88, 23, 156, 256, 1, false, 0, false);
      cm.npc_ChangeController(1105014, "oid=221130", -555, 37, 57, -605, -505, 1, false, 0, false);
      cm.npc_ChangeController(2142938, "oid=221131", -204, 37, 57, -254, -154, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("各位，会议现在开始。", 1, 1105001, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("真的花了很长时间。而且还有人没能参加……大家为什么这么喜欢单独行动呢？", 1, 1105002, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("大家都有各自的事情。要把冒险岛世界的勇士们聚集在一起，并不是那么容易的事情，吉格蒙特。", 1, 1105003, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("正是因为要做的事情不容易，才会成立联盟，南哈特。不然的话，冒险岛联盟就没有存在的理由。", 1, 1105002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("没有存在的理由？这话似乎太轻率了。联盟是在所有人的共同努力下，好不容易才成立的。大家约定要齐心协力对抗黑魔法师，难道不是吗？", 1, 1105003, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("冒险骑士团还好意思跟我说“约定”吗？", 1, 1105002, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("各位，请不要进行无谓的争论。", 1, 1105001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("是的，我们来这里是为了冒险岛世界的未来，不是为了相互指责。", 1, 1105000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("今天我把大家召集到这里，是为了讨论一下冒险岛世界发生的奇怪的事情。", 1, 1105000, true, true);
                      } else if (status === V++) {
                        cm.eventSKill(0);
                        cm.warp(913051001, 0, false);
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
  }
}