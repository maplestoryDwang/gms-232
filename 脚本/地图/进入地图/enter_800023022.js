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
      cm.forceCompleteQuest(58769);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
      cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111000, "oid=3878519", 2055, -275, 11, 2005, 2105, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3878519", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('这是地之五行。', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#谢谢你。", 37, 9111000, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/getLand", "oid=3878519"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.sendNormalTalk_Bottom("现在就差最后一个五行了。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……嗯，最后一个……", 37, 9111000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……真的非常感谢，如果不是你……我们不可能有今天的成就。", 37, 9111000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#……你对我们实在太好了。", 37, 9111000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#我……一定会报答你的恩情。", 37, 9111000, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.warp(800023023, 0, false);
                        cm.npc_LeaveField("oid=3878519");
                        cm.npc_LeaveField("oid=3878519");
                        cm.eventSKill(0);
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