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
      cm.npc_ChangeController(9400581, "oid=4213319", -30, 365, 19, -80, 20, 1, true, false);
      cm.npc_SetSpecialAction("oid=4213319", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=4213320", -135, 381, 18, -185, -85, 0, true, false);
      cm.npc_SetSpecialAction("oid=4213320", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=4213321", -182, 387, 18, -232, -132, 0, true, false);
      cm.npc_SetSpecialAction("oid=4213321", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#face0#哎，你站住！", 37, 9400581, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('#b……？', 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNewEffects(17, [1000, 1000, 2000, -170, 400]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=4213320", -1);
              cm.npc_setForceFlip("oid=4213321", -1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=4213321", -1, 1000, 130);
                cm.inGameDirectionEvent_AskAnswerTime(250);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=4213320", -1, 1000, 130);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=4213319", -1, 100, 50);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#刚才我太忙，一时没顾上问……你不是这里的村民？", 37, 9400581, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b对……有事吗？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我很好奇像你这样实力出众的年轻人突然跑来这里做什么。", 37, 9400581, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，你别嫌我多管闲事。我领导这支派遣团，肩负守卫这个村庄的重任，有资格问个清楚。", 37, 9400581, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b……我接到请求拯救阿布鲁的求助信，所以来了。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b我也有充分的资格待在这里。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#原来如此，可以把信给我看看吗？", 37, 9400581, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/PL_MONAD1/0");
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#这封信不是这里的村民写的。", 37, 9400581, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b你问完了的话，我要走了。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#啊，还有一件事。你打算继续留在这里吗？", 37, 9400581, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b是的，既然是接到求助而来，我会一直待到村子恢复安定再走。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#知道了。", 37, 9400581, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                                                      cm.sendNewEffects(13, [1000, 100, 0, 0, 0]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_LeaveField("oid=4213320");
                                                          cm.npc_LeaveField("oid=4213320");
                                                          cm.npc_LeaveField("oid=4213321");
                                                          cm.npc_LeaveField("oid=4213321");
                                                          cm.npc_setForceFlip("oid=4213319", 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=4213319"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#我还没说完。", 37, 9400581, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#既然要留在这里，我希望你在这期间能听从我的指挥。", 37, 9400581, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#b……我会根据情况尽量配合你。", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=4213319"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.forceCompleteQuest(64023);
                                                                            cm.forceStartQuest(64024, '');
                                                                            cm.npc_ChangeController(9400590, "oid=4213814", 2500, 380, 44, 2450, 2550, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=4213814", "summon", 0, 0);
                                                                            cm.npc_ChangeController(9400587, "oid=4213815", 450, 70, 60, 400, 500, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=4213815", "summon", 0, 0);
                                                                            cm.npc_ChangeController(9400596, "oid=4213816", 550, 70, 31, 500, 600, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=4213816", "summon", 0, 0);
                                                                            cm.npc_ChangeController(9400593, "oid=4213817", 1050, 130, 67, 1000, 1100, 0, true, false);
                                                                            cm.npc_SetSpecialAction("oid=4213817", 'summon', 0, 0);
                                                                            cm.npc_ChangeController(9400591, "oid=4213818", 1100, 130, 68, 1050, 1150, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=4213818", "summon", 0, 0);
                                                                            cm.sendNormalTalk_Bottom("#face0#雪……，暴风雪！！！！！！！！！！！！！！", 37, 9400590, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNewEffects(12, [1500, 2200, 350, 0, 0]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=4213814"], [5000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.npc_setForceFlip("oid=4213816", 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=4213818", 1);
                                                                                      cm.npc_SetForceMove("oid=4213814", -1, 500, 300);
                                                                                      cm.sendNormalTalk_Bottom("#face0#暴风雪来了！！！！！！！！！", 37, 9400590, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNewEffects(17, [3000, 2000, 1000, 1600, -500]);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal2", '', ''], [1, 1, 0, 10000, 0, 0, 0, 0]);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_LeaveField("oid=4213814");
                                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                                                                                    cm.npc_ChangeController(9400580, "oid=4214085", 0, 300, 19, -50, 50, 1, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214085", 'summon', 0, 0);
                                                                                                    cm.npc_ChangeController(9400582, "oid=4214086", 50, 300, 20, 0, 100, 1, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214086", 'summon', 0, 0);
                                                                                                    cm.npc_ChangeController(9400591, "oid=4214087", 100, 300, 20, 50, 150, 1, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214087", "summon", 0, 0);
                                                                                                    cm.npc_ChangeController(9400618, "oid=4214088", 140, 250, 20, 90, 190, 1, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214088", "summon", 0, 0);
                                                                                                    cm.npc_ChangeController(9400596, "oid=4214089", 180, 250, 20, 130, 230, 1, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214089", "summon", 0, 0);
                                                                                                    cm.npc_ChangeController(9400587, "oid=4214090", -200, 300, 18, -250, -150, 0, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214090", 'summon', 0, 0);
                                                                                                    cm.npc_ChangeController(9400589, "oid=4214091", -270, 300, 17, -320, -220, 0, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214091", 'summon', 0, 0);
                                                                                                    cm.npc_ChangeController(9400590, "oid=4214092", -330, 300, 17, -380, -280, 0, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214092", 'summon', 0, 0);
                                                                                                    cm.npc_ChangeController(9400583, "oid=4214093", -380, 300, 17, -430, -330, 0, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214093", 'summon', 0, 0);
                                                                                                    cm.npc_ChangeController(9400585, "oid=4214094", -430, 300, 17, -480, -380, 0, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214094", "summon", 0, 0);
                                                                                                    cm.npc_ChangeController(9400617, "oid=4214095", -480, 300, 17, -530, -430, 0, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214095", "summon", 0, 0);
                                                                                                    cm.npc_ChangeController(9400585, "oid=4214096", -580, 300, 16, -630, -530, 0, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=4214096", 'summon', 0, 0);
                                                                                                    cm.sendNewEffects(17, [0, 500, 2000, -150, 400]);
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
                                                                                                          cm.sendNormalTalk_Bottom("#face1#不就是暴风雪吗，干嘛一惊一乍的。", 37, 9400581, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#嗬-看来骑士老爷您没见过真正的暴风雪，这么不慌不忙的。", 37, 9400590, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#b天气不太寻常……是多强的暴风雪？", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#什么不太寻常！简直是近来最来势凶猛的暴风雪！", 37, 9400590, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#斯洛克！周围人很多，说话小心点。", 37, 9400589, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#再厉害也不过是暴风雪。趁它刮到之前赶紧修整房屋或搭帐篷吧。", 37, 9400581, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你说这话真是不怕死啊。", 37, 9400590, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#眼下这村里根本没有房屋可以抵挡那么猛烈的暴风雪。\r\n修整房屋？你以为那暴风雪刮到这里要多长时间？", 37, 9400590, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#斯洛克说的没错。\r\n半天，只需要半天的工夫，它就会刮到这里。我们没有足够的时间去修房子。", 37, 9400589, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face4#既然这样，不是应该赶紧收拾行李，去其他村庄避难吗？", 37, 9400580, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#b说得对，不用考虑了。", 57, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#可汗村长，你怎么看。", 37, 9400589, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#横竖没其他办法……大家尽快准备一下，我们离开这里。", 37, 9400587, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#河对岸的村子跟我们关系不错，一定会收留我们的。", 37, 9400587, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("等……等一下！等暴风雪过了，咱们还会回来的吧？不是要弃村吧？", 37, 9400591, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#当然会回来。", 37, 9400587, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#……述拉，你别担心，我跟你保证，暴风雪一过，咱们就回来，我一定把村庄恢复成原先的模样。", 37, 9400589, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那样才好迎接我们的亲人回家。", 37, 9400589, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("谢谢你，佩图尔……谢谢……", 37, 9400591, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#那么，大家快去收拾点必要的行李，然后马上集合。", 37, 9400587, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……通讯兵！", 37, 9400581, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("是，团长！", 37, 9400585, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……向总部求援的事进行得怎么样？还没回复吗？", 37, 9400581, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("是的，自从答复叫我们等待之后，就再没消息了。", 37, 9400585, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#知道了。", 37, 9400581, true, true);
                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                          cm.forceCompleteQuest(64024);
                                                                                                                                                          cm.warp(867200400, 6, true);
                                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                          cm.npc_LeaveField("oid=4213319");
                                                                                                                                                          cm.npc_LeaveField("oid=4213319");
                                                                                                                                                          cm.npc_LeaveField("oid=4213815");
                                                                                                                                                          cm.npc_LeaveField("oid=4213815");
                                                                                                                                                          cm.npc_LeaveField("oid=4213816");
                                                                                                                                                          cm.npc_LeaveField("oid=4213816");
                                                                                                                                                          cm.npc_LeaveField("oid=4213817");
                                                                                                                                                          cm.npc_LeaveField("oid=4213817");
                                                                                                                                                          cm.npc_LeaveField("oid=4213818");
                                                                                                                                                          cm.npc_LeaveField("oid=4213818");
                                                                                                                                                          cm.npc_LeaveField("oid=4214085");
                                                                                                                                                          cm.npc_LeaveField("oid=4214085");
                                                                                                                                                          cm.npc_LeaveField("oid=4214086");
                                                                                                                                                          cm.npc_LeaveField("oid=4214086");
                                                                                                                                                          cm.npc_LeaveField("oid=4214087");
                                                                                                                                                          cm.npc_LeaveField("oid=4214087");
                                                                                                                                                          cm.npc_LeaveField("oid=4214088");
                                                                                                                                                          cm.npc_LeaveField("oid=4214088");
                                                                                                                                                          cm.npc_LeaveField("oid=4214089");
                                                                                                                                                          cm.npc_LeaveField("oid=4214089");
                                                                                                                                                          cm.npc_LeaveField("oid=4214090");
                                                                                                                                                          cm.npc_LeaveField("oid=4214090");
                                                                                                                                                          cm.npc_LeaveField("oid=4214091");
                                                                                                                                                          cm.npc_LeaveField("oid=4214091");
                                                                                                                                                          cm.npc_LeaveField("oid=4214092");
                                                                                                                                                          cm.npc_LeaveField("oid=4214092");
                                                                                                                                                          cm.npc_LeaveField("oid=4214093");
                                                                                                                                                          cm.npc_LeaveField("oid=4214093");
                                                                                                                                                          cm.npc_LeaveField("oid=4214094");
                                                                                                                                                          cm.npc_LeaveField("oid=4214094");
                                                                                                                                                          cm.npc_LeaveField("oid=4214095");
                                                                                                                                                          cm.npc_LeaveField("oid=4214095");
                                                                                                                                                          cm.npc_LeaveField("oid=4214096");
                                                                                                                                                          cm.npc_LeaveField("oid=4214096");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;