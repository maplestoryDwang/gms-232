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
      if (cm.isQuestFinished(34251)) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(34271, "20=h0;30=h0;21=h0;31=h0;32=h0;33=h0;34=h0;35=h0;36=h0;29=h1");
      cm.updateInfoQuest(34245, '69=h0');
      cm.updateInfoQuest(34560, "40=h0");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3003409, "oid=1841841", 1220, 3, 6, 1170, 1270, 1, true, false);
      cm.npc_SetSpecialAction("oid=1841841", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('飞鱼竟然会说话？！', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你什么阵仗没见过，有什么好惊讶的？", 37, 3003409, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("话、话是这么说……可你一直没跟我说过啊。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#别放弃。", 37, 3003409, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这里是艾尔达的聚集地#b莫拉斯#k。\r\n这里可就大不一样了。", 37, 3003409, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("莫拉斯？不过这么一看……确实是到下游来了。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("神秘河竟然这么深……好神奇啊。\r\n并且还能呼吸。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#那我来做下自我介绍。我是艾尔达的意志。", 37, 3003409, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('艾尔达的意志？', 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#过奖了。\r\n你就把我当成不期望世界走向灭亡的#b艾尔达的代理人#k吧。", 37, 3003409, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("听起来好气派啊……", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#附近可能有怪物，详细情况\r\n等到安全地带再说吧。", 37, 3003409, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#向#b右边#k移动。快跟上我。", 37, 3003409, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.Npc_Fadeout("oid=1841841", 0, 3500);
                                    cm.npc_SetForceMove("oid=1841841", 1, 500, 200);
                                    cm.updateInfoQuest(34250, "start=1;enter=1");
                                    cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;33=h0;34=h0;35=h0;36=h0;29=h1");
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else if (status === V++) {
                                    cm.setStandAloneMode(false);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.npc_LeaveField("oid=1841841");
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