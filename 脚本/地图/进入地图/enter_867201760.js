var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestFinished(64084)) {
    cm.setPartner(1, 9400646, 80011692, 0);
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
      cm.npc_ChangeController(9400570, "oid=203287", 430, 201, 2, 380, 480, 1, false, false);
      cm.forceCompleteQuest(64083);
      cm.npc_ChangeController(9400615, "oid=7616633", 1540, 440, 35, 1490, 1590, 1, false, false);
      cm.npc_SetSpecialAction("oid=7616633", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400580, "oid=7616637", 1280, 440, 35, 1230, 1330, 1, true, false);
      cm.npc_SetSpecialAction("oid=7616637", "summon", 0, 0);
      cm.npc_SetForceMove("oid=7616637", 1, 290, 100);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
        cm.npc_SetSpecialAction("oid=7616633", "broken", -1, 0);
        cm.npc_LeaveField("oid=7616637");
        cm.npc_LeaveField("oid=7616637");
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#啊啊啊！", 37, 9400580, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
              cm.sendNewEffects(17, [2000, 1000, 2000, 1540, 500]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b艾丽卡？", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#啊啊啊……", 37, 9400580, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#呃~~！这是怎么回事啊。我没事。", 37, 9400580, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('#b你能上来吗？', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#嗯……不行……", 37, 9400580, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b你等一下，我找找有没有能用来当绳子的东西！", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.forceStartQuest(64084, '');
                              cm.updateInfoQuest(64084, '');
                              cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(19, [0]);
                              } else if (status === V++) {
                                cm.setInGameDirectionMode(false, true, false);
                                cm.playerMessage(-1, '寻找能当绳子的东西');
                                cm.spawnMobLimit(9402328, 1, -543, -57, 3);
                                cm.spawnMobLimit(9402328, 1, -835, -35, 3);
                                cm.spawnMobLimit(9402328, 1, -252, -51, 3);
                                cm.addPopupSay(9400580, 3000, "#face0##h0#，你可不能走远了啊……", '', 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;