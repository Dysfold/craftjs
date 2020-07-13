//@ts-nocheck

declare module 'java.time.temporal' {
import { ChronoUnit as java_time_temporal_ChronoUnit, Temporal as java_time_temporal_Temporal, TemporalUnit as java_time_temporal_TemporalUnit } from 'java.time.temporal';
import { Duration as java_time_Duration } from 'java.time';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChronoUnit extends java_lang_Enum<java_time_temporal_ChronoUnit> implements java_time_temporal_TemporalUnit {
static NANOS: java_time_temporal_ChronoUnit;
static MICROS: java_time_temporal_ChronoUnit;
static MILLIS: java_time_temporal_ChronoUnit;
static SECONDS: java_time_temporal_ChronoUnit;
static MINUTES: java_time_temporal_ChronoUnit;
static HOURS: java_time_temporal_ChronoUnit;
static HALF_DAYS: java_time_temporal_ChronoUnit;
static DAYS: java_time_temporal_ChronoUnit;
static WEEKS: java_time_temporal_ChronoUnit;
static MONTHS: java_time_temporal_ChronoUnit;
static YEARS: java_time_temporal_ChronoUnit;
static DECADES: java_time_temporal_ChronoUnit;
static CENTURIES: java_time_temporal_ChronoUnit;
static MILLENNIA: java_time_temporal_ChronoUnit;
static ERAS: java_time_temporal_ChronoUnit;
static FOREVER: java_time_temporal_ChronoUnit;
name: string;
duration: java_time_Duration;
static $VALUES: java_time_temporal_ChronoUnit[];
duration: java_time_Duration;
class: java_lang_Class<java_lang_Object>;
toString(): string;
static values(): java_time_temporal_ChronoUnit[];
static valueOf(arg0: string): java_time_temporal_ChronoUnit;
isDateBased(): boolean;
isTimeBased(): boolean;
isSupportedBy(arg0: java_time_temporal_Temporal): boolean;
getDuration(): java_time_Duration;
isDurationEstimated(): boolean;
addTo<R extends java_time_temporal_Temporal>(arg0: R, arg1: number): R;
between(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_Temporal): number;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalField as java_time_temporal_TemporalField, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAmount as java_time_temporal_TemporalAmount, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, TemporalAccessor as java_time_temporal_TemporalAccessor } from 'java.time.temporal';
import { Object as java_lang_Object } from 'java.lang';

  export class Temporal implements java_time_temporal_TemporalAccessor {
long: number;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
get(arg0: java_time_temporal_TemporalField): number;
getLong(arg0: java_time_temporal_TemporalField): number;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { Duration as java_time_Duration } from 'java.time';

