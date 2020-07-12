//@ts-nocheck

declare module 'net.md_5.bungee.api' {
import { ChatColor as net_md_5_bungee_api_ChatColor } from 'net.md_5.bungee.api';
import { Class as java_lang_Class, Object as java_lang_Object, Character as java_lang_Character, Enum as java_lang_Enum } from 'java.lang';
import { Pattern as java_util_regex_Pattern } from 'java.util.regex';
import { Map as java_util_Map } from 'java.util';
/** All supported color values for chat */

  export class ChatColor extends java_lang_Enum<net_md_5_bungee_api_ChatColor> {
static BLACK: net_md_5_bungee_api_ChatColor;
static DARK_BLUE: net_md_5_bungee_api_ChatColor;
static DARK_GREEN: net_md_5_bungee_api_ChatColor;
static DARK_AQUA: net_md_5_bungee_api_ChatColor;
static DARK_RED: net_md_5_bungee_api_ChatColor;
static DARK_PURPLE: net_md_5_bungee_api_ChatColor;
static GOLD: net_md_5_bungee_api_ChatColor;
static GRAY: net_md_5_bungee_api_ChatColor;
static DARK_GRAY: net_md_5_bungee_api_ChatColor;
static BLUE: net_md_5_bungee_api_ChatColor;
static GREEN: net_md_5_bungee_api_ChatColor;
static AQUA: net_md_5_bungee_api_ChatColor;
static RED: net_md_5_bungee_api_ChatColor;
static LIGHT_PURPLE: net_md_5_bungee_api_ChatColor;
static YELLOW: net_md_5_bungee_api_ChatColor;
static WHITE: net_md_5_bungee_api_ChatColor;
static MAGIC: net_md_5_bungee_api_ChatColor;
static BOLD: net_md_5_bungee_api_ChatColor;
static STRIKETHROUGH: net_md_5_bungee_api_ChatColor;
static UNDERLINE: net_md_5_bungee_api_ChatColor;
static ITALIC: net_md_5_bungee_api_ChatColor;
static RESET: net_md_5_bungee_api_ChatColor;
static COLOR_CHAR: string;
static ALL_CODES: string;
static STRIP_COLOR_PATTERN: java_util_regex_Pattern;
static BY_CHAR: java_util_Map<java_lang_Character, net_md_5_bungee_api_ChatColor>;
code: string;
toString: string;
name: string;
static $VALUES: net_md_5_bungee_api_ChatColor[];
name: string;
static byChar: net_md_5_bungee_api_ChatColor | null;
class: java_lang_Class<java_lang_Object>;
toString(): string;
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
getName(): string;
static stripColor(arg0: string): string;
/** Gets the color represented by the specified color code */
static getByChar(code: string): net_md_5_bungee_api_ChatColor | null;
/** Translates a string using an alternate color code character into a
 string that uses the internal ChatColor.COLOR_CODE color code
 character. The alternate color code character will only be replaced if
 it is immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r. */
static translateAlternateColorCodes(altColorChar: string, textToTranslate: string): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'net.md_5.bungee.api.chat' {
import { List as java_util_List } from 'java.util';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent, ClickEvent as net_md_5_bungee_api_chat_ClickEvent, HoverEvent as net_md_5_bungee_api_chat_HoverEvent } from 'net.md_5.bungee.api.chat';
import { Object as java_lang_Object, Boolean as java_lang_Boolean } from 'java.lang';
import { FormatRetention as net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention } from 'net.md_5.bungee.api.chat.ComponentBuilder';
import { ChatColor as net_md_5_bungee_api_ChatColor } from 'net.md_5.bungee.api';

