var status = -1;
var names = ["花蘑菇", '蜗牛', "漂漂猪", "绿水灵"];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = cm.getEventManager("副本_起源之塔");
  var w = parseInt(V.getProperty("stage36_stage"));
  if (w == 0) {
    action0(f, W, U, V);
  } else if (w <= 8) {
    action1(f, W, U, V, w);
  } else {
    actionEnd(f, W, U, V, w);
  }
}
function action0(f, W, U, V) {
  if (status < 0) {
    cm.dispose();
  } else {
    if (status === 0) {
      cm.sendNext("你是要前往下一层的探险家吗？这一层需要密码才能通过！按照密码攻击下面的怪物的话，就能打开这一层的门了。");
    } else {
      if (status === 1) {
        cm.sendNext("密码并不是一成不变的，所以每次的密码一定要记好了！");
      } else {
        if (status === 2) {
          cm.sendOk("准备好了的话，就跟我说一声吧。");
        } else if (status === 3) {
          V.setProperty("stage36_stage", 3);
          cm.dispose();
        } else {
          cm.dispose();
        }
      }
    }
  }
}
function action1(f, W, U, V, w) {
  if (status < 0) {
    cm.dispose();
  } else {
    if (status === 0) {
      V.setProperty("stage36_curBit", 1);
      cm.sendNext("我会把密码按顺序报出来。请记住我报出的密码，然后按顺序攻击下面的怪物。");
    } else {
      if (status === 1) {
        cm.sendOk("如果不小心攻击错误的话，就得重新来过了。");
      } else {
        if (status === 2) {
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(true, true);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === 3) {
            cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status > 3 && status <= 3 + w) {
              var N = V.getNumberProperty("stage36_password_" + (status - 3));
              cm.fieldEffect_ScreenMsg("Map/Effect2.img/aquaris/36F_" + N);
              cm.getMap().getWeatherEffectNotice(names[N - 1], 149, 60000, 1);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === 3 + w + 1) {
                cm.sendOk("你每输入一个，我都会提示你是否输入正确了。");
              } else if (status === 3 + w + 2) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(false, true);
                cm.getMap().getWeatherEffectNotice("请按顺序攻击怪物，并输入密码。你每输入一个，我都会提示你正确与否。为了让我跟上你的速度，请慢慢输入。", 149, 60000, 1);
                cm.dispose();
              } else {
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function actionEnd(f, W, U, V) {
  cm.sendOk("你已经正确输入了所有密码！我已经帮你打开了通往下一层的大门，加油吧！");
  cm.dispose();
}