  export class TemporalUnit {
duration: java_time_Duration;
toString(): string;
isDateBased(): boolean;
isTimeBased(): boolean;
isSupportedBy(arg0: java_time_temporal_Temporal): boolean;
getDuration(): java_time_Duration;
isDurationEstimated(): boolean;
addTo<R extends java_time_temporal_Temporal>(arg0: R, arg1: number): R;
between(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_Temporal): number;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalAmount as java_time_temporal_TemporalAmount, Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Comparable as java_lang_Comparable } from 'java.lang';
import { Duration as java_time_Duration } from 'java.time';
import { List as java_util_List } from 'java.util';
import { BigInteger as java_math_BigInteger } from 'java.math';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Duration extends java_lang_Object implements java_time_temporal_TemporalAmount, java_lang_Comparable<java_time_Duration>, java_io_Serializable {
static ZERO: java_time_Duration;
static serialVersionUID: number;
static BI_NANOS_PER_SECOND: java_math_BigInteger;
seconds: number;
nanos: number;
seconds: number;
nano: number;
units: java_util_List<java_time_temporal_TemporalUnit>;
get(arg0: java_time_temporal_TemporalUnit): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
abs(): java_time_Duration;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_Duration): number;
static from(arg0: java_time_temporal_TemporalAmount): java_time_Duration;
static of(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Duration;
toNanos(): number;
static parse(arg0: java_lang_CharSequence): java_time_Duration;
toSeconds(): number;
toMinutes(): number;
toHours(): number;
toDays(): number;
toMillis(): number;
getSeconds(): number;
getNano(): number;
addTo(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
static between(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_Temporal): java_time_Duration;
plus(arg0: java_time_Duration): java_time_Duration;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Duration;
static ofNanos(arg0: number): java_time_Duration;
static ofSeconds(arg0: number, arg1: number): java_time_Duration;
static ofSeconds(arg0: number): java_time_Duration;
static ofDays(arg0: number): java_time_Duration;
static ofHours(arg0: number): java_time_Duration;
static ofMinutes(arg0: number): java_time_Duration;
static ofMillis(arg0: number): java_time_Duration;
getUnits(): java_util_List<java_time_temporal_TemporalUnit>;
isZero(): boolean;
isNegative(): boolean;
withSeconds(arg0: number): java_time_Duration;
withNanos(arg0: number): java_time_Duration;
plusDays(arg0: number): java_time_Duration;
plusHours(arg0: number): java_time_Duration;
plusMinutes(arg0: number): java_time_Duration;
plusSeconds(arg0: number): java_time_Duration;
plusMillis(arg0: number): java_time_Duration;
plusNanos(arg0: number): java_time_Duration;
minus(arg0: java_time_Duration): java_time_Duration;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Duration;
minusDays(arg0: number): java_time_Duration;
minusHours(arg0: number): java_time_Duration;
minusMinutes(arg0: number): java_time_Duration;
minusSeconds(arg0: number): java_time_Duration;
minusMillis(arg0: number): java_time_Duration;
minusNanos(arg0: number): java_time_Duration;
multipliedBy(arg0: number): java_time_Duration;
dividedBy(arg0: java_time_Duration): number;
dividedBy(arg0: number): java_time_Duration;
negated(): java_time_Duration;
subtractFrom(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
toDaysPart(): number;
toHoursPart(): number;
toMinutesPart(): number;
toSecondsPart(): number;
toMillisPart(): number;
toNanosPart(): number;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_Duration;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { TemporalUnit as java_time_temporal_TemporalUnit, Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { List as java_util_List } from 'java.util';

  export class TemporalAmount {
units: java_util_List<java_time_temporal_TemporalUnit>;
get(arg0: java_time_temporal_TemporalUnit): number;
addTo(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
getUnits(): java_util_List<java_time_temporal_TemporalUnit>;
subtractFrom(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { Map as java_util_Map, Locale as java_util_Locale } from 'java.util';
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, ValueRange as java_time_temporal_ValueRange, TemporalUnit as java_time_temporal_TemporalUnit, Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { Long as java_lang_Long } from 'java.lang';
import { ResolverStyle as java_time_format_ResolverStyle } from 'java.time.format';

  export class TemporalField {
displayName: string;
baseUnit: java_time_temporal_TemporalUnit;
rangeUnit: java_time_temporal_TemporalUnit;
from: number;
toString(): string;
resolve(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_temporal_TemporalAccessor, arg2: java_time_format_ResolverStyle): java_time_temporal_TemporalAccessor;
range(): java_time_temporal_ValueRange;
rangeRefinedBy(arg0: java_time_temporal_TemporalAccessor): java_time_temporal_ValueRange;
getDisplayName(arg0: java_util_Locale): string;
getBaseUnit(): java_time_temporal_TemporalUnit;
getRangeUnit(): java_time_temporal_TemporalUnit;
isDateBased(): boolean;
isTimeBased(): boolean;
isSupportedBy(arg0: java_time_temporal_TemporalAccessor): boolean;
getFrom(arg0: java_time_temporal_TemporalAccessor): number;
adjustInto<R extends java_time_temporal_Temporal>(arg0: R, arg1: number): R;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { TemporalField as java_time_temporal_TemporalField, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange } from 'java.time.temporal';
import { Object as java_lang_Object } from 'java.lang';

  export class TemporalAccessor {
long: number;
get(arg0: java_time_temporal_TemporalField): number;
getLong(arg0: java_time_temporal_TemporalField): number;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { TemporalAccessor as java_time_temporal_TemporalAccessor } from 'java.time.temporal';
import { Object as java_lang_Object } from 'java.lang';

  export class TemporalQuery<R extends java_lang_Object> {

queryFrom(arg0: java_time_temporal_TemporalAccessor): R;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { Object as java_lang_Object } from 'java.lang';
import { ValueRange as java_time_temporal_ValueRange, TemporalField as java_time_temporal_TemporalField } from 'java.time.temporal';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ValueRange extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
minSmallest: number;
minLargest: number;
maxSmallest: number;
maxLargest: number;
minimum: number;
largestMinimum: number;
smallestMaximum: number;
maximum: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static of(arg0: number, arg1: number): java_time_temporal_ValueRange;
static of(arg0: number, arg1: number, arg2: number, arg3: number): java_time_temporal_ValueRange;
static of(arg0: number, arg1: number, arg2: number): java_time_temporal_ValueRange;
isIntValue(): boolean;
isValidValue(arg0: number): boolean;
isFixed(): boolean;
getMinimum(): number;
getLargestMinimum(): number;
getSmallestMaximum(): number;
getMaximum(): number;
isValidIntValue(arg0: number): boolean;
checkValidValue(arg0: number, arg1: java_time_temporal_TemporalField): number;
checkValidIntValue(arg0: number, arg1: java_time_temporal_TemporalField): number;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { ResolverStyle as java_time_format_ResolverStyle } from 'java.time.format';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ResolverStyle extends java_lang_Enum<java_time_format_ResolverStyle> {
static STRICT: java_time_format_ResolverStyle;
static SMART: java_time_format_ResolverStyle;
static LENIENT: java_time_format_ResolverStyle;
static $VALUES: java_time_format_ResolverStyle[];
class: java_lang_Class<java_lang_Object>;
static values(): java_time_format_ResolverStyle[];
static valueOf(arg0: string): java_time_format_ResolverStyle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { Temporal as java_time_temporal_Temporal } from 'java.time.temporal';

  export class TemporalAdjuster {

adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAmount as java_time_temporal_TemporalAmount } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Comparable as java_lang_Comparable } from 'java.lang';
import { Instant as java_time_Instant, Clock as java_time_Clock, ZoneOffset as java_time_ZoneOffset, OffsetDateTime as java_time_OffsetDateTime, ZoneId as java_time_ZoneId, ZonedDateTime as java_time_ZonedDateTime } from 'java.time';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Instant extends java_lang_Object implements java_time_temporal_Temporal, java_time_temporal_TemporalAdjuster, java_lang_Comparable<java_time_Instant>, java_io_Serializable {
static EPOCH: java_time_Instant;
static MIN_SECOND: number;
static MAX_SECOND: number;
static MIN: java_time_Instant;
static MAX: java_time_Instant;
static serialVersionUID: number;
seconds: number;
nanos: number;
long: number;
nano: number;
epochSecond: number;
get(arg0: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_time_Instant): number;
compareTo(arg0: java_lang_Object): number;
getLong(arg0: java_time_temporal_TemporalField): number;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_Instant;
static now(): java_time_Instant;
static now(arg0: java_time_Clock): java_time_Instant;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
static parse(arg0: java_lang_CharSequence): java_time_Instant;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static ofEpochMilli(arg0: number): java_time_Instant;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_Instant;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_Instant;
getNano(): number;
getEpochSecond(): number;
static ofEpochSecond(arg0: number, arg1: number): java_time_Instant;
static ofEpochSecond(arg0: number): java_time_Instant;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Instant;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_Instant;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
plusSeconds(arg0: number): java_time_Instant;
plusMillis(arg0: number): java_time_Instant;
plusNanos(arg0: number): java_time_Instant;
minus(arg0: java_time_temporal_TemporalAmount): java_time_Instant;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Instant;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusSeconds(arg0: number): java_time_Instant;
minusMillis(arg0: number): java_time_Instant;
minusNanos(arg0: number): java_time_Instant;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_Instant;
isAfter(arg0: java_time_Instant): boolean;
isBefore(arg0: java_time_Instant): boolean;
atOffset(arg0: java_time_ZoneOffset): java_time_OffsetDateTime;
atZone(arg0: java_time_ZoneId): java_time_ZonedDateTime;
toEpochMilli(): number;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { Object as java_lang_Object } from 'java.lang';
import { Clock as java_time_Clock, Duration as java_time_Duration, ZoneId as java_time_ZoneId, Instant as java_time_Instant } from 'java.time';

  export class Clock extends java_lang_Object {
zone: java_time_ZoneId;
equals(arg0: java_lang_Object): boolean;
hashCode(): number;
static offset(arg0: java_time_Clock, arg1: java_time_Duration): java_time_Clock;
millis(): number;
static system(arg0: java_time_ZoneId): java_time_Clock;
static fixed(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_Clock;
instant(): java_time_Instant;
static systemDefaultZone(): java_time_Clock;
getZone(): java_time_ZoneId;
withZone(arg0: java_time_ZoneId): java_time_Clock;
static systemUTC(): java_time_Clock;
static tickMillis(arg0: java_time_ZoneId): java_time_Clock;
static tickSeconds(arg0: java_time_ZoneId): java_time_Clock;
static tickMinutes(arg0: java_time_ZoneId): java_time_Clock;
static tick(arg0: java_time_Clock, arg1: java_time_Duration): java_time_Clock;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { Object as java_lang_Object } from 'java.lang';
import { TemporalAccessor as java_time_temporal_TemporalAccessor } from 'java.time.temporal';
import { ZoneId as java_time_ZoneId, ZoneOffset as java_time_ZoneOffset } from 'java.time';
import { Map as java_util_Map, Locale as java_util_Locale, Set as java_util_Set } from 'java.util';
import { ZoneRules as java_time_zone_ZoneRules } from 'java.time.zone';
import { TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ZoneId extends java_lang_Object implements java_io_Serializable {
static SHORT_IDS: java_util_Map<string, string>;
static serialVersionUID: number;
id: string;
rules: java_time_zone_ZoneRules;
displayName: string;
static availableZoneIds: java_util_Set<string>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_ZoneId;
static of(arg0: string): java_time_ZoneId;
static of(arg0: string, arg1: java_util_Map<string, string>): java_time_ZoneId;
getId(): string;
static systemDefault(): java_time_ZoneId;
getRules(): java_time_zone_ZoneRules;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
normalized(): java_time_ZoneId;
static getAvailableZoneIds(): java_util_Set<string>;
static ofOffset(arg0: string, arg1: java_time_ZoneOffset): java_time_ZoneId;

  }
}
//@ts-nocheck

declare module 'java.time.zone' {
import { Object as java_lang_Object, Integer as java_lang_Integer } from 'java.lang';
import { ZoneOffset as java_time_ZoneOffset, Instant as java_time_Instant, LocalDateTime as java_time_LocalDateTime, Duration as java_time_Duration } from 'java.time';
import { List as java_util_List } from 'java.util';
import { ZoneOffsetTransition as java_time_zone_ZoneOffsetTransition, ZoneOffsetTransitionRule as java_time_zone_ZoneOffsetTransitionRule, ZoneRules as java_time_zone_ZoneRules } from 'java.time.zone';
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ZoneRules extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
static LAST_CACHED_YEAR: number;
standardTransitions: number[];
standardOffsets: java_time_ZoneOffset[];
savingsInstantTransitions: number[];
savingsLocalTransitions: java_time_LocalDateTime[];
wallOffsets: java_time_ZoneOffset[];
lastRules: java_time_zone_ZoneOffsetTransitionRule[];
lastRulesCache: java_util_concurrent_ConcurrentMap<java_lang_Integer, java_time_zone_ZoneOffsetTransition[]>;
static EMPTY_LONG_ARRAY: number[];
static EMPTY_LASTRULES: java_time_zone_ZoneOffsetTransitionRule[];
static EMPTY_LDT_ARRAY: java_time_LocalDateTime[];
offset: java_time_ZoneOffset;
offset: java_time_ZoneOffset;
validOffsets: java_util_List<java_time_ZoneOffset>;
transition: java_time_zone_ZoneOffsetTransition;
standardOffset: java_time_ZoneOffset;
daylightSavings: java_time_Duration;
transitions: java_util_List<java_time_zone_ZoneOffsetTransition>;
transitionRules: java_util_List<java_time_zone_ZoneOffsetTransitionRule>;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static of(arg0: java_time_ZoneOffset, arg1: java_time_ZoneOffset, arg2: java_util_List<java_time_zone_ZoneOffsetTransition>, arg3: java_util_List<java_time_zone_ZoneOffsetTransition>, arg4: java_util_List<java_time_zone_ZoneOffsetTransitionRule>): java_time_zone_ZoneRules;
static of(arg0: java_time_ZoneOffset): java_time_zone_ZoneRules;
getOffset(arg0: java_time_Instant): java_time_ZoneOffset;
getOffset(arg0: java_time_LocalDateTime): java_time_ZoneOffset;
isFixedOffset(): boolean;
getValidOffsets(arg0: java_time_LocalDateTime): java_util_List<java_time_ZoneOffset>;
getTransition(arg0: java_time_LocalDateTime): java_time_zone_ZoneOffsetTransition;
getStandardOffset(arg0: java_time_Instant): java_time_ZoneOffset;
getDaylightSavings(arg0: java_time_Instant): java_time_Duration;
isDaylightSavings(arg0: java_time_Instant): boolean;
isValidOffset(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset): boolean;
nextTransition(arg0: java_time_Instant): java_time_zone_ZoneOffsetTransition;
previousTransition(arg0: java_time_Instant): java_time_zone_ZoneOffsetTransition;
getTransitions(): java_util_List<java_time_zone_ZoneOffsetTransition>;
getTransitionRules(): java_util_List<java_time_zone_ZoneOffsetTransitionRule>;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster } from 'java.time.temporal';
import { Object as java_lang_Object, Class as java_lang_Class, Integer as java_lang_Integer, Comparable as java_lang_Comparable } from 'java.lang';
import { ZoneOffset as java_time_ZoneOffset, ZoneId as java_time_ZoneId } from 'java.time';
import { ZoneRules as java_time_zone_ZoneRules } from 'java.time.zone';
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ZoneOffset extends java_time_ZoneId implements java_time_temporal_TemporalAccessor, java_time_temporal_TemporalAdjuster, java_lang_Comparable<java_time_ZoneOffset>, java_io_Serializable {
static SECONDS_CACHE: java_util_concurrent_ConcurrentMap<java_lang_Integer, java_time_ZoneOffset>;
static ID_CACHE: java_util_concurrent_ConcurrentMap<string, java_time_ZoneOffset>;
static MAX_SECONDS: number;
static serialVersionUID: number;
static UTC: java_time_ZoneOffset;
static MIN: java_time_ZoneOffset;
static MAX: java_time_ZoneOffset;
totalSeconds: number;
id: string;
long: number;
id: string;
rules: java_time_zone_ZoneRules;
totalSeconds: number;
class: java_lang_Class<java_lang_Object>;
get(arg0: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_time_ZoneOffset): number;
compareTo(arg0: java_lang_Object): number;
getLong(arg0: java_time_temporal_TemporalField): number;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_ZoneOffset;
static of(arg0: string): java_time_ZoneOffset;
getId(): string;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
getRules(): java_time_zone_ZoneRules;
static ofTotalSeconds(arg0: number): java_time_ZoneOffset;
getTotalSeconds(): number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
static ofHours(arg0: number): java_time_ZoneOffset;
static ofHoursMinutes(arg0: number, arg1: number): java_time_ZoneOffset;
static ofHoursMinutesSeconds(arg0: number, arg1: number, arg2: number): java_time_ZoneOffset;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.time.zone' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { ZoneOffsetTransition as java_time_zone_ZoneOffsetTransition } from 'java.time.zone';
import { LocalDateTime as java_time_LocalDateTime, ZoneOffset as java_time_ZoneOffset, Duration as java_time_Duration, Instant as java_time_Instant } from 'java.time';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ZoneOffsetTransition extends java_lang_Object implements java_lang_Comparable<java_time_zone_ZoneOffsetTransition>, java_io_Serializable {
static serialVersionUID: number;
epochSecond: number;
transition: java_time_LocalDateTime;
offsetBefore: java_time_ZoneOffset;
offsetAfter: java_time_ZoneOffset;
static $assertionsDisabled: boolean;
duration: java_time_Duration;
offsetAfter: java_time_ZoneOffset;
dateTimeBefore: java_time_LocalDateTime;
dateTimeAfter: java_time_LocalDateTime;
offsetBefore: java_time_ZoneOffset;
instant: java_time_Instant;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_zone_ZoneOffsetTransition): number;
static of(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset, arg2: java_time_ZoneOffset): java_time_zone_ZoneOffsetTransition;
toEpochSecond(): number;
getDuration(): java_time_Duration;
isValidOffset(arg0: java_time_ZoneOffset): boolean;
getOffsetAfter(): java_time_ZoneOffset;
isGap(): boolean;
getDateTimeBefore(): java_time_LocalDateTime;
getDateTimeAfter(): java_time_LocalDateTime;
getOffsetBefore(): java_time_ZoneOffset;
getInstant(): java_time_Instant;
isOverlap(): boolean;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAmount as java_time_temporal_TemporalAmount } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence } from 'java.lang';
import { ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime, ChronoLocalDate as java_time_chrono_ChronoLocalDate, ChronoZonedDateTime as java_time_chrono_ChronoZonedDateTime, Chronology as java_time_chrono_Chronology } from 'java.time.chrono';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { LocalDateTime as java_time_LocalDateTime, Month as java_time_Month, LocalDate as java_time_LocalDate, LocalTime as java_time_LocalTime, Clock as java_time_Clock, ZoneId as java_time_ZoneId, Instant as java_time_Instant, ZoneOffset as java_time_ZoneOffset, DayOfWeek as java_time_DayOfWeek, OffsetDateTime as java_time_OffsetDateTime, ZonedDateTime as java_time_ZonedDateTime } from 'java.time';
import { Serializable as java_io_Serializable } from 'java.io';

  export class LocalDateTime extends java_lang_Object implements java_time_temporal_Temporal, java_time_temporal_TemporalAdjuster, java_time_chrono_ChronoLocalDateTime<java_time_LocalDate>, java_io_Serializable {
static MIN: java_time_LocalDateTime;
static MAX: java_time_LocalDateTime;
static serialVersionUID: number;
date: java_time_LocalDate;
time: java_time_LocalTime;
long: number;
nano: number;
year: number;
monthValue: number;
dayOfMonth: number;
hour: number;
minute: number;
second: number;
dayOfWeek: java_time_DayOfWeek;
dayOfYear: number;
month: java_time_Month;
chronology: java_time_chrono_Chronology;
get(arg0: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): number;
compareTo(arg0: java_lang_Object): number;
getLong(arg0: java_time_temporal_TemporalField): number;
format(arg0: java_time_format_DateTimeFormatter): string;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_LocalDateTime;
static of(arg0: number, arg1: java_time_Month, arg2: number, arg3: number, arg4: number, arg5: number): java_time_LocalDateTime;
static of(arg0: number, arg1: java_time_Month, arg2: number, arg3: number, arg4: number): java_time_LocalDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): java_time_LocalDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): java_time_LocalDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): java_time_LocalDateTime;
static of(arg0: java_time_LocalDate, arg1: java_time_LocalTime): java_time_LocalDateTime;
static of(arg0: number, arg1: java_time_Month, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): java_time_LocalDateTime;
static now(): java_time_LocalDateTime;
static now(arg0: java_time_Clock): java_time_LocalDateTime;
static now(arg0: java_time_ZoneId): java_time_LocalDateTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
static parse(arg0: java_lang_CharSequence): java_time_LocalDateTime;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_LocalDateTime;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_LocalDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_LocalDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoLocalDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoLocalDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_LocalDateTime;
getNano(): number;
static ofEpochSecond(arg0: number, arg1: number, arg2: java_time_ZoneOffset): java_time_LocalDateTime;
getYear(): number;
getMonthValue(): number;
getDayOfMonth(): number;
getHour(): number;
getMinute(): number;
getSecond(): number;
isEqual(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
getDayOfWeek(): java_time_DayOfWeek;
getDayOfYear(): number;
withDayOfYear(arg0: number): java_time_LocalDateTime;
minusYears(arg0: number): java_time_LocalDateTime;
plusMonths(arg0: number): java_time_LocalDateTime;
plusWeeks(arg0: number): java_time_LocalDateTime;
plusYears(arg0: number): java_time_LocalDateTime;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_LocalDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
plusDays(arg0: number): java_time_LocalDateTime;
plusHours(arg0: number): java_time_LocalDateTime;
plusMinutes(arg0: number): java_time_LocalDateTime;
plusSeconds(arg0: number): java_time_LocalDateTime;
plusNanos(arg0: number): java_time_LocalDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_LocalDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minusDays(arg0: number): java_time_LocalDateTime;
minusHours(arg0: number): java_time_LocalDateTime;
minusMinutes(arg0: number): java_time_LocalDateTime;
minusSeconds(arg0: number): java_time_LocalDateTime;
minusNanos(arg0: number): java_time_LocalDateTime;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_LocalDateTime;
minusMonths(arg0: number): java_time_LocalDateTime;
isAfter(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
isBefore(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
getMonth(): java_time_Month;
toLocalDate(): java_time_chrono_ChronoLocalDate;
toLocalDate(): java_time_LocalDate;
toLocalTime(): java_time_LocalTime;
withYear(arg0: number): java_time_LocalDateTime;
withMonth(arg0: number): java_time_LocalDateTime;
withDayOfMonth(arg0: number): java_time_LocalDateTime;
withHour(arg0: number): java_time_LocalDateTime;
withMinute(arg0: number): java_time_LocalDateTime;
withSecond(arg0: number): java_time_LocalDateTime;
withNano(arg0: number): java_time_LocalDateTime;
minusWeeks(arg0: number): java_time_LocalDateTime;
atOffset(arg0: java_time_ZoneOffset): java_time_OffsetDateTime;
atZone(arg0: java_time_ZoneId): java_time_ZonedDateTime;
atZone(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime;
toEpochSecond(arg0: java_time_ZoneOffset): number;
toInstant(arg0: java_time_ZoneOffset): java_time_Instant;
getChronology(): java_time_chrono_Chronology;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime, Chronology as java_time_chrono_Chronology, ChronoZonedDateTime as java_time_chrono_ChronoZonedDateTime, ChronoLocalDate as java_time_chrono_ChronoLocalDate } from 'java.time.chrono';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, TemporalField as java_time_temporal_TemporalField, TemporalAdjuster as java_time_temporal_TemporalAdjuster, Temporal as java_time_temporal_Temporal, TemporalAmount as java_time_temporal_TemporalAmount, ValueRange as java_time_temporal_ValueRange } from 'java.time.temporal';
import { ZoneOffset as java_time_ZoneOffset, Instant as java_time_Instant, LocalTime as java_time_LocalTime, ZoneId as java_time_ZoneId } from 'java.time';
import { Comparator as java_util_Comparator } from 'java.util';

  export class ChronoLocalDateTime<D extends java_time_chrono_ChronoLocalDate> implements java_time_temporal_Temporal, java_time_temporal_TemporalAdjuster, java_lang_Comparable<java_time_chrono_ChronoLocalDateTime<java_lang_Object>> {
chronology: java_time_chrono_Chronology;
long: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): number;
compareTo(arg0: java_lang_Object): number;
format(arg0: java_time_format_DateTimeFormatter): string;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDateTime<java_lang_Object>;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
toEpochSecond(arg0: java_time_ZoneOffset): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoLocalDateTime<D>;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoLocalDateTime<D>;
toInstant(arg0: java_time_ZoneOffset): java_time_Instant;
isEqual(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
getChronology(): java_time_chrono_Chronology;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDateTime<D>;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDateTime<D>;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDateTime<D>;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDateTime<D>;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
isAfter(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
isBefore(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
toLocalDate(): D;
toLocalTime(): java_time_LocalTime;
atZone(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<D>;
static timeLineOrder(): java_util_Comparator<java_time_chrono_ChronoLocalDateTime<java_lang_Object>>;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
get(arg0: java_time_temporal_TemporalField): number;
getLong(arg0: java_time_temporal_TemporalField): number;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalField as java_time_temporal_TemporalField } from 'java.time.temporal';
import { CharSequence as java_lang_CharSequence, Object as java_lang_Object, Boolean as java_lang_Boolean, Appendable as java_lang_Appendable } from 'java.lang';
import { ParsePosition as java_text_ParsePosition, Format as java_text_Format } from 'java.text';
import { Locale as java_util_Locale, Set as java_util_Set } from 'java.util';
import { DateTimeFormatter as java_time_format_DateTimeFormatter, FormatStyle as java_time_format_FormatStyle, DecimalStyle as java_time_format_DecimalStyle, ResolverStyle as java_time_format_ResolverStyle } from 'java.time.format';
import { Period as java_time_Period, ZoneId as java_time_ZoneId } from 'java.time';
import { Chronology as java_time_chrono_Chronology } from 'java.time.chrono';
import { CompositePrinterParser as java_time_format_DateTimeFormatterBuilder_CompositePrinterParser } from 'java.time.format.DateTimeFormatterBuilder';

  export class DateTimeFormatter extends java_lang_Object {
printerParser: java_time_format_DateTimeFormatterBuilder_CompositePrinterParser;
locale: java_util_Locale;
decimalStyle: java_time_format_DecimalStyle;
resolverStyle: java_time_format_ResolverStyle;
resolverFields: java_util_Set<java_time_temporal_TemporalField>;
chrono: java_time_chrono_Chronology;
zone: java_time_ZoneId;
static ISO_LOCAL_DATE: java_time_format_DateTimeFormatter;
static ISO_OFFSET_DATE: java_time_format_DateTimeFormatter;
static ISO_DATE: java_time_format_DateTimeFormatter;
static ISO_LOCAL_TIME: java_time_format_DateTimeFormatter;
static ISO_OFFSET_TIME: java_time_format_DateTimeFormatter;
static ISO_TIME: java_time_format_DateTimeFormatter;
static ISO_LOCAL_DATE_TIME: java_time_format_DateTimeFormatter;
static ISO_OFFSET_DATE_TIME: java_time_format_DateTimeFormatter;
static ISO_ZONED_DATE_TIME: java_time_format_DateTimeFormatter;
static ISO_DATE_TIME: java_time_format_DateTimeFormatter;
static ISO_ORDINAL_DATE: java_time_format_DateTimeFormatter;
static ISO_WEEK_DATE: java_time_format_DateTimeFormatter;
static ISO_INSTANT: java_time_format_DateTimeFormatter;
static BASIC_ISO_DATE: java_time_format_DateTimeFormatter;
static RFC_1123_DATE_TIME: java_time_format_DateTimeFormatter;
static PARSED_EXCESS_DAYS: java_time_temporal_TemporalQuery<java_time_Period>;
static PARSED_LEAP_SECOND: java_time_temporal_TemporalQuery<java_lang_Boolean>;
locale: java_util_Locale;
decimalStyle: java_time_format_DecimalStyle;
chronology: java_time_chrono_Chronology;
zone: java_time_ZoneId;
resolverStyle: java_time_format_ResolverStyle;
resolverFields: java_util_Set<java_time_temporal_TemporalField>;
toString(): string;
format(arg0: java_time_temporal_TemporalAccessor): string;
parse(arg0: java_lang_CharSequence): java_time_temporal_TemporalAccessor;
parse<T extends java_lang_Object>(arg0: java_lang_CharSequence, arg1: java_time_temporal_TemporalQuery<T>): T;
parse(arg0: java_lang_CharSequence, arg1: java_text_ParsePosition): java_time_temporal_TemporalAccessor;
getLocale(): java_util_Locale;
static ofPattern(arg0: string): java_time_format_DateTimeFormatter;
static ofPattern(arg0: string, arg1: java_util_Locale): java_time_format_DateTimeFormatter;
static ofLocalizedDate(arg0: java_time_format_FormatStyle): java_time_format_DateTimeFormatter;
static ofLocalizedTime(arg0: java_time_format_FormatStyle): java_time_format_DateTimeFormatter;
static ofLocalizedDateTime(arg0: java_time_format_FormatStyle): java_time_format_DateTimeFormatter;
static ofLocalizedDateTime(arg0: java_time_format_FormatStyle, arg1: java_time_format_FormatStyle): java_time_format_DateTimeFormatter;
static parsedExcessDays(): java_time_temporal_TemporalQuery<java_time_Period>;
static parsedLeapSecond(): java_time_temporal_TemporalQuery<java_lang_Boolean>;
withLocale(arg0: java_util_Locale): java_time_format_DateTimeFormatter;
localizedBy(arg0: java_util_Locale): java_time_format_DateTimeFormatter;
getDecimalStyle(): java_time_format_DecimalStyle;
withDecimalStyle(arg0: java_time_format_DecimalStyle): java_time_format_DateTimeFormatter;
getChronology(): java_time_chrono_Chronology;
withChronology(arg0: java_time_chrono_Chronology): java_time_format_DateTimeFormatter;
getZone(): java_time_ZoneId;
withZone(arg0: java_time_ZoneId): java_time_format_DateTimeFormatter;
getResolverStyle(): java_time_format_ResolverStyle;
withResolverStyle(arg0: java_time_format_ResolverStyle): java_time_format_DateTimeFormatter;
getResolverFields(): java_util_Set<java_time_temporal_TemporalField>;
withResolverFields(...arg0: java_time_temporal_TemporalField[]): java_time_format_DateTimeFormatter;
withResolverFields(arg0: java_util_Set<java_time_temporal_TemporalField>): java_time_format_DateTimeFormatter;
formatTo(arg0: java_time_temporal_TemporalAccessor, arg1: java_lang_Appendable): void;
parseBest(arg0: java_lang_CharSequence, ...arg1: java_time_temporal_TemporalQuery<java_lang_Object>[]): java_time_temporal_TemporalAccessor;
parseUnresolved(arg0: java_lang_CharSequence, arg1: java_text_ParsePosition): java_time_temporal_TemporalAccessor;
toFormat(arg0: java_time_temporal_TemporalQuery<java_lang_Object>): java_text_Format;
toFormat(): java_text_Format;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { FormatStyle as java_time_format_FormatStyle } from 'java.time.format';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FormatStyle extends java_lang_Enum<java_time_format_FormatStyle> {
static FULL: java_time_format_FormatStyle;
static LONG: java_time_format_FormatStyle;
static MEDIUM: java_time_format_FormatStyle;
static SHORT: java_time_format_FormatStyle;
static $VALUES: java_time_format_FormatStyle[];
class: java_lang_Class<java_lang_Object>;
static values(): java_time_format_FormatStyle[];
static valueOf(arg0: string): java_time_format_FormatStyle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalAmount as java_time_temporal_TemporalAmount, Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence } from 'java.lang';
import { Period as java_time_Period, LocalDate as java_time_LocalDate } from 'java.time';
import { ChronoPeriod as java_time_chrono_ChronoPeriod, Chronology as java_time_chrono_Chronology, IsoChronology as java_time_chrono_IsoChronology } from 'java.time.chrono';
import { List as java_util_List } from 'java.util';
import { Pattern as java_util_regex_Pattern } from 'java.util.regex';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Period extends java_lang_Object implements java_time_chrono_ChronoPeriod, java_io_Serializable {
static ZERO: java_time_Period;
static serialVersionUID: number;
static PATTERN: java_util_regex_Pattern;
static SUPPORTED_UNITS: java_util_List<java_time_temporal_TemporalUnit>;
years: number;
months: number;
days: number;
years: number;
months: number;
days: number;
chronology: java_time_chrono_Chronology;
chronology: java_time_chrono_IsoChronology;
units: java_util_List<java_time_temporal_TemporalUnit>;
get(arg0: java_time_temporal_TemporalUnit): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static from(arg0: java_time_temporal_TemporalAmount): java_time_Period;
static of(arg0: number, arg1: number, arg2: number): java_time_Period;
static parse(arg0: java_lang_CharSequence): java_time_Period;
normalized(): java_time_chrono_ChronoPeriod;
normalized(): java_time_Period;
minusYears(arg0: number): java_time_Period;
plusMonths(arg0: number): java_time_Period;
static ofYears(arg0: number): java_time_Period;
static ofMonths(arg0: number): java_time_Period;
static ofWeeks(arg0: number): java_time_Period;
getYears(): number;
getMonths(): number;
getDays(): number;
withYears(arg0: number): java_time_Period;
withMonths(arg0: number): java_time_Period;
withDays(arg0: number): java_time_Period;
plusYears(arg0: number): java_time_Period;
getChronology(): java_time_chrono_Chronology;
getChronology(): java_time_chrono_IsoChronology;
addTo(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
static between(arg0: java_time_LocalDate, arg1: java_time_LocalDate): java_time_Period;
plus(arg0: java_time_temporal_TemporalAmount): java_time_Period;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoPeriod;
static ofDays(arg0: number): java_time_Period;
getUnits(): java_util_List<java_time_temporal_TemporalUnit>;
isZero(): boolean;
isNegative(): boolean;
plusDays(arg0: number): java_time_Period;
minus(arg0: java_time_temporal_TemporalAmount): java_time_Period;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoPeriod;
minusDays(arg0: number): java_time_Period;
multipliedBy(arg0: number): java_time_chrono_ChronoPeriod;
multipliedBy(arg0: number): java_time_Period;
negated(): java_time_Period;
negated(): java_time_chrono_ChronoPeriod;
subtractFrom(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
minusMonths(arg0: number): java_time_Period;
toTotalMonths(): number;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { TemporalUnit as java_time_temporal_TemporalUnit, Temporal as java_time_temporal_Temporal, TemporalAmount as java_time_temporal_TemporalAmount } from 'java.time.temporal';
import { Object as java_lang_Object } from 'java.lang';
import { ChronoPeriod as java_time_chrono_ChronoPeriod, Chronology as java_time_chrono_Chronology, ChronoLocalDate as java_time_chrono_ChronoLocalDate } from 'java.time.chrono';
import { List as java_util_List } from 'java.util';

  export class ChronoPeriod implements java_time_temporal_TemporalAmount {
chronology: java_time_chrono_Chronology;
units: java_util_List<java_time_temporal_TemporalUnit>;
get(arg0: java_time_temporal_TemporalUnit): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
normalized(): java_time_chrono_ChronoPeriod;
getChronology(): java_time_chrono_Chronology;
addTo(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
static between(arg0: java_time_chrono_ChronoLocalDate, arg1: java_time_chrono_ChronoLocalDate): java_time_chrono_ChronoPeriod;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoPeriod;
getUnits(): java_util_List<java_time_temporal_TemporalUnit>;
isZero(): boolean;
isNegative(): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoPeriod;
multipliedBy(arg0: number): java_time_chrono_ChronoPeriod;
negated(): java_time_chrono_ChronoPeriod;
subtractFrom(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { Object as java_lang_Object, Long as java_lang_Long, Comparable as java_lang_Comparable } from 'java.lang';
import { Chronology as java_time_chrono_Chronology, ChronoLocalDate as java_time_chrono_ChronoLocalDate, Era as java_time_chrono_Era, ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime, ChronoZonedDateTime as java_time_chrono_ChronoZonedDateTime, ChronoPeriod as java_time_chrono_ChronoPeriod } from 'java.time.chrono';
import { TemporalAccessor as java_time_temporal_TemporalAccessor, ChronoField as java_time_temporal_ChronoField, ValueRange as java_time_temporal_ValueRange, TemporalField as java_time_temporal_TemporalField } from 'java.time.temporal';
import { TextStyle as java_time_format_TextStyle, ResolverStyle as java_time_format_ResolverStyle } from 'java.time.format';
import { Locale as java_util_Locale, List as java_util_List, Map as java_util_Map, Set as java_util_Set } from 'java.util';
import { ZoneOffset as java_time_ZoneOffset, Instant as java_time_Instant, ZoneId as java_time_ZoneId, Clock as java_time_Clock } from 'java.time';

  export class Chronology implements java_lang_Comparable<java_time_chrono_Chronology> {
id: string;
displayName: string;
static availableChronologies: java_util_Set<java_time_chrono_Chronology>;
calendarType: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_time_chrono_Chronology): number;
compareTo(arg0: java_lang_Object): number;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_Chronology;
static of(arg0: string): java_time_chrono_Chronology;
getId(): string;
range(arg0: java_time_temporal_ChronoField): java_time_temporal_ValueRange;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
date(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDate;
date(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number): java_time_chrono_ChronoLocalDate;
date(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
isLeapYear(arg0: number): boolean;
dateEpochDay(arg0: number): java_time_chrono_ChronoLocalDate;
prolepticYear(arg0: java_time_chrono_Era, arg1: number): number;
dateYearDay(arg0: number, arg1: number): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: java_time_chrono_Era, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
epochSecond(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneOffset): number;
epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: java_time_ZoneOffset): number;
localDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDateTime<java_time_chrono_ChronoLocalDate>;
zonedDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoZonedDateTime<java_time_chrono_ChronoLocalDate>;
zonedDateTime(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<java_time_chrono_ChronoLocalDate>;
dateNow(arg0: java_time_ZoneId): java_time_chrono_ChronoLocalDate;
dateNow(arg0: java_time_Clock): java_time_chrono_ChronoLocalDate;
dateNow(): java_time_chrono_ChronoLocalDate;
eraOf(arg0: number): java_time_chrono_Era;
eras(): java_util_List<java_time_chrono_Era>;
resolveDate(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_format_ResolverStyle): java_time_chrono_ChronoLocalDate;
period(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoPeriod;
static getAvailableChronologies(): java_util_Set<java_time_chrono_Chronology>;
static ofLocale(arg0: java_util_Locale): java_time_chrono_Chronology;
getCalendarType(): string;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { ChronoField as java_time_temporal_ChronoField, ValueRange as java_time_temporal_ValueRange, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalUnit as java_time_temporal_TemporalUnit, Temporal as java_time_temporal_Temporal, TemporalField as java_time_temporal_TemporalField } from 'java.time.temporal';
import { Locale as java_util_Locale, Map as java_util_Map } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object, Long as java_lang_Long, Enum as java_lang_Enum } from 'java.lang';
import { ResolverStyle as java_time_format_ResolverStyle } from 'java.time.format';

  export class ChronoField extends java_lang_Enum<java_time_temporal_ChronoField> implements java_time_temporal_TemporalField {
static NANO_OF_SECOND: java_time_temporal_ChronoField;
static NANO_OF_DAY: java_time_temporal_ChronoField;
static MICRO_OF_SECOND: java_time_temporal_ChronoField;
static MICRO_OF_DAY: java_time_temporal_ChronoField;
static MILLI_OF_SECOND: java_time_temporal_ChronoField;
static MILLI_OF_DAY: java_time_temporal_ChronoField;
static SECOND_OF_MINUTE: java_time_temporal_ChronoField;
static SECOND_OF_DAY: java_time_temporal_ChronoField;
static MINUTE_OF_HOUR: java_time_temporal_ChronoField;
static MINUTE_OF_DAY: java_time_temporal_ChronoField;
static HOUR_OF_AMPM: java_time_temporal_ChronoField;
static CLOCK_HOUR_OF_AMPM: java_time_temporal_ChronoField;
static HOUR_OF_DAY: java_time_temporal_ChronoField;
static CLOCK_HOUR_OF_DAY: java_time_temporal_ChronoField;
static AMPM_OF_DAY: java_time_temporal_ChronoField;
static DAY_OF_WEEK: java_time_temporal_ChronoField;
static ALIGNED_DAY_OF_WEEK_IN_MONTH: java_time_temporal_ChronoField;
static ALIGNED_DAY_OF_WEEK_IN_YEAR: java_time_temporal_ChronoField;
static DAY_OF_MONTH: java_time_temporal_ChronoField;
static DAY_OF_YEAR: java_time_temporal_ChronoField;
static EPOCH_DAY: java_time_temporal_ChronoField;
static ALIGNED_WEEK_OF_MONTH: java_time_temporal_ChronoField;
static ALIGNED_WEEK_OF_YEAR: java_time_temporal_ChronoField;
static MONTH_OF_YEAR: java_time_temporal_ChronoField;
static PROLEPTIC_MONTH: java_time_temporal_ChronoField;
static YEAR_OF_ERA: java_time_temporal_ChronoField;
static YEAR: java_time_temporal_ChronoField;
static ERA: java_time_temporal_ChronoField;
static INSTANT_SECONDS: java_time_temporal_ChronoField;
static OFFSET_SECONDS: java_time_temporal_ChronoField;
name: string;
baseUnit: java_time_temporal_TemporalUnit;
rangeUnit: java_time_temporal_TemporalUnit;
range: java_time_temporal_ValueRange;
displayNameKey: string;
static $VALUES: java_time_temporal_ChronoField[];
displayName: string;
baseUnit: java_time_temporal_TemporalUnit;
rangeUnit: java_time_temporal_TemporalUnit;
from: number;
class: java_lang_Class<java_lang_Object>;
toString(): string;
static values(): java_time_temporal_ChronoField[];
static valueOf(arg0: string): java_time_temporal_ChronoField;
range(): java_time_temporal_ValueRange;
rangeRefinedBy(arg0: java_time_temporal_TemporalAccessor): java_time_temporal_ValueRange;
getDisplayName(arg0: java_util_Locale): string;
getBaseUnit(): java_time_temporal_TemporalUnit;
getRangeUnit(): java_time_temporal_TemporalUnit;
isDateBased(): boolean;
isTimeBased(): boolean;
checkValidValue(arg0: number): number;
checkValidIntValue(arg0: number): number;
isSupportedBy(arg0: java_time_temporal_TemporalAccessor): boolean;
getFrom(arg0: java_time_temporal_TemporalAccessor): number;
adjustInto<R extends java_time_temporal_Temporal>(arg0: R, arg1: number): R;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
resolve(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_temporal_TemporalAccessor, arg2: java_time_format_ResolverStyle): java_time_temporal_TemporalAccessor;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TextStyle extends java_lang_Enum<java_time_format_TextStyle> {
static FULL: java_time_format_TextStyle;
static FULL_STANDALONE: java_time_format_TextStyle;
static SHORT: java_time_format_TextStyle;
static SHORT_STANDALONE: java_time_format_TextStyle;
static NARROW: java_time_format_TextStyle;
static NARROW_STANDALONE: java_time_format_TextStyle;
calendarStyle: number;
zoneNameStyleIndex: number;
static $VALUES: java_time_format_TextStyle[];
class: java_lang_Class<java_lang_Object>;
static values(): java_time_format_TextStyle[];
static valueOf(arg0: string): java_time_format_TextStyle;
isStandalone(): boolean;
asStandalone(): java_time_format_TextStyle;
asNormal(): java_time_format_TextStyle;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { ChronoLocalDate as java_time_chrono_ChronoLocalDate, Era as java_time_chrono_Era, ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime, Chronology as java_time_chrono_Chronology, ChronoPeriod as java_time_chrono_ChronoPeriod } from 'java.time.chrono';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, TemporalField as java_time_temporal_TemporalField, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAmount as java_time_temporal_TemporalAmount, ValueRange as java_time_temporal_ValueRange } from 'java.time.temporal';
import { LocalTime as java_time_LocalTime } from 'java.time';
import { Comparator as java_util_Comparator } from 'java.util';

  export class ChronoLocalDate implements java_time_temporal_Temporal, java_time_temporal_TemporalAdjuster, java_lang_Comparable<java_time_chrono_ChronoLocalDate> {
era: java_time_chrono_Era;
chronology: java_time_chrono_Chronology;
long: number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_ChronoLocalDate): number;
format(arg0: java_time_format_DateTimeFormatter): string;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDate;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoLocalDate;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoLocalDate;
isEqual(arg0: java_time_chrono_ChronoLocalDate): boolean;
isLeapYear(): boolean;
getEra(): java_time_chrono_Era;
atTime(arg0: java_time_LocalTime): java_time_chrono_ChronoLocalDateTime<java_lang_Object>;
toEpochDay(): number;
getChronology(): java_time_chrono_Chronology;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDate;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDate;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
until(arg0: java_time_chrono_ChronoLocalDate): java_time_chrono_ChronoPeriod;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDate;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDate;
isAfter(arg0: java_time_chrono_ChronoLocalDate): boolean;
isBefore(arg0: java_time_chrono_ChronoLocalDate): boolean;
static timeLineOrder(): java_util_Comparator<java_time_chrono_ChronoLocalDate>;
lengthOfMonth(): number;
lengthOfYear(): number;
get(arg0: java_time_temporal_TemporalField): number;
getLong(arg0: java_time_temporal_TemporalField): number;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { TemporalField as java_time_temporal_TemporalField, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalAdjuster as java_time_temporal_TemporalAdjuster } from 'java.time.temporal';
import { Object as java_lang_Object } from 'java.lang';
import { TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { Locale as java_util_Locale } from 'java.util';

  export class Era implements java_time_temporal_TemporalAccessor, java_time_temporal_TemporalAdjuster {
long: number;
value: number;
displayName: string;
get(arg0: java_time_temporal_TemporalField): number;
getLong(arg0: java_time_temporal_TemporalField): number;
getValue(): number;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAmount as java_time_temporal_TemporalAmount } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Comparable as java_lang_Comparable } from 'java.lang';
import { LocalTime as java_time_LocalTime, ZoneId as java_time_ZoneId, Clock as java_time_Clock, LocalDate as java_time_LocalDate, ZoneOffset as java_time_ZoneOffset, Instant as java_time_Instant, OffsetTime as java_time_OffsetTime, LocalDateTime as java_time_LocalDateTime } from 'java.time';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { Serializable as java_io_Serializable } from 'java.io';

  export class LocalTime extends java_lang_Object implements java_time_temporal_Temporal, java_time_temporal_TemporalAdjuster, java_lang_Comparable<java_time_LocalTime>, java_io_Serializable {
static MIN: java_time_LocalTime;
static MAX: java_time_LocalTime;
static MIDNIGHT: java_time_LocalTime;
static NOON: java_time_LocalTime;
static HOURS: java_time_LocalTime[];
static HOURS_PER_DAY: number;
static MINUTES_PER_HOUR: number;
static MINUTES_PER_DAY: number;
static SECONDS_PER_MINUTE: number;
static SECONDS_PER_HOUR: number;
static SECONDS_PER_DAY: number;
static MILLIS_PER_DAY: number;
static MICROS_PER_DAY: number;
static NANOS_PER_MILLI: number;
static NANOS_PER_SECOND: number;
static NANOS_PER_MINUTE: number;
static NANOS_PER_HOUR: number;
static NANOS_PER_DAY: number;
static serialVersionUID: number;
hour: number;
minute: number;
second: number;
nano: number;
long: number;
nano: number;
hour: number;
minute: number;
second: number;
get(arg0: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_time_LocalTime): number;
compareTo(arg0: java_lang_Object): number;
getLong(arg0: java_time_temporal_TemporalField): number;
format(arg0: java_time_format_DateTimeFormatter): string;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_LocalTime;
static of(arg0: number, arg1: number, arg2: number): java_time_LocalTime;
static of(arg0: number, arg1: number): java_time_LocalTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number): java_time_LocalTime;
static now(): java_time_LocalTime;
static now(arg0: java_time_ZoneId): java_time_LocalTime;
static now(arg0: java_time_Clock): java_time_LocalTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_LocalTime;
static parse(arg0: java_lang_CharSequence): java_time_LocalTime;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
toEpochSecond(arg0: java_time_LocalDate, arg1: java_time_ZoneOffset): number;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_LocalTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_LocalTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_LocalTime;
getNano(): number;
getHour(): number;
getMinute(): number;
getSecond(): number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_LocalTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
plusHours(arg0: number): java_time_LocalTime;
plusMinutes(arg0: number): java_time_LocalTime;
plusSeconds(arg0: number): java_time_LocalTime;
plusNanos(arg0: number): java_time_LocalTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minus(arg0: java_time_temporal_TemporalAmount): java_time_LocalTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minusHours(arg0: number): java_time_LocalTime;
minusMinutes(arg0: number): java_time_LocalTime;
minusSeconds(arg0: number): java_time_LocalTime;
minusNanos(arg0: number): java_time_LocalTime;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_LocalTime;
isAfter(arg0: java_time_LocalTime): boolean;
isBefore(arg0: java_time_LocalTime): boolean;
toSecondOfDay(): number;
static ofSecondOfDay(arg0: number): java_time_LocalTime;
withHour(arg0: number): java_time_LocalTime;
withMinute(arg0: number): java_time_LocalTime;
withSecond(arg0: number): java_time_LocalTime;
withNano(arg0: number): java_time_LocalTime;
atOffset(arg0: java_time_ZoneOffset): java_time_OffsetTime;
static ofNanoOfDay(arg0: number): java_time_LocalTime;
toNanoOfDay(): number;
atDate(arg0: java_time_LocalDate): java_time_LocalDateTime;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAmount as java_time_temporal_TemporalAmount } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence } from 'java.lang';
import { ChronoLocalDate as java_time_chrono_ChronoLocalDate, IsoEra as java_time_chrono_IsoEra, Era as java_time_chrono_Era, ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime, Chronology as java_time_chrono_Chronology, IsoChronology as java_time_chrono_IsoChronology, ChronoPeriod as java_time_chrono_ChronoPeriod } from 'java.time.chrono';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { LocalDate as java_time_LocalDate, Month as java_time_Month, Clock as java_time_Clock, ZoneId as java_time_ZoneId, LocalTime as java_time_LocalTime, ZoneOffset as java_time_ZoneOffset, Instant as java_time_Instant, DayOfWeek as java_time_DayOfWeek, LocalDateTime as java_time_LocalDateTime, OffsetTime as java_time_OffsetTime, OffsetDateTime as java_time_OffsetDateTime, Period as java_time_Period, ZonedDateTime as java_time_ZonedDateTime } from 'java.time';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Serializable as java_io_Serializable } from 'java.io';

  export class LocalDate extends java_lang_Object implements java_time_temporal_Temporal, java_time_temporal_TemporalAdjuster, java_time_chrono_ChronoLocalDate, java_io_Serializable {
static MIN: java_time_LocalDate;
static MAX: java_time_LocalDate;
static EPOCH: java_time_LocalDate;
static serialVersionUID: number;
static DAYS_PER_CYCLE: number;
static DAYS_0000_TO_1970: number;
year: number;
month: number;
day: number;
long: number;
year: number;
monthValue: number;
dayOfMonth: number;
dayOfWeek: java_time_DayOfWeek;
dayOfYear: number;
era: java_time_chrono_IsoEra;
era: java_time_chrono_Era;
chronology: java_time_chrono_Chronology;
chronology: java_time_chrono_IsoChronology;
month: java_time_Month;
get(arg0: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_ChronoLocalDate): number;
getLong(arg0: java_time_temporal_TemporalField): number;
format(arg0: java_time_format_DateTimeFormatter): string;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_LocalDate;
static of(arg0: number, arg1: number, arg2: number): java_time_LocalDate;
static of(arg0: number, arg1: java_time_Month, arg2: number): java_time_LocalDate;
static now(): java_time_LocalDate;
static now(arg0: java_time_Clock): java_time_LocalDate;
static now(arg0: java_time_ZoneId): java_time_LocalDate;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
static parse(arg0: java_lang_CharSequence): java_time_LocalDate;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_LocalDate;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
toEpochSecond(arg0: java_time_LocalTime, arg1: java_time_ZoneOffset): number;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_LocalDate;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_LocalDate;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoLocalDate;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoLocalDate;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_LocalDate;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
getYear(): number;
getMonthValue(): number;
getDayOfMonth(): number;
isEqual(arg0: java_time_chrono_ChronoLocalDate): boolean;
getDayOfWeek(): java_time_DayOfWeek;
isLeapYear(): boolean;
getDayOfYear(): number;
withDayOfYear(arg0: number): java_time_LocalDate;
minusYears(arg0: number): java_time_LocalDate;
plusMonths(arg0: number): java_time_LocalDate;
plusWeeks(arg0: number): java_time_LocalDate;
static ofYearDay(arg0: number, arg1: number): java_time_LocalDate;
static ofEpochDay(arg0: number): java_time_LocalDate;
getEra(): java_time_chrono_IsoEra;
getEra(): java_time_chrono_Era;
atTime(arg0: number, arg1: number, arg2: number): java_time_LocalDateTime;
atTime(arg0: number, arg1: number, arg2: number, arg3: number): java_time_LocalDateTime;
atTime(arg0: java_time_OffsetTime): java_time_OffsetDateTime;
atTime(arg0: java_time_LocalTime): java_time_LocalDateTime;
atTime(arg0: java_time_LocalTime): java_time_chrono_ChronoLocalDateTime;
atTime(arg0: number, arg1: number): java_time_LocalDateTime;
toEpochDay(): number;
plusYears(arg0: number): java_time_LocalDate;
getChronology(): java_time_chrono_Chronology;
getChronology(): java_time_chrono_IsoChronology;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalDate;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDate;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDate;
plus(arg0: java_time_temporal_TemporalAmount): java_time_LocalDate;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
until(arg0: java_time_chrono_ChronoLocalDate): java_time_chrono_ChronoPeriod;
until(arg0: java_time_chrono_ChronoLocalDate): java_time_Period;
plusDays(arg0: number): java_time_LocalDate;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDate;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalDate;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minus(arg0: java_time_temporal_TemporalAmount): java_time_LocalDate;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDate;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minusDays(arg0: number): java_time_LocalDate;
minusMonths(arg0: number): java_time_LocalDate;
isAfter(arg0: java_time_chrono_ChronoLocalDate): boolean;
isBefore(arg0: java_time_chrono_ChronoLocalDate): boolean;
getMonth(): java_time_Month;
withYear(arg0: number): java_time_LocalDate;
withMonth(arg0: number): java_time_LocalDate;
withDayOfMonth(arg0: number): java_time_LocalDate;
minusWeeks(arg0: number): java_time_LocalDate;
lengthOfMonth(): number;
lengthOfYear(): number;
datesUntil(arg0: java_time_LocalDate, arg1: java_time_Period): java_util_stream_Stream<java_time_LocalDate>;
datesUntil(arg0: java_time_LocalDate): java_util_stream_Stream<java_time_LocalDate>;
atStartOfDay(): java_time_LocalDateTime;
atStartOfDay(arg0: java_time_ZoneId): java_time_ZonedDateTime;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster } from 'java.time.temporal';
import { Month as java_time_Month } from 'java.time';
import { Object as java_lang_Object, Class as java_lang_Class, Enum as java_lang_Enum } from 'java.lang';
import { TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { Locale as java_util_Locale } from 'java.util';

  export class Month extends java_lang_Enum<java_time_Month> implements java_time_temporal_TemporalAccessor, java_time_temporal_TemporalAdjuster {
static JANUARY: java_time_Month;
static FEBRUARY: java_time_Month;
static MARCH: java_time_Month;
static APRIL: java_time_Month;
static MAY: java_time_Month;
static JUNE: java_time_Month;
static JULY: java_time_Month;
static AUGUST: java_time_Month;
static SEPTEMBER: java_time_Month;
static OCTOBER: java_time_Month;
static NOVEMBER: java_time_Month;
static DECEMBER: java_time_Month;
static ENUMS: java_time_Month[];
static $VALUES: java_time_Month[];
long: number;
value: number;
displayName: string;
class: java_lang_Class<java_lang_Object>;
get(arg0: java_time_temporal_TemporalField): number;
length(arg0: boolean): number;
static values(): java_time_Month[];
getLong(arg0: java_time_temporal_TemporalField): number;
static valueOf(arg0: string): java_time_Month;
getValue(): number;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_Month;
static of(arg0: number): java_time_Month;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
maxLength(): number;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: number): java_time_Month;
minus(arg0: number): java_time_Month;
minLength(): number;
firstDayOfYear(arg0: boolean): number;
firstMonthOfQuarter(): java_time_Month;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster } from 'java.time.temporal';
import { DayOfWeek as java_time_DayOfWeek } from 'java.time';
import { Object as java_lang_Object, Class as java_lang_Class, Enum as java_lang_Enum } from 'java.lang';
import { TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { Locale as java_util_Locale } from 'java.util';

  export class DayOfWeek extends java_lang_Enum<java_time_DayOfWeek> implements java_time_temporal_TemporalAccessor, java_time_temporal_TemporalAdjuster {
static MONDAY: java_time_DayOfWeek;
static TUESDAY: java_time_DayOfWeek;
static WEDNESDAY: java_time_DayOfWeek;
static THURSDAY: java_time_DayOfWeek;
static FRIDAY: java_time_DayOfWeek;
static SATURDAY: java_time_DayOfWeek;
static SUNDAY: java_time_DayOfWeek;
static ENUMS: java_time_DayOfWeek[];
static $VALUES: java_time_DayOfWeek[];
long: number;
value: number;
displayName: string;
class: java_lang_Class<java_lang_Object>;
get(arg0: java_time_temporal_TemporalField): number;
static values(): java_time_DayOfWeek[];
getLong(arg0: java_time_temporal_TemporalField): number;
static valueOf(arg0: string): java_time_DayOfWeek;
getValue(): number;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_DayOfWeek;
static of(arg0: number): java_time_DayOfWeek;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: number): java_time_DayOfWeek;
minus(arg0: number): java_time_DayOfWeek;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { IsoEra as java_time_chrono_IsoEra, Era as java_time_chrono_Era } from 'java.time.chrono';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';
import { TemporalField as java_time_temporal_TemporalField, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { Locale as java_util_Locale } from 'java.util';

  export class IsoEra extends java_lang_Enum<java_time_chrono_IsoEra> implements java_time_chrono_Era {
static BCE: java_time_chrono_IsoEra;
static CE: java_time_chrono_IsoEra;
static $VALUES: java_time_chrono_IsoEra[];
value: number;
class: java_lang_Class<java_lang_Object>;
long: number;
displayName: string;
static values(): java_time_chrono_IsoEra[];
static valueOf(arg0: string): java_time_chrono_IsoEra;
getValue(): number;
static of(arg0: number): java_time_chrono_IsoEra;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
get(arg0: java_time_temporal_TemporalField): number;
getLong(arg0: java_time_temporal_TemporalField): number;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, ValueRange as java_time_temporal_ValueRange, TemporalAdjuster as java_time_temporal_TemporalAdjuster, Temporal as java_time_temporal_Temporal, TemporalAmount as java_time_temporal_TemporalAmount } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Comparable as java_lang_Comparable } from 'java.lang';
import { OffsetTime as java_time_OffsetTime, ZoneOffset as java_time_ZoneOffset, LocalTime as java_time_LocalTime, Clock as java_time_Clock, ZoneId as java_time_ZoneId, LocalDate as java_time_LocalDate, Instant as java_time_Instant, OffsetDateTime as java_time_OffsetDateTime } from 'java.time';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { Serializable as java_io_Serializable } from 'java.io';

  export class OffsetTime extends java_lang_Object implements java_time_temporal_Temporal, java_time_temporal_TemporalAdjuster, java_lang_Comparable<java_time_OffsetTime>, java_io_Serializable {
static MIN: java_time_OffsetTime;
static MAX: java_time_OffsetTime;
static serialVersionUID: number;
time: java_time_LocalTime;
offset: java_time_ZoneOffset;
long: number;
offset: java_time_ZoneOffset;
nano: number;
hour: number;
minute: number;
second: number;
get(arg0: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_OffsetTime): number;
getLong(arg0: java_time_temporal_TemporalField): number;
format(arg0: java_time_format_DateTimeFormatter): string;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_OffsetTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_time_ZoneOffset): java_time_OffsetTime;
static of(arg0: java_time_LocalTime, arg1: java_time_ZoneOffset): java_time_OffsetTime;
static now(): java_time_OffsetTime;
static now(arg0: java_time_Clock): java_time_OffsetTime;
static now(arg0: java_time_ZoneId): java_time_OffsetTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
getOffset(): java_time_ZoneOffset;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_OffsetTime;
static parse(arg0: java_lang_CharSequence): java_time_OffsetTime;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
toEpochSecond(arg0: java_time_LocalDate): number;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_OffsetTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_OffsetTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_OffsetTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
getNano(): number;
getHour(): number;
getMinute(): number;
getSecond(): number;
isEqual(arg0: java_time_OffsetTime): boolean;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_OffsetTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_OffsetTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
plusHours(arg0: number): java_time_OffsetTime;
plusMinutes(arg0: number): java_time_OffsetTime;
plusSeconds(arg0: number): java_time_OffsetTime;
plusNanos(arg0: number): java_time_OffsetTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_OffsetTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minus(arg0: java_time_temporal_TemporalAmount): java_time_OffsetTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minusHours(arg0: number): java_time_OffsetTime;
minusMinutes(arg0: number): java_time_OffsetTime;
minusSeconds(arg0: number): java_time_OffsetTime;
minusNanos(arg0: number): java_time_OffsetTime;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_OffsetTime;
isAfter(arg0: java_time_OffsetTime): boolean;
isBefore(arg0: java_time_OffsetTime): boolean;
toLocalTime(): java_time_LocalTime;
withHour(arg0: number): java_time_OffsetTime;
withMinute(arg0: number): java_time_OffsetTime;
withSecond(arg0: number): java_time_OffsetTime;
withNano(arg0: number): java_time_OffsetTime;
atDate(arg0: java_time_LocalDate): java_time_OffsetDateTime;
withOffsetSameLocal(arg0: java_time_ZoneOffset): java_time_OffsetTime;
withOffsetSameInstant(arg0: java_time_ZoneOffset): java_time_OffsetTime;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, ValueRange as java_time_temporal_ValueRange, TemporalAdjuster as java_time_temporal_TemporalAdjuster, Temporal as java_time_temporal_Temporal, TemporalAmount as java_time_temporal_TemporalAmount } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Comparable as java_lang_Comparable } from 'java.lang';
import { OffsetDateTime as java_time_OffsetDateTime, ZoneOffset as java_time_ZoneOffset, LocalDateTime as java_time_LocalDateTime, LocalDate as java_time_LocalDate, LocalTime as java_time_LocalTime, ZoneId as java_time_ZoneId, Clock as java_time_Clock, Instant as java_time_Instant, DayOfWeek as java_time_DayOfWeek, ZonedDateTime as java_time_ZonedDateTime, Month as java_time_Month, OffsetTime as java_time_OffsetTime } from 'java.time';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { Comparator as java_util_Comparator } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class OffsetDateTime extends java_lang_Object implements java_time_temporal_Temporal, java_time_temporal_TemporalAdjuster, java_lang_Comparable<java_time_OffsetDateTime>, java_io_Serializable {
static MIN: java_time_OffsetDateTime;
static MAX: java_time_OffsetDateTime;
static serialVersionUID: number;
dateTime: java_time_LocalDateTime;
offset: java_time_ZoneOffset;
long: number;
offset: java_time_ZoneOffset;
nano: number;
year: number;
monthValue: number;
dayOfMonth: number;
hour: number;
minute: number;
second: number;
dayOfWeek: java_time_DayOfWeek;
dayOfYear: number;
month: java_time_Month;
get(arg0: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_OffsetDateTime): number;
getLong(arg0: java_time_temporal_TemporalField): number;
format(arg0: java_time_format_DateTimeFormatter): string;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_OffsetDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneOffset): java_time_OffsetDateTime;
static of(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset): java_time_OffsetDateTime;
static of(arg0: java_time_LocalDate, arg1: java_time_LocalTime, arg2: java_time_ZoneOffset): java_time_OffsetDateTime;
static now(): java_time_OffsetDateTime;
static now(arg0: java_time_ZoneId): java_time_OffsetDateTime;
static now(arg0: java_time_Clock): java_time_OffsetDateTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
getOffset(): java_time_ZoneOffset;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_OffsetDateTime;
static parse(arg0: java_lang_CharSequence): java_time_OffsetDateTime;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
toEpochSecond(): number;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_OffsetDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_OffsetDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_OffsetDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
getNano(): number;
toInstant(): java_time_Instant;
getYear(): number;
getMonthValue(): number;
getDayOfMonth(): number;
getHour(): number;
getMinute(): number;
getSecond(): number;
isEqual(arg0: java_time_OffsetDateTime): boolean;
getDayOfWeek(): java_time_DayOfWeek;
getDayOfYear(): number;
withDayOfYear(arg0: number): java_time_OffsetDateTime;
minusYears(arg0: number): java_time_OffsetDateTime;
plusMonths(arg0: number): java_time_OffsetDateTime;
plusWeeks(arg0: number): java_time_OffsetDateTime;
plusYears(arg0: number): java_time_OffsetDateTime;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_OffsetDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_OffsetDateTime;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
plusDays(arg0: number): java_time_OffsetDateTime;
plusHours(arg0: number): java_time_OffsetDateTime;
plusMinutes(arg0: number): java_time_OffsetDateTime;
plusSeconds(arg0: number): java_time_OffsetDateTime;
plusNanos(arg0: number): java_time_OffsetDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_OffsetDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_OffsetDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusDays(arg0: number): java_time_OffsetDateTime;
minusHours(arg0: number): java_time_OffsetDateTime;
minusMinutes(arg0: number): java_time_OffsetDateTime;
minusSeconds(arg0: number): java_time_OffsetDateTime;
minusNanos(arg0: number): java_time_OffsetDateTime;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_OffsetDateTime;
toZonedDateTime(): java_time_ZonedDateTime;
minusMonths(arg0: number): java_time_OffsetDateTime;
isAfter(arg0: java_time_OffsetDateTime): boolean;
isBefore(arg0: java_time_OffsetDateTime): boolean;
getMonth(): java_time_Month;
toLocalDate(): java_time_LocalDate;
toLocalTime(): java_time_LocalTime;
withYear(arg0: number): java_time_OffsetDateTime;
withMonth(arg0: number): java_time_OffsetDateTime;
withDayOfMonth(arg0: number): java_time_OffsetDateTime;
withHour(arg0: number): java_time_OffsetDateTime;
withMinute(arg0: number): java_time_OffsetDateTime;
withSecond(arg0: number): java_time_OffsetDateTime;
withNano(arg0: number): java_time_OffsetDateTime;
minusWeeks(arg0: number): java_time_OffsetDateTime;
toLocalDateTime(): java_time_LocalDateTime;
static timeLineOrder(): java_util_Comparator<java_time_OffsetDateTime>;
withOffsetSameLocal(arg0: java_time_ZoneOffset): java_time_OffsetDateTime;
withOffsetSameInstant(arg0: java_time_ZoneOffset): java_time_OffsetDateTime;
atZoneSameInstant(arg0: java_time_ZoneId): java_time_ZonedDateTime;
atZoneSimilarLocal(arg0: java_time_ZoneId): java_time_ZonedDateTime;
toOffsetTime(): java_time_OffsetTime;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, ValueRange as java_time_temporal_ValueRange, TemporalAdjuster as java_time_temporal_TemporalAdjuster, Temporal as java_time_temporal_Temporal, TemporalAmount as java_time_temporal_TemporalAmount } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence } from 'java.lang';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { ZonedDateTime as java_time_ZonedDateTime, ZoneId as java_time_ZoneId, LocalDateTime as java_time_LocalDateTime, LocalDate as java_time_LocalDate, LocalTime as java_time_LocalTime, Clock as java_time_Clock, ZoneOffset as java_time_ZoneOffset, Instant as java_time_Instant, DayOfWeek as java_time_DayOfWeek, Month as java_time_Month, OffsetDateTime as java_time_OffsetDateTime } from 'java.time';
import { ChronoZonedDateTime as java_time_chrono_ChronoZonedDateTime, ChronoLocalDate as java_time_chrono_ChronoLocalDate, ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime, Chronology as java_time_chrono_Chronology } from 'java.time.chrono';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ZonedDateTime extends java_lang_Object implements java_time_temporal_Temporal, java_time_chrono_ChronoZonedDateTime<java_time_LocalDate>, java_io_Serializable {
static serialVersionUID: number;
dateTime: java_time_LocalDateTime;
offset: java_time_ZoneOffset;
zone: java_time_ZoneId;
long: number;
offset: java_time_ZoneOffset;
nano: number;
year: number;
monthValue: number;
dayOfMonth: number;
hour: number;
minute: number;
second: number;
dayOfWeek: java_time_DayOfWeek;
dayOfYear: number;
zone: java_time_ZoneId;
month: java_time_Month;
chronology: java_time_chrono_Chronology;
get(arg0: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
getLong(arg0: java_time_temporal_TemporalField): number;
format(arg0: java_time_format_DateTimeFormatter): string;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_ZonedDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneId): java_time_ZonedDateTime;
static of(arg0: java_time_LocalDateTime, arg1: java_time_ZoneId): java_time_ZonedDateTime;
static of(arg0: java_time_LocalDate, arg1: java_time_LocalTime, arg2: java_time_ZoneId): java_time_ZonedDateTime;
static now(arg0: java_time_Clock): java_time_ZonedDateTime;
static now(arg0: java_time_ZoneId): java_time_ZonedDateTime;
static now(): java_time_ZonedDateTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
getOffset(): java_time_ZoneOffset;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
static parse(arg0: java_lang_CharSequence): java_time_ZonedDateTime;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_ZonedDateTime;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static ofInstant(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset, arg2: java_time_ZoneId): java_time_ZonedDateTime;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_ZonedDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_ZonedDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoZonedDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_ZonedDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoZonedDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
getNano(): number;
getYear(): number;
getMonthValue(): number;
getDayOfMonth(): number;
getHour(): number;
getMinute(): number;
getSecond(): number;
getDayOfWeek(): java_time_DayOfWeek;
getDayOfYear(): number;
withDayOfYear(arg0: number): java_time_ZonedDateTime;
minusYears(arg0: number): java_time_ZonedDateTime;
plusMonths(arg0: number): java_time_ZonedDateTime;
plusWeeks(arg0: number): java_time_ZonedDateTime;
plusYears(arg0: number): java_time_ZonedDateTime;
getZone(): java_time_ZoneId;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoZonedDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_ZonedDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoZonedDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_ZonedDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
plusDays(arg0: number): java_time_ZonedDateTime;
plusHours(arg0: number): java_time_ZonedDateTime;
plusMinutes(arg0: number): java_time_ZonedDateTime;
plusSeconds(arg0: number): java_time_ZonedDateTime;
plusNanos(arg0: number): java_time_ZonedDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_ZonedDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoZonedDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_ZonedDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoZonedDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusDays(arg0: number): java_time_ZonedDateTime;
minusHours(arg0: number): java_time_ZonedDateTime;
minusMinutes(arg0: number): java_time_ZonedDateTime;
minusSeconds(arg0: number): java_time_ZonedDateTime;
minusNanos(arg0: number): java_time_ZonedDateTime;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_ZonedDateTime;
minusMonths(arg0: number): java_time_ZonedDateTime;
getMonth(): java_time_Month;
toLocalDate(): java_time_chrono_ChronoLocalDate;
toLocalDate(): java_time_LocalDate;
toLocalTime(): java_time_LocalTime;
withYear(arg0: number): java_time_ZonedDateTime;
withMonth(arg0: number): java_time_ZonedDateTime;
withDayOfMonth(arg0: number): java_time_ZonedDateTime;
withHour(arg0: number): java_time_ZonedDateTime;
withMinute(arg0: number): java_time_ZonedDateTime;
withSecond(arg0: number): java_time_ZonedDateTime;
withNano(arg0: number): java_time_ZonedDateTime;
minusWeeks(arg0: number): java_time_ZonedDateTime;
toLocalDateTime(): java_time_LocalDateTime;
toLocalDateTime(): java_time_chrono_ChronoLocalDateTime;
static ofLocal(arg0: java_time_LocalDateTime, arg1: java_time_ZoneId, arg2: java_time_ZoneOffset): java_time_ZonedDateTime;
static ofStrict(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset, arg2: java_time_ZoneId): java_time_ZonedDateTime;
withEarlierOffsetAtOverlap(): java_time_chrono_ChronoZonedDateTime;
withEarlierOffsetAtOverlap(): java_time_ZonedDateTime;
withLaterOffsetAtOverlap(): java_time_chrono_ChronoZonedDateTime;
withLaterOffsetAtOverlap(): java_time_ZonedDateTime;
withZoneSameLocal(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime;
withZoneSameLocal(arg0: java_time_ZoneId): java_time_ZonedDateTime;
withZoneSameInstant(arg0: java_time_ZoneId): java_time_ZonedDateTime;
withZoneSameInstant(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime;
withFixedOffsetZone(): java_time_ZonedDateTime;
toOffsetDateTime(): java_time_OffsetDateTime;
compareTo(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): number;
compareTo(arg0: java_lang_Object): number;
toEpochSecond(): number;
toInstant(): java_time_Instant;
isEqual(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
getChronology(): java_time_chrono_Chronology;
isAfter(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
isBefore(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, TemporalUnit as java_time_temporal_TemporalUnit, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAmount as java_time_temporal_TemporalAmount } from 'java.time.temporal';
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { ChronoZonedDateTime as java_time_chrono_ChronoZonedDateTime, Chronology as java_time_chrono_Chronology, ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime, ChronoLocalDate as java_time_chrono_ChronoLocalDate } from 'java.time.chrono';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { ZoneOffset as java_time_ZoneOffset, Instant as java_time_Instant, ZoneId as java_time_ZoneId, LocalTime as java_time_LocalTime } from 'java.time';
import { Comparator as java_util_Comparator } from 'java.util';

  export class ChronoZonedDateTime<D extends java_time_chrono_ChronoLocalDate> implements java_time_temporal_Temporal, java_lang_Comparable<java_time_chrono_ChronoZonedDateTime<java_lang_Object>> {
long: number;
offset: java_time_ZoneOffset;
chronology: java_time_chrono_Chronology;
zone: java_time_ZoneId;
get(arg0: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): number;
compareTo(arg0: java_lang_Object): number;
getLong(arg0: java_time_temporal_TemporalField): number;
format(arg0: java_time_format_DateTimeFormatter): string;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoZonedDateTime<java_lang_Object>;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
getOffset(): java_time_ZoneOffset;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
toEpochSecond(): number;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoZonedDateTime<D>;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoZonedDateTime<D>;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
toInstant(): java_time_Instant;
isEqual(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
getChronology(): java_time_chrono_Chronology;
getZone(): java_time_ZoneId;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoZonedDateTime<D>;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoZonedDateTime<D>;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoZonedDateTime<D>;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoZonedDateTime<D>;
isAfter(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
isBefore(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
toLocalDate(): D;
toLocalTime(): java_time_LocalTime;
toLocalDateTime(): java_time_chrono_ChronoLocalDateTime<D>;
static timeLineOrder(): java_util_Comparator<java_time_chrono_ChronoZonedDateTime<java_lang_Object>>;
withEarlierOffsetAtOverlap(): java_time_chrono_ChronoZonedDateTime<D>;
withLaterOffsetAtOverlap(): java_time_chrono_ChronoZonedDateTime<D>;
withZoneSameLocal(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<D>;
withZoneSameInstant(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<D>;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { ChronoField as java_time_temporal_ChronoField, ValueRange as java_time_temporal_ValueRange, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalField as java_time_temporal_TemporalField } from 'java.time.temporal';
import { LocalDate as java_time_LocalDate, ZoneOffset as java_time_ZoneOffset, LocalDateTime as java_time_LocalDateTime, ZonedDateTime as java_time_ZonedDateTime, Instant as java_time_Instant, ZoneId as java_time_ZoneId, Clock as java_time_Clock, Period as java_time_Period } from 'java.time';
import { ChronoLocalDate as java_time_chrono_ChronoLocalDate, Era as java_time_chrono_Era, ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime, ChronoZonedDateTime as java_time_chrono_ChronoZonedDateTime, IsoEra as java_time_chrono_IsoEra, ChronoPeriod as java_time_chrono_ChronoPeriod, IsoChronology as java_time_chrono_IsoChronology, AbstractChronology as java_time_chrono_AbstractChronology } from 'java.time.chrono';
import { List as java_util_List, Map as java_util_Map, Locale as java_util_Locale } from 'java.util';
import { ResolverStyle as java_time_format_ResolverStyle, TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { Long as java_lang_Long, Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Serializable as java_io_Serializable } from 'java.io';

  export class IsoChronology extends java_time_chrono_AbstractChronology implements java_io_Serializable {
static INSTANCE: java_time_chrono_IsoChronology;
static serialVersionUID: number;
static DAYS_0000_TO_1970: number;
id: string;
calendarType: string;
class: java_lang_Class<java_lang_Object>;
displayName: string;
getId(): string;
range(arg0: java_time_temporal_ChronoField): java_time_temporal_ValueRange;
date(arg0: java_time_temporal_TemporalAccessor): java_time_LocalDate;
date(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDate;
date(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number): java_time_chrono_ChronoLocalDate;
date(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number): java_time_LocalDate;
date(arg0: number, arg1: number, arg2: number): java_time_LocalDate;
date(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
isLeapYear(arg0: number): boolean;
dateEpochDay(arg0: number): java_time_chrono_ChronoLocalDate;
dateEpochDay(arg0: number): java_time_LocalDate;
prolepticYear(arg0: java_time_chrono_Era, arg1: number): number;
dateYearDay(arg0: number, arg1: number): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: number, arg1: number): java_time_LocalDate;
dateYearDay(arg0: java_time_chrono_Era, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: java_time_chrono_Era, arg1: number, arg2: number): java_time_LocalDate;
epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: java_time_ZoneOffset): number;
localDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_LocalDateTime;
localDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDateTime;
zonedDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_ZonedDateTime;
zonedDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoZonedDateTime;
zonedDateTime(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime;
zonedDateTime(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_ZonedDateTime;
dateNow(arg0: java_time_ZoneId): java_time_chrono_ChronoLocalDate;
dateNow(arg0: java_time_ZoneId): java_time_LocalDate;
dateNow(arg0: java_time_Clock): java_time_LocalDate;
dateNow(arg0: java_time_Clock): java_time_chrono_ChronoLocalDate;
dateNow(): java_time_LocalDate;
dateNow(): java_time_chrono_ChronoLocalDate;
eraOf(arg0: number): java_time_chrono_IsoEra;
eraOf(arg0: number): java_time_chrono_Era;
eras(): java_util_List<java_time_chrono_Era>;
resolveDate(arg0: java_util_Map, arg1: java_time_format_ResolverStyle): java_time_chrono_ChronoLocalDate;
resolveDate(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_format_ResolverStyle): java_time_LocalDate;
period(arg0: number, arg1: number, arg2: number): java_time_Period;
period(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoPeriod;
getCalendarType(): string;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
epochSecond(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneOffset): number;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { Chronology as java_time_chrono_Chronology, ChronoLocalDate as java_time_chrono_ChronoLocalDate, Era as java_time_chrono_Era, ChronoLocalDateTime as java_time_chrono_ChronoLocalDateTime, ChronoZonedDateTime as java_time_chrono_ChronoZonedDateTime, ChronoPeriod as java_time_chrono_ChronoPeriod } from 'java.time.chrono';
import { Map as java_util_Map, Locale as java_util_Locale, List as java_util_List } from 'java.util';
import { TemporalField as java_time_temporal_TemporalField, ChronoField as java_time_temporal_ChronoField, ValueRange as java_time_temporal_ValueRange, TemporalAccessor as java_time_temporal_TemporalAccessor } from 'java.time.temporal';
import { ResolverStyle as java_time_format_ResolverStyle, TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { ZoneOffset as java_time_ZoneOffset, Instant as java_time_Instant, ZoneId as java_time_ZoneId, Clock as java_time_Clock } from 'java.time';
import { ConcurrentHashMap as java_util_concurrent_ConcurrentHashMap } from 'java.util.concurrent';

  export class AbstractChronology extends java_lang_Object implements java_time_chrono_Chronology {
static CHRONOS_BY_ID: java_util_concurrent_ConcurrentHashMap<string, java_time_chrono_Chronology>;
static CHRONOS_BY_TYPE: java_util_concurrent_ConcurrentHashMap<string, java_time_chrono_Chronology>;
id: string;
displayName: string;
calendarType: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_Chronology): number;
resolveDate(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_format_ResolverStyle): java_time_chrono_ChronoLocalDate;
getId(): string;
range(arg0: java_time_temporal_ChronoField): java_time_temporal_ValueRange;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
date(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDate;
date(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number): java_time_chrono_ChronoLocalDate;
date(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
isLeapYear(arg0: number): boolean;
dateEpochDay(arg0: number): java_time_chrono_ChronoLocalDate;
prolepticYear(arg0: java_time_chrono_Era, arg1: number): number;
dateYearDay(arg0: number, arg1: number): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: java_time_chrono_Era, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
epochSecond(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneOffset): number;
epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: java_time_ZoneOffset): number;
localDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDateTime<java_time_chrono_ChronoLocalDate>;
zonedDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoZonedDateTime<java_time_chrono_ChronoLocalDate>;
zonedDateTime(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<java_time_chrono_ChronoLocalDate>;
dateNow(arg0: java_time_ZoneId): java_time_chrono_ChronoLocalDate;
dateNow(arg0: java_time_Clock): java_time_chrono_ChronoLocalDate;
dateNow(): java_time_chrono_ChronoLocalDate;
eraOf(arg0: number): java_time_chrono_Era;
eras(): java_util_List<java_time_chrono_Era>;
period(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoPeriod;
getCalendarType(): string;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { Object as java_lang_Object } from 'java.lang';
import { Locale as java_util_Locale, Set as java_util_Set } from 'java.util';
import { DecimalStyle as java_time_format_DecimalStyle } from 'java.time.format';
import { ConcurrentMap as java_util_concurrent_ConcurrentMap } from 'java.util.concurrent';

  export class DecimalStyle extends java_lang_Object {
static STANDARD: java_time_format_DecimalStyle;
static CACHE: java_util_concurrent_ConcurrentMap<java_util_Locale, java_time_format_DecimalStyle>;
zeroDigit: string;
positiveSign: string;
negativeSign: string;
decimalSeparator: string;
static availableLocales: java_util_Set<java_util_Locale>;
positiveSign: string;
negativeSign: string;
zeroDigit: string;
decimalSeparator: string;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static of(arg0: java_util_Locale): java_time_format_DecimalStyle;
static getAvailableLocales(): java_util_Set<java_util_Locale>;
getPositiveSign(): string;
getNegativeSign(): string;
getZeroDigit(): string;
static ofDefaultLocale(): java_time_format_DecimalStyle;
withZeroDigit(arg0: string): java_time_format_DecimalStyle;
withPositiveSign(arg0: string): java_time_format_DecimalStyle;
withNegativeSign(arg0: string): java_time_format_DecimalStyle;
getDecimalSeparator(): string;
withDecimalSeparator(arg0: string): java_time_format_DecimalStyle;

  }
}
//@ts-nocheck

declare module 'java.time.format.DateTimeFormatterBuilder' {
import { DateTimePrintContext as java_time_format_DateTimePrintContext, DateTimeParseContext as java_time_format_DateTimeParseContext } from 'java.time.format';
import { StringBuilder as java_lang_StringBuilder, CharSequence as java_lang_CharSequence, Object as java_lang_Object } from 'java.lang';
import { CompositePrinterParser as java_time_format_DateTimeFormatterBuilder_CompositePrinterParser, DateTimePrinterParser as java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser } from 'java.time.format.DateTimeFormatterBuilder';

  export class CompositePrinterParser extends java_lang_Object implements java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser {
printerParsers: java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser[];
optional: boolean;
toString(): string;
format(arg0: java_time_format_DateTimePrintContext, arg1: java_lang_StringBuilder): boolean;
parse(arg0: java_time_format_DateTimeParseContext, arg1: java_lang_CharSequence, arg2: number): number;
withOptional(arg0: boolean): java_time_format_DateTimeFormatterBuilder_CompositePrinterParser;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { TemporalAccessor as java_time_temporal_TemporalAccessor } from 'java.time.temporal';
import { DateTimeFormatter as java_time_format_DateTimeFormatter } from 'java.time.format';
import { Object as java_lang_Object } from 'java.lang';

  export class DateTimePrintContext extends java_lang_Object {
temporal: java_time_temporal_TemporalAccessor;
formatter: java_time_format_DateTimeFormatter;
optional: number;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { DateTimeFormatter as java_time_format_DateTimeFormatter, Parsed as java_time_format_Parsed } from 'java.time.format';
import { ArrayList as java_util_ArrayList } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';
import { Chronology as java_time_chrono_Chronology } from 'java.time.chrono';
import { Object as java_lang_Object } from 'java.lang';

  export class DateTimeParseContext extends java_lang_Object {
formatter: java_time_format_DateTimeFormatter;
caseSensitive: boolean;
strict: boolean;
parsed: java_util_ArrayList<java_time_format_Parsed>;
chronoListeners: java_util_ArrayList<java_util_function_Consumer<java_time_chrono_Chronology>>;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { TemporalField as java_time_temporal_TemporalField, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, TemporalAccessor as java_time_temporal_TemporalAccessor } from 'java.time.temporal';
import { Object as java_lang_Object, Long as java_lang_Long } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { ZoneId as java_time_ZoneId, LocalTime as java_time_LocalTime, Period as java_time_Period } from 'java.time';
import { Chronology as java_time_chrono_Chronology, ChronoLocalDate as java_time_chrono_ChronoLocalDate } from 'java.time.chrono';
import { ResolverStyle as java_time_format_ResolverStyle } from 'java.time.format';

  export class Parsed extends java_lang_Object implements java_time_temporal_TemporalAccessor {
fieldValues: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>;
zone: java_time_ZoneId;
chrono: java_time_chrono_Chronology;
leapSecond: boolean;
resolverStyle: java_time_format_ResolverStyle;
date: java_time_chrono_ChronoLocalDate;
time: java_time_LocalTime;
excessDays: java_time_Period;
long: number;
toString(): string;
getLong(arg0: java_time_temporal_TemporalField): number;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
get(arg0: java_time_temporal_TemporalField): number;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;

  }
}
//@ts-nocheck

declare module 'java.time.format.DateTimeFormatterBuilder' {
import { DateTimePrintContext as java_time_format_DateTimePrintContext, DateTimeParseContext as java_time_format_DateTimeParseContext } from 'java.time.format';
import { StringBuilder as java_lang_StringBuilder, CharSequence as java_lang_CharSequence } from 'java.lang';

  export class DateTimePrinterParser {

format(arg0: java_time_format_DateTimePrintContext, arg1: java_lang_StringBuilder): boolean;
parse(arg0: java_time_format_DateTimeParseContext, arg1: java_lang_CharSequence, arg2: number): number;

  }
}
//@ts-nocheck

declare module 'java.time.zone' {
import { Object as java_lang_Object } from 'java.lang';
import { Month as java_time_Month, DayOfWeek as java_time_DayOfWeek, LocalTime as java_time_LocalTime, ZoneOffset as java_time_ZoneOffset } from 'java.time';
import { TimeDefinition as java_time_zone_ZoneOffsetTransitionRule_TimeDefinition } from 'java.time.zone.ZoneOffsetTransitionRule';
import { ZoneOffsetTransitionRule as java_time_zone_ZoneOffsetTransitionRule, ZoneOffsetTransition as java_time_zone_ZoneOffsetTransition } from 'java.time.zone';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ZoneOffsetTransitionRule extends java_lang_Object implements java_io_Serializable {
static serialVersionUID: number;
month: java_time_Month;
dom: number;
dow: java_time_DayOfWeek;
time: java_time_LocalTime;
timeEndOfDay: boolean;
timeDefinition: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
standardOffset: java_time_ZoneOffset;
offsetBefore: java_time_ZoneOffset;
offsetAfter: java_time_ZoneOffset;
static $assertionsDisabled: boolean;
dayOfWeek: java_time_DayOfWeek;
standardOffset: java_time_ZoneOffset;
offsetAfter: java_time_ZoneOffset;
offsetBefore: java_time_ZoneOffset;
month: java_time_Month;
dayOfMonthIndicator: number;
localTime: java_time_LocalTime;
timeDefinition: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
equals(arg0: java_lang_Object): boolean;
toString(): string;
hashCode(): number;
static of(arg0: java_time_Month, arg1: number, arg2: java_time_DayOfWeek, arg3: java_time_LocalTime, arg4: boolean, arg5: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition, arg6: java_time_ZoneOffset, arg7: java_time_ZoneOffset, arg8: java_time_ZoneOffset): java_time_zone_ZoneOffsetTransitionRule;
getDayOfWeek(): java_time_DayOfWeek;
getStandardOffset(): java_time_ZoneOffset;
getOffsetAfter(): java_time_ZoneOffset;
getOffsetBefore(): java_time_ZoneOffset;
createTransition(arg0: number): java_time_zone_ZoneOffsetTransition;
getMonth(): java_time_Month;
getDayOfMonthIndicator(): number;
getLocalTime(): java_time_LocalTime;
isMidnightEndOfDay(): boolean;
getTimeDefinition(): java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;

  }
}
//@ts-nocheck

declare module 'java.time.zone.ZoneOffsetTransitionRule' {
import { TimeDefinition as java_time_zone_ZoneOffsetTransitionRule_TimeDefinition } from 'java.time.zone.ZoneOffsetTransitionRule';
import { LocalDateTime as java_time_LocalDateTime, ZoneOffset as java_time_ZoneOffset } from 'java.time';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TimeDefinition extends java_lang_Enum<java_time_zone_ZoneOffsetTransitionRule_TimeDefinition> {
static UTC: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
static WALL: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
static STANDARD: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
static $VALUES: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition[];
class: java_lang_Class<java_lang_Object>;
static values(): java_time_zone_ZoneOffsetTransitionRule_TimeDefinition[];
static valueOf(arg0: string): java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
createDateTime(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset, arg2: java_time_ZoneOffset): java_time_LocalDateTime;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
wait(): void;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;

  }
}