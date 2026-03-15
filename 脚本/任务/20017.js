var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 2) {
            cm.sendNext("Hmm, there is nothing to worry about. This will be a breeze for someone your level. Muster your courage and let me know when you're ready.");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.sendNext("Hmm? #p1101002# sent you, huh? You must be the newbie that recently joined Cygnus Knights. Welcome, and nice to meet you！My name is #p1102000#. I''m the Training Instructor who trains all Noblesses like yourself. Of course, I'm not a human as you can tell.")
    } else {
        if (status == 1) {
            cm.sendNextPrev("We are called Piyos. You''ve seen #p1101001# who is at the Empress''s side all the time, haven't you? Piyos are of the same family as #p1101001#, but we belong to different types. Of course, you haven't seen any of us since we only live in Ereve. You'll get used to Piyos in no time.")
        } else {
            if (status == 2) {
                cm.sendNextPrev("Oh, and did you know that there are no monsters in Ereve? Not even a smidgeon of evil dare enter Ereve. But don't you worry. You'll be able to train with illusory monsters created by #p1101001# called Mimis.")
            } else {
                if (status == 3) {
                    cm.askAcceptDecline("You seem prepared！Looking at what you've accomplished, I think you should jump right into hunting more advanced Mimis. How about you hunt #b15 #r#o100122#s in #m130010100##k#k? Use the portal on the left to reach the #bTraining Forest II#k.")
                } else {
                    if (status == 4) {
                        cm.hireTutorMsg(12);
                        cm.forceStartQuest(20020);
                        cm.forceCompleteQuest(20100);
                        cm.forceStartQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {};