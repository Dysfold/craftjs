//@ts-nocheck

declare module 'javax.accessibility' {
import { Locale as java_util_Locale } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { Accessible as javax_accessibility_Accessible, AccessibleComponent as javax_accessibility_AccessibleComponent, AccessibleStateSet as javax_accessibility_AccessibleStateSet, AccessibleSelection as javax_accessibility_AccessibleSelection, AccessibleRole as javax_accessibility_AccessibleRole, AccessibleAction as javax_accessibility_AccessibleAction, AccessibleText as javax_accessibility_AccessibleText, AccessibleEditableText as javax_accessibility_AccessibleEditableText, AccessibleValue as javax_accessibility_AccessibleValue, AccessibleIcon as javax_accessibility_AccessibleIcon, AccessibleRelationSet as javax_accessibility_AccessibleRelationSet, AccessibleTable as javax_accessibility_AccessibleTable } from 'javax.accessibility';
import { PropertyChangeListener as java_beans_PropertyChangeListener } from 'java.beans';

  export class AccessibleContext extends java_lang_Object {
static ACCESSIBLE_NAME_PROPERTY: string;
static ACCESSIBLE_DESCRIPTION_PROPERTY: string;
static ACCESSIBLE_STATE_PROPERTY: string;
static ACCESSIBLE_VALUE_PROPERTY: string;
static ACCESSIBLE_SELECTION_PROPERTY: string;
static ACCESSIBLE_CARET_PROPERTY: string;
static ACCESSIBLE_VISIBLE_DATA_PROPERTY: string;
static ACCESSIBLE_CHILD_PROPERTY: string;
static ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: string;
static ACCESSIBLE_TABLE_CAPTION_CHANGED: string;
static ACCESSIBLE_TABLE_SUMMARY_CHANGED: string;
static ACCESSIBLE_TABLE_MODEL_CHANGED: string;
static ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: string;
static ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: string;
static ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: string;
static ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: string;
static ACCESSIBLE_ACTION_PROPERTY: string;
static ACCESSIBLE_HYPERTEXT_OFFSET: string;
static ACCESSIBLE_TEXT_PROPERTY: string;
static ACCESSIBLE_INVALIDATE_CHILDREN: string;
static ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: string;
static ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: string;
locale: java_util_Locale;
accessibleChildrenCount: number;
accessibleChild: javax_accessibility_Accessible;
accessibleComponent: javax_accessibility_AccessibleComponent;
accessibleIndexInParent: number;
accessibleStateSet: javax_accessibility_AccessibleStateSet;
accessibleParent: javax_accessibility_Accessible;
accessibleSelection: javax_accessibility_AccessibleSelection;
accessibleName: string;
accessibleDescription: string;
accessibleRole: javax_accessibility_AccessibleRole;
accessibleAction: javax_accessibility_AccessibleAction;
accessibleText: javax_accessibility_AccessibleText;
accessibleEditableText: javax_accessibility_AccessibleEditableText;
accessibleValue: javax_accessibility_AccessibleValue;
accessibleIcon: javax_accessibility_AccessibleIcon[];
accessibleRelationSet: javax_accessibility_AccessibleRelationSet;
accessibleTable: javax_accessibility_AccessibleTable;
getLocale(): java_util_Locale;
firePropertyChange(arg0: string, arg1: java_lang_Object, arg2: java_lang_Object): void;
getAccessibleChildrenCount(): number;
getAccessibleChild(arg0: number): javax_accessibility_Accessible;
getAccessibleComponent(): javax_accessibility_AccessibleComponent;
getAccessibleIndexInParent(): number;
getAccessibleStateSet(): javax_accessibility_AccessibleStateSet;
getAccessibleParent(): javax_accessibility_Accessible;
getAccessibleSelection(): javax_accessibility_AccessibleSelection;
getAccessibleName(): string;
setAccessibleName(arg0: string): void;
getAccessibleDescription(): string;
setAccessibleDescription(arg0: string): void;
getAccessibleRole(): javax_accessibility_AccessibleRole;
setAccessibleParent(arg0: javax_accessibility_Accessible): void;
getAccessibleAction(): javax_accessibility_AccessibleAction;
getAccessibleText(): javax_accessibility_AccessibleText;
getAccessibleEditableText(): javax_accessibility_AccessibleEditableText;
getAccessibleValue(): javax_accessibility_AccessibleValue;
getAccessibleIcon(): javax_accessibility_AccessibleIcon[];
getAccessibleRelationSet(): javax_accessibility_AccessibleRelationSet;
getAccessibleTable(): javax_accessibility_AccessibleTable;
addPropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
removePropertyChangeListener(arg0: java_beans_PropertyChangeListener): void;
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
location: java_awt_Point;
size: java_awt_Dimension;
fontMetrics: java_awt_FontMetrics;
locationOnScreen: java_awt_Point;
accessibleAt: javax_accessibility_Accessible;
foreground: java_awt_Color;
background: java_awt_Color;
cursor: java_awt_Cursor;
font: java_awt_Font;
bounds: java_awt_Rectangle;
contains(arg0: java_awt_Point): boolean;
getLocation(): java_awt_Point;
getSize(): java_awt_Dimension;
setSize(arg0: java_awt_Dimension): void;
isEnabled(): boolean;
setFont(arg0: java_awt_Font): void;
setBounds(arg0: java_awt_Rectangle): void;
getFontMetrics(arg0: java_awt_Font): java_awt_FontMetrics;
isShowing(): boolean;
requestFocus(): void;
getLocationOnScreen(): java_awt_Point;
getAccessibleAt(arg0: java_awt_Point): javax_accessibility_Accessible;
addFocusListener(arg0: java_awt_event_FocusListener): void;
removeFocusListener(arg0: java_awt_event_FocusListener): void;
isFocusTraversable(): boolean;
getForeground(): java_awt_Color;
setForeground(arg0: java_awt_Color): void;
getBackground(): java_awt_Color;
setBackground(arg0: java_awt_Color): void;
setLocation(arg0: java_awt_Point): void;
getCursor(): java_awt_Cursor;
isVisible(): boolean;
setEnabled(arg0: boolean): void;
setCursor(arg0: java_awt_Cursor): void;
getFont(): java_awt_Font;
setVisible(arg0: boolean): void;
getBounds(): java_awt_Rectangle;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { AccessibleState as javax_accessibility_AccessibleState } from 'javax.accessibility';
import { Object as java_lang_Object } from 'java.lang';

