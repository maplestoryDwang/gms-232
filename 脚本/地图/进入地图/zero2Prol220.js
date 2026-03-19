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
      cm.npc_ChangeController(2400012, "oid=24120", 725, -189, 39, 675, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=24121", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=24122", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=24123", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=24124", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=24125", 215, -230, 34, 165, 265, 0, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=24126", 520, -230, 34, 470, 556, 1, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=24127", 398, -269, 36, 348, 448, 0, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=24128", 886, -298, 146, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=24129", 362, 5, 4, 312, 412, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("圣物就在这里……叫做#b神木村#k的地方。", 33, 2400008, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("这里是龙族和哈夫林共存的地方，强大的龙族守护着哈夫林，而哈夫林帮助龙族孵化龙蛋……", 33, 2400008, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("不过在镜世界里这个地方会变成什么样，我们就不知道了。虽然这些人都是很和善的……但是在镜世界中也有可能不同，会主动攻击也说不定呢……。", 33, 2400008, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("反正，两位要多加小心。", 33, 2400008, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face2#是嘛……也有可能是神官们误会了。反正我们对冒险岛世界和镜世界一无所知，恐怕也感觉不到什么区别。", 41, 2400005, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face2#难说#p2410000#也在寻找女神之泪……但是#p2410000#估计不知道圣物的存在，这么看来寻找圣物相对来说危险最小。当然，我们还是得时刻小心。", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("……要提防陌生的东西，这是理所当然的……", 41, 2400006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("额，你还能说的出这么有道理的话哟？", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……是嘛？", 41, 2400006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("那么就决定，就去神木村吧？现在就走。", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk('#b(点头)', 41, 2400006, true, true);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(321190230, 0, false);
                            }
                          }
                        }
                      }
                    }
                  }
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