import { test } from 'craftjs-plugin';
import {
  clickEvent,
  color,
  style,
  text,
  tooltip,
  translate,
} from 'craftjs-plugin/chat';
import { ChatColor } from 'net.md_5.bungee.api';
import {
  ClickEvent,
  HoverEvent,
  TextComponent,
  TranslatableComponent,
} from 'net.md_5.bungee.api.chat';
import { Action as ClickAction } from 'net.md_5.bungee.api.chat.ClickEvent';
import { Text } from 'net.md_5.bungee.api.chat.hover.content';
import { Action as HoverAction } from 'net.md_5.bungee.api.chat.HoverEvent';
import { Bukkit } from 'org.bukkit';

test('base components', (t) => {
  t.eq(text('test string'), new TextComponent('test string'), 'text component');
  t.eq(
    translate('foo.bar', 'arg', 'another'),
    new TranslatableComponent('foo.bar', 'arg', 'another'),
    'translatable component',
  );
  t.doesNotThrow(
    () => Bukkit.consoleSender.sendMessage(text('Hello, console!')),
    'send to console',
  );
});

test('chat colors', (t) => {
  const basic = new TextComponent('colored');
  basic.color = ChatColor.AQUA;
  t.eq(color(ChatColor.AQUA, text('colored')), basic, 'basic ChatColor');

  const rgb = new TextComponent('colored');
  rgb.color = ChatColor.of('#001122');
  t.eq(color('#001122', text('colored')), rgb, '1.16+ RGB ChatColor');
});

test('chat styles', (t) => {
  t.truthy(style('bold').bold, 'bold text');
  t.truthy(style('italic').italic, 'italic text');
  t.truthy(style('obfuscated').obfuscated, 'obfuscated text');
  t.truthy(style('strikethrough').strikethrough, 'strikethrough text');
  t.truthy(style('underlined').underlined, 'underlined text');
});

test('click events', (t) => {
  const actual = clickEvent(
    ClickAction.OPEN_URL,
    'https://github.com',
    text('click this!'),
  );
  const expected = new TextComponent('click this!');
  expected.clickEvent = new ClickEvent(
    ClickAction.OPEN_URL,
    'https://github.com',
  );
  t.eq(actual, expected, 'text with click event');
});

test('hover events', (t) => {
  const actual = tooltip(text('tooltip text'), text('other text'));
  const expected = new TextComponent('other text');
  expected.hoverEvent = new HoverEvent(
    HoverAction.SHOW_TEXT,
    actual.hoverEvent.contents,
  );
  t.eq(actual, expected, 'tooltip text');
});
