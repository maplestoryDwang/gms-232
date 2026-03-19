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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -800, -455);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_Text(["#fn黑体##fs18#世界树的某处树枝……"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1540917, "oid=11953149", -1000, -460, 15, -1050, -950, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=11953149", "summon", 0, 0);
            cm.npc_ChangeController(1540924, "oid=11953150", -150, -390, 33, -200, -100, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=11953150", "summon", 0, 0);
            cm.npc_ChangeController(1540923, "oid=11953151", -70, -390, 34, -120, -20, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=11953151", 'summon', 0, 0);
            cm.npc_ChangeController(1540925, "oid=11953152", -60, -620, 7, -110, -10, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=11953152", "summon", 0, 0);
            cm.npc_ChangeController(1540924, "oid=11953153", -5, -390, 36, -55, 45, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=11953153", "summon", 0, 0);
            cm.npc_ChangeController(1540923, "oid=11953154", -250, -390, 32, -300, -200, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=11953154", "summon", 0, 0);
            cm.npc_ChangeController(1540918, "oid=11953155", 280, -390, 39, 230, 330, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=11953155", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("怎么回事……这些#r奇怪的树枝#k是？#b世界树#k肯定在戴米安被打败之际被一同#b净化#k了……", 37, 1540917, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1300, 1000, -300, -300);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("那些#b士兵#k聚集在那里啊……", 45, 1540917, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=11953149", 1, 450, 300);
                        cm.inGameDirectionEvent_AskAnswerTime(1800);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("各位难道听不到我让大家返回#b绯红#k的#r命令#k吗？赶紧#r返回#k营地吧。", 37, 1540917, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('额……额……', 37, 1540923, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我们……我们……不回去……#r懦弱的战士#k。", 37, 1540923, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这是什么意思，我们的远征#r失败#k了。\r\n如果现在不立刻回去，我将按照#r军法#k处置！", 37, 1540917, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("军法……？真是搞笑……对我们而言，法律只有一条，那便是#r“力量”#k。", 37, 1540923, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=11953154", -1, 20, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你实在是太懦弱了……\r\n#r戴米安#k终究也是因为无法摆脱和你一样的#r懦弱#k才惨败的……", 37, 1540923, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("大家都振作起来！\r\n难道你们还不知道盲目笃信力量的戴米安最后#r悲惨的结局#k吗！", 37, 1540917, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("懦弱的家伙……就因为#r有你这样的家伙#k，我们混血魔族才会需要承受如此大的痛苦……#r就因为你们这些家伙……#k", 37, 1540923, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=11953154", -1, 20, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=11953155", -1, 430, 300);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("阿尔提多……请回吧，我们会#r留在这里。#k", 37, 1540918, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("看来你还是清醒的啊……\r\n立刻和那些家伙一起归队吧，我不能再允许出现#r我们一族的牺牲#k了。", 45, 1540917, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("阿尔提多……我们会选择留在这里，是出于#r我们的意志#k。", 37, 1540918, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("戴米安所说的#b想要实现的梦想……#k\r\n创造一个不受压迫的我们#b混血魔族的世界#k的梦想……\r\n我们会在这个世界继续下去……", 37, 1540918, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("实在是听不懂人说话啊……连那么强大的戴米安都失败了……你们怎么可能战胜这里的战士！", 45, 1540917, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#r“那个力量”#k……没错……\r\n#r“那个力量”#k答应了我们……会帮我们实现我们的梦想。\r\n帮助我们在这里创造只属于我们的#r地上乐园#k……", 37, 1540918, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("呵呵……我们会借助那个力量，再次让#b“世界树”#k#r堕落#k下去……创造出所有人都#r臣服于我们混血魔族战士的那种世界#k的……呵呵……哇哈哈哈！", 37, 1540918, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("啊……难道是那样吗……\r\n难道#r魔剑之力#k还没有完全被消灭吗……", 45, 1540917, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我们会证明我们并没有错……\r\n你不也经常#r教导我们吗？#k没有什么战士会比心怀怨恨的我们混血魔族的战士更强大的！", 37, 1540923, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("好吧……正如你所言……也许，这一切并不能都算是#r魔剑的错#k。", 45, 1540917, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("将你们培养成这种#r战斗机器#k的，是包括我在内的所有混血魔族……\r\n是我们自己所#r播下的恶种#k……", 45, 1540917, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else if (status === V++) {
                                                                        cm.warp(105300304, 0, true);
                                                                        cm.npc_LeaveField("oid=11953149");
                                                                        cm.npc_LeaveField("oid=11953149");
                                                                        cm.npc_LeaveField("oid=11953150");
                                                                        cm.npc_LeaveField("oid=11953150");
                                                                        cm.npc_LeaveField("oid=11953151");
                                                                        cm.npc_LeaveField("oid=11953151");
                                                                        cm.npc_LeaveField("oid=11953152");
                                                                        cm.npc_LeaveField("oid=11953152");
                                                                        cm.npc_LeaveField("oid=11953153");
                                                                        cm.npc_LeaveField("oid=11953153");
                                                                        cm.npc_LeaveField("oid=11953154");
                                                                        cm.npc_LeaveField("oid=11953154");
                                                                        cm.npc_LeaveField("oid=11953155");
                                                                        cm.npc_LeaveField("oid=11953155");
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