//@ts-nocheck

declare module 'java.math' {
import { BigInteger as java_math_BigInteger } from 'java.math';
import { Object as java_lang_Object, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';
import { Random as java_util_Random } from 'java.util';

  export class BigInteger extends java_lang_Number implements java_lang_Comparable<java_math_BigInteger> {
class: java_lang_Class<java_lang_Object>;
lowestSetBit: number;
static ONE: java_math_BigInteger;
static TEN: java_math_BigInteger;
static TWO: java_math_BigInteger;
static ZERO: java_math_BigInteger;
abs(): java_math_BigInteger;
add(arg0: java_math_BigInteger): java_math_BigInteger;
and(arg0: java_math_BigInteger): java_math_BigInteger;
andNot(arg0: java_math_BigInteger): java_math_BigInteger;
bitCount(): number;
bitLength(): number;
byteValueExact(): number;
clearBit(arg0: number): java_math_BigInteger;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_math_BigInteger): number;
divide(arg0: java_math_BigInteger): java_math_BigInteger;
divideAndRemainder(arg0: java_math_BigInteger): JArray<java_math_BigInteger>;
doubleValue(): number;
equals(arg0: java_lang_Object): boolean;
flipBit(arg0: number): java_math_BigInteger;
floatValue(): number;
gcd(arg0: java_math_BigInteger): java_math_BigInteger;
getClass(): java_lang_Class<java_lang_Object>;
getLowestSetBit(): number;
hashCode(): number;
intValue(): number;
intValueExact(): number;
isProbablePrime(arg0: number): boolean;
longValue(): number;
longValueExact(): number;
max(arg0: java_math_BigInteger): java_math_BigInteger;
min(arg0: java_math_BigInteger): java_math_BigInteger;
mod(arg0: java_math_BigInteger): java_math_BigInteger;
modInverse(arg0: java_math_BigInteger): java_math_BigInteger;
modPow(arg0: java_math_BigInteger, arg1: java_math_BigInteger): java_math_BigInteger;
multiply(arg0: java_math_BigInteger): java_math_BigInteger;
negate(): java_math_BigInteger;
nextProbablePrime(): java_math_BigInteger;
not(): java_math_BigInteger;
notify(): void;
notifyAll(): void;
or(arg0: java_math_BigInteger): java_math_BigInteger;
pow(arg0: number): java_math_BigInteger;
remainder(arg0: java_math_BigInteger): java_math_BigInteger;
setBit(arg0: number): java_math_BigInteger;
shiftLeft(arg0: number): java_math_BigInteger;
shiftRight(arg0: number): java_math_BigInteger;
shortValueExact(): number;
signum(): number;
sqrt(): java_math_BigInteger;
sqrtAndRemainder(): JArray<java_math_BigInteger>;
static probablePrime(arg0: number, arg1: java_util_Random): java_math_BigInteger;
static valueOf(arg0: number): java_math_BigInteger;
subtract(arg0: java_math_BigInteger): java_math_BigInteger;
testBit(arg0: number): boolean;
toByteArray(): JArray<number>;
toString(): string;
toString(arg0: number): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
xor(arg0: java_math_BigInteger): java_math_BigInteger;
constructor(arg0: JArray<number>);
constructor(arg0: JArray<number>, arg1: number, arg2: number);
constructor(arg0: number, arg1: JArray<number>);
constructor(arg0: number, arg1: JArray<number>, arg2: number, arg3: number);
constructor(arg0: number, arg1: java_util_Random);
constructor(arg0: number, arg1: number, arg2: java_util_Random);
constructor(arg0: string);
constructor(arg0: string, arg1: number);
  }
}
//@ts-nocheck

declare module 'java.math' {
import { BigDecimal as java_math_BigDecimal, MathContext as java_math_MathContext, RoundingMode as java_math_RoundingMode, BigInteger as java_math_BigInteger } from 'java.math';
import { Object as java_lang_Object, Class as java_lang_Class, Number as java_lang_Number, Comparable as java_lang_Comparable } from 'java.lang';

