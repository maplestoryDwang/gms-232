var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#咦？我还是第一次见到穿成这样子的人呢。你看起来似乎并不是从“岛”那边过来的……难道是来自“大陆”的吗？", 37, 9110002, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("（“岛”？“大陆”？是这个世界的地名吗？）", 57, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("那、那个……我是从比较偏远的乡村过来的。我想请问一下，最近一段时间，你有没有在城镇周围发现什么不可思议的事情，或是有没有见到一些陌生的……也就是衣着和我差不多的人呢？", 57, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#要说奇怪的事情，我倒是想起来……最近我在这蘑菇神社附近看见了一群奇怪的人。", 37, 9110002, true, true, 1);
          } else {
            if (status === v++) {
              cm.askYesNo_Bottom("#face0#不管他们是不是人类，到底从何而来……这些存在威胁着我们的生命，可以请你去消灭他们，调查一下情况吗？", 37, 9110002, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("我去调查一下，说不定还能发现我一直在寻找的线索。", 57, 0, false, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#谢谢。详细情况等您回来之后再聊吧。", 37, 9110002, true, true, 1);
                } else if (status === v++) {
                  cm.forceStartQuest(57492, '');
                  cm.OnStartNavigation(800000102, 0, '', 57492);
                  cm.npc_LeaveField("oid=103676");
                  cm.npc_LeaveField("oid=103669");
                  cm.npc_LeaveField('oid=103670');
                  cm.npc_LeaveField('oid=103672');
                  cm.npc_LeaveField("oid=103673");
                  cm.npc_LeaveField('oid=103679');
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#怎么样？你去调查了那些奇怪的人吗？", 37, 9110002, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("虽然他们和我的穿着相似……但感觉并不像人类，一直在这附近徘徊。", 57, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("虽然不知道他是从哪里来的，但短时间内应该不会再危害这里了。", 57, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#谢谢，我总算能暂时放心一些了。", 37, 9110002, true, true, 1);
          } else if (status === v++) {
            cm.forceCompleteQuest(57492);
            cm.gainExp(8487);
            cm.dispose();
          }
        }
      }
    }
  }
}