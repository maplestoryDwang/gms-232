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
      cm.setNumberForQuestCustomData(867200400, 867233050);
      cm.npc_ChangeController(9400668, "oid=204415", -1297, 95, 28, -1347, -1247, 0, true, false);
      cm.npc_ChangeController(9400675, "oid=204416", -1500, 95, 30, -1550, -1450, 0, true, false);
      cm.npc_ChangeController(9400676, "oid=204417", -1880, 95, 32, -1930, -1830, 0, true, false);
      cm.npc_ChangeController(9400674, 'oid=204418', -1604, 95, 8, -1654, -1554, 0, true, false);
      cm.npc_ChangeController(9400674, "oid=204419", -1709, 95, 13, -1759, -1659, 0, true, false);
      cm.npc_ChangeController(9400582, "oid=204420", 2090, 155, 67, 2040, 2140, 1, true, false);
      cm.npc_ChangeController(9400602, "oid=204421", 2156, 155, 67, 2106, 2206, 1, true, false);
      cm.npc_ChangeController(9400596, "oid=204422", 2333, 155, 69, 2283, 2383, 1, true, false);
      cm.npc_ChangeController(9400623, "oid=204423", 2415, 155, 53, 2365, 2465, 1, true, false);
      cm.npc_ChangeController(9400600, "oid=204424", 2522, 155, 49, 2472, 2572, 1, true, false);
      cm.npc_ChangeController(9400597, "oid=204425", 2602, 155, 49, 2552, 2652, 1, true, false);
      cm.npc_ChangeController(9400586, 'oid=204426', 2685, 155, 51, 2635, 2735, 1, true, false);
      cm.npc_ChangeController(9400588, "oid=204427", 2734, 155, 54, 2684, 2784, 1, true, false);
      cm.npc_ChangeController(9400583, 'oid=204428', 2839, 99, 72, 2789, 2889, 1, true, false);
      cm.npc_ChangeController(9400580, "oid=204429", 2886, 99, 72, 2836, 2936, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=204430", 2950, 155, 55, 2900, 3000, 1, true, false);
      cm.npc_ChangeController(9400587, "oid=204431", 3005, 155, 50, 2955, 3055, 1, true, false);
      cm.npc_ChangeController(9400593, 'oid=204432', 3059, 155, 50, 3009, 3109, 1, true, false);
      cm.npc_ChangeController(9400591, "oid=204433", 3118, 155, 59, 3068, 3168, 1, true, false);
      cm.npc_ChangeController(9400599, "oid=204434", 3170, 155, 47, 3120, 3220, 1, true, false);
      cm.npc_ChangeController(9400616, 'oid=204435', 3247, 9, 75, 3197, 3275, 1, true, false);
      cm.npc_ChangeController(9400618, "oid=204436", 3231, 155, 56, 3181, 3259, 1, true, false);
      cm.npc_ChangeController(9400630, "oid=204437", 3188, 9, 75, 3138, 3238, 1, true, false);
      cm.npc_ChangeController(9400638, 'oid=204438', 3088, 9, 75, 3038, 3138, 1, true, false);
      cm.npc_ChangeController(9400592, "oid=204439", 2997, 9, 75, 2947, 3047, 1, true, false);
      cm.npc_ChangeController(9400632, "oid=204440", 2937, 9, 75, 2887, 2987, 1, true, false);
      cm.npc_ChangeController(9400590, "oid=204441", 2859, 9, 75, 2809, 2909, 1, true, false);
      cm.npc_ChangeController(9400601, "oid=204442", 2805, 9, 75, 2755, 2855, 1, true, false);
      cm.npc_ChangeController(9400598, 'oid=204443', 2748, 9, 75, 2698, 2798, 1, true, false);
      cm.npc_ChangeController(9400584, "oid=204444", 3065, -103, 80, 3015, 3115, 1, true, false);
      cm.npc_ChangeController(9400589, "oid=204445", 3128, -101, 81, 3078, 3178, 1, true, false);
      cm.npc_ChangeController(9400603, "oid=204446", 3194, -101, 81, 3144, 3244, 1, true, false);
      cm.npc_ChangeController(9400620, "oid=204447", 3244, -101, 81, 3194, 3275, 1, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400582, "oid=7545746", 2930, 0, 75, 2880, 2980, 0, true, false);
      cm.npc_SetSpecialAction("oid=7545746", "summon", 0, 0);
      cm.npc_ChangeController(9400602, "oid=7545747", 3000, 0, 75, 2950, 3050, 1, true, false);
      cm.npc_SetSpecialAction("oid=7545747", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=7545748", 3170, -100, 78, 3120, 3220, 0, true, false);
      cm.npc_SetSpecialAction("oid=7545748", 'summon', 0, 0);
      cm.npc_ChangeController(9400581, "oid=7545749", 2247, 108, 68, 2197, 2297, 1, true, false);
      cm.npc_SetSpecialAction("oid=7545749", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=7545750", 2247, 108, 68, 2197, 2297, 1, true, false);
      cm.npc_SetSpecialAction("oid=7545750", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=7545751", 2247, 108, 68, 2197, 2297, 1, true, false);
      cm.npc_SetSpecialAction("oid=7545751", "summon", 0, 0);
      cm.npc_ChangeController(9400590, "oid=7545752", 2247, 108, 68, 2197, 2297, 1, true, false);
      cm.npc_SetSpecialAction("oid=7545752", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=7545753", 2247, 108, 68, 2197, 2297, 1, true, false);
      cm.npc_SetSpecialAction("oid=7545753", "summon", 0, 0);
      cm.npc_ChangeController(9400603, "oid=7545754", 2247, 108, 68, 2197, 2297, 1, true, false);
      cm.npc_SetSpecialAction("oid=7545754", "summon", 0, 0);
      cm.npc_ChangeController(9400604, "oid=7545755", 2247, 108, 68, 2197, 2297, 1, true, false);
      cm.npc_SetSpecialAction("oid=7545755", "summon", 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT3/horn2", 128);
      cm.sendNormalTalk_Bottom("攻… 攻击开始了！！！！！！！！！！！！！！！！！！", 37, 9400603, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("怪物出现了！！！！！！！！！！！！！！！", 37, 9400603, true, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNewEffects(12, [10000, -1250, 7, 0, 0]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(15000);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(19, [0]);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#… 开始了… ", 37, 9400587, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#… 不，不要总想着好事。", 37, 9400597, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#按照练习的一样！按照练习的一样！", 37, 9400592, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哈…看来也不需要总部的支援了。", 37, 9400581, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#… 艾丽卡，你待在我旁边不要走开。", 37, 9400582, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#希望大家都能平安无事，一定要… ", 37, 9400580, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#… 朱莉埃塔… ", 37, 9400602, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b希望… 这一次是最后的战斗… ", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b我们一定要保护好孩子们和伤者！", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b能战斗的人全部到城外集合！", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b吉莉，你和可汗村长一起指挥雪原弓箭手！", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b巴特勒副团长，请你去指挥投石器！", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b艾丽卡！和后边的工程部队一起埋设地雷！", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b大家… 一定要平安无事。一定要！", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0##h0#，无论发生什么事情，我都会挡住敌人的。", 37, 9400602, false, true);
                                                      } else if (status === V++) {
                                                        cm.forceCompleteQuest(64138);
                                                        cm.forceStartQuest(64139, '');
                                                        cm.warp(867233050, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.updateInfoQuest(64001, "man=720;stage=0;enemy=000000;seq=0;mine=0;companion=000000000");
                                                        cm.updateInfoQuest(64002, "man=0;stage=0;enemy=0;companion=0");
                                                        cm.updateInfoQuest(64002, "man=0;stage=0;enemy=0;man0=0;man1=0;companion=0");
                                                        cm.updateInfoQuest(64001, "man=720;stage=0;enemy=401253;seq=0;mine=0;companion=108372654");
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