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
      if (cm.getNumberFromQuestInfo(64665, 'D') > 0) {
        var O = cm.getStringFromQuestInfo(500827, "accCheck").substring(0, 6);
        var b = cm.getNowTimeString(3).replaceAll('/', '');
        if (O !== b) {
          cm.setNumberForQuestInfo(500827, "start", 0);
          cm.setNumberForQuestInfo(500827, "MiniGameCount", 0);
          cm.setNumberForQuestInfo(500827, "accSum", 1810000);
          cm.setNumberForQuestInfo(500827, "accSum", 1810000);
          cm.setNumberForQuestInfo(500957, "instantPlayOver", 0);
          cm.setNumberForQuestInfo(500957, "instantPlayCount", 0);
          for (var V = 1; V <= 5; V++) {
            cm.setNumberForQuestInfo(500827, 'q' + V + "Set", 0);
          }
          var N = cm.randArray(1, 5, 3);
          for (var V = 1; V <= 3; V++) {
            cm.setNumberForQuestInfo(500827, 'q' + N[V - 1] + "Set", 1);
          }
        }
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk("\r\n咦，什么这是，这和刚刚学院又是不一样的地方？！", 5, 9100028, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n你好烦啊，巴鲁斯。看来这里应该是叫冒险岛的世界……", 5, 9100030, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n虽然不清楚每个人的情况，但好像只有我们到了这里。\r\n（嗯……这是游戏里吗？是什么游戏呢？）", 5, 9100027, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……你们到底是谁？", 3, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n我是老师罗兹瓦尔~\r\n到04月28日为止，如果所有人都能顺利地度过学院生活，说不定就能返回原来的世界~都理解了吗？~", 5, 9100025, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("\r\n#b#h0##k应该是这个世界的居民，要不要拜托他帮忙学院生活呢？毕竟'大家友好相处'是学院生活的规矩嘛", 5, 9100025, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("\r\n什么？辅导？\r\n……知道了。", 3, 0, true, true);
                } else if (status === V++) {
                  cm.setNumberForQuestInfo(64665, 'D', 1);
                  cm.setStandAloneMode(false);
                  cm.eventSKill(0);
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