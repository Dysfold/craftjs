//@ts-nocheck

declare module 'java.sql' {
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Driver as java_sql_Driver, DriverAction as java_sql_DriverAction, Connection as java_sql_Connection } from 'java.sql';
import { Enumeration as java_util_Enumeration, Properties as java_util_Properties } from 'java.util';
import { Stream as java_util_stream_Stream } from 'java.util.stream';
import { Object as java_lang_Object } from 'java.lang';

  export class DriverManager extends java_lang_Object {
static connection: java_sql_Connection;
static connection: java_sql_Connection;
static connection: java_sql_Connection;
static driver: java_sql_Driver;
static drivers: java_util_Enumeration<java_sql_Driver>;
static logStream: java_io_PrintStream;
static logWriter: java_io_PrintWriter;
static loginTimeout: number;
static deregisterDriver(arg0: java_sql_Driver): void;
static drivers(): java_util_stream_Stream<java_sql_Driver>;
static getConnection(arg0: string): java_sql_Connection;
static getConnection(arg0: string, arg1: java_util_Properties): java_sql_Connection;
static getConnection(arg0: string, arg1: string, arg2: string): java_sql_Connection;
static getDriver(arg0: string): java_sql_Driver;
static getDrivers(): java_util_Enumeration<java_sql_Driver>;
static getLogStream(): java_io_PrintStream;
static getLogWriter(): java_io_PrintWriter;
static getLoginTimeout(): number;
static println(arg0: string): void;
static registerDriver(arg0: java_sql_Driver): void;
static registerDriver(arg0: java_sql_Driver, arg1: java_sql_DriverAction): void;
static setLogStream(arg0: java_io_PrintStream): void;
static setLogWriter(arg0: java_io_PrintWriter): void;
static setLoginTimeout(arg0: number): void;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Properties as java_util_Properties } from 'java.util';
import { Connection as java_sql_Connection, DriverPropertyInfo as java_sql_DriverPropertyInfo } from 'java.sql';
import { Logger as java_util_logging_Logger } from 'java.util.logging';

  export class Driver {
majorVersion: number;
minorVersion: number;
parentLogger: java_util_logging_Logger;
propertyInfo: JArray<java_sql_DriverPropertyInfo>;
acceptsURL(arg0: string): boolean;
connect(arg0: string, arg1: java_util_Properties): java_sql_Connection;
getMajorVersion(): number;
getMinorVersion(): number;
getParentLogger(): java_util_logging_Logger;
getPropertyInfo(arg0: string, arg1: java_util_Properties): JArray<java_sql_DriverPropertyInfo>;
jdbcCompliant(): boolean;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Executor as java_util_concurrent_Executor } from 'java.util.concurrent';
import { Statement as java_sql_Statement, PreparedStatement as java_sql_PreparedStatement, CallableStatement as java_sql_CallableStatement, Savepoint as java_sql_Savepoint, DatabaseMetaData as java_sql_DatabaseMetaData, SQLWarning as java_sql_SQLWarning, Clob as java_sql_Clob, Blob as java_sql_Blob, NClob as java_sql_NClob, SQLXML as java_sql_SQLXML, Array as java_sql_Array, Struct as java_sql_Struct, ShardingKey as java_sql_ShardingKey, Wrapper as java_sql_Wrapper } from 'java.sql';
import { Map as java_util_Map, Properties as java_util_Properties } from 'java.util';
import { Class as java_lang_Class, Object as java_lang_Object, AutoCloseable as java_lang_AutoCloseable } from 'java.lang';

  export class Connection implements java_sql_Wrapper, java_lang_AutoCloseable {
autoCommit: boolean;
catalog: string;
clientInfo: java_util_Properties;
clientInfo: string;
holdability: number;
metaData: java_sql_DatabaseMetaData;
networkTimeout: number;
schema: string;
static TRANSACTION_NONE: number;
static TRANSACTION_READ_COMMITTED: number;
static TRANSACTION_READ_UNCOMMITTED: number;
static TRANSACTION_REPEATABLE_READ: number;
static TRANSACTION_SERIALIZABLE: number;
transactionIsolation: number;
typeMap: java_util_Map<string, java_lang_Class<java_lang_Object>>;
warnings: java_sql_SQLWarning;
abort(arg0: java_util_concurrent_Executor): void;
beginRequest(): void;
clearWarnings(): void;
close(): void;
commit(): void;
createArrayOf(arg0: string, arg1: JArray<java_lang_Object>): java_sql_Array;
createBlob(): java_sql_Blob;
createClob(): java_sql_Clob;
createNClob(): java_sql_NClob;
createSQLXML(): java_sql_SQLXML;
createStatement(): java_sql_Statement;
createStatement(arg0: number, arg1: number): java_sql_Statement;
createStatement(arg0: number, arg1: number, arg2: number): java_sql_Statement;
createStruct(arg0: string, arg1: JArray<java_lang_Object>): java_sql_Struct;
endRequest(): void;
getAutoCommit(): boolean;
getCatalog(): string;
getClientInfo(): java_util_Properties;
getClientInfo(arg0: string): string;
getHoldability(): number;
getMetaData(): java_sql_DatabaseMetaData;
getNetworkTimeout(): number;
getSchema(): string;
getTransactionIsolation(): number;
getTypeMap(): java_util_Map<string, java_lang_Class<java_lang_Object>>;
getWarnings(): java_sql_SQLWarning;
isClosed(): boolean;
isReadOnly(): boolean;
isValid(arg0: number): boolean;
isWrapperFor(arg0: java_lang_Class<java_lang_Object>): boolean;
nativeSQL(arg0: string): string;
prepareCall(arg0: string): java_sql_CallableStatement;
prepareCall(arg0: string, arg1: number, arg2: number): java_sql_CallableStatement;
prepareCall(arg0: string, arg1: number, arg2: number, arg3: number): java_sql_CallableStatement;
prepareStatement(arg0: string): java_sql_PreparedStatement;
prepareStatement(arg0: string, arg1: JArray<number>): java_sql_PreparedStatement;
prepareStatement(arg0: string, arg1: JArray<string>): java_sql_PreparedStatement;
prepareStatement(arg0: string, arg1: number): java_sql_PreparedStatement;
prepareStatement(arg0: string, arg1: number, arg2: number): java_sql_PreparedStatement;
prepareStatement(arg0: string, arg1: number, arg2: number, arg3: number): java_sql_PreparedStatement;
releaseSavepoint(arg0: java_sql_Savepoint): void;
rollback(): void;
rollback(arg0: java_sql_Savepoint): void;
setAutoCommit(arg0: boolean): void;
setCatalog(arg0: string): void;
setClientInfo(arg0: java_util_Properties): void;
setClientInfo(arg0: string, arg1: string): void;
setHoldability(arg0: number): void;
setNetworkTimeout(arg0: java_util_concurrent_Executor, arg1: number): void;
setReadOnly(arg0: boolean): void;
setSavepoint(): java_sql_Savepoint;
setSavepoint(arg0: string): java_sql_Savepoint;
setSchema(arg0: string): void;
setShardingKey(arg0: java_sql_ShardingKey): void;
setShardingKey(arg0: java_sql_ShardingKey, arg1: java_sql_ShardingKey): void;
setShardingKeyIfValid(arg0: java_sql_ShardingKey, arg1: java_sql_ShardingKey, arg2: number): boolean;
setShardingKeyIfValid(arg0: java_sql_ShardingKey, arg1: number): boolean;
setTransactionIsolation(arg0: number): void;
setTypeMap(arg0: java_util_Map<string, java_lang_Class<java_lang_Object>>): void;
unwrap<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { SQLWarning as java_sql_SQLWarning, ResultSet as java_sql_ResultSet, Connection as java_sql_Connection, Wrapper as java_sql_Wrapper } from 'java.sql';
import { Class as java_lang_Class, Object as java_lang_Object, AutoCloseable as java_lang_AutoCloseable } from 'java.lang';

  export class Statement implements java_sql_Wrapper, java_lang_AutoCloseable {
connection: java_sql_Connection;
fetchDirection: number;
fetchSize: number;
generatedKeys: java_sql_ResultSet;
largeMaxRows: number;
largeUpdateCount: number;
maxFieldSize: number;
maxRows: number;
moreResults: boolean;
moreResults: boolean;
queryTimeout: number;
resultSet: java_sql_ResultSet;
resultSetConcurrency: number;
resultSetHoldability: number;
resultSetType: number;
static CLOSE_ALL_RESULTS: number;
static CLOSE_CURRENT_RESULT: number;
static EXECUTE_FAILED: number;
static KEEP_CURRENT_RESULT: number;
static NO_GENERATED_KEYS: number;
static RETURN_GENERATED_KEYS: number;
static SUCCESS_NO_INFO: number;
updateCount: number;
warnings: java_sql_SQLWarning;
addBatch(arg0: string): void;
cancel(): void;
clearBatch(): void;
clearWarnings(): void;
close(): void;
closeOnCompletion(): void;
enquoteIdentifier(arg0: string, arg1: boolean): string;
enquoteLiteral(arg0: string): string;
enquoteNCharLiteral(arg0: string): string;
execute(arg0: string): boolean;
execute(arg0: string, arg1: JArray<number>): boolean;
execute(arg0: string, arg1: JArray<string>): boolean;
execute(arg0: string, arg1: number): boolean;
executeBatch(): JArray<number>;
executeLargeBatch(): JArray<number>;
executeLargeUpdate(arg0: string): number;
executeLargeUpdate(arg0: string, arg1: JArray<number>): number;
executeLargeUpdate(arg0: string, arg1: JArray<string>): number;
executeLargeUpdate(arg0: string, arg1: number): number;
executeQuery(arg0: string): java_sql_ResultSet;
executeUpdate(arg0: string): number;
executeUpdate(arg0: string, arg1: JArray<number>): number;
executeUpdate(arg0: string, arg1: JArray<string>): number;
executeUpdate(arg0: string, arg1: number): number;
getConnection(): java_sql_Connection;
getFetchDirection(): number;
getFetchSize(): number;
getGeneratedKeys(): java_sql_ResultSet;
getLargeMaxRows(): number;
getLargeUpdateCount(): number;
getMaxFieldSize(): number;
getMaxRows(): number;
getMoreResults(): boolean;
getMoreResults(arg0: number): boolean;
getQueryTimeout(): number;
getResultSet(): java_sql_ResultSet;
getResultSetConcurrency(): number;
getResultSetHoldability(): number;
getResultSetType(): number;
getUpdateCount(): number;
getWarnings(): java_sql_SQLWarning;
isCloseOnCompletion(): boolean;
isClosed(): boolean;
isPoolable(): boolean;
isSimpleIdentifier(arg0: string): boolean;
isWrapperFor(arg0: java_lang_Class<java_lang_Object>): boolean;
setCursorName(arg0: string): void;
setEscapeProcessing(arg0: boolean): void;
setFetchDirection(arg0: number): void;
setFetchSize(arg0: number): void;
setLargeMaxRows(arg0: number): void;
setMaxFieldSize(arg0: number): void;
setMaxRows(arg0: number): void;
setPoolable(arg0: boolean): void;
setQueryTimeout(arg0: number): void;
unwrap<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { SQLWarning as java_sql_SQLWarning, SQLException as java_sql_SQLException } from 'java.sql';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Spliterator as java_util_Spliterator } from 'java.util';
import { Consumer as java_util_function_Consumer } from 'java.util.function';

  export class SQLWarning extends java_sql_SQLException {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
localizedMessage: string;
message: string;
nextWarning: java_sql_SQLWarning;
stackTrace: JArray<java_lang_StackTraceElement>;
suppressed: JArray<java_lang_Throwable>;
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getLocalizedMessage(): string;
getMessage(): string;
getNextWarning(): java_sql_SQLWarning;
getStackTrace(): JArray<java_lang_StackTraceElement>;
getSuppressed(): JArray<java_lang_Throwable>;
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setNextWarning(arg0: java_sql_SQLWarning): void;
setStackTrace(arg0: JArray<java_lang_StackTraceElement>): void;
spliterator(): java_util_Spliterator<T>;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_lang_Throwable);
constructor(arg0: string);
constructor(arg0: string, arg1: java_lang_Throwable);
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: string, arg2: java_lang_Throwable);
constructor(arg0: string, arg1: string, arg2: number);
constructor(arg0: string, arg1: string, arg2: number, arg3: java_lang_Throwable);
  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Iterator as java_util_Iterator, Spliterator as java_util_Spliterator } from 'java.util';
