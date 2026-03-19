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
      cm.npc_ChangeController(2110000, "oid=60107", 417, 183, 762, 395, 417, 1, false, 0, false);
      cm.npc_ChangeController(2110001, "oid=60108", 1333, 192, 600, 1283, 1383, 1, false, 0, false);
      cm.npc_ChangeController(9000124, 'oid=60109', 222, 372, 714, 172, 272, 1, false, 0, false);
      cm.npc_ChangeController(9000123, "oid=60110", 119, 372, 712, 69, 169, 1, false, 0, false);
      cm.npc_ChangeController(2010011, "oid=60111", -1353, 372, 693, -1403, -1303, 1, false, 0, false);
      cm.npc_ChangeController(9000090, "oid=60112", -20, 372, 708, -70, 30, 1, false, 0, false);
      cm.npc_ChangeController(9071003, "oid=60113", 1321, 372, 724, 1271, 1371, 1, false, 0, false);
      cm.npc_ChangeController(2111007, "oid=60114", 804, 192, 592, 754, 854, 1, false, 0, false);
      cm.npc_ChangeController(9000178, 'oid=60115', -268, 372, 705, -318, -218, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.showMapleHero();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(1540803, "oid=286314599", -346, -300, 507, -396, -296, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286314599", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=286314600", 70, 130, 615, 20, 120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286314600", 'summon', 0, 0);
      cm.npc_ChangeController(1540824, "oid=286314601", 2550, 100, 1, 2500, 2600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286314601", "summon", 0, 0);
      cm.npc_ChangeController(1540825, "oid=286314602", 2480, 130, 1, 2430, 2530, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286314602", 'summon', 0, 0);
      cm.npc_ChangeController(1540826, "oid=286314603", 1800, 160, 606, 1750, 1850, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286314603", "summon", 0, 0);
      cm.npc_ChangeController(1540824, "oid=286314604", -1900, 160, 569, -1950, -1850, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286314604", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=286314605", 3100, 130, 7, 3050, 3150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286314605", 'summon', 0, 0);
      cm.npc_ChangeController(1540807, "oid=286314606", -1950, 156, 568, -2000, -1900, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286314606", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, -750);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("据传不管想要什么都能得手的传说中的怪盗", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("历经数百年再次出现在了人们的面前，", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("为了寻找珍贵的宝物，在世间流浪。", 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -350, -250);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这可真是麻烦啊……", 37, 1540803, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("在那边！！幻影！！", 37, 1540805, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#切！", 37, 1540803, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -340, -283, 1, 0, 1, 1, 0]);
                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                cm.npc_LeaveField("oid=286314599");
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(100, 2000, 100, -150, 180);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#幻影！等一下！！", 37, 1540805, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 1000);
                                      cm.npc_SetForceMove("oid=286314600", -1, 1000, 120);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), 3044, 91);
                                          cm.npc_LeaveField("oid=286314600");
                                          cm.npc_LeaveField("oid=286314600");
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 2550, 150);
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
                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 350);
                                                cm.npc_SetForceMove("oid=286314605", -1, 350, 120);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("嘿，姑娘~姑娘，你那美丽的眼睛里有个圆月呢？", 37, 1540824, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face6#咳咳……上哪儿去了？我看分明就是往这边逃的啊。", 37, 1540805, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("该不会是你看错了吧？", 37, 1540807, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("不可能，\r\n既然他已经预告过会偷取玛加提亚的宝石，现在肯定就在附近。", 37, 1540805, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#可是再这样下去，就算熬夜也找不到啊。", 37, 1540807, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.askMenu_Bottom("(来，该怎么办呢？)\r\n#b#L0#藏在附近，制定作战计划。#l\r\n#L1#询问他人。#l", 37, 1540805);
                                                            } else {
                                                              if (status === V++) {
                                                                selectionLog[100] = e;
                                                                cm.setNumberForQuestInfo(33952, 'p3', selectionLog[100]);
                                                                if (selectionLog[100] == 0) {
                                                                  cm.sendNormalTalk_Bottom("#face0#这个想法不错，主人。我们实在是太显眼了。", 37, 1540807, false, true);
                                                                } else {
                                                                  cm.sendNormalTalk_Bottom("大叔，刚刚有没有人经过这里啊？", 37, 1540805, false, true);
                                                                }
                                                              } else {
                                                                if (status === V++) {
                                                                  if (selectionLog[100] == 0) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                  } else {
                                                                    cm.sendNormalTalk_Bottom("他去那边了。", 37, 1540824, true, true);
                                                                  }
                                                                } else {
                                                                  if (status === V++) {
                                                                    if (selectionLog[100] == 0) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1);
                                                                    } else {
                                                                      cm.sendNormalTalk_Bottom("#face0#谢谢！", 37, 1540805, true, true);
                                                                    }
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(6000, 2000, 6000, 1900, 180);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 700);
                                                                        cm.npc_SetForceMove("oid=286314605", -1, 600, 120);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=286314603", 1);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=286314603"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=286314601");
                                                                            cm.npc_LeaveField("oid=286314601");
                                                                            cm.sendNormalTalk_Bottom("……等一下，我想了想，幻影不是变装高手吗？\r\n刚刚那位大叔有点奇怪啊？", 37, 1540807, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#米乐，你就像是个名侦探！", 37, 1540805, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("赶紧追过去确认一下吧！", 37, 1540807, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 2500, 200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face6#已经消失不见了！", 37, 1540805, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2200, 170);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=286314604", -1, 250, 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_LeaveField("oid=286314605");
                                                                                                    cm.npc_LeaveField("oid=286314605");
                                                                                                    cm.npcMove(1540807, 0, -1000, 0);
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), -2364, 155);
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -2364, 195, 1, 0, 1, 1, 0]);
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286314604"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npcMove(1540807, 0, 1000, 2000);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_setForceFlip("oid=286314604", 1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_setForceFlip("oid=286314604", -1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286314604"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_OneTimeAction(62, 600000);
                                                                                                                      cm.sendNormalTalk_Bottom("#face3#就现在！上前攻击，让他无处可逃！", 37, 1540805, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom('#face0#好的！', 37, 1540807, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_QTE(2);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetSpecialAction("oid=286314606", 'special4', 1, 1);
                                                                                                                                cm.npc_SetSpecialAction("oid=286314604", "special", -1, 1);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/22101000/Use", 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_SetSpecialAction("oid=286314604", "special2", -1, 1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("你……你们为什么要这么对我。", 37, 1540843, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#咳咳，不是呢，对不起！！", 37, 1540805, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("如果是幻影，应该能够瞬间避开这样的攻击。", 37, 1540807, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face6#你也得注意分寸才是啊，米乐！", 37, 1540805, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我出于惯性就……不过幻影到底去哪儿了啊？", 37, 1540807, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_setForceFlip("oid=286314606", 1);
                                                                                                                                              cm.sendNormalTalk_Bottom("主人，这次我们去那里看看吧？", 37, 1540807, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_ChangeController(1540803, "oid=286361418", -2400, 170, 563, -2450, -2350, 0, true, 0, false);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=286361418", "summon", 0, 0);
                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -2400, 195, 1, 0, 1, 1, 0]);
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    cm.effect_NormalSpeechBalloon("#face2#额啊？！", 0, 0, 0, 500, 1, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, -2400, 195, 1, 0, 1, 1, 0]);
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_LeaveField("oid=286361418");
                                                                                                                                                          cm.npc_LeaveField("oid=286361418");
                                                                                                                                                          cm.npc_setForceFlip("oid=286314606", 0);
                                                                                                                                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), -2633, -542);
                                                                                                                                                          cm.sendNormalTalk_Bottom("恩？主人？你去哪儿了？", 37, 1540807, false, true);
                                                                                                                                                          cm.npc_LeaveField("oid=60111");
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                                                                                                                                            cm.npc_ChangeController(1540803, "oid=286364356", -2575, -700, 672, -2625, -2525, 1, true, 0, false);
                                                                                                                                                            cm.npc_SetSpecialAction("oid=286364356", "summon", 0, 0);
                                                                                                                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -2633, -542);
                                                                                                                                                            cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2590, -515);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#我的天啊……麻烦精驾到。", 37, 1540803, false, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face4#幻影，你为什么要这么逃啊？我来是有重要的事情要说。", 37, 1540805, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#虽然不知道你要说的事情有多重要，\r\n可你现在正在妨碍我完美的计划。", 37, 1540803, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#我打算带着难以忘怀的记忆，如风一般在玛加提亚销声匿迹，\r\n可就因为你，从一开始气氛就被搞砸了啊。", 37, 1540803, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#现在重要的不是这个，那个……\r\n#b(得在幻影再次逃跑之前赶紧说明事情的来龙去脉。)", 37, 1540805, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                                                                                                cm.sendNormalTalk_Bottom("……原来是这样，弗里德啊，好怀念这个名字。", 37, 1540803, false, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("弗里德认为我独自一人是没法解决这个问题的。", 37, 1540805, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("他说的没错，你一个人是不可能的。", 37, 1540803, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("那你愿意帮忙吗？", 37, 1540805, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#不，这就不该归我管了。", 37, 1540803, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#哎？", 37, 1540805, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("我明白你想要继承弗里德的意志，\r\n但是那是你的状况，我并没有必要为此行动吧？", 37, 1540803, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face6#额……(虽然曾经预想过，但他果然不容易答应啊。)", 37, 1540805, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("我为什么要对此事产生兴趣呢？你只要说出一点。", 37, 1540803, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.askMenu_Bottom("(来，该怎么办呢？)\r\n#b#L0#我是弗里德的继承人。#l\r\n#L1#拯救世界的义务。#l\r\n#L2#怪盗幻影的荣耀#l", 37, 1540805);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    selectionLog[101] = e;
                                                                                                                                                                                                    cm.setNumberForQuestInfo(33952, 'p4', selectionLog[101]);
                                                                                                                                                                                                    if (selectionLog[101] == 0) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("我知道幻影不愿意与其他人为伍，\r\n之所以幻影会愿意在数百年前与其他英雄并肩作战，都是因为有弗里德这个领袖在。", 37, 1540805, false, true);
                                                                                                                                                                                                    } else if (selectionLog[101] == 1) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("我知道幻影不愿意与其他人为伍，\r\n之所以幻影会愿意在数百年前与其他英雄并肩作战，都是因为有弗里德这个领袖在。", 37, 1540805, false, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#如此重要的事件，若是落下了怪盗幻影，岂不有失体面。", 37, 1540805, false, true);
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      if (selectionLog[101] == 0) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("我虽然还没有那么出色，但俨然也是弗里德的继承人，你难道就不会对此产生兴趣吗？", 37, 1540805, true, true);
                                                                                                                                                                                                      } else if (selectionLog[101] == 1) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("我虽然还没有那么出色，但俨然也是弗里德的继承人，你难道就不会对此产生兴趣吗？", 37, 1540805, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#更何况我们要去的地点是古代遗迹。\r\n你难道就不好奇那里都藏着什么宝物吗？", 37, 1540805, true, true);
                                                                                                                                                                                                      }
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("来不来是幻影你的自由，总之我们说好了大家一起到我告诉你的地点，我会等着你的。", 37, 1540805, true, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -2630, -500, 1, 0, 1, 1, 0]);
                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("真是的，这么不按常理出牌的家伙我还是头一次见到。", 37, 1540803, false, true);
                                                                                                                                                                                                              cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/1", 128);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm19.img/DancingWitnTheMoon", 0, 0);
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("这么看来，这段时间我应该不会无聊了，是不是？克莉丝汀，马奥。", 37, 1540803, true, true);
                                                                                                                                                                                                                cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/2", 128);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("你该不会这次也打算弄飞一整艘船吧？", 37, 1401002, true, true);
                                                                                                                                                                                                                  cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/3", 128);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("要是这样还请你提前告诉我们，我们也好有个心理准备。", 37, 1401001, true, true);
                                                                                                                                                                                                                    cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/4", 128);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("姑娘们胆子怎么能这么小呢，\r\n想要获得高收益，就得懂得下点大的赌注。", 37, 1540803, true, true);
                                                                                                                                                                                                                      cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/5", 128);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("主人，传送装置已经准备好了，您要回去了吗？", 37, 1401000, true, true);
                                                                                                                                                                                                                        cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/6", 128);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("等着，在此之前得先了结了玛加提亚的事情。", 37, 1540803, true, true);
                                                                                                                                                                                                                          cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/7", 128);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("都这样了还想着要偷东西啊。", 37, 1401000, true, true);
                                                                                                                                                                                                                            cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/8", 128);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("这当然，怪盗幻影得遵守约定。", 37, 1540803, true, true);
                                                                                                                                                                                                                              cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/9", 128);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                cm.updateInfoQuest(49003, "QET=4HEh34C+1QE$");
                                                                                                                                                                                                                                cm.forceStartQuest(49003, '');
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.fieldEffect_Hero8(1);
                                                                                                                                                                                                                                  cm.fieldEffect_Hero9(40, 2000);
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -550, 1580);
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
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("时隔数百年的再次相聚啊。", 37, 1540803, false, true);
                                                                                                                                                                                                                                        cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/10", 128);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("虽然一群人聚在一起不是我的风格……\r\n但既然这是弗里德所留下的最后一张底牌，实在是让人忍不住好奇啊。", 37, 1540803, true, true);
                                                                                                                                                                                                                                          cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/11", 128);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("那就去看看吧？\r\n那小子到底是英雄，还是狗熊。", 37, 1540803, true, true);
                                                                                                                                                                                                                                            cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/12", 128);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.fieldEffect_Hero9(100, 2000);
                                                                                                                                                                                                                                                cm.onSetMapObjectCreateLayerMore("HofM_02", 2, "02_ani", 0);
                                                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/PhantomS", 100);
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
                                                                                                                                                                                                                                                      cm.forceCompleteQuest(33948);
                                                                                                                                                                                                                                                      cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                                                                                                                                                                                      cm.updateInfoQuest(33961, "33947=1;33948=1");
                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                                                                                      cm.setNumberForQuestInfo(33907, 'check2', 1);
                                                                                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                                                                                      cm.warp(350150000, 0, true);
                                                                                                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=286314602");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=286314603");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=286314604");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=286314604");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=286314606");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=286314606");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=286364356");
                                                                                                                                                                                                                                                      cm.npc_LeaveField("oid=286364356");
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