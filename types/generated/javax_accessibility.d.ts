//@ts-nocheck

declare module 'javax.accessibility' {
import { Locale as java_util_Locale } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { Accessible as javax_accessibility_Accessible, AccessibleComponent as javax_accessibility_AccessibleComponent, AccessibleStateSet as javax_accessibility_AccessibleStateSet, AccessibleSelection as javax_accessibility_AccessibleSelection, AccessibleRole as javax_accessibility_AccessibleRole, AccessibleAction as javax_accessibility_AccessibleAction, AccessibleText as javax_accessibility_AccessibleText, AccessibleEditableText as javax_accessibility_AccessibleEditableText, AccessibleValue as javax_accessibility_AccessibleValue, AccessibleIcon as javax_accessibility_AccessibleIcon, AccessibleRelationSet as javax_accessibility_AccessibleRelationSet, AccessibleTable as javax_accessibility_AccessibleTable } from 'javax.accessibility';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';

  export class AccessibleContext extends java_lang_Object {
accessibleAction: javax_accessibility_AccessibleAction;
accessibleChild: javax_accessibility_Accessible;
accessibleChildrenCount: number;
accessibleComponent: javax_accessibility_AccessibleComponent;
accessibleDescription: string;
accessibleEditableText: javax_accessibility_AccessibleEditableText;
accessibleIcon: JArray<javax_accessibility_AccessibleIcon>;
accessibleIndexInParent: number;
accessibleName: string;
accessibleParent: javax_accessibility_Accessible;
accessibleRelationSet: javax_accessibility_AccessibleRelationSet;
accessibleRole: javax_accessibility_AccessibleRole;
accessibleSelection: javax_accessibility_AccessibleSelection;
accessibleStateSet: javax_accessibility_AccessibleStateSet;
accessibleTable: javax_accessibility_AccessibleTable;
accessibleText: javax_accessibility_AccessibleText;
accessibleValue: javax_accessibility_AccessibleValue;
locale: java_util_Locale;
static ACCESSIBLE_ACTION_PROPERTY: string;
static ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: string;
static ACCESSIBLE_CARET_PROPERTY: string;
static ACCESSIBLE_CHILD_PROPERTY: string;
static ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: string;
static ACCESSIBLE_DESCRIPTION_PROPERTY: string;
static ACCESSIBLE_HYPERTEXT_OFFSET: string;
static ACCESSIBLE_INVALIDATE_CHILDREN: string;
static ACCESSIBLE_NAME_PROPERTY: string;
static ACCESSIBLE_SELECTION_PROPERTY: string;
static ACCESSIBLE_STATE_PROPERTY: string;
static ACCESSIBLE_TABLE_CAPTION_CHANGED: string;
static ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: string;
static ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: string;
static ACCESSIBLE_TABLE_MODEL_CHANGED: string;
static ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: string;
static ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: string;
static ACCESSIBLE_TABLE_SUMMARY_CHANGED: string;
static ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: string;
static ACCESSIBLE_TEXT_PROPERTY: string;
static ACCESSIBLE_VALUE_PROPERTY: string;
static ACCESSIBLE_VISIBLE_DATA_PROPERTY: string;
addPropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
firePropertyChange(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
getAccessibleAction(): javax_accessibility_AccessibleAction;
getAccessibleChild(arg0: number): javax_accessibility_Accessible;
getAccessibleChildrenCount(): number;
getAccessibleComponent(): javax_accessibility_AccessibleComponent;
getAccessibleDescription(): string;
getAccessibleEditableText(): javax_accessibility_AccessibleEditableText;
getAccessibleIcon(): JArray<javax_accessibility_AccessibleIcon>;
getAccessibleIndexInParent(): number;
getAccessibleName(): string;
getAccessibleParent(): javax_accessibility_Accessible;
getAccessibleRelationSet(): javax_accessibility_AccessibleRelationSet;
getAccessibleRole(): javax_accessibility_AccessibleRole;
getAccessibleSelection(): javax_accessibility_AccessibleSelection;
getAccessibleStateSet(): javax_accessibility_AccessibleStateSet;
getAccessibleTable(): javax_accessibility_AccessibleTable;
getAccessibleText(): javax_accessibility_AccessibleText;
getAccessibleValue(): javax_accessibility_AccessibleValue;
getLocale(): java_util_Locale;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
setAccessibleDescription(arg0: string): void;
setAccessibleName(arg0: string): void;
setAccessibleParent(arg0: javax_accessibility_Accessible): void;
constructor();
  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { AccessibleContext as javax_accessibility_AccessibleContext } from 'javax.accessibility';

  export class Accessible {
accessibleContext: javax_accessibility_AccessibleContext;
getAccessibleContext(): javax_accessibility_AccessibleContext;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Point as java_awt_Point, Dimension as java_awt_Dimension, Font as java_awt_Font, Rectangle as java_awt_Rectangle, FontMetrics as java_awt_FontMetrics, Color as java_awt_Color, Cursor as java_awt_Cursor } from 'java.awt';
import { Accessible as javax_accessibility_Accessible } from 'javax.accessibility';
import { FocusListener as java_awt_event_FocusListener } from 'java.awt.event';

  export class AccessibleComponent {
accessibleAt: javax_accessibility_Accessible;
background: java_awt_Color;
bounds: java_awt_Rectangle;
cursor: java_awt_Cursor;
font: java_awt_Font;
fontMetrics: java_awt_FontMetrics;
foreground: java_awt_Color;
location: java_awt_Point;
locationOnScreen: java_awt_Point;
size: java_awt_Dimension;
addFocusListener(arg0: java_awt_event_FocusListener): void;
contains(arg0: java_awt_Point): boolean;
getAccessibleAt(arg0: java_awt_Point): javax_accessibility_Accessible;
getBackground(): java_awt_Color;
getBounds(): java_awt_Rectangle;
getCursor(): java_awt_Cursor;
getFont(): java_awt_Font;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
getForeground(): java_awt_Color;
getLocation(): java_awt_Point;
getLocationOnScreen(): java_awt_Point;
getSize(): java_awt_Dimension;
isEnabled(): boolean;
isFocusTraversable(): boolean;
isShowing(): boolean;
isVisible(): boolean;
removeFocusListener(arg0: java_awt_event_FocusListener): void;
requestFocus(): void;
setBackground(arg0: java_awt_Color): void;
setBounds(arg0: java_awt_Rectangle): void;
setCursor(arg0: java_awt_Cursor): void;
setEnabled(arg0: boolean): void;
setFont(arg0: java_awt_Font): void;
setForeground(arg0: java_awt_Color): void;
setLocation(arg0: java_awt_Point): void;
setSize(arg0: java_awt_Dimension): void;
setVisible(arg0: boolean): void;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { AccessibleState as javax_accessibility_AccessibleState } from 'javax.accessibility';
import { Object as java_lang_Object } from 'java.lang';

  export class AccessibleStateSet extends java_lang_Object {

add(arg0: javax_accessibility_AccessibleState): boolean;
addAll(arg0: JArray<javax_accessibility_AccessibleState>): void;
clear(): void;
contains(arg0: javax_accessibility_AccessibleState): boolean;
remove(arg0: javax_accessibility_AccessibleState): boolean;
toArray(): JArray<javax_accessibility_AccessibleState>;
toString(): string;
constructor();
constructor(arg0: JArray<javax_accessibility_AccessibleState>);
  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AccessibleState as javax_accessibility_AccessibleState, AccessibleBundle as javax_accessibility_AccessibleBundle } from 'javax.accessibility';

  export class AccessibleState extends javax_accessibility_AccessibleBundle {
class: java_lang_Class<java_lang_Object>;
static ACTIVE: javax_accessibility_AccessibleState;
static ARMED: javax_accessibility_AccessibleState;
static BUSY: javax_accessibility_AccessibleState;
static CHECKED: javax_accessibility_AccessibleState;
static COLLAPSED: javax_accessibility_AccessibleState;
static EDITABLE: javax_accessibility_AccessibleState;
static ENABLED: javax_accessibility_AccessibleState;
static EXPANDABLE: javax_accessibility_AccessibleState;
static EXPANDED: javax_accessibility_AccessibleState;
static FOCUSABLE: javax_accessibility_AccessibleState;
static FOCUSED: javax_accessibility_AccessibleState;
static HORIZONTAL: javax_accessibility_AccessibleState;
static ICONIFIED: javax_accessibility_AccessibleState;
static INDETERMINATE: javax_accessibility_AccessibleState;
static MANAGES_DESCENDANTS: javax_accessibility_AccessibleState;
static MODAL: javax_accessibility_AccessibleState;
static MULTISELECTABLE: javax_accessibility_AccessibleState;
static MULTI_LINE: javax_accessibility_AccessibleState;
static OPAQUE: javax_accessibility_AccessibleState;
static PRESSED: javax_accessibility_AccessibleState;
static RESIZABLE: javax_accessibility_AccessibleState;
static SELECTABLE: javax_accessibility_AccessibleState;
static SELECTED: javax_accessibility_AccessibleState;
static SHOWING: javax_accessibility_AccessibleState;
static SINGLE_LINE: javax_accessibility_AccessibleState;
static TRANSIENT: javax_accessibility_AccessibleState;
static TRUNCATED: javax_accessibility_AccessibleState;
static VERTICAL: javax_accessibility_AccessibleState;
static VISIBLE: javax_accessibility_AccessibleState;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Locale as java_util_Locale } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class AccessibleBundle extends java_lang_Object {

toDisplayString(): string;
toDisplayString(arg0: java_util_Locale): string;
toString(): string;
constructor();
  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Accessible as javax_accessibility_Accessible } from 'javax.accessibility';

  export class AccessibleSelection {
accessibleSelection: javax_accessibility_Accessible;
accessibleSelectionCount: number;
addAccessibleSelection(arg0: number): void;
clearAccessibleSelection(): void;
getAccessibleSelection(arg0: number): javax_accessibility_Accessible;
getAccessibleSelectionCount(): number;
isAccessibleChildSelected(arg0: number): boolean;
removeAccessibleSelection(arg0: number): void;
selectAllAccessibleSelection(): void;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AccessibleRole as javax_accessibility_AccessibleRole, AccessibleBundle as javax_accessibility_AccessibleBundle } from 'javax.accessibility';

  export class AccessibleRole extends javax_accessibility_AccessibleBundle {
class: java_lang_Class<java_lang_Object>;
static ALERT: javax_accessibility_AccessibleRole;
static AWT_COMPONENT: javax_accessibility_AccessibleRole;
static CANVAS: javax_accessibility_AccessibleRole;
static CHECK_BOX: javax_accessibility_AccessibleRole;
static COLOR_CHOOSER: javax_accessibility_AccessibleRole;
static COLUMN_HEADER: javax_accessibility_AccessibleRole;
static COMBO_BOX: javax_accessibility_AccessibleRole;
static DATE_EDITOR: javax_accessibility_AccessibleRole;
static DESKTOP_ICON: javax_accessibility_AccessibleRole;
static DESKTOP_PANE: javax_accessibility_AccessibleRole;
static DIALOG: javax_accessibility_AccessibleRole;
static DIRECTORY_PANE: javax_accessibility_AccessibleRole;
static EDITBAR: javax_accessibility_AccessibleRole;
static FILE_CHOOSER: javax_accessibility_AccessibleRole;
static FILLER: javax_accessibility_AccessibleRole;
static FONT_CHOOSER: javax_accessibility_AccessibleRole;
static FOOTER: javax_accessibility_AccessibleRole;
static FRAME: javax_accessibility_AccessibleRole;
static GLASS_PANE: javax_accessibility_AccessibleRole;
static GROUP_BOX: javax_accessibility_AccessibleRole;
static HEADER: javax_accessibility_AccessibleRole;
static HTML_CONTAINER: javax_accessibility_AccessibleRole;
static HYPERLINK: javax_accessibility_AccessibleRole;
static ICON: javax_accessibility_AccessibleRole;
static INTERNAL_FRAME: javax_accessibility_AccessibleRole;
static LABEL: javax_accessibility_AccessibleRole;
static LAYERED_PANE: javax_accessibility_AccessibleRole;
static LIST: javax_accessibility_AccessibleRole;
static LIST_ITEM: javax_accessibility_AccessibleRole;
static MENU: javax_accessibility_AccessibleRole;
static MENU_BAR: javax_accessibility_AccessibleRole;
static MENU_ITEM: javax_accessibility_AccessibleRole;
static OPTION_PANE: javax_accessibility_AccessibleRole;
static PAGE_TAB: javax_accessibility_AccessibleRole;
static PAGE_TAB_LIST: javax_accessibility_AccessibleRole;
static PANEL: javax_accessibility_AccessibleRole;
static PARAGRAPH: javax_accessibility_AccessibleRole;
static PASSWORD_TEXT: javax_accessibility_AccessibleRole;
static POPUP_MENU: javax_accessibility_AccessibleRole;
static PROGRESS_BAR: javax_accessibility_AccessibleRole;
static PROGRESS_MONITOR: javax_accessibility_AccessibleRole;
static PUSH_BUTTON: javax_accessibility_AccessibleRole;
static RADIO_BUTTON: javax_accessibility_AccessibleRole;
static ROOT_PANE: javax_accessibility_AccessibleRole;
static ROW_HEADER: javax_accessibility_AccessibleRole;
static RULER: javax_accessibility_AccessibleRole;
static SCROLL_BAR: javax_accessibility_AccessibleRole;
static SCROLL_PANE: javax_accessibility_AccessibleRole;
static SEPARATOR: javax_accessibility_AccessibleRole;
static SLIDER: javax_accessibility_AccessibleRole;
static SPIN_BOX: javax_accessibility_AccessibleRole;
static SPLIT_PANE: javax_accessibility_AccessibleRole;
static STATUS_BAR: javax_accessibility_AccessibleRole;
static SWING_COMPONENT: javax_accessibility_AccessibleRole;
static TABLE: javax_accessibility_AccessibleRole;
static TEXT: javax_accessibility_AccessibleRole;
static TOGGLE_BUTTON: javax_accessibility_AccessibleRole;
static TOOL_BAR: javax_accessibility_AccessibleRole;
static TOOL_TIP: javax_accessibility_AccessibleRole;
static TREE: javax_accessibility_AccessibleRole;
static UNKNOWN: javax_accessibility_AccessibleRole;
static VIEWPORT: javax_accessibility_AccessibleRole;
static WINDOW: javax_accessibility_AccessibleRole;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {


  export class AccessibleAction {
accessibleActionCount: number;
accessibleActionDescription: string;
static CLICK: string;
static DECREMENT: string;
static INCREMENT: string;
static TOGGLE_EXPAND: string;
static TOGGLE_POPUP: string;
doAccessibleAction(arg0: number): boolean;
getAccessibleActionCount(): number;
getAccessibleActionDescription(arg0: number): string;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Point as java_awt_Point, Rectangle as java_awt_Rectangle } from 'java.awt';
import { AttributeSet as javax_swing_text_AttributeSet } from 'javax.swing.text';

  export class AccessibleText {
afterIndex: string;
atIndex: string;
beforeIndex: string;
caretPosition: number;
charCount: number;
characterAttribute: javax_swing_text_AttributeSet;
characterBounds: java_awt_Rectangle;
indexAtPoint: number;
selectedText: string;
selectionEnd: number;
selectionStart: number;
static CHARACTER: number;
static SENTENCE: number;
static WORD: number;
getAfterIndex(arg0: number, arg1: number): string;
getAtIndex(arg0: number, arg1: number): string;
getBeforeIndex(arg0: number, arg1: number): string;
getCaretPosition(): number;
getCharCount(): number;
getCharacterAttribute(arg0: number): javax_swing_text_AttributeSet;
getCharacterBounds(arg0: number): java_awt_Rectangle;
getIndexAtPoint(arg0: java_awt_Point): number;
getSelectedText(): string;
getSelectionEnd(): number;
getSelectionStart(): number;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { AttributeSet as javax_swing_text_AttributeSet } from 'javax.swing.text';
import { Point as java_awt_Point, Rectangle as java_awt_Rectangle } from 'java.awt';
import { AccessibleText as javax_accessibility_AccessibleText } from 'javax.accessibility';

  export class AccessibleEditableText implements javax_accessibility_AccessibleText {
afterIndex: string;
atIndex: string;
beforeIndex: string;
caretPosition: number;
charCount: number;
characterAttribute: javax_swing_text_AttributeSet;
characterBounds: java_awt_Rectangle;
indexAtPoint: number;
selectedText: string;
selectionEnd: number;
selectionStart: number;
textRange: string;
cut(arg0: number, arg1: number): void;
delete(arg0: number, arg1: number): void;
getAfterIndex(arg0: number, arg1: number): string;
getAtIndex(arg0: number, arg1: number): string;
getBeforeIndex(arg0: number, arg1: number): string;
getCaretPosition(): number;
getCharCount(): number;
getCharacterAttribute(arg0: number): javax_swing_text_AttributeSet;
getCharacterBounds(arg0: number): java_awt_Rectangle;
getIndexAtPoint(arg0: java_awt_Point): number;
getSelectedText(): string;
getSelectionEnd(): number;
getSelectionStart(): number;
getTextRange(arg0: number, arg1: number): string;
insertTextAtIndex(arg0: number, arg1: string): void;
paste(arg0: number): void;
replaceText(arg0: number, arg1: number, arg2: string): void;
selectText(arg0: number, arg1: number): void;
setAttributes(arg0: number, arg1: number, arg2: javax_swing_text_AttributeSet): void;
setTextContents(arg0: string): void;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Number as java_lang_Number } from 'java.lang';

  export class AccessibleValue {
currentAccessibleValue: java_lang_Number;
maximumAccessibleValue: java_lang_Number;
minimumAccessibleValue: java_lang_Number;
getCurrentAccessibleValue(): java_lang_Number;
getMaximumAccessibleValue(): java_lang_Number;
getMinimumAccessibleValue(): java_lang_Number;
setCurrentAccessibleValue(arg0: java_lang_Number): boolean;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {


  export class AccessibleIcon {
accessibleIconDescription: string;
accessibleIconHeight: number;
accessibleIconWidth: number;
getAccessibleIconDescription(): string;
getAccessibleIconHeight(): number;
getAccessibleIconWidth(): number;
setAccessibleIconDescription(arg0: string): void;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { AccessibleRelation as javax_accessibility_AccessibleRelation } from 'javax.accessibility';
import { Object as java_lang_Object } from 'java.lang';

  export class AccessibleRelationSet extends java_lang_Object {

add(arg0: javax_accessibility_AccessibleRelation): boolean;
addAll(arg0: JArray<javax_accessibility_AccessibleRelation>): void;
clear(): void;
contains(arg0: string): boolean;
get(arg0: string): javax_accessibility_AccessibleRelation;
remove(arg0: javax_accessibility_AccessibleRelation): boolean;
size(): number;
toArray(): JArray<javax_accessibility_AccessibleRelation>;
toString(): string;
constructor();
constructor(arg0: JArray<javax_accessibility_AccessibleRelation>);
  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AccessibleBundle as javax_accessibility_AccessibleBundle } from 'javax.accessibility';

  export class AccessibleRelation extends javax_accessibility_AccessibleBundle {
class: java_lang_Class<java_lang_Object>;
key: string;
static CHILD_NODE_OF: string;
static CHILD_NODE_OF_PROPERTY: string;
static CONTROLLED_BY: string;
static CONTROLLED_BY_PROPERTY: string;
static CONTROLLER_FOR: string;
static CONTROLLER_FOR_PROPERTY: string;
static EMBEDDED_BY: string;
static EMBEDDED_BY_PROPERTY: string;
static EMBEDS: string;
static EMBEDS_PROPERTY: string;
static FLOWS_FROM: string;
static FLOWS_FROM_PROPERTY: string;
static FLOWS_TO: string;
static FLOWS_TO_PROPERTY: string;
static LABELED_BY: string;
static LABELED_BY_PROPERTY: string;
static LABEL_FOR: string;
static LABEL_FOR_PROPERTY: string;
static MEMBER_OF: string;
static MEMBER_OF_PROPERTY: string;
static PARENT_WINDOW_OF: string;
static PARENT_WINDOW_OF_PROPERTY: string;
static SUBWINDOW_OF: string;
static SUBWINDOW_OF_PROPERTY: string;
target: JArray<java_lang_Object>;
equals(arg0: java_lang_Object): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getKey(): string;
getTarget(): JArray<java_lang_Object>;
hashCode(): number;
notify(): void;
notifyAll(): void;
setTarget(arg0: JArray<java_lang_Object>): void;
setTarget(arg0: java_lang_Object): void;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: string);
constructor(arg0: string, arg1: JArray<java_lang_Object>);
constructor(arg0: string, arg1: java_lang_Object);
  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Accessible as javax_accessibility_Accessible, AccessibleTable as javax_accessibility_AccessibleTable } from 'javax.accessibility';

  export class AccessibleTable {
accessibleAt: javax_accessibility_Accessible;
accessibleCaption: javax_accessibility_Accessible;
accessibleColumnCount: number;
accessibleColumnDescription: javax_accessibility_Accessible;
accessibleColumnExtentAt: number;
accessibleColumnHeader: javax_accessibility_AccessibleTable;
accessibleRowCount: number;
accessibleRowDescription: javax_accessibility_Accessible;
accessibleRowExtentAt: number;
accessibleRowHeader: javax_accessibility_AccessibleTable;
accessibleSummary: javax_accessibility_Accessible;
selectedAccessibleColumns: JArray<number>;
selectedAccessibleRows: JArray<number>;
getAccessibleAt(arg0: number, arg1: number): javax_accessibility_Accessible;
getAccessibleCaption(): javax_accessibility_Accessible;
getAccessibleColumnCount(): number;
getAccessibleColumnDescription(arg0: number): javax_accessibility_Accessible;
getAccessibleColumnExtentAt(arg0: number, arg1: number): number;
getAccessibleColumnHeader(): javax_accessibility_AccessibleTable;
getAccessibleRowCount(): number;
getAccessibleRowDescription(arg0: number): javax_accessibility_Accessible;
getAccessibleRowExtentAt(arg0: number, arg1: number): number;
getAccessibleRowHeader(): javax_accessibility_AccessibleTable;
getAccessibleSummary(): javax_accessibility_Accessible;
getSelectedAccessibleColumns(): JArray<number>;
getSelectedAccessibleRows(): JArray<number>;
isAccessibleColumnSelected(arg0: number): boolean;
isAccessibleRowSelected(arg0: number): boolean;
isAccessibleSelected(arg0: number, arg1: number): boolean;
setAccessibleCaption(arg0: javax_accessibility_Accessible): void;
setAccessibleColumnDescription(arg0: number, arg1: javax_accessibility_Accessible): void;
setAccessibleColumnHeader(arg0: javax_accessibility_AccessibleTable): void;
setAccessibleRowDescription(arg0: number, arg1: javax_accessibility_Accessible): void;
setAccessibleRowHeader(arg0: javax_accessibility_AccessibleTable): void;
setAccessibleSummary(arg0: javax_accessibility_Accessible): void;

  }
}