import { Throwable as java_lang_Throwable, StackTraceElement as java_lang_StackTraceElement, Object as java_lang_Object, Class as java_lang_Class, Exception as java_lang_Exception, Iterable as java_lang_Iterable } from 'java.lang';
import { SQLException as java_sql_SQLException } from 'java.sql';
import { PrintWriter as java_io_PrintWriter, PrintStream as java_io_PrintStream } from 'java.io';
import { Consumer as java_util_function_Consumer } from 'java.util.function';

  export class SQLException extends java_lang_Exception implements java_lang_Iterable<java_lang_Throwable> {
cause: java_lang_Throwable;
class: java_lang_Class<java_lang_Object>;
errorCode: number;
localizedMessage: string;
message: string;
nextException: java_sql_SQLException;
sQLState: string;
stackTrace: JArray<java_lang_StackTraceElement>;
suppressed: JArray<java_lang_Throwable>;
addSuppressed(arg0: java_lang_Throwable): void;
equals(arg0: java_lang_Object): boolean;
fillInStackTrace(): java_lang_Throwable;
forEach(arg0: java_util_function_Consumer<java_lang_Object>): void;
getCause(): java_lang_Throwable;
getClass(): java_lang_Class<java_lang_Object>;
getErrorCode(): number;
getLocalizedMessage(): string;
getMessage(): string;
getNextException(): java_sql_SQLException;
getSQLState(): string;
getStackTrace(): JArray<java_lang_StackTraceElement>;
getSuppressed(): JArray<java_lang_Throwable>;
hashCode(): number;
initCause(arg0: java_lang_Throwable): java_lang_Throwable;
iterator(): java_util_Iterator<java_lang_Throwable>;
notify(): void;
notifyAll(): void;
printStackTrace(): void;
printStackTrace(arg0: java_io_PrintStream): void;
printStackTrace(arg0: java_io_PrintWriter): void;
setNextException(arg0: java_sql_SQLException): void;
setStackTrace(arg0: JArray<java_lang_StackTraceElement>): void;
spliterator(): java_util_Spliterator<T>;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor();
constructor(arg0: java_lang_Throwable);
constructor(arg0: string);
constructor(arg0: string, arg1: java_lang_Throwable);
constructor(arg0: string, arg1: string);
constructor(arg0: string, arg1: string, arg2: java_lang_Throwable);
constructor(arg0: string, arg1: string, arg2: number);
constructor(arg0: string, arg1: string, arg2: number, arg3: java_lang_Throwable);
  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Object as java_lang_Object, Class as java_lang_Class, AutoCloseable as java_lang_AutoCloseable } from 'java.lang';