  export class AccessibleStateSet extends java_lang_Object {

add(arg0: javax_accessibility_AccessibleState): boolean;
remove(arg0: javax_accessibility_AccessibleState): boolean;
toString(): string;
clear(): void;
contains(arg0: javax_accessibility_AccessibleState): boolean;
toArray(): javax_accessibility_AccessibleState[];
addAll(arg0: javax_accessibility_AccessibleState[]): void;
constructor();
constructor(arg0: javax_accessibility_AccessibleState[]);
  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AccessibleState as javax_accessibility_AccessibleState, AccessibleBundle as javax_accessibility_AccessibleBundle } from 'javax.accessibility';

  export class AccessibleState extends javax_accessibility_AccessibleBundle {
static ACTIVE: javax_accessibility_AccessibleState;
static PRESSED: javax_accessibility_AccessibleState;
static ARMED: javax_accessibility_AccessibleState;
static BUSY: javax_accessibility_AccessibleState;
static CHECKED: javax_accessibility_AccessibleState;
static EDITABLE: javax_accessibility_AccessibleState;
static EXPANDABLE: javax_accessibility_AccessibleState;
static COLLAPSED: javax_accessibility_AccessibleState;
static EXPANDED: javax_accessibility_AccessibleState;
static ENABLED: javax_accessibility_AccessibleState;
static FOCUSABLE: javax_accessibility_AccessibleState;
static FOCUSED: javax_accessibility_AccessibleState;
static ICONIFIED: javax_accessibility_AccessibleState;
static MODAL: javax_accessibility_AccessibleState;
static OPAQUE: javax_accessibility_AccessibleState;
static RESIZABLE: javax_accessibility_AccessibleState;
static MULTISELECTABLE: javax_accessibility_AccessibleState;
static SELECTABLE: javax_accessibility_AccessibleState;
static SELECTED: javax_accessibility_AccessibleState;
static SHOWING: javax_accessibility_AccessibleState;
static VISIBLE: javax_accessibility_AccessibleState;
static VERTICAL: javax_accessibility_AccessibleState;
static HORIZONTAL: javax_accessibility_AccessibleState;
static SINGLE_LINE: javax_accessibility_AccessibleState;
static MULTI_LINE: javax_accessibility_AccessibleState;
static TRANSIENT: javax_accessibility_AccessibleState;
static MANAGES_DESCENDANTS: javax_accessibility_AccessibleState;
static INDETERMINATE: javax_accessibility_AccessibleState;
static TRUNCATED: javax_accessibility_AccessibleState;
class: java_lang_Class<java_lang_Object>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Locale as java_util_Locale } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';

  export class AccessibleBundle extends java_lang_Object {

toString(): string;
toDisplayString(): string;
toDisplayString(arg0: java_util_Locale): string;
constructor();
  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Accessible as javax_accessibility_Accessible } from 'javax.accessibility';

