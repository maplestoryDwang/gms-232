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
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 3270, 330);
      cm.npc_ChangeController(9400677, "oid=3666316", 2684, 400, 47, 2634, 2734, 0, true, false);
      cm.npc_SetSpecialAction("oid=3666316", "summon", 0, 0);
      cm.npc_ChangeController(9400678, "oid=3666317", 2388, 400, 47, 2338, 2438, 0, true, false);
      cm.npc_SetSpecialAction("oid=3666317", "summon", 0, 0);
      cm.npc_ChangeController(9400679, "oid=3666318", 2130, 400, 46, 2080, 2180, 0, true, false);
      cm.npc_SetSpecialAction("oid=3666318", "summon", 0, 0);
      cm.npc_ChangeController(9400588, "oid=3666319", 2637, 410, 47, 2587, 2687, 0, true, false);
      cm.npc_SetSpecialAction("oid=3666319", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=3666320", 2485, 400, 47, 2435, 2535, 0, true, false);
      cm.npc_SetSpecialAction("oid=3666320", 'summon', 0, 0);
      cm.npc_ChangeController(9400591, "oid=3666321", 2288, 404, 46, 2238, 2338, 0, true, false);
      cm.npc_SetSpecialAction("oid=3666321", 'summon', 0, 0);
      cm.forceStartQuest(64160, '');
      cm.npc_ChangeController(9400581, "oid=3666322", 2564, 406, 47, 2514, 2614, 0, true, false);
      cm.npc_SetSpecialAction("oid=3666322", 'summon', 0, 0);
      cm.forceStartQuest(64163, "riding");
      cm.npc_ChangeController(9400592, "oid=3666323", 2239, 408, 46, 2189, 2289, 0, true, false);
      cm.npc_SetSpecialAction("oid=3666323", "summon", 0, 0);
      cm.forceForfeitQuest(64167);
      cm.npc_ChangeController(9400582, "oid=3666324", 3318, 350, 48, 3268, 3368, 1, true, false);
      cm.npc_SetSpecialAction("oid=3666324", "summon", 0, 0);
      cm.npc_ChangeController(9400590, "oid=3666325", 3384, 332, 49, 3334, 3434, 1, true, false);
      cm.npc_SetSpecialAction("oid=3666325", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=3666324"], [1000, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation");
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=3666324", -1, 250, 300);
          cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=3666324", "movingattack", 0, 0);
            cm.inGameDirectionEvent_OneTimeAction(5, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3666319", 1, 200, 200);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=3666325", -1, 200, 100);
                cm.sendNormalTalk_Bottom("哎呀-你们干什么！把我的小纯给吓到了！", 37, 9400588, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#嗬嗬，这花花象是负责拉大篷车的，它俩能活着回来真是不容易。", 37, 9400589, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('#b小纯？', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这货……是母的？", 37, 9400582, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你这叫什么问题？", 37, 9400588, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9400587, "oid=3666505", 3318, 350, 48, 3268, 3368, 1, true, false);
                            cm.npc_SetSpecialAction("oid=3666505", "summon", 0, 0);
                            cm.npc_ChangeController(9400596, "oid=3666506", 3384, 332, 49, 3334, 3434, 1, true, false);
                            cm.npc_SetSpecialAction("oid=3666506", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=3666505", -1, 100, 100);
                              cm.npc_SetForceMove("oid=3666506", -1, 100, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#看来大家都到齐了。", 37, 9400587, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("感觉就像弃村子而去一样，心里真不是滋味……", 37, 9400591, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我们很快就会回来的。", 37, 9400589, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#呵呵呵，活~该……嗝。我说什么来着……？谁叫你们不信我的话？嗝！", 37, 9400592, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#阿尔西！", 37, 9400589, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b咳咳，咱们快点出发吧？", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=3666322", 1, 600, 100);
                                              cm.sendNormalTalk_Bottom("#face0#先头出发！", 37, 9400581, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439159, 0, 0, 0, 0, 0]);
                                                  cm.sendNormalTalk_Bottom("#face0#俗话说灾难的降临总是毫无预兆，这话一点没说错。我现在都还难以置信……", 37, 9400589, false, true);
                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#虽不知道这一步走得是否明智，但多亏了你，才能让大家一齐上路，没一个掉队的。谢谢你。", 37, 9400589, true, true);
                                                  } else if (status === V++) {
                                                    cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                                    cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                                    cm.forceCompleteQuest(64031);
                                                    cm.updateInfoQuest(64005, '');
                                                    cm.gainItem(2439159, 1);
                                                    cm.dispose();
                                                    cm.warp(867200501, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;