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
      cm.npc_ChangeController(9401026, "oid=200972", 190, 65, 49, 140, 240, 1, false, 0, false);
      cm.npc_ChangeController(9401028, "oid=200973", -354, 65, 45, -404, -304, 0, false, 0, false);
      cm.npc_ChangeController(9401040, "oid=200974", -480, 155, 33, -530, -431, 5, true, 0, false);
      cm.npc_ChangeController(9401043, 'oid=200975', -541, 155, 32, -559, -491, 4, true, 0, false);
      cm.npc_ChangeController(9401045, "oid=200976", 147, -205, 15, 97, 197, 5, true, 0, false);
      cm.npc_ChangeController(9401047, "oid=200977", -213, -205, 6, -263, -163, 5, true, 0, false);
      cm.npc_ChangeController(9401041, "oid=200978", -305, -205, 11, -355, -255, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9401123, "oid=5357063", 359, -96, 64, 309, 409, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=5357063", "summon", 0, 0);
      cm.npc_ChangeController(9401124, "oid=5357064", 414, -118, 63, 364, 464, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=5357064", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(9401129, "oid=5357297", -200, 50, 50, -250, -150, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=5357297", "summon", 0, 0);
              cm.npc_ChangeController(9401130, "oid=5357298", -300, 50, 51, -350, -250, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=5357298", "summon", 0, 0);
              cm.npc_SetForceMove("oid=5357297", 1, 250, 100);
              cm.npc_SetForceMove("oid=5357298", 1, 250, 100);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
              cm.effect_Text(["#fn黑体##fs20#30分钟后……"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("无聊。", 37, 9401030, false, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=5357297");
                        cm.npc_LeaveField("oid=5357297");
                        cm.npc_LeaveField("oid=5357298");
                        cm.npc_LeaveField("oid=5357298");
                        cm.npc_ChangeController(9401131, "oid=5357928", -85, -215, 8, -135, -35, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=5357928", 'summon', 0, 0);
                        cm.npc_ChangeController(9401132, "oid=5357929", -20, -215, 8, -70, 30, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=5357929", 'summon', 0, 0);
                        cm.npc_ChangeController(9401133, "oid=5357930", -160, 50, 50, -210, -110, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=5357930", "summon", 0, 0);
                        cm.npc_ChangeController(9401134, "oid=5357931", 100, 50, 60, 50, 150, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=5357931", "summon", 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                        cm.effect_Text(["#fn黑体##fs20#1小时后……."], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("… ", 37, 9401029, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=5357930");
                                cm.npc_LeaveField("oid=5357930");
                                cm.npc_LeaveField("oid=5357931");
                                cm.npc_LeaveField("oid=5357931");
                                cm.npc_ChangeController(9401129, "oid=5358149", -80, -30, 37, -130, -30, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=5358149", "summon", 0, 0);
                                cm.npc_ChangeController(9401130, "oid=5358150", 0, -30, 38, -50, 50, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=5358150", "summon", 0, 0);
                                cm.npc_ChangeController(9401126, "oid=5358151", -200, 45, 50, -250, -150, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=5358151", 'summon', 0, 0);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                cm.effect_Text(["#fn黑体##fs20#3小时后……."], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=5358151", 1, 250, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("额哈哈哈！我又来了！调查任务完成！", 37, 9401032, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('辛苦了。', 37, 9401022, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("给你，奖励。", 37, 9401022, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("哦哦哦！这就是劳动的价值！嘎嘎嘎", 37, 9401032, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我走了！", 37, 9401032, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("下一个任务呢？", 37, 9401022, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=5358151", -1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("额，嗯？唔……等会儿！", 37, 9401032, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=5358151", -1, 300, 150);
                                                          cm.sendNewEffects(17, [3000, 1000, 2000, -250, 130]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("你又来了，姐姐～？", 37, 9401024, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("额哈哈，给我武器！我选的武器～～ ", 37, 9401032, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("来，给你！", 37, 9401024, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=5358151"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.npc_setForceFlip("oid=5358151", 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=5358151", 1, 50, 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("哈……看看这美丽的线条，小可爱，你知道我为你吃了多少苦吗！", 37, 9401032, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("现在装备都齐了！诶嘿嘿。", 37, 9401032, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=5358151"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.sendNormalTalk_Bottom("我是最强飞侠～米西蒂～～？我来占领深渊啦～～？哼哼～～", 37, 9401032, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNewEffects(12, [0, 350, 0, 0, 0]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#b应该……没错吧？", 57, 0, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("虽然发型不同，但我确定是她！", 37, 9401029, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("（点头）", 37, 9401030, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNewEffects(12, [0, -250, 130, 0, 0]);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
                                                                                            cm.npc_SetForceMove("oid=5357063", -1, 300, 200);
                                                                                            cm.npc_SetForceMove("oid=5357064", -1, 300, 200);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom('#b米西蒂小姐？！！', 57, 0, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("你个骗子！！！", 37, 9401029, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNewEffects(12, [1000, -150, 130, 0, 0]);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=5358151"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.sendNormalTalk_Bottom("嗯？呃嗯？！！天！！！", 37, 9401032, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom('你，你们有什么事吗？', 37, 9401032, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("不用我们说，你也应该知道！交出报酬！或者还给我们捕获的怪物！", 37, 9401029, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("哎、哎呀，勇士们，都冷静点。", 37, 9401032, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("我……我有件……难以启齿的事情……呜……呜呜……（眼泪汪汪）", 37, 9401032, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#b喂，喂？", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=5358151"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("我们可不会被你蹩脚的演技所欺骗！", 37, 9401029, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("切，竟然说我是演的，太过分了吧。但是这可怎么办？我已经用掉了，就算想给你也没有了哦～", 37, 9401032, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#b……你用在哪里了？", 57, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("我为什么要说？", 37, 9401032, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#b你不光对我们，也对其他远征队做了同样的事吧？", 57, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("什么事？", 37, 9401032, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#b我说的是诈骗，诈骗！！严格来说是违法行为。", 57, 0, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("……我知道……但是……但是…… ", 37, 9401032, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#b… ", 57, 0, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("……我以后不会这样了，你们能放过我这一次吗？", 37, 9401032, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("呃呃呃！忍不了了！马上报警吧，队长！", 37, 9401029, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("哼，你去哪里报警？", 37, 9401032, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("呃呃！！！！！呼……我答应过队长不会再鲁莽行事的……", 37, 9401029, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("……你至少不再犯同样的错误。", 37, 9401030, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#b谢谢你，莫妮卡。", 57, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#b……我有一个好的想法。为了让米西蒂不再继续行骗，我要把她收编进我们远征队。", 57, 0, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("什么？！！怎么可以！收编这种骗子？必须马上把她交给马米！", 37, 9401029, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("这个决定不错。", 37, 9401030, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("拉尔夫连你也？", 37, 9401029, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#b不过你以后必须告诉我们你的苦衷。", 57, 0, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("我怎么想都觉得不对吧～嗯？又不是只骗了我们！连芽芽也上当了吧！", 37, 9401029, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("… ", 37, 9401032, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("看看，无话可说了吧？", 37, 9401029, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("队长，勇士们！虽然我犯下了错误，但只要你们愿意，我一定会为你们拼尽全力！", 37, 9401032, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b米西蒂，如果你加入远征队，我可以当作什么都没有发生过。不过你以后不要再说谎或者逃跑，你能答应我吗？", 57, 0, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("当然！我做梦都想拥有一群伙伴！", 37, 9401032, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=5358151"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("……这一定也是演技…… ", 37, 9401029, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b莫妮卡，你就相信我们一次。", 57, 0, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("……我知道了，队长。", 37, 9401029, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b那现在我们就是一个团队了，请不要忘记这一点。", 57, 0, true, true);
                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                    cm.warp(867147000, 0, true);
                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                    cm.updateInfoQuest(64755, "mCount=6;boxCount=8");
                                                                                                                                                                                    cm.forceCompleteQuest(64775);
                                                                                                                                                                                    cm.npc_LeaveField("oid=5357063");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5357063");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5357064");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5357064");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5357928");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5357928");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5357929");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5357929");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5358149");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5358149");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5358150");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5358150");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5358151");
                                                                                                                                                                                    cm.npc_LeaveField("oid=5358151");
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