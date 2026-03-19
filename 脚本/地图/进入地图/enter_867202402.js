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
      cm.npc_ChangeController(9400589, "oid=7533686", -500, -80, 1, -550, -450, 0, true, false);
      cm.npc_SetSpecialAction("oid=7533686", 'summon', 0, 0);
      cm.npc_ChangeController(9400592, "oid=7533687", -580, -80, 1, -630, -530, 0, true, false);
      cm.npc_SetSpecialAction("oid=7533687", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#face0#你真是太了不起了，我们都累的够呛，你却不动一点声色。", 37, 9400589, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#呵额- 呵额，我就是说。", 37, 9400592, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#佩图尔也很厉害！那天喝酒的时候说的过去… ", 37, 9400592, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呵呵，你还有说话的力气啊？看来练习得还不够吧？", 37, 9400589, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#呵额，不是！", 37, 9400592, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#今天要练一整天，你给我做好准备哦。", 37, 9400589, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b阿尔西都快断气了，稍微休息下吧。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#呵呵，开玩笑，开玩笑的。", 37, 9400589, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#下次再和你切磋吧，我们继续训练！", 37, 9400589, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#请多关照！喝啊！", 37, 9400592, true, true);
                      } else if (status === V++) {
                        cm.forceCompleteQuest(64110);
                        cm.npc_LeaveField("oid=7533686");
                        cm.npc_LeaveField("oid=7533686");
                        cm.npc_LeaveField("oid=7533687");
                        cm.npc_LeaveField("oid=7533687");
                        cm.dispose();
                        cm.forceStartQuest(64161, "run");
                        cm.warp(867202300, 1, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;