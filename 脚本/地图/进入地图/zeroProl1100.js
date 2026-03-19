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
      cm.fieldEffect_ScreenMsg("zero/now");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2410001, "oid=1356760", 1344, -31, 10, 1294, 1394, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1356760", "summon", 0, 0);
      cm.npc_ChangeController(2410002, "oid=1356761", 1461, -31, 17, 1411, 1511, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1356761", "summon", 0, 0);
      cm.npc_ChangeController(2410010, "oid=1356762", 1254, -31, 25, 1204, 1304, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1356762", 'summon', 0, 0);
      cm.npc_ChangeController(2410010, "oid=1356763", 1532, -31, 16, 1482, 1582, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1356763", 'summon', 0, 0);
      cm.npc_ChangeController(2410010, "oid=1356764", 1625, -31, 18, 1575, 1675, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1356764", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你给我停下来，#p2410008#。你只能到这里。", 33, 2410002, false, true);
        cm.effect_Voice("Voice.img/Layla/15", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("胆敢违背了后方支援的命令，来到了这里……你到底想干什么？", 33, 2410001, true, true);
          cm.effect_Voice("Voice.img/Kaison/5", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……咳，我就当你是血气方刚想要继续战斗，就放过你一马。但是你还是回去吧，这里不是你该来的地方。", 33, 2410001, false, true);
              cm.effect_Voice("Voice.img/Kaison/6", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face3#那我应该去哪里？是一直在欺骗我的……你们所要去的#m321000100#吗？", 41, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/94", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("你在说什么！这里没有人要欺骗你！", 33, 2410001, true, true);
                  cm.effect_Voice("Voice.img/Kaison/7", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face3#哼，你该露出你的狐狸尾巴了。反正你也没想过让我活下来。放过我？你该不会是想在背后给我来一刀吧？", 41, 2410008, true, true);
                    cm.effect_Voice("Voice.img/Alpha/95", 100);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(2410005, "oid=1356792", 980, -335, 11, 930, 1030, 0, false, 0, false);
                      cm.npc_SetSpecialAction("oid=1356792", "summon", 0, 0);
                      cm.sendNormalTalk('……被……发现了？', 33, 2410005, true, true);
                      cm.effect_Voice("Voice.img/Simus/0", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#p2410005#只是为了防止万一而准备的，不要误会。快快放下武器，和我们一起回到#m321000100#吧。", 33, 2410001, true, true);
                        cm.effect_Voice("Voice.img/Kaison/8", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face2#别说傻话！你还以为我会这么傻傻地被你们欺骗吗？我已经很久没有吃你们发的那个药了！", 41, 2410008, true, true);
                          cm.effect_Voice("Voice.img/Alpha/96", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("咳……如果你继续反抗，那我只能用武力来制伏你！", 33, 2410001, true, true);
                            cm.effect_Voice("Voice.img/Kaison/9", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face3#武力？你想试一下就尽管放马过来吧。但是我警告你，我的实力不是你们所看到的那个。为了这个瞬间我把真正的实力隐藏了起来。", 41, 2410008, true, true);
                              cm.effect_Voice("Voice.img/Alpha/97", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("我先拖住他，拉尔拉队长！请你去把援军带过来！", 33, 2410001, true, true);
                                cm.effect_Voice("Voice.img/Kaison/10", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("你别得意！我的实力也不一般！", 33, 2410002, true, true);
                                  cm.effect_Voice("Voice.img/Layla/17", 100);
                                } else if (status === V++) {
                                  cm.npc_LeaveField("oid=1356760");
                                  cm.spawnMobLimit(9300747, 1, 1344, -25, 100);
                                  cm.npc_LeaveField("oid=1356761");
                                  cm.npc_LeaveField("oid=1356762");
                                  cm.spawnMobLimit(9300745, 1, 1254, -25, 100);
                                  cm.npc_LeaveField("oid=1356763");
                                  cm.spawnMobLimit(9300745, 1, 1532, -25, 100);
                                  cm.npc_LeaveField("oid=1356764");
                                  cm.spawnMobLimit(9300745, 1, 1625, -25, 100);
                                  cm.npc_LeaveField("oid=1356792");
                                  cm.spawnMobLimit(9300748, 1, 980, -25, 100);
                                  cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;