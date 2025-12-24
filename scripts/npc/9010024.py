#  9010024  | Settings NPC

from net.swordie.ms.client.jobs.legend import SkillStealManager
from net.swordie.ms.constants import JobConstants
from net.swordie.ms.constants import QuestConstants


def sel_stylish_kill_type():
    sk_sel = sm.sendNext("Not a fan of your current Combo Kill Message's looks eyh?\r\n"
                         "Sure, Let's change it.#b\r\n"
                         "#L0#Default#l\r\n"
                         "#L1#Halloween#l\r\n"
                         "#L2#Colourful#l\r\n"
                         "#L3#Chinese New Year#l\r\n"
                         "#L4#Honey#l\r\n"
                         "#L5#Splash Event#l\r\n"
                         "#L6#Invisible#l\r\n"
                         ""
                         )
    if 0 <= sk_sel <= 6:
        chr.setComboCountSkinType(sk_sel)


def sel_custom_screen_effect_on_off():
    qm = chr.getQuestManager()
    q = qm.getOrCreateQuestById(QuestConstants.SW_CUSTOM_EFFECT)
    key = "NoEffect"
    if q.hasProperty(key) and q.getProperty(key) == "1":
        q.setProperty(key, "0")
        chr.chatMessage("Custom Screen Effects have been turned on.")
    else:
        q.setProperty(key, "1")
        chr.deactivateCustomEffect()
        chr.chatMessage("Custom Screen Effects have been turned off.")


def sel_loadout_preset():
    added_str = ""
    for tab in range(1, 6):
        skillId = SkillStealManager.getPresetChosenSkillByTab(chr, tab)
        if skillId == 0:
            added_str += "{0}.\t[Empty]\r\n".format(tab)
        else:
            added_str += "{1}.\t#s{0}##q{0}#\r\n".format(skillId, tab)


    sel = sm.sendAskYesNo("I will allow you to save 1 preset of all your equipped stolen skills!\r\n"
                    "You can quick change between your selected equipped stolen skills and your saved preset, "
                    "using #s20031211##q20031211#.\r\n" # Ghostwalk
                    "\r\n"
                    "Your current saved preset:\r\n"
                    "{}"
                    "\r\n"
                    "\r\n"
                    "Do you want to save your current equipped stolen skills?".format(added_str))
    if sel:
        SkillStealManager.saveCurrentChosenSkills(chr)



def sel_toggle_df_orbs():
    qm = chr.getQuestManager()
    q = qm.getOrCreateQuestById(QuestConstants.SW_DEMON_SLAYER_DF_ORBS)
    key = "NoEffect"
    if q.hasProperty(key) and q.getProperty(key) == "1":
        q.setProperty(key, "0")
        chr.chatMessage("Demon Fury Orbs have been turned on.")
    else:
        q.setProperty(key, "1")
        chr.chatMessage("Demon Fury Orbs have been turned off.")



string = "I am the settings Npc. What would you like to change?#b\r\n" \
         "\r\n" \
         "#L0#Combo Kill Skin#l\r\n" \
         "#L1#Custom Screen Effects#l\r\n"
if JobConstants.isPhantom(chr.getJob()):
    string += "#L1337#Loadout Preset#l\r\n"
if JobConstants.isDemonSlayer(chr.getJob()):
    string += "#L1338#Toggle Demon Fury Orbs#l\r\n"

sel = sm.sendNext(string)
if sel == 0:
    sel_stylish_kill_type()

elif sel == 1:
    sel_custom_screen_effect_on_off()

elif sel == 1337:  # Phantom Loadout Presets
    sel_loadout_preset()

elif sel == 1338:  # Toggle DF Orbs
    sel_toggle_df_orbs()