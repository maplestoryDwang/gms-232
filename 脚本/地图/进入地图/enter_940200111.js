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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003274, "oid=1797551", 40, -150, 27, -10, 90, 1, true, false);
      cm.npc_SetSpecialAction("oid=1797551", "summon", 0, 0);
      cm.npc_ChangeController(3003278, "oid=1797552", -110, -140, 27, -160, -60, 0, true, false);
      cm.npc_SetSpecialAction("oid=1797552", "summon", 0, 0);
      cm.npc_ChangeController(3003275, "oid=1797553", -205, -150, 27, -255, -155, 0, false, false);
      cm.npc_SetSpecialAction("oid=1797553", "summon", 0, 0);
      cm.npc_ChangeController(3003276, "oid=1797554", -350, -150, 27, -400, -300, 0, false, false);
      cm.npc_SetSpecialAction("oid=1797554", "summon", 0, 0);
      cm.npc_ChangeController(3003277, "oid=1797555", -280, -150, 27, -330, -230, 0, false, false);
      cm.npc_SetSpecialAction("oid=1797555", "summon", 0, 0);
      cm.npc_ChangeController(3003279, "oid=1797556", 5, -320, 18, -45, 55, 1, false, false);
      cm.npc_SetSpecialAction("oid=1797556", "summon", 0, 0);
      cm.npc_ChangeController(3003280, "oid=1797557", -210, -320, 18, -260, -160, 0, false, false);
      cm.npc_SetSpecialAction("oid=1797557", "summon", 0, 0);
      cm.npc_ChangeController(3003270, "oid=1797558", 80, -145, 27, 30, 130, 1, true, false);
      cm.npc_SetSpecialAction("oid=1797558", "summon", 0, 0);
      cm.npc_ChangeController(3003282, "oid=1797559", 55, -320, 19, 5, 105, 1, false, false);
      cm.npc_SetSpecialAction("oid=1797559", "summon", 0, 0);
      cm.npc_ChangeController(3003281, "oid=1797560", -270, -320, 17, -320, -220, 0, false, false);
      cm.npc_SetSpecialAction("oid=1797560", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
        cm.sendNormalTalk_Bottom("那么，请一定要平安归来。", 37, 3003276, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("谢谢，菲利乌斯，还有大家…", 37, 3003278, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这会是一场艰难的战斗。无论是对于双弩精灵你和同伴们，还是对于精灵、对于大家。", 37, 3003276, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("双弩精灵！", 37, 3003281, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……", 37, 3003274, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                  cm.fieldEffect_InsertCanvas(1, 50, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#(…我有种不好的预感。说不定我们永远都没办法再见了！说不定这是最后一次！)", 37, 3003270, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#(…我必须一起去！我也要一起去战斗！但是我现在参加战斗…)", 37, 3003270, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=1797551", -1, 25, 160);
                          cm.sendNormalTalk_Bottom("#face0#我也要一起去战斗，双弩精灵！请把我带去战场吧！", 37, 3003274, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1797558"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.sendNormalTalk_Bottom("#face0#我也想帮助你们！请答应我吧！", 37, 3003274, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我也要一起去战斗！", 37, 3003281, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("迪泰，那不行。双弩精灵…", 37, 3003275, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你们的心意我都明白，但我还是要拒绝你们。保护大家是我作为精灵之王的义务。请一定要相信我，各自坚守好自己的岗位。", 37, 3003278, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3003274, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#(双弩精灵…)", 37, 3003270, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                      } else if (status === V++) {
                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.npc_LeaveField("oid=1797551");
                                        cm.npc_LeaveField("oid=1797552");
                                        cm.npc_LeaveField("oid=1797553");
                                        cm.npc_LeaveField("oid=1797554");
                                        cm.npc_LeaveField("oid=1797555");
                                        cm.npc_LeaveField("oid=1797556");
                                        cm.npc_LeaveField("oid=1797557");
                                        cm.npc_LeaveField("oid=1797558");
                                        cm.npc_LeaveField("oid=1797559");
                                        cm.npc_LeaveField("oid=1797560");
                                        cm.dispose();
                                        cm.warp(940200112, 0);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;