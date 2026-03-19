var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = "action" + cm.getMapId();
  eval(V)(f, E, e);
}
function action993130100(f, E, e) {
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
      cm.npc_ChangeController(3004334, 'oid=365393', 1853, -152, 18, 1810, 1903, 0, true, 0, false);
      cm.npc_ChangeController(3004340, "oid=365394", 1703, 88, 15, 1653, 1753, 1, false, 0, false);
      cm.npc_ChangeController(3004340, 'oid=365395', 2101, 88, 1, 2051, 2151, 0, false, 0, false);
      cm.npc_ChangeController(3004340, 'oid=365396', 1887, 88, 8, 1837, 1937, 0, false, 0, false);
      cm.npc_ChangeController(3004321, 'oid=365397', 2612, 88, 13, 2562, 2662, 1, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2166, -30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#奥兹！这是怎么一回事？！", 37, 1540451, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我也不知道，突然有一群家伙从地下室里冲了出来！", 37, 3004334, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("袭击并非来自外部吗……", 37, 1540451, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我来准备魔法。你先帮忙拖延一下时间。", 37, 3004334, true, true);
                } else if (status === V++) {
                  cm.eventSKill(0);
                  cm.warp(993130150, 0, false);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.setStandAloneMode(false);
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
function action993130150(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(3004334, "oid=2676998", 1877, -190, 18, 1827, 1927, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=2676998", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2676998", 'special', -1, 1);
    cm.setNumberForQuestInfo(39713, 'kill1', 0);
    cm.dispose();
  }
}
function action993130200(f, E, e) {
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
      cm.npc_ChangeController(3004334, "oid=2680578", 1877, -190, 18, 1827, 1927, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2680578", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2680578", "special", -1, 1);
      cm.npc_ChangeController(3004340, "oid=2680579", 1600, 20, 14, 1550, 1650, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2680579", "summon", 0, 0);
      cm.npc_ChangeController(3004340, "oid=2680580", 1760, 20, 11, 1710, 1810, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2680580", "summon", 0, 0);
      cm.npc_ChangeController(3004340, "oid=2680581", 1940, 20, 9, 1890, 1990, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2680581", "summon", 0, 0);
      cm.npc_ChangeController(3004340, "oid=2680582", 2150, 20, 1, 2100, 2200, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2680582", "summon", 0, 0);
      cm.npc_ChangeController(3004340, "oid=2680583", 2330, 20, 4, 2280, 2380, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2680583", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#谢谢你坚持了这么久！我现在就来给它最后一击！", 37, 3004334, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('01', "Skill/1212.img/skill/12121052/screen", 0, 1000, 0, 35, 1, 4, 0, -1, 0, 0, 1);
            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/12121052/Use", 100);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=2680579", "die", 1, 1);
              cm.npc_SetSpecialAction("oid=2680580", "die", 1, 1);
              cm.npc_SetSpecialAction("oid=2680581", "die", 1, 1);
              cm.npc_SetSpecialAction("oid=2680582", "die", 1, 1);
              cm.npc_SetSpecialAction("oid=2680583", "die", 1, 1);
              cm.setNpcSpecialActionReset("oid=2680578");
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645101/Die", 100);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=2680579");
                cm.npc_LeaveField("oid=2680579");
                cm.npc_LeaveField("oid=2680580");
                cm.npc_LeaveField("oid=2680580");
                cm.npc_LeaveField("oid=2680581");
                cm.npc_LeaveField("oid=2680581");
                cm.npc_LeaveField("oid=2680582");
                cm.npc_LeaveField("oid=2680582");
                cm.npc_LeaveField("oid=2680583");
                cm.npc_LeaveField("oid=2680583");
                cm.sendNormalTalk_Bottom("#face2#似乎怪物已经清理完毕。", 37, 1540451, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#奥兹就请留在这里，以备突发状况发生。\r\n我们进去吧。", 37, 1540451, true, true);
                } else if (status === V++) {
                  cm.eventSKill(0);
                  cm.warp(993130250, 0, false);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.setStandAloneMode(false);
                  cm.npc_LeaveField("oid=2680578");
                  cm.npc_LeaveField("oid=2680578");
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
function action993130250(f, E, e) {
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
      cm.npc_ChangeController(3004321, "oid=365835", -716, 180, 1, -763, -666, 0, true, 0, false);
      cm.npc_ChangeController(3004320, "oid=2683298", -92, 150, 8, -142, -42, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2683298", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2683298", "special", -1, 1);
      cm.npcMove(3004320, 350, 0, 0);
      cm.npc_ChangeController(3004340, "oid=2683299", -400, 200, 6, -450, -350, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2683299", "summon", 0, 0);
      cm.npc_ChangeController(3004340, "oid=2683300", -250, 200, 8, -300, -200, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2683300", "summon", 0, 0);
      cm.npc_ChangeController(3004340, "oid=2683301", -50, 200, 8, -100, 0, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2683301", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -222, 70);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -680, 200);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#南哈特！#h0#！", 37, 3004320, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2683299"], [0, 0, -100, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2683300"], [0, 0, -100, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2683301"], [0, 0, -100, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=2683299", -1);
                  cm.npc_setForceFlip("oid=2683300", -1);
                  cm.npc_setForceFlip("oid=2683301", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#果然骚乱是从这里开始发生的。", 37, 1540451, false, true);
                  } else if (status === V++) {
                    cm.eventSKill(0);
                    cm.warp(993130300, 0, false);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setStandAloneMode(false);
                    cm.npc_LeaveField("oid=2683298");
                    cm.npc_LeaveField("oid=2683298");
                    cm.npc_LeaveField("oid=2683299");
                    cm.npc_LeaveField("oid=2683299");
                    cm.npc_LeaveField("oid=2683300");
                    cm.npc_LeaveField("oid=2683300");
                    cm.npc_LeaveField("oid=2683301");
                    cm.npc_LeaveField("oid=2683301");
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
function action993130300(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(3004320, "oid=2683960", -90, 150, 3, -140, -40, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=2683960", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2683960", 'special', -1, 1);
    cm.npcMove(3004320, 350, 0, 0);
    cm.setNumberForQuestInfo(39713, "kill2", 0);
    cm.dispose();
  }
}