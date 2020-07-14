//@ts-nocheck

declare module 'net.md_5.bungee.api.chat' {
import { Object as java_lang_Object, Boolean as java_lang_Boolean } from 'java.lang';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent, ClickEvent as net_md_5_bungee_api_chat_ClickEvent, HoverEvent as net_md_5_bungee_api_chat_HoverEvent } from 'net.md_5.bungee.api.chat';
import { List as java_util_List } from 'java.util';
import { FormatRetention as net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention } from 'net.md_5.bungee.api.chat.ComponentBuilder';
import { ChatColor as net_md_5_bungee_api_ChatColor } from 'net.md_5.bungee.api';

  export class BaseComponent extends java_lang_Object {
clickEvent: net_md_5_bungee_api_chat_ClickEvent;
color: net_md_5_bungee_api_ChatColor;
colorRaw: net_md_5_bungee_api_ChatColor;
extra: java_util_List<net_md_5_bungee_api_chat_BaseComponent>;
font: string;
fontRaw: string;
hoverEvent: net_md_5_bungee_api_chat_HoverEvent;
insertion: string;
addExtra(arg0: net_md_5_bungee_api_chat_BaseComponent): void;
addExtra(arg0: string): void;
copyFormatting(arg0: net_md_5_bungee_api_chat_BaseComponent): void;
copyFormatting(arg0: net_md_5_bungee_api_chat_BaseComponent, arg1: boolean): void;
copyFormatting(arg0: net_md_5_bungee_api_chat_BaseComponent, arg1: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention, arg2: boolean): void;
duplicate(): net_md_5_bungee_api_chat_BaseComponent;
duplicateWithoutFormatting(): net_md_5_bungee_api_chat_BaseComponent;
equals(arg0: java_lang_Object): boolean;
getClickEvent(): net_md_5_bungee_api_chat_ClickEvent;
getColor(): net_md_5_bungee_api_ChatColor;
getColorRaw(): net_md_5_bungee_api_ChatColor;
getExtra(): java_util_List<net_md_5_bungee_api_chat_BaseComponent>;
getFont(): string;
getFontRaw(): string;
getHoverEvent(): net_md_5_bungee_api_chat_HoverEvent;
getInsertion(): string;
hasFormatting(): boolean;
hashCode(): number;
isBold(): boolean;
isBoldRaw(): java_lang_Boolean;
isItalic(): boolean;
isItalicRaw(): java_lang_Boolean;
isObfuscated(): boolean;
isObfuscatedRaw(): java_lang_Boolean;
isStrikethrough(): boolean;
isStrikethroughRaw(): java_lang_Boolean;
isUnderlined(): boolean;
isUnderlinedRaw(): java_lang_Boolean;
retain(arg0: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention): void;
setBold(arg0: java_lang_Boolean): void;
setClickEvent(arg0: net_md_5_bungee_api_chat_ClickEvent): void;
setColor(arg0: net_md_5_bungee_api_ChatColor): void;
setExtra(arg0: java_util_List<net_md_5_bungee_api_chat_BaseComponent>): void;
setFont(arg0: string): void;
setHoverEvent(arg0: net_md_5_bungee_api_chat_HoverEvent): void;
setInsertion(arg0: string): void;
setItalic(arg0: java_lang_Boolean): void;
setObfuscated(arg0: java_lang_Boolean): void;
setStrikethrough(arg0: java_lang_Boolean): void;
setUnderlined(arg0: java_lang_Boolean): void;
static toLegacyText(...arg0: net_md_5_bungee_api_chat_BaseComponent[]): string;
static toPlainText(...arg0: net_md_5_bungee_api_chat_BaseComponent[]): string;
toLegacyText(): string;
toPlainText(): string;
toString(): string;
constructor();
  }
}
//@ts-nocheck

