import { ChatColor } from 'net.md_5.bungee.api';
import {
  BaseComponent,
  ClickEvent,
  HoverEvent,
  TextComponent,
  TranslatableComponent,
} from 'net.md_5.bungee.api.chat';
import { Action as ClickAction } from 'net.md_5.bungee.api.chat.ClickEvent';
import { Text } from 'net.md_5.bungee.api.chat.hover.content';
import { Action as HoverAction } from 'net.md_5.bungee.api.chat.HoverEvent';

/**
 * Makes a parent component for given components.
 * @param components Components.
 */
function parent(components: BaseComponent[]): BaseComponent {
  if (components.length == 1) {
    return components[0]; // No need to create another component
  }
  const base = new TextComponent(); // BaseComponent should not be instantiated
  base.extra = components;
  return base;
}

/**
 * Creates a text component.
 * @param content Plain text content.
 */
export function text(content: string): TextComponent {
  return new TextComponent(content);
}

/**
 * Creates a translatable text component.
 * @param translate Translation key.
 * @param args Arguments for formatting the translated text.
 */
export function translate(
  translate: string,
  ...args: string[]
): TranslatableComponent {
  return new TranslatableComponent(translate, args);
}

/**
 * Colorizes the given components.
 * @param color Color to use. RGB colors should be given in '#RRGGBB' format.
 * @param components Components to colorize.
 */
export function color(
  color: ChatColor | string,
  ...components: BaseComponent[]
): BaseComponent {
  if (typeof color == 'string') {
    color = ChatColor.of(color);
  }
  const base = parent(components);
  base.color = color;
  return base;
}

type ChatStyle =
  | 'bold'
  | 'italic'
  | 'obfuscated'
  | 'strikethrough'
  | 'underlined';

/**
 * Applies a style (other than color) to given components.
 * @param style Chat style name.
 * @param components Components.
 */
export function style(
  style: ChatStyle,
  ...components: BaseComponent[]
): BaseComponent {
  const base = parent(components);
  switch (style) {
    case 'bold':
      base.bold = true;
      break;
    case 'italic':
      base.italic = true;
      break;
    case 'obfuscated':
      base.obfuscated = true;
      break;
    case 'strikethrough':
      base.strikethrough = true;
      break;
    case 'underlined':
      base.underlined = true;
      break;
  }
  return base;
}

/**
 * Adds a click event for given components.
 * @param action Action to perform when text is clicked.
 * @param value Action argument, e.g. URL to be opened.
 * @param components Components.
 */
export function clickEvent(
  action: ClickAction,
  value: string,
  ...components: BaseComponent[]
): BaseComponent {
  const base = parent(components);
  base.clickEvent = new ClickEvent(action, value);
  return base;
}

/**
 * Adds a tooltip that is displayed when given components are hovered over.
 * @param tooltip Tooltip text (formatting supported).
 * @param components Components to add the tooltip for.
 */
export function tooltip(
  tooltip: BaseComponent,
  ...components: BaseComponent[]
): BaseComponent {
  const base = parent(components);
  base.hoverEvent = new HoverEvent(HoverAction.SHOW_TEXT, new Text([tooltip]));
  return base;
}
