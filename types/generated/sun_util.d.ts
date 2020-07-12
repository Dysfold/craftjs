//@ts-nocheck

declare module 'sun.util.locale' {
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';
import { CacheEntry as sun_util_locale_LocaleObjectCache_CacheEntry } from 'sun.util.locale.LocaleObjectCache';
import { ReferenceQueue as java_lang_ref_ReferenceQueue } from 'java.lang.ref';
import { Object as java_lang_Object } from 'java.lang';

  export class LocaleObjectCache<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_Object {
map: java_util_concurrent_ConcurrentMap<K, sun_util_locale_LocaleObjectCache_CacheEntry<K, V>>;
queue: java_lang_ref_ReferenceQueue<V>;
get(arg0: K): V;
constructor();
constructor(arg0: number, arg1: number, arg2: number);
  }
}//@ts-nocheck

declare module 'sun.util.locale.LocaleObjectCache' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { SoftReference as java_lang_ref_SoftReference } from 'java.lang.ref';

  export class CacheEntry<K extends java_lang_Object, V extends java_lang_Object> extends java_lang_ref_SoftReference<V> {
key: K;
class: java_lang_Class<java_lang_Object>;
clear(): void;
isEnqueued(): boolean;
enqueue(): boolean;
static reachabilityFence(arg0: java_lang_Object): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'sun.util.locale' {
import { BaseLocale as sun_util_locale_BaseLocale } from 'sun.util.locale';
import { Object as java_lang_Object } from 'java.lang';
import { Cache as sun_util_locale_BaseLocale_Cache } from 'sun.util.locale.BaseLocale';

  export class BaseLocale extends java_lang_Object {
static SEP: string;
static CACHE: sun_util_locale_BaseLocale_Cache;
language: string;
script: string;
region: string;
variant: string;
hash: number;
script: string;
variant: string;
region: string;
static instance: sun_util_locale_BaseLocale;
language: string;
getScript(): string;
getVariant(): string;
static createInstance(arg0: string, arg1: string): sun_util_locale_BaseLocale;
getRegion(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static getInstance(arg0: string, arg1: string, arg2: string, arg3: string): sun_util_locale_BaseLocale;
getLanguage(): string;

  }
}//@ts-nocheck

declare module 'sun.util.locale.BaseLocale' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { LocaleObjectCache as sun_util_locale_LocaleObjectCache, BaseLocale as sun_util_locale_BaseLocale } from 'sun.util.locale';
import { Key as sun_util_locale_BaseLocale_Key } from 'sun.util.locale.BaseLocale';

  export class Cache extends sun_util_locale_LocaleObjectCache<sun_util_locale_BaseLocale_Key, sun_util_locale_BaseLocale> {
class: java_lang_Class<java_lang_Object>;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
  }
}//@ts-nocheck

declare module 'sun.util.locale.BaseLocale' {
import { Object as java_lang_Object } from 'java.lang';
import { Key as sun_util_locale_BaseLocale_Key } from 'sun.util.locale.BaseLocale';
import { SoftReference as java_lang_ref_SoftReference } from 'java.lang.ref';
import { BaseLocale as sun_util_locale_BaseLocale } from 'sun.util.locale';

  export class Key extends java_lang_Object {
holderRef: java_lang_ref_SoftReference<sun_util_locale_BaseLocale>;
holder: sun_util_locale_BaseLocale;
normalized: boolean;
hash: number;
static $assertionsDisabled: boolean;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static normalize(arg0: sun_util_locale_BaseLocale_Key): sun_util_locale_BaseLocale_Key;

  }
}//@ts-nocheck

declare module 'sun.util.locale' {
import { Character as java_lang_Character, Object as java_lang_Object } from 'java.lang';
import { Extension as sun_util_locale_Extension, LocaleExtensions as sun_util_locale_LocaleExtensions } from 'sun.util.locale';
import { Set as java_util_Set, Map as java_util_Map } from 'java.util';

  export class LocaleExtensions extends java_lang_Object {
extensionMap: java_util_Map<java_lang_Character, sun_util_locale_Extension>;
id: string;
static CALENDAR_JAPANESE: sun_util_locale_LocaleExtensions;
static NUMBER_THAI: sun_util_locale_LocaleExtensions;
static $assertionsDisabled: boolean;
extension: sun_util_locale_Extension;
unicodeLocaleAttributes: java_util_Set<string>;
unicodeLocaleType: string;
unicodeLocaleKeys: java_util_Set<string>;
extensionValue: string;
keys: java_util_Set<java_lang_Character>;
iD: string;
getExtension(arg0: java_lang_Character): sun_util_locale_Extension;
getUnicodeLocaleAttributes(): java_util_Set<string>;
getUnicodeLocaleType(arg0: string): string;
getUnicodeLocaleKeys(): java_util_Set<string>;
static isValidKey(arg0: string): boolean;
getExtensionValue(arg0: java_lang_Character): string;
getKeys(): java_util_Set<java_lang_Character>;
getID(): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
isEmpty(): boolean;
static isValidUnicodeLocaleKey(arg0: string): boolean;

  }
}//@ts-nocheck

declare module 'sun.util.locale' {
import { Object as java_lang_Object } from 'java.lang';

  export class Extension extends java_lang_Object {
key: string;
value: string;
id: string;
iD: string;
value: string;
key: string;
getID(): string;
toString(): string;
getValue(): string;
getKey(): string;

  }
}//@ts-nocheck

declare module 'sun.util.calendar' {
import { CalendarDate as sun_util_calendar_CalendarDate, Gregorian as sun_util_calendar_Gregorian, CalendarSystem as sun_util_calendar_CalendarSystem, AbstractCalendar as sun_util_calendar_AbstractCalendar } from 'sun.util.calendar';
import { Date as sun_util_calendar_BaseCalendar_Date } from 'sun.util.calendar.BaseCalendar';
import { TimeZone as java_util_TimeZone } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class BaseCalendar extends sun_util_calendar_AbstractCalendar {
static JANUARY: number;
static FEBRUARY: number;
static MARCH: number;
static APRIL: number;
static MAY: number;
static JUNE: number;
static JULY: number;
static AUGUST: number;
static SEPTEMBER: number;
static OCTOBER: number;
static NOVEMBER: number;
static DECEMBER: number;
static SUNDAY: number;
static MONDAY: number;
static TUESDAY: number;
static WEDNESDAY: number;
static THURSDAY: number;
static FRIDAY: number;
static SATURDAY: number;
static BASE_YEAR: number;
static FIXED_DATES: number[];
static DAYS_IN_MONTH: number[];
static ACCUMULATED_DAYS_IN_MONTH: number[];
static ACCUMULATED_DAYS_IN_MONTH_LEAP: number[];
static $assertionsDisabled: boolean;
dayOfWeek: number;
dayOfYear: number;
fixedDate: number;
fixedDate: number;
calendarDateFromFixedDate: void;
yearFromFixedDate: number;
monthLength: number;
yearLength: number;
yearLengthInMonths: number;
static dayOfWeekFromFixedDate: number;
static gregorianCalendar: sun_util_calendar_Gregorian;
name: string;
class: java_lang_Class<java_lang_Object>;
getDayOfWeek(arg0: sun_util_calendar_CalendarDate): number;
getDayOfYear(arg0: sun_util_calendar_CalendarDate): number;
getFixedDate(arg0: number, arg1: number, arg2: number, arg3: sun_util_calendar_BaseCalendar_Date): number;
getFixedDate(arg0: sun_util_calendar_CalendarDate): number;
getCalendarDateFromFixedDate(arg0: sun_util_calendar_CalendarDate, arg1: number): void;
getYearFromFixedDate(arg0: number): number;
getMonthLength(arg0: sun_util_calendar_CalendarDate): number;
getYearLength(arg0: sun_util_calendar_CalendarDate): number;
getYearLengthInMonths(arg0: sun_util_calendar_CalendarDate): number;
static getDayOfWeekFromFixedDate(arg0: number): number;
validate(arg0: sun_util_calendar_CalendarDate): boolean;
normalize(arg0: sun_util_calendar_CalendarDate): boolean;
static getGregorianCalendar(): sun_util_calendar_Gregorian;
newCalendarDate(arg0: java_util_TimeZone): sun_util_calendar_CalendarDate;
newCalendarDate(): sun_util_calendar_CalendarDate;
static forName(arg0: string): sun_util_calendar_CalendarSystem;
getName(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
constructor();
  }
}//@ts-nocheck

declare module 'sun.util.calendar' {
import { TimeZone as java_util_TimeZone, Locale as java_util_Locale } from 'java.util';
import { Era as sun_util_calendar_Era, CalendarDate as sun_util_calendar_CalendarDate } from 'sun.util.calendar';
import { Object as java_lang_Object, Cloneable as java_lang_Cloneable } from 'java.lang';

  export class CalendarDate extends java_lang_Object implements java_lang_Cloneable {
static FIELD_UNDEFINED: number;
static TIME_UNDEFINED: number;
era: sun_util_calendar_Era;
year: number;
month: number;
dayOfMonth: number;
dayOfWeek: number;
leapYear: boolean;
hours: number;
minutes: number;
seconds: number;
millis: number;
fraction: number;
normalized: boolean;
zoneinfo: java_util_TimeZone;
zoneOffset: number;
daylightSaving: number;
forceStandardTime: boolean;
locale: java_util_Locale;
seconds: number;
year: number;
dayOfMonth: number;
zone: java_util_TimeZone;
dayOfWeek: number;
era: sun_util_calendar_Era;
hours: number;
zoneOffset: number;
daylightSaving: number;
minutes: number;
millis: number;
timeOfDay: number;
month: number;
isNormalized(): boolean;
getSeconds(): number;
getYear(): number;
getDayOfMonth(): number;
getZone(): java_util_TimeZone;
getDayOfWeek(): number;
isLeapYear(): boolean;
getEra(): sun_util_calendar_Era;
addYear(arg0: number): sun_util_calendar_CalendarDate;
setDate(arg0: number, arg1: number, arg2: number): sun_util_calendar_CalendarDate;
setTimeOfDay(arg0: number, arg1: number, arg2: number, arg3: number): sun_util_calendar_CalendarDate;
setHours(arg0: number): sun_util_calendar_CalendarDate;
getHours(): number;
getZoneOffset(): number;
getDaylightSaving(): number;
setDayOfMonth(arg0: number): sun_util_calendar_CalendarDate;
getMinutes(): number;
getMillis(): number;
setZone(arg0: java_util_TimeZone): sun_util_calendar_CalendarDate;
setEra(arg0: sun_util_calendar_Era): sun_util_calendar_CalendarDate;
setMonth(arg0: number): sun_util_calendar_CalendarDate;
getTimeOfDay(): number;
isStandardTime(): boolean;
setMinutes(arg0: number): sun_util_calendar_CalendarDate;
setSeconds(arg0: number): sun_util_calendar_CalendarDate;
setMillis(arg0: number): sun_util_calendar_CalendarDate;
getMonth(): number;
setYear(arg0: number): sun_util_calendar_CalendarDate;
addMonth(arg0: number): sun_util_calendar_CalendarDate;
addDayOfMonth(arg0: number): sun_util_calendar_CalendarDate;
addHours(arg0: number): sun_util_calendar_CalendarDate;
addMinutes(arg0: number): sun_util_calendar_CalendarDate;
addSeconds(arg0: number): sun_util_calendar_CalendarDate;
addMillis(arg0: number): sun_util_calendar_CalendarDate;
addDate(arg0: number, arg1: number, arg2: number): sun_util_calendar_CalendarDate;
addTimeOfDay(arg0: number, arg1: number, arg2: number, arg3: number): sun_util_calendar_CalendarDate;
setStandardTime(arg0: boolean): void;
isDaylightTime(): boolean;
isSameDate(arg0: sun_util_calendar_CalendarDate): boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;

  }
}//@ts-nocheck

declare module 'sun.util.calendar' {
import { Locale as java_util_Locale, TimeZone as java_util_TimeZone } from 'java.util';
import { Object as java_lang_Object } from 'java.lang';
import { CalendarDate as sun_util_calendar_CalendarDate } from 'sun.util.calendar';

  export class Era extends java_lang_Object {
name: string;
abbr: string;
since: number;
sinceDate: sun_util_calendar_CalendarDate;
localTime: boolean;
hash: number;
displayName: string;
name: string;
abbreviation: string;
diaplayAbbreviation: string;
since: number;
sinceDate: sun_util_calendar_CalendarDate;
getDisplayName(arg0: java_util_Locale): string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getName(): string;
getAbbreviation(): string;
getDiaplayAbbreviation(arg0: java_util_Locale): string;
getSince(arg0: java_util_TimeZone): number;
getSinceDate(): sun_util_calendar_CalendarDate;
isLocalTime(): boolean;
constructor(arg0: string, arg1: string, arg2: number, arg3: boolean);
  }
}//@ts-nocheck

declare module 'sun.util.calendar.BaseCalendar' {
import { Date as sun_util_calendar_BaseCalendar_Date } from 'sun.util.calendar.BaseCalendar';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { CalendarDate as sun_util_calendar_CalendarDate } from 'sun.util.calendar';

  export class Date extends sun_util_calendar_CalendarDate {
cachedYear: number;
cachedFixedDateJan1: number;
cachedFixedDateNextJan1: number;
normalizedYear: number;
class: java_lang_Class<java_lang_Object>;
getNormalizedYear(): number;
setNormalizedYear(arg0: number): void;
setNormalizedDate(arg0: number, arg1: number, arg2: number): sun_util_calendar_BaseCalendar_Date;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'sun.util.calendar' {
import { TimeZone as java_util_TimeZone } from 'java.util';
import { CalendarDate as sun_util_calendar_CalendarDate, Era as sun_util_calendar_Era, Gregorian as sun_util_calendar_Gregorian, CalendarSystem as sun_util_calendar_CalendarSystem, BaseCalendar as sun_util_calendar_BaseCalendar } from 'sun.util.calendar';
import { Date as sun_util_calendar_Gregorian_Date } from 'sun.util.calendar.Gregorian';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class Gregorian extends sun_util_calendar_BaseCalendar {
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_Gregorian_Date;
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_Gregorian_Date;
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_Gregorian_Date;
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_Gregorian_Date;
name: string;
time: number;
era: sun_util_calendar_Era;
eras: sun_util_calendar_Era[];
static dayOfWeekDateOnOrBefore: number;
weekLength: number;
nthDayOfWeek: sun_util_calendar_CalendarDate;
timeOfDayValue: number;
static gregorianCalendar: sun_util_calendar_Gregorian;
class: java_lang_Class<java_lang_Object>;
newCalendarDate(arg0: java_util_TimeZone): sun_util_calendar_CalendarDate;
newCalendarDate(arg0: java_util_TimeZone): sun_util_calendar_Gregorian_Date;
newCalendarDate(): sun_util_calendar_CalendarDate;
newCalendarDate(): sun_util_calendar_Gregorian_Date;
getCalendarDate(arg0: number, arg1: sun_util_calendar_CalendarDate): sun_util_calendar_CalendarDate;
getCalendarDate(arg0: number, arg1: sun_util_calendar_CalendarDate): sun_util_calendar_Gregorian_Date;
getCalendarDate(arg0: number, arg1: java_util_TimeZone): sun_util_calendar_CalendarDate;
getCalendarDate(arg0: number, arg1: java_util_TimeZone): sun_util_calendar_Gregorian_Date;
getCalendarDate(arg0: number): sun_util_calendar_CalendarDate;
getCalendarDate(arg0: number): sun_util_calendar_Gregorian_Date;
getCalendarDate(): sun_util_calendar_CalendarDate;
getCalendarDate(): sun_util_calendar_Gregorian_Date;
getName(): string;
getTime(arg0: sun_util_calendar_CalendarDate): number;
getEra(arg0: string): sun_util_calendar_Era;
getEras(): sun_util_calendar_Era[];
setTimeOfDay(arg0: sun_util_calendar_CalendarDate, arg1: number): sun_util_calendar_CalendarDate;
static getDayOfWeekDateOnOrBefore(arg0: number, arg1: number): number;
getWeekLength(): number;
setEra(arg0: sun_util_calendar_CalendarDate, arg1: string): void;
getNthDayOfWeek(arg0: number, arg1: number, arg2: sun_util_calendar_CalendarDate): sun_util_calendar_CalendarDate;
validateTime(arg0: sun_util_calendar_CalendarDate): boolean;
getTimeOfDayValue(arg0: sun_util_calendar_CalendarDate): number;
static getGregorianCalendar(): sun_util_calendar_Gregorian;
static forName(arg0: string): sun_util_calendar_CalendarSystem;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'sun.util.calendar.Gregorian' {
import { TimeZone as java_util_TimeZone } from 'java.util';
import { Era as sun_util_calendar_Era, CalendarDate as sun_util_calendar_CalendarDate } from 'sun.util.calendar';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Date as sun_util_calendar_BaseCalendar_Date } from 'sun.util.calendar.BaseCalendar';

  export class Date extends sun_util_calendar_BaseCalendar_Date {
normalizedYear: number;
seconds: number;
year: number;
dayOfMonth: number;
zone: java_util_TimeZone;
dayOfWeek: number;
era: sun_util_calendar_Era;
hours: number;
zoneOffset: number;
daylightSaving: number;
minutes: number;
millis: number;
timeOfDay: number;
month: number;
class: java_lang_Class<java_lang_Object>;
getNormalizedYear(): number;
setNormalizedYear(arg0: number): void;
isNormalized(): boolean;
getSeconds(): number;
getYear(): number;
getDayOfMonth(): number;
getZone(): java_util_TimeZone;
getDayOfWeek(): number;
isLeapYear(): boolean;
getEra(): sun_util_calendar_Era;
addYear(arg0: number): sun_util_calendar_CalendarDate;
setDate(arg0: number, arg1: number, arg2: number): sun_util_calendar_CalendarDate;
setTimeOfDay(arg0: number, arg1: number, arg2: number, arg3: number): sun_util_calendar_CalendarDate;
setHours(arg0: number): sun_util_calendar_CalendarDate;
getHours(): number;
getZoneOffset(): number;
getDaylightSaving(): number;
setDayOfMonth(arg0: number): sun_util_calendar_CalendarDate;
getMinutes(): number;
getMillis(): number;
setZone(arg0: java_util_TimeZone): sun_util_calendar_CalendarDate;
setEra(arg0: sun_util_calendar_Era): sun_util_calendar_CalendarDate;
setMonth(arg0: number): sun_util_calendar_CalendarDate;
getTimeOfDay(): number;
isStandardTime(): boolean;
setMinutes(arg0: number): sun_util_calendar_CalendarDate;
setSeconds(arg0: number): sun_util_calendar_CalendarDate;
setMillis(arg0: number): sun_util_calendar_CalendarDate;
getMonth(): number;
setYear(arg0: number): sun_util_calendar_CalendarDate;
addMonth(arg0: number): sun_util_calendar_CalendarDate;
addDayOfMonth(arg0: number): sun_util_calendar_CalendarDate;
addHours(arg0: number): sun_util_calendar_CalendarDate;
addMinutes(arg0: number): sun_util_calendar_CalendarDate;
addSeconds(arg0: number): sun_util_calendar_CalendarDate;
addMillis(arg0: number): sun_util_calendar_CalendarDate;
addDate(arg0: number, arg1: number, arg2: number): sun_util_calendar_CalendarDate;
addTimeOfDay(arg0: number, arg1: number, arg2: number, arg3: number): sun_util_calendar_CalendarDate;
setStandardTime(arg0: boolean): void;
isDaylightTime(): boolean;
isSameDate(arg0: sun_util_calendar_CalendarDate): boolean;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
clone(): java_lang_Object;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'sun.util.calendar' {
import { CalendarDate as sun_util_calendar_CalendarDate, Era as sun_util_calendar_Era, Gregorian as sun_util_calendar_Gregorian, CalendarSystem as sun_util_calendar_CalendarSystem } from 'sun.util.calendar';
import { TimeZone as java_util_TimeZone } from 'java.util';
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';
import { Object as java_lang_Object } from 'java.lang';

  export class CalendarSystem extends java_lang_Object {
static initialized: boolean;
static names: java_util_concurrent_ConcurrentMap<string, string>;
static calendars: java_util_concurrent_ConcurrentMap<string, sun_util_calendar_CalendarSystem>;
static PACKAGE_NAME: string;
static namePairs: string[];
static GREGORIAN_INSTANCE: sun_util_calendar_Gregorian;
time: number;
era: sun_util_calendar_Era;
eras: sun_util_calendar_Era[];
static gregorianCalendar: sun_util_calendar_Gregorian;
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_CalendarDate;
monthLength: number;
yearLength: number;
yearLengthInMonths: number;
weekLength: number;
nthDayOfWeek: sun_util_calendar_CalendarDate;
name: string;
getTime(arg0: sun_util_calendar_CalendarDate): number;
getEra(arg0: string): sun_util_calendar_Era;
getEras(): sun_util_calendar_Era[];
static getGregorianCalendar(): sun_util_calendar_Gregorian;
newCalendarDate(arg0: java_util_TimeZone): sun_util_calendar_CalendarDate;
newCalendarDate(): sun_util_calendar_CalendarDate;
setTimeOfDay(arg0: sun_util_calendar_CalendarDate, arg1: number): sun_util_calendar_CalendarDate;
getCalendarDate(): sun_util_calendar_CalendarDate;
getCalendarDate(arg0: number, arg1: java_util_TimeZone): sun_util_calendar_CalendarDate;
getCalendarDate(arg0: number): sun_util_calendar_CalendarDate;
getCalendarDate(arg0: number, arg1: sun_util_calendar_CalendarDate): sun_util_calendar_CalendarDate;
getMonthLength(arg0: sun_util_calendar_CalendarDate): number;
getYearLength(arg0: sun_util_calendar_CalendarDate): number;
getYearLengthInMonths(arg0: sun_util_calendar_CalendarDate): number;
getWeekLength(): number;
setEra(arg0: sun_util_calendar_CalendarDate, arg1: string): void;
getNthDayOfWeek(arg0: number, arg1: number, arg2: sun_util_calendar_CalendarDate): sun_util_calendar_CalendarDate;
static forName(arg0: string): sun_util_calendar_CalendarSystem;
getName(): string;
validate(arg0: sun_util_calendar_CalendarDate): boolean;
normalize(arg0: sun_util_calendar_CalendarDate): boolean;
constructor();
  }
}//@ts-nocheck

declare module 'sun.util.calendar' {
import { CalendarDate as sun_util_calendar_CalendarDate, Era as sun_util_calendar_Era, CalendarSystem as sun_util_calendar_CalendarSystem } from 'sun.util.calendar';
import { TimeZone as java_util_TimeZone } from 'java.util';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class AbstractCalendar extends sun_util_calendar_CalendarSystem {
static SECOND_IN_MILLIS: number;
static MINUTE_IN_MILLIS: number;
static HOUR_IN_MILLIS: number;
static DAY_IN_MILLIS: number;
static EPOCH_OFFSET: number;
eras: sun_util_calendar_Era[];
time: number;
era: sun_util_calendar_Era;
eras: sun_util_calendar_Era[];
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_CalendarDate;
calendarDate: sun_util_calendar_CalendarDate;
static dayOfWeekDateOnOrBefore: number;
weekLength: number;
nthDayOfWeek: sun_util_calendar_CalendarDate;
timeOfDayValue: number;
class: java_lang_Class<java_lang_Object>;
getTime(arg0: sun_util_calendar_CalendarDate): number;
getEra(arg0: string): sun_util_calendar_Era;
getEras(): sun_util_calendar_Era[];
setTimeOfDay(arg0: sun_util_calendar_CalendarDate, arg1: number): sun_util_calendar_CalendarDate;
getCalendarDate(): sun_util_calendar_CalendarDate;
getCalendarDate(arg0: number, arg1: java_util_TimeZone): sun_util_calendar_CalendarDate;
getCalendarDate(arg0: number): sun_util_calendar_CalendarDate;
getCalendarDate(arg0: number, arg1: sun_util_calendar_CalendarDate): sun_util_calendar_CalendarDate;
static getDayOfWeekDateOnOrBefore(arg0: number, arg1: number): number;
getWeekLength(): number;
setEra(arg0: sun_util_calendar_CalendarDate, arg1: string): void;
getNthDayOfWeek(arg0: number, arg1: number, arg2: sun_util_calendar_CalendarDate): sun_util_calendar_CalendarDate;
validateTime(arg0: sun_util_calendar_CalendarDate): boolean;
getTimeOfDayValue(arg0: sun_util_calendar_CalendarDate): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'sun.util.logging' {
import { Object as java_lang_Object, Throwable as java_lang_Throwable } from 'java.lang';
import { Level as sun_util_logging_PlatformLogger_Level, Bridge as sun_util_logging_PlatformLogger_Bridge } from 'sun.util.logging.PlatformLogger';
import { Level as java_lang_System_Logger_Level } from 'java.lang.System.Logger';
import { PlatformLogger as sun_util_logging_PlatformLogger } from 'sun.util.logging';
import { Map as java_util_Map } from 'java.util';
import { WeakReference as java_lang_ref_WeakReference } from 'java.lang.ref';

  export class PlatformLogger extends java_lang_Object {
static loggers: java_util_Map<string, java_lang_ref_WeakReference<sun_util_logging_PlatformLogger>>;
loggerProxy: sun_util_logging_PlatformLogger_Bridge;
static spi2platformLevelMapping: sun_util_logging_PlatformLogger_Level[];
static $assertionsDisabled: boolean;
name: string;
static logger: sun_util_logging_PlatformLogger;
warning(arg0: string): void;
warning(arg0: string, ...arg1: java_lang_Object[]): void;
warning(arg0: string, arg1: java_lang_Throwable): void;
config(arg0: string): void;
config(arg0: string, arg1: java_lang_Throwable): void;
config(arg0: string, ...arg1: java_lang_Object[]): void;
level(): sun_util_logging_PlatformLogger_Level;
severe(arg0: string, ...arg1: java_lang_Object[]): void;
severe(arg0: string, arg1: java_lang_Throwable): void;
severe(arg0: string): void;
fine(arg0: string, arg1: java_lang_Throwable): void;
fine(arg0: string): void;
fine(arg0: string, ...arg1: java_lang_Object[]): void;
finer(arg0: string, arg1: java_lang_Throwable): void;
finer(arg0: string, ...arg1: java_lang_Object[]): void;
finer(arg0: string): void;
finest(arg0: string): void;
finest(arg0: string, arg1: java_lang_Throwable): void;
finest(arg0: string, ...arg1: java_lang_Object[]): void;
setLevel(arg0: sun_util_logging_PlatformLogger_Level): void;
isLoggable(arg0: sun_util_logging_PlatformLogger_Level): boolean;
isEnabled(): boolean;
static toPlatformLevel(arg0: java_lang_System_Logger_Level): sun_util_logging_PlatformLogger_Level;
getName(): string;
info(arg0: string): void;
info(arg0: string, arg1: java_lang_Throwable): void;
info(arg0: string, ...arg1: java_lang_Object[]): void;
static getLogger(arg0: string): sun_util_logging_PlatformLogger;

  }
}//@ts-nocheck

declare module 'sun.util.logging.PlatformLogger' {
import { Level as java_lang_System_Logger_Level } from 'java.lang.System.Logger';
import { Level as sun_util_logging_PlatformLogger_Level } from 'sun.util.logging.PlatformLogger';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class Level extends java_lang_Enum<sun_util_logging_PlatformLogger_Level> {
static ALL: sun_util_logging_PlatformLogger_Level;
static FINEST: sun_util_logging_PlatformLogger_Level;
static FINER: sun_util_logging_PlatformLogger_Level;
static FINE: sun_util_logging_PlatformLogger_Level;
static CONFIG: sun_util_logging_PlatformLogger_Level;
static INFO: sun_util_logging_PlatformLogger_Level;
static WARNING: sun_util_logging_PlatformLogger_Level;
static SEVERE: sun_util_logging_PlatformLogger_Level;
static OFF: sun_util_logging_PlatformLogger_Level;
systemLevel: java_lang_System_Logger_Level;
static SEVERITY_OFF: number;
static SEVERITY_SEVERE: number;
static SEVERITY_WARNING: number;
static SEVERITY_INFO: number;
static SEVERITY_CONFIG: number;
static SEVERITY_FINE: number;
static SEVERITY_FINER: number;
static SEVERITY_FINEST: number;
static SEVERITY_ALL: number;
static LEVEL_VALUES: number[];
static $VALUES: sun_util_logging_PlatformLogger_Level[];
class: java_lang_Class<java_lang_Object>;
systemLevel(): java_lang_System_Logger_Level;
static values(): sun_util_logging_PlatformLogger_Level[];
intValue(): number;
static valueOf(arg0: string): sun_util_logging_PlatformLogger_Level;
static valueOf(arg0: number): sun_util_logging_PlatformLogger_Level;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}//@ts-nocheck

declare module 'sun.util.logging.PlatformLogger' {
import { Logger as java_lang_System_Logger } from 'java.lang.System';
import { Bridge as sun_util_logging_PlatformLogger_Bridge, Level as sun_util_logging_PlatformLogger_Level } from 'sun.util.logging.PlatformLogger';
import { Object as java_lang_Object, Throwable as java_lang_Throwable } from 'java.lang';
import { Supplier as java_util_function_Supplier } from 'java.util.function';
import { ResourceBundle as java_util_ResourceBundle } from 'java.util';

  export class Bridge {
name: string;
static convert(arg0: java_lang_System_Logger): sun_util_logging_PlatformLogger_Bridge;
logp(arg0: sun_util_logging_PlatformLogger_Level, arg1: string, arg2: string, arg3: string, ...arg4: java_lang_Object[]): void;
logp(arg0: sun_util_logging_PlatformLogger_Level, arg1: string, arg2: string, arg3: java_util_function_Supplier<string>): void;
logp(arg0: sun_util_logging_PlatformLogger_Level, arg1: string, arg2: string, arg3: string): void;
logp(arg0: sun_util_logging_PlatformLogger_Level, arg1: string, arg2: string, arg3: string, arg4: java_lang_Throwable): void;
logp(arg0: sun_util_logging_PlatformLogger_Level, arg1: string, arg2: string, arg3: java_lang_Throwable, arg4: java_util_function_Supplier<string>): void;
logrb(arg0: sun_util_logging_PlatformLogger_Level, arg1: string, arg2: string, arg3: java_util_ResourceBundle, arg4: string, ...arg5: java_lang_Object[]): void;
logrb(arg0: sun_util_logging_PlatformLogger_Level, arg1: java_util_ResourceBundle, arg2: string, ...arg3: java_lang_Object[]): void;
logrb(arg0: sun_util_logging_PlatformLogger_Level, arg1: java_util_ResourceBundle, arg2: string, arg3: java_lang_Throwable): void;
logrb(arg0: sun_util_logging_PlatformLogger_Level, arg1: string, arg2: string, arg3: java_util_ResourceBundle, arg4: string, arg5: java_lang_Throwable): void;
isLoggable(arg0: sun_util_logging_PlatformLogger_Level): boolean;
isEnabled(): boolean;
log(arg0: sun_util_logging_PlatformLogger_Level, arg1: java_util_function_Supplier<string>): void;
log(arg0: sun_util_logging_PlatformLogger_Level, arg1: java_lang_Throwable, arg2: java_util_function_Supplier<string>): void;
log(arg0: sun_util_logging_PlatformLogger_Level, arg1: string, ...arg2: java_lang_Object[]): void;
log(arg0: sun_util_logging_PlatformLogger_Level, arg1: string, arg2: java_lang_Throwable): void;
log(arg0: sun_util_logging_PlatformLogger_Level, arg1: string): void;
getName(): string;

  }
}