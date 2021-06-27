import { test } from 'craftjs-plugin';
import {
  clickEvent,
  color,
  style,
  text,
  tooltip,
  translate,
} from 'craftjs-plugin/chat';
import { Component } from 'net.kyori.adventure.text';
import { ClickEvent, HoverEvent } from 'net.kyori.adventure.text.event';
import { Action as ClickAction } from 'net.kyori.adventure.text.event.ClickEvent';
import {
  NamedTextColor,
  TextColor,
  TextDecoration,
} from 'net.kyori.adventure.text.format';
import { Bukkit } from 'org.bukkit';

test('base components', (t) => {
  t.eq(text('test string'), Component.text('test string'), 'text component');
  t.eq(
    translate('foo.bar', 'arg', 'another'),
    Component.translatable()
      .key('foo.bar')
      .args(Component.text('arg'), Component.text('another'))
      .build(),
    'translatable component',
  );
  t.doesNotThrow(
    () => Bukkit.consoleSender.sendMessage(text('Hello, console!')),
    'send to console',
  );
});

test('chat colors', (t) => {
  const basic = Component.text('colored', NamedTextColor.AQUA);
  t.eq(color(NamedTextColor.AQUA, text('colored')), basic, 'basic ChatColor');

  const rgb = Component.text('colored', TextColor.fromCSSHexString('#001122'));
  t.eq(color('#001122', text('colored')), rgb, '1.16+ RGB ChatColor');
});

test('chat styles', (t) => {
  t.truthy(
    style('bold').style().hasDecoration(TextDecoration.BOLD),
    'bold text',
  );
  t.truthy(
    style('italic').style().hasDecoration(TextDecoration.ITALIC),
    'italic text',
  );
  t.truthy(
    style('obfuscated').style().hasDecoration(TextDecoration.OBFUSCATED),
    'obfuscated text',
  );
  t.truthy(
    style('strikethrough').style().hasDecoration(TextDecoration.STRIKETHROUGH),
    'strikethrough text',
  );
  t.truthy(
    style('underlined').style().hasDecoration(TextDecoration.UNDERLINED),
    'underlined text',
  );
});

test('click events', (t) => {
  const actual = clickEvent(
    ClickAction.OPEN_URL,
    'https://github.com',
    text('click this!'),
  );
  const expected = Component.text()
    .content('click this!')
    .clickEvent(
      ClickEvent.clickEvent(ClickAction.OPEN_URL, 'https://github.com'),
    )
    .build();
  t.eq(actual, expected, 'text with click event');
});

test('hover events', (t) => {
  const actual = tooltip(text('tooltip text'), text('other text'));
  const expected = Component.text()
    .content('other text')
    .hoverEvent(HoverEvent.showText(Component.text('tooltip text')))
    .build();
  t.eq(actual, expected, 'tooltip text');
});
