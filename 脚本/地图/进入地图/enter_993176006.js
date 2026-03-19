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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 140, -127);
      cm.npc_ChangeController(3004652, "oid=123377402", 30, -127, 2, -20, 80, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=123377402", "summon", 0, 0);
      cm.npc_ChangeController(3004663, "oid=123377403", 310, -127, 3, 260, 360, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=123377403", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=123377403", "special2", -1, 1);
      cm.Npc_Fadeout("oid=123377403", 0, 0);
      cm.npcMove(3004663, 0, -100, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 758, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 227, -100);
        } else {
          if (status === V++) {
            cm.onSetMapObjectCreateLayerMore("reverse_door", 2, "02_keep_open", 1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1270691;QuestCount=3;accCheck=200722224629587");
                cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1332074;QuestCount=3;accCheck=200722224629587");
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我们幸运地找到了研究室……", 36, 3004652, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#但是看了半天研究笔记，却感觉像是天书。", 36, 3004652, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("上面提到了以艾尔达为动力的#r重力装置#k的运行研究……", 56, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("第1阶段. 采集刚刚在神秘河上游附近生成的丰沛的艾尔达。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("第2阶段. 艾尔达枯竭时，利用#r毁灭加速器#k强制生成大量艾尔达……", 0);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#r毁灭加速器#k……是将周围的物质分解成艾尔达的东西吗？", 56, 0, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#可能是……类似炸弹的东西。", 36, 3004652, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("第3阶段. 在最终阶段利用数量庞大的艾尔达集中控制重力，在城市上空……", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("\r\n#r生成「黑洞」。 ", 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#fs18#生成#r黑洞#k？！", 56, 0, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123377402"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                              cm.Npc_Fadeout("oid=123377403", 255, 700);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/drone2", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 190, -20);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#哔哔。接通视频通信。", 36, 3004663, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.onSetNpcScript("oid=123377403", 1, ["special", 'stand'], [1, 1]);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我说谁在百忙之中给我添乱……原来都是熟面孔。", 36, 3004677, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#T-boy！你到底想干什么？！", 36, 3004652, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#刚才那位朋友不是都说了吗？生成#r黑洞#k。", 36, 3004677, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#那个我知道！", 36, 3004652, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#但是……黑洞是什么？！", 36, 3004652, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=123377403"], [0, 0, -100, 1, 0, 1, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", 'oid=1'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("（啊，刚好后面一页有幅图。）", 56, 0, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction24.img/illust2/4", 0, 1000, 0, -80, 3, 4, 0, -1, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那个叫黑洞的东西……会把城市的一切……全都吸进去？\r\n而且不会消失吗？", 36, 3004652, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("这真的仅凭引力就能做到吗？", 56, 0, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#我不是说了吗？哈哈，那是你们难以企及的力量。", 36, 3004677, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("T-boy！你到底想干什么？", 56, 0, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯……既然你这么想知道，要我来给你具体说明一下吗？", 36, 3004677, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#T-无人机，测试用的#r毁灭加速器#k还有吧？马上启动。", 36, 3004677, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm54/T-bomb", 0, 0);
                                                                                          cm.onSetNpcScript("oid=123377403", 1, ["special", "special2"], [1, -1]);
                                                                                          cm.sendNormalTalk_Bottom("#face0#明白。关闭列车所有车门。", 36, 3004663, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.onSetMapObjectCreateLayerMore("reverse_door", 2, "03_close", 0);
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_close", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.onSetMapObjectCreateLayerMore("reverse_door", 2, "03_keep_close", 1);
                                                                                              cm.sendNormalTalk_Bottom('呃！', 56, 0, false, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 1286, -275);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0##r毁灭加速器#k准备启动。\r\n稍后将会发生#r#fs18#3级规模的艾尔达爆炸#k#fs16#。请尽快躲避。", 36, 3004663, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.setAmbience("SoundEff.img/ReverseCity/warn1", 200, 60);
                                                                                                      cm.setAmbience("SoundEff.img/blackHeaven/scanner_alert", 100, 60);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#开……开什么玩笑？", 36, 3004652, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 140, -20);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#我很忙。把实验结果录下来，以后再看。通信结束。", 36, 3004677, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.onSetNpcScript("oid=123377403", 1, ["special", "special2"], [1, -1]);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#距离毁灭加速器启动还剩30秒。", 36, 3004663, false, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哎呀呀！！快、快想想办法！", 36, 3004652, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("只要把门打破……", 56, 0, true, true, 1);
                                                                                                                      cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1332074;QuestCount=3;accCheck=200722224730356");
                                                                                                                      cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/07/22;accSum=1392843;QuestCount=3;accCheck=200722224730356");
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#不，光靠力气是打、打不破的。", 36, 3004651, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_ChangeController(3004651, "oid=123390481", -100, -20, 2, -150, -50, 0, true, 500, false);
                                                                                                                          cm.npc_SetSpecialAction("oid=123390481", 'summon', 0, 0);
                                                                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                          cm.npc_setForceFlip("oid=123377402", -1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("贝尔？！", 56, 0, false, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#T-boy事先进行了特殊处理。", 36, 3004651, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.playSoundEffDirectly("SoundEff.img/ReverseCity/warn1");
                                                                                                                                cm.setAmbience("SoundEff.img/ReverseCity/warn2", 200, 60);
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#距离爆炸还剩20秒。", 36, 3004663, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_SetForceMove("oid=123390481", 1, 330, 120);
                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 190, -20);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                      cm.npc_setForceFlip("oid=123377402", 1);
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#记住。20xx年之后制造的所有列车，\r\n为、为了在遇到事故时能够逃脱，都设有手动开、开关装置。", 36, 3004651, false, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#在出入门右边的椅子下、下面，有个红色应急开关。\r\n只要打、打开盖子，朝身体方向拉就行。", 36, 3004651, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#距离爆炸还剩10秒。9、8、7……", 36, 3004663, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#但是右边的椅子好像被T-boy拆掉了。\r\n这时候就必须左、左右调整基板。", 36, 3004651, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#把基板取下来的时候……", 36, 3004651, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#知道了。快！！", 36, 3004652, true, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.Hidden_background("reverse_sub1", 1, 0, 0, 0);
                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/metal", 100);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#5、4、3……", 36, 3004663, false, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.onSetMapObjectCreateLayerMore("reverse_door", 2, '01_open', 0);
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_open", 100);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.onSetMapObjectCreateLayerMore("reverse_door", 2, "02_keep_open", 1);
                                                                                                                                                          cm.sendNormalTalk_Bottom("打开了！", 56, 0, false, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.playSoundEffDirectly("SoundEff.img/ReverseCity/warn2");
                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/warn3", 100);
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#快逃出去！！！", 36, 3004652, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana_skill2", 100);
                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                                                                                cm.playSoundEffDirectly("SoundEff.img/blackHeaven/scanner_alert");
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                } else if (status === V++) {
                                                                                                                                                                  cm.warp(993176007, 0, true);
                                                                                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                                                                  cm.npc_LeaveField("oid=123377402");
                                                                                                                                                                  cm.npc_LeaveField("oid=123377403");
                                                                                                                                                                  cm.npc_LeaveField("oid=123390481");
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