  export class BigDecimal extends java_lang_Number implements java_lang_Comparable<java_math_BigDecimal> {
class: java_lang_Class<java_lang_Object>;
static ONE: java_math_BigDecimal;
static ROUND_CEILING: number;
static ROUND_DOWN: number;
static ROUND_FLOOR: number;
static ROUND_HALF_DOWN: number;
static ROUND_HALF_EVEN: number;
static ROUND_HALF_UP: number;
static ROUND_UNNECESSARY: number;
static ROUND_UP: number;
static TEN: java_math_BigDecimal;
static ZERO: java_math_BigDecimal;
abs(): java_math_BigDecimal;
abs(arg0: java_math_MathContext): java_math_BigDecimal;
add(arg0: java_math_BigDecimal): java_math_BigDecimal;
add(arg0: java_math_BigDecimal, arg1: java_math_MathContext): java_math_BigDecimal;
byteValueExact(): number;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_math_BigDecimal): number;
divide(arg0: java_math_BigDecimal): java_math_BigDecimal;
divide(arg0: java_math_BigDecimal, arg1: java_math_MathContext): java_math_BigDecimal;
divide(arg0: java_math_BigDecimal, arg1: java_math_RoundingMode): java_math_BigDecimal;
divide(arg0: java_math_BigDecimal, arg1: number): java_math_BigDecimal;
divide(arg0: java_math_BigDecimal, arg1: number, arg2: java_math_RoundingMode): java_math_BigDecimal;
divide(arg0: java_math_BigDecimal, arg1: number, arg2: number): java_math_BigDecimal;
divideAndRemainder(arg0: java_math_BigDecimal): JArray<java_math_BigDecimal>;
divideAndRemainder(arg0: java_math_BigDecimal, arg1: java_math_MathContext): JArray<java_math_BigDecimal>;
divideToIntegralValue(arg0: java_math_BigDecimal): java_math_BigDecimal;
divideToIntegralValue(arg0: java_math_BigDecimal, arg1: java_math_MathContext): java_math_BigDecimal;
doubleValue(): number;
equals(arg0: java_lang_Object): boolean;
floatValue(): number;
getClass(): java_lang_Class<java_lang_Object>;
hashCode(): number;
intValue(): number;
intValueExact(): number;
longValue(): number;
longValueExact(): number;
max(arg0: java_math_BigDecimal): java_math_BigDecimal;
min(arg0: java_math_BigDecimal): java_math_BigDecimal;
movePointLeft(arg0: number): java_math_BigDecimal;
movePointRight(arg0: number): java_math_BigDecimal;
multiply(arg0: java_math_BigDecimal): java_math_BigDecimal;
multiply(arg0: java_math_BigDecimal, arg1: java_math_MathContext): java_math_BigDecimal;
negate(): java_math_BigDecimal;
negate(arg0: java_math_MathContext): java_math_BigDecimal;
notify(): void;
notifyAll(): void;
plus(): java_math_BigDecimal;
plus(arg0: java_math_MathContext): java_math_BigDecimal;
pow(arg0: number): java_math_BigDecimal;
pow(arg0: number, arg1: java_math_MathContext): java_math_BigDecimal;
precision(): number;
remainder(arg0: java_math_BigDecimal): java_math_BigDecimal;
remainder(arg0: java_math_BigDecimal, arg1: java_math_MathContext): java_math_BigDecimal;
round(arg0: java_math_MathContext): java_math_BigDecimal;
scale(): number;
scaleByPowerOfTen(arg0: number): java_math_BigDecimal;
setScale(arg0: number): java_math_BigDecimal;
setScale(arg0: number, arg1: java_math_RoundingMode): java_math_BigDecimal;
setScale(arg0: number, arg1: number): java_math_BigDecimal;
shortValueExact(): number;
signum(): number;
sqrt(arg0: java_math_MathContext): java_math_BigDecimal;
static valueOf(arg0: number): java_math_BigDecimal;
static valueOf(arg0: number): java_math_BigDecimal;
static valueOf(arg0: number, arg1: number): java_math_BigDecimal;
stripTrailingZeros(): java_math_BigDecimal;
subtract(arg0: java_math_BigDecimal): java_math_BigDecimal;
subtract(arg0: java_math_BigDecimal, arg1: java_math_MathContext): java_math_BigDecimal;
toBigInteger(): java_math_BigInteger;
toBigIntegerExact(): java_math_BigInteger;
toEngineeringString(): string;
toPlainString(): string;
toString(): string;
ulp(): java_math_BigDecimal;
unscaledValue(): java_math_BigInteger;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: JArray<string>);
constructor(arg0: JArray<string>, arg1: java_math_MathContext);
constructor(arg0: JArray<string>, arg1: number, arg2: number);
constructor(arg0: JArray<string>, arg1: number, arg2: number, arg3: java_math_MathContext);
constructor(arg0: java_math_BigInteger);
constructor(arg0: java_math_BigInteger, arg1: java_math_MathContext);
constructor(arg0: java_math_BigInteger, arg1: number);
constructor(arg0: java_math_BigInteger, arg1: number, arg2: java_math_MathContext);
constructor(arg0: number);
constructor(arg0: number);
constructor(arg0: number);
constructor(arg0: number, arg1: java_math_MathContext);
constructor(arg0: number, arg1: java_math_MathContext);
constructor(arg0: number, arg1: java_math_MathContext);
constructor(arg0: string);
constructor(arg0: string, arg1: java_math_MathContext);
  }
}
//@ts-nocheck

declare module 'java.math' {
import { Object as java_lang_Object } from 'java.lang';
import { RoundingMode as java_math_RoundingMode, MathContext as java_math_MathContext } from 'java.math';
import { Serializable as java_io_Serializable } from 'java.io';

  export class MathContext extends java_lang_Object implements java_io_Serializable {
precision: number;
roundingMode: java_math_RoundingMode;
static DECIMAL128: java_math_MathContext;
static DECIMAL32: java_math_MathContext;
static DECIMAL64: java_math_MathContext;
static UNLIMITED: java_math_MathContext;
equals(arg0: java_lang_Object): boolean;
getPrecision(): number;
getRoundingMode(): java_math_RoundingMode;
hashCode(): number;
toString(): string;
constructor(arg0: number);
constructor(arg0: number, arg1: java_math_RoundingMode);
constructor(arg0: string);
  }
}
//@ts-nocheck

declare module 'java.math' {
import { RoundingMode as java_math_RoundingMode } from 'java.math';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class RoundingMode extends java_lang_Enum<java_math_RoundingMode> {
class: java_lang_Class<java_lang_Object>;
static CEILING: java_math_RoundingMode;
static DOWN: java_math_RoundingMode;
static FLOOR: java_math_RoundingMode;
static HALF_DOWN: java_math_RoundingMode;
static HALF_EVEN: java_math_RoundingMode;
static HALF_UP: java_math_RoundingMode;
static UNNECESSARY: java_math_RoundingMode;
static UP: java_math_RoundingMode;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: number): java_math_RoundingMode;
static valueOf(arg0: string): java_math_RoundingMode;
static values(): JArray<java_math_RoundingMode>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}