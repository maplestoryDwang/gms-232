# Stealing Queen's Order of Silk
# 3941
# Karcasa (2101013)

from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

karcasa = 2101013
tigun = 2101004
isTigun = sm.getnOptionByCTS(CharacterTemporaryStat.Morph) == 6

sm.setSpeakerID(karcasa)
if isTigun:
    sm.sendNext("...aren't you #p" + repr(tigun) + "#? "
    "Long time! Thankfully, I was able to secure the silk that the queen has been desperately looking for. "
    "As usual, the item is the finest you can find in this world... but why are you sweating so much? #b\r\n"
    "#L0#(altering voice) No, it's just the sun...#l\r\n")
    sm.sendNext("Well, since when was Ariant NOT hot? "
    "It's always been like this, and I thought you never seemed to mind the heat, but... Why is your face rapidly turning red? "
    "Are you okay? #b\r\n"
    "#L0#(altering voice) I, I am okay. Don't worry about me...#l\r\n")
    sm.sendNext("Are you sure you are okay? #p" + repr(tigun) + "#, you look like you are not feeling too well. "
    "Do you need some medicine? I have some cold medicine from El Nath. I'll sell it to you for cheap. #b\r\n"
    "#L0#I told you I am fine!#l\r\n")
    response = sm.sendAskAccept("Are you sure? But the weird thing is you sound much different from the norm. "
    "Are you sure you don't have the cold? I mean, you are not acting like yourself at all. "
    "Normally you'd always bargain hard for Lidium Ore, and... are you really #p" + repr(tigun) + "#?")
    if response:
        sm.sendNext("You don't act like you normally would. Normally, you'd be much more talkative than this... "
        "Is there something going on? Wait... how come your face is turning redder and redder?"
        "You must be enraged at something. I'm sorry, I'll bring the silk right now. Please wait.")
        sm.createQuestWithQRValue(3941, "1")
    else:
        sm.sendSayOkay("Hm. Come back when you're feeling better, alright?")
else:
    sm.sendSayOkay("What is it? You're looking for the Queen's silk? You know I can't just give that to some stranger, right?")