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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 310, 8);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 730, -34);
        cm.npc_ChangeController(3004655, "oid=123492108", 100, 12, 10, 50, 150, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=123492108", "summon", 0, 0);
        cm.npc_ChangeController(3004656, "oid=123492109", 385, 57, 4, 335, 435, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=123492109", "summon", 0, 0);
        cm.npc_ChangeController(3004653, "oid=123492110", 250, -9, 11, 200, 300, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=123492110", "summon", 0, 0);
        cm.npc_ChangeController(3004652, "oid=123492111", 334, -8, 11, 284, 384, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=123492111", 'summon', 0, 0);
        cm.npc_ChangeController(3004654, "oid=123492112", 442, 10, 11, 392, 492, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=123492112", "summon", 0, 0);
        cm.npc_ChangeController(3004657, "oid=123492113", 180, 60, 6, 130, 230, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=123492113", "summon", 0, 0);
        cm.npc_ChangeController(3004658, "oid=123492114", 497, 59, 1, 447, 547, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=123492114", "summon", 0, 0);
        cm.npc_ChangeController(3004651, "oid=123492115", 600, -30, 16, 550, 650, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=123492115", "summon", 0, 0);
        cm.Npc_Fadeout("oid=123492110", 0, 0);
        cm.Npc_Fadeout("oid=123492111", 0, 0);
        cm.Npc_Fadeout("oid=123492115", 0, 0);
        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
        cm.sendNormalTalk_Bottom("（好像正在激烈讨论。）", 56, 0, false, true, 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#但是……一定要回到地上世界吗？ ", 36, 3004657, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这里的生活虽然很悲惨，但好歹还算安全。\r\n虽然不宽裕，但好歹还能勉强糊口……", 36, 3004657, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#只要我们不回到地上，T-boy好像也不打算招惹我们。", 36, 3004657, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你想这样过一辈子吗？那样的人生又有什么意义？", 36, 3004656, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#但是，太阳、地上、自由，全都只是镜花水月。", 36, 3004655, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我们又不是人类。\r\n为什么要冒着危险跑到地上去呢？", 36, 3004655, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(700);
                        } else {
                          if (status === V++) {
                            cm.Npc_Fadeout("oid=123492110", 255, 500);
                            cm.inGameDirectionEvent_AskAnswerTime(700);
                          } else {
                            if (status === V++) {
                              cm.Npc_Fadeout("oid=123492111", 255, 500);
                              cm.inGameDirectionEvent_AskAnswerTime(700);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm54.img/MemoryOfSunset", 0, 0);
                                cm.sendNormalTalk_Bottom("#face0#因为……", 36, 3004652, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我们不是地沟鼠。", 36, 3004652, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004655, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#大家都很清楚。", 36, 3004652, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我们从一诞生下来，就是为了在地面上呼吸着新鲜空气生活。", 36, 3004652, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0# 那才是我们。", 36, 3004652, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0# 那是我们的本能。", 36, 3004652, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3004655, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('#face0#我……', 36, 3004654, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#拉索尔说得对。", 36, 3004654, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#没错，我也有同感。", 36, 3004656, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#阿尔拉姆，贝尔怎么说？", 36, 3004657, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#（阿尔拉姆摇了摇头。）", 36, 3004653, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3004655, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……我们应该从现实的角度想一想。", 36, 3004653, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你的心情我可以理解……\r\n但是没有贝尔的话，我们又有什么能力和T-boy对抗呢？", 36, 3004653, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#对手无缚鸡之力的我们而言，那样的事情太危险、太困难了。", 36, 3004653, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那个……", 36, 3004652, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.askYesNo_Bottom('（要往前走一步吗？）', 56, 0, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 165);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=123492111", 1);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123492111"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#啊！你来啦！", 36, 3004652, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=123492109", 1);
                                                                                    cm.npc_setForceFlip("oid=123492112", 1);
                                                                                    cm.npc_setForceFlip("oid=123492114", 1);
                                                                                    cm.sendNormalTalk_Bottom("#face0#请看！我们还有勇士！", 36, 3004652, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayBGM("Bgm54/ReverseCity", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#勇士？", 36, 3004655, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#我亲眼看到了。勇士他摧枯拉朽般地击溃了T-boy的机械大军。", 36, 3004652, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#摧……摧枯拉朽？", 36, 3004657, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#是的，摧枯拉朽！", 36, 3004652, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#那个场面真是惊天地泣鬼神。\r\n勇士每迈出一步，那些沉重的铁疙瘩就像秋风中的落叶一样纷纷倒地。", 36, 3004652, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#只留下一地的零件和黑色机油，到处都是机械大军痛苦的惨叫声。", 36, 3004652, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#那是一场伟大！神圣的！正义的胜利！", 36, 3004652, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#哦哦……！", 36, 3004655, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("嗯……话，话是没错，但是……（好像说得有点太夸张了……）", 56, 0, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#等、等等，拉索尔。\r\n不能把这么危险的事情推给别人。", 36, 3004653, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#报酬我有。", 36, 3004652, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#（拉索尔从怀里掏出了#b#i2630437# 神秘徽章#k。）", 36, 3004652, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom('那是？！', 56, 0, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#在T-boy的列车上堆满了这个东西。", 36, 3004652, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#（虽然在毁灭加速器爆炸的时候差不多全都消失了……）", 36, 3004652, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#虽然不知是什么东西，但我想也许勇士会用得上。\r\n如果你能为我们而战，我就把它送给你。", 36, 3004652, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#如果能打败T-boy，也许还能得到很多。", 36, 3004652, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#嗯……大概#b20个#k左右？", 36, 3004652, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom('嗯……', 56, 0, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#勇士！\r\n为了光荣的正义，为了灿烂的阳光，为了这#b发光的徽章#k……！", 36, 3004652, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.askYesNo_Bottom("#face0#你愿意与我们并肩作战吗？", 36, 3004652, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#看到了吧？！有勇士和我们在一起，就一定能打败T-boy。", 36, 3004652, false, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哦哦哦！！", 36, 3004656, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#好！现在终于可以回到梦寐以求的地上世界了。", 36, 3004652, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#大家准备好享受日光浴吧。泳衣都买好了吧？", 36, 3004652, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#哦哦！！", 36, 3004655, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#真、真的吗？我们能到地上去了吗？", 36, 3004657, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#日光浴……泳衣……", 36, 3004654, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#但，但是拉索尔。\r\n这里不是好友世界，就算可以到地上世界去，\r\n也不会有阳光。", 36, 3004653, false, true, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯，那么……现在还有什么问题？", 36, 3004652, true, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#喂，听我说……", 36, 3004653, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#问题是如何才能避开T-boy的眼睛，找到那个#r毁灭加速器#k。", 36, 3004654, true, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#只有毁掉毁灭加速器，才能避免黑洞被制造出来。\r\n但是地上有好几百架搜索无人机。", 36, 3004654, true, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3004652, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#你们一定需、需要地图吧。", 36, 3004651, false, true, 1);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 380, 8);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.Npc_Fadeout("oid=123492115", 255, 500);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#贝尔？！", 36, 3004652, false, true, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#哦哦！神、神圣的地图！", 36, 3004653, true, true, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#只要有了那个，就能到城市的任何地方去了！", 36, 3004655, true, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#（贝尔拿出了#b#i4036641# #r#t4036641##k。）", 36, 3004651, true, true, 1);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("（不就是地铁路线图吗……）", 56, 0, true, true, 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#贝尔！你能把地图借给我吗？", 36, 3004652, true, true, 1);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#不，我也一起去。\r\n我来给你们带、带路。", 36, 3004651, true, true, 1);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#看来你改主意啦！欢迎之至！", 36, 3004652, true, true, 1);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#但是我有、有个条件。", 36, 3004651, true, true, 1);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#没问题，尽管说吧！", 36, 3004652, true, true, 1);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#拉索尔，你、你不能去。", 36, 3004651, true, true, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fs18#没问题！！", 36, 3004652, true, true, 1);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##fs20#什么？！", 36, 3004652, false, true, 1);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#为，为什么？！怕我受伤吗？\r\n我能保护自己！我也很擅长逃跑！", 36, 3004652, true, true, 1);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你……话、话太多了。太、太吵。", 36, 3004651, true, true, 1);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#性格太冲动，做、做事不管不顾。", 36, 3004651, true, true, 1);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#最关键的一点是，你根、根本不在意别人的话。", 36, 3004651, true, true, 1);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#嗯？！我什么时候？", 36, 3004652, true, true, 1);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯……深有同感。", 36, 3004653, true, true, 1);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#没错，说得对。", 36, 3004655, true, true, 1);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom('（点头点头……）', 56, 0, true, true, 1);
                                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                                cm.warp(450014050, 0, true);
                                                                                                                                                                                                                cm.updateInfoQuest(37611, "dir=1");
                                                                                                                                                                                                                cm.updateInfoQuest(37600, "01=h0;10=h0;11=h0;02=h1;12=h0;13=h0;14=h1;09=h0");
                                                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                                cm.npc_LeaveField("oid=123492108");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=123492109");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=123492110");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=123492111");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=123492112");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=123492113");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=123492114");
                                                                                                                                                                                                                cm.npc_LeaveField("oid=123492115");
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