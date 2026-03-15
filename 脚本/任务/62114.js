var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/62114.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("啊！这是通过测试的证物，#i3700310:##t3700310#。", 37, 9310532, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(16157, "point=289");
                cm.forceCompleteQuest(62114);
                cm.updateInfoQuest(62114, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 2);
                cm.sendNormalTalk_Bottom("我现在真是焦头烂额，所以都没能好好欢迎你。虽然这里有些危险，还充满了僵尸……但还是欢迎你来上海！希望你能在上海度过快乐的时光！要是你有什么疑问或困难，可以随时来找我！", 37, 9310532, true, true);
                cm.gainItem(3700310, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊……对了，你是否知道一个叫#p9310538#的哈夫林旅客呢？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊！豫园里应该只有一位哈夫林旅客！你进入村子后，就能看到整形外科，你到那儿附近找找就能找到了。", 37, 9310532, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那么，希望你在豫园里过得愉快！", 37, 9310532, true, true)
                        } else {
                            if (status === a++) {
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};