import { Map as java_util_Map, Calendar as java_util_Calendar } from 'java.util';
import { Ref as java_sql_Ref, Array as java_sql_Array, Time as java_sql_Time, Date as java_sql_Date, SQLType as java_sql_SQLType, Statement as java_sql_Statement, ResultSetMetaData as java_sql_ResultSetMetaData, SQLWarning as java_sql_SQLWarning, Blob as java_sql_Blob, Clob as java_sql_Clob, RowId as java_sql_RowId, NClob as java_sql_NClob, SQLXML as java_sql_SQLXML, Timestamp as java_sql_Timestamp, Wrapper as java_sql_Wrapper } from 'java.sql';
import { URL as java_net_URL } from 'java.net';
import { BigDecimal as java_math_BigDecimal } from 'java.math';
import { Reader as java_io_Reader, InputStream as java_io_InputStream } from 'java.io';

  export class ResultSet implements java_sql_Wrapper, java_lang_AutoCloseable {
array: java_sql_Array;
array: java_sql_Array;
asciiStream: java_io_InputStream;
asciiStream: java_io_InputStream;
bigDecimal: java_math_BigDecimal;
bigDecimal: java_math_BigDecimal;
bigDecimal: java_math_BigDecimal;
bigDecimal: java_math_BigDecimal;
binaryStream: java_io_InputStream;
binaryStream: java_io_InputStream;
blob: java_sql_Blob;
blob: java_sql_Blob;
boolean: boolean;
boolean: boolean;
byte: number;
byte: number;
bytes: JArray<number>;
bytes: JArray<number>;
characterStream: java_io_Reader;
characterStream: java_io_Reader;
clob: java_sql_Clob;
clob: java_sql_Clob;
concurrency: number;
cursorName: string;
date: java_sql_Date;
date: java_sql_Date;
date: java_sql_Date;
date: java_sql_Date;
double: number;
double: number;
fetchDirection: number;
fetchSize: number;
float: number;
float: number;
holdability: number;
int: number;
int: number;
long: number;
long: number;
metaData: java_sql_ResultSetMetaData;
nCharacterStream: java_io_Reader;
nCharacterStream: java_io_Reader;
nClob: java_sql_NClob;
nClob: java_sql_NClob;
nString: string;
nString: string;
object: T;
object: T;
object: java_lang_Object;
object: java_lang_Object;
object: java_lang_Object;
object: java_lang_Object;
ref: java_sql_Ref;
ref: java_sql_Ref;
row: number;
rowId: java_sql_RowId;
rowId: java_sql_RowId;
sQLXML: java_sql_SQLXML;
sQLXML: java_sql_SQLXML;
short: number;
short: number;
statement: java_sql_Statement;
static CLOSE_CURSORS_AT_COMMIT: number;
static CONCUR_READ_ONLY: number;
static CONCUR_UPDATABLE: number;
static FETCH_FORWARD: number;
static FETCH_REVERSE: number;
static FETCH_UNKNOWN: number;
static HOLD_CURSORS_OVER_COMMIT: number;
static TYPE_FORWARD_ONLY: number;
static TYPE_SCROLL_INSENSITIVE: number;
static TYPE_SCROLL_SENSITIVE: number;
string: string;
string: string;
time: java_sql_Time;
time: java_sql_Time;
time: java_sql_Time;
time: java_sql_Time;
timestamp: java_sql_Timestamp;
timestamp: java_sql_Timestamp;
timestamp: java_sql_Timestamp;
timestamp: java_sql_Timestamp;
type: number;
uRL: java_net_URL;
uRL: java_net_URL;
unicodeStream: java_io_InputStream;
unicodeStream: java_io_InputStream;
warnings: java_sql_SQLWarning;
absolute(arg0: number): boolean;
afterLast(): void;
beforeFirst(): void;
cancelRowUpdates(): void;
clearWarnings(): void;
close(): void;
deleteRow(): void;
findColumn(arg0: string): number;
first(): boolean;
getArray(arg0: number): java_sql_Array;
getArray(arg0: string): java_sql_Array;
getAsciiStream(arg0: number): java_io_InputStream;
getAsciiStream(arg0: string): java_io_InputStream;
getBigDecimal(arg0: number): java_math_BigDecimal;
getBigDecimal(arg0: number, arg1: number): java_math_BigDecimal;
getBigDecimal(arg0: string): java_math_BigDecimal;
getBigDecimal(arg0: string, arg1: number): java_math_BigDecimal;
getBinaryStream(arg0: number): java_io_InputStream;
getBinaryStream(arg0: string): java_io_InputStream;
getBlob(arg0: number): java_sql_Blob;
getBlob(arg0: string): java_sql_Blob;
getBoolean(arg0: number): boolean;
getBoolean(arg0: string): boolean;
getByte(arg0: number): number;
getByte(arg0: string): number;
getBytes(arg0: number): JArray<number>;
getBytes(arg0: string): JArray<number>;
getCharacterStream(arg0: number): java_io_Reader;
getCharacterStream(arg0: string): java_io_Reader;
getClob(arg0: number): java_sql_Clob;
getClob(arg0: string): java_sql_Clob;
getConcurrency(): number;
getCursorName(): string;
getDate(arg0: number): java_sql_Date;
getDate(arg0: number, arg1: java_util_Calendar): java_sql_Date;
getDate(arg0: string): java_sql_Date;
getDate(arg0: string, arg1: java_util_Calendar): java_sql_Date;
getDouble(arg0: number): number;
getDouble(arg0: string): number;
getFetchDirection(): number;
getFetchSize(): number;
getFloat(arg0: number): number;
getFloat(arg0: string): number;
getHoldability(): number;
getInt(arg0: number): number;
getInt(arg0: string): number;
getLong(arg0: number): number;
getLong(arg0: string): number;
getMetaData(): java_sql_ResultSetMetaData;
getNCharacterStream(arg0: number): java_io_Reader;
getNCharacterStream(arg0: string): java_io_Reader;
getNClob(arg0: number): java_sql_NClob;
getNClob(arg0: string): java_sql_NClob;
getNString(arg0: number): string;
getNString(arg0: string): string;
getObject(arg0: number): java_lang_Object;
getObject(arg0: number, arg1: java_util_Map<string, java_lang_Class<java_lang_Object>>): java_lang_Object;
getObject(arg0: string): java_lang_Object;
getObject(arg0: string, arg1: java_util_Map<string, java_lang_Class<java_lang_Object>>): java_lang_Object;
getObject<T extends java_lang_Object>(arg0: number, arg1: java_lang_Class<T>): T;
getObject<T extends java_lang_Object>(arg0: string, arg1: java_lang_Class<T>): T;
getRef(arg0: number): java_sql_Ref;
getRef(arg0: string): java_sql_Ref;
getRow(): number;
getRowId(arg0: number): java_sql_RowId;
getRowId(arg0: string): java_sql_RowId;
getSQLXML(arg0: number): java_sql_SQLXML;
getSQLXML(arg0: string): java_sql_SQLXML;
getShort(arg0: number): number;
getShort(arg0: string): number;
getStatement(): java_sql_Statement;
getString(arg0: number): string;
getString(arg0: string): string;
getTime(arg0: number): java_sql_Time;
getTime(arg0: number, arg1: java_util_Calendar): java_sql_Time;
getTime(arg0: string): java_sql_Time;
getTime(arg0: string, arg1: java_util_Calendar): java_sql_Time;
getTimestamp(arg0: number): java_sql_Timestamp;
getTimestamp(arg0: number, arg1: java_util_Calendar): java_sql_Timestamp;
getTimestamp(arg0: string): java_sql_Timestamp;
getTimestamp(arg0: string, arg1: java_util_Calendar): java_sql_Timestamp;
getType(): number;
getURL(arg0: number): java_net_URL;
getURL(arg0: string): java_net_URL;
getUnicodeStream(arg0: number): java_io_InputStream;
getUnicodeStream(arg0: string): java_io_InputStream;
getWarnings(): java_sql_SQLWarning;
insertRow(): void;
isAfterLast(): boolean;
isBeforeFirst(): boolean;
isClosed(): boolean;
isFirst(): boolean;
isLast(): boolean;
isWrapperFor(arg0: java_lang_Class<java_lang_Object>): boolean;
last(): boolean;
moveToCurrentRow(): void;
moveToInsertRow(): void;
next(): boolean;
previous(): boolean;
refreshRow(): void;
relative(arg0: number): boolean;
rowDeleted(): boolean;
rowInserted(): boolean;
rowUpdated(): boolean;
setFetchDirection(arg0: number): void;
setFetchSize(arg0: number): void;
unwrap<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;
updateArray(arg0: number, arg1: java_sql_Array): void;
updateArray(arg0: string, arg1: java_sql_Array): void;
updateAsciiStream(arg0: number, arg1: java_io_InputStream): void;
updateAsciiStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
updateAsciiStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
updateAsciiStream(arg0: string, arg1: java_io_InputStream): void;
updateAsciiStream(arg0: string, arg1: java_io_InputStream, arg2: number): void;
updateAsciiStream(arg0: string, arg1: java_io_InputStream, arg2: number): void;
updateBigDecimal(arg0: number, arg1: java_math_BigDecimal): void;
updateBigDecimal(arg0: string, arg1: java_math_BigDecimal): void;
updateBinaryStream(arg0: number, arg1: java_io_InputStream): void;
updateBinaryStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
updateBinaryStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
updateBinaryStream(arg0: string, arg1: java_io_InputStream): void;
updateBinaryStream(arg0: string, arg1: java_io_InputStream, arg2: number): void;
updateBinaryStream(arg0: string, arg1: java_io_InputStream, arg2: number): void;
updateBlob(arg0: number, arg1: java_io_InputStream): void;
updateBlob(arg0: number, arg1: java_io_InputStream, arg2: number): void;
updateBlob(arg0: number, arg1: java_sql_Blob): void;
updateBlob(arg0: string, arg1: java_io_InputStream): void;
updateBlob(arg0: string, arg1: java_io_InputStream, arg2: number): void;
updateBlob(arg0: string, arg1: java_sql_Blob): void;
updateBoolean(arg0: number, arg1: boolean): void;
updateBoolean(arg0: string, arg1: boolean): void;
updateByte(arg0: number, arg1: number): void;
updateByte(arg0: string, arg1: number): void;
updateBytes(arg0: number, arg1: JArray<number>): void;
updateBytes(arg0: string, arg1: JArray<number>): void;
updateCharacterStream(arg0: number, arg1: java_io_Reader): void;
updateCharacterStream(arg0: number, arg1: java_io_Reader, arg2: number): void;
updateCharacterStream(arg0: number, arg1: java_io_Reader, arg2: number): void;
updateCharacterStream(arg0: string, arg1: java_io_Reader): void;
updateCharacterStream(arg0: string, arg1: java_io_Reader, arg2: number): void;
updateCharacterStream(arg0: string, arg1: java_io_Reader, arg2: number): void;
updateClob(arg0: number, arg1: java_io_Reader): void;
updateClob(arg0: number, arg1: java_io_Reader, arg2: number): void;
updateClob(arg0: number, arg1: java_sql_Clob): void;
updateClob(arg0: string, arg1: java_io_Reader): void;
updateClob(arg0: string, arg1: java_io_Reader, arg2: number): void;
updateClob(arg0: string, arg1: java_sql_Clob): void;
updateDate(arg0: number, arg1: java_sql_Date): void;
updateDate(arg0: string, arg1: java_sql_Date): void;
updateDouble(arg0: number, arg1: number): void;
updateDouble(arg0: string, arg1: number): void;
updateFloat(arg0: number, arg1: number): void;
updateFloat(arg0: string, arg1: number): void;
updateInt(arg0: number, arg1: number): void;
updateInt(arg0: string, arg1: number): void;
updateLong(arg0: number, arg1: number): void;
updateLong(arg0: string, arg1: number): void;
updateNCharacterStream(arg0: number, arg1: java_io_Reader): void;
updateNCharacterStream(arg0: number, arg1: java_io_Reader, arg2: number): void;
updateNCharacterStream(arg0: string, arg1: java_io_Reader): void;
updateNCharacterStream(arg0: string, arg1: java_io_Reader, arg2: number): void;
updateNClob(arg0: number, arg1: java_io_Reader): void;
updateNClob(arg0: number, arg1: java_io_Reader, arg2: number): void;
updateNClob(arg0: number, arg1: java_sql_NClob): void;
updateNClob(arg0: string, arg1: java_io_Reader): void;
updateNClob(arg0: string, arg1: java_io_Reader, arg2: number): void;
updateNClob(arg0: string, arg1: java_sql_NClob): void;
updateNString(arg0: number, arg1: string): void;
updateNString(arg0: string, arg1: string): void;
updateNull(arg0: number): void;
updateNull(arg0: string): void;
updateObject(arg0: number, arg1: java_lang_Object): void;
updateObject(arg0: number, arg1: java_lang_Object, arg2: java_sql_SQLType): void;
updateObject(arg0: number, arg1: java_lang_Object, arg2: java_sql_SQLType, arg3: number): void;
updateObject(arg0: number, arg1: java_lang_Object, arg2: number): void;
updateObject(arg0: string, arg1: java_lang_Object): void;
updateObject(arg0: string, arg1: java_lang_Object, arg2: java_sql_SQLType): void;
updateObject(arg0: string, arg1: java_lang_Object, arg2: java_sql_SQLType, arg3: number): void;
updateObject(arg0: string, arg1: java_lang_Object, arg2: number): void;
updateRef(arg0: number, arg1: java_sql_Ref): void;
updateRef(arg0: string, arg1: java_sql_Ref): void;
updateRow(): void;
updateRowId(arg0: number, arg1: java_sql_RowId): void;
updateRowId(arg0: string, arg1: java_sql_RowId): void;
updateSQLXML(arg0: number, arg1: java_sql_SQLXML): void;
updateSQLXML(arg0: string, arg1: java_sql_SQLXML): void;
updateShort(arg0: number, arg1: number): void;
updateShort(arg0: string, arg1: number): void;
updateString(arg0: number, arg1: string): void;
updateString(arg0: string, arg1: string): void;
updateTime(arg0: number, arg1: java_sql_Time): void;
updateTime(arg0: string, arg1: java_sql_Time): void;
updateTimestamp(arg0: number, arg1: java_sql_Timestamp): void;
updateTimestamp(arg0: string, arg1: java_sql_Timestamp): void;
wasNull(): boolean;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Map as java_util_Map } from 'java.util';

  export class Ref {
baseTypeName: string;
object: java_lang_Object;
object: java_lang_Object;
getBaseTypeName(): string;
getObject(): java_lang_Object;
getObject(arg0: java_util_Map<string, java_lang_Class<java_lang_Object>>): java_lang_Object;
setObject(arg0: java_lang_Object): void;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Map as java_util_Map } from 'java.util';
import { ResultSet as java_sql_ResultSet } from 'java.sql';

  export class Array {
array: java_lang_Object;
array: java_lang_Object;
array: java_lang_Object;
array: java_lang_Object;
baseType: number;
baseTypeName: string;
resultSet: java_sql_ResultSet;
resultSet: java_sql_ResultSet;
resultSet: java_sql_ResultSet;
resultSet: java_sql_ResultSet;
free(): void;
getArray(): java_lang_Object;
getArray(arg0: java_util_Map<string, java_lang_Class<java_lang_Object>>): java_lang_Object;
getArray(arg0: number, arg1: number): java_lang_Object;
getArray(arg0: number, arg1: number, arg2: java_util_Map<string, java_lang_Class<java_lang_Object>>): java_lang_Object;
getBaseType(): number;
getBaseTypeName(): string;
getResultSet(): java_sql_ResultSet;
getResultSet(arg0: java_util_Map<string, java_lang_Class<java_lang_Object>>): java_sql_ResultSet;
getResultSet(arg0: number, arg1: number): java_sql_ResultSet;
getResultSet(arg0: number, arg1: number, arg2: java_util_Map<string, java_lang_Class<java_lang_Object>>): java_sql_ResultSet;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { LocalTime as java_time_LocalTime, Instant as java_time_Instant } from 'java.time';
import { Time as java_sql_Time } from 'java.sql';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Date as java_util_Date } from 'java.util';

  export class Time extends java_util_Date {
class: java_lang_Class<java_lang_Object>;
date: number;
day: number;
month: number;
year: number;
getClass(): java_lang_Class<java_lang_Object>;
getDate(): number;
getDay(): number;
getMonth(): number;
getYear(): number;
notify(): void;
notifyAll(): void;
setDate(arg0: number): void;
setMonth(arg0: number): void;
setTime(arg0: number): void;
setYear(arg0: number): void;
static valueOf(arg0: java_time_LocalTime): java_sql_Time;
static valueOf(arg0: string): java_sql_Time;
toInstant(): java_time_Instant;
toLocalTime(): java_time_LocalTime;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);
  }
}
//@ts-nocheck