declare module 'net.md_5.bungee.api.chat.ComponentBuilder' {
import { FormatRetention as net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention } from 'net.md_5.bungee.api.chat.ComponentBuilder';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FormatRetention extends java_lang_Enum<net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention> {
class: java_lang_Class<java_lang_Object>;
static ALL: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
static EVENTS: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
static FORMATTING: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
static NONE: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
static values(): net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'net.md_5.bungee.api.chat' {
import { Object as java_lang_Object } from 'java.lang';
import { Action as net_md_5_bungee_api_chat_ClickEvent_Action } from 'net.md_5.bungee.api.chat.ClickEvent';

  export class ClickEvent extends java_lang_Object {
action: net_md_5_bungee_api_chat_ClickEvent_Action;
value: string;
equals(arg0: java_lang_Object): boolean;
getAction(): net_md_5_bungee_api_chat_ClickEvent_Action;
getValue(): string;
hashCode(): number;
toString(): string;
constructor(arg0: net_md_5_bungee_api_chat_ClickEvent_Action, arg1: string);
  }
}
//@ts-nocheck

declare module 'net.md_5.bungee.api.chat.ClickEvent' {
import { Action as net_md_5_bungee_api_chat_ClickEvent_Action } from 'net.md_5.bungee.api.chat.ClickEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Action extends java_lang_Enum<net_md_5_bungee_api_chat_ClickEvent_Action> {
class: java_lang_Class<java_lang_Object>;
static CHANGE_PAGE: net_md_5_bungee_api_chat_ClickEvent_Action;
static COPY_TO_CLIPBOARD: net_md_5_bungee_api_chat_ClickEvent_Action;
static OPEN_FILE: net_md_5_bungee_api_chat_ClickEvent_Action;
static OPEN_URL: net_md_5_bungee_api_chat_ClickEvent_Action;
static RUN_COMMAND: net_md_5_bungee_api_chat_ClickEvent_Action;
static SUGGEST_COMMAND: net_md_5_bungee_api_chat_ClickEvent_Action;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): net_md_5_bungee_api_chat_ClickEvent_Action;
static values(): net_md_5_bungee_api_chat_ClickEvent_Action[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'net.md_5.bungee.api.chat' {
import { Object as java_lang_Object } from 'java.lang';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Action as net_md_5_bungee_api_chat_HoverEvent_Action } from 'net.md_5.bungee.api.chat.HoverEvent';

  export class HoverEvent extends java_lang_Object {
action: net_md_5_bungee_api_chat_HoverEvent_Action;
value: net_md_5_bungee_api_chat_BaseComponent[];
equals(arg0: java_lang_Object): boolean;
getAction(): net_md_5_bungee_api_chat_HoverEvent_Action;
getValue(): net_md_5_bungee_api_chat_BaseComponent[];
hashCode(): number;
toString(): string;
constructor(arg0: net_md_5_bungee_api_chat_HoverEvent_Action, arg1: net_md_5_bungee_api_chat_BaseComponent[]);
  }
}
//@ts-nocheck

declare module 'net.md_5.bungee.api.chat.HoverEvent' {
import { Action as net_md_5_bungee_api_chat_HoverEvent_Action } from 'net.md_5.bungee.api.chat.HoverEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Action extends java_lang_Enum<net_md_5_bungee_api_chat_HoverEvent_Action> {
class: java_lang_Class<java_lang_Object>;
static SHOW_ACHIEVEMENT: net_md_5_bungee_api_chat_HoverEvent_Action;
static SHOW_ENTITY: net_md_5_bungee_api_chat_HoverEvent_Action;
static SHOW_ITEM: net_md_5_bungee_api_chat_HoverEvent_Action;
static SHOW_TEXT: net_md_5_bungee_api_chat_HoverEvent_Action;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): net_md_5_bungee_api_chat_HoverEvent_Action;
static values(): net_md_5_bungee_api_chat_HoverEvent_Action[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'net.md_5.bungee.api' {
import { Object as java_lang_Object } from 'java.lang';
import { ChatColor as net_md_5_bungee_api_ChatColor } from 'net.md_5.bungee.api';
import { Color as java_awt_Color } from 'java.awt';
import { Pattern as java_util_regex_Pattern } from 'java.util.regex';
/** All supported color values for chat */

  export class ChatColor extends java_lang_Object {
name: string;
static ALL_CODES: string;
static AQUA: net_md_5_bungee_api_ChatColor;
static BLACK: net_md_5_bungee_api_ChatColor;
static BLUE: net_md_5_bungee_api_ChatColor;
static BOLD: net_md_5_bungee_api_ChatColor;
static COLOR_CHAR: string;
static DARK_AQUA: net_md_5_bungee_api_ChatColor;
static DARK_BLUE: net_md_5_bungee_api_ChatColor;
static DARK_GRAY: net_md_5_bungee_api_ChatColor;
static DARK_GREEN: net_md_5_bungee_api_ChatColor;
static DARK_PURPLE: net_md_5_bungee_api_ChatColor;
static DARK_RED: net_md_5_bungee_api_ChatColor;
static GOLD: net_md_5_bungee_api_ChatColor;
static GRAY: net_md_5_bungee_api_ChatColor;
static GREEN: net_md_5_bungee_api_ChatColor;
static ITALIC: net_md_5_bungee_api_ChatColor;
static LIGHT_PURPLE: net_md_5_bungee_api_ChatColor;
static MAGIC: net_md_5_bungee_api_ChatColor;
static RED: net_md_5_bungee_api_ChatColor;
static RESET: net_md_5_bungee_api_ChatColor;
static STRIKETHROUGH: net_md_5_bungee_api_ChatColor;
static STRIP_COLOR_PATTERN: java_util_regex_Pattern;
static UNDERLINE: net_md_5_bungee_api_ChatColor;
static WHITE: net_md_5_bungee_api_ChatColor;
static YELLOW: net_md_5_bungee_api_ChatColor;
static byChar: net_md_5_bungee_api_ChatColor | null;
/** Gets the color represented by the specified color code */
static getByChar(code: string): net_md_5_bungee_api_ChatColor | null;
/** Returns an array containing the constants of this enum type, in
the order they are declared. This method may be used to iterate
over the constants as follows:
for (ChatColor c : ChatColor.values())
    System.out.println(c);
 */
static values(): net_md_5_bungee_api_ChatColor[];
/** Returns the enum constant of this type with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this type.  (Extraneous whitespace characters are 
not permitted.) */
static valueOf(name: string): net_md_5_bungee_api_ChatColor;
/** Translates a string using an alternate color code character into a
 string that uses the internal ChatColor.COLOR_CODE color code
 character. The alternate color code character will only be replaced if
 it is immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r. */
static translateAlternateColorCodes(altColorChar: string, textToTranslate: string): string;
equals(arg0: java_lang_Object): boolean;
getName(): string;
hashCode(): number;
name(): string;
ordinal(): number;
static of(arg0: java_awt_Color): net_md_5_bungee_api_ChatColor;
static of(arg0: string): net_md_5_bungee_api_ChatColor;
static stripColor(arg0: string): string;
toString(): string;

  }
}
//@ts-nocheck

declare module 'net.md_5.bungee.api' {
import { ChatMessageType as net_md_5_bungee_api_ChatMessageType } from 'net.md_5.bungee.api';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChatMessageType extends java_lang_Enum<net_md_5_bungee_api_ChatMessageType> {
class: java_lang_Class<java_lang_Object>;
static ACTION_BAR: net_md_5_bungee_api_ChatMessageType;
static CHAT: net_md_5_bungee_api_ChatMessageType;
static SYSTEM: net_md_5_bungee_api_ChatMessageType;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): net_md_5_bungee_api_ChatMessageType;
static values(): net_md_5_bungee_api_ChatMessageType[];
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}