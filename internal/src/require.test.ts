import { test } from 'craftjs-plugin';
import { System } from 'java.lang';
import { Bukkit } from 'org.bukkit';
import { DamageCause } from 'org.bukkit.event.entity.EntityDamageEvent';

test('Java imports', (t) => {
  t.doesNotThrow(() => System.getProperty('foo.bar'), 'normal class, JDK');
  t.doesNotThrow(() => Bukkit.worlds, 'normal class, Bukkit');
  t.doesNotThrow(() => DamageCause.values(), 'inner class');
});
