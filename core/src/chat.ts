import {
  BuildableComponent,
  Component,
  TextComponent,
  TranslatableComponent,
} from 'net.kyori.adventure.text';
import { ClickEvent, HoverEvent } from 'net.kyori.adventure.text.event';
import { Action as ClickAction } from 'net.kyori.adventure.text.event.ClickEvent';
import {
  Style,
  TextColor,
  TextDecoration,
} from 'net.kyori.adventure.text.format';
import { Builder } from 'net.kyori.adventure.text.TextComponent';

type ComponentText = Component | string;

/**
 * Makes a parent component for given components.
 * @param components Components or strings.
 */
function parent(components: ComponentText[]): Builder {
  // If there is only one component, try to avoid creating more
  if (components.length == 1) {
    const child = components[0];
    if (typeof child == 'string') {
      // Just create a builder for new text component
      return Component.text().content(child);
    } else if (child instanceof BuildableComponent) {
      // Convert component back to builder
      return child.toBuilder();
    }
  }
  let builder = Component.text();
  for (const component of components) {
    // Convert strings to components
    builder = builder.append(
      typeof component == 'string' ? Component.text(component) : component,
    );
  }
  return builder;
}

/**
 * Creates a text component.
 * @param content Plain text content.
 */
export function text(content: string): TextComponent {
  return Component.text(content);
}

/**
 * Creates a translatable text component.
 * @param key Translation key.
 * @param args Arguments for formatting the translated text.
 */
export function translate(
  key: string,
  ...args: string[]
): TranslatableComponent {
  return Component.translatable()
    .key(key)
    .args(args.map((arg) => Component.text(arg)))
    .build();
}

/**
 * Colorizes the given components.
 * @param color Color to use. RGB colors should be given in '#RRGGBB' format.
 * @param components Components or strings to colorize.
 */
export function color(
  color: TextColor | string,
  ...components: ComponentText[]
): Component {
  if (typeof color == 'string') {
    color = TextColor.fromCSSHexString(color) ?? TextColor.color(0);
  }
  return parent(components).color(color).build();
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
 * @param components Components or strings.
 */
export function style(
  style: ChatStyle,
  ...components: ComponentText[]
): Component {
  let decoration: TextDecoration;
  switch (style) {
    case 'bold':
      decoration = TextDecoration.BOLD;
      break;
    case 'italic':
      decoration = TextDecoration.ITALIC;
      break;
    case 'obfuscated':
      decoration = TextDecoration.OBFUSCATED;
      break;
    case 'strikethrough':
      decoration = TextDecoration.STRIKETHROUGH;
      break;
    case 'underlined':
      decoration = TextDecoration.UNDERLINED;
      break;
  }
  return parent(components).style(Style.style(decoration)).build();
}

/**
 * Adds a click event for given components.
 * @param action Action to perform when text is clicked.
 * @param value Action argument, e.g. URL to be opened.
 * @param components Components or strings.
 */
export function clickEvent(
  action: ClickAction,
  value: string,
  ...components: ComponentText[]
): Component {
  return parent(components)
    .clickEvent(ClickEvent.clickEvent(action, value))
    .build();
}

/**
 * Adds a tooltip that is displayed when given components are hovered over.
 * @param tooltip Tooltip text (formatting supported).
 * @param components Components or strings to add the tooltip for.
 */
export function tooltip(
  tooltip: Component,
  ...components: ComponentText[]
): Component {
  return parent(components).hoverEvent(HoverEvent.showText(tooltip)).build();
}
