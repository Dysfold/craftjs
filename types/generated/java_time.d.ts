//@ts-nocheck

declare module 'java.time.temporal' {
import { ChronoUnit as java_time_temporal_ChronoUnit, Temporal as java_time_temporal_Temporal, TemporalUnit as java_time_temporal_TemporalUnit } from 'java.time.temporal';
import { Duration as java_time_Duration } from 'java.time';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ChronoUnit extends java_lang_Enum<java_time_temporal_ChronoUnit> implements java_time_temporal_TemporalUnit {
class: java_lang_Class<java_lang_Object>;
duration: java_time_Duration;
static CENTURIES: java_time_temporal_ChronoUnit;
static DAYS: java_time_temporal_ChronoUnit;
static DECADES: java_time_temporal_ChronoUnit;
static ERAS: java_time_temporal_ChronoUnit;
static FOREVER: java_time_temporal_ChronoUnit;
static HALF_DAYS: java_time_temporal_ChronoUnit;
static HOURS: java_time_temporal_ChronoUnit;
static MICROS: java_time_temporal_ChronoUnit;
static MILLENNIA: java_time_temporal_ChronoUnit;
static MILLIS: java_time_temporal_ChronoUnit;
static MINUTES: java_time_temporal_ChronoUnit;
static MONTHS: java_time_temporal_ChronoUnit;
static NANOS: java_time_temporal_ChronoUnit;
static SECONDS: java_time_temporal_ChronoUnit;
static WEEKS: java_time_temporal_ChronoUnit;
static YEARS: java_time_temporal_ChronoUnit;
addTo<R extends java_time_temporal_Temporal>(arg0: R, arg1: number): R;
between(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_Temporal): number;
getClass(): java_lang_Class<java_lang_Object>;
getDuration(): java_time_Duration;
isDateBased(): boolean;
isDurationEstimated(): boolean;
isSupportedBy(arg0: java_time_temporal_Temporal): boolean;
isTimeBased(): boolean;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_time_temporal_ChronoUnit;
static values(): JArray<java_time_temporal_ChronoUnit>;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalField as java_time_temporal_TemporalField, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster, TemporalAmount as java_time_temporal_TemporalAmount, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, TemporalAccessor as java_time_temporal_TemporalAccessor } from 'java.time.temporal';
import { Object as java_lang_Object } from 'java.lang';

  export class Temporal implements java_time_temporal_TemporalAccessor {
long: number;
get(arg0: java_time_temporal_TemporalField): number;
getLong(arg0: java_time_temporal_TemporalField): number;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { Duration as java_time_Duration } from 'java.time';

