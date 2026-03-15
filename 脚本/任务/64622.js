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
            cm.sendNormalTalk_Bottom("#face2#嗯，这个很新鲜呢！还有今天早上摘的番茄呢。", 37, 9400925, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b你吃的还真……香啊。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#嗯……这么说来，肯定会有吃沙拉的狼人啊！", 37, 9400923, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#如果你们还是信不过我，那我就吃#t2010001:#给你们看看吧？因为我吃了马上就会全身过敏，起荨麻疹。", 37, 9400925, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b那个是不是太过了？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#有什么过的，就是得确认才行啊！你去吧，#h0#，买10个#t2010001:# 来。", 37, 9400923, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(64622, "");
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
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
            cm.dispose();
            cm.warp(871000017, 0)
        }
    }
};