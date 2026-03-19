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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -250, 300);
      cm.npc_ChangeController(9400582, "oid=4252178", -320, 300, 29, -370, -270, 0, true, false);
      cm.npc_SetSpecialAction("oid=4252178", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=4252179", -150, 300, 29, -200, -100, 1, true, false);
      cm.npc_SetSpecialAction("oid=4252179", 'summon', 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -250, 300]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=4252179", 'sleep', -1, 0);
        cm.inGameDirectionEvent_MoveAction(4);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##h0#！#h0#！", 37, 9400582, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b啊……这么快到早上……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#什么早上，你说梦话呢？咱得值夜班！", 37, 9400582, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b啊……？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你没接到通知吗？我们说好大家轮流值夜。唉，像我这样优异的实力，居然叫我去站岗，真浪费人才。", 37, 9400582, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.sendNormalTalk_Bottom("#b嘘……你小声点，别把其他人吵醒了。", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哎呀呀，不好意思。", 37, 9400582, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#你负责东边。虽然没有成群出现的怪物，但偶尔会冒出一只。别打瞌睡，眼睛瞪大喽！", 37, 9400582, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b知道了，多谢。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.forceStartQuest(64040, '');
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else if (status === V++) {
                                    cm.updateInfoQuest(867200860, 0);
                                    cm.warp(867200860, 0);
                                    cm.npc_LeaveField("oid=4252178");
                                    cm.npc_LeaveField("oid=4252178");
                                    cm.npc_LeaveField("oid=4252179");
                                    cm.npc_LeaveField("oid=4252179");
                                    cm.setInGameDirectionMode(false, true, false);
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