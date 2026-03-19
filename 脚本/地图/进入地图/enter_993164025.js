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
      cm.npc_ChangeController(3004907, "oid=363577", 1022, 63, 4, 972, 1069, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 963, 28);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 930, 26);
        cm.npc_ChangeController(3004912, "oid=567608", 1100, 57, 5, 1050, 1150, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=567608", "summon", 0, 0);
        cm.npc_ChangeController(3004912, "oid=567609", 1165, 57, 5, 1115, 1215, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=567609", "summon", 0, 0);
        cm.npc_ChangeController(3004912, 'oid=567610', 1060, -80, 23, 1010, 1110, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=567610", 'summon', 0, 0);
        cm.npc_ChangeController(3004912, "oid=567611", 1120, -80, 23, 1070, 1170, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=567611", "summon", 0, 0);
        cm.npc_ChangeController(3004912, 'oid=567612', 800, -277, 4, 750, 850, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=567612', "summon", 0, 0);
        cm.npc_ChangeController(3004912, 'oid=567613', 740, -277, 4, 690, 790, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=567613", "summon", 0, 0);
        cm.Npc_Fadeout('oid=567608', 0, 0);
        cm.Npc_Fadeout("oid=567609", 0, 0);
        cm.Npc_Fadeout("oid=567610", 0, 0);
        cm.Npc_Fadeout("oid=567611", 0, 0);
        cm.Npc_Fadeout("oid=567612", 0, 0);
        cm.Npc_Fadeout("oid=567613", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这是哪儿掉下来的馅饼？", 36, 3004912, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.Npc_Fadeout('oid=567608', 255, 0);
                    cm.Npc_Fadeout("oid=567609", 255, 0);
                    cm.Npc_Fadeout('oid=567610', 255, 0);
                    cm.Npc_Fadeout("oid=567611", 255, 0);
                    cm.Npc_Fadeout("oid=567612", 255, 0);
                    cm.Npc_Fadeout('oid=567613', 255, 0);
                    cm.npc_SetSpecialAction("oid=567608", "regen", 1, 1);
                    cm.npc_SetSpecialAction("oid=567609", "regen", 1, 1);
                    cm.npc_SetSpecialAction("oid=567610", "regen", 1, 1);
                    cm.npc_SetSpecialAction("oid=567611", "regen", 1, 1);
                    cm.npc_SetSpecialAction("oid=567612", "regen", 1, 1);
                    cm.npc_SetSpecialAction("oid=567613", "regen", 1, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/regen", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我说，能看到显示屏吧？足足有1500点啊。", 36, 3004912, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#该隐，只要抓到了你，我们也能变回自由之身，\r\n这可不牵涉什么私人情绪，你不必想得太糟糕。", 36, 3004912, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#真是可笑。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#连恶意都没有就向我举剑……你还以为自己能活下来吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.npc_LeaveField("oid=567608");
                              cm.npc_LeaveField('oid=567609');
                              cm.npc_LeaveField("oid=567610");
                              cm.npc_LeaveField("oid=567611");
                              cm.npc_LeaveField("oid=567612");
                              cm.npc_LeaveField("oid=567613");
                              cm.dispose();
                              cm.forceJoinEvent("炼狱黑客_击杀数2");
                              cm.dispose();
                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.setStandAloneMode(false);
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