  export class TemporalUnit {
duration: java_time_Duration;
addTo<R extends java_time_temporal_Temporal>(arg0: R, arg1: number): R;
between(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_Temporal): number;
getDuration(): java_time_Duration;
isDateBased(): boolean;
isDurationEstimated(): boolean;
isSupportedBy(arg0: java_time_temporal_Temporal): boolean;
isTimeBased(): boolean;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalAmount as java_time_temporal_TemporalAmount, Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence, Comparable as java_lang_Comparable } from 'java.lang';
import { Duration as java_time_Duration } from 'java.time';
import { List as java_util_List } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Duration extends java_lang_Object implements java_time_temporal_TemporalAmount, java_lang_Comparable<java_time_Duration>, java_io_Serializable {
nano: number;
seconds: number;
static ZERO: java_time_Duration;
units: java_util_List<java_time_temporal_TemporalUnit>;
abs(): java_time_Duration;
addTo(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_Duration): number;
dividedBy(arg0: java_time_Duration): number;
dividedBy(arg0: number): java_time_Duration;
equals(arg0: java_lang_Object): boolean;
get(arg0: java_time_temporal_TemporalUnit): number;
getNano(): number;
getSeconds(): number;
getUnits(): java_util_List<java_time_temporal_TemporalUnit>;
hashCode(): number;
isNegative(): boolean;
isZero(): boolean;
minus(arg0: java_time_Duration): java_time_Duration;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Duration;
minusDays(arg0: number): java_time_Duration;
minusHours(arg0: number): java_time_Duration;
minusMillis(arg0: number): java_time_Duration;
minusMinutes(arg0: number): java_time_Duration;
minusNanos(arg0: number): java_time_Duration;
minusSeconds(arg0: number): java_time_Duration;
multipliedBy(arg0: number): java_time_Duration;
negated(): java_time_Duration;
plus(arg0: java_time_Duration): java_time_Duration;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Duration;
plusDays(arg0: number): java_time_Duration;
plusHours(arg0: number): java_time_Duration;
plusMillis(arg0: number): java_time_Duration;
plusMinutes(arg0: number): java_time_Duration;
plusNanos(arg0: number): java_time_Duration;
plusSeconds(arg0: number): java_time_Duration;
static between(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_Temporal): java_time_Duration;
static from(arg0: java_time_temporal_TemporalAmount): java_time_Duration;
static of(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Duration;
static ofDays(arg0: number): java_time_Duration;
static ofHours(arg0: number): java_time_Duration;
static ofMillis(arg0: number): java_time_Duration;
static ofMinutes(arg0: number): java_time_Duration;
static ofNanos(arg0: number): java_time_Duration;
static ofSeconds(arg0: number): java_time_Duration;
static ofSeconds(arg0: number, arg1: number): java_time_Duration;
static parse(arg0: java_lang_CharSequence): java_time_Duration;
subtractFrom(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
toDays(): number;
toDaysPart(): number;
toHours(): number;
toHoursPart(): number;
toMillis(): number;
toMillisPart(): number;
toMinutes(): number;
toMinutesPart(): number;
toNanos(): number;
toNanosPart(): number;
toSeconds(): number;
toSecondsPart(): number;
toString(): string;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_Duration;
withNanos(arg0: number): java_time_Duration;
withSeconds(arg0: number): java_time_Duration;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { TemporalUnit as java_time_temporal_TemporalUnit, Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { List as java_util_List } from 'java.util';

  export class TemporalAmount {
units: java_util_List<java_time_temporal_TemporalUnit>;
addTo(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
get(arg0: java_time_temporal_TemporalUnit): number;
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
baseUnit: java_time_temporal_TemporalUnit;
displayName: string;
from: number;
rangeUnit: java_time_temporal_TemporalUnit;
adjustInto<R extends java_time_temporal_Temporal>(arg0: R, arg1: number): R;
getBaseUnit(): java_time_temporal_TemporalUnit;
getDisplayName(arg0: java_util_Locale): string;
getFrom(arg0: java_time_temporal_TemporalAccessor): number;
getRangeUnit(): java_time_temporal_TemporalUnit;
isDateBased(): boolean;
isSupportedBy(arg0: java_time_temporal_TemporalAccessor): boolean;
isTimeBased(): boolean;
range(): java_time_temporal_ValueRange;
rangeRefinedBy(arg0: java_time_temporal_TemporalAccessor): java_time_temporal_ValueRange;
resolve(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_temporal_TemporalAccessor, arg2: java_time_format_ResolverStyle): java_time_temporal_TemporalAccessor;
toString(): string;

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
isSupported(arg0: java_time_temporal_TemporalField): boolean;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
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
largestMinimum: number;
maximum: number;
minimum: number;
smallestMaximum: number;
checkValidIntValue(arg0: number, arg1: java_time_temporal_TemporalField): number;
checkValidValue(arg0: number, arg1: java_time_temporal_TemporalField): number;
equals(arg0: java_lang_Object): boolean;
getLargestMinimum(): number;
getMaximum(): number;
getMinimum(): number;
getSmallestMaximum(): number;
hashCode(): number;
isFixed(): boolean;
isIntValue(): boolean;
isValidIntValue(arg0: number): boolean;
isValidValue(arg0: number): boolean;
static of(arg0: number, arg1: number): java_time_temporal_ValueRange;
static of(arg0: number, arg1: number, arg2: number): java_time_temporal_ValueRange;
static of(arg0: number, arg1: number, arg2: number, arg3: number): java_time_temporal_ValueRange;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { ResolverStyle as java_time_format_ResolverStyle } from 'java.time.format';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class ResolverStyle extends java_lang_Enum<java_time_format_ResolverStyle> {
class: java_lang_Class<java_lang_Object>;
static LENIENT: java_time_format_ResolverStyle;
static SMART: java_time_format_ResolverStyle;
static STRICT: java_time_format_ResolverStyle;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_time_format_ResolverStyle;
static values(): JArray<java_time_format_ResolverStyle>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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
epochSecond: number;
long: number;
nano: number;
static EPOCH: java_time_Instant;
static MAX: java_time_Instant;
static MIN: java_time_Instant;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
atOffset(arg0: java_time_ZoneOffset): java_time_OffsetDateTime;
atZone(arg0: java_time_ZoneId): java_time_ZonedDateTime;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_Instant): number;
equals(arg0: java_lang_Object): boolean;
get(arg0: java_time_temporal_TemporalField): number;
getEpochSecond(): number;
getLong(arg0: java_time_temporal_TemporalField): number;
getNano(): number;
hashCode(): number;
isAfter(arg0: java_time_Instant): boolean;
isBefore(arg0: java_time_Instant): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_Instant;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Instant;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusMillis(arg0: number): java_time_Instant;
minusNanos(arg0: number): java_time_Instant;
minusSeconds(arg0: number): java_time_Instant;
plus(arg0: java_time_temporal_TemporalAmount): java_time_Instant;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_Instant;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plusMillis(arg0: number): java_time_Instant;
plusNanos(arg0: number): java_time_Instant;
plusSeconds(arg0: number): java_time_Instant;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_Instant;
static now(): java_time_Instant;
static now(arg0: java_time_Clock): java_time_Instant;
static ofEpochMilli(arg0: number): java_time_Instant;
static ofEpochSecond(arg0: number): java_time_Instant;
static ofEpochSecond(arg0: number, arg1: number): java_time_Instant;
static parse(arg0: java_lang_CharSequence): java_time_Instant;
toEpochMilli(): number;
toString(): string;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_Instant;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_Instant;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_Instant;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { Object as java_lang_Object } from 'java.lang';
import { Clock as java_time_Clock, Duration as java_time_Duration, ZoneId as java_time_ZoneId, Instant as java_time_Instant } from 'java.time';

  export class Clock extends java_lang_Object {
zone: java_time_ZoneId;
equals(arg0: java_lang_Object): boolean;
getZone(): java_time_ZoneId;
hashCode(): number;
instant(): java_time_Instant;
millis(): number;
static fixed(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_Clock;
static offset(arg0: java_time_Clock, arg1: java_time_Duration): java_time_Clock;
static system(arg0: java_time_ZoneId): java_time_Clock;
static systemDefaultZone(): java_time_Clock;
static systemUTC(): java_time_Clock;
static tick(arg0: java_time_Clock, arg1: java_time_Duration): java_time_Clock;
static tickMillis(arg0: java_time_ZoneId): java_time_Clock;
static tickMinutes(arg0: java_time_ZoneId): java_time_Clock;
static tickSeconds(arg0: java_time_ZoneId): java_time_Clock;
withZone(arg0: java_time_ZoneId): java_time_Clock;

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
displayName: string;
id: string;
rules: java_time_zone_ZoneRules;
static SHORT_IDS: java_util_Map<string, string>;
static availableZoneIds: java_util_Set<string>;
equals(arg0: java_lang_Object): boolean;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
getId(): string;
getRules(): java_time_zone_ZoneRules;
hashCode(): number;
normalized(): java_time_ZoneId;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_ZoneId;
static getAvailableZoneIds(): java_util_Set<string>;
static of(arg0: string): java_time_ZoneId;
static of(arg0: string, arg1: java_util_Map<string, string>): java_time_ZoneId;
static ofOffset(arg0: string, arg1: java_time_ZoneOffset): java_time_ZoneId;
static systemDefault(): java_time_ZoneId;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.time.zone' {
import { Object as java_lang_Object } from 'java.lang';
import { ZoneOffset as java_time_ZoneOffset, Instant as java_time_Instant, LocalDateTime as java_time_LocalDateTime, Duration as java_time_Duration } from 'java.time';
import { List as java_util_List } from 'java.util';
import { ZoneOffsetTransition as java_time_zone_ZoneOffsetTransition, ZoneOffsetTransitionRule as java_time_zone_ZoneOffsetTransitionRule, ZoneRules as java_time_zone_ZoneRules } from 'java.time.zone';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ZoneRules extends java_lang_Object implements java_io_Serializable {
daylightSavings: java_time_Duration;
offset: java_time_ZoneOffset;
offset: java_time_ZoneOffset;
standardOffset: java_time_ZoneOffset;
transition: java_time_zone_ZoneOffsetTransition;
transitionRules: java_util_List<java_time_zone_ZoneOffsetTransitionRule>;
transitions: java_util_List<java_time_zone_ZoneOffsetTransition>;
validOffsets: java_util_List<java_time_ZoneOffset>;
equals(arg0: java_lang_Object): boolean;
getDaylightSavings(arg0: java_time_Instant): java_time_Duration;
getOffset(arg0: java_time_Instant): java_time_ZoneOffset;
getOffset(arg0: java_time_LocalDateTime): java_time_ZoneOffset;
getStandardOffset(arg0: java_time_Instant): java_time_ZoneOffset;
getTransition(arg0: java_time_LocalDateTime): java_time_zone_ZoneOffsetTransition;
getTransitionRules(): java_util_List<java_time_zone_ZoneOffsetTransitionRule>;
getTransitions(): java_util_List<java_time_zone_ZoneOffsetTransition>;
getValidOffsets(arg0: java_time_LocalDateTime): java_util_List<java_time_ZoneOffset>;
hashCode(): number;
isDaylightSavings(arg0: java_time_Instant): boolean;
isFixedOffset(): boolean;
isValidOffset(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset): boolean;
nextTransition(arg0: java_time_Instant): java_time_zone_ZoneOffsetTransition;
previousTransition(arg0: java_time_Instant): java_time_zone_ZoneOffsetTransition;
static of(arg0: java_time_ZoneOffset): java_time_zone_ZoneRules;
static of(arg0: java_time_ZoneOffset, arg1: java_time_ZoneOffset, arg2: java_util_List<java_time_zone_ZoneOffsetTransition>, arg3: java_util_List<java_time_zone_ZoneOffsetTransition>, arg4: java_util_List<java_time_zone_ZoneOffsetTransitionRule>): java_time_zone_ZoneRules;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalField as java_time_temporal_TemporalField, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAdjuster as java_time_temporal_TemporalAdjuster } from 'java.time.temporal';
import { Object as java_lang_Object, Class as java_lang_Class, Comparable as java_lang_Comparable } from 'java.lang';
import { ZoneOffset as java_time_ZoneOffset, ZoneId as java_time_ZoneId } from 'java.time';
import { ZoneRules as java_time_zone_ZoneRules } from 'java.time.zone';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ZoneOffset extends java_time_ZoneId implements java_time_temporal_TemporalAccessor, java_time_temporal_TemporalAdjuster, java_lang_Comparable<java_time_ZoneOffset>, java_io_Serializable {
class: java_lang_Class<java_lang_Object>;
id: string;
long: number;
rules: java_time_zone_ZoneRules;
static MAX: java_time_ZoneOffset;
static MIN: java_time_ZoneOffset;
static UTC: java_time_ZoneOffset;
totalSeconds: number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_ZoneOffset): number;
equals(arg0: java_lang_Object): boolean;
get(arg0: java_time_temporal_TemporalField): number;
getClass(): java_lang_Class<java_lang_Object>;
getId(): string;
getLong(arg0: java_time_temporal_TemporalField): number;
getRules(): java_time_zone_ZoneRules;
getTotalSeconds(): number;
hashCode(): number;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
notify(): void;
notifyAll(): void;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_ZoneOffset;
static of(arg0: string): java_time_ZoneOffset;
static ofHours(arg0: number): java_time_ZoneOffset;
static ofHoursMinutes(arg0: number, arg1: number): java_time_ZoneOffset;
static ofHoursMinutesSeconds(arg0: number, arg1: number, arg2: number): java_time_ZoneOffset;
static ofTotalSeconds(arg0: number): java_time_ZoneOffset;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.time.zone' {
import { Object as java_lang_Object, Comparable as java_lang_Comparable } from 'java.lang';
import { ZoneOffsetTransition as java_time_zone_ZoneOffsetTransition } from 'java.time.zone';
import { LocalDateTime as java_time_LocalDateTime, ZoneOffset as java_time_ZoneOffset, Duration as java_time_Duration, Instant as java_time_Instant } from 'java.time';
import { Serializable as java_io_Serializable } from 'java.io';

  export class ZoneOffsetTransition extends java_lang_Object implements java_lang_Comparable<java_time_zone_ZoneOffsetTransition>, java_io_Serializable {
dateTimeAfter: java_time_LocalDateTime;
dateTimeBefore: java_time_LocalDateTime;
duration: java_time_Duration;
instant: java_time_Instant;
offsetAfter: java_time_ZoneOffset;
offsetBefore: java_time_ZoneOffset;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_zone_ZoneOffsetTransition): number;
equals(arg0: java_lang_Object): boolean;
getDateTimeAfter(): java_time_LocalDateTime;
getDateTimeBefore(): java_time_LocalDateTime;
getDuration(): java_time_Duration;
getInstant(): java_time_Instant;
getOffsetAfter(): java_time_ZoneOffset;
getOffsetBefore(): java_time_ZoneOffset;
hashCode(): number;
isGap(): boolean;
isOverlap(): boolean;
isValidOffset(arg0: java_time_ZoneOffset): boolean;
static of(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset, arg2: java_time_ZoneOffset): java_time_zone_ZoneOffsetTransition;
toEpochSecond(): number;
toString(): string;

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
chronology: java_time_chrono_Chronology;
dayOfMonth: number;
dayOfWeek: java_time_DayOfWeek;
dayOfYear: number;
hour: number;
long: number;
minute: number;
month: java_time_Month;
monthValue: number;
nano: number;
second: number;
static MAX: java_time_LocalDateTime;
static MIN: java_time_LocalDateTime;
year: number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
atOffset(arg0: java_time_ZoneOffset): java_time_OffsetDateTime;
atZone(arg0: java_time_ZoneId): java_time_ZonedDateTime;
atZone(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): number;
equals(arg0: java_lang_Object): boolean;
format(arg0: java_time_format_DateTimeFormatter): string;
get(arg0: java_time_temporal_TemporalField): number;
getChronology(): java_time_chrono_Chronology;
getDayOfMonth(): number;
getDayOfWeek(): java_time_DayOfWeek;
getDayOfYear(): number;
getHour(): number;
getLong(arg0: java_time_temporal_TemporalField): number;
getMinute(): number;
getMonth(): java_time_Month;
getMonthValue(): number;
getNano(): number;
getSecond(): number;
getYear(): number;
hashCode(): number;
isAfter(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
isBefore(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
isEqual(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_LocalDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusDays(arg0: number): java_time_LocalDateTime;
minusHours(arg0: number): java_time_LocalDateTime;
minusMinutes(arg0: number): java_time_LocalDateTime;
minusMonths(arg0: number): java_time_LocalDateTime;
minusNanos(arg0: number): java_time_LocalDateTime;
minusSeconds(arg0: number): java_time_LocalDateTime;
minusWeeks(arg0: number): java_time_LocalDateTime;
minusYears(arg0: number): java_time_LocalDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_LocalDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plusDays(arg0: number): java_time_LocalDateTime;
plusHours(arg0: number): java_time_LocalDateTime;
plusMinutes(arg0: number): java_time_LocalDateTime;
plusMonths(arg0: number): java_time_LocalDateTime;
plusNanos(arg0: number): java_time_LocalDateTime;
plusSeconds(arg0: number): java_time_LocalDateTime;
plusWeeks(arg0: number): java_time_LocalDateTime;
plusYears(arg0: number): java_time_LocalDateTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_LocalDateTime;
static now(): java_time_LocalDateTime;
static now(arg0: java_time_Clock): java_time_LocalDateTime;
static now(arg0: java_time_ZoneId): java_time_LocalDateTime;
static of(arg0: java_time_LocalDate, arg1: java_time_LocalTime): java_time_LocalDateTime;
static of(arg0: number, arg1: java_time_Month, arg2: number, arg3: number, arg4: number): java_time_LocalDateTime;
static of(arg0: number, arg1: java_time_Month, arg2: number, arg3: number, arg4: number, arg5: number): java_time_LocalDateTime;
static of(arg0: number, arg1: java_time_Month, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): java_time_LocalDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): java_time_LocalDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): java_time_LocalDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): java_time_LocalDateTime;
static ofEpochSecond(arg0: number, arg1: number, arg2: java_time_ZoneOffset): java_time_LocalDateTime;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_LocalDateTime;
static parse(arg0: java_lang_CharSequence): java_time_LocalDateTime;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_LocalDateTime;
toEpochSecond(arg0: java_time_ZoneOffset): number;
toInstant(arg0: java_time_ZoneOffset): java_time_Instant;
toLocalDate(): java_time_LocalDate;
toLocalDate(): java_time_chrono_ChronoLocalDate;
toLocalTime(): java_time_LocalTime;
toString(): string;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_LocalDateTime;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_LocalDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoLocalDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_LocalDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoLocalDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
withDayOfMonth(arg0: number): java_time_LocalDateTime;
withDayOfYear(arg0: number): java_time_LocalDateTime;
withHour(arg0: number): java_time_LocalDateTime;
withMinute(arg0: number): java_time_LocalDateTime;
withMonth(arg0: number): java_time_LocalDateTime;
withNano(arg0: number): java_time_LocalDateTime;
withSecond(arg0: number): java_time_LocalDateTime;
withYear(arg0: number): java_time_LocalDateTime;

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
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
atZone(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<D>;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): number;
equals(arg0: java_lang_Object): boolean;
format(arg0: java_time_format_DateTimeFormatter): string;
get(arg0: java_time_temporal_TemporalField): number;
getChronology(): java_time_chrono_Chronology;
getLong(arg0: java_time_temporal_TemporalField): number;
hashCode(): number;
isAfter(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
isBefore(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
isEqual(arg0: java_time_chrono_ChronoLocalDateTime<java_lang_Object>): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDateTime<D>;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDateTime<D>;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDateTime<D>;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDateTime<D>;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDateTime<java_lang_Object>;
static timeLineOrder(): java_util_Comparator<java_time_chrono_ChronoLocalDateTime<java_lang_Object>>;
toEpochSecond(arg0: java_time_ZoneOffset): number;
toInstant(arg0: java_time_ZoneOffset): java_time_Instant;
toLocalDate(): D;
toLocalTime(): java_time_LocalTime;
toString(): string;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoLocalDateTime<D>;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoLocalDateTime<D>;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;

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

  export class DateTimeFormatter extends java_lang_Object {
chronology: java_time_chrono_Chronology;
decimalStyle: java_time_format_DecimalStyle;
locale: java_util_Locale;
resolverFields: java_util_Set<java_time_temporal_TemporalField>;
resolverStyle: java_time_format_ResolverStyle;
static BASIC_ISO_DATE: java_time_format_DateTimeFormatter;
static ISO_DATE: java_time_format_DateTimeFormatter;
static ISO_DATE_TIME: java_time_format_DateTimeFormatter;
static ISO_INSTANT: java_time_format_DateTimeFormatter;
static ISO_LOCAL_DATE: java_time_format_DateTimeFormatter;
static ISO_LOCAL_DATE_TIME: java_time_format_DateTimeFormatter;
static ISO_LOCAL_TIME: java_time_format_DateTimeFormatter;
static ISO_OFFSET_DATE: java_time_format_DateTimeFormatter;
static ISO_OFFSET_DATE_TIME: java_time_format_DateTimeFormatter;
static ISO_OFFSET_TIME: java_time_format_DateTimeFormatter;
static ISO_ORDINAL_DATE: java_time_format_DateTimeFormatter;
static ISO_TIME: java_time_format_DateTimeFormatter;
static ISO_WEEK_DATE: java_time_format_DateTimeFormatter;
static ISO_ZONED_DATE_TIME: java_time_format_DateTimeFormatter;
static RFC_1123_DATE_TIME: java_time_format_DateTimeFormatter;
zone: java_time_ZoneId;
format(arg0: java_time_temporal_TemporalAccessor): string;
formatTo(arg0: java_time_temporal_TemporalAccessor, arg1: java_lang_Appendable): void;
getChronology(): java_time_chrono_Chronology;
getDecimalStyle(): java_time_format_DecimalStyle;
getLocale(): java_util_Locale;
getResolverFields(): java_util_Set<java_time_temporal_TemporalField>;
getResolverStyle(): java_time_format_ResolverStyle;
getZone(): java_time_ZoneId;
localizedBy(arg0: java_util_Locale): java_time_format_DateTimeFormatter;
parse(arg0: java_lang_CharSequence): java_time_temporal_TemporalAccessor;
parse(arg0: java_lang_CharSequence, arg1: java_text_ParsePosition): java_time_temporal_TemporalAccessor;
parse<T extends java_lang_Object>(arg0: java_lang_CharSequence, arg1: java_time_temporal_TemporalQuery<T>): T;
parseBest(arg0: java_lang_CharSequence, ...arg1: JArray<java_time_temporal_TemporalQuery<java_lang_Object>>): java_time_temporal_TemporalAccessor;
parseUnresolved(arg0: java_lang_CharSequence, arg1: java_text_ParsePosition): java_time_temporal_TemporalAccessor;
static ofLocalizedDate(arg0: java_time_format_FormatStyle): java_time_format_DateTimeFormatter;
static ofLocalizedDateTime(arg0: java_time_format_FormatStyle): java_time_format_DateTimeFormatter;
static ofLocalizedDateTime(arg0: java_time_format_FormatStyle, arg1: java_time_format_FormatStyle): java_time_format_DateTimeFormatter;
static ofLocalizedTime(arg0: java_time_format_FormatStyle): java_time_format_DateTimeFormatter;
static ofPattern(arg0: string): java_time_format_DateTimeFormatter;
static ofPattern(arg0: string, arg1: java_util_Locale): java_time_format_DateTimeFormatter;
static parsedExcessDays(): java_time_temporal_TemporalQuery<java_time_Period>;
static parsedLeapSecond(): java_time_temporal_TemporalQuery<java_lang_Boolean>;
toFormat(): java_text_Format;
toFormat(arg0: java_time_temporal_TemporalQuery<java_lang_Object>): java_text_Format;
toString(): string;
withChronology(arg0: java_time_chrono_Chronology): java_time_format_DateTimeFormatter;
withDecimalStyle(arg0: java_time_format_DecimalStyle): java_time_format_DateTimeFormatter;
withLocale(arg0: java_util_Locale): java_time_format_DateTimeFormatter;
withResolverFields(...arg0: JArray<java_time_temporal_TemporalField>): java_time_format_DateTimeFormatter;
withResolverFields(arg0: java_util_Set<java_time_temporal_TemporalField>): java_time_format_DateTimeFormatter;
withResolverStyle(arg0: java_time_format_ResolverStyle): java_time_format_DateTimeFormatter;
withZone(arg0: java_time_ZoneId): java_time_format_DateTimeFormatter;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { FormatStyle as java_time_format_FormatStyle } from 'java.time.format';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class FormatStyle extends java_lang_Enum<java_time_format_FormatStyle> {
class: java_lang_Class<java_lang_Object>;
static FULL: java_time_format_FormatStyle;
static LONG: java_time_format_FormatStyle;
static MEDIUM: java_time_format_FormatStyle;
static SHORT: java_time_format_FormatStyle;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_time_format_FormatStyle;
static values(): JArray<java_time_format_FormatStyle>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.time' {
import { TemporalUnit as java_time_temporal_TemporalUnit, TemporalAmount as java_time_temporal_TemporalAmount, Temporal as java_time_temporal_Temporal } from 'java.time.temporal';
import { Object as java_lang_Object, CharSequence as java_lang_CharSequence } from 'java.lang';
import { Period as java_time_Period, LocalDate as java_time_LocalDate } from 'java.time';
import { ChronoPeriod as java_time_chrono_ChronoPeriod, Chronology as java_time_chrono_Chronology, IsoChronology as java_time_chrono_IsoChronology } from 'java.time.chrono';
import { List as java_util_List } from 'java.util';
import { Serializable as java_io_Serializable } from 'java.io';

  export class Period extends java_lang_Object implements java_time_chrono_ChronoPeriod, java_io_Serializable {
chronology: java_time_chrono_Chronology;
chronology: java_time_chrono_IsoChronology;
days: number;
months: number;
static ZERO: java_time_Period;
units: java_util_List<java_time_temporal_TemporalUnit>;
years: number;
addTo(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
equals(arg0: java_lang_Object): boolean;
get(arg0: java_time_temporal_TemporalUnit): number;
getChronology(): java_time_chrono_Chronology;
getChronology(): java_time_chrono_IsoChronology;
getDays(): number;
getMonths(): number;
getUnits(): java_util_List<java_time_temporal_TemporalUnit>;
getYears(): number;
hashCode(): number;
isNegative(): boolean;
isZero(): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_Period;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoPeriod;
minusDays(arg0: number): java_time_Period;
minusMonths(arg0: number): java_time_Period;
minusYears(arg0: number): java_time_Period;
multipliedBy(arg0: number): java_time_Period;
multipliedBy(arg0: number): java_time_chrono_ChronoPeriod;
negated(): java_time_Period;
negated(): java_time_chrono_ChronoPeriod;
normalized(): java_time_Period;
normalized(): java_time_chrono_ChronoPeriod;
plus(arg0: java_time_temporal_TemporalAmount): java_time_Period;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoPeriod;
plusDays(arg0: number): java_time_Period;
plusMonths(arg0: number): java_time_Period;
plusYears(arg0: number): java_time_Period;
static between(arg0: java_time_LocalDate, arg1: java_time_LocalDate): java_time_Period;
static from(arg0: java_time_temporal_TemporalAmount): java_time_Period;
static of(arg0: number, arg1: number, arg2: number): java_time_Period;
static ofDays(arg0: number): java_time_Period;
static ofMonths(arg0: number): java_time_Period;
static ofWeeks(arg0: number): java_time_Period;
static ofYears(arg0: number): java_time_Period;
static parse(arg0: java_lang_CharSequence): java_time_Period;
subtractFrom(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
toString(): string;
toTotalMonths(): number;
withDays(arg0: number): java_time_Period;
withMonths(arg0: number): java_time_Period;
withYears(arg0: number): java_time_Period;

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
addTo(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
equals(arg0: java_lang_Object): boolean;
get(arg0: java_time_temporal_TemporalUnit): number;
getChronology(): java_time_chrono_Chronology;
getUnits(): java_util_List<java_time_temporal_TemporalUnit>;
hashCode(): number;
isNegative(): boolean;
isZero(): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoPeriod;
multipliedBy(arg0: number): java_time_chrono_ChronoPeriod;
negated(): java_time_chrono_ChronoPeriod;
normalized(): java_time_chrono_ChronoPeriod;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoPeriod;
static between(arg0: java_time_chrono_ChronoLocalDate, arg1: java_time_chrono_ChronoLocalDate): java_time_chrono_ChronoPeriod;
subtractFrom(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
toString(): string;

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
calendarType: string;
displayName: string;
id: string;
static availableChronologies: java_util_Set<java_time_chrono_Chronology>;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_Chronology): number;
date(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number): java_time_chrono_ChronoLocalDate;
date(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDate;
date(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
dateEpochDay(arg0: number): java_time_chrono_ChronoLocalDate;
dateNow(): java_time_chrono_ChronoLocalDate;
dateNow(arg0: java_time_Clock): java_time_chrono_ChronoLocalDate;
dateNow(arg0: java_time_ZoneId): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: java_time_chrono_Era, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: number, arg1: number): java_time_chrono_ChronoLocalDate;
epochSecond(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneOffset): number;
epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: java_time_ZoneOffset): number;
equals(arg0: java_lang_Object): boolean;
eraOf(arg0: number): java_time_chrono_Era;
eras(): java_util_List<java_time_chrono_Era>;
getCalendarType(): string;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
getId(): string;
hashCode(): number;
isLeapYear(arg0: number): boolean;
localDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDateTime<java_time_chrono_ChronoLocalDate>;
period(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoPeriod;
prolepticYear(arg0: java_time_chrono_Era, arg1: number): number;
range(arg0: java_time_temporal_ChronoField): java_time_temporal_ValueRange;
resolveDate(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_format_ResolverStyle): java_time_chrono_ChronoLocalDate;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_Chronology;
static getAvailableChronologies(): java_util_Set<java_time_chrono_Chronology>;
static of(arg0: string): java_time_chrono_Chronology;
static ofLocale(arg0: java_util_Locale): java_time_chrono_Chronology;
toString(): string;
zonedDateTime(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<java_time_chrono_ChronoLocalDate>;
zonedDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoZonedDateTime<java_time_chrono_ChronoLocalDate>;

  }
}
//@ts-nocheck

declare module 'java.time.temporal' {
import { ChronoField as java_time_temporal_ChronoField, ValueRange as java_time_temporal_ValueRange, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalUnit as java_time_temporal_TemporalUnit, Temporal as java_time_temporal_Temporal, TemporalField as java_time_temporal_TemporalField } from 'java.time.temporal';
import { Locale as java_util_Locale, Map as java_util_Map } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object, Long as java_lang_Long, Enum as java_lang_Enum } from 'java.lang';
import { ResolverStyle as java_time_format_ResolverStyle } from 'java.time.format';

  export class ChronoField extends java_lang_Enum<java_time_temporal_ChronoField> implements java_time_temporal_TemporalField {
baseUnit: java_time_temporal_TemporalUnit;
class: java_lang_Class<java_lang_Object>;
displayName: string;
from: number;
rangeUnit: java_time_temporal_TemporalUnit;
static ALIGNED_DAY_OF_WEEK_IN_MONTH: java_time_temporal_ChronoField;
static ALIGNED_DAY_OF_WEEK_IN_YEAR: java_time_temporal_ChronoField;
static ALIGNED_WEEK_OF_MONTH: java_time_temporal_ChronoField;
static ALIGNED_WEEK_OF_YEAR: java_time_temporal_ChronoField;
static AMPM_OF_DAY: java_time_temporal_ChronoField;
static CLOCK_HOUR_OF_AMPM: java_time_temporal_ChronoField;
static CLOCK_HOUR_OF_DAY: java_time_temporal_ChronoField;
static DAY_OF_MONTH: java_time_temporal_ChronoField;
static DAY_OF_WEEK: java_time_temporal_ChronoField;
static DAY_OF_YEAR: java_time_temporal_ChronoField;
static EPOCH_DAY: java_time_temporal_ChronoField;
static ERA: java_time_temporal_ChronoField;
static HOUR_OF_AMPM: java_time_temporal_ChronoField;
static HOUR_OF_DAY: java_time_temporal_ChronoField;
static INSTANT_SECONDS: java_time_temporal_ChronoField;
static MICRO_OF_DAY: java_time_temporal_ChronoField;
static MICRO_OF_SECOND: java_time_temporal_ChronoField;
static MILLI_OF_DAY: java_time_temporal_ChronoField;
static MILLI_OF_SECOND: java_time_temporal_ChronoField;
static MINUTE_OF_DAY: java_time_temporal_ChronoField;
static MINUTE_OF_HOUR: java_time_temporal_ChronoField;
static MONTH_OF_YEAR: java_time_temporal_ChronoField;
static NANO_OF_DAY: java_time_temporal_ChronoField;
static NANO_OF_SECOND: java_time_temporal_ChronoField;
static OFFSET_SECONDS: java_time_temporal_ChronoField;
static PROLEPTIC_MONTH: java_time_temporal_ChronoField;
static SECOND_OF_DAY: java_time_temporal_ChronoField;
static SECOND_OF_MINUTE: java_time_temporal_ChronoField;
static YEAR: java_time_temporal_ChronoField;
static YEAR_OF_ERA: java_time_temporal_ChronoField;
adjustInto<R extends java_time_temporal_Temporal>(arg0: R, arg1: number): R;
checkValidIntValue(arg0: number): number;
checkValidValue(arg0: number): number;
getBaseUnit(): java_time_temporal_TemporalUnit;
getClass(): java_lang_Class<java_lang_Object>;
getDisplayName(arg0: java_util_Locale): string;
getFrom(arg0: java_time_temporal_TemporalAccessor): number;
getRangeUnit(): java_time_temporal_TemporalUnit;
isDateBased(): boolean;
isSupportedBy(arg0: java_time_temporal_TemporalAccessor): boolean;
isTimeBased(): boolean;
notify(): void;
notifyAll(): void;
range(): java_time_temporal_ValueRange;
rangeRefinedBy(arg0: java_time_temporal_TemporalAccessor): java_time_temporal_ValueRange;
resolve(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_temporal_TemporalAccessor, arg2: java_time_format_ResolverStyle): java_time_temporal_TemporalAccessor;
static valueOf(arg0: string): java_time_temporal_ChronoField;
static values(): JArray<java_time_temporal_ChronoField>;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TextStyle extends java_lang_Enum<java_time_format_TextStyle> {
class: java_lang_Class<java_lang_Object>;
static FULL: java_time_format_TextStyle;
static FULL_STANDALONE: java_time_format_TextStyle;
static NARROW: java_time_format_TextStyle;
static NARROW_STANDALONE: java_time_format_TextStyle;
static SHORT: java_time_format_TextStyle;
static SHORT_STANDALONE: java_time_format_TextStyle;
asNormal(): java_time_format_TextStyle;
asStandalone(): java_time_format_TextStyle;
getClass(): java_lang_Class<java_lang_Object>;
isStandalone(): boolean;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_time_format_TextStyle;
static values(): JArray<java_time_format_TextStyle>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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
chronology: java_time_chrono_Chronology;
era: java_time_chrono_Era;
long: number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
atTime(arg0: java_time_LocalTime): java_time_chrono_ChronoLocalDateTime<java_lang_Object>;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_ChronoLocalDate): number;
equals(arg0: java_lang_Object): boolean;
format(arg0: java_time_format_DateTimeFormatter): string;
get(arg0: java_time_temporal_TemporalField): number;
getChronology(): java_time_chrono_Chronology;
getEra(): java_time_chrono_Era;
getLong(arg0: java_time_temporal_TemporalField): number;
hashCode(): number;
isAfter(arg0: java_time_chrono_ChronoLocalDate): boolean;
isBefore(arg0: java_time_chrono_ChronoLocalDate): boolean;
isEqual(arg0: java_time_chrono_ChronoLocalDate): boolean;
isLeapYear(): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
lengthOfMonth(): number;
lengthOfYear(): number;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDate;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDate;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDate;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDate;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDate;
static timeLineOrder(): java_util_Comparator<java_time_chrono_ChronoLocalDate>;
toEpochDay(): number;
toString(): string;
until(arg0: java_time_chrono_ChronoLocalDate): java_time_chrono_ChronoPeriod;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoLocalDate;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoLocalDate;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;

  }
}
//@ts-nocheck

declare module 'java.time.chrono' {
import { TemporalField as java_time_temporal_TemporalField, TemporalQuery as java_time_temporal_TemporalQuery, ValueRange as java_time_temporal_ValueRange, Temporal as java_time_temporal_Temporal, TemporalAccessor as java_time_temporal_TemporalAccessor, TemporalAdjuster as java_time_temporal_TemporalAdjuster } from 'java.time.temporal';
import { Object as java_lang_Object } from 'java.lang';
import { TextStyle as java_time_format_TextStyle } from 'java.time.format';
import { Locale as java_util_Locale } from 'java.util';

  export class Era implements java_time_temporal_TemporalAccessor, java_time_temporal_TemporalAdjuster {
displayName: string;
long: number;
value: number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
get(arg0: java_time_temporal_TemporalField): number;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
getLong(arg0: java_time_temporal_TemporalField): number;
getValue(): number;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;

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
hour: number;
long: number;
minute: number;
nano: number;
second: number;
static MAX: java_time_LocalTime;
static MIDNIGHT: java_time_LocalTime;
static MIN: java_time_LocalTime;
static NOON: java_time_LocalTime;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
atDate(arg0: java_time_LocalDate): java_time_LocalDateTime;
atOffset(arg0: java_time_ZoneOffset): java_time_OffsetTime;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_LocalTime): number;
equals(arg0: java_lang_Object): boolean;
format(arg0: java_time_format_DateTimeFormatter): string;
get(arg0: java_time_temporal_TemporalField): number;
getHour(): number;
getLong(arg0: java_time_temporal_TemporalField): number;
getMinute(): number;
getNano(): number;
getSecond(): number;
hashCode(): number;
isAfter(arg0: java_time_LocalTime): boolean;
isBefore(arg0: java_time_LocalTime): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_LocalTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusHours(arg0: number): java_time_LocalTime;
minusMinutes(arg0: number): java_time_LocalTime;
minusNanos(arg0: number): java_time_LocalTime;
minusSeconds(arg0: number): java_time_LocalTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_LocalTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plusHours(arg0: number): java_time_LocalTime;
plusMinutes(arg0: number): java_time_LocalTime;
plusNanos(arg0: number): java_time_LocalTime;
plusSeconds(arg0: number): java_time_LocalTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_LocalTime;
static now(): java_time_LocalTime;
static now(arg0: java_time_Clock): java_time_LocalTime;
static now(arg0: java_time_ZoneId): java_time_LocalTime;
static of(arg0: number, arg1: number): java_time_LocalTime;
static of(arg0: number, arg1: number, arg2: number): java_time_LocalTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number): java_time_LocalTime;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_LocalTime;
static ofNanoOfDay(arg0: number): java_time_LocalTime;
static ofSecondOfDay(arg0: number): java_time_LocalTime;
static parse(arg0: java_lang_CharSequence): java_time_LocalTime;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_LocalTime;
toEpochSecond(arg0: java_time_LocalDate, arg1: java_time_ZoneOffset): number;
toNanoOfDay(): number;
toSecondOfDay(): number;
toString(): string;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_LocalTime;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_LocalTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_LocalTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
withHour(arg0: number): java_time_LocalTime;
withMinute(arg0: number): java_time_LocalTime;
withNano(arg0: number): java_time_LocalTime;
withSecond(arg0: number): java_time_LocalTime;

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
chronology: java_time_chrono_Chronology;
chronology: java_time_chrono_IsoChronology;
dayOfMonth: number;
dayOfWeek: java_time_DayOfWeek;
dayOfYear: number;
era: java_time_chrono_Era;
era: java_time_chrono_IsoEra;
long: number;
month: java_time_Month;
monthValue: number;
static EPOCH: java_time_LocalDate;
static MAX: java_time_LocalDate;
static MIN: java_time_LocalDate;
year: number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
atStartOfDay(): java_time_LocalDateTime;
atStartOfDay(arg0: java_time_ZoneId): java_time_ZonedDateTime;
atTime(arg0: java_time_LocalTime): java_time_LocalDateTime;
atTime(arg0: java_time_LocalTime): java_time_chrono_ChronoLocalDateTime;
atTime(arg0: java_time_OffsetTime): java_time_OffsetDateTime;
atTime(arg0: number, arg1: number): java_time_LocalDateTime;
atTime(arg0: number, arg1: number, arg2: number): java_time_LocalDateTime;
atTime(arg0: number, arg1: number, arg2: number, arg3: number): java_time_LocalDateTime;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_ChronoLocalDate): number;
datesUntil(arg0: java_time_LocalDate): java_util_stream_Stream<java_time_LocalDate>;
datesUntil(arg0: java_time_LocalDate, arg1: java_time_Period): java_util_stream_Stream<java_time_LocalDate>;
equals(arg0: java_lang_Object): boolean;
format(arg0: java_time_format_DateTimeFormatter): string;
get(arg0: java_time_temporal_TemporalField): number;
getChronology(): java_time_chrono_Chronology;
getChronology(): java_time_chrono_IsoChronology;
getDayOfMonth(): number;
getDayOfWeek(): java_time_DayOfWeek;
getDayOfYear(): number;
getEra(): java_time_chrono_Era;
getEra(): java_time_chrono_IsoEra;
getLong(arg0: java_time_temporal_TemporalField): number;
getMonth(): java_time_Month;
getMonthValue(): number;
getYear(): number;
hashCode(): number;
isAfter(arg0: java_time_chrono_ChronoLocalDate): boolean;
isBefore(arg0: java_time_chrono_ChronoLocalDate): boolean;
isEqual(arg0: java_time_chrono_ChronoLocalDate): boolean;
isLeapYear(): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
lengthOfMonth(): number;
lengthOfYear(): number;
minus(arg0: java_time_temporal_TemporalAmount): java_time_LocalDate;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDate;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalDate;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDate;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusDays(arg0: number): java_time_LocalDate;
minusMonths(arg0: number): java_time_LocalDate;
minusWeeks(arg0: number): java_time_LocalDate;
minusYears(arg0: number): java_time_LocalDate;
plus(arg0: java_time_temporal_TemporalAmount): java_time_LocalDate;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoLocalDate;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_LocalDate;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoLocalDate;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plusDays(arg0: number): java_time_LocalDate;
plusMonths(arg0: number): java_time_LocalDate;
plusWeeks(arg0: number): java_time_LocalDate;
plusYears(arg0: number): java_time_LocalDate;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_LocalDate;
static now(): java_time_LocalDate;
static now(arg0: java_time_Clock): java_time_LocalDate;
static now(arg0: java_time_ZoneId): java_time_LocalDate;
static of(arg0: number, arg1: java_time_Month, arg2: number): java_time_LocalDate;
static of(arg0: number, arg1: number, arg2: number): java_time_LocalDate;
static ofEpochDay(arg0: number): java_time_LocalDate;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_LocalDate;
static ofYearDay(arg0: number, arg1: number): java_time_LocalDate;
static parse(arg0: java_lang_CharSequence): java_time_LocalDate;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_LocalDate;
toEpochDay(): number;
toEpochSecond(arg0: java_time_LocalTime, arg1: java_time_ZoneOffset): number;
toString(): string;
until(arg0: java_time_chrono_ChronoLocalDate): java_time_Period;
until(arg0: java_time_chrono_ChronoLocalDate): java_time_chrono_ChronoPeriod;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_LocalDate;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoLocalDate;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_LocalDate;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoLocalDate;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
withDayOfMonth(arg0: number): java_time_LocalDate;
withDayOfYear(arg0: number): java_time_LocalDate;
withMonth(arg0: number): java_time_LocalDate;
withYear(arg0: number): java_time_LocalDate;

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
class: java_lang_Class<java_lang_Object>;
displayName: string;
long: number;
static APRIL: java_time_Month;
static AUGUST: java_time_Month;
static DECEMBER: java_time_Month;
static FEBRUARY: java_time_Month;
static JANUARY: java_time_Month;
static JULY: java_time_Month;
static JUNE: java_time_Month;
static MARCH: java_time_Month;
static MAY: java_time_Month;
static NOVEMBER: java_time_Month;
static OCTOBER: java_time_Month;
static SEPTEMBER: java_time_Month;
value: number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
firstDayOfYear(arg0: boolean): number;
firstMonthOfQuarter(): java_time_Month;
get(arg0: java_time_temporal_TemporalField): number;
getClass(): java_lang_Class<java_lang_Object>;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
getLong(arg0: java_time_temporal_TemporalField): number;
getValue(): number;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
length(arg0: boolean): number;
maxLength(): number;
minLength(): number;
minus(arg0: number): java_time_Month;
notify(): void;
notifyAll(): void;
plus(arg0: number): java_time_Month;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_Month;
static of(arg0: number): java_time_Month;
static valueOf(arg0: string): java_time_Month;
static values(): JArray<java_time_Month>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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
class: java_lang_Class<java_lang_Object>;
displayName: string;
long: number;
static FRIDAY: java_time_DayOfWeek;
static MONDAY: java_time_DayOfWeek;
static SATURDAY: java_time_DayOfWeek;
static SUNDAY: java_time_DayOfWeek;
static THURSDAY: java_time_DayOfWeek;
static TUESDAY: java_time_DayOfWeek;
static WEDNESDAY: java_time_DayOfWeek;
value: number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
get(arg0: java_time_temporal_TemporalField): number;
getClass(): java_lang_Class<java_lang_Object>;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
getLong(arg0: java_time_temporal_TemporalField): number;
getValue(): number;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
minus(arg0: number): java_time_DayOfWeek;
notify(): void;
notifyAll(): void;
plus(arg0: number): java_time_DayOfWeek;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_DayOfWeek;
static of(arg0: number): java_time_DayOfWeek;
static valueOf(arg0: string): java_time_DayOfWeek;
static values(): JArray<java_time_DayOfWeek>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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
class: java_lang_Class<java_lang_Object>;
displayName: string;
long: number;
static BCE: java_time_chrono_IsoEra;
static CE: java_time_chrono_IsoEra;
value: number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
get(arg0: java_time_temporal_TemporalField): number;
getClass(): java_lang_Class<java_lang_Object>;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
getLong(arg0: java_time_temporal_TemporalField): number;
getValue(): number;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
notify(): void;
notifyAll(): void;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static of(arg0: number): java_time_chrono_IsoEra;
static valueOf(arg0: string): java_time_chrono_IsoEra;
static values(): JArray<java_time_chrono_IsoEra>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

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
hour: number;
long: number;
minute: number;
nano: number;
offset: java_time_ZoneOffset;
second: number;
static MAX: java_time_OffsetTime;
static MIN: java_time_OffsetTime;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
atDate(arg0: java_time_LocalDate): java_time_OffsetDateTime;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_OffsetTime): number;
equals(arg0: java_lang_Object): boolean;
format(arg0: java_time_format_DateTimeFormatter): string;
get(arg0: java_time_temporal_TemporalField): number;
getHour(): number;
getLong(arg0: java_time_temporal_TemporalField): number;
getMinute(): number;
getNano(): number;
getOffset(): java_time_ZoneOffset;
getSecond(): number;
hashCode(): number;
isAfter(arg0: java_time_OffsetTime): boolean;
isBefore(arg0: java_time_OffsetTime): boolean;
isEqual(arg0: java_time_OffsetTime): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_OffsetTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_OffsetTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusHours(arg0: number): java_time_OffsetTime;
minusMinutes(arg0: number): java_time_OffsetTime;
minusNanos(arg0: number): java_time_OffsetTime;
minusSeconds(arg0: number): java_time_OffsetTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_OffsetTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_OffsetTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plusHours(arg0: number): java_time_OffsetTime;
plusMinutes(arg0: number): java_time_OffsetTime;
plusNanos(arg0: number): java_time_OffsetTime;
plusSeconds(arg0: number): java_time_OffsetTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_OffsetTime;
static now(): java_time_OffsetTime;
static now(arg0: java_time_Clock): java_time_OffsetTime;
static now(arg0: java_time_ZoneId): java_time_OffsetTime;
static of(arg0: java_time_LocalTime, arg1: java_time_ZoneOffset): java_time_OffsetTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: java_time_ZoneOffset): java_time_OffsetTime;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_OffsetTime;
static parse(arg0: java_lang_CharSequence): java_time_OffsetTime;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_OffsetTime;
toEpochSecond(arg0: java_time_LocalDate): number;
toLocalTime(): java_time_LocalTime;
toString(): string;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_OffsetTime;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_OffsetTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_OffsetTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
withHour(arg0: number): java_time_OffsetTime;
withMinute(arg0: number): java_time_OffsetTime;
withNano(arg0: number): java_time_OffsetTime;
withOffsetSameInstant(arg0: java_time_ZoneOffset): java_time_OffsetTime;
withOffsetSameLocal(arg0: java_time_ZoneOffset): java_time_OffsetTime;
withSecond(arg0: number): java_time_OffsetTime;

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
dayOfMonth: number;
dayOfWeek: java_time_DayOfWeek;
dayOfYear: number;
hour: number;
long: number;
minute: number;
month: java_time_Month;
monthValue: number;
nano: number;
offset: java_time_ZoneOffset;
second: number;
static MAX: java_time_OffsetDateTime;
static MIN: java_time_OffsetDateTime;
year: number;
adjustInto(arg0: java_time_temporal_Temporal): java_time_temporal_Temporal;
atZoneSameInstant(arg0: java_time_ZoneId): java_time_ZonedDateTime;
atZoneSimilarLocal(arg0: java_time_ZoneId): java_time_ZonedDateTime;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_OffsetDateTime): number;
equals(arg0: java_lang_Object): boolean;
format(arg0: java_time_format_DateTimeFormatter): string;
get(arg0: java_time_temporal_TemporalField): number;
getDayOfMonth(): number;
getDayOfWeek(): java_time_DayOfWeek;
getDayOfYear(): number;
getHour(): number;
getLong(arg0: java_time_temporal_TemporalField): number;
getMinute(): number;
getMonth(): java_time_Month;
getMonthValue(): number;
getNano(): number;
getOffset(): java_time_ZoneOffset;
getSecond(): number;
getYear(): number;
hashCode(): number;
isAfter(arg0: java_time_OffsetDateTime): boolean;
isBefore(arg0: java_time_OffsetDateTime): boolean;
isEqual(arg0: java_time_OffsetDateTime): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_OffsetDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_OffsetDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusDays(arg0: number): java_time_OffsetDateTime;
minusHours(arg0: number): java_time_OffsetDateTime;
minusMinutes(arg0: number): java_time_OffsetDateTime;
minusMonths(arg0: number): java_time_OffsetDateTime;
minusNanos(arg0: number): java_time_OffsetDateTime;
minusSeconds(arg0: number): java_time_OffsetDateTime;
minusWeeks(arg0: number): java_time_OffsetDateTime;
minusYears(arg0: number): java_time_OffsetDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_OffsetDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_OffsetDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plusDays(arg0: number): java_time_OffsetDateTime;
plusHours(arg0: number): java_time_OffsetDateTime;
plusMinutes(arg0: number): java_time_OffsetDateTime;
plusMonths(arg0: number): java_time_OffsetDateTime;
plusNanos(arg0: number): java_time_OffsetDateTime;
plusSeconds(arg0: number): java_time_OffsetDateTime;
plusWeeks(arg0: number): java_time_OffsetDateTime;
plusYears(arg0: number): java_time_OffsetDateTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_OffsetDateTime;
static now(): java_time_OffsetDateTime;
static now(arg0: java_time_Clock): java_time_OffsetDateTime;
static now(arg0: java_time_ZoneId): java_time_OffsetDateTime;
static of(arg0: java_time_LocalDate, arg1: java_time_LocalTime, arg2: java_time_ZoneOffset): java_time_OffsetDateTime;
static of(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset): java_time_OffsetDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneOffset): java_time_OffsetDateTime;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_OffsetDateTime;
static parse(arg0: java_lang_CharSequence): java_time_OffsetDateTime;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_OffsetDateTime;
static timeLineOrder(): java_util_Comparator<java_time_OffsetDateTime>;
toEpochSecond(): number;
toInstant(): java_time_Instant;
toLocalDate(): java_time_LocalDate;
toLocalDateTime(): java_time_LocalDateTime;
toLocalTime(): java_time_LocalTime;
toOffsetTime(): java_time_OffsetTime;
toString(): string;
toZonedDateTime(): java_time_ZonedDateTime;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_OffsetDateTime;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_OffsetDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_OffsetDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
withDayOfMonth(arg0: number): java_time_OffsetDateTime;
withDayOfYear(arg0: number): java_time_OffsetDateTime;
withHour(arg0: number): java_time_OffsetDateTime;
withMinute(arg0: number): java_time_OffsetDateTime;
withMonth(arg0: number): java_time_OffsetDateTime;
withNano(arg0: number): java_time_OffsetDateTime;
withOffsetSameInstant(arg0: java_time_ZoneOffset): java_time_OffsetDateTime;
withOffsetSameLocal(arg0: java_time_ZoneOffset): java_time_OffsetDateTime;
withSecond(arg0: number): java_time_OffsetDateTime;
withYear(arg0: number): java_time_OffsetDateTime;

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
chronology: java_time_chrono_Chronology;
dayOfMonth: number;
dayOfWeek: java_time_DayOfWeek;
dayOfYear: number;
hour: number;
long: number;
minute: number;
month: java_time_Month;
monthValue: number;
nano: number;
offset: java_time_ZoneOffset;
second: number;
year: number;
zone: java_time_ZoneId;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): number;
equals(arg0: java_lang_Object): boolean;
format(arg0: java_time_format_DateTimeFormatter): string;
get(arg0: java_time_temporal_TemporalField): number;
getChronology(): java_time_chrono_Chronology;
getDayOfMonth(): number;
getDayOfWeek(): java_time_DayOfWeek;
getDayOfYear(): number;
getHour(): number;
getLong(arg0: java_time_temporal_TemporalField): number;
getMinute(): number;
getMonth(): java_time_Month;
getMonthValue(): number;
getNano(): number;
getOffset(): java_time_ZoneOffset;
getSecond(): number;
getYear(): number;
getZone(): java_time_ZoneId;
hashCode(): number;
isAfter(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
isBefore(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
isEqual(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_ZonedDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoZonedDateTime;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_ZonedDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoZonedDateTime;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
minusDays(arg0: number): java_time_ZonedDateTime;
minusHours(arg0: number): java_time_ZonedDateTime;
minusMinutes(arg0: number): java_time_ZonedDateTime;
minusMonths(arg0: number): java_time_ZonedDateTime;
minusNanos(arg0: number): java_time_ZonedDateTime;
minusSeconds(arg0: number): java_time_ZonedDateTime;
minusWeeks(arg0: number): java_time_ZonedDateTime;
minusYears(arg0: number): java_time_ZonedDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_ZonedDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoZonedDateTime;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_ZonedDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoZonedDateTime;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plusDays(arg0: number): java_time_ZonedDateTime;
plusHours(arg0: number): java_time_ZonedDateTime;
plusMinutes(arg0: number): java_time_ZonedDateTime;
plusMonths(arg0: number): java_time_ZonedDateTime;
plusNanos(arg0: number): java_time_ZonedDateTime;
plusSeconds(arg0: number): java_time_ZonedDateTime;
plusWeeks(arg0: number): java_time_ZonedDateTime;
plusYears(arg0: number): java_time_ZonedDateTime;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_ZonedDateTime;
static now(): java_time_ZonedDateTime;
static now(arg0: java_time_Clock): java_time_ZonedDateTime;
static now(arg0: java_time_ZoneId): java_time_ZonedDateTime;
static of(arg0: java_time_LocalDate, arg1: java_time_LocalTime, arg2: java_time_ZoneId): java_time_ZonedDateTime;
static of(arg0: java_time_LocalDateTime, arg1: java_time_ZoneId): java_time_ZonedDateTime;
static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneId): java_time_ZonedDateTime;
static ofInstant(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_ZonedDateTime;
static ofInstant(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset, arg2: java_time_ZoneId): java_time_ZonedDateTime;
static ofLocal(arg0: java_time_LocalDateTime, arg1: java_time_ZoneId, arg2: java_time_ZoneOffset): java_time_ZonedDateTime;
static ofStrict(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset, arg2: java_time_ZoneId): java_time_ZonedDateTime;
static parse(arg0: java_lang_CharSequence): java_time_ZonedDateTime;
static parse(arg0: java_lang_CharSequence, arg1: java_time_format_DateTimeFormatter): java_time_ZonedDateTime;
toEpochSecond(): number;
toInstant(): java_time_Instant;
toLocalDate(): java_time_LocalDate;
toLocalDate(): java_time_chrono_ChronoLocalDate;
toLocalDateTime(): java_time_LocalDateTime;
toLocalDateTime(): java_time_chrono_ChronoLocalDateTime;
toLocalTime(): java_time_LocalTime;
toOffsetDateTime(): java_time_OffsetDateTime;
toString(): string;
truncatedTo(arg0: java_time_temporal_TemporalUnit): java_time_ZonedDateTime;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_ZonedDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoZonedDateTime;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_ZonedDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoZonedDateTime;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
withDayOfMonth(arg0: number): java_time_ZonedDateTime;
withDayOfYear(arg0: number): java_time_ZonedDateTime;
withEarlierOffsetAtOverlap(): java_time_ZonedDateTime;
withEarlierOffsetAtOverlap(): java_time_chrono_ChronoZonedDateTime;
withFixedOffsetZone(): java_time_ZonedDateTime;
withHour(arg0: number): java_time_ZonedDateTime;
withLaterOffsetAtOverlap(): java_time_ZonedDateTime;
withLaterOffsetAtOverlap(): java_time_chrono_ChronoZonedDateTime;
withMinute(arg0: number): java_time_ZonedDateTime;
withMonth(arg0: number): java_time_ZonedDateTime;
withNano(arg0: number): java_time_ZonedDateTime;
withSecond(arg0: number): java_time_ZonedDateTime;
withYear(arg0: number): java_time_ZonedDateTime;
withZoneSameInstant(arg0: java_time_ZoneId): java_time_ZonedDateTime;
withZoneSameInstant(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime;
withZoneSameLocal(arg0: java_time_ZoneId): java_time_ZonedDateTime;
withZoneSameLocal(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime;

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
chronology: java_time_chrono_Chronology;
long: number;
offset: java_time_ZoneOffset;
zone: java_time_ZoneId;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): number;
equals(arg0: java_lang_Object): boolean;
format(arg0: java_time_format_DateTimeFormatter): string;
get(arg0: java_time_temporal_TemporalField): number;
getChronology(): java_time_chrono_Chronology;
getLong(arg0: java_time_temporal_TemporalField): number;
getOffset(): java_time_ZoneOffset;
getZone(): java_time_ZoneId;
hashCode(): number;
isAfter(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
isBefore(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
isEqual(arg0: java_time_chrono_ChronoZonedDateTime<java_lang_Object>): boolean;
isSupported(arg0: java_time_temporal_TemporalField): boolean;
isSupported(arg0: java_time_temporal_TemporalUnit): boolean;
minus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoZonedDateTime<D>;
minus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoZonedDateTime<D>;
minus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
plus(arg0: java_time_temporal_TemporalAmount): java_time_chrono_ChronoZonedDateTime<D>;
plus(arg0: java_time_temporal_TemporalAmount): java_time_temporal_Temporal;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_chrono_ChronoZonedDateTime<D>;
plus(arg0: number, arg1: java_time_temporal_TemporalUnit): java_time_temporal_Temporal;
query<R extends java_lang_Object>(arg0: java_time_temporal_TemporalQuery<R>): R;
range(arg0: java_time_temporal_TemporalField): java_time_temporal_ValueRange;
static from(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoZonedDateTime<java_lang_Object>;
static timeLineOrder(): java_util_Comparator<java_time_chrono_ChronoZonedDateTime<java_lang_Object>>;
toEpochSecond(): number;
toInstant(): java_time_Instant;
toLocalDate(): D;
toLocalDateTime(): java_time_chrono_ChronoLocalDateTime<D>;
toLocalTime(): java_time_LocalTime;
toString(): string;
until(arg0: java_time_temporal_Temporal, arg1: java_time_temporal_TemporalUnit): number;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_chrono_ChronoZonedDateTime<D>;
wit(arg0: java_time_temporal_TemporalAdjuster): java_time_temporal_Temporal;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_chrono_ChronoZonedDateTime<D>;
wit(arg0: java_time_temporal_TemporalField, arg1: number): java_time_temporal_Temporal;
withEarlierOffsetAtOverlap(): java_time_chrono_ChronoZonedDateTime<D>;
withLaterOffsetAtOverlap(): java_time_chrono_ChronoZonedDateTime<D>;
withZoneSameInstant(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<D>;
withZoneSameLocal(arg0: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<D>;

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
calendarType: string;
class: java_lang_Class<java_lang_Object>;
displayName: string;
id: string;
static INSTANCE: java_time_chrono_IsoChronology;
date(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number): java_time_LocalDate;
date(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number): java_time_chrono_ChronoLocalDate;
date(arg0: java_time_temporal_TemporalAccessor): java_time_LocalDate;
date(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDate;
date(arg0: number, arg1: number, arg2: number): java_time_LocalDate;
date(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
dateEpochDay(arg0: number): java_time_LocalDate;
dateEpochDay(arg0: number): java_time_chrono_ChronoLocalDate;
dateNow(): java_time_LocalDate;
dateNow(): java_time_chrono_ChronoLocalDate;
dateNow(arg0: java_time_Clock): java_time_LocalDate;
dateNow(arg0: java_time_Clock): java_time_chrono_ChronoLocalDate;
dateNow(arg0: java_time_ZoneId): java_time_LocalDate;
dateNow(arg0: java_time_ZoneId): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: java_time_chrono_Era, arg1: number, arg2: number): java_time_LocalDate;
dateYearDay(arg0: java_time_chrono_Era, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: number, arg1: number): java_time_LocalDate;
dateYearDay(arg0: number, arg1: number): java_time_chrono_ChronoLocalDate;
epochSecond(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneOffset): number;
epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: java_time_ZoneOffset): number;
eraOf(arg0: number): java_time_chrono_Era;
eraOf(arg0: number): java_time_chrono_IsoEra;
eras(): java_util_List<java_time_chrono_Era>;
getCalendarType(): string;
getClass(): java_lang_Class<java_lang_Object>;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
getId(): string;
isLeapYear(arg0: number): boolean;
localDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_LocalDateTime;
localDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDateTime;
notify(): void;
notifyAll(): void;
period(arg0: number, arg1: number, arg2: number): java_time_Period;
period(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoPeriod;
prolepticYear(arg0: java_time_chrono_Era, arg1: number): number;
range(arg0: java_time_temporal_ChronoField): java_time_temporal_ValueRange;
resolveDate(arg0: java_util_Map, arg1: java_time_format_ResolverStyle): java_time_chrono_ChronoLocalDate;
resolveDate(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_format_ResolverStyle): java_time_LocalDate;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
zonedDateTime(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_ZonedDateTime;
zonedDateTime(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime;
zonedDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_ZonedDateTime;
zonedDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoZonedDateTime;

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

  export class AbstractChronology extends java_lang_Object implements java_time_chrono_Chronology {
calendarType: string;
displayName: string;
id: string;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_time_chrono_Chronology): number;
date(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number): java_time_chrono_ChronoLocalDate;
date(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDate;
date(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
dateEpochDay(arg0: number): java_time_chrono_ChronoLocalDate;
dateNow(): java_time_chrono_ChronoLocalDate;
dateNow(arg0: java_time_Clock): java_time_chrono_ChronoLocalDate;
dateNow(arg0: java_time_ZoneId): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: java_time_chrono_Era, arg1: number, arg2: number): java_time_chrono_ChronoLocalDate;
dateYearDay(arg0: number, arg1: number): java_time_chrono_ChronoLocalDate;
epochSecond(arg0: java_time_chrono_Era, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: java_time_ZoneOffset): number;
epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: java_time_ZoneOffset): number;
equals(arg0: java_lang_Object): boolean;
eraOf(arg0: number): java_time_chrono_Era;
eras(): java_util_List<java_time_chrono_Era>;
getCalendarType(): string;
getDisplayName(arg0: java_time_format_TextStyle, arg1: java_util_Locale): string;
getId(): string;
hashCode(): number;
isLeapYear(arg0: number): boolean;
localDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoLocalDateTime<java_time_chrono_ChronoLocalDate>;
period(arg0: number, arg1: number, arg2: number): java_time_chrono_ChronoPeriod;
prolepticYear(arg0: java_time_chrono_Era, arg1: number): number;
range(arg0: java_time_temporal_ChronoField): java_time_temporal_ValueRange;
resolveDate(arg0: java_util_Map<java_time_temporal_TemporalField, java_lang_Long>, arg1: java_time_format_ResolverStyle): java_time_chrono_ChronoLocalDate;
toString(): string;
zonedDateTime(arg0: java_time_Instant, arg1: java_time_ZoneId): java_time_chrono_ChronoZonedDateTime<java_time_chrono_ChronoLocalDate>;
zonedDateTime(arg0: java_time_temporal_TemporalAccessor): java_time_chrono_ChronoZonedDateTime<java_time_chrono_ChronoLocalDate>;

  }
}
//@ts-nocheck

declare module 'java.time.format' {
import { Object as java_lang_Object } from 'java.lang';
import { Locale as java_util_Locale, Set as java_util_Set } from 'java.util';
import { DecimalStyle as java_time_format_DecimalStyle } from 'java.time.format';

  export class DecimalStyle extends java_lang_Object {
decimalSeparator: string;
negativeSign: string;
positiveSign: string;
static STANDARD: java_time_format_DecimalStyle;
static availableLocales: java_util_Set<java_util_Locale>;
zeroDigit: string;
equals(arg0: java_lang_Object): boolean;
getDecimalSeparator(): string;
getNegativeSign(): string;
getPositiveSign(): string;
getZeroDigit(): string;
hashCode(): number;
static getAvailableLocales(): java_util_Set<java_util_Locale>;
static of(arg0: java_util_Locale): java_time_format_DecimalStyle;
static ofDefaultLocale(): java_time_format_DecimalStyle;
toString(): string;
withDecimalSeparator(arg0: string): java_time_format_DecimalStyle;
withNegativeSign(arg0: string): java_time_format_DecimalStyle;
withPositiveSign(arg0: string): java_time_format_DecimalStyle;
withZeroDigit(arg0: string): java_time_format_DecimalStyle;

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
dayOfMonthIndicator: number;
dayOfWeek: java_time_DayOfWeek;
localTime: java_time_LocalTime;
month: java_time_Month;
offsetAfter: java_time_ZoneOffset;
offsetBefore: java_time_ZoneOffset;
standardOffset: java_time_ZoneOffset;
timeDefinition: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
createTransition(arg0: number): java_time_zone_ZoneOffsetTransition;
equals(arg0: java_lang_Object): boolean;
getDayOfMonthIndicator(): number;
getDayOfWeek(): java_time_DayOfWeek;
getLocalTime(): java_time_LocalTime;
getMonth(): java_time_Month;
getOffsetAfter(): java_time_ZoneOffset;
getOffsetBefore(): java_time_ZoneOffset;
getStandardOffset(): java_time_ZoneOffset;
getTimeDefinition(): java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
hashCode(): number;
isMidnightEndOfDay(): boolean;
static of(arg0: java_time_Month, arg1: number, arg2: java_time_DayOfWeek, arg3: java_time_LocalTime, arg4: boolean, arg5: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition, arg6: java_time_ZoneOffset, arg7: java_time_ZoneOffset, arg8: java_time_ZoneOffset): java_time_zone_ZoneOffsetTransitionRule;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.time.zone.ZoneOffsetTransitionRule' {
import { TimeDefinition as java_time_zone_ZoneOffsetTransitionRule_TimeDefinition } from 'java.time.zone.ZoneOffsetTransitionRule';
import { LocalDateTime as java_time_LocalDateTime, ZoneOffset as java_time_ZoneOffset } from 'java.time';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class TimeDefinition extends java_lang_Enum<java_time_zone_ZoneOffsetTransitionRule_TimeDefinition> {
class: java_lang_Class<java_lang_Object>;
static STANDARD: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
static UTC: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
static WALL: java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
createDateTime(arg0: java_time_LocalDateTime, arg1: java_time_ZoneOffset, arg2: java_time_ZoneOffset): java_time_LocalDateTime;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_time_zone_ZoneOffsetTransitionRule_TimeDefinition;
static values(): JArray<java_time_zone_ZoneOffsetTransitionRule_TimeDefinition>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}