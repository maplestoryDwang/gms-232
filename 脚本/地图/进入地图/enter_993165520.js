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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.npc_ChangeController(3005102, "oid=621260", 264, 277, 71, 214, 314, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=621260', "summon", 0, 0);
      cm.Npc_Fadeout('oid=621260', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 764, 270);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 783, 281);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(3005108, "oid=621263", 730, 277, 72, 680, 780, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=621263", "summon", 0, 0);
        cm.npc_ChangeController(3005120, "oid=621264", 819, 277, 73, 769, 869, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=621264", "summon", 0, 0);
        cm.npc_ChangeController(3005121, "oid=621265", 648, 277, 72, 598, 698, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=621265", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=621263", -1, 100, 100);
            cm.npc_SetForceMove("oid=621264", -1, 100, 100);
            cm.npc_SetForceMove('oid=621265', -1, 100, 100);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 542, 270);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#真是一帮懒鬼，区区一点税钱居然都交不上来……", 37, 3005108, false, true, 1);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=621260", 1, 120, 150);
                  cm.Npc_Fadeout("oid=621260", 255, 1000);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=621263"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                      cm.sendNormalTalk_Bottom("#face0#这头臭狼……这一路倒是挺会躲我的嘛。", 37, 3005108, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#那个冲我喷水的无礼家伙藏哪儿去了！", 37, 3005108, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#……不知道。", 37, 3005102, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#放肆，非要再涨涨利息才能清醒过来对吧？", 37, 3005108, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#face0#……', 37, 3005102, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我看你今天都不顶嘴了，看样子早就放弃还债了吧。", 37, 3005108, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#你和你哥一样，不过也是个无能的家伙，难道不是吗？", 37, 3005108, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#别担心，下次要是领主威胁你了，我一定会帮忙的。", 37, 3005100, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（不会来的。）", 37, 3005102, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（相信别人是愚蠢的……）", 37, 3005102, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('#face0#格里！', 37, 3005100, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 692, 270);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayBGM("Bgm57/LifeIsFullOfHappiness", 0, 0);
                                                        cm.fieldEffect_Hero9(50, 1000);
                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（愚……蠢……）", 37, 3005102, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip('oid=621263', 1);
                                                          cm.npc_setForceFlip("oid=621264", 1);
                                                          cm.npc_setForceFlip("oid=621265", 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#有点来晚了！我通过那些小山灵学会了一点惊人的能力。", 37, 3005100, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#你……你说什么？", 37, 3005102, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#看好了！", 37, 3005100, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#！！！", 37, 3005108, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/earthq", 100);
                                                                    cm.userSetFieldFloating(993165520, 2, 2, 2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=621264'], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=621265"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#大地……大地在晃动……！", 37, 3005120, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#一定是大难临头了，快，快逃吧！", 37, 3005121, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=621264", 1, 100, 150);
                                                                            cm.npc_SetForceMove("oid=621265", 1, 100, 150);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.Npc_Fadeout("oid=621264", 0, 1000);
                                                                              cm.Npc_Fadeout('oid=621265', 0, 1000);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#到，到底是凭什么本事……", 37, 3005108, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#喂！", 37, 3005100, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_ChangeController(3005104, 'oid=621479', 665, 277, 72, 615, 715, 1, true, 1000, false);
                                                                                    cm.npc_SetSpecialAction("oid=621479", "summon", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3005104, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.userSetFieldFloating(993165520, 0, 0, 0);
                                                                                          cm.sendNormalTalk_Bottom("#face1#呼噜噜……", 37, 3005104, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.effect_Voice("Voice6.img/lara/15/Female/23", 100);
                                                                                            cm.Npc_Fadeout("oid=621479", 0, 1000);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom('#face0#……', 37, 3005108, false, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face6#嘿嘿，果然不行呢。", 37, 3005100, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#你……", 37, 3005102, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#那也无妨，因为我见到了会帮忙的人。", 37, 3005100, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 937, 270);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_ChangeController(3005110, "oid=621484", 883, 277, 73, 833, 933, 1, true, 1000, false);
                                                                                                            cm.npc_SetSpecialAction("oid=621484", "summon", 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=621263"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#你一个来自后巷的家伙，当这里是什么地方！", 37, 3005108, false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetForceMove('oid=621260', 1, 30, 150);
                                                                                                                  cm.npc_ChangeController(3005111, "oid=621485", 973, 277, 73, 923, 1023, 1, true, 1000, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=621485", 'summon', 0, 0);
                                                                                                                  cm.npc_ChangeController(3005116, "oid=621486", 1163, 174, 83, 1113, 1213, 1, false, 1000, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=621486", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(3005128, "oid=621487", 1107, 174, 83, 1057, 1157, 1, false, 1000, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=621487", 'summon', 0, 0);
                                                                                                                  cm.npc_ChangeController(3005112, "oid=621488", 1063, 277, 73, 1013, 1113, 1, true, 1000, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=621488", "summon", 0, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#既然都这样了，也有不是来自后巷的人，就网开一面吧。", 37, 3005110, false, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=621263"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#愚昧！那个家伙算什么，怎么大家都成群结队地扑上去！", 37, 3005108, false, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#哪有比这里更富足的地方！\r\n这里能发展到这个地步，可都要归功于我！", 37, 3005108, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#总要给孩子留下一个可以阳光普照的公平世界吧？", 37, 3005116, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我不想再为了交税，强行给土地施过于烈性的肥料了。", 37, 3005128, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你算老几，竟敢煽动大家！", 37, 3005108, false, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你问我是谁？", 37, 3005110, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我是后巷的老大哥！", 37, 3005110, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#是谁擅作主张的……！", 37, 3005108, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我决定要这样。", 37, 3005110, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 692, 270);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_setForceFlip("oid=621263", -1);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=621263"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#好，你这家伙，好好考虑，\r\n要是你能在这里拦住那帮家伙，我就告诉你你父亲的遗物藏在哪里。", 37, 3005108, false, true, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, true, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#一直以来，你到底用这种方式利用过多少人的迫切？", 37, 3005102, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#你……你这头流氓狼……", 37, 3005108, true, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#或许现在逃跑对你来说会比较好。", 37, 3005102, true, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我根本猜不到被那些人抓住了会有什么下场。", 37, 3005102, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#这、这个家伙……", 37, 3005108, true, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#还有我叫格里，不是什么流氓狼。", 37, 3005102, false, true, 1);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_setForceFlip("oid=621263", 1);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#你到底……", 37, 3005108, false, true, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#这里既不是你的村庄，这家伙也与你无关，到底为什么！", 37, 3005108, true, true, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face4#所有的土地都是相连的嘛！", 37, 3005100, true, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#所以说世界上并不存在什么所谓无关紧要的不义。", 37, 3005100, true, true, 1);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.npc_ChangeController(3005117, "oid=621504", 525, 277, 72, 475, 575, 0, true, 1000, false);
                                                                                                                                                                              cm.npc_SetSpecialAction("oid=621504", "summon", 0, 0);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_SetForceMove("oid=621504", 1, 180, 150);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.npc_SetSpecialAction('oid=621504', "jump", 1, 1);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom('#face0#……', 37, 3005117, false, true, 1);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.effect_Voice("Voice6.img/lara/15/Female/22", 100);
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#啊，找到了啊！", 37, 3005100, true, true, 1);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#甚至翻衣服，拿走了我的仓库钥匙！", 37, 3005108, true, true, 1);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#难不成刚刚的地震也是……！", 37, 3005108, true, true, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#嘿嘿，要想骗住对方，就要先骗住自己。", 37, 3005100, true, true, 1);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face6#我是和格里学的。", 37, 3005100, true, true, 1);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;71=h0;62=h1;53=h1;63=h0;64=h0;73=h0;55=h0;65=h1;night=0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                                                                                                                                                                                                cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;71=h0;62=h1;53=h1;72=h0;63=h0;64=h0;73=h0;55=h0;65=h1;night=0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                                                                                                                                                                                                cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h1;71=h0;62=h1;53=h1;72=h0;63=h0;64=h0;73=h0;55=h0;65=h1;night=0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                                                                                                                                                                                                cm.forceStartQuest(36227, '');
                                                                                                                                                                                                cm.forceCompleteQuest(36227);
                                                                                                                                                                                                cm.gainExp(2450);
                                                                                                                                                                                                cm.npc_LeaveField("oid=621260");
                                                                                                                                                                                                cm.npc_LeaveField("oid=621263");
                                                                                                                                                                                                cm.npc_LeaveField("oid=621264");
                                                                                                                                                                                                cm.npc_LeaveField("oid=621265");
                                                                                                                                                                                                cm.npc_LeaveField("oid=621479");
                                                                                                                                                                                                cm.npc_LeaveField("oid=621484");
                                                                                                                                                                                                cm.npc_LeaveField('oid=621485');
                                                                                                                                                                                                cm.npc_LeaveField("oid=621486");
                                                                                                                                                                                                cm.npc_LeaveField("oid=621487");
                                                                                                                                                                                                cm.npc_LeaveField("oid=621488");
                                                                                                                                                                                                cm.npc_LeaveField("oid=621504");
                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                cm.warp(410004000, 0, true);
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