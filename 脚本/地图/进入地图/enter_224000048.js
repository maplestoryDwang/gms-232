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
      cm.npc_ChangeController(2074100, "oid=2598298", -2188, -70, 134, -2238, -2138, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=2598298", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("#face0#要是小荳变得勤奋老实，怠惰宝玉也会脱落的吧？\r\n哎哟，这次的事情可真是复杂啊。", 37, 2074100, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#可也算是跨出了第一步嘛~\r\n等小荳回来，得多多表扬她，任何人在跌倒的时候都需要鼓励……\r\n那……我们就等小荳回来吧？", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(2074143, "oid=2598329", -2324, -74, 132, -2374, -2274, 1, false, 500, false);
            cm.npc_SetSpecialAction("oid=2598329", 'summon', 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=2598298", -1);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2598298"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#小荳啊啊啊啊！\r\n工作进行得还顺利吗？哎哟喂啊，瞧瞧你的脸，看把你给累的啊。", 37, 2074100, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哈……哎，是挺累的。\r\n今天真的是，好久没有做这么多活了。", 37, 2074143, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#做得好，做得好，我们小荳。\r\n很累吧？辛苦你了呢，哎哟哟。\r\n#b#h0##k？你倒是也夸她几句啊。", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.askMenu_Bottom("#face0#'等小荳回来，得多多表扬她。'\r\n#b(到底说什么好呢？)#k\r\n\r\n#g#L0#做得好，真的，做得好。#l\r\n#g#L1#你付出这么多努力，日后肯定会有收获的。#l", 37, 2074100);
                      } else {
                        if (status === V++) {
                          cm.updateInfoQuest(30439, "choose=1");
                          cm.sendNormalTalk_Bottom("做得好，真的，做得好。", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#…………", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……这就算完了？", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#真是平淡啊，真是的。", 37, 2074100, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我可是……出自真心的。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("是，谢谢。\r\n哎……有点累了呢。\r\n我先去休息了。", 37, 2074143, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#好的好的，你累了吧？赶紧进去休息吧。\r\n那~我们也走吧~", 37, 2074100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=2598329");
                                        cm.sendNormalTalk_Bottom("#face0#嗯……我还有点不安来着……\r\n想让怠惰宝玉脱落可真是不容易吧？", 37, 2074100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#哎~还有问题是……我也受到了影响……\r\n啊……不管去哪儿都觉得烦，我还是先休息一会儿吧。", 37, 2074100, true, true);
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
                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                  cm.effect_Text(["#fn黑体##fs18#第二天早上#fs15##fn黑体#小荳的家"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#哎哟？我还真的在这里睡着了啊。\r\n现在可是早上了，我得先去叫醒小荳的。", 37, 2074100, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.updateInfoQuest(30439, "gExpCheck=1;choose=1");
                                                      cm.gainExp(198883);
                                                      cm.forceStartQuest(30439, '');
                                                      cm.forceCompleteQuest(30439);
                                                      cm.inGameDirectionEvent_AskAnswerTime(400);
                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                    } else if (status === V++) {
                                                      cm.dispose();
                                                      cm.warp(224000000, 15, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;