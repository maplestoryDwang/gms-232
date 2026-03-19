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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401279, "oid=367172", 100, -30, 1, 50, 150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=367172", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction('oid=367172', "attack1", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=367172", "attack2", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/wind2", 100);
              cm.fieldEffect_ScreenMsg("Map/EffectWz2.img/Mukhyun/windEff");
              cm.inGameDirectionEvent_AskAnswerTime(3500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#偷看别人修炼的毛病，你是和谁学的？", 37, 9401279, false, true, 1);
                cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 180);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##b大师兄，是我，墨玄。\r\n刚才看你聚精会神，所以没打扰你。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1##b大师兄，你的招式越来越犀利了。\r\n我在一旁观看，真是受益良多。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=367172", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(17, [2000, 1000, 2000, 450, 30]);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=367172", 1, 120, 50);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#在某人自认天赋异禀，游手好闲地装英雄的时候……我还不是在埋头修炼？", 37, 9401279, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#因为你，今天修炼不成了。", 37, 9401279, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3##b大师兄……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3##b我这就让开。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#墨玄。", 37, 9401279, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0##b是，大师兄。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#玄山派中很少有像你一样的天才。\r\n为了不让努力修炼的普通弟子们感到沮丧，你难道不应该装得努力一点吗？", 37, 9401279, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=367172", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove('oid=367172', -1, 50, 50);
                                              cm.inGameDirectionEvent_AskAnswerTime(2100);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=367172", 1);
                                                cm.sendNormalTalk_Bottom("#face0#啊，下去的路上顺便消灭掉木杂鬼。对年幼的弟子们来说，它们太危险了。", 37, 9401279, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.forceCompleteQuest(65925);
                                                  cm.gainExp(1200);
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNewEffects(14, [0, 2000, 1000]);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNewEffects(19, [0]);
                                                    } else if (status === V++) {
                                                      cm.npc_LeaveField('oid=367172');
                                                      cm.dispose();
                                                      cm.warp(875000020, 0, false);
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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