package net.swordie.ms.life.android;

import net.swordie.ms.enums.AndroidEmoteType;

import java.util.HashMap;
import java.util.Map;

public class AndroidEmote {

    private static final Map<String, AndroidEmoteType> KEYWORD_MAP = new HashMap<>();

    static {
        //Official GMS Android's Emotes
        add(AndroidEmoteType.SMILE, "haha", "hoho");
        add(AndroidEmoteType.CRY, "boohoo");
        add(AndroidEmoteType.BEWILDERED, "whoa");
        add(AndroidEmoteType.BLAZE, "grr");
        add(AndroidEmoteType.VOMIT, "gross", "yuck");
        add(AndroidEmoteType.CHU, "smooch", "smoochie", "smoochies", "kiss", "kissy");
        add(AndroidEmoteType.LOVE, "i love you");
        add(AndroidEmoteType.GLITTER, "wow", "totally", "awesome", "yay");
    }
    private static void add(AndroidEmoteType emote, String... keywords) {
        for (String k : keywords) {
            KEYWORD_MAP.put(k, emote);
        }
    }
    public static AndroidEmoteType getEmotionFromMessage(String msg) {
        msg = msg.toLowerCase();

        for (Map.Entry<String, AndroidEmoteType> entry : KEYWORD_MAP.entrySet()) {
            if (msg.contains(entry.getKey())) {
                return entry.getValue();
            }
        }
        return null;
    }
}
