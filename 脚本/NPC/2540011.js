var status = -1;
function start() {
  action(1, 0, 0);
}
var 问题 = ["在第 1 层，你击杀了多少只绿水灵？", "在第 4 层，你破坏了几次平衡？", "在第 6 层，你击杀了多少只怪物？", "在第 8 层，你击杀了多少只怪物？", "在第 9 层，你失败了多少次？", "在第 11 层，你击杀了多少只怪物？", "在第 13 层，你击杀了多少只怪物？", "在第 16 层，你击杀了多少只怪物？", "在第 21 层，你击杀了多少只怪物？", "在第 23 层，你失败了多少次？", "在第 26 层，你击杀了多少只怪物？", "在第 31 层，你击杀了多少只怪物？", "在第 31 层，你遇到了几只精灵？", "在第 31 层，你惹恼了几只精灵？", "在第 32 层，你击杀了多少只怪物？", "在第 33 层，你总共进行了几次传送？", "在第 39 层，你总共回答了几次问题？", "在第 39 层，你总共答错了几次问题？"];
var 答案选项 = ["stage1_kill", "stage4_unbalanced", "stage6_kill", "stage9_fail", "stage11_kill", "stage13_kill", "stage16_kill", "stage21_kill", "stage23_fail", "stage26_kill", "stage31_kill", "stage31_fairy_summon", "stage31_angry", "stage32_kill", "stage33_teleport", "stage39_total", "stage39_wrong_total"];
var number = 0;
function action(K, a, f) {
  status++;
  var t = cm.getEventManager("副本_起源之塔");
  if ("clear" === t.getProperty("stage43")) {
    actionEnd(K, a, f, t);
  } else {
    if ('fight' === t.getProperty("stage43")) {
      action2(K, a, f, t);
    } else if ("ask" === t.getProperty("stage43")) {
      action1(K, a, f, t);
    } else {
      action0(K, a, f, t);
    }
  }
}
function action0(K, a, f, t) {
  if (status < 0) {
    cm.dispose();
  } else {
    if (status === 0) {
      cm.sendNext("想要通过这一层的话，必须要通过探险的考验。只有答对我的5道问题，才能允许你前往下一层。");
    } else {
      if (status === 1) {
        cm.sendNext("测试内容将以你目前为止探索的起源之塔的记录为基础进行。一旦答错，你就要去打猎下方的怪物，然后才能继续考验。");
      } else {
        if (status === 2) {
          cm.sendOk("准备好了的话，就跟我说一声吧。");
        } else if (status === 3) {
          t.setProperty("stage43", "ask");
          cm.dispose();
        } else {
          cm.dispose();
        }
      }
    }
  }
}
function action1(K, a, f, t) {
  if (status < 0) {
    cm.dispose();
  } else {
    if (status === 0) {
      var y = t.getNumberProperty("stage43_count") + 1;
      t.setProperty("stage43_count", y);
      var M = "那么，这是第" + y + "次测试。\r\n";
      M += "#h #，你这次来到起源之塔探险时，发生的事情中……\r\n\r\n";
      number = randomNum(0, 问题.length - 1);
      M += '#b' + 问题[number] + "\r\n";
      M += "#r#e填写回答的答案。";
      cm.askText(M);
    } else {
      if (status === 1) {
        var n = parseInt(cm.getText());
        var Q = t.getNumberProperty(答案选项[number]);
        if (n == Q) {
          var q = t.getNumberProperty("stage43_right") + 1;
          t.setProperty("stage43_right", q);
          if (q == 5) {
            t.setProperty('stage43', 'clear');
            cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
            cm.sendOk("回答正确！你已经达到了考验的要求。通往下一层的门给你打开了。");
            cm.getMap().getWeatherEffectNotice("你居然通过了弗雷塔的测试，挺厉害的嘛？赶快前往第44层吧。", 147, 30000, 1);
          } else {
            cm.sendOk("回答正确！你已经答对 #r#e" + q + " #k#n道题了。准备好了的话，就继续下一个问题吧。");
          }
        } else {
          var y = t.getNumberProperty("stage43_count");
          cm.sendOk("回答错误！正确答案是：#r#e" + Q + "\r\n\r\n#k#n作为惩罚，你必须要去狩猎" + y * 10 + "只怪物才能再次回答问题！");
          cm.getMap().getWeatherEffectNotice("回答错误！作为惩罚，你必须要去狩猎" + y * 10 + "只怪物才能再次回答问题！", 148, 30000, 1);
          t.setProperty("stage43", "fight");
          t.setProperty("stage43_kill", 0);
        }
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function action2(K, a, f, t) {
  var y = t.getNumberProperty("stage43_count");
  cm.sendOk("你对自己的探险过程居然都不放在心上啊。作为惩罚，你必须要去狩猎" + y * 10 + "只怪物才能再次回答问题！");
  cm.dispose();
}
function actionEnd(K, a, f, t) {
  cm.sendOk("你已经通过了我的考验。向更深处进发吧。");
  cm.dispose();
}
function randomNum(K, a) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * K + 1, 10);
    case 2:
      return parseInt(Math.random() * (a - K + 1) + K, 10);
    default:
      return 0;
  }
}