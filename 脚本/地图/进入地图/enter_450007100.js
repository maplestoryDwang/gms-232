var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      if (cm.isQuestFinished(34571)) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3003546, "oid=49790", -1137, 215, 12, -1187, -1087, 1, false, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("怎么回事？风景突然完全变了。", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#好阴森。", 37, 3003500, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(3003501, "oid=2001461", -1700, -315, 5, -1750, -1650, 0, true, 1000, false);
              cm.npc_SetSpecialAction("oid=2001461", "summon", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这是注入到塔纳体内的镜之力量。正在通过大海蔓延出来。", 37, 3003501, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2001461", 1, 150, 120);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("梅尔朗？你怎么在这里？", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#你说镜之力量正从塔纳身上蔓延出来。那是什么意思？", 37, 3003500, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#因为如果用镜世界的力量创造出太阳，外面就很难侵入进去。", 37, 3003501, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#但是如果蜘蛛的仪式中途受到妨碍，\r\n那种力量就会以艾尔达精髓的形式流淌出来。", 37, 3003501, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("嗯……完全不知道你在说什么……", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#魔法世界真的很奥妙。", 37, 3003500, true, true);
                              } else {
                                if (status === V++) {
                                  cm.updateInfoQuest(34571, "dir=1");
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.setStandAloneMode(false);
                                  cm.setInGameDirectionMode(false, true, false);
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