  export class BaseComponent extends java_lang_Object {
parent: net_md_5_bungee_api_chat_BaseComponent;
color: net_md_5_bungee_api_ChatColor;
bold: java_lang_Boolean;
italic: java_lang_Boolean;
underlined: java_lang_Boolean;
strikethrough: java_lang_Boolean;
obfuscated: java_lang_Boolean;
insertion: string;
extra: java_util_List<net_md_5_bungee_api_chat_BaseComponent>;
clickEvent: net_md_5_bungee_api_chat_ClickEvent;
hoverEvent: net_md_5_bungee_api_chat_HoverEvent;
extra: java_util_List<net_md_5_bungee_api_chat_BaseComponent>;
colorRaw: net_md_5_bungee_api_ChatColor;
color: net_md_5_bungee_api_ChatColor;
clickEvent: net_md_5_bungee_api_chat_ClickEvent;
hoverEvent: net_md_5_bungee_api_chat_HoverEvent;
insertion: string;
setExtra(arg0: java_util_List<net_md_5_bungee_api_chat_BaseComponent>): void;
getExtra(): java_util_List<net_md_5_bungee_api_chat_BaseComponent>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
duplicate(): net_md_5_bungee_api_chat_BaseComponent;
retain(arg0: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention): void;
setClickEvent(arg0: net_md_5_bungee_api_chat_ClickEvent): void;
setHoverEvent(arg0: net_md_5_bungee_api_chat_HoverEvent): void;
getColorRaw(): net_md_5_bungee_api_ChatColor;
isBoldRaw(): java_lang_Boolean;
isItalicRaw(): java_lang_Boolean;
isUnderlinedRaw(): java_lang_Boolean;
setUnderlined(arg0: java_lang_Boolean): void;
isStrikethroughRaw(): java_lang_Boolean;
isObfuscatedRaw(): java_lang_Boolean;
setObfuscated(arg0: java_lang_Boolean): void;
duplicateWithoutFormatting(): net_md_5_bungee_api_chat_BaseComponent;
toPlainText(): string;
static toPlainText(...arg0: net_md_5_bungee_api_chat_BaseComponent[]): string;
isObfuscated(): boolean;
hasFormatting(): boolean;
addExtra(arg0: net_md_5_bungee_api_chat_BaseComponent): void;
addExtra(arg0: string): void;
copyFormatting(arg0: net_md_5_bungee_api_chat_BaseComponent, arg1: boolean): void;
copyFormatting(arg0: net_md_5_bungee_api_chat_BaseComponent, arg1: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention, arg2: boolean): void;
copyFormatting(arg0: net_md_5_bungee_api_chat_BaseComponent): void;
setBold(arg0: java_lang_Boolean): void;
setStrikethrough(arg0: java_lang_Boolean): void;
setItalic(arg0: java_lang_Boolean): void;
getColor(): net_md_5_bungee_api_ChatColor;
setInsertion(arg0: string): void;
static toLegacyText(...arg0: net_md_5_bungee_api_chat_BaseComponent[]): string;
toLegacyText(): string;
getClickEvent(): net_md_5_bungee_api_chat_ClickEvent;
isBold(): boolean;
isItalic(): boolean;
isStrikethrough(): boolean;
isUnderlined(): boolean;
getHoverEvent(): net_md_5_bungee_api_chat_HoverEvent;
getInsertion(): string;
setColor(arg0: net_md_5_bungee_api_ChatColor): void;
constructor();
  }
}//@ts-nocheck

declare module 'net.md_5.bungee.api.chat.ComponentBuilder' {
import { FormatRetention as net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention } from 'net.md_5.bungee.api.chat.ComponentBuilder';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FormatRetention extends java_lang_Enum<net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention> {
static NONE: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
static FORMATTING: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
static EVENTS: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
static ALL: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
static $VALUES: net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention[];
class: java_lang_Class<java_lang_Object>;
static values(): net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention[];
static valueOf(arg0: string): net_md_5_bungee_api_chat_ComponentBuilder_FormatRetention;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'net.md_5.bungee.api.chat' {
import { Object as java_lang_Object } from 'java.lang';
import { Action as net_md_5_bungee_api_chat_ClickEvent_Action } from 'net.md_5.bungee.api.chat.ClickEvent';

  export class ClickEvent extends java_lang_Object {
action: net_md_5_bungee_api_chat_ClickEvent_Action;
value: string;
value: string;
action: net_md_5_bungee_api_chat_ClickEvent_Action;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getValue(): string;
getAction(): net_md_5_bungee_api_chat_ClickEvent_Action;
constructor(arg0: net_md_5_bungee_api_chat_ClickEvent_Action, arg1: string);
  }
}//@ts-nocheck

declare module 'net.md_5.bungee.api.chat.ClickEvent' {
import { Action as net_md_5_bungee_api_chat_ClickEvent_Action } from 'net.md_5.bungee.api.chat.ClickEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Action extends java_lang_Enum<net_md_5_bungee_api_chat_ClickEvent_Action> {
static OPEN_URL: net_md_5_bungee_api_chat_ClickEvent_Action;
static OPEN_FILE: net_md_5_bungee_api_chat_ClickEvent_Action;
static RUN_COMMAND: net_md_5_bungee_api_chat_ClickEvent_Action;
static SUGGEST_COMMAND: net_md_5_bungee_api_chat_ClickEvent_Action;
static CHANGE_PAGE: net_md_5_bungee_api_chat_ClickEvent_Action;
static COPY_TO_CLIPBOARD: net_md_5_bungee_api_chat_ClickEvent_Action;
static $VALUES: net_md_5_bungee_api_chat_ClickEvent_Action[];
class: java_lang_Class<java_lang_Object>;
static values(): net_md_5_bungee_api_chat_ClickEvent_Action[];
static valueOf(arg0: string): net_md_5_bungee_api_chat_ClickEvent_Action;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'net.md_5.bungee.api.chat' {
import { Object as java_lang_Object } from 'java.lang';
import { BaseComponent as net_md_5_bungee_api_chat_BaseComponent } from 'net.md_5.bungee.api.chat';
import { Action as net_md_5_bungee_api_chat_HoverEvent_Action } from 'net.md_5.bungee.api.chat.HoverEvent';

  export class HoverEvent extends java_lang_Object {
action: net_md_5_bungee_api_chat_HoverEvent_Action;
value: net_md_5_bungee_api_chat_BaseComponent[];
value: net_md_5_bungee_api_chat_BaseComponent[];
action: net_md_5_bungee_api_chat_HoverEvent_Action;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getValue(): net_md_5_bungee_api_chat_BaseComponent[];
getAction(): net_md_5_bungee_api_chat_HoverEvent_Action;
constructor(arg0: net_md_5_bungee_api_chat_HoverEvent_Action, arg1: net_md_5_bungee_api_chat_BaseComponent[]);
  }
}//@ts-nocheck

declare module 'net.md_5.bungee.api.chat.HoverEvent' {
import { Action as net_md_5_bungee_api_chat_HoverEvent_Action } from 'net.md_5.bungee.api.chat.HoverEvent';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Action extends java_lang_Enum<net_md_5_bungee_api_chat_HoverEvent_Action> {
static SHOW_TEXT: net_md_5_bungee_api_chat_HoverEvent_Action;
static SHOW_ACHIEVEMENT: net_md_5_bungee_api_chat_HoverEvent_Action;
static SHOW_ITEM: net_md_5_bungee_api_chat_HoverEvent_Action;
static SHOW_ENTITY: net_md_5_bungee_api_chat_HoverEvent_Action;
static $VALUES: net_md_5_bungee_api_chat_HoverEvent_Action[];
class: java_lang_Class<java_lang_Object>;
static values(): net_md_5_bungee_api_chat_HoverEvent_Action[];
static valueOf(arg0: string): net_md_5_bungee_api_chat_HoverEvent_Action;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'net.md_5.bungee.api' {
import { ChatMessageType as net_md_5_bungee_api_ChatMessageType } from 'net.md_5.bungee.api';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChatMessageType extends java_lang_Enum<net_md_5_bungee_api_ChatMessageType> {
static CHAT: net_md_5_bungee_api_ChatMessageType;
static SYSTEM: net_md_5_bungee_api_ChatMessageType;
static ACTION_BAR: net_md_5_bungee_api_ChatMessageType;
static $VALUES: net_md_5_bungee_api_ChatMessageType[];
class: java_lang_Class<java_lang_Object>;
static values(): net_md_5_bungee_api_ChatMessageType[];
static valueOf(arg0: string): net_md_5_bungee_api_ChatMessageType;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}