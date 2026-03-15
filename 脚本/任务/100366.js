var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("嗨！你可以向我询问#b#ho#！#k\r\n#b金币哗啦啦云朵怪#k的相关内容。\r\n\r\n#L0##b#e金币哗啦啦云朵怪#n#k的相关内容！#l\r\n#L2##b#e在哪里#n#k可以乘坐？#l\r\n#L3##b#e特别礼物#n#k的相关内容！#l\r\n#L4##b#e活动时间#n#k是什么时候！#l\r\n\r\n#L5#我没有什么想知道的！#l", 0, 9062225)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n和#b金币哗啦啦云朵怪#k一起，能够享受到愉快的飞行。\r\n搭乘后我将会告诉你安全守则。", 5, 9062225, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n#e第一！#n 金币哗啦啦云朵怪是高空飞行骑宠，搭乘骑宠后使用#b二阶跳#k就可以开始高空飞行！\r\n使用#b方向键#k即可往各个方向移动！", 5, 9062225, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n#e第二！#n 搭乘中点击#b空格键#k可以分享更多的哗啦啦金币袋！剩余的金币可以在骑宠上实时显示，记得确认哦！\r\n但是！如果将#b空格键#k设置为跳跃键就无法跳跃了，记得在搭乘前后更改快捷键。", 5, 9062225, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n#e第三！#n 如果冒险岛因为意料外的问题而结束运行，金币哗啦啦云朵怪将会#b记住你的模样#k，代替你运转金币哗啦啦云朵怪。\r\n#b重新登录时#k#b骑宠也将根据记忆中你的模样#k分享剩余的哗啦啦金币袋，不要慌张~！#n#k", 5, 9062225, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#e第四！#n 搭乘金币哗啦啦云朵怪时，#b商城，冒险岛竞拍等#k各种活动的使用将受到限制，敬请谅解！#n#k", 5, 9062225, true, true);
                        status = -1
                    }
                }
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n只能在#b射手村#k、#b神木村#k和#b无名村#k搭乘。", 0, 9062225, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n你可以在我，#b软绵绵#k的身边看见#b金币哗啦啦云朵怪#k。\r\n点击金币哗啦啦云朵怪搭乘吧。", 0, 9062225, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n一个村庄中只有#b一个人#k可以搭乘。", 0, 9062225, true, true);
                status = -1
            }
        }
    }
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b特别礼物#k就是#i3018430:# #b#t3018430:##k！\r\n共搭乘#b金币哗啦啦云朵怪#k#b40次以上#k后即可获得！", 0, 9062225, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("你到目前为止搭乘#b金币哗啦啦云朵怪#k#b" + cm.getNumberFromQuestInfo(100368, "aNum") + "次#k啦！\r\n#r※ 可搭乘最大次数：499次", 0, 9062225, true, true);
            status = -1
        }
    }
}

function action分支4(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b金币哗啦啦云朵怪#k在\r\n#b2020年4月15日~2020年5月12日#n#k期间运营！\r\n每天只有在#b上午10时~晚上10时#k可以搭乘。", 0, 9062225, false, true);
        status = -1
    }
}

function action分支5(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("你真的什么都不想知道吗？", 0, 9062225, false, true)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100366.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};