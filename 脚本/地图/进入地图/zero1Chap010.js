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
      cm.npc_ChangeController(2400012, 'oid=24701', 462, -230, 34, 412, 512, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=24702", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=24703", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=24704", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, 'oid=24705', 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=24706", 540, -275, 49, 522, 590, 1, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=24707", 389, -260, 56, 339, 439, 1, false, 0, false);
      cm.npc_ChangeController(2400019, 'oid=24708', 285, -230, 34, 235, 335, 0, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=24709', 886, -298, 146, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=24710", 364, 5, 4, 314, 414, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("好的，那么现在可以开始占卜寻找女神之泪了？！怎么样，#p2400008#神官？都准备好了吗？", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("是的，马上就可以开始了。那么我就开始了。", 33, 2400008, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……感觉到时间之力了，总共有#b5个碎片#k……", 33, 2400008, false, true);
              cm.effect_REPEAT("Effect/Direction13.img/effect/zero/seaching/0", 1, 1, 1, 0, 0);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("感觉比较微弱的地方，很难定位精确的位置……", 33, 2400008, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("反正也不是一次全都能找到的，先从最明显的开始寻找吧。", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("好的，那么先找找最明显的……", 33, 2400008, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                      cm.effect_REPEAT("Effect/Direction13.img/effect/zero/seaching/0", 1, 0, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk('找到了。', 33, 2400008, false, true);
                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(320000000, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;