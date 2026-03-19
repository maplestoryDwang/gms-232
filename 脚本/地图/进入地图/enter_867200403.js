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
      cm.Hidden_background("q64025Obj", 0);
      cm.npc_ChangeController(9400587, "oid=2281236", 650, -60, 39, 600, 700, 0, true, false);
      cm.npc_SetSpecialAction("oid=2281236", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=2281237", 860, 85, 40, 810, 910, 0, true, false);
      cm.npc_SetSpecialAction("oid=2281237", "summon", 0, 0);
      cm.npc_ChangeController(9400593, "oid=2281238", 908, 90, 40, 858, 958, 0, true, false);
      cm.npc_SetSpecialAction("oid=2281238", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=2281239", 1010, 90, 59, 960, 1060, 1, true, false);
      cm.npc_SetSpecialAction("oid=2281239", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=2281240", 1150, 85, 61, 1100, 1200, 1, true, false);
      cm.npc_SetSpecialAction("oid=2281240", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1210, 80);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.forceStartQuest(64019, '');
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=2281236", 1, 380, 100);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我代表村子谢谢你们。", 37, 9400587, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你客气了，可汗村长。这都是大家一起奋战的结果。再说了这也是我们的任务。", 37, 9400582, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=2281240", 1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#对了，这位是#h0#。", 37, 9400582, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#这回也多亏了这位勇士。你好，我是卡夫塔佩的村长可汗。", 37, 9400587, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2281240", -1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你们大家都平平安安的，真是万幸。", 37, 9400587, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是的，村民们都好吧？", 37, 9400580, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2281236", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#目前没有大碍，就是有些负伤者……", 37, 9400587, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我还要继续巡视村庄，先走了。再见……", 37, 9400587, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2281236", -1, 120, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/hawaru3", 128);
                                    cm.sendNewEffects(17, [3000, 1000, 2000, 950, 110]);
                                    cm.effect_NormalSpeechBalloon("呜哇啊啊……呜呜", 0, 0, 0, 2000, 9400593, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=2281236", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/hawaru1", 128);
                                          cm.npc_setForceFlip("oid=2281236", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          cm.effect_NormalSpeechBalloon("呜呜……妈妈~！！！！！！！！！", 1, 0, 0, 2000, 9400593, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=2281236", 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=2281236", 1, 10, 50);
                                              cm.sendNormalTalk_Bottom("#face0#述拉……拜托你……别……现在不止你一个人难过。", 37, 9400587, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#大家都很伤心！只是都忍着。连自己的情绪都控制不住的话，还能干什么……", 37, 9400587, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=2281236", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2281236", 1);
                                                    cm.sendNormalTalk_Bottom("#face0#为了余下的孩子，你要坚强起来。眼下还有很多事情比找到女儿的遗物更紧急。", 37, 9400587, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("……呜……拉坎……呜呜呜……", 37, 9400591, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=2281236", -1);
                                                          cm.npc_SetForceMove("oid=2281236", -1, 500, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                          cm.effect_NormalSpeechBalloon('呜呜呜……唉……', 1, 0, 0, 2000, 9400591, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_LeaveField("oid=2281236");
                                                            cm.npc_LeaveField("oid=2281236");
                                                            cm.sendNormalTalk_Bottom("#face0#呃~~说真的，他怎么能面不改色地说出那样的话呢？", 37, 9400582, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              cm.effect_NormalSpeechBalloon("唉……", 1, 0, 0, 2000, 9400591, cm.getPlayer().getId());
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#……咱们也走吧，让她一个人静静。", 37, 9400580, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=2281240", -1, 200, 80);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                                                      cm.sendNewEffects(19, [1000]);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNewEffects(14, [3000, 2000, 1000, 0, 0]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2281237", -1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=2281237", -1, 750, 80);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2281240", -1, 775, 80);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 900);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400582, cm.getPlayer().getId());
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400582, cm.getPlayer().getId());
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#唔，火熄灭了之后又冷起来了。", 37, 9400582, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#我实在适应不了这地方的寒冷，艾丽卡你呢？", 37, 9400582, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……我还好。", 37, 9400580, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0##h0#你呢？", 37, 9400582, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#b我也还行。", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#额~就我觉得冷吗？啊！莫非#h0#你是阿布鲁本地人？所以不怕冷？", 37, 9400582, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b我也是第一次来阿布鲁哦。", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#真的吗？你来做什么？眼下这地方可不适合旅行……", 37, 9400582, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=2281237", 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('#face0#凯恩！', 37, 9400580, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#啊-我说错话了吗？", 37, 9400582, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#b这地方发生什么事了？", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯，我们也刚被派到这里不久，具体情况不了解。", 37, 9400582, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#上头听说阿布鲁盆地森林里的怪物暴走的消息，就派我们来这里消灭怪物，以免发生更大的伤亡，顺便调查一下暴走原因。", 37, 9400582, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=2281240", -1, 80, 120);
                                                                                                                      cm.npc_setForceFlip("oid=2281237", -1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_setForceFlip("oid=2281240", 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#调查的工作正是……嗒嗒！由我们亚皮纳斯最年轻的学者，艾丽卡负责哦！", 37, 9400582, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我只是见习学者。", 37, 9400580, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=2281237", -1, 500, 80);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 470);
                                                                                                                                  cm.npc_setForceFlip("oid=2281240", -1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_SetForceMove("oid=2281240", -1, 390, 80);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#反正就快转正啦！有什么差别！", 37, 9400582, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……总之，我们来到阿布鲁后，发现情况比我们接到的消息更严重许多。", 37, 9400582, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#暴走的怪物甚至会成群结队地袭击村庄……就像今天这样。", 37, 9400582, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_setForceFlip("oid=2281240", -1);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#于是我们将情况上报给了总部，之后就接到命令说优先保护村民，以免再有人受害。", 37, 9400582, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……说到这个，就凭我们现在的人手，这不强人所难吗？", 37, 9400582, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#你老是这样说亚皮纳斯的坏话，小心我跟上头打小报告哦。", 37, 9400580, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……总而言之，所以我们现在只能勉强驻守在局势较为危险的卡夫塔佩。", 37, 9400582, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#b原来如此……", 57, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#不过……", 37, 9400582, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_setForceFlip("oid=2281240", 1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_setForceFlip("oid=2281237", 1);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#来到这村子后，我发现这里的气氛非常紧张。", 37, 9400582, false, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#后来我打听了一下……才知道差不多半年前，这村里 有数十个人失踪了！而且是同时！", 37, 9400582, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#刚才寻找女儿遗物的那位大婶，还有那冷血毒舌的村长，都是在那时候失去亲人的……", 37, 9400582, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b……（写信的老婆婆也是……）", 57, 0, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#唉-如果真的有神灵，肯定不会让这么多考验一下子全都降临。", 37, 9400582, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#从这个方面来说，我们亚皮纳斯真挺了不起的。可以说是替天行道了呢！", 37, 9400582, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#凯恩，拜托你安静一会儿吧。", 37, 9400580, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom('#face0#……嘁', 37, 9400582, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#唉，本来无论如何都想保护好这个村子的……最后还是没能阻止损失。", 37, 9400582, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b对了，那只巨大怪物被谁干掉了？", 57, 0, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=2281240"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#巨大怪物？", 37, 9400582, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#b嗯，我也看不太清，但既然在半山腰就能看到他，应该非常庞大。", 57, 0, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你说的是那只身披烈焰的狼吗？现场没有比它更大的怪物，当然也可能是我没看到。", 37, 9400582, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b……估计是我看错了。", 57, 0, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b（……烟雾之中分明有个大家伙在挪动。还是说它没到村子来？）", 57, 0, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#b（也许有其他目击者。）", 57, 0, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.playerMessage(-1, "去找找看见在雾中行动的巨大黑影的目击者。");
                                                                                                                                                                                                cm.forceCompleteQuest(64019);
                                                                                                                                                                                                cm.forceStartQuest(64020, '');
                                                                                                                                                                                                cm.npc_ChangeController(9400589, "oid=2281503", -1150, 330, 19, -1200, -1100, 1, true, false);
                                                                                                                                                                                                cm.npc_SetSpecialAction("oid=2281503", "summon", 0, 0);
                                                                                                                                                                                                cm.npc_setForceFlip("oid=2281237", -1);
                                                                                                                                                                                                cm.npc_setForceFlip("oid=2281240", -1);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.npc_SetForceMove("oid=2281237", -1, 300, 80);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.npc_SetForceMove("oid=2281240", -1, 280, 80);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 280);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你好，佩图尔大叔！", 37, 9400580, false, true);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.npc_setForceFlip("oid=2281503", 1);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#噢，是艾丽卡啊。你没事吧，那就好。", 37, 9400589, false, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.npc_SetForceMove("oid=2281237", -1, 250, 80);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=2281240", -1, 250, 80);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 350);
                                                                                                                                                                                                                    cm.sendNewEffects(17, [3000, 1000, 2000, -1000, 370]);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#大叔……你受伤了吗？", 37, 9400580, false, true);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#嗬嗬，只是划破点皮。想想真是万幸，没出现重大伤亡……", 37, 9400589, true, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#年轻人，我刚才看见你在混乱中救人。\r\n虽然好奇你是来自哪里的勇士，但不知道也无妨。", 37, 9400589, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("我叫#b#h0##k。我接到求助信，所以特地赶来的。", 57, 0, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#噢？求助信？这种时候竟然有人给外界寄信了？真是了不起。", 37, 9400589, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我对你说的很感兴趣，可惜现在没时间跟你好好聊聊。\r\n对了……你们有空吗？能不能帮我个忙。", 37, 9400589, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#眼下村里没有可让负伤者休养的地方，我打算把这房屋修理一下，应应急。", 37, 9400589, true, true);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯……现在嘛……我还不知道该从哪里着手，所以还在观望，嗬嗬……", 37, 9400589, true, true);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#首先，我想去收集些用来加衬的木材，你们有空的话，就给我帮把手。", 37, 9400589, true, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#没问题！凯恩和#h0#可以去给你帮忙。", 37, 9400580, true, true);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.npc_setForceFlip("oid=2281237", 1);
                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#对吧？", 37, 9400580, false, true);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                    cm.effect_NormalSpeechBalloon('#b...', 1, 0, 0, 3000, 0, cm.getPlayer().getId());
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                      cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400582, cm.getPlayer().getId());
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我得贴身保护你，艾丽卡。", 37, 9400582, false, true);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.askMenu_Bottom("#face3##h0#你呢？#b\r\n#L0#好，我去帮忙。#l\r\n#L1#不好意思，我有其他急事。#l", 37, 9400580);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#谢谢你，我就知道……#h0#你一定会帮忙的。还有凯恩，也拜托你咯！", 37, 9400580, false, true);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#不行。", 37, 9400582, true, true);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#凯恩，你的任务不是保护我周全吗？为了保证我的安全，现在最需要什么？", 37, 9400580, true, true);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=2281240"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……唉，那我快去快回，你跟骑士们待在一起，千万别乱跑。", 37, 9400582, true, true);
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#噢噢，算了算了，你们不方便就别勉强。", 37, 9400589, true, true);
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#没关系。反正很快就回来！", 37, 9400582, true, true);
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#噢，不愧是凯恩，很有干劲！#h0#你也准备好了吧？", 37, 9400589, true, true);
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b嗯，可以马上出发。", 57, 0, true, true);
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#好，那咱们走吧。", 37, 9400589, true, true);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                cm.forceStartQuest(64021, '');
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                  cm.npc_setForceFlip("oid=2281503", -1);
                                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=2281503", -1, 1000, 80);
                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                      cm.playerMessage(-1, "跟着佩图尔往森林走去");
                                                                                                                                                                                                                                                                                      cm.npc_ChangeController(9400585, "oid=2281603", -2050, 235, 14, -2100, -2000, 0, true, false);
                                                                                                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=2281603", 'summon', 0, 0);
                                                                                                                                                                                                                                                                                      cm.npc_ChangeController(9400585, "oid=2281604", -2100, 235, 14, -2150, -2050, 0, true, false);
                                                                                                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=2281604", 'summon', 0, 0);
                                                                                                                                                                                                                                                                                      cm.npc_SetForceMove("oid=2281603", 1, 400, 100);
                                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=2281604", 1, 400, 100);
                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                          cm.npc_SetForceMove("oid=2281240", -1, 500, 80);
                                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 1000);
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2281238");
                                                                                                                                                                                                                                                                                              cm.npc_LeaveField("oid=2281239");
                                                                                                                                                                                                                                                                                              cm.npc_setForceFlip("oid=2281237", -1);
                                                                                                                                                                                                                                                                                              cm.sendNewEffects(12, [4000, -1500, 370, 0, 0]);
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#兄弟！", 37, 9400582, false, true);
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("哎，有什么吩咐！", 37, 9400585, true, true);
                                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你去艾丽卡身边守着，在我回来之前不要离开她半步。", 37, 9400582, true, true);
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("明白。", 37, 9400585, true, true);
                                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                                          cm.npc_SetForceMove("oid=2281603", 1, 500, 130);
                                                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                                            cm.npc_SetForceMove("oid=2281604", 1, 500, 130);
                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                                              cm.npc_SetForceMove("oid=2281240", -1, 500, 80);
                                                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                                                                                                                                cm.warp(867200420, 0);
                                                                                                                                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281237");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281237");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281238");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281239");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281240");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281240");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281503");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281503");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281603");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281603");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281604");
                                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=2281604");
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
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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