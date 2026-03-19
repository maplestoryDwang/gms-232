var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
      cm.curNodeEventEnd(true);
      cm.effect_REPEAT("Effect/Direction16.img/effect/ozFamily/0", 1, 1, 0, 0, 0);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("而且, 我以我喜爱的童话书里的角色为原型为这座塔创造的守护者和管理员现在变得越来越强大, 这些家伙甚至把我视作敌人, 而我又很难将他们消灭......", 0);
          cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene7/0", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("这还不算。那些家伙也许是为了阻止外部的入侵, 甚至随心所欲地将起源之塔内部进行了拆除、改造。现在就连我这个塔的建造者也不知道什么地方被改造成了什么样。", 0);
            cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene7/1", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("你在起源之塔内探险的过程中, 能不能顺便教训教训那帮家伙? 它们处于每隔10层的位置, 而且还会直接出面阻止到达最后一层的入侵者。", 1);
              cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene7/2", 100);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else if (status === V++) {
                cm.forceCompleteQuest(42009);
                cm.warp(992000000, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;