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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9400202, "oid=23131535", 664, 1514, 78, 614, 714, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=23131535", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.emotion(18, 15000);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 700, 1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("#fs15##e喂，年轻人！你醒了？！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400202, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(3);
              cm.emotion(38, 1000);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("醒了吗？哎哟，我还以为你死了！还好你没事！", 37, 9400202, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哎呦喂，我还担心你要是真死了，我该怎么给你写墓碑……“这里沉睡着被金银岛落石事故砸死的勇士#h0#”这么写不是太凄惨了吗？", 37, 9400202, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.sendNormalTalk_Bottom("#b我昏迷了多久？", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("差不多有5分钟吧。幸好你很快就醒来了。", 37, 9400202, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b(天啊……在异逝界发生的事情全部都是做梦吗？还是说我现在正梦见自己回到了冒险岛世界？)\r\n#e#k(今后通过次元之镜随时可以再次进入！)", 57, 0, true, true);
                            } else if (status === V++) {
                              cm.setStandAloneMode(false);
                              cm.dispose();
                              cm.warp(parseInt(cm.getInfoQuest(867113690)), 0, false);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.npc_LeaveField("oid=23131535");
                              cm.npc_LeaveField("oid=23131535");
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;