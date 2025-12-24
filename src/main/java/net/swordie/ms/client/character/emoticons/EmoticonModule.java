package net.swordie.ms.client.character.emoticons;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 20/06/2020.
 *
 * @author Asura
 */
public class EmoticonModule {

    // Utils
    public static int getFirstFreePosition(Char chr) {
        List<Integer> posList = chr.getEmoticons().stream().map(Emoticon::getPosition).collect(Collectors.toList());
        if (posList.size() == 0) {
            return 1; // if empty, grab first slot.
        }
        for (int i = 1; i <= GameConstants.EMOTICON_SLOTS; i++) {
            if (!posList.contains(i)) {
                return i;
            }
        }
        return 0; // represents a full favourite tab.
    }

    public static Emoticon getEmoticonByPos(Char chr, int pos) {
        return chr.getEmoticons().stream().filter(e -> e.getPosition() == pos).findFirst().orElse(null);
    }

    public static Emoticon getEmoticonById(Char chr, int id) {
        return chr.getEmoticons().stream().filter(e -> e.getEmoticonId() == id).findFirst().orElse(null);
    }

    public static int getFirstFreePositionEmoticonShortcut(Char chr) {
        List<Integer> posList = chr.getEmoticonShortcuts().stream().map(EmoticonShortcut::getPosition).collect(Collectors.toList());
        if (posList.size() == 0) {
            return 1; // if empty, grab first slot.
        }
        for (int i = 1; i <= GameConstants.EMOTICON_SHORTCUT_SLOTS; i++) {
            if (!posList.contains(i)) {
                return i;
            }
        }
        return 0; // represents a full favourite tab.
    }

    public static EmoticonShortcut getEmoticonShortcutByPos(Char chr, int pos) {
        return chr.getEmoticonShortcuts().stream().filter(es -> es.getPosition() == pos).findFirst().orElse(null);
    }

    public static EmoticonShortcut getEmoticonShortcutById(Char chr, int id) {
        return chr.getEmoticonShortcuts().stream().filter(es -> es.getEmoticonId() == id).findFirst().orElse(null);
    }



    // Favourite Tab
    public static void addEmoticon(Char chr, int emoticonId) {
        int toPos = getFirstFreePosition(chr);
        if (toPos <= 0) {
            return;
        }
        Emoticon emoticon = new Emoticon(emoticonId, toPos);
        chr.getEmoticons().add(emoticon);
        chr.write(WvsContext.emoticonResult(EmoticonType.AddEmoticon, emoticonId, (short) 0, (short) toPos, ""));
    }

    public static void removeEmoticon(Char chr, int emoticonId) {
        Emoticon emoticon = getEmoticonById(chr, emoticonId);
        if (emoticon == null) {
            return;
        }
        chr.removeEmoticon(emoticon);
        chr.write(WvsContext.emoticonResult(EmoticonType.RemoveEmoticon, emoticonId, (short) 0, (short) 0, ""));
    }

    public static void moveEmoticon(Char chr, short fromPos, short toPos) {
        Emoticon fromEmoticon = getEmoticonByPos(chr, fromPos);
        Emoticon toEmoticon = getEmoticonByPos(chr, toPos);

        if (fromEmoticon != null) {
            fromEmoticon.setPosition(toPos);
        }
        if (toEmoticon != null) {
            toEmoticon.setPosition(fromPos);
        }

        chr.write(WvsContext.emoticonResult(EmoticonType.MoveEmoticon, 0, fromPos, toPos, ""));
    }



    // Emoticon Shortcuts
    public static void addEmoticonShortcut(Char chr, int emoticonId, String shortcut) {

        int toPos = getFirstFreePositionEmoticonShortcut(chr);

        EmoticonShortcut es = new EmoticonShortcut(emoticonId, shortcut, toPos);
        chr.getEmoticonShortcuts().add(es);
        chr.write(WvsContext.emoticonResult(EmoticonType.AddEmoticonShortcut, emoticonId, (short) 0, (short) toPos, shortcut));
    }

    public static void removeEmoticonShortcut(Char chr, int fromPos) {
        EmoticonShortcut emoticonShortcut = getEmoticonShortcutByPos(chr, fromPos);
        if (emoticonShortcut == null) {
            return;
        }
        chr.removeEmoticonShortcut(emoticonShortcut);
        chr.write(WvsContext.emoticonResult(EmoticonType.RemoveEmoticonShortcut, emoticonShortcut.getEmoticonId(), (short) fromPos, (short) 0, ""));
        for (EmoticonShortcut em : chr.getEmoticonShortcuts()) {
            if (em.getPosition() > fromPos) {
                em.setPosition(em.getPosition() - 1);
            }
        }
    }

    public static void moveEmoticonShortcut(Char chr, int fromPos, int toPos) {
        EmoticonShortcut fromEmoticonShortcut = getEmoticonShortcutByPos(chr, fromPos);
        EmoticonShortcut toEmoticonShortcut = getEmoticonShortcutByPos(chr, toPos);

        if (fromEmoticonShortcut != null) {
            fromEmoticonShortcut.setPosition(toPos);
        }
        if (toEmoticonShortcut != null) {
            toEmoticonShortcut.setPosition(fromPos);
        }

        chr.write(WvsContext.emoticonResult(EmoticonType.MoveEmoticonShortcut, 0, (short) fromPos, (short) toPos, ""));
    }
}