declare module 'java.sql' {
import { LocalDate as java_time_LocalDate, Instant as java_time_Instant } from 'java.time';
import { Date as java_sql_Date } from 'java.sql';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Date as java_util_Date } from 'java.util';

  export class Date extends java_util_Date {
class: java_lang_Class<java_lang_Object>;
hours: number;
minutes: number;
seconds: number;
getClass(): java_lang_Class<java_lang_Object>;
getHours(): number;
getMinutes(): number;
getSeconds(): number;
notify(): void;
notifyAll(): void;
setHours(arg0: number): void;
setMinutes(arg0: number): void;
setSeconds(arg0: number): void;
setTime(arg0: number): void;
static valueOf(arg0: java_time_LocalDate): java_sql_Date;
static valueOf(arg0: string): java_sql_Date;
toInstant(): java_time_Instant;
toLocalDate(): java_time_LocalDate;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number);
  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Integer as java_lang_Integer } from 'java.lang';

  export class SQLType {
name: string;
vendor: string;
vendorTypeNumber: java_lang_Integer;
getName(): string;
getVendor(): string;
getVendorTypeNumber(): java_lang_Integer;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Wrapper as java_sql_Wrapper } from 'java.sql';

  export class ResultSetMetaData implements java_sql_Wrapper {
catalogName: string;
columnClassName: string;
columnCount: number;
columnDisplaySize: number;
columnLabel: string;
columnName: string;
columnType: number;
columnTypeName: string;
precision: number;
scale: number;
schemaName: string;
static columnNoNulls: number;
static columnNullable: number;
static columnNullableUnknown: number;
tableName: string;
getCatalogName(arg0: number): string;
getColumnClassName(arg0: number): string;
getColumnCount(): number;
getColumnDisplaySize(arg0: number): number;
getColumnLabel(arg0: number): string;
getColumnName(arg0: number): string;
getColumnType(arg0: number): number;
getColumnTypeName(arg0: number): string;
getPrecision(arg0: number): number;
getScale(arg0: number): number;
getSchemaName(arg0: number): string;
getTableName(arg0: number): string;
isAutoIncrement(arg0: number): boolean;
isCaseSensitive(arg0: number): boolean;
isCurrency(arg0: number): boolean;
isDefinitelyWritable(arg0: number): boolean;
isNullable(arg0: number): number;
isReadOnly(arg0: number): boolean;
isSearchable(arg0: number): boolean;
isSigned(arg0: number): boolean;
isWrapperFor(arg0: java_lang_Class<java_lang_Object>): boolean;
isWritable(arg0: number): boolean;
unwrap<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class Wrapper {

isWrapperFor(arg0: java_lang_Class<java_lang_Object>): boolean;
unwrap<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Blob as java_sql_Blob } from 'java.sql';
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream } from 'java.io';

  export class Blob {
binaryStream: java_io_InputStream;
binaryStream: java_io_InputStream;
bytes: JArray<number>;
free(): void;
getBinaryStream(): java_io_InputStream;
getBinaryStream(arg0: number, arg1: number): java_io_InputStream;
getBytes(arg0: number, arg1: number): JArray<number>;
length(): number;
position(arg0: JArray<number>, arg1: number): number;
position(arg0: java_sql_Blob, arg1: number): number;
setBinaryStream(arg0: number): java_io_OutputStream;
setBytes(arg0: number, arg1: JArray<number>): number;
setBytes(arg0: number, arg1: JArray<number>, arg2: number, arg3: number): number;
truncate(arg0: number): void;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Clob as java_sql_Clob } from 'java.sql';
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream, Writer as java_io_Writer, Reader as java_io_Reader } from 'java.io';

  export class Clob {
asciiStream: java_io_InputStream;
characterStream: java_io_Reader;
characterStream: java_io_Reader;
subString: string;
free(): void;
getAsciiStream(): java_io_InputStream;
getCharacterStream(): java_io_Reader;
getCharacterStream(arg0: number, arg1: number): java_io_Reader;
getSubString(arg0: number, arg1: number): string;
length(): number;
position(arg0: java_sql_Clob, arg1: number): number;
position(arg0: string, arg1: number): number;
setAsciiStream(arg0: number): java_io_OutputStream;
setCharacterStream(arg0: number): java_io_Writer;
setString(arg0: number, arg1: string): number;
setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
truncate(arg0: number): void;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Object as java_lang_Object } from 'java.lang';

  export class RowId {
bytes: JArray<number>;
equals(arg0: java_lang_Object): boolean;
getBytes(): JArray<number>;
hashCode(): number;
toString(): string;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Clob as java_sql_Clob } from 'java.sql';
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream, Writer as java_io_Writer, Reader as java_io_Reader } from 'java.io';

  export class NClob implements java_sql_Clob {
asciiStream: java_io_InputStream;
characterStream: java_io_Reader;
characterStream: java_io_Reader;
subString: string;
free(): void;
getAsciiStream(): java_io_InputStream;
getCharacterStream(): java_io_Reader;
getCharacterStream(arg0: number, arg1: number): java_io_Reader;
getSubString(arg0: number, arg1: number): string;
length(): number;
position(arg0: java_sql_Clob, arg1: number): number;
position(arg0: string, arg1: number): number;
setAsciiStream(arg0: number): java_io_OutputStream;
setCharacterStream(arg0: number): java_io_Writer;
setString(arg0: number, arg1: string): number;
setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
truncate(arg0: number): void;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Class as java_lang_Class } from 'java.lang';
import { Result as javax_xml_transform_Result, Source as javax_xml_transform_Source } from 'javax.xml.transform';
import { OutputStream as java_io_OutputStream, InputStream as java_io_InputStream, Writer as java_io_Writer, Reader as java_io_Reader } from 'java.io';

  export class SQLXML {
binaryStream: java_io_InputStream;
characterStream: java_io_Reader;
source: T;
string: string;
free(): void;
getBinaryStream(): java_io_InputStream;
getCharacterStream(): java_io_Reader;
getSource<T extends javax_xml_transform_Source>(arg0: java_lang_Class<T>): T;
getString(): string;
setBinaryStream(): java_io_OutputStream;
setCharacterStream(): java_io_Writer;
setResult<T extends javax_xml_transform_Result>(arg0: java_lang_Class<T>): T;
setString(arg0: string): void;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Timestamp as java_sql_Timestamp } from 'java.sql';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Date as java_util_Date } from 'java.util';
import { LocalDateTime as java_time_LocalDateTime, Instant as java_time_Instant } from 'java.time';

  export class Timestamp extends java_util_Date {
class: java_lang_Class<java_lang_Object>;
nanos: number;
time: number;
after(arg0: java_sql_Timestamp): boolean;
before(arg0: java_sql_Timestamp): boolean;
compareTo(arg0: java_lang_Object): number;
compareTo(arg0: java_sql_Timestamp): number;
compareTo(arg0: java_util_Date): number;
equals(arg0: java_lang_Object): boolean;
equals(arg0: java_sql_Timestamp): boolean;
getClass(): java_lang_Class<java_lang_Object>;
getNanos(): number;
getTime(): number;
hashCode(): number;
notify(): void;
notifyAll(): void;
setNanos(arg0: number): void;
setTime(arg0: number): void;
static from(arg0: java_time_Instant): java_sql_Timestamp;
static valueOf(arg0: java_time_LocalDateTime): java_sql_Timestamp;
static valueOf(arg0: string): java_sql_Timestamp;
toInstant(): java_time_Instant;
toLocalDateTime(): java_time_LocalDateTime;
toString(): string;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;
constructor(arg0: number);
constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Timestamp as java_sql_Timestamp, Array as java_sql_Array, Time as java_sql_Time, Date as java_sql_Date, ResultSetMetaData as java_sql_ResultSetMetaData, ResultSet as java_sql_ResultSet, Ref as java_sql_Ref, Blob as java_sql_Blob, ParameterMetaData as java_sql_ParameterMetaData, RowId as java_sql_RowId, NClob as java_sql_NClob, SQLXML as java_sql_SQLXML, SQLType as java_sql_SQLType, Clob as java_sql_Clob, SQLWarning as java_sql_SQLWarning, Connection as java_sql_Connection, Statement as java_sql_Statement } from 'java.sql';
import { Calendar as java_util_Calendar } from 'java.util';
import { URL as java_net_URL } from 'java.net';
import { BigDecimal as java_math_BigDecimal } from 'java.math';
import { InputStream as java_io_InputStream, Reader as java_io_Reader } from 'java.io';
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';

  export class PreparedStatement implements java_sql_Statement {
connection: java_sql_Connection;
fetchDirection: number;
fetchSize: number;
generatedKeys: java_sql_ResultSet;
largeMaxRows: number;
largeUpdateCount: number;
maxFieldSize: number;
maxRows: number;
metaData: java_sql_ResultSetMetaData;
moreResults: boolean;
moreResults: boolean;
parameterMetaData: java_sql_ParameterMetaData;
queryTimeout: number;
resultSet: java_sql_ResultSet;
resultSetConcurrency: number;
resultSetHoldability: number;
resultSetType: number;
updateCount: number;
warnings: java_sql_SQLWarning;
addBatch(): void;
addBatch(arg0: string): void;
cancel(): void;
clearBatch(): void;
clearParameters(): void;
clearWarnings(): void;
close(): void;
closeOnCompletion(): void;
enquoteIdentifier(arg0: string, arg1: boolean): string;
enquoteLiteral(arg0: string): string;
enquoteNCharLiteral(arg0: string): string;
execute(): boolean;
execute(arg0: string): boolean;
execute(arg0: string, arg1: JArray<number>): boolean;
execute(arg0: string, arg1: JArray<string>): boolean;
execute(arg0: string, arg1: number): boolean;
executeBatch(): JArray<number>;
executeLargeBatch(): JArray<number>;
executeLargeUpdate(): number;
executeLargeUpdate(arg0: string): number;
executeLargeUpdate(arg0: string, arg1: JArray<number>): number;
executeLargeUpdate(arg0: string, arg1: JArray<string>): number;
executeLargeUpdate(arg0: string, arg1: number): number;
executeQuery(): java_sql_ResultSet;
executeQuery(arg0: string): java_sql_ResultSet;
executeUpdate(): number;
executeUpdate(arg0: string): number;
executeUpdate(arg0: string, arg1: JArray<number>): number;
executeUpdate(arg0: string, arg1: JArray<string>): number;
executeUpdate(arg0: string, arg1: number): number;
getConnection(): java_sql_Connection;
getFetchDirection(): number;
getFetchSize(): number;
getGeneratedKeys(): java_sql_ResultSet;
getLargeMaxRows(): number;
getLargeUpdateCount(): number;
getMaxFieldSize(): number;
getMaxRows(): number;
getMetaData(): java_sql_ResultSetMetaData;
getMoreResults(): boolean;
getMoreResults(arg0: number): boolean;
getParameterMetaData(): java_sql_ParameterMetaData;
getQueryTimeout(): number;
getResultSet(): java_sql_ResultSet;
getResultSetConcurrency(): number;
getResultSetHoldability(): number;
getResultSetType(): number;
getUpdateCount(): number;
getWarnings(): java_sql_SQLWarning;
isCloseOnCompletion(): boolean;
isClosed(): boolean;
isPoolable(): boolean;
isSimpleIdentifier(arg0: string): boolean;
isWrapperFor(arg0: java_lang_Class<java_lang_Object>): boolean;
setArray(arg0: number, arg1: java_sql_Array): void;
setAsciiStream(arg0: number, arg1: java_io_InputStream): void;
setAsciiStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setAsciiStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setBigDecimal(arg0: number, arg1: java_math_BigDecimal): void;
setBinaryStream(arg0: number, arg1: java_io_InputStream): void;
setBinaryStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setBinaryStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setBlob(arg0: number, arg1: java_io_InputStream): void;
setBlob(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setBlob(arg0: number, arg1: java_sql_Blob): void;
setBoolean(arg0: number, arg1: boolean): void;
setByte(arg0: number, arg1: number): void;
setBytes(arg0: number, arg1: JArray<number>): void;
setCharacterStream(arg0: number, arg1: java_io_Reader): void;
setCharacterStream(arg0: number, arg1: java_io_Reader, arg2: number): void;
setCharacterStream(arg0: number, arg1: java_io_Reader, arg2: number): void;
setClob(arg0: number, arg1: java_io_Reader): void;
setClob(arg0: number, arg1: java_io_Reader, arg2: number): void;
setClob(arg0: number, arg1: java_sql_Clob): void;
setCursorName(arg0: string): void;
setDate(arg0: number, arg1: java_sql_Date): void;
setDate(arg0: number, arg1: java_sql_Date, arg2: java_util_Calendar): void;
setDouble(arg0: number, arg1: number): void;
setEscapeProcessing(arg0: boolean): void;
setFetchDirection(arg0: number): void;
setFetchSize(arg0: number): void;
setFloat(arg0: number, arg1: number): void;
setInt(arg0: number, arg1: number): void;
setLargeMaxRows(arg0: number): void;
setLong(arg0: number, arg1: number): void;
setMaxFieldSize(arg0: number): void;
setMaxRows(arg0: number): void;
setNCharacterStream(arg0: number, arg1: java_io_Reader): void;
setNCharacterStream(arg0: number, arg1: java_io_Reader, arg2: number): void;
setNClob(arg0: number, arg1: java_io_Reader): void;
setNClob(arg0: number, arg1: java_io_Reader, arg2: number): void;
setNClob(arg0: number, arg1: java_sql_NClob): void;
setNString(arg0: number, arg1: string): void;
setNull(arg0: number, arg1: number): void;
setNull(arg0: number, arg1: number, arg2: string): void;
setObject(arg0: number, arg1: java_lang_Object): void;
setObject(arg0: number, arg1: java_lang_Object, arg2: java_sql_SQLType): void;
setObject(arg0: number, arg1: java_lang_Object, arg2: java_sql_SQLType, arg3: number): void;
setObject(arg0: number, arg1: java_lang_Object, arg2: number): void;
setObject(arg0: number, arg1: java_lang_Object, arg2: number, arg3: number): void;
setPoolable(arg0: boolean): void;
setQueryTimeout(arg0: number): void;
setRef(arg0: number, arg1: java_sql_Ref): void;
setRowId(arg0: number, arg1: java_sql_RowId): void;
setSQLXML(arg0: number, arg1: java_sql_SQLXML): void;
setShort(arg0: number, arg1: number): void;
setString(arg0: number, arg1: string): void;
setTime(arg0: number, arg1: java_sql_Time): void;
setTime(arg0: number, arg1: java_sql_Time, arg2: java_util_Calendar): void;
setTimestamp(arg0: number, arg1: java_sql_Timestamp): void;
setTimestamp(arg0: number, arg1: java_sql_Timestamp, arg2: java_util_Calendar): void;
setURL(arg0: number, arg1: java_net_URL): void;
setUnicodeStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
unwrap<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';
import { Wrapper as java_sql_Wrapper } from 'java.sql';

  export class ParameterMetaData implements java_sql_Wrapper {
parameterClassName: string;
parameterCount: number;
parameterMode: number;
parameterType: number;
parameterTypeName: string;
precision: number;
scale: number;
static parameterModeIn: number;
static parameterModeInOut: number;
static parameterModeOut: number;
static parameterModeUnknown: number;
static parameterNoNulls: number;
static parameterNullable: number;
static parameterNullableUnknown: number;
getParameterClassName(arg0: number): string;
getParameterCount(): number;
getParameterMode(arg0: number): number;
getParameterType(arg0: number): number;
getParameterTypeName(arg0: number): string;
getPrecision(arg0: number): number;
getScale(arg0: number): number;
isNullable(arg0: number): number;
isSigned(arg0: number): boolean;
isWrapperFor(arg0: java_lang_Class<java_lang_Object>): boolean;
unwrap<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Map as java_util_Map, Calendar as java_util_Calendar } from 'java.util';
import { Ref as java_sql_Ref, Timestamp as java_sql_Timestamp, Array as java_sql_Array, Time as java_sql_Time, Date as java_sql_Date, Blob as java_sql_Blob, RowId as java_sql_RowId, NClob as java_sql_NClob, SQLXML as java_sql_SQLXML, SQLType as java_sql_SQLType, Clob as java_sql_Clob, ResultSetMetaData as java_sql_ResultSetMetaData, ResultSet as java_sql_ResultSet, ParameterMetaData as java_sql_ParameterMetaData, SQLWarning as java_sql_SQLWarning, Connection as java_sql_Connection, PreparedStatement as java_sql_PreparedStatement } from 'java.sql';
import { URL as java_net_URL } from 'java.net';
import { BigDecimal as java_math_BigDecimal } from 'java.math';
import { InputStream as java_io_InputStream, Reader as java_io_Reader } from 'java.io';

  export class CallableStatement implements java_sql_PreparedStatement {
array: java_sql_Array;
array: java_sql_Array;
bigDecimal: java_math_BigDecimal;
bigDecimal: java_math_BigDecimal;
bigDecimal: java_math_BigDecimal;
blob: java_sql_Blob;
blob: java_sql_Blob;
boolean: boolean;
boolean: boolean;
byte: number;
byte: number;
bytes: JArray<number>;
bytes: JArray<number>;
characterStream: java_io_Reader;
characterStream: java_io_Reader;
clob: java_sql_Clob;
clob: java_sql_Clob;
connection: java_sql_Connection;
date: java_sql_Date;
date: java_sql_Date;
date: java_sql_Date;
date: java_sql_Date;
double: number;
double: number;
fetchDirection: number;
fetchSize: number;
float: number;
float: number;
generatedKeys: java_sql_ResultSet;
int: number;
int: number;
largeMaxRows: number;
largeUpdateCount: number;
long: number;
long: number;
maxFieldSize: number;
maxRows: number;
metaData: java_sql_ResultSetMetaData;
moreResults: boolean;
moreResults: boolean;
nCharacterStream: java_io_Reader;
nCharacterStream: java_io_Reader;
nClob: java_sql_NClob;
nClob: java_sql_NClob;
nString: string;
nString: string;
object: T;
object: T;
object: java_lang_Object;
object: java_lang_Object;
object: java_lang_Object;
object: java_lang_Object;
parameterMetaData: java_sql_ParameterMetaData;
queryTimeout: number;
ref: java_sql_Ref;
ref: java_sql_Ref;
resultSet: java_sql_ResultSet;
resultSetConcurrency: number;
resultSetHoldability: number;
resultSetType: number;
rowId: java_sql_RowId;
rowId: java_sql_RowId;
sQLXML: java_sql_SQLXML;
sQLXML: java_sql_SQLXML;
short: number;
short: number;
string: string;
string: string;
time: java_sql_Time;
time: java_sql_Time;
time: java_sql_Time;
time: java_sql_Time;
timestamp: java_sql_Timestamp;
timestamp: java_sql_Timestamp;
timestamp: java_sql_Timestamp;
timestamp: java_sql_Timestamp;
uRL: java_net_URL;
uRL: java_net_URL;
updateCount: number;
warnings: java_sql_SQLWarning;
addBatch(): void;
addBatch(arg0: string): void;
cancel(): void;
clearBatch(): void;
clearParameters(): void;
clearWarnings(): void;
close(): void;
closeOnCompletion(): void;
enquoteIdentifier(arg0: string, arg1: boolean): string;
enquoteLiteral(arg0: string): string;
enquoteNCharLiteral(arg0: string): string;
execute(): boolean;
execute(arg0: string): boolean;
execute(arg0: string, arg1: JArray<number>): boolean;
execute(arg0: string, arg1: JArray<string>): boolean;
execute(arg0: string, arg1: number): boolean;
executeBatch(): JArray<number>;
executeLargeBatch(): JArray<number>;
executeLargeUpdate(): number;
executeLargeUpdate(arg0: string): number;
executeLargeUpdate(arg0: string, arg1: JArray<number>): number;
executeLargeUpdate(arg0: string, arg1: JArray<string>): number;
executeLargeUpdate(arg0: string, arg1: number): number;
executeQuery(): java_sql_ResultSet;
executeQuery(arg0: string): java_sql_ResultSet;
executeUpdate(): number;
executeUpdate(arg0: string): number;
executeUpdate(arg0: string, arg1: JArray<number>): number;
executeUpdate(arg0: string, arg1: JArray<string>): number;
executeUpdate(arg0: string, arg1: number): number;
getArray(arg0: number): java_sql_Array;
getArray(arg0: string): java_sql_Array;
getBigDecimal(arg0: number): java_math_BigDecimal;
getBigDecimal(arg0: number, arg1: number): java_math_BigDecimal;
getBigDecimal(arg0: string): java_math_BigDecimal;
getBlob(arg0: number): java_sql_Blob;
getBlob(arg0: string): java_sql_Blob;
getBoolean(arg0: number): boolean;
getBoolean(arg0: string): boolean;
getByte(arg0: number): number;
getByte(arg0: string): number;
getBytes(arg0: number): JArray<number>;
getBytes(arg0: string): JArray<number>;
getCharacterStream(arg0: number): java_io_Reader;
getCharacterStream(arg0: string): java_io_Reader;
getClob(arg0: number): java_sql_Clob;
getClob(arg0: string): java_sql_Clob;
getConnection(): java_sql_Connection;
getDate(arg0: number): java_sql_Date;
getDate(arg0: number, arg1: java_util_Calendar): java_sql_Date;
getDate(arg0: string): java_sql_Date;
getDate(arg0: string, arg1: java_util_Calendar): java_sql_Date;
getDouble(arg0: number): number;
getDouble(arg0: string): number;
getFetchDirection(): number;
getFetchSize(): number;
getFloat(arg0: number): number;
getFloat(arg0: string): number;
getGeneratedKeys(): java_sql_ResultSet;
getInt(arg0: number): number;
getInt(arg0: string): number;
getLargeMaxRows(): number;
getLargeUpdateCount(): number;
getLong(arg0: number): number;
getLong(arg0: string): number;
getMaxFieldSize(): number;
getMaxRows(): number;
getMetaData(): java_sql_ResultSetMetaData;
getMoreResults(): boolean;
getMoreResults(arg0: number): boolean;
getNCharacterStream(arg0: number): java_io_Reader;
getNCharacterStream(arg0: string): java_io_Reader;
getNClob(arg0: number): java_sql_NClob;
getNClob(arg0: string): java_sql_NClob;
getNString(arg0: number): string;
getNString(arg0: string): string;
getObject(arg0: number): java_lang_Object;
getObject(arg0: number, arg1: java_util_Map<string, java_lang_Class<java_lang_Object>>): java_lang_Object;
getObject(arg0: string): java_lang_Object;
getObject(arg0: string, arg1: java_util_Map<string, java_lang_Class<java_lang_Object>>): java_lang_Object;
getObject<T extends java_lang_Object>(arg0: number, arg1: java_lang_Class<T>): T;
getObject<T extends java_lang_Object>(arg0: string, arg1: java_lang_Class<T>): T;
getParameterMetaData(): java_sql_ParameterMetaData;
getQueryTimeout(): number;
getRef(arg0: number): java_sql_Ref;
getRef(arg0: string): java_sql_Ref;
getResultSet(): java_sql_ResultSet;
getResultSetConcurrency(): number;
getResultSetHoldability(): number;
getResultSetType(): number;
getRowId(arg0: number): java_sql_RowId;
getRowId(arg0: string): java_sql_RowId;
getSQLXML(arg0: number): java_sql_SQLXML;
getSQLXML(arg0: string): java_sql_SQLXML;
getShort(arg0: number): number;
getShort(arg0: string): number;
getString(arg0: number): string;
getString(arg0: string): string;
getTime(arg0: number): java_sql_Time;
getTime(arg0: number, arg1: java_util_Calendar): java_sql_Time;
getTime(arg0: string): java_sql_Time;
getTime(arg0: string, arg1: java_util_Calendar): java_sql_Time;
getTimestamp(arg0: number): java_sql_Timestamp;
getTimestamp(arg0: number, arg1: java_util_Calendar): java_sql_Timestamp;
getTimestamp(arg0: string): java_sql_Timestamp;
getTimestamp(arg0: string, arg1: java_util_Calendar): java_sql_Timestamp;
getURL(arg0: number): java_net_URL;
getURL(arg0: string): java_net_URL;
getUpdateCount(): number;
getWarnings(): java_sql_SQLWarning;
isCloseOnCompletion(): boolean;
isClosed(): boolean;
isPoolable(): boolean;
isSimpleIdentifier(arg0: string): boolean;
isWrapperFor(arg0: java_lang_Class<java_lang_Object>): boolean;
registerOutParameter(arg0: number, arg1: java_sql_SQLType): void;
registerOutParameter(arg0: number, arg1: java_sql_SQLType, arg2: number): void;
registerOutParameter(arg0: number, arg1: java_sql_SQLType, arg2: string): void;
registerOutParameter(arg0: number, arg1: number): void;
registerOutParameter(arg0: number, arg1: number, arg2: number): void;
registerOutParameter(arg0: number, arg1: number, arg2: string): void;
registerOutParameter(arg0: string, arg1: java_sql_SQLType): void;
registerOutParameter(arg0: string, arg1: java_sql_SQLType, arg2: number): void;
registerOutParameter(arg0: string, arg1: java_sql_SQLType, arg2: string): void;
registerOutParameter(arg0: string, arg1: number): void;
registerOutParameter(arg0: string, arg1: number, arg2: number): void;
registerOutParameter(arg0: string, arg1: number, arg2: string): void;
setArray(arg0: number, arg1: java_sql_Array): void;
setAsciiStream(arg0: number, arg1: java_io_InputStream): void;
setAsciiStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setAsciiStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setAsciiStream(arg0: string, arg1: java_io_InputStream): void;
setAsciiStream(arg0: string, arg1: java_io_InputStream, arg2: number): void;
setAsciiStream(arg0: string, arg1: java_io_InputStream, arg2: number): void;
setBigDecimal(arg0: number, arg1: java_math_BigDecimal): void;
setBigDecimal(arg0: string, arg1: java_math_BigDecimal): void;
setBinaryStream(arg0: number, arg1: java_io_InputStream): void;
setBinaryStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setBinaryStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setBinaryStream(arg0: string, arg1: java_io_InputStream): void;
setBinaryStream(arg0: string, arg1: java_io_InputStream, arg2: number): void;
setBinaryStream(arg0: string, arg1: java_io_InputStream, arg2: number): void;
setBlob(arg0: number, arg1: java_io_InputStream): void;
setBlob(arg0: number, arg1: java_io_InputStream, arg2: number): void;
setBlob(arg0: number, arg1: java_sql_Blob): void;
setBlob(arg0: string, arg1: java_io_InputStream): void;
setBlob(arg0: string, arg1: java_io_InputStream, arg2: number): void;
setBlob(arg0: string, arg1: java_sql_Blob): void;
setBoolean(arg0: number, arg1: boolean): void;
setBoolean(arg0: string, arg1: boolean): void;
setByte(arg0: number, arg1: number): void;
setByte(arg0: string, arg1: number): void;
setBytes(arg0: number, arg1: JArray<number>): void;
setBytes(arg0: string, arg1: JArray<number>): void;
setCharacterStream(arg0: number, arg1: java_io_Reader): void;
setCharacterStream(arg0: number, arg1: java_io_Reader, arg2: number): void;
setCharacterStream(arg0: number, arg1: java_io_Reader, arg2: number): void;
setCharacterStream(arg0: string, arg1: java_io_Reader): void;
setCharacterStream(arg0: string, arg1: java_io_Reader, arg2: number): void;
setCharacterStream(arg0: string, arg1: java_io_Reader, arg2: number): void;
setClob(arg0: number, arg1: java_io_Reader): void;
setClob(arg0: number, arg1: java_io_Reader, arg2: number): void;
setClob(arg0: number, arg1: java_sql_Clob): void;
setClob(arg0: string, arg1: java_io_Reader): void;
setClob(arg0: string, arg1: java_io_Reader, arg2: number): void;
setClob(arg0: string, arg1: java_sql_Clob): void;
setCursorName(arg0: string): void;
setDate(arg0: number, arg1: java_sql_Date): void;
setDate(arg0: number, arg1: java_sql_Date, arg2: java_util_Calendar): void;
setDate(arg0: string, arg1: java_sql_Date): void;
setDate(arg0: string, arg1: java_sql_Date, arg2: java_util_Calendar): void;
setDouble(arg0: number, arg1: number): void;
setDouble(arg0: string, arg1: number): void;
setEscapeProcessing(arg0: boolean): void;
setFetchDirection(arg0: number): void;
setFetchSize(arg0: number): void;
setFloat(arg0: number, arg1: number): void;
setFloat(arg0: string, arg1: number): void;
setInt(arg0: number, arg1: number): void;
setInt(arg0: string, arg1: number): void;
setLargeMaxRows(arg0: number): void;
setLong(arg0: number, arg1: number): void;
setLong(arg0: string, arg1: number): void;
setMaxFieldSize(arg0: number): void;
setMaxRows(arg0: number): void;
setNCharacterStream(arg0: number, arg1: java_io_Reader): void;
setNCharacterStream(arg0: number, arg1: java_io_Reader, arg2: number): void;
setNCharacterStream(arg0: string, arg1: java_io_Reader): void;
setNCharacterStream(arg0: string, arg1: java_io_Reader, arg2: number): void;
setNClob(arg0: number, arg1: java_io_Reader): void;
setNClob(arg0: number, arg1: java_io_Reader, arg2: number): void;
setNClob(arg0: number, arg1: java_sql_NClob): void;
setNClob(arg0: string, arg1: java_io_Reader): void;
setNClob(arg0: string, arg1: java_io_Reader, arg2: number): void;
setNClob(arg0: string, arg1: java_sql_NClob): void;
setNString(arg0: number, arg1: string): void;
setNString(arg0: string, arg1: string): void;
setNull(arg0: number, arg1: number): void;
setNull(arg0: number, arg1: number, arg2: string): void;
setNull(arg0: string, arg1: number): void;
setNull(arg0: string, arg1: number, arg2: string): void;
setObject(arg0: number, arg1: java_lang_Object): void;
setObject(arg0: number, arg1: java_lang_Object, arg2: java_sql_SQLType): void;
setObject(arg0: number, arg1: java_lang_Object, arg2: java_sql_SQLType, arg3: number): void;
setObject(arg0: number, arg1: java_lang_Object, arg2: number): void;
setObject(arg0: number, arg1: java_lang_Object, arg2: number, arg3: number): void;
setObject(arg0: string, arg1: java_lang_Object): void;
setObject(arg0: string, arg1: java_lang_Object, arg2: java_sql_SQLType): void;
setObject(arg0: string, arg1: java_lang_Object, arg2: java_sql_SQLType, arg3: number): void;
setObject(arg0: string, arg1: java_lang_Object, arg2: number): void;
setObject(arg0: string, arg1: java_lang_Object, arg2: number, arg3: number): void;
setPoolable(arg0: boolean): void;
setQueryTimeout(arg0: number): void;
setRef(arg0: number, arg1: java_sql_Ref): void;
setRowId(arg0: number, arg1: java_sql_RowId): void;
setRowId(arg0: string, arg1: java_sql_RowId): void;
setSQLXML(arg0: number, arg1: java_sql_SQLXML): void;
setSQLXML(arg0: string, arg1: java_sql_SQLXML): void;
setShort(arg0: number, arg1: number): void;
setShort(arg0: string, arg1: number): void;
setString(arg0: number, arg1: string): void;
setString(arg0: string, arg1: string): void;
setTime(arg0: number, arg1: java_sql_Time): void;
setTime(arg0: number, arg1: java_sql_Time, arg2: java_util_Calendar): void;
setTime(arg0: string, arg1: java_sql_Time): void;
setTime(arg0: string, arg1: java_sql_Time, arg2: java_util_Calendar): void;
setTimestamp(arg0: number, arg1: java_sql_Timestamp): void;
setTimestamp(arg0: number, arg1: java_sql_Timestamp, arg2: java_util_Calendar): void;
setTimestamp(arg0: string, arg1: java_sql_Timestamp): void;
setTimestamp(arg0: string, arg1: java_sql_Timestamp, arg2: java_util_Calendar): void;
setURL(arg0: number, arg1: java_net_URL): void;
setURL(arg0: string, arg1: java_net_URL): void;
setUnicodeStream(arg0: number, arg1: java_io_InputStream, arg2: number): void;
unwrap<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;
wasNull(): boolean;

  }
}
//@ts-nocheck

declare module 'java.sql' {


  export class Savepoint {
savepointId: number;
savepointName: string;
getSavepointId(): number;
getSavepointName(): string;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { ResultSet as java_sql_ResultSet, RowIdLifetime as java_sql_RowIdLifetime, Connection as java_sql_Connection, Wrapper as java_sql_Wrapper } from 'java.sql';
import { Class as java_lang_Class, Object as java_lang_Object } from 'java.lang';

  export class DatabaseMetaData implements java_sql_Wrapper {
attributes: java_sql_ResultSet;
bestRowIdentifier: java_sql_ResultSet;
catalogSeparator: string;
catalogTerm: string;
catalogs: java_sql_ResultSet;
clientInfoProperties: java_sql_ResultSet;
columnPrivileges: java_sql_ResultSet;
columns: java_sql_ResultSet;
connection: java_sql_Connection;
crossReference: java_sql_ResultSet;
databaseMajorVersion: number;
databaseMinorVersion: number;
databaseProductName: string;
databaseProductVersion: string;
defaultTransactionIsolation: number;
driverMajorVersion: number;
driverMinorVersion: number;
driverName: string;
driverVersion: string;
exportedKeys: java_sql_ResultSet;
extraNameCharacters: string;
functionColumns: java_sql_ResultSet;
functions: java_sql_ResultSet;
identifierQuoteString: string;
importedKeys: java_sql_ResultSet;
indexInfo: java_sql_ResultSet;
jDBCMajorVersion: number;
jDBCMinorVersion: number;
maxBinaryLiteralLength: number;
maxCatalogNameLength: number;
maxCharLiteralLength: number;
maxColumnNameLength: number;
maxColumnsInGroupBy: number;
maxColumnsInIndex: number;
maxColumnsInOrderBy: number;
maxColumnsInSelect: number;
maxColumnsInTable: number;
maxConnections: number;
maxCursorNameLength: number;
maxIndexLength: number;
maxLogicalLobSize: number;
maxProcedureNameLength: number;
maxRowSize: number;
maxSchemaNameLength: number;
maxStatementLength: number;
maxStatements: number;
maxTableNameLength: number;
maxTablesInSelect: number;
maxUserNameLength: number;
numericFunctions: string;
primaryKeys: java_sql_ResultSet;
procedureColumns: java_sql_ResultSet;
procedureTerm: string;
procedures: java_sql_ResultSet;
pseudoColumns: java_sql_ResultSet;
resultSetHoldability: number;
rowIdLifetime: java_sql_RowIdLifetime;
sQLKeywords: string;
sQLStateType: number;
schemaTerm: string;
schemas: java_sql_ResultSet;
schemas: java_sql_ResultSet;
searchStringEscape: string;
static attributeNoNulls: number;
static attributeNullable: number;
static attributeNullableUnknown: number;
static bestRowNotPseudo: number;
static bestRowPseudo: number;
static bestRowSession: number;
static bestRowTemporary: number;
static bestRowTransaction: number;
static bestRowUnknown: number;
static columnNoNulls: number;
static columnNullable: number;
static columnNullableUnknown: number;
static functionColumnIn: number;
static functionColumnInOut: number;
static functionColumnOut: number;
static functionColumnResult: number;
static functionColumnUnknown: number;
static functionNoNulls: number;
static functionNoTable: number;
static functionNullable: number;
static functionNullableUnknown: number;
static functionResultUnknown: number;
static functionReturn: number;
static functionReturnsTable: number;
static importedKeyCascade: number;
static importedKeyInitiallyDeferred: number;
static importedKeyInitiallyImmediate: number;
static importedKeyNoAction: number;
static importedKeyNotDeferrable: number;
static importedKeyRestrict: number;
static importedKeySetDefault: number;
static importedKeySetNull: number;
static procedureColumnIn: number;
static procedureColumnInOut: number;
static procedureColumnOut: number;
static procedureColumnResult: number;
static procedureColumnReturn: number;
static procedureColumnUnknown: number;
static procedureNoNulls: number;
static procedureNoResult: number;
static procedureNullable: number;
static procedureNullableUnknown: number;
static procedureResultUnknown: number;
static procedureReturnsResult: number;
static sqlStateSQL99: number;
static sqlStateSQL: number;
static sqlStateXOpen: number;
static tableIndexClustered: number;
static tableIndexHashed: number;
static tableIndexOther: number;
static tableIndexStatistic: number;
static typeNoNulls: number;
static typeNullable: number;
static typeNullableUnknown: number;
static typePredBasic: number;
static typePredChar: number;
static typePredNone: number;
static typeSearchable: number;
static versionColumnNotPseudo: number;
static versionColumnPseudo: number;
static versionColumnUnknown: number;
stringFunctions: string;
superTables: java_sql_ResultSet;
superTypes: java_sql_ResultSet;
systemFunctions: string;
tablePrivileges: java_sql_ResultSet;
tableTypes: java_sql_ResultSet;
tables: java_sql_ResultSet;
timeDateFunctions: string;
typeInfo: java_sql_ResultSet;
uDTs: java_sql_ResultSet;
uRL: string;
userName: string;
versionColumns: java_sql_ResultSet;
allProceduresAreCallable(): boolean;
allTablesAreSelectable(): boolean;
autoCommitFailureClosesAllResultSets(): boolean;
dataDefinitionCausesTransactionCommit(): boolean;
dataDefinitionIgnoredInTransactions(): boolean;
deletesAreDetected(arg0: number): boolean;
doesMaxRowSizeIncludeBlobs(): boolean;
generatedKeyAlwaysReturned(): boolean;
getAttributes(arg0: string, arg1: string, arg2: string, arg3: string): java_sql_ResultSet;
getBestRowIdentifier(arg0: string, arg1: string, arg2: string, arg3: number, arg4: boolean): java_sql_ResultSet;
getCatalogSeparator(): string;
getCatalogTerm(): string;
getCatalogs(): java_sql_ResultSet;
getClientInfoProperties(): java_sql_ResultSet;
getColumnPrivileges(arg0: string, arg1: string, arg2: string, arg3: string): java_sql_ResultSet;
getColumns(arg0: string, arg1: string, arg2: string, arg3: string): java_sql_ResultSet;
getConnection(): java_sql_Connection;
getCrossReference(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string): java_sql_ResultSet;
getDatabaseMajorVersion(): number;
getDatabaseMinorVersion(): number;
getDatabaseProductName(): string;
getDatabaseProductVersion(): string;
getDefaultTransactionIsolation(): number;
getDriverMajorVersion(): number;
getDriverMinorVersion(): number;
getDriverName(): string;
getDriverVersion(): string;
getExportedKeys(arg0: string, arg1: string, arg2: string): java_sql_ResultSet;
getExtraNameCharacters(): string;
getFunctionColumns(arg0: string, arg1: string, arg2: string, arg3: string): java_sql_ResultSet;
getFunctions(arg0: string, arg1: string, arg2: string): java_sql_ResultSet;
getIdentifierQuoteString(): string;
getImportedKeys(arg0: string, arg1: string, arg2: string): java_sql_ResultSet;
getIndexInfo(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean): java_sql_ResultSet;
getJDBCMajorVersion(): number;
getJDBCMinorVersion(): number;
getMaxBinaryLiteralLength(): number;
getMaxCatalogNameLength(): number;
getMaxCharLiteralLength(): number;
getMaxColumnNameLength(): number;
getMaxColumnsInGroupBy(): number;
getMaxColumnsInIndex(): number;
getMaxColumnsInOrderBy(): number;
getMaxColumnsInSelect(): number;
getMaxColumnsInTable(): number;
getMaxConnections(): number;
getMaxCursorNameLength(): number;
getMaxIndexLength(): number;
getMaxLogicalLobSize(): number;
getMaxProcedureNameLength(): number;
getMaxRowSize(): number;
getMaxSchemaNameLength(): number;
getMaxStatementLength(): number;
getMaxStatements(): number;
getMaxTableNameLength(): number;
getMaxTablesInSelect(): number;
getMaxUserNameLength(): number;
getNumericFunctions(): string;
getPrimaryKeys(arg0: string, arg1: string, arg2: string): java_sql_ResultSet;
getProcedureColumns(arg0: string, arg1: string, arg2: string, arg3: string): java_sql_ResultSet;
getProcedureTerm(): string;
getProcedures(arg0: string, arg1: string, arg2: string): java_sql_ResultSet;
getPseudoColumns(arg0: string, arg1: string, arg2: string, arg3: string): java_sql_ResultSet;
getResultSetHoldability(): number;
getRowIdLifetime(): java_sql_RowIdLifetime;
getSQLKeywords(): string;
getSQLStateType(): number;
getSchemaTerm(): string;
getSchemas(): java_sql_ResultSet;
getSchemas(arg0: string, arg1: string): java_sql_ResultSet;
getSearchStringEscape(): string;
getStringFunctions(): string;
getSuperTables(arg0: string, arg1: string, arg2: string): java_sql_ResultSet;
getSuperTypes(arg0: string, arg1: string, arg2: string): java_sql_ResultSet;
getSystemFunctions(): string;
getTablePrivileges(arg0: string, arg1: string, arg2: string): java_sql_ResultSet;
getTableTypes(): java_sql_ResultSet;
getTables(arg0: string, arg1: string, arg2: string, arg3: JArray<string>): java_sql_ResultSet;
getTimeDateFunctions(): string;
getTypeInfo(): java_sql_ResultSet;
getUDTs(arg0: string, arg1: string, arg2: string, arg3: JArray<number>): java_sql_ResultSet;
getURL(): string;
getUserName(): string;
getVersionColumns(arg0: string, arg1: string, arg2: string): java_sql_ResultSet;
insertsAreDetected(arg0: number): boolean;
isCatalogAtStart(): boolean;
isReadOnly(): boolean;
isWrapperFor(arg0: java_lang_Class<java_lang_Object>): boolean;
locatorsUpdateCopy(): boolean;
nullPlusNonNullIsNull(): boolean;
nullsAreSortedAtEnd(): boolean;
nullsAreSortedAtStart(): boolean;
nullsAreSortedHigh(): boolean;
nullsAreSortedLow(): boolean;
othersDeletesAreVisible(arg0: number): boolean;
othersInsertsAreVisible(arg0: number): boolean;
othersUpdatesAreVisible(arg0: number): boolean;
ownDeletesAreVisible(arg0: number): boolean;
ownInsertsAreVisible(arg0: number): boolean;
ownUpdatesAreVisible(arg0: number): boolean;
storesLowerCaseIdentifiers(): boolean;
storesLowerCaseQuotedIdentifiers(): boolean;
storesMixedCaseIdentifiers(): boolean;
storesMixedCaseQuotedIdentifiers(): boolean;
storesUpperCaseIdentifiers(): boolean;
storesUpperCaseQuotedIdentifiers(): boolean;
supportsANSI92EntryLevelSQL(): boolean;
supportsANSI92FullSQL(): boolean;
supportsANSI92IntermediateSQL(): boolean;
supportsAlterTableWithAddColumn(): boolean;
supportsAlterTableWithDropColumn(): boolean;
supportsBatchUpdates(): boolean;
supportsCatalogsInDataManipulation(): boolean;
supportsCatalogsInIndexDefinitions(): boolean;
supportsCatalogsInPrivilegeDefinitions(): boolean;
supportsCatalogsInProcedureCalls(): boolean;
supportsCatalogsInTableDefinitions(): boolean;
supportsColumnAliasing(): boolean;
supportsConvert(): boolean;
supportsConvert(arg0: number, arg1: number): boolean;
supportsCoreSQLGrammar(): boolean;
supportsCorrelatedSubqueries(): boolean;
supportsDataDefinitionAndDataManipulationTransactions(): boolean;
supportsDataManipulationTransactionsOnly(): boolean;
supportsDifferentTableCorrelationNames(): boolean;
supportsExpressionsInOrderBy(): boolean;
supportsExtendedSQLGrammar(): boolean;
supportsFullOuterJoins(): boolean;
supportsGetGeneratedKeys(): boolean;
supportsGroupBy(): boolean;
supportsGroupByBeyondSelect(): boolean;
supportsGroupByUnrelated(): boolean;
supportsIntegrityEnhancementFacility(): boolean;
supportsLikeEscapeClause(): boolean;
supportsLimitedOuterJoins(): boolean;
supportsMinimumSQLGrammar(): boolean;
supportsMixedCaseIdentifiers(): boolean;
supportsMixedCaseQuotedIdentifiers(): boolean;
supportsMultipleOpenResults(): boolean;
supportsMultipleResultSets(): boolean;
supportsMultipleTransactions(): boolean;
supportsNamedParameters(): boolean;
supportsNonNullableColumns(): boolean;
supportsOpenCursorsAcrossCommit(): boolean;
supportsOpenCursorsAcrossRollback(): boolean;
supportsOpenStatementsAcrossCommit(): boolean;
supportsOpenStatementsAcrossRollback(): boolean;
supportsOrderByUnrelated(): boolean;
supportsOuterJoins(): boolean;
supportsPositionedDelete(): boolean;
supportsPositionedUpdate(): boolean;
supportsRefCursors(): boolean;
supportsResultSetConcurrency(arg0: number, arg1: number): boolean;
supportsResultSetHoldability(arg0: number): boolean;
supportsResultSetType(arg0: number): boolean;
supportsSavepoints(): boolean;
supportsSchemasInDataManipulation(): boolean;
supportsSchemasInIndexDefinitions(): boolean;
supportsSchemasInPrivilegeDefinitions(): boolean;
supportsSchemasInProcedureCalls(): boolean;
supportsSchemasInTableDefinitions(): boolean;
supportsSelectForUpdate(): boolean;
supportsSharding(): boolean;
supportsStatementPooling(): boolean;
supportsStoredFunctionsUsingCallSyntax(): boolean;
supportsStoredProcedures(): boolean;
supportsSubqueriesInComparisons(): boolean;
supportsSubqueriesInExists(): boolean;
supportsSubqueriesInIns(): boolean;
supportsSubqueriesInQuantifieds(): boolean;
supportsTableCorrelationNames(): boolean;
supportsTransactionIsolationLevel(arg0: number): boolean;
supportsTransactions(): boolean;
supportsUnion(): boolean;
supportsUnionAll(): boolean;
unwrap<T extends java_lang_Object>(arg0: java_lang_Class<T>): T;
updatesAreDetected(arg0: number): boolean;
usesLocalFilePerTable(): boolean;
usesLocalFiles(): boolean;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { RowIdLifetime as java_sql_RowIdLifetime } from 'java.sql';
import { Class as java_lang_Class, Object as java_lang_Object, Enum as java_lang_Enum } from 'java.lang';

  export class RowIdLifetime extends java_lang_Enum<java_sql_RowIdLifetime> {
class: java_lang_Class<java_lang_Object>;
static ROWID_UNSUPPORTED: java_sql_RowIdLifetime;
static ROWID_VALID_FOREVER: java_sql_RowIdLifetime;
static ROWID_VALID_OTHER: java_sql_RowIdLifetime;
static ROWID_VALID_SESSION: java_sql_RowIdLifetime;
static ROWID_VALID_TRANSACTION: java_sql_RowIdLifetime;
getClass(): java_lang_Class<java_lang_Object>;
notify(): void;
notifyAll(): void;
static valueOf(arg0: string): java_sql_RowIdLifetime;
static values(): JArray<java_sql_RowIdLifetime>;
wait(): void;
wait(arg0: number): void;
wait(arg0: number, arg1: number): void;

  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Object as java_lang_Object, Class as java_lang_Class } from 'java.lang';
import { Map as java_util_Map } from 'java.util';

  export class Struct {
attributes: JArray<java_lang_Object>;
attributes: JArray<java_lang_Object>;
sQLTypeName: string;
getAttributes(): JArray<java_lang_Object>;
getAttributes(arg0: java_util_Map<string, java_lang_Class<java_lang_Object>>): JArray<java_lang_Object>;
getSQLTypeName(): string;

  }
}
//@ts-nocheck

declare module 'java.sql' {


  export class ShardingKey {



  }
}
//@ts-nocheck

declare module 'java.sql' {
import { Object as java_lang_Object } from 'java.lang';

  export class DriverPropertyInfo extends java_lang_Object {
choices: JArray<string>;
description: string;
name: string;
required: boolean;
value: string;

constructor(arg0: string, arg1: string);
  }
}
//@ts-nocheck

declare module 'java.sql' {


  export class DriverAction {

deregister(): void;

  }
}