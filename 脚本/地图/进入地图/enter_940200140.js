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
      cm.npc_ChangeController(1105000, 'oid=200929', -405, 37, 36, -455, -355, 1, false, false);
      cm.npc_ChangeController(1105001, 'oid=200930', -204, 37, 36, -254, -154, 1, false, false);
      cm.npc_ChangeController(1105002, 'oid=200931', -133, 37, 36, -183, -83, 1, false, false);
      cm.npc_ChangeController(1105003, "oid=200932", -461, 37, 36, -511, -411, 1, false, false);
      cm.npc_ChangeController(1105004, "oid=200933", -721, 88, 14, -771, -671, 1, false, false);
      cm.npc_ChangeController(1105005, "oid=200934", -661, 88, 13, -711, -611, 1, false, false);
      cm.npc_ChangeController(1105006, 'oid=200935', -737, 88, 14, -787, -687, 1, false, false);
      cm.npc_ChangeController(1105007, 'oid=200936', -785, 88, 14, -835, -735, 1, false, false);
      cm.npc_ChangeController(1105008, "oid=200937", -66, 37, 36, -116, -16, 1, false, false);
      cm.npc_ChangeController(1105009, "oid=200938", 1, 37, 36, -49, 37, 1, false, false);
      cm.npc_ChangeController(1105010, "oid=200939", 79, 88, 3, 29, 129, 1, false, false);
      cm.npc_ChangeController(1105011, "oid=200940", 122, 88, 2, 72, 172, 1, false, false);
      cm.npc_ChangeController(1105012, "oid=200941", 165, 88, 2, 115, 215, 1, false, false);
      cm.npc_ChangeController(1105013, "oid=200942", 206, 88, 23, 156, 250, 1, false, false);
      cm.npc_ChangeController(1105014, "oid=200943", -532, 37, 36, -582, -482, 1, false, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -310, 10);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003272, "oid=1798051", -1220, 80, 12, -1270, -1170, 0, true, false);
        cm.npc_SetSpecialAction("oid=1798051", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("反抗者背弃了联盟？这不可能！", 37, 1540452, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("请冷静，未来之门的另一边只是被操纵的未来而已。", 37, 1540450, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这并不是完全没有可能的。", 37, 1540838, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('…什么？', 37, 1540452, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我开玩笑的。我只是想起了吉格蒙特曾经说过，要考虑到所有的可能性。", 37, 1540838, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("现在不是拌嘴的时候。争吵就此停止吧！", 37, 1540453, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#呼，按照计划联盟开始动摇了，一切都很顺利。", 37, 3003272, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#即使发现一切都是假象，他们的疑心也不会消失的。因为种子已经种下了！", 37, 3003272, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#你们不妨期待下更加现实的噩梦吧。因为疑心正在悄然滋生，哈哈。", 37, 3003272, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -310, -200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(940200141, 0);
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