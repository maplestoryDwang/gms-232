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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -3100, 350);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -3237, 289);
        cm.npc_ChangeController(2074114, "oid=2592730", -2945, 327, 490, -2995, -2895, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2592730", "summon", 0, 0);
        cm.npc_ChangeController(2074119, "oid=2592731", -3314, 329, 487, -3364, -3264, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2592731", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2592732", -3272, 329, 487, -3322, -3222, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2592732", "summon", 0, 0);
        cm.npc_ChangeController(2074129, "oid=2592733", -3047, 329, 492, -3097, -2997, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2592733", "summon", 0, 0);
        cm.npc_ChangeController(2074129, "oid=2592734", -2950, 329, 490, -3000, -2900, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2592734", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2074120, "oid=2592735", -3183, 327, 488, -3233, -3133, 0, true, 500, false);
          cm.npc_SetSpecialAction("oid=2592735", "summon", 0, 0);
          cm.npc_SetForceMove("oid=2592735", 1, 100, 100);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=2592735", "standup", -1, 1);
            cm.npc_SetSpecialAction("oid=2592734", "standt3", -1, 1);
            cm.sendNormalTalk_Bottom("啊呜！大婶，最近有什么事情吗？\r\n为什么要做这么多年糕啊？", 37, 2074114, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("哼！行了吧，你这家伙！还有呢，\r\n都给你吃吧！", 37, 2074130, true, true);
            } else {
              if (status === V++) {
                cm.setNpcSpecialActionReset("oid=2592735");
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2592735", "standup", -1, 1);
                  cm.npc_SetSpecialAction("oid=2592733", "standt3", -1, 1);
                  cm.sendNormalTalk_Bottom("#face0#哇，厉害，\r\n这些都是你做的吗？", 37, 2074100, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("大婶，我太感动了！啊呜！！！\r\n我会好好吃的！", 37, 2074114, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=2592730", "eat", -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=2592734", "standt2", -1, 1);
                        cm.sendNormalTalk_Bottom("啊呜啊呜，哎哟，真的！真是好吃到快疯了！", 37, 2074114, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=2592734", 'standt1', -1, 1);
                            cm.setNpcSpecialActionReset("oid=2592730");
                            cm.sendNormalTalk_Bottom("#face0#嗯……到这里为止都和昨天一样吧？\r\n不过今天还剩下那么多呢！", 37, 2074100, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#肯定能吃饱肚子的，这么一来#b宝玉#k就会脱落了吧？", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我的年糕有那么好吃吗？", 37, 2074130, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("这还用说？大婶的年糕是最棒的！\r\n嗯，不过……肚子好像有点……就算这样我也还是忍不住！啊呜！！！", 37, 2074114, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=2592730");
                                      cm.npc_LeaveField("oid=2592733");
                                      cm.npc_LeaveField("oid=2592735");
                                      cm.npc_ChangeController(2074114, "oid=2592825", -3047, 327, 492, -3097, -2997, 1, true, 500, false);
                                      cm.npc_SetSpecialAction("oid=2592825", "summon", 0, 0);
                                      cm.npc_ChangeController(2074129, "oid=2592826", -3047, 329, 492, -3097, -2997, 1, false, 500, false);
                                      cm.npc_SetSpecialAction("oid=2592826", "summon", 0, 0);
                                      cm.npc_ChangeController(2074129, "oid=2592827", -2950, 329, 490, -3000, -2900, 1, false, 500, false);
                                      cm.npc_SetSpecialAction("oid=2592827", "summon", 0, 0);
                                      cm.npc_ChangeController(2074120, "oid=2592828", -3183, 327, 488, -3233, -3133, 0, true, 500, false);
                                      cm.npc_SetSpecialAction("oid=2592828", "summon", 0, 0);
                                      cm.npc_SetSpecialAction("oid=2592828", 'standup', -1, 1);
                                      cm.npc_SetSpecialAction("oid=2592825", "eat", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2592826", "standt3", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2592827", 'standt1', -1, 1);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("哎哟，真好吃，啊呜啊呜。\r\n今天真的太幸福了，啊呜。", 37, 2074114, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2592826", "standt2", -1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.setNpcSpecialActionReset("oid=2592825");
                                                cm.sendNormalTalk_Bottom("啊……等一下，等一下。", 37, 2074114, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#行了！成功了！它停止吃东西了！\r\n应该已经满足了它那怪物般的贪吃欲望了吧？", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=2592825", "waak", -1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("大……大婶，等一下……啊……\r\n实在是……忍不住了……", 37, 2074133, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=2592825");
                                                        cm.sendNormalTalk_Bottom("#face1#行了！逃跑……\r\n啊，等一下，宝玉？难道它还没有填饱肚子吗？", 37, 2074100, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("老虎去的地方……是茅房的方向。", 37, 2074119, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#那难不成？", 37, 2074100, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_LeaveField("oid=2592826");
                                                                cm.npc_ChangeController(2074114, "oid=2592898", -3047, 327, 492, -3097, -2997, 1, true, 500, false);
                                                                cm.npc_SetSpecialAction("oid=2592898", 'summon', 0, 0);
                                                                cm.npc_ChangeController(2074129, "oid=2592899", -3047, 329, 492, -3097, -2997, 1, false, 500, false);
                                                                cm.npc_SetSpecialAction("oid=2592899", "summon", 0, 0);
                                                                cm.npc_ChangeController(2074129, "oid=2592900", -2950, 329, 490, -3000, -2900, 1, false, 500, false);
                                                                cm.npc_SetSpecialAction("oid=2592900", 'summon', 0, 0);
                                                                cm.npc_SetSpecialAction("oid=2592899", "standt2", -1, 1);
                                                                cm.npc_SetSpecialAction("oid=2592900", 'standt1', -1, 1);
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("啊，好舒爽！吃太多了就来感觉了呢。\r\n我已经去痛快地释放了一回！啊呜！！\r\n那就再继续接着吃吧？", 37, 2074114, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#它难道……是直肠子的吗？", 37, 2074100, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=2592898", "eat", -1, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=2592899", "standt1", -1, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.setNpcSpecialActionReset("oid=2592898");
                                                                            cm.sendNormalTalk_Bottom("#face3#啊……我们完蛋了……", 37, 2074100, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("啊呜啊呜，哇，真是，太棒了！\r\n大婶年糕还有吗？我正吃得香着呢。", 37, 2074114, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("哼！吃了那么多还没吃饱吗？\r\n那什么，这里还有食材，#g我这就立马给你现做！", 37, 2074130, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("现做……\r\n什么？娘，娘你等一下！", 37, 2074119, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("(这要是传出去了，我们在这一带的生意可都得毁了啊，娘！)", 37, 2074119, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("给我让开，它不是还想吃嘛。", 37, 2074130, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=2592828", -1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_LeaveField("oid=2592828");
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_ChangeController(2074120, "oid=2592941", -3153, 327, 488, -3203, -3103, 0, true, 500, false);
                                                                                            cm.npc_SetSpecialAction("oid=2592941", 'summon', 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetSpecialAction("oid=2592941", "making", -1, 1);
                                                                                              cm.sendNormalTalk_Bottom("哦……该死。", 37, 2074119, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("瞧好了啊，这啊，才算是我真正的手艺。", 37, 2074120, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("啊呜！喔喔！现做的年糕最棒啦！\r\n大婶赶紧做……等，等一下……", 37, 2074114, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/7", 0, 500, 0, 0, 7, 4, 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetSpecialAction("oid=2592898", "waak", -1, 1);
                                                                                                        cm.sendNormalTalk_Bottom("等，等一下，大婶，你不洗手的吗？", 37, 2074133, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#b干吗要洗手啊！\r\n怎么也得有沾了#g几年#k的调料，这亲手做了才够味嘛！", 37, 2074120, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#g几、几、几年？#k啊呜呜呜！\r\n难不成之前你一次都没有洗过手……", 37, 2074133, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("很厉害吧？\r\n就算让别人知道了秘方啊，谁也赶不上我的手艺的！", 37, 2074120, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("哎哟喂，这是从哪儿跑出来的虫子。", 37, 2074120, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap2", 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("哎哟，逮着了，\r\n你等我一会，我这就给你做出来。", 37, 2074120, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("呜呜……我们毁掉了……", 37, 2074119, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#呕……呕呕。", 37, 2074100, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("啊呜！呜呜！呕！\r\n啊呜！呜呜呜呜！", 37, 2074133, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face2#哦，老虎它！", 37, 2074100, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/illust/1", 0, 500, 0, 0, 7, 4, 1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer("back2", "Map/Effect2.img/downtown2015/illust/11", 0, 500, 0, 0, 8, 4, 1);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#g(获得了暴食宝玉！)#k", 57, 0, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer("back2", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("呕，呕吐！\r\n大婶太过分了！太过分了！", 37, 2074133, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_LeaveField("oid=2592898");
                                                                                                                                              cm.sendNormalTalk_Bottom("哎，混账东西！你去哪儿！哪儿不舒服吗？\r\n哼，我先进去做年糕了。", 37, 2074120, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#那，那双手原来就是年糕美味的秘诀……\r\n呜呜，看样子我以后……是吃不了年糕了……", 37, 2074100, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#你一开始，就知道的吗？", 37, 2074100, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("我不是说过的嘛，\r\n我以后不吃年糕了。", 37, 2074119, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#呜呜……\r\n总之，也算是解决了吧？", 37, 2074100, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("老虎肯定会把消息传得到处都是……\r\n这往后我们可就没法在这一带做生意了。", 37, 2074119, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("看样子我娘往后得出去卖年糕了……\r\n总之，谢谢你们操心了。", 37, 2074119, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#额……好吧，保重哦。\r\n你娘那边……也替我们说声谢谢，\r\n各方面都是。", 37, 2074100, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face3#好，那我们现在……呜呜……哎哟喂，我胃里还是……\r\n得赶紧回到朴大爷那里了。", 37, 2074100, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.forceStartQuest(30918, '1');
                                                                                                                                                                cm.forceCompleteQuest(30918);
                                                                                                                                                                cm.forceForfeitQuest(30918);
                                                                                                                                                                cm.gainExp(142059);
                                                                                                                                                                cm.updateInfoQuest(30918, '');
                                                                                                                                                                cm.updateInfoQuest(30419, "gExpCheck=1");
                                                                                                                                                                cm.forceStartQuest(30419, '');
                                                                                                                                                                cm.forceCompleteQuest(30419);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                                                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                cm.dispose();
                                                                                                                                                                cm.warp(224000000, 21, true);
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
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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