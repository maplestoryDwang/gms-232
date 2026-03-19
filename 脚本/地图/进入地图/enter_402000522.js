var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.getInfoQuest(34802) == "out=1") {
    action34802(f, E, e);
  } else {
    cm.dispose();
  }
}
function action34802(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.npc_ChangeController(3001300, 'oid=912564', -491, -1377, 4, -541, -441, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=912564", "summon", 0, 0);
      cm.npc_setForceFlip("oid=912564", -1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#呼……终于逃过一劫。", 37, 3001351, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#主人,你必须好好听课。", 37, 3001300, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#呃！不要啊,利奥。我没信心再进去了。", 37, 3001351, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#主人,一开始就失去信心是无法成功的。", 37, 3001300, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#可大家都觉得我很奇怪。我的翅膀不发光,也不会使用魔法……", 37, 3001351, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#水晶学院的所有学生生来就会使用水晶魔力,因此他们当然会觉得主人奇怪。", 37, 3001300, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#可照之前的反应看,最丢脸的一刻已经过去了。", 37, 3001300, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这么说,今后不会有比刚刚更丢脸的时刻了吧？", 37, 3001351, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#相关推断仅仅是统计结果,不能百分百相信。", 37, 3001300, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#呃,竟然精密到这种程度。这部分也升级了……", 37, 3001351, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#(跟你聊了一会感觉心情平静点了。现在应该可以再进去了。)", 37, 3001351, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.npc_LeaveField('oid=912564');
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setStandAloneMode(false);
                                cm.updateInfoQuest(34802, "out=2");
                                cm.OnStartNavigation(402000526, 0, '', 0);
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