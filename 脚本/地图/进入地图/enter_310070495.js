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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayBGM("Bgm40.img/SecretMissionBase", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 270, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155113, "oid=42506191", -630, 50, 14, -680, -580, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=42506191", "summon", 0, 0);
        cm.npc_ChangeController(2155120, "oid=42506192", -213, 50, 14, -263, -163, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=42506192", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=42506192", "downon", -1, 1);
        cm.npc_setForceFlip("oid=42506192", 1);
        cm.inGameDirectionEvent_Monologue("坠落的黑色天堂内部就如地狱一般. ", 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("我抛开一切, 冲向了主机房. ", 1);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(2155114, "oid=42506274", 190, 50, 14, 140, 240, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=42506274", "summon", 0, 0);
              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.setNpcSpecialActionReset("oid=42506274");
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=42506274", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42506274"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 1500, -140, 50);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=42506274", 0);
                        cm.npc_SetForceMove("oid=42506274", -1, 200, 200);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("什么啊！你没事吧？\r\n究竟是怎么回事？", 37, 2155114, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("请离开…这里很危险…", 37, 2155120, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=42506274", -1, 50, 50);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("是我，我。你没事吧？\r\n请说话啊，操作员。", 37, 2155114, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("这里很危险。请离开…\r\n限制区域…", 37, 2155120, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("是我啊。这究竟，这……\r\n为什么……你怎么了？", 37, 2155114, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我再次警告你。\r\n这里非常危险，请快点离开…", 37, 2155120, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2500, 0, -140, 70);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#fs20#傻瓜！我问你怎么样！", 37, 2155114, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("…嗯？", 37, 2155120, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2550, 0, -140, 70);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#fs20#别再说什么危险区域什么的！\r\n#fs20#为什么！… #fs18#为什么，#fs16#为什么……", 37, 2155114, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('你怎么会变成这样…', 37, 2155114, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我，我也不知道为什么会这样。", 37, 2155120, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#fs18#你已经变成这幅样子了，还这么说？\r\n#fs16#究竟发生了什么事。拜托你…告诉我…", 37, 2155114, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2155120, null, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("…我阻止了两次自爆。", 37, 2155120, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("什么？", 37, 2155114, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/FieldgraveStory/illust6", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("格里梅尔最后的命令是\r\n#b让所有超级人造人自爆。#k", 37, 2155120, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("我试图通过远程阻止那命令。\r\n有几个超级人造人活了下来。但…", 37, 2155120, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer('back', "Map/Effect2.img/FieldgraveStory/illust7", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("坠落之后，主机为了严格遵守命令，\r\n试图#b引爆黑色天堂自身#k。\r\n这是无法通过远程阻止的…", 37, 2155120, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("所以，我就#b直接与主机连接#k，阻止了自爆。\r\n我找不到其他方法。", 37, 2155120, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("嗯。原来是这样…我知道了。\r\n那我们现在快离开这里吧。", 37, 2155114, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("这是不可能的。\r\n我现在不能离开这里。\r\n#b如果解除连接，黑色天堂就会自爆。#k", 37, 2155120, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42506274"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#fs20#什么？……", 37, 2155114, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("事情就是这样。\r\n这里现在很危险。请快点离开…", 37, 2155120, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#fs22#傻瓜！你为什么这么做！\r\n#fs16#还是…逃走吧…", 37, 2155114, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("我…不知道。\r\n我只是，不能看着它自爆。", 37, 2155120, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("你这个傻瓜…真是的…\r\n其他方法…\r\n#fs22#噢？你的头为什么这样？", 37, 2155114, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42506274"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("她白色的头发…", 0);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_Monologue("烧成了红色. ", 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("怎么了…？", 37, 2155120, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("你这个…傻瓜…都是因为你连接了主机，所以才变成了这样……", 37, 2155114, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("芯片#b#fs18#超负荷#k#fs16#了吗？", 37, 2155120, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("你知道？", 37, 2155114, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("虽然我猜想到了，但我没有办法。\r\n#b在芯片熔化之前，可以延迟自爆。#k", 37, 2155120, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('……', 37, 2155114, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("这里非常危险。请快点离开。\r\n#fs14#我…可能会消失…\r\n#fs12#应该会的吧？应该会消失吧…", 37, 2155120, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2155114, null, cm.getPlayer().getId());
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                cm.sendNormalTalk_Bottom("#fs20#……不。\r\n#fs16#你会没事的。", 37, 2155114, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("你在做什么？", 37, 2155120, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#fs20#……没有熔化的芯片…还有一个……", 37, 2155114, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42506192"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                        cm.sendNormalTalk_Bottom("#fs22#…！！！请停下来！", 37, 2155120, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_LeaveField("oid=42506274");
                                                                                                                                            cm.npc_LeaveField("oid=42506274");
                                                                                                                                            cm.npc_ChangeController(2155104, "oid=42510655", -135, 50, 14, -185, -85, 0, true, 0, false);
                                                                                                                                            cm.npc_SetSpecialAction("oid=42510655", "summon", 0, 0);
                                                                                                                                            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                                                                                            cm.npc_setForceFlip("oid=42510655", -1);
                                                                                                                                            cm.npc_SetSpecialAction("oid=42510655", "pain", -1, 1);
                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 200, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face2##fs24#呃呃呃啊啊！！", 37, 2155121, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 100);
                                                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 200, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#fs22#不行！机器人不能自己害自己！", 37, 2155120, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2##fs24#如果只是…… #fs22#普通机器人，#fs20#应该会那样吧……", 37, 2155121, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/elctric2", 100);
                                                                                                                                                          cm.npc_SetSpecialAction("oid=42510655", "knee", -1, 1);
                                                                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#呃…这个你收下。\r\n#b我的芯片#k是球形的，应该能维持更长时间…\r\n这样就能争取些时间了。", 37, 2155121, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_PlayBGM("Bgm41/PromiseOfHeaven_vocaless", 0, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                              cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2155120, null, cm.getPlayer().getId());
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("…我无法理解。\r\n#b你究竟为什么要这么做？#k", 37, 2155120, false, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2155104, null, cm.getPlayer().getId());
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#…你会明白的。\r\n或者，你已经知道了。", 37, 2155121, false, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("…我，不能理解你。", 37, 2155120, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#…………那也没关系。", 37, 2155121, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("现在你的#b所有记忆都将被打乱。#k\r\n你以后打算怎么做？", 37, 2155120, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#我知道。嗯，我怎么办？\r\n#b…难道没有能让我记住你的东西吗？#k", 37, 2155121, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("机器人都是用相同零件…\r\n啊，#b制造号码#k！", 37, 2155120, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/FieldgraveStory/illust0", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("pan", "Map/Effect2.img/FieldgraveStory/illust2", 0, 500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#嗯…你是说你头后面的这个吗？\r\n000001号。我也看到过几次。", 37, 2155121, false, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#我会一直带在身边，不会弄丢的。", 37, 2155121, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("…这只是一件毫无意义的东西而已。", 37, 2155120, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('back', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("pan", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.npc_SetSpecialAction("oid=42510655", "kneeup", -1, 1);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.setNpcSpecialActionReset("oid=42510655");
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#对我而言是#b非常重要的东西#k。", 37, 2155121, false, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1##fs18#即使我忘记一切，#b我也一定会回来的。", 37, 2155121, true, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#你坚持住……等…我…………。", 37, 2155121, true, true);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=42510655", "turnoff", -1, 1);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_SetSpecialAction("oid=42510655", "off", -1, 1);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom('…我无法理解。', 37, 2155120, false, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2550, 500, -510, 70);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("在限制区域发现入侵者。\r\n选定A级清除对象。", 37, 2155113, false, true);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2550, 500, -140, 70);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.setNpcSpecialActionReset("oid=42510655");
                                                                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42510655"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("什么啊？这里是哪里…？\r\n我是…谁……", 37, 2155104, false, true);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("目标选定完成。", 37, 2155113, true, true);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0##fs20#啊！呃啊！那是什么啊！", 37, 2155104, true, true);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("开始清除。", 37, 2155113, true, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##fs20#呃啊啊！该死！", 37, 2155121, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.npc_setForceFlip("oid=42510655", 1);
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.npc_SetForceMove("oid=42510655", 1, 700, 250);
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2550, 2500, 400, 20);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fs20#呃啊啊啊啊啊啊！", 37, 2155121, false, true);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2550, 300, -140, 70);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("…我还……", 37, 2155120, false, true);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 3000, 3000, -140, 90);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=42506192", "turnoff", -1, 1);
                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=42506192", "downoff", -1, 1);
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#……我都不知道你的……名…字……", 37, 2155120, false, true);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("之后我睁开眼睛, 第一个见到的就是你小软柿. ", 1);
                                                                                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                                                                                cm.warp(310070496, 0, false);
                                                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=42506191");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=42506191");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=42506192");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=42506192");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=42510655");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=42510655");
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