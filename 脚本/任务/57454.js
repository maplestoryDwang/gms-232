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
            cm.sendNormalTalk_Bottom("#face0#至今为止，神那作为联合军的一员，已经立下了汗马功劳。特别是来到冒险岛后，你的功绩比其他任何人都更为耀眼。所以，我才有个任务想要麻烦神那你去帮忙完成。", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#我希望你能担任先锋队队长。也就是要最先突入敌阵，搅乱敌人的阵脚，并帮忙确保我方人马的突入路线。这个任务非常危险，但只有实力超群的人才能挑起这个重担。神那，你愿意接受先锋队队长这个职务吗？", 37, 9130000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#啊哈哈，我已经可以预想到我们的胜利了。有你在，我们就放心了。好了，那就交给你了。请你从本能寺正门突入，并搅乱敌人的阵脚吧。只要击倒200名下级武士应该就足够了。", 37, 9130000, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(57454, "");
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57454.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#神那。打得还痛快吗？", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57454);
                cm.gainExp(7261077);
                cm.sendNormalTalk_Bottom("#face0#啊哈哈，你真是太厉害了！哪怕是待在我方阵营里，都能看到敌人手忙脚乱的样子。将先锋队队长一职交给神那你来负责，真是太正确了。", 37, 9130000, true, true);
                cm.dispose()
            }
        }
    }
};