  export class AccessibleSelection {
accessibleSelectionCount: number;
accessibleSelection: javax_accessibility_Accessible;
getAccessibleSelectionCount(): number;
addAccessibleSelection(arg0: number): void;
removeAccessibleSelection(arg0: number): void;
clearAccessibleSelection(): void;
selectAllAccessibleSelection(): void;
getAccessibleSelection(arg0: number): javax_accessibility_Accessible;
isAccessibleChildSelected(arg0: number): boolean;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AccessibleRole as javax_accessibility_AccessibleRole, AccessibleBundle as javax_accessibility_AccessibleBundle } from 'javax.accessibility';

  export class AccessibleRole extends javax_accessibility_AccessibleBundle {
static ALERT: javax_accessibility_AccessibleRole;
static COLUMN_HEADER: javax_accessibility_AccessibleRole;
static CANVAS: javax_accessibility_AccessibleRole;
static COMBO_BOX: javax_accessibility_AccessibleRole;
static DESKTOP_ICON: javax_accessibility_AccessibleRole;
static HTML_CONTAINER: javax_accessibility_AccessibleRole;
static INTERNAL_FRAME: javax_accessibility_AccessibleRole;
static DESKTOP_PANE: javax_accessibility_AccessibleRole;
static OPTION_PANE: javax_accessibility_AccessibleRole;
static WINDOW: javax_accessibility_AccessibleRole;
static FRAME: javax_accessibility_AccessibleRole;
static DIALOG: javax_accessibility_AccessibleRole;
static COLOR_CHOOSER: javax_accessibility_AccessibleRole;
static DIRECTORY_PANE: javax_accessibility_AccessibleRole;
static FILE_CHOOSER: javax_accessibility_AccessibleRole;
static FILLER: javax_accessibility_AccessibleRole;
static HYPERLINK: javax_accessibility_AccessibleRole;
static ICON: javax_accessibility_AccessibleRole;
static LABEL: javax_accessibility_AccessibleRole;
static ROOT_PANE: javax_accessibility_AccessibleRole;
static GLASS_PANE: javax_accessibility_AccessibleRole;
static LAYERED_PANE: javax_accessibility_AccessibleRole;
static LIST: javax_accessibility_AccessibleRole;
static LIST_ITEM: javax_accessibility_AccessibleRole;
static MENU_BAR: javax_accessibility_AccessibleRole;
static POPUP_MENU: javax_accessibility_AccessibleRole;
static MENU: javax_accessibility_AccessibleRole;
static MENU_ITEM: javax_accessibility_AccessibleRole;
static SEPARATOR: javax_accessibility_AccessibleRole;
static PAGE_TAB_LIST: javax_accessibility_AccessibleRole;
static PAGE_TAB: javax_accessibility_AccessibleRole;
static PANEL: javax_accessibility_AccessibleRole;
static PROGRESS_BAR: javax_accessibility_AccessibleRole;
static PASSWORD_TEXT: javax_accessibility_AccessibleRole;
static PUSH_BUTTON: javax_accessibility_AccessibleRole;
static TOGGLE_BUTTON: javax_accessibility_AccessibleRole;
static CHECK_BOX: javax_accessibility_AccessibleRole;
static RADIO_BUTTON: javax_accessibility_AccessibleRole;
static ROW_HEADER: javax_accessibility_AccessibleRole;
static SCROLL_PANE: javax_accessibility_AccessibleRole;
static SCROLL_BAR: javax_accessibility_AccessibleRole;
static VIEWPORT: javax_accessibility_AccessibleRole;
static SLIDER: javax_accessibility_AccessibleRole;
static SPLIT_PANE: javax_accessibility_AccessibleRole;
static TABLE: javax_accessibility_AccessibleRole;
static TEXT: javax_accessibility_AccessibleRole;
static TREE: javax_accessibility_AccessibleRole;
static TOOL_BAR: javax_accessibility_AccessibleRole;
static TOOL_TIP: javax_accessibility_AccessibleRole;
static AWT_COMPONENT: javax_accessibility_AccessibleRole;
static SWING_COMPONENT: javax_accessibility_AccessibleRole;
static UNKNOWN: javax_accessibility_AccessibleRole;
static STATUS_BAR: javax_accessibility_AccessibleRole;
static DATE_EDITOR: javax_accessibility_AccessibleRole;
static SPIN_BOX: javax_accessibility_AccessibleRole;
static FONT_CHOOSER: javax_accessibility_AccessibleRole;
static GROUP_BOX: javax_accessibility_AccessibleRole;
static HEADER: javax_accessibility_AccessibleRole;
static FOOTER: javax_accessibility_AccessibleRole;
static PARAGRAPH: javax_accessibility_AccessibleRole;
static RULER: javax_accessibility_AccessibleRole;
static EDITBAR: javax_accessibility_AccessibleRole;
static PROGRESS_MONITOR: javax_accessibility_AccessibleRole;
class: java_lang_Class<java_lang_Object>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {


  export class AccessibleAction {
static TOGGLE_EXPAND: string;
static INCREMENT: string;
static DECREMENT: string;
static CLICK: string;
static TOGGLE_POPUP: string;
accessibleActionCount: number;
accessibleActionDescription: string;
getAccessibleActionCount(): number;
getAccessibleActionDescription(arg0: number): string;
doAccessibleAction(arg0: number): boolean;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Point as java_awt_Point, Rectangle as java_awt_Rectangle } from 'java.awt';
import { AttributeSet as javax_swing_text_AttributeSet } from 'javax.swing.text';

  export class AccessibleText {
static CHARACTER: number;
static WORD: number;
static SENTENCE: number;
charCount: number;
selectedText: string;
indexAtPoint: number;
characterBounds: java_awt_Rectangle;
caretPosition: number;
atIndex: string;
afterIndex: string;
beforeIndex: string;
characterAttribute: javax_swing_text_AttributeSet;
selectionStart: number;
selectionEnd: number;
getCharCount(): number;
getSelectedText(): string;
getIndexAtPoint(arg0: java_awt_Point): number;
getCharacterBounds(arg0: number): java_awt_Rectangle;
getCaretPosition(): number;
getAtIndex(arg0: number, arg1: number): string;
getAfterIndex(arg0: number, arg1: number): string;
getBeforeIndex(arg0: number, arg1: number): string;
getCharacterAttribute(arg0: number): javax_swing_text_AttributeSet;
getSelectionStart(): number;
getSelectionEnd(): number;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { AttributeSet as javax_swing_text_AttributeSet } from 'javax.swing.text';
import { Point as java_awt_Point, Rectangle as java_awt_Rectangle } from 'java.awt';
import { AccessibleText as javax_accessibility_AccessibleText } from 'javax.accessibility';

  export class AccessibleEditableText implements javax_accessibility_AccessibleText {
textRange: string;
charCount: number;
selectedText: string;
indexAtPoint: number;
characterBounds: java_awt_Rectangle;
caretPosition: number;
atIndex: string;
afterIndex: string;
beforeIndex: string;
characterAttribute: javax_swing_text_AttributeSet;
selectionStart: number;
selectionEnd: number;
delete(arg0: number, arg1: number): void;
paste(arg0: number): void;
setAttributes(arg0: number, arg1: number, arg2: javax_swing_text_AttributeSet): void;
setTextContents(arg0: string): void;
insertTextAtIndex(arg0: number, arg1: string): void;
getTextRange(arg0: number, arg1: number): string;
cut(arg0: number, arg1: number): void;
replaceText(arg0: number, arg1: number, arg2: string): void;
selectText(arg0: number, arg1: number): void;
getCharCount(): number;
getSelectedText(): string;
getIndexAtPoint(arg0: java_awt_Point): number;
getCharacterBounds(arg0: number): java_awt_Rectangle;
getCaretPosition(): number;
getAtIndex(arg0: number, arg1: number): string;
getAfterIndex(arg0: number, arg1: number): string;
getBeforeIndex(arg0: number, arg1: number): string;
getCharacterAttribute(arg0: number): javax_swing_text_AttributeSet;
getSelectionStart(): number;
getSelectionEnd(): number;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Number as java_lang_Number } from 'java.lang';

