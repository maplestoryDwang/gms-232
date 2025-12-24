package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created on 24/06/2021.
 *
 * Used for Swordie forbidden words.
 * These names will be banned from usage in features such as Megaphones/Chat/Character Creation
 *
 * This class is used for reading this forbidden words list.
 *
 * @author Asura
 */
public class ForbiddenWordsData {

    private final static List<String> forbiddenWordsChat = new ArrayList<>(); // words that are forbidden in chat usages
    private final static List<String> forbiddenWordsIGN = new ArrayList<>(); // words that are forbidden as IGNs.


    public static boolean isForbiddenChat(String chat) {
        if (forbiddenWordsChat.size() <= 0) {
            return false;
        }

        // Preparing chat for pattern matching
        //
        var sanitisedChat = chat.replaceAll("[^a-zA-Z0-9#@$ ]", "").replace(" ", ""); // remove most special characters & spaces
        //


        // Building pattern from 'forbiddenWords'
        //
        var sb = new StringBuilder("(");
        var i = 0;
        for (var fw : forbiddenWordsChat) {
            sb.append(fw);

            if (i < forbiddenWordsChat.size() - 1) {
                sb.append("|");
            }

            i++;
        }
        sb.append(")");
        var regex = sb.toString();
        //


        Pattern p = Pattern.compile(regex);
        Matcher m = p.matcher(sanitisedChat);

        return m.find();
    }

    public static boolean isForbiddenIGN(String name) {
        if (forbiddenWordsIGN.size() <= 0) {
            return false;
        }

        return forbiddenWordsIGN.stream().anyMatch(fw -> fw.equalsIgnoreCase(name));
    }

    private static void loadForbiddenWords() {
        JSONParser parser = new JSONParser();
        try (FileReader reader = new FileReader(ServerConstants.LOADINS_DIR + "/ForbiddenWords.json")) {
            JSONObject obj = (JSONObject) parser.parse(reader);

            // Chat
            var chatObj = (JSONArray) obj.get("chat");
            chatObj.forEach(fw -> forbiddenWordsChat.add((String) fw));

            // IGN
            var ignObj = (JSONArray) obj.get("ign");
            ignObj.forEach(fw -> forbiddenWordsIGN.add((String) fw));

        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }

    }

    public static void main(String[] args) {
        loadForbiddenWords();

        List<String> l = new ArrayList<>();

        l.add("discord: qop#9224 for vouches and details.bonus 16kmlg");
        l.add("discord: qop # 9224 for vouches and details.bonus 16kmlg");
        l.add("discord: q'op'#92'2'4 for vouches and details.bonus 16kmlg");
        l.add("discord: qo.p.#9.2.24 for vouches and details.bonus 16kmlg");
        l.add("discord: qo-p#9-224 for vouches and details.bonus 16kmlg");
        l.add("discord: qo-p#92-24 for vouches and details.bonus 16kmlg");
        l.add("discord: qop#9+224 for vouches and details.bonus 16kmlg");
        l.add("discord: qo[p#[92]24 for vouches and details.bonus 16kmlg");
        l.add("discord: q[op#[9224 for vouches and details.bonus 16kmlg");
        l.add("discord: q,o,p,#,9,2,2,4 for vouches and details.bonus 16kmlg");
        l.add("discord: q}op}#}9}2}24} for vouches and details.bonus 16kmlg");
        l.add("discord: qo|p#9|22|4 for vouches and details.bonus 16kmlg");
        l.add("discord: q)op)#9)224 for vouches and details.bonus 16kmlg");
        l.add("discord: qo:p#9:22:4 for vouches and details.bonus 16kmlg");
        l.add("discord: q>op<#92<2>4 for vouches and details.bonus 16kmlg");
        l.add("discord: qo?p#?922?4 for vouches and details.bonus 16kmlg");
        l.add("discord: q!op!#92!24 for vouches and details.bonus 16kmlg");
        l.add("discord: q~op#~922~4 for vouches and details.bonus 16kmlg");

        System.out.println("\n\nForbidden words test:\n");
        for (var s : l) {
            System.out.println(isForbiddenChat(s) + "\t\t" + s);
        }
    }
}
