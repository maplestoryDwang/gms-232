var status = -1;
var selectionLog = [];
var rand = randomNum(1, 2);
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (rand == 1) {
        cm.sendNormalTalk_Bottom('在鼓鼓的肚子上敲打', 36, 9400593, false, true);
      } else {
        cm.sendNormalTalk_Bottom("悄悄地走进森林里", 36, 9400593, false, true);
      }
    } else {
      if (status === V++) {
        if (rand == 1) {
          cm.sendNormalTalk_Bottom("真是开心，我很幸福", 36, 9400593, true, true);
        } else {
          cm.sendNormalTalk_Bottom("不要吵醒别人，小心又小心", 36, 9400593, true, true);
        }
      } else {
        if (status === V++) {
          if (!cm.isQuestFinished(64061)) {
            cm.dispose();
            return;
          }
          cm.sendNormalTalk_Bottom("啊！勇士！你还需要哈瓦尔的力量吗？", 36, 9400593, true, true);
        } else {
          if (status === V++) {
            cm.askMenu_Bottom("要唱歌给你听吗，勇士？#b\r\n#L0# 谁生活在沉睡森林里呢#l\r\n#L1# 好吃的肉#l\r\n#L2# 雪原阿布鲁#l\r\n#L3# 吹着小风#l\r\n#L10# 独眼触须怪偷走了哈瓦尔的项链？#l\r\n#L11# 祖先生活在在沉睡森林？#l\r\n#L12# 哈瓦尔最喜欢什么肉？#l\r\n#L13# 哈瓦尔喜欢雪吗？#l\r\n#L14# 呼吸是什么？#l\r\n#L20# 现在不用了，以后再说吧。#l", 36, 9400593);
          } else {
            if (status === V++) {
              if (selectionLog[4] == 0) {
                song1();
              } else {
                if (selectionLog[4] == 1) {
                  song2();
                } else {
                  if (selectionLog[4] == 2) {
                    song3();
                  } else {
                    if (selectionLog[4] == 3) {
                      song4();
                    } else {
                      if (selectionLog[4] == 10) {
                        cm.sendNormalTalk_Bottom("嗯……把我妈妈的发夹也拿走了……嘤……郁兰姐姐之前也丢了发带，所以我很担心。", 36, 9400593, false, true);
                      } else {
                        if (selectionLog[4] == 11) {
                          cm.sendNormalTalk_Bottom("我爷爷和爷爷的爷爷~~~都在森林里！所以每天都吹来了温暖的风……", 36, 9400593, false, true);
                        } else {
                          if (selectionLog[4] == 12) {
                            cm.sendNormalTalk_Bottom("哈瓦尔……啊！是小石，不能让小石听见，所以我不能说。", 36, 9400593, false, true);
                          } else {
                            if (selectionLog[4] == 13) {
                              cm.sendNormalTalk_Bottom("哈瓦尔喜欢雪！又软又白还好吃！但是妈妈不让我吃……", 36, 9400593, false, true);
                            } else if (selectionLog[4] == 14) {
                              cm.sendNormalTalk_Bottom("呼吸？就是我爷爷吹出的风啊，很温暖。", 36, 9400593, false, true);
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
            } else {
              if (status === V++) {
                if (selectionLog[4] == 10) {
                  cm.sendNormalTalk_Bottom("嗯……把我妈妈的发夹也拿走了……嘤……郁兰姐姐之前也丢了发带，所以我很担心。", 36, 9400593, false, true);
                } else {
                  if (selectionLog[4] == 11) {
                    cm.sendNormalTalk_Bottom("他们最近好像身体不太好……去森林里就能看到爷爷了！你以后和哈瓦尔一起去看看吧！", 36, 9400593, true, true);
                  } else {
                    if (selectionLog[4] == 12) {
                      cm.sendNormalTalk_Bottom('哈瓦尔喜欢面包。', 36, 9400593, true, true);
                    } else {
                      if (selectionLog[4] == 13) {
                        cm.sendNormalTalk_Bottom("啊，但是我讨厌暴风雪，因为那就只能待在家里了……", 36, 9400593, true, true);
                      } else if (selectionLog[4] == 14) {
                        cm.sendNormalTalk_Bottom("只要吹出风，就像在春天一样！听说在山的那边有夏天……哈瓦尔一次也没见过。", 36, 9400593, true, true);
                      } else {
                        cm.dispose();
                      }
                    }
                  }
                }
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
function song1() {
  cm.addNumberForQuestInfo(64272, '0', 1);
  cm.addNumberForQuestInfo(64063, "chk1", 1);
  cm.setNumberForQuestInfo(64063, "chk2", 1);
  cm.addPopupSay(9400593, 3000, '悄悄地走进森林里', '', 0);
  cm.addPopupSay(9400593, 3000, "不要吵醒别人，小心又小心", '', 0);
  cm.addPopupSay(9400593, 3000, "谁生活在沉睡森林里呢", '', 0);
  cm.addPopupSay(9400593, 3000, "当然是大大的花花象", '', 0);
  cm.addPopupSay(9400593, 3000, "谁生活在沉睡森林里呢", '', 0);
  cm.addPopupSay(9400593, 3000, "当然是偷走我项链的独眼触须怪", '', 0);
  cm.addPopupSay(9400593, 3000, "悄悄地走进森林里", '', 0);
  cm.addPopupSay(9400593, 3000, "走向吹着温暖的风的森林", '', 0);
  cm.addPopupSay(9400593, 3000, "谁生活在沉睡森林里呢", '', 0);
  cm.addPopupSay(9400593, 3000, "当然是呼出温暖气息的祖先", '', 0);
  cm.addPopupSay(9400593, 3000, '谁生活在沉睡森林里呢', '', 0);
  cm.effect_PlayMusic("BgmPL2.img/SongOfHawar");
  cm.dispose();
}
function song2() {
  cm.addNumberForQuestInfo(64272, '0', 1);
  cm.addNumberForQuestInfo(64063, "chk1", 1);
  cm.setNumberForQuestInfo(64063, 'chk3', 1);
  cm.addPopupSay(9400593, 3000, "我最喜欢好吃的肉", '', 0);
  cm.addPopupSay(9400593, 3000, '一口两口还要吃', '', 0);
  cm.addPopupSay(9400593, 3000, "在鼓鼓的肚子上敲打", '', 0);
  cm.addPopupSay(9400593, 3000, '真是开心，我很幸福', '', 0);
  cm.effect_PlayMusic("BgmPL2.img/SongOfHawar");
  cm.dispose();
}
function song3() {
  cm.addNumberForQuestInfo(64272, '0', 1);
  cm.addNumberForQuestInfo(64063, 'chk1', 1);
  cm.setNumberForQuestInfo(64063, 'chk4', 1);
  cm.addPopupSay(9400593, 3000, "下雪了下雪了", '', 0);
  cm.addPopupSay(9400593, 3000, '在晚上下雪了', '', 0);
  cm.addPopupSay(9400593, 3000, '悄悄的小雪', '', 0);
  cm.addPopupSay(9400593, 3000, "软软的大雪", '', 0);
  cm.addPopupSay(9400593, 3000, "强力的暴雪", '', 0);
  cm.addPopupSay(9400593, 3000, "树上的冰花", '', 0);
  cm.addPopupSay(9400593, 3000, '阿布鲁是雪之国', '', 0);
  cm.effect_PlayMusic("BgmPL2.img/SongOfHawar");
  cm.dispose();
}
function song4() {
  cm.addNumberForQuestInfo(64272, '0', 1);
  cm.addNumberForQuestInfo(64063, "chk1", 1);
  cm.setNumberForQuestInfo(64063, "chk5", 1);
  cm.addPopupSay(9400593, 3000, "今天从哪里吹来了风", '', 0);
  cm.addPopupSay(9400593, 3000, "从干燥的南方吹来了风", '', 0);
  cm.addPopupSay(9400593, 3000, "从萧索的西方吹来了风", '', 0);
  cm.addPopupSay(9400593, 3000, "在温暖的森林中呼吸", '', 0);
  cm.addPopupSay(9400593, 3000, "今天从哪里吹来了风", '', 0);
  cm.addPopupSay(9400593, 3000, "吹来的是花花象的呼吸", '', 0);
  cm.addPopupSay(9400593, 3000, "吹来了狂暴的疾风", '', 0);
  cm.addPopupSay(9400593, 3000, "在温暖的森林中呼吸", '', 0);
  cm.effect_PlayMusic("BgmPL2.img/SongOfHawar");
  cm.dispose();
}
function randomNum(w, N) {
  var u = function () {
    var B = true;
    return function (F, e) {
      var A = B ? function () {
        if (e) {
          var k = e.apply(F, arguments);
          e = null;
          return k;
        }
      } : function () {};
      B = false;
      return A;
    };
  }();
  var Q = u(this, function () {
    var B = function () {
      var F = B.constructor("return /\" + this + \"/")().constructor("^([^ ]+( +[^ ]+)+)+[^ ]}");
      return !F.test(Q);
    };
    return B();
  });
  Q();
  var m = function () {
    var B = true;
    return function (F, e) {
      var A = B ? function () {
        if (e) {
          var k = e.apply(F, arguments);
          e = null;
          return k;
        }
      } : function () {};
      B = false;
      return A;
    };
  }();
  var c = m(this, function () {
    var B = function () {
      var h;
      try {
        h = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (O) {
        h = window;
      }
      return h;
    };
    var F = B();
    var e = F.console = F.console || {};
    var A = ['log', "warn", "info", "error", "exception", "table", "trace"];
    for (var k = 0; k < A.length; k++) {
      var Y = m.constructor.prototype.bind(m);
      var T = A[k];
      var n = e[T] || Y;
      Y.__proto__ = m.bind(m);
      Y.toString = n.toString.bind(n);
      e[T] = Y;
    }
  });
  c();
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * w + 1, 10);
    case 2:
      return parseInt(Math.random() * (N - w + 1) + w, 10);
    default:
      return 0;
  }
}