  export class AccessibleValue {
currentAccessibleValue: java_lang_Number;
minimumAccessibleValue: java_lang_Number;
maximumAccessibleValue: java_lang_Number;
getCurrentAccessibleValue(): java_lang_Number;
setCurrentAccessibleValue(arg0: java_lang_Number): boolean;
getMinimumAccessibleValue(): java_lang_Number;
getMaximumAccessibleValue(): java_lang_Number;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {


  export class AccessibleIcon {
accessibleIconDescription: string;
accessibleIconWidth: number;
accessibleIconHeight: number;
getAccessibleIconDescription(): string;
setAccessibleIconDescription(arg0: string): void;
getAccessibleIconWidth(): number;
getAccessibleIconHeight(): number;

  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { AccessibleRelation as javax_accessibility_AccessibleRelation } from 'javax.accessibility';
import { Object as java_lang_Object } from 'java.lang';

  export class AccessibleRelationSet extends java_lang_Object {

add(arg0: javax_accessibility_AccessibleRelation): boolean;
remove(arg0: javax_accessibility_AccessibleRelation): boolean;
get(arg0: string): javax_accessibility_AccessibleRelation;
toString(): string;
clear(): void;
contains(arg0: string): boolean;
size(): number;
toArray(): javax_accessibility_AccessibleRelation[];
addAll(arg0: javax_accessibility_AccessibleRelation[]): void;
constructor();
constructor(arg0: javax_accessibility_AccessibleRelation[]);
  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { AccessibleBundle as javax_accessibility_AccessibleBundle } from 'javax.accessibility';

  export class AccessibleRelation extends javax_accessibility_AccessibleBundle {
static LABEL_FOR: string;
static LABELED_BY: string;
static MEMBER_OF: string;
static CONTROLLER_FOR: string;
static CONTROLLED_BY: string;
static FLOWS_TO: string;
static FLOWS_FROM: string;
static SUBWINDOW_OF: string;
static PARENT_WINDOW_OF: string;
static EMBEDS: string;
static EMBEDDED_BY: string;
static CHILD_NODE_OF: string;
static LABEL_FOR_PROPERTY: string;
static LABELED_BY_PROPERTY: string;
static MEMBER_OF_PROPERTY: string;
static CONTROLLER_FOR_PROPERTY: string;
static CONTROLLED_BY_PROPERTY: string;
static FLOWS_TO_PROPERTY: string;
static FLOWS_FROM_PROPERTY: string;
static SUBWINDOW_OF_PROPERTY: string;
static PARENT_WINDOW_OF_PROPERTY: string;
static EMBEDS_PROPERTY: string;
static EMBEDDED_BY_PROPERTY: string;
static CHILD_NODE_OF_PROPERTY: string;
key: string;
target: java_lang_Object[];
class: java_lang_Class<java_lang_Object>;
getKey(): string;
getTarget(): java_lang_Object[];
setTarget(arg0: java_lang_Object): void;
setTarget(arg0: java_lang_Object[]): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor(arg0: string, arg1: java_lang_Object[]);
constructor(arg0: string, arg1: java_lang_Object);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'javax.accessibility' {
import { Accessible as javax_accessibility_Accessible, AccessibleTable as javax_accessibility_AccessibleTable } from 'javax.accessibility';

  export class AccessibleTable {
accessibleAt: javax_accessibility_Accessible;
accessibleCaption: javax_accessibility_Accessible;
accessibleSummary: javax_accessibility_Accessible;
accessibleRowCount: number;
accessibleColumnCount: number;
accessibleRowExtentAt: number;
accessibleColumnExtentAt: number;
accessibleRowHeader: javax_accessibility_AccessibleTable;
accessibleColumnHeader: javax_accessibility_AccessibleTable;
accessibleRowDescription: javax_accessibility_Accessible;
accessibleColumnDescription: javax_accessibility_Accessible;
selectedAccessibleRows: number[];
selectedAccessibleColumns: number[];
getAccessibleAt(arg0: number, arg1: number): javax_accessibility_Accessible;
getAccessibleCaption(): javax_accessibility_Accessible;
setAccessibleCaption(arg0: javax_accessibility_Accessible): void;
getAccessibleSummary(): javax_accessibility_Accessible;
setAccessibleSummary(arg0: javax_accessibility_Accessible): void;
getAccessibleRowCount(): number;
getAccessibleColumnCount(): number;
getAccessibleRowExtentAt(arg0: number, arg1: number): number;
getAccessibleColumnExtentAt(arg0: number, arg1: number): number;
getAccessibleRowHeader(): javax_accessibility_AccessibleTable;
setAccessibleRowHeader(arg0: javax_accessibility_AccessibleTable): void;
getAccessibleColumnHeader(): javax_accessibility_AccessibleTable;
setAccessibleColumnHeader(arg0: javax_accessibility_AccessibleTable): void;
getAccessibleRowDescription(arg0: number): javax_accessibility_Accessible;
setAccessibleRowDescription(arg0: number, arg1: javax_accessibility_Accessible): void;
getAccessibleColumnDescription(arg0: number): javax_accessibility_Accessible;
setAccessibleColumnDescription(arg0: number, arg1: javax_accessibility_Accessible): void;
isAccessibleSelected(arg0: number, arg1: number): boolean;
isAccessibleRowSelected(arg0: number): boolean;
isAccessibleColumnSelected(arg0: number): boolean;
getSelectedAccessibleRows(): number[];
getSelectedAccessibleColumns(): number[];

  }
}