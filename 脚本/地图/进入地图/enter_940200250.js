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
      cm.npc_ChangeController(3003314, "oid=201023", -700, 165, 55, -743, -650, 1, true, false);
      cm.npc_ChangeController(3003315, "oid=201024", 424, -651, 0, 374, 429, 1, false, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -740, 180);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), -797, 114);
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.npc_ChangeController(3003313, "oid=1833030", -867, 115, 54, -917, -817, 0, true, 1000, false);
          cm.npc_SetSpecialAction("oid=1833030", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
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
                cm.sendNormalTalk_Bottom("#face0#我们石精灵，原本在地下四处转悠，可突然水流变得湍急起来，一下子就被卷跑了。", 37, 3003314, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#清醒过来才发现，已经卡在了树根里，这些树根，长得实在是太大了，精灵之树应该也一样吧。", 37, 3003314, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……还有，哦，还有……一段重要的话要说来着……千万不能忘了来着……", 37, 3003314, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#还，还有我们！", 37, 3003315, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 250, -530);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3300);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#嗯，都卡在树根之间了，不过有点不好意思的是……树根的那边全都是水，屁股好凉啊……", 37, 3003315, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#哦，那如果把卡在里面的石精灵全都拔出来，水就会再次……", 37, 3003301, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#额，不过实在是太高了吧，要是能把什么东西堆起来，踩在上面爬上去……", 37, 3003301, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#如果能将洞穴里的朋友们集齐也许可行，额，洞穴里还有些其他朋友，他们也许也和我们一样，被卡在了树根里。", 37, 3003314, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我们的朋友加起来总共是十一个，一、二、三……消失的朋友是七个，要是能救他们出来，那实在是感激不尽，我们也会很感动的。", 37, 3003314, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2# #b#ho##k，看来还是有希望让水回流的，我们去洞穴里转转，想办法救石精灵出来吧。", 37, 3003301, true, true);
                                    } else if (status === V++) {
                                      cm.dispose();
                                      cm.warp(450005400, 3, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;