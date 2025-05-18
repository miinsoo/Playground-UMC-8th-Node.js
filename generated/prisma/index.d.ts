
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model FoodType
 * 
 */
export type FoodType = $Result.DefaultSelection<Prisma.$FoodTypePayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model UserFoodDb
 * 
 */
export type UserFoodDb = $Result.DefaultSelection<Prisma.$UserFoodDbPayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodType`: Exposes CRUD operations for the **FoodType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodTypes
    * const foodTypes = await prisma.foodType.findMany()
    * ```
    */
  get foodType(): Prisma.FoodTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFoodDb`: Exposes CRUD operations for the **UserFoodDb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFoodDbs
    * const userFoodDbs = await prisma.userFoodDb.findMany()
    * ```
    */
  get userFoodDb(): Prisma.UserFoodDbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Store: 'Store',
    FoodType: 'FoodType',
    Food: 'Food',
    UserFoodDb: 'UserFoodDb',
    Mission: 'Mission',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "store" | "foodType" | "food" | "userFoodDb" | "mission" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      FoodType: {
        payload: Prisma.$FoodTypePayload<ExtArgs>
        fields: Prisma.FoodTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          findFirst: {
            args: Prisma.FoodTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          findMany: {
            args: Prisma.FoodTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>[]
          }
          create: {
            args: Prisma.FoodTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          createMany: {
            args: Prisma.FoodTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          update: {
            args: Prisma.FoodTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          deleteMany: {
            args: Prisma.FoodTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          aggregate: {
            args: Prisma.FoodTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodType>
          }
          groupBy: {
            args: Prisma.FoodTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodTypeCountArgs<ExtArgs>
            result: $Utils.Optional<FoodTypeCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      UserFoodDb: {
        payload: Prisma.$UserFoodDbPayload<ExtArgs>
        fields: Prisma.UserFoodDbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFoodDbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodDbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFoodDbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodDbPayload>
          }
          findFirst: {
            args: Prisma.UserFoodDbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodDbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFoodDbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodDbPayload>
          }
          findMany: {
            args: Prisma.UserFoodDbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodDbPayload>[]
          }
          create: {
            args: Prisma.UserFoodDbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodDbPayload>
          }
          createMany: {
            args: Prisma.UserFoodDbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserFoodDbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodDbPayload>
          }
          update: {
            args: Prisma.UserFoodDbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodDbPayload>
          }
          deleteMany: {
            args: Prisma.UserFoodDbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFoodDbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserFoodDbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodDbPayload>
          }
          aggregate: {
            args: Prisma.UserFoodDbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFoodDb>
          }
          groupBy: {
            args: Prisma.UserFoodDbGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFoodDbGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFoodDbCountArgs<ExtArgs>
            result: $Utils.Optional<UserFoodDbCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    store?: StoreOmit
    foodType?: FoodTypeOmit
    food?: FoodOmit
    userFoodDb?: UserFoodDbOmit
    mission?: MissionOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    missions: number
    reviews: number
    userFoods: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | UserCountOutputTypeCountMissionsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    userFoods?: boolean | UserCountOutputTypeCountUserFoodsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFoodDbWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    missions: number
    reviews: number
    foods: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | StoreCountOutputTypeCountMissionsArgs
    reviews?: boolean | StoreCountOutputTypeCountReviewsArgs
    foods?: boolean | StoreCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }


  /**
   * Count Type FoodTypeCountOutputType
   */

  export type FoodTypeCountOutputType = {
    userFoodDbs: number
  }

  export type FoodTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFoodDbs?: boolean | FoodTypeCountOutputTypeCountUserFoodDbsArgs
  }

  // Custom InputTypes
  /**
   * FoodTypeCountOutputType without action
   */
  export type FoodTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTypeCountOutputType
     */
    select?: FoodTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodTypeCountOutputType without action
   */
  export type FoodTypeCountOutputTypeCountUserFoodDbsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFoodDbWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    totalPoint: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    totalPoint: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: string | null
    birthDate: Date | null
    region: string | null
    address: string | null
    totalPoint: number | null
    phoneNumber: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    gender: string | null
    birthDate: Date | null
    region: string | null
    address: string | null
    totalPoint: number | null
    phoneNumber: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    gender: number
    birthDate: number
    region: number
    address: number
    totalPoint: number
    phoneNumber: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    totalPoint?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    totalPoint?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    birthDate?: true
    region?: true
    address?: true
    totalPoint?: true
    phoneNumber?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    birthDate?: true
    region?: true
    address?: true
    totalPoint?: true
    phoneNumber?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gender?: true
    birthDate?: true
    region?: true
    address?: true
    totalPoint?: true
    phoneNumber?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    gender: string
    birthDate: Date
    region: string
    address: string
    totalPoint: number | null
    phoneNumber: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    birthDate?: boolean
    region?: boolean
    address?: boolean
    totalPoint?: boolean
    phoneNumber?: boolean
    missions?: boolean | User$missionsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    userFoods?: boolean | User$userFoodsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    gender?: boolean
    birthDate?: boolean
    region?: boolean
    address?: boolean
    totalPoint?: boolean
    phoneNumber?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "gender" | "birthDate" | "region" | "address" | "totalPoint" | "phoneNumber", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | User$missionsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    userFoods?: boolean | User$userFoodsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      missions: Prisma.$MissionPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      userFoods: Prisma.$UserFoodDbPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      gender: string
      birthDate: Date
      region: string
      address: string
      totalPoint: number | null
      phoneNumber: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends User$missionsArgs<ExtArgs> = {}>(args?: Subset<T, User$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userFoods<T extends User$userFoodsArgs<ExtArgs> = {}>(args?: Subset<T, User$userFoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly region: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly totalPoint: FieldRef<"User", 'Int'>
    readonly phoneNumber: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.missions
   */
  export type User$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.userFoods
   */
  export type User$userFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    where?: UserFoodDbWhereInput
    orderBy?: UserFoodDbOrderByWithRelationInput | UserFoodDbOrderByWithRelationInput[]
    cursor?: UserFoodDbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFoodDbScalarFieldEnum | UserFoodDbScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
    verifcationId: number | null
    foodTypeId: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
    verifcationId: number | null
    foodTypeId: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    storeName: string | null
    verifcationId: number | null
    openTime: Date | null
    closeTime: Date | null
    address: string | null
    foodTypeId: number | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    storeName: string | null
    verifcationId: number | null
    openTime: Date | null
    closeTime: Date | null
    address: string | null
    foodTypeId: number | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    storeName: number
    verifcationId: number
    openTime: number
    closeTime: number
    address: number
    foodTypeId: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
    verifcationId?: true
    foodTypeId?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
    verifcationId?: true
    foodTypeId?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    storeName?: true
    verifcationId?: true
    openTime?: true
    closeTime?: true
    address?: true
    foodTypeId?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    storeName?: true
    verifcationId?: true
    openTime?: true
    closeTime?: true
    address?: true
    foodTypeId?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    storeName?: true
    verifcationId?: true
    openTime?: true
    closeTime?: true
    address?: true
    foodTypeId?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    storeName: string
    verifcationId: number
    openTime: Date | null
    closeTime: Date | null
    address: string
    foodTypeId: number | null
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeName?: boolean
    verifcationId?: boolean
    openTime?: boolean
    closeTime?: boolean
    address?: boolean
    foodTypeId?: boolean
    foodType?: boolean | Store$foodTypeArgs<ExtArgs>
    missions?: boolean | Store$missionsArgs<ExtArgs>
    reviews?: boolean | Store$reviewsArgs<ExtArgs>
    foods?: boolean | Store$foodsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>



  export type StoreSelectScalar = {
    id?: boolean
    storeName?: boolean
    verifcationId?: boolean
    openTime?: boolean
    closeTime?: boolean
    address?: boolean
    foodTypeId?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeName" | "verifcationId" | "openTime" | "closeTime" | "address" | "foodTypeId", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodType?: boolean | Store$foodTypeArgs<ExtArgs>
    missions?: boolean | Store$missionsArgs<ExtArgs>
    reviews?: boolean | Store$reviewsArgs<ExtArgs>
    foods?: boolean | Store$foodsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      foodType: Prisma.$FoodTypePayload<ExtArgs> | null
      missions: Prisma.$MissionPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      foods: Prisma.$FoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      storeName: string
      verifcationId: number
      openTime: Date | null
      closeTime: Date | null
      address: string
      foodTypeId: number | null
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foodType<T extends Store$foodTypeArgs<ExtArgs> = {}>(args?: Subset<T, Store$foodTypeArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    missions<T extends Store$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Store$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Store$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Store$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    foods<T extends Store$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Store$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly storeName: FieldRef<"Store", 'String'>
    readonly verifcationId: FieldRef<"Store", 'Int'>
    readonly openTime: FieldRef<"Store", 'DateTime'>
    readonly closeTime: FieldRef<"Store", 'DateTime'>
    readonly address: FieldRef<"Store", 'String'>
    readonly foodTypeId: FieldRef<"Store", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.foodType
   */
  export type Store$foodTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    where?: FoodTypeWhereInput
  }

  /**
   * Store.missions
   */
  export type Store$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    cursor?: MissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Store.reviews
   */
  export type Store$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Store.foods
   */
  export type Store$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model FoodType
   */

  export type AggregateFoodType = {
    _count: FoodTypeCountAggregateOutputType | null
    _avg: FoodTypeAvgAggregateOutputType | null
    _sum: FoodTypeSumAggregateOutputType | null
    _min: FoodTypeMinAggregateOutputType | null
    _max: FoodTypeMaxAggregateOutputType | null
  }

  export type FoodTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type FoodTypeSumAggregateOutputType = {
    id: number | null
  }

  export type FoodTypeMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type FoodTypeMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type FoodTypeCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type FoodTypeAvgAggregateInputType = {
    id?: true
  }

  export type FoodTypeSumAggregateInputType = {
    id?: true
  }

  export type FoodTypeMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type FoodTypeMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type FoodTypeCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type FoodTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodType to aggregate.
     */
    where?: FoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTypes to fetch.
     */
    orderBy?: FoodTypeOrderByWithRelationInput | FoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodTypes
    **/
    _count?: true | FoodTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodTypeMaxAggregateInputType
  }

  export type GetFoodTypeAggregateType<T extends FoodTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodType[P]>
      : GetScalarType<T[P], AggregateFoodType[P]>
  }




  export type FoodTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodTypeWhereInput
    orderBy?: FoodTypeOrderByWithAggregationInput | FoodTypeOrderByWithAggregationInput[]
    by: FoodTypeScalarFieldEnum[] | FoodTypeScalarFieldEnum
    having?: FoodTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodTypeCountAggregateInputType | true
    _avg?: FoodTypeAvgAggregateInputType
    _sum?: FoodTypeSumAggregateInputType
    _min?: FoodTypeMinAggregateInputType
    _max?: FoodTypeMaxAggregateInputType
  }

  export type FoodTypeGroupByOutputType = {
    id: number
    type: string
    _count: FoodTypeCountAggregateOutputType | null
    _avg: FoodTypeAvgAggregateOutputType | null
    _sum: FoodTypeSumAggregateOutputType | null
    _min: FoodTypeMinAggregateOutputType | null
    _max: FoodTypeMaxAggregateOutputType | null
  }

  type GetFoodTypeGroupByPayload<T extends FoodTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodTypeGroupByOutputType[P]>
            : GetScalarType<T[P], FoodTypeGroupByOutputType[P]>
        }
      >
    >


  export type FoodTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    store?: boolean | FoodType$storeArgs<ExtArgs>
    userFoodDbs?: boolean | FoodType$userFoodDbsArgs<ExtArgs>
    _count?: boolean | FoodTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodType"]>



  export type FoodTypeSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type FoodTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["foodType"]>
  export type FoodTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | FoodType$storeArgs<ExtArgs>
    userFoodDbs?: boolean | FoodType$userFoodDbsArgs<ExtArgs>
    _count?: boolean | FoodTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodType"
    objects: {
      store: Prisma.$StorePayload<ExtArgs> | null
      userFoodDbs: Prisma.$UserFoodDbPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
    }, ExtArgs["result"]["foodType"]>
    composites: {}
  }

  type FoodTypeGetPayload<S extends boolean | null | undefined | FoodTypeDefaultArgs> = $Result.GetResult<Prisma.$FoodTypePayload, S>

  type FoodTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodTypeCountAggregateInputType | true
    }

  export interface FoodTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodType'], meta: { name: 'FoodType' } }
    /**
     * Find zero or one FoodType that matches the filter.
     * @param {FoodTypeFindUniqueArgs} args - Arguments to find a FoodType
     * @example
     * // Get one FoodType
     * const foodType = await prisma.foodType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodTypeFindUniqueArgs>(args: SelectSubset<T, FoodTypeFindUniqueArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodTypeFindUniqueOrThrowArgs} args - Arguments to find a FoodType
     * @example
     * // Get one FoodType
     * const foodType = await prisma.foodType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeFindFirstArgs} args - Arguments to find a FoodType
     * @example
     * // Get one FoodType
     * const foodType = await prisma.foodType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodTypeFindFirstArgs>(args?: SelectSubset<T, FoodTypeFindFirstArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeFindFirstOrThrowArgs} args - Arguments to find a FoodType
     * @example
     * // Get one FoodType
     * const foodType = await prisma.foodType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodTypes
     * const foodTypes = await prisma.foodType.findMany()
     * 
     * // Get first 10 FoodTypes
     * const foodTypes = await prisma.foodType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodTypeWithIdOnly = await prisma.foodType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodTypeFindManyArgs>(args?: SelectSubset<T, FoodTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodType.
     * @param {FoodTypeCreateArgs} args - Arguments to create a FoodType.
     * @example
     * // Create one FoodType
     * const FoodType = await prisma.foodType.create({
     *   data: {
     *     // ... data to create a FoodType
     *   }
     * })
     * 
     */
    create<T extends FoodTypeCreateArgs>(args: SelectSubset<T, FoodTypeCreateArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodTypes.
     * @param {FoodTypeCreateManyArgs} args - Arguments to create many FoodTypes.
     * @example
     * // Create many FoodTypes
     * const foodType = await prisma.foodType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodTypeCreateManyArgs>(args?: SelectSubset<T, FoodTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodType.
     * @param {FoodTypeDeleteArgs} args - Arguments to delete one FoodType.
     * @example
     * // Delete one FoodType
     * const FoodType = await prisma.foodType.delete({
     *   where: {
     *     // ... filter to delete one FoodType
     *   }
     * })
     * 
     */
    delete<T extends FoodTypeDeleteArgs>(args: SelectSubset<T, FoodTypeDeleteArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodType.
     * @param {FoodTypeUpdateArgs} args - Arguments to update one FoodType.
     * @example
     * // Update one FoodType
     * const foodType = await prisma.foodType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodTypeUpdateArgs>(args: SelectSubset<T, FoodTypeUpdateArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodTypes.
     * @param {FoodTypeDeleteManyArgs} args - Arguments to filter FoodTypes to delete.
     * @example
     * // Delete a few FoodTypes
     * const { count } = await prisma.foodType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodTypeDeleteManyArgs>(args?: SelectSubset<T, FoodTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodTypes
     * const foodType = await prisma.foodType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodTypeUpdateManyArgs>(args: SelectSubset<T, FoodTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodType.
     * @param {FoodTypeUpsertArgs} args - Arguments to update or create a FoodType.
     * @example
     * // Update or create a FoodType
     * const foodType = await prisma.foodType.upsert({
     *   create: {
     *     // ... data to create a FoodType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodType we want to update
     *   }
     * })
     */
    upsert<T extends FoodTypeUpsertArgs>(args: SelectSubset<T, FoodTypeUpsertArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeCountArgs} args - Arguments to filter FoodTypes to count.
     * @example
     * // Count the number of FoodTypes
     * const count = await prisma.foodType.count({
     *   where: {
     *     // ... the filter for the FoodTypes we want to count
     *   }
     * })
    **/
    count<T extends FoodTypeCountArgs>(
      args?: Subset<T, FoodTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodTypeAggregateArgs>(args: Subset<T, FoodTypeAggregateArgs>): Prisma.PrismaPromise<GetFoodTypeAggregateType<T>>

    /**
     * Group by FoodType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodTypeGroupByArgs['orderBy'] }
        : { orderBy?: FoodTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodType model
   */
  readonly fields: FoodTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends FoodType$storeArgs<ExtArgs> = {}>(args?: Subset<T, FoodType$storeArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userFoodDbs<T extends FoodType$userFoodDbsArgs<ExtArgs> = {}>(args?: Subset<T, FoodType$userFoodDbsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodType model
   */
  interface FoodTypeFieldRefs {
    readonly id: FieldRef<"FoodType", 'Int'>
    readonly type: FieldRef<"FoodType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodType findUnique
   */
  export type FoodTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodType to fetch.
     */
    where: FoodTypeWhereUniqueInput
  }

  /**
   * FoodType findUniqueOrThrow
   */
  export type FoodTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodType to fetch.
     */
    where: FoodTypeWhereUniqueInput
  }

  /**
   * FoodType findFirst
   */
  export type FoodTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodType to fetch.
     */
    where?: FoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTypes to fetch.
     */
    orderBy?: FoodTypeOrderByWithRelationInput | FoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodTypes.
     */
    cursor?: FoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodTypes.
     */
    distinct?: FoodTypeScalarFieldEnum | FoodTypeScalarFieldEnum[]
  }

  /**
   * FoodType findFirstOrThrow
   */
  export type FoodTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodType to fetch.
     */
    where?: FoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTypes to fetch.
     */
    orderBy?: FoodTypeOrderByWithRelationInput | FoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodTypes.
     */
    cursor?: FoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodTypes.
     */
    distinct?: FoodTypeScalarFieldEnum | FoodTypeScalarFieldEnum[]
  }

  /**
   * FoodType findMany
   */
  export type FoodTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodTypes to fetch.
     */
    where?: FoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTypes to fetch.
     */
    orderBy?: FoodTypeOrderByWithRelationInput | FoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodTypes.
     */
    cursor?: FoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTypes.
     */
    skip?: number
    distinct?: FoodTypeScalarFieldEnum | FoodTypeScalarFieldEnum[]
  }

  /**
   * FoodType create
   */
  export type FoodTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodType.
     */
    data: XOR<FoodTypeCreateInput, FoodTypeUncheckedCreateInput>
  }

  /**
   * FoodType createMany
   */
  export type FoodTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodTypes.
     */
    data: FoodTypeCreateManyInput | FoodTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodType update
   */
  export type FoodTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodType.
     */
    data: XOR<FoodTypeUpdateInput, FoodTypeUncheckedUpdateInput>
    /**
     * Choose, which FoodType to update.
     */
    where: FoodTypeWhereUniqueInput
  }

  /**
   * FoodType updateMany
   */
  export type FoodTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodTypes.
     */
    data: XOR<FoodTypeUpdateManyMutationInput, FoodTypeUncheckedUpdateManyInput>
    /**
     * Filter which FoodTypes to update
     */
    where?: FoodTypeWhereInput
    /**
     * Limit how many FoodTypes to update.
     */
    limit?: number
  }

  /**
   * FoodType upsert
   */
  export type FoodTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodType to update in case it exists.
     */
    where: FoodTypeWhereUniqueInput
    /**
     * In case the FoodType found by the `where` argument doesn't exist, create a new FoodType with this data.
     */
    create: XOR<FoodTypeCreateInput, FoodTypeUncheckedCreateInput>
    /**
     * In case the FoodType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodTypeUpdateInput, FoodTypeUncheckedUpdateInput>
  }

  /**
   * FoodType delete
   */
  export type FoodTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter which FoodType to delete.
     */
    where: FoodTypeWhereUniqueInput
  }

  /**
   * FoodType deleteMany
   */
  export type FoodTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodTypes to delete
     */
    where?: FoodTypeWhereInput
    /**
     * Limit how many FoodTypes to delete.
     */
    limit?: number
  }

  /**
   * FoodType.store
   */
  export type FoodType$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * FoodType.userFoodDbs
   */
  export type FoodType$userFoodDbsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    where?: UserFoodDbWhereInput
    orderBy?: UserFoodDbOrderByWithRelationInput | UserFoodDbOrderByWithRelationInput[]
    cursor?: UserFoodDbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFoodDbScalarFieldEnum | UserFoodDbScalarFieldEnum[]
  }

  /**
   * FoodType without action
   */
  export type FoodTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    price: number | null
  }

  export type FoodSumAggregateOutputType = {
    id: number | null
    storeId: number | null
    price: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: number | null
    storeId: number | null
    price: number | null
    name: string | null
  }

  export type FoodMaxAggregateOutputType = {
    id: number | null
    storeId: number | null
    price: number | null
    name: string | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    storeId: number
    price: number
    name: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    id?: true
    storeId?: true
    price?: true
  }

  export type FoodSumAggregateInputType = {
    id?: true
    storeId?: true
    price?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    storeId?: true
    price?: true
    name?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    storeId?: true
    price?: true
    name?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    storeId?: true
    price?: true
    name?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: number
    storeId: number
    price: number
    name: string
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    price?: boolean
    name?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>



  export type FoodSelectScalar = {
    id?: boolean
    storeId?: boolean
    price?: boolean
    name?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "price" | "name", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      storeId: number
      price: number
      name: string
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'Int'>
    readonly storeId: FieldRef<"Food", 'Int'>
    readonly price: FieldRef<"Food", 'Int'>
    readonly name: FieldRef<"Food", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model UserFoodDb
   */

  export type AggregateUserFoodDb = {
    _count: UserFoodDbCountAggregateOutputType | null
    _avg: UserFoodDbAvgAggregateOutputType | null
    _sum: UserFoodDbSumAggregateOutputType | null
    _min: UserFoodDbMinAggregateOutputType | null
    _max: UserFoodDbMaxAggregateOutputType | null
  }

  export type UserFoodDbAvgAggregateOutputType = {
    userId: number | null
    foodId: number | null
  }

  export type UserFoodDbSumAggregateOutputType = {
    userId: number | null
    foodId: number | null
  }

  export type UserFoodDbMinAggregateOutputType = {
    userId: number | null
    foodId: number | null
  }

  export type UserFoodDbMaxAggregateOutputType = {
    userId: number | null
    foodId: number | null
  }

  export type UserFoodDbCountAggregateOutputType = {
    userId: number
    foodId: number
    _all: number
  }


  export type UserFoodDbAvgAggregateInputType = {
    userId?: true
    foodId?: true
  }

  export type UserFoodDbSumAggregateInputType = {
    userId?: true
    foodId?: true
  }

  export type UserFoodDbMinAggregateInputType = {
    userId?: true
    foodId?: true
  }

  export type UserFoodDbMaxAggregateInputType = {
    userId?: true
    foodId?: true
  }

  export type UserFoodDbCountAggregateInputType = {
    userId?: true
    foodId?: true
    _all?: true
  }

  export type UserFoodDbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFoodDb to aggregate.
     */
    where?: UserFoodDbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodDbs to fetch.
     */
    orderBy?: UserFoodDbOrderByWithRelationInput | UserFoodDbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFoodDbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodDbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodDbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFoodDbs
    **/
    _count?: true | UserFoodDbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFoodDbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFoodDbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFoodDbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFoodDbMaxAggregateInputType
  }

  export type GetUserFoodDbAggregateType<T extends UserFoodDbAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFoodDb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFoodDb[P]>
      : GetScalarType<T[P], AggregateUserFoodDb[P]>
  }




  export type UserFoodDbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFoodDbWhereInput
    orderBy?: UserFoodDbOrderByWithAggregationInput | UserFoodDbOrderByWithAggregationInput[]
    by: UserFoodDbScalarFieldEnum[] | UserFoodDbScalarFieldEnum
    having?: UserFoodDbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFoodDbCountAggregateInputType | true
    _avg?: UserFoodDbAvgAggregateInputType
    _sum?: UserFoodDbSumAggregateInputType
    _min?: UserFoodDbMinAggregateInputType
    _max?: UserFoodDbMaxAggregateInputType
  }

  export type UserFoodDbGroupByOutputType = {
    userId: number
    foodId: number
    _count: UserFoodDbCountAggregateOutputType | null
    _avg: UserFoodDbAvgAggregateOutputType | null
    _sum: UserFoodDbSumAggregateOutputType | null
    _min: UserFoodDbMinAggregateOutputType | null
    _max: UserFoodDbMaxAggregateOutputType | null
  }

  type GetUserFoodDbGroupByPayload<T extends UserFoodDbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFoodDbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFoodDbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFoodDbGroupByOutputType[P]>
            : GetScalarType<T[P], UserFoodDbGroupByOutputType[P]>
        }
      >
    >


  export type UserFoodDbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    foodId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodType?: boolean | FoodTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFoodDb"]>



  export type UserFoodDbSelectScalar = {
    userId?: boolean
    foodId?: boolean
  }

  export type UserFoodDbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "foodId", ExtArgs["result"]["userFoodDb"]>
  export type UserFoodDbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodType?: boolean | FoodTypeDefaultArgs<ExtArgs>
  }

  export type $UserFoodDbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFoodDb"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      foodType: Prisma.$FoodTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      foodId: number
    }, ExtArgs["result"]["userFoodDb"]>
    composites: {}
  }

  type UserFoodDbGetPayload<S extends boolean | null | undefined | UserFoodDbDefaultArgs> = $Result.GetResult<Prisma.$UserFoodDbPayload, S>

  type UserFoodDbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFoodDbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFoodDbCountAggregateInputType | true
    }

  export interface UserFoodDbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFoodDb'], meta: { name: 'UserFoodDb' } }
    /**
     * Find zero or one UserFoodDb that matches the filter.
     * @param {UserFoodDbFindUniqueArgs} args - Arguments to find a UserFoodDb
     * @example
     * // Get one UserFoodDb
     * const userFoodDb = await prisma.userFoodDb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFoodDbFindUniqueArgs>(args: SelectSubset<T, UserFoodDbFindUniqueArgs<ExtArgs>>): Prisma__UserFoodDbClient<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFoodDb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFoodDbFindUniqueOrThrowArgs} args - Arguments to find a UserFoodDb
     * @example
     * // Get one UserFoodDb
     * const userFoodDb = await prisma.userFoodDb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFoodDbFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFoodDbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFoodDbClient<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFoodDb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodDbFindFirstArgs} args - Arguments to find a UserFoodDb
     * @example
     * // Get one UserFoodDb
     * const userFoodDb = await prisma.userFoodDb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFoodDbFindFirstArgs>(args?: SelectSubset<T, UserFoodDbFindFirstArgs<ExtArgs>>): Prisma__UserFoodDbClient<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFoodDb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodDbFindFirstOrThrowArgs} args - Arguments to find a UserFoodDb
     * @example
     * // Get one UserFoodDb
     * const userFoodDb = await prisma.userFoodDb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFoodDbFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFoodDbFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFoodDbClient<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFoodDbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodDbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFoodDbs
     * const userFoodDbs = await prisma.userFoodDb.findMany()
     * 
     * // Get first 10 UserFoodDbs
     * const userFoodDbs = await prisma.userFoodDb.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userFoodDbWithUserIdOnly = await prisma.userFoodDb.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFoodDbFindManyArgs>(args?: SelectSubset<T, UserFoodDbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFoodDb.
     * @param {UserFoodDbCreateArgs} args - Arguments to create a UserFoodDb.
     * @example
     * // Create one UserFoodDb
     * const UserFoodDb = await prisma.userFoodDb.create({
     *   data: {
     *     // ... data to create a UserFoodDb
     *   }
     * })
     * 
     */
    create<T extends UserFoodDbCreateArgs>(args: SelectSubset<T, UserFoodDbCreateArgs<ExtArgs>>): Prisma__UserFoodDbClient<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFoodDbs.
     * @param {UserFoodDbCreateManyArgs} args - Arguments to create many UserFoodDbs.
     * @example
     * // Create many UserFoodDbs
     * const userFoodDb = await prisma.userFoodDb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFoodDbCreateManyArgs>(args?: SelectSubset<T, UserFoodDbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFoodDb.
     * @param {UserFoodDbDeleteArgs} args - Arguments to delete one UserFoodDb.
     * @example
     * // Delete one UserFoodDb
     * const UserFoodDb = await prisma.userFoodDb.delete({
     *   where: {
     *     // ... filter to delete one UserFoodDb
     *   }
     * })
     * 
     */
    delete<T extends UserFoodDbDeleteArgs>(args: SelectSubset<T, UserFoodDbDeleteArgs<ExtArgs>>): Prisma__UserFoodDbClient<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFoodDb.
     * @param {UserFoodDbUpdateArgs} args - Arguments to update one UserFoodDb.
     * @example
     * // Update one UserFoodDb
     * const userFoodDb = await prisma.userFoodDb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFoodDbUpdateArgs>(args: SelectSubset<T, UserFoodDbUpdateArgs<ExtArgs>>): Prisma__UserFoodDbClient<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFoodDbs.
     * @param {UserFoodDbDeleteManyArgs} args - Arguments to filter UserFoodDbs to delete.
     * @example
     * // Delete a few UserFoodDbs
     * const { count } = await prisma.userFoodDb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFoodDbDeleteManyArgs>(args?: SelectSubset<T, UserFoodDbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFoodDbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodDbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFoodDbs
     * const userFoodDb = await prisma.userFoodDb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFoodDbUpdateManyArgs>(args: SelectSubset<T, UserFoodDbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFoodDb.
     * @param {UserFoodDbUpsertArgs} args - Arguments to update or create a UserFoodDb.
     * @example
     * // Update or create a UserFoodDb
     * const userFoodDb = await prisma.userFoodDb.upsert({
     *   create: {
     *     // ... data to create a UserFoodDb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFoodDb we want to update
     *   }
     * })
     */
    upsert<T extends UserFoodDbUpsertArgs>(args: SelectSubset<T, UserFoodDbUpsertArgs<ExtArgs>>): Prisma__UserFoodDbClient<$Result.GetResult<Prisma.$UserFoodDbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFoodDbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodDbCountArgs} args - Arguments to filter UserFoodDbs to count.
     * @example
     * // Count the number of UserFoodDbs
     * const count = await prisma.userFoodDb.count({
     *   where: {
     *     // ... the filter for the UserFoodDbs we want to count
     *   }
     * })
    **/
    count<T extends UserFoodDbCountArgs>(
      args?: Subset<T, UserFoodDbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFoodDbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFoodDb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodDbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFoodDbAggregateArgs>(args: Subset<T, UserFoodDbAggregateArgs>): Prisma.PrismaPromise<GetUserFoodDbAggregateType<T>>

    /**
     * Group by UserFoodDb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodDbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFoodDbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFoodDbGroupByArgs['orderBy'] }
        : { orderBy?: UserFoodDbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFoodDbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFoodDbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFoodDb model
   */
  readonly fields: UserFoodDbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFoodDb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFoodDbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodType<T extends FoodTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodTypeDefaultArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFoodDb model
   */
  interface UserFoodDbFieldRefs {
    readonly userId: FieldRef<"UserFoodDb", 'Int'>
    readonly foodId: FieldRef<"UserFoodDb", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserFoodDb findUnique
   */
  export type UserFoodDbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodDb to fetch.
     */
    where: UserFoodDbWhereUniqueInput
  }

  /**
   * UserFoodDb findUniqueOrThrow
   */
  export type UserFoodDbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodDb to fetch.
     */
    where: UserFoodDbWhereUniqueInput
  }

  /**
   * UserFoodDb findFirst
   */
  export type UserFoodDbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodDb to fetch.
     */
    where?: UserFoodDbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodDbs to fetch.
     */
    orderBy?: UserFoodDbOrderByWithRelationInput | UserFoodDbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFoodDbs.
     */
    cursor?: UserFoodDbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodDbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodDbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFoodDbs.
     */
    distinct?: UserFoodDbScalarFieldEnum | UserFoodDbScalarFieldEnum[]
  }

  /**
   * UserFoodDb findFirstOrThrow
   */
  export type UserFoodDbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodDb to fetch.
     */
    where?: UserFoodDbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodDbs to fetch.
     */
    orderBy?: UserFoodDbOrderByWithRelationInput | UserFoodDbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFoodDbs.
     */
    cursor?: UserFoodDbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodDbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodDbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFoodDbs.
     */
    distinct?: UserFoodDbScalarFieldEnum | UserFoodDbScalarFieldEnum[]
  }

  /**
   * UserFoodDb findMany
   */
  export type UserFoodDbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    /**
     * Filter, which UserFoodDbs to fetch.
     */
    where?: UserFoodDbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodDbs to fetch.
     */
    orderBy?: UserFoodDbOrderByWithRelationInput | UserFoodDbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFoodDbs.
     */
    cursor?: UserFoodDbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodDbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodDbs.
     */
    skip?: number
    distinct?: UserFoodDbScalarFieldEnum | UserFoodDbScalarFieldEnum[]
  }

  /**
   * UserFoodDb create
   */
  export type UserFoodDbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFoodDb.
     */
    data: XOR<UserFoodDbCreateInput, UserFoodDbUncheckedCreateInput>
  }

  /**
   * UserFoodDb createMany
   */
  export type UserFoodDbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFoodDbs.
     */
    data: UserFoodDbCreateManyInput | UserFoodDbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFoodDb update
   */
  export type UserFoodDbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFoodDb.
     */
    data: XOR<UserFoodDbUpdateInput, UserFoodDbUncheckedUpdateInput>
    /**
     * Choose, which UserFoodDb to update.
     */
    where: UserFoodDbWhereUniqueInput
  }

  /**
   * UserFoodDb updateMany
   */
  export type UserFoodDbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFoodDbs.
     */
    data: XOR<UserFoodDbUpdateManyMutationInput, UserFoodDbUncheckedUpdateManyInput>
    /**
     * Filter which UserFoodDbs to update
     */
    where?: UserFoodDbWhereInput
    /**
     * Limit how many UserFoodDbs to update.
     */
    limit?: number
  }

  /**
   * UserFoodDb upsert
   */
  export type UserFoodDbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFoodDb to update in case it exists.
     */
    where: UserFoodDbWhereUniqueInput
    /**
     * In case the UserFoodDb found by the `where` argument doesn't exist, create a new UserFoodDb with this data.
     */
    create: XOR<UserFoodDbCreateInput, UserFoodDbUncheckedCreateInput>
    /**
     * In case the UserFoodDb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFoodDbUpdateInput, UserFoodDbUncheckedUpdateInput>
  }

  /**
   * UserFoodDb delete
   */
  export type UserFoodDbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
    /**
     * Filter which UserFoodDb to delete.
     */
    where: UserFoodDbWhereUniqueInput
  }

  /**
   * UserFoodDb deleteMany
   */
  export type UserFoodDbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFoodDbs to delete
     */
    where?: UserFoodDbWhereInput
    /**
     * Limit how many UserFoodDbs to delete.
     */
    limit?: number
  }

  /**
   * UserFoodDb without action
   */
  export type UserFoodDbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodDb
     */
    select?: UserFoodDbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodDb
     */
    omit?: UserFoodDbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFoodDbInclude<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    point: number | null
    userId: number | null
  }

  export type MissionSumAggregateOutputType = {
    id: number | null
    storeId: number | null
    point: number | null
    userId: number | null
  }

  export type MissionMinAggregateOutputType = {
    id: number | null
    status: string | null
    content: string | null
    deadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    storeId: number | null
    point: number | null
    userId: number | null
  }

  export type MissionMaxAggregateOutputType = {
    id: number | null
    status: string | null
    content: string | null
    deadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    storeId: number | null
    point: number | null
    userId: number | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    status: number
    content: number
    deadline: number
    createdAt: number
    updatedAt: number
    storeId: number
    point: number
    userId: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    id?: true
    storeId?: true
    point?: true
    userId?: true
  }

  export type MissionSumAggregateInputType = {
    id?: true
    storeId?: true
    point?: true
    userId?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    status?: true
    content?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
    storeId?: true
    point?: true
    userId?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    status?: true
    content?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
    storeId?: true
    point?: true
    userId?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    status?: true
    content?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
    storeId?: true
    point?: true
    userId?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: number
    status: string
    content: string
    deadline: Date
    createdAt: Date | null
    updatedAt: Date | null
    storeId: number
    point: number
    userId: number | null
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    content?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    storeId?: boolean
    point?: boolean
    userId?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    user?: boolean | Mission$userArgs<ExtArgs>
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    id?: boolean
    status?: boolean
    content?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    storeId?: boolean
    point?: boolean
    userId?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "content" | "deadline" | "createdAt" | "updatedAt" | "storeId" | "point" | "userId", ExtArgs["result"]["mission"]>
  export type MissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    user?: boolean | Mission$userArgs<ExtArgs>
  }

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      content: string
      deadline: Date
      createdAt: Date | null
      updatedAt: Date | null
      storeId: number
      point: number
      userId: number | null
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Mission$userArgs<ExtArgs> = {}>(args?: Subset<T, Mission$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'Int'>
    readonly status: FieldRef<"Mission", 'String'>
    readonly content: FieldRef<"Mission", 'String'>
    readonly deadline: FieldRef<"Mission", 'DateTime'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
    readonly updatedAt: FieldRef<"Mission", 'DateTime'>
    readonly storeId: FieldRef<"Mission", 'Int'>
    readonly point: FieldRef<"Mission", 'Int'>
    readonly userId: FieldRef<"Mission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission.user
   */
  export type Mission$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    storeId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    storeId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    text: string | null
    rating: number | null
    userId: number | null
    storeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    text: string | null
    rating: number | null
    userId: number | null
    storeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    text: number
    rating: number
    userId: number
    storeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    storeId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    storeId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    text?: true
    rating?: true
    userId?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    text?: true
    rating?: true
    userId?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    text?: true
    rating?: true
    userId?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    text: string
    rating: number
    userId: number | null
    storeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    rating?: boolean
    userId?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Review$userArgs<ExtArgs>
    store?: boolean | Review$storeArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    text?: boolean
    rating?: boolean
    userId?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "rating" | "userId" | "storeId" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Review$userArgs<ExtArgs>
    store?: boolean | Review$storeArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      store: Prisma.$StorePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      rating: number
      userId: number | null
      storeId: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Review$userArgs<ExtArgs> = {}>(args?: Subset<T, Review$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    store<T extends Review$storeArgs<ExtArgs> = {}>(args?: Subset<T, Review$storeArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly text: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly storeId: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.user
   */
  export type Review$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Review.store
   */
  export type Review$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    gender: 'gender',
    birthDate: 'birthDate',
    region: 'region',
    address: 'address',
    totalPoint: 'totalPoint',
    phoneNumber: 'phoneNumber'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    storeName: 'storeName',
    verifcationId: 'verifcationId',
    openTime: 'openTime',
    closeTime: 'closeTime',
    address: 'address',
    foodTypeId: 'foodTypeId'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const FoodTypeScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type FoodTypeScalarFieldEnum = (typeof FoodTypeScalarFieldEnum)[keyof typeof FoodTypeScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    price: 'price',
    name: 'name'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const UserFoodDbScalarFieldEnum: {
    userId: 'userId',
    foodId: 'foodId'
  };

  export type UserFoodDbScalarFieldEnum = (typeof UserFoodDbScalarFieldEnum)[keyof typeof UserFoodDbScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    content: 'content',
    deadline: 'deadline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    storeId: 'storeId',
    point: 'point',
    userId: 'userId'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    text: 'text',
    rating: 'rating',
    userId: 'userId',
    storeId: 'storeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    gender: 'gender',
    region: 'region',
    address: 'address',
    phoneNumber: 'phoneNumber'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const StoreOrderByRelevanceFieldEnum: {
    storeName: 'storeName',
    address: 'address'
  };

  export type StoreOrderByRelevanceFieldEnum = (typeof StoreOrderByRelevanceFieldEnum)[keyof typeof StoreOrderByRelevanceFieldEnum]


  export const FoodTypeOrderByRelevanceFieldEnum: {
    type: 'type'
  };

  export type FoodTypeOrderByRelevanceFieldEnum = (typeof FoodTypeOrderByRelevanceFieldEnum)[keyof typeof FoodTypeOrderByRelevanceFieldEnum]


  export const FoodOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type FoodOrderByRelevanceFieldEnum = (typeof FoodOrderByRelevanceFieldEnum)[keyof typeof FoodOrderByRelevanceFieldEnum]


  export const MissionOrderByRelevanceFieldEnum: {
    status: 'status',
    content: 'content'
  };

  export type MissionOrderByRelevanceFieldEnum = (typeof MissionOrderByRelevanceFieldEnum)[keyof typeof MissionOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    text: 'text'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    region?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    totalPoint?: IntNullableFilter<"User"> | number | null
    phoneNumber?: StringFilter<"User"> | string
    missions?: MissionListRelationFilter
    reviews?: ReviewListRelationFilter
    userFoods?: UserFoodDbListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    region?: SortOrder
    address?: SortOrder
    totalPoint?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    missions?: MissionOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    userFoods?: UserFoodDbOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    region?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    totalPoint?: IntNullableFilter<"User"> | number | null
    phoneNumber?: StringFilter<"User"> | string
    missions?: MissionListRelationFilter
    reviews?: ReviewListRelationFilter
    userFoods?: UserFoodDbListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    region?: SortOrder
    address?: SortOrder
    totalPoint?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    birthDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    region?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    totalPoint?: IntNullableWithAggregatesFilter<"User"> | number | null
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    storeName?: StringFilter<"Store"> | string
    verifcationId?: IntFilter<"Store"> | number
    openTime?: DateTimeNullableFilter<"Store"> | Date | string | null
    closeTime?: DateTimeNullableFilter<"Store"> | Date | string | null
    address?: StringFilter<"Store"> | string
    foodTypeId?: IntNullableFilter<"Store"> | number | null
    foodType?: XOR<FoodTypeNullableScalarRelationFilter, FoodTypeWhereInput> | null
    missions?: MissionListRelationFilter
    reviews?: ReviewListRelationFilter
    foods?: FoodListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    storeName?: SortOrder
    verifcationId?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    address?: SortOrder
    foodTypeId?: SortOrderInput | SortOrder
    foodType?: FoodTypeOrderByWithRelationInput
    missions?: MissionOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    foods?: FoodOrderByRelationAggregateInput
    _relevance?: StoreOrderByRelevanceInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    foodTypeId?: number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    storeName?: StringFilter<"Store"> | string
    verifcationId?: IntFilter<"Store"> | number
    openTime?: DateTimeNullableFilter<"Store"> | Date | string | null
    closeTime?: DateTimeNullableFilter<"Store"> | Date | string | null
    address?: StringFilter<"Store"> | string
    foodType?: XOR<FoodTypeNullableScalarRelationFilter, FoodTypeWhereInput> | null
    missions?: MissionListRelationFilter
    reviews?: ReviewListRelationFilter
    foods?: FoodListRelationFilter
  }, "id" | "foodTypeId">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    storeName?: SortOrder
    verifcationId?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    address?: SortOrder
    foodTypeId?: SortOrderInput | SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    storeName?: StringWithAggregatesFilter<"Store"> | string
    verifcationId?: IntWithAggregatesFilter<"Store"> | number
    openTime?: DateTimeNullableWithAggregatesFilter<"Store"> | Date | string | null
    closeTime?: DateTimeNullableWithAggregatesFilter<"Store"> | Date | string | null
    address?: StringWithAggregatesFilter<"Store"> | string
    foodTypeId?: IntNullableWithAggregatesFilter<"Store"> | number | null
  }

  export type FoodTypeWhereInput = {
    AND?: FoodTypeWhereInput | FoodTypeWhereInput[]
    OR?: FoodTypeWhereInput[]
    NOT?: FoodTypeWhereInput | FoodTypeWhereInput[]
    id?: IntFilter<"FoodType"> | number
    type?: StringFilter<"FoodType"> | string
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    userFoodDbs?: UserFoodDbListRelationFilter
  }

  export type FoodTypeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    store?: StoreOrderByWithRelationInput
    userFoodDbs?: UserFoodDbOrderByRelationAggregateInput
    _relevance?: FoodTypeOrderByRelevanceInput
  }

  export type FoodTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodTypeWhereInput | FoodTypeWhereInput[]
    OR?: FoodTypeWhereInput[]
    NOT?: FoodTypeWhereInput | FoodTypeWhereInput[]
    type?: StringFilter<"FoodType"> | string
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    userFoodDbs?: UserFoodDbListRelationFilter
  }, "id">

  export type FoodTypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: FoodTypeCountOrderByAggregateInput
    _avg?: FoodTypeAvgOrderByAggregateInput
    _max?: FoodTypeMaxOrderByAggregateInput
    _min?: FoodTypeMinOrderByAggregateInput
    _sum?: FoodTypeSumOrderByAggregateInput
  }

  export type FoodTypeScalarWhereWithAggregatesInput = {
    AND?: FoodTypeScalarWhereWithAggregatesInput | FoodTypeScalarWhereWithAggregatesInput[]
    OR?: FoodTypeScalarWhereWithAggregatesInput[]
    NOT?: FoodTypeScalarWhereWithAggregatesInput | FoodTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodType"> | number
    type?: StringWithAggregatesFilter<"FoodType"> | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: IntFilter<"Food"> | number
    storeId?: IntFilter<"Food"> | number
    price?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    price?: SortOrder
    name?: SortOrder
    store?: StoreOrderByWithRelationInput
    _relevance?: FoodOrderByRelevanceInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    storeId?: IntFilter<"Food"> | number
    price?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    price?: SortOrder
    name?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Food"> | number
    storeId?: IntWithAggregatesFilter<"Food"> | number
    price?: IntWithAggregatesFilter<"Food"> | number
    name?: StringWithAggregatesFilter<"Food"> | string
  }

  export type UserFoodDbWhereInput = {
    AND?: UserFoodDbWhereInput | UserFoodDbWhereInput[]
    OR?: UserFoodDbWhereInput[]
    NOT?: UserFoodDbWhereInput | UserFoodDbWhereInput[]
    userId?: IntFilter<"UserFoodDb"> | number
    foodId?: IntFilter<"UserFoodDb"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodType?: XOR<FoodTypeScalarRelationFilter, FoodTypeWhereInput>
  }

  export type UserFoodDbOrderByWithRelationInput = {
    userId?: SortOrder
    foodId?: SortOrder
    user?: UserOrderByWithRelationInput
    foodType?: FoodTypeOrderByWithRelationInput
  }

  export type UserFoodDbWhereUniqueInput = Prisma.AtLeast<{
    userId_foodId?: UserFoodDbUserIdFoodIdCompoundUniqueInput
    AND?: UserFoodDbWhereInput | UserFoodDbWhereInput[]
    OR?: UserFoodDbWhereInput[]
    NOT?: UserFoodDbWhereInput | UserFoodDbWhereInput[]
    userId?: IntFilter<"UserFoodDb"> | number
    foodId?: IntFilter<"UserFoodDb"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodType?: XOR<FoodTypeScalarRelationFilter, FoodTypeWhereInput>
  }, "userId_foodId">

  export type UserFoodDbOrderByWithAggregationInput = {
    userId?: SortOrder
    foodId?: SortOrder
    _count?: UserFoodDbCountOrderByAggregateInput
    _avg?: UserFoodDbAvgOrderByAggregateInput
    _max?: UserFoodDbMaxOrderByAggregateInput
    _min?: UserFoodDbMinOrderByAggregateInput
    _sum?: UserFoodDbSumOrderByAggregateInput
  }

  export type UserFoodDbScalarWhereWithAggregatesInput = {
    AND?: UserFoodDbScalarWhereWithAggregatesInput | UserFoodDbScalarWhereWithAggregatesInput[]
    OR?: UserFoodDbScalarWhereWithAggregatesInput[]
    NOT?: UserFoodDbScalarWhereWithAggregatesInput | UserFoodDbScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserFoodDb"> | number
    foodId?: IntWithAggregatesFilter<"UserFoodDb"> | number
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: IntFilter<"Mission"> | number
    status?: StringFilter<"Mission"> | string
    content?: StringFilter<"Mission"> | string
    deadline?: DateTimeFilter<"Mission"> | Date | string
    createdAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    storeId?: IntFilter<"Mission"> | number
    point?: IntFilter<"Mission"> | number
    userId?: IntNullableFilter<"Mission"> | number | null
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    content?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    storeId?: SortOrder
    point?: SortOrder
    userId?: SortOrderInput | SortOrder
    store?: StoreOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: MissionOrderByRelevanceInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    status?: StringFilter<"Mission"> | string
    content?: StringFilter<"Mission"> | string
    deadline?: DateTimeFilter<"Mission"> | Date | string
    createdAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    storeId?: IntFilter<"Mission"> | number
    point?: IntFilter<"Mission"> | number
    userId?: IntNullableFilter<"Mission"> | number | null
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    content?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    storeId?: SortOrder
    point?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mission"> | number
    status?: StringWithAggregatesFilter<"Mission"> | string
    content?: StringWithAggregatesFilter<"Mission"> | string
    deadline?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null
    storeId?: IntWithAggregatesFilter<"Mission"> | number
    point?: IntWithAggregatesFilter<"Mission"> | number
    userId?: IntNullableWithAggregatesFilter<"Mission"> | number | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    text?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    userId?: IntNullableFilter<"Review"> | number | null
    storeId?: IntNullableFilter<"Review"> | number | null
    createdAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    rating?: SortOrder
    userId?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    text?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    userId?: IntNullableFilter<"Review"> | number | null
    storeId?: IntNullableFilter<"Review"> | number | null
    createdAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    rating?: SortOrder
    userId?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    text?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntNullableWithAggregatesFilter<"Review"> | number | null
    storeId?: IntNullableWithAggregatesFilter<"Review"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    gender: string
    birthDate: Date | string
    region: string
    address: string
    totalPoint?: number | null
    phoneNumber: string
    missions?: MissionCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    userFoods?: UserFoodDbCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    gender: string
    birthDate: Date | string
    region: string
    address: string
    totalPoint?: number | null
    phoneNumber: string
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    userFoods?: UserFoodDbUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    missions?: MissionUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    userFoods?: UserFoodDbUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    userFoods?: UserFoodDbUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    gender: string
    birthDate: Date | string
    region: string
    address: string
    totalPoint?: number | null
    phoneNumber: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type StoreCreateInput = {
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    foodType?: FoodTypeCreateNestedOneWithoutStoreInput
    missions?: MissionCreateNestedManyWithoutStoreInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    foods?: FoodCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    foodTypeId?: number | null
    missions?: MissionUncheckedCreateNestedManyWithoutStoreInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    foods?: FoodUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    foodType?: FoodTypeUpdateOneWithoutStoreNestedInput
    missions?: MissionUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    foods?: FoodUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    foodTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    missions?: MissionUncheckedUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    foods?: FoodUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    foodTypeId?: number | null
  }

  export type StoreUpdateManyMutationInput = {
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    foodTypeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FoodTypeCreateInput = {
    type: string
    store?: StoreCreateNestedOneWithoutFoodTypeInput
    userFoodDbs?: UserFoodDbCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeUncheckedCreateInput = {
    id?: number
    type: string
    store?: StoreUncheckedCreateNestedOneWithoutFoodTypeInput
    userFoodDbs?: UserFoodDbUncheckedCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateOneWithoutFoodTypeNestedInput
    userFoodDbs?: UserFoodDbUpdateManyWithoutFoodTypeNestedInput
  }

  export type FoodTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    store?: StoreUncheckedUpdateOneWithoutFoodTypeNestedInput
    userFoodDbs?: UserFoodDbUncheckedUpdateManyWithoutFoodTypeNestedInput
  }

  export type FoodTypeCreateManyInput = {
    id?: number
    type: string
  }

  export type FoodTypeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type FoodTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCreateInput = {
    price: number
    name: string
    store: StoreCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateInput = {
    id?: number
    storeId: number
    price: number
    name: string
  }

  export type FoodUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCreateManyInput = {
    id?: number
    storeId: number
    price: number
    name: string
  }

  export type FoodUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserFoodDbCreateInput = {
    user: UserCreateNestedOneWithoutUserFoodsInput
    foodType: FoodTypeCreateNestedOneWithoutUserFoodDbsInput
  }

  export type UserFoodDbUncheckedCreateInput = {
    userId: number
    foodId: number
  }

  export type UserFoodDbUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserFoodsNestedInput
    foodType?: FoodTypeUpdateOneRequiredWithoutUserFoodDbsNestedInput
  }

  export type UserFoodDbUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFoodDbCreateManyInput = {
    userId: number
    foodId: number
  }

  export type UserFoodDbUpdateManyMutationInput = {

  }

  export type UserFoodDbUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type MissionCreateInput = {
    status?: string
    content: string
    deadline: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    point: number
    store: StoreCreateNestedOneWithoutMissionsInput
    user?: UserCreateNestedOneWithoutMissionsInput
  }

  export type MissionUncheckedCreateInput = {
    id?: number
    status?: string
    content: string
    deadline: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    storeId: number
    point: number
    userId?: number | null
  }

  export type MissionUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    point?: IntFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutMissionsNestedInput
    user?: UserUpdateOneWithoutMissionsNestedInput
  }

  export type MissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MissionCreateManyInput = {
    id?: number
    status?: string
    content: string
    deadline: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    storeId: number
    point: number
    userId?: number | null
  }

  export type MissionUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    point?: IntFieldUpdateOperationsInput | number
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewCreateInput = {
    text: string
    rating: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutReviewsInput
    store?: StoreCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    text: string
    rating: number
    userId?: number | null
    storeId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ReviewUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutReviewsNestedInput
    store?: StoreUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateManyInput = {
    id?: number
    text: string
    rating: number
    userId?: number | null
    storeId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ReviewUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MissionListRelationFilter = {
    every?: MissionWhereInput
    some?: MissionWhereInput
    none?: MissionWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type UserFoodDbListRelationFilter = {
    every?: UserFoodDbWhereInput
    some?: UserFoodDbWhereInput
    none?: UserFoodDbWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFoodDbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    region?: SortOrder
    address?: SortOrder
    totalPoint?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPoint?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    region?: SortOrder
    address?: SortOrder
    totalPoint?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    region?: SortOrder
    address?: SortOrder
    totalPoint?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    totalPoint?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FoodTypeNullableScalarRelationFilter = {
    is?: FoodTypeWhereInput | null
    isNot?: FoodTypeWhereInput | null
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreOrderByRelevanceInput = {
    fields: StoreOrderByRelevanceFieldEnum | StoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    storeName?: SortOrder
    verifcationId?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    address?: SortOrder
    foodTypeId?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
    verifcationId?: SortOrder
    foodTypeId?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    storeName?: SortOrder
    verifcationId?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    address?: SortOrder
    foodTypeId?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    storeName?: SortOrder
    verifcationId?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    address?: SortOrder
    foodTypeId?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
    verifcationId?: SortOrder
    foodTypeId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StoreNullableScalarRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type FoodTypeOrderByRelevanceInput = {
    fields: FoodTypeOrderByRelevanceFieldEnum | FoodTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodTypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type FoodTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoodTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type FoodTypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type FoodTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type FoodOrderByRelevanceInput = {
    fields: FoodOrderByRelevanceFieldEnum | FoodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    price?: SortOrder
    name?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    price?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    price?: SortOrder
    name?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    price?: SortOrder
    name?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    price?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FoodTypeScalarRelationFilter = {
    is?: FoodTypeWhereInput
    isNot?: FoodTypeWhereInput
  }

  export type UserFoodDbUserIdFoodIdCompoundUniqueInput = {
    userId: number
    foodId: number
  }

  export type UserFoodDbCountOrderByAggregateInput = {
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type UserFoodDbAvgOrderByAggregateInput = {
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type UserFoodDbMaxOrderByAggregateInput = {
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type UserFoodDbMinOrderByAggregateInput = {
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type UserFoodDbSumOrderByAggregateInput = {
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MissionOrderByRelevanceInput = {
    fields: MissionOrderByRelevanceFieldEnum | MissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    content?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storeId?: SortOrder
    point?: SortOrder
    userId?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    point?: SortOrder
    userId?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    content?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storeId?: SortOrder
    point?: SortOrder
    userId?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    content?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    storeId?: SortOrder
    point?: SortOrder
    userId?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    point?: SortOrder
    userId?: SortOrder
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
  }

  export type MissionCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput> | MissionCreateWithoutUserInput[] | MissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutUserInput | MissionCreateOrConnectWithoutUserInput[]
    createMany?: MissionCreateManyUserInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserFoodDbCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFoodDbCreateWithoutUserInput, UserFoodDbUncheckedCreateWithoutUserInput> | UserFoodDbCreateWithoutUserInput[] | UserFoodDbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFoodDbCreateOrConnectWithoutUserInput | UserFoodDbCreateOrConnectWithoutUserInput[]
    createMany?: UserFoodDbCreateManyUserInputEnvelope
    connect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput> | MissionCreateWithoutUserInput[] | MissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutUserInput | MissionCreateOrConnectWithoutUserInput[]
    createMany?: MissionCreateManyUserInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserFoodDbUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFoodDbCreateWithoutUserInput, UserFoodDbUncheckedCreateWithoutUserInput> | UserFoodDbCreateWithoutUserInput[] | UserFoodDbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFoodDbCreateOrConnectWithoutUserInput | UserFoodDbCreateOrConnectWithoutUserInput[]
    createMany?: UserFoodDbCreateManyUserInputEnvelope
    connect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput> | MissionCreateWithoutUserInput[] | MissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutUserInput | MissionCreateOrConnectWithoutUserInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutUserInput | MissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionCreateManyUserInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutUserInput | MissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutUserInput | MissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserFoodDbUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFoodDbCreateWithoutUserInput, UserFoodDbUncheckedCreateWithoutUserInput> | UserFoodDbCreateWithoutUserInput[] | UserFoodDbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFoodDbCreateOrConnectWithoutUserInput | UserFoodDbCreateOrConnectWithoutUserInput[]
    upsert?: UserFoodDbUpsertWithWhereUniqueWithoutUserInput | UserFoodDbUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFoodDbCreateManyUserInputEnvelope
    set?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    disconnect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    delete?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    connect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    update?: UserFoodDbUpdateWithWhereUniqueWithoutUserInput | UserFoodDbUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFoodDbUpdateManyWithWhereWithoutUserInput | UserFoodDbUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFoodDbScalarWhereInput | UserFoodDbScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput> | MissionCreateWithoutUserInput[] | MissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutUserInput | MissionCreateOrConnectWithoutUserInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutUserInput | MissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MissionCreateManyUserInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutUserInput | MissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutUserInput | MissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserFoodDbUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFoodDbCreateWithoutUserInput, UserFoodDbUncheckedCreateWithoutUserInput> | UserFoodDbCreateWithoutUserInput[] | UserFoodDbUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFoodDbCreateOrConnectWithoutUserInput | UserFoodDbCreateOrConnectWithoutUserInput[]
    upsert?: UserFoodDbUpsertWithWhereUniqueWithoutUserInput | UserFoodDbUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFoodDbCreateManyUserInputEnvelope
    set?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    disconnect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    delete?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    connect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    update?: UserFoodDbUpdateWithWhereUniqueWithoutUserInput | UserFoodDbUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFoodDbUpdateManyWithWhereWithoutUserInput | UserFoodDbUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFoodDbScalarWhereInput | UserFoodDbScalarWhereInput[]
  }

  export type FoodTypeCreateNestedOneWithoutStoreInput = {
    create?: XOR<FoodTypeCreateWithoutStoreInput, FoodTypeUncheckedCreateWithoutStoreInput>
    connectOrCreate?: FoodTypeCreateOrConnectWithoutStoreInput
    connect?: FoodTypeWhereUniqueInput
  }

  export type MissionCreateNestedManyWithoutStoreInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FoodCreateNestedManyWithoutStoreInput = {
    create?: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput> | FoodCreateWithoutStoreInput[] | FoodUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutStoreInput | FoodCreateOrConnectWithoutStoreInput[]
    createMany?: FoodCreateManyStoreInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type MissionUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput> | FoodCreateWithoutStoreInput[] | FoodUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutStoreInput | FoodCreateOrConnectWithoutStoreInput[]
    createMany?: FoodCreateManyStoreInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FoodTypeUpdateOneWithoutStoreNestedInput = {
    create?: XOR<FoodTypeCreateWithoutStoreInput, FoodTypeUncheckedCreateWithoutStoreInput>
    connectOrCreate?: FoodTypeCreateOrConnectWithoutStoreInput
    upsert?: FoodTypeUpsertWithoutStoreInput
    disconnect?: FoodTypeWhereInput | boolean
    delete?: FoodTypeWhereInput | boolean
    connect?: FoodTypeWhereUniqueInput
    update?: XOR<XOR<FoodTypeUpdateToOneWithWhereWithoutStoreInput, FoodTypeUpdateWithoutStoreInput>, FoodTypeUncheckedUpdateWithoutStoreInput>
  }

  export type MissionUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutStoreInput | MissionUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutStoreInput | MissionUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutStoreInput | MissionUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FoodUpdateManyWithoutStoreNestedInput = {
    create?: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput> | FoodCreateWithoutStoreInput[] | FoodUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutStoreInput | FoodCreateOrConnectWithoutStoreInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutStoreInput | FoodUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: FoodCreateManyStoreInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutStoreInput | FoodUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutStoreInput | FoodUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type MissionUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput> | MissionCreateWithoutStoreInput[] | MissionUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionCreateOrConnectWithoutStoreInput | MissionCreateOrConnectWithoutStoreInput[]
    upsert?: MissionUpsertWithWhereUniqueWithoutStoreInput | MissionUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MissionCreateManyStoreInputEnvelope
    set?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    disconnect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    delete?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    connect?: MissionWhereUniqueInput | MissionWhereUniqueInput[]
    update?: MissionUpdateWithWhereUniqueWithoutStoreInput | MissionUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MissionUpdateManyWithWhereWithoutStoreInput | MissionUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MissionScalarWhereInput | MissionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FoodUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput> | FoodCreateWithoutStoreInput[] | FoodUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutStoreInput | FoodCreateOrConnectWithoutStoreInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutStoreInput | FoodUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: FoodCreateManyStoreInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutStoreInput | FoodUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutStoreInput | FoodUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutFoodTypeInput = {
    create?: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFoodTypeInput
    connect?: StoreWhereUniqueInput
  }

  export type UserFoodDbCreateNestedManyWithoutFoodTypeInput = {
    create?: XOR<UserFoodDbCreateWithoutFoodTypeInput, UserFoodDbUncheckedCreateWithoutFoodTypeInput> | UserFoodDbCreateWithoutFoodTypeInput[] | UserFoodDbUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: UserFoodDbCreateOrConnectWithoutFoodTypeInput | UserFoodDbCreateOrConnectWithoutFoodTypeInput[]
    createMany?: UserFoodDbCreateManyFoodTypeInputEnvelope
    connect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedOneWithoutFoodTypeInput = {
    create?: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFoodTypeInput
    connect?: StoreWhereUniqueInput
  }

  export type UserFoodDbUncheckedCreateNestedManyWithoutFoodTypeInput = {
    create?: XOR<UserFoodDbCreateWithoutFoodTypeInput, UserFoodDbUncheckedCreateWithoutFoodTypeInput> | UserFoodDbCreateWithoutFoodTypeInput[] | UserFoodDbUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: UserFoodDbCreateOrConnectWithoutFoodTypeInput | UserFoodDbCreateOrConnectWithoutFoodTypeInput[]
    createMany?: UserFoodDbCreateManyFoodTypeInputEnvelope
    connect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
  }

  export type StoreUpdateOneWithoutFoodTypeNestedInput = {
    create?: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFoodTypeInput
    upsert?: StoreUpsertWithoutFoodTypeInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutFoodTypeInput, StoreUpdateWithoutFoodTypeInput>, StoreUncheckedUpdateWithoutFoodTypeInput>
  }

  export type UserFoodDbUpdateManyWithoutFoodTypeNestedInput = {
    create?: XOR<UserFoodDbCreateWithoutFoodTypeInput, UserFoodDbUncheckedCreateWithoutFoodTypeInput> | UserFoodDbCreateWithoutFoodTypeInput[] | UserFoodDbUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: UserFoodDbCreateOrConnectWithoutFoodTypeInput | UserFoodDbCreateOrConnectWithoutFoodTypeInput[]
    upsert?: UserFoodDbUpsertWithWhereUniqueWithoutFoodTypeInput | UserFoodDbUpsertWithWhereUniqueWithoutFoodTypeInput[]
    createMany?: UserFoodDbCreateManyFoodTypeInputEnvelope
    set?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    disconnect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    delete?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    connect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    update?: UserFoodDbUpdateWithWhereUniqueWithoutFoodTypeInput | UserFoodDbUpdateWithWhereUniqueWithoutFoodTypeInput[]
    updateMany?: UserFoodDbUpdateManyWithWhereWithoutFoodTypeInput | UserFoodDbUpdateManyWithWhereWithoutFoodTypeInput[]
    deleteMany?: UserFoodDbScalarWhereInput | UserFoodDbScalarWhereInput[]
  }

  export type StoreUncheckedUpdateOneWithoutFoodTypeNestedInput = {
    create?: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFoodTypeInput
    upsert?: StoreUpsertWithoutFoodTypeInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutFoodTypeInput, StoreUpdateWithoutFoodTypeInput>, StoreUncheckedUpdateWithoutFoodTypeInput>
  }

  export type UserFoodDbUncheckedUpdateManyWithoutFoodTypeNestedInput = {
    create?: XOR<UserFoodDbCreateWithoutFoodTypeInput, UserFoodDbUncheckedCreateWithoutFoodTypeInput> | UserFoodDbCreateWithoutFoodTypeInput[] | UserFoodDbUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: UserFoodDbCreateOrConnectWithoutFoodTypeInput | UserFoodDbCreateOrConnectWithoutFoodTypeInput[]
    upsert?: UserFoodDbUpsertWithWhereUniqueWithoutFoodTypeInput | UserFoodDbUpsertWithWhereUniqueWithoutFoodTypeInput[]
    createMany?: UserFoodDbCreateManyFoodTypeInputEnvelope
    set?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    disconnect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    delete?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    connect?: UserFoodDbWhereUniqueInput | UserFoodDbWhereUniqueInput[]
    update?: UserFoodDbUpdateWithWhereUniqueWithoutFoodTypeInput | UserFoodDbUpdateWithWhereUniqueWithoutFoodTypeInput[]
    updateMany?: UserFoodDbUpdateManyWithWhereWithoutFoodTypeInput | UserFoodDbUpdateManyWithWhereWithoutFoodTypeInput[]
    deleteMany?: UserFoodDbScalarWhereInput | UserFoodDbScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutFoodsInput = {
    create?: XOR<StoreCreateWithoutFoodsInput, StoreUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFoodsInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<StoreCreateWithoutFoodsInput, StoreUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFoodsInput
    upsert?: StoreUpsertWithoutFoodsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutFoodsInput, StoreUpdateWithoutFoodsInput>, StoreUncheckedUpdateWithoutFoodsInput>
  }

  export type UserCreateNestedOneWithoutUserFoodsInput = {
    create?: XOR<UserCreateWithoutUserFoodsInput, UserUncheckedCreateWithoutUserFoodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFoodsInput
    connect?: UserWhereUniqueInput
  }

  export type FoodTypeCreateNestedOneWithoutUserFoodDbsInput = {
    create?: XOR<FoodTypeCreateWithoutUserFoodDbsInput, FoodTypeUncheckedCreateWithoutUserFoodDbsInput>
    connectOrCreate?: FoodTypeCreateOrConnectWithoutUserFoodDbsInput
    connect?: FoodTypeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserFoodsNestedInput = {
    create?: XOR<UserCreateWithoutUserFoodsInput, UserUncheckedCreateWithoutUserFoodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFoodsInput
    upsert?: UserUpsertWithoutUserFoodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFoodsInput, UserUpdateWithoutUserFoodsInput>, UserUncheckedUpdateWithoutUserFoodsInput>
  }

  export type FoodTypeUpdateOneRequiredWithoutUserFoodDbsNestedInput = {
    create?: XOR<FoodTypeCreateWithoutUserFoodDbsInput, FoodTypeUncheckedCreateWithoutUserFoodDbsInput>
    connectOrCreate?: FoodTypeCreateOrConnectWithoutUserFoodDbsInput
    upsert?: FoodTypeUpsertWithoutUserFoodDbsInput
    connect?: FoodTypeWhereUniqueInput
    update?: XOR<XOR<FoodTypeUpdateToOneWithWhereWithoutUserFoodDbsInput, FoodTypeUpdateWithoutUserFoodDbsInput>, FoodTypeUncheckedUpdateWithoutUserFoodDbsInput>
  }

  export type StoreCreateNestedOneWithoutMissionsInput = {
    create?: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMissionsInput
    connect?: StoreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMissionsInput = {
    create?: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionsInput
    connect?: UserWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMissionsInput
    upsert?: StoreUpsertWithoutMissionsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutMissionsInput, StoreUpdateWithoutMissionsInput>, StoreUncheckedUpdateWithoutMissionsInput>
  }

  export type UserUpdateOneWithoutMissionsNestedInput = {
    create?: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMissionsInput
    upsert?: UserUpsertWithoutMissionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMissionsInput, UserUpdateWithoutMissionsInput>, UserUncheckedUpdateWithoutMissionsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutReviewsInput = {
    create?: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewsInput
    connect?: StoreWhereUniqueInput
  }

  export type UserUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type StoreUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewsInput
    upsert?: StoreUpsertWithoutReviewsInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutReviewsInput, StoreUpdateWithoutReviewsInput>, StoreUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MissionCreateWithoutUserInput = {
    status?: string
    content: string
    deadline: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    point: number
    store: StoreCreateNestedOneWithoutMissionsInput
  }

  export type MissionUncheckedCreateWithoutUserInput = {
    id?: number
    status?: string
    content: string
    deadline: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    storeId: number
    point: number
  }

  export type MissionCreateOrConnectWithoutUserInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput>
  }

  export type MissionCreateManyUserInputEnvelope = {
    data: MissionCreateManyUserInput | MissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    text: string
    rating: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    store?: StoreCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    text: string
    rating: number
    storeId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFoodDbCreateWithoutUserInput = {
    foodType: FoodTypeCreateNestedOneWithoutUserFoodDbsInput
  }

  export type UserFoodDbUncheckedCreateWithoutUserInput = {
    foodId: number
  }

  export type UserFoodDbCreateOrConnectWithoutUserInput = {
    where: UserFoodDbWhereUniqueInput
    create: XOR<UserFoodDbCreateWithoutUserInput, UserFoodDbUncheckedCreateWithoutUserInput>
  }

  export type UserFoodDbCreateManyUserInputEnvelope = {
    data: UserFoodDbCreateManyUserInput | UserFoodDbCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MissionUpsertWithWhereUniqueWithoutUserInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutUserInput, MissionUncheckedUpdateWithoutUserInput>
    create: XOR<MissionCreateWithoutUserInput, MissionUncheckedCreateWithoutUserInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutUserInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutUserInput, MissionUncheckedUpdateWithoutUserInput>
  }

  export type MissionUpdateManyWithWhereWithoutUserInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutUserInput>
  }

  export type MissionScalarWhereInput = {
    AND?: MissionScalarWhereInput | MissionScalarWhereInput[]
    OR?: MissionScalarWhereInput[]
    NOT?: MissionScalarWhereInput | MissionScalarWhereInput[]
    id?: IntFilter<"Mission"> | number
    status?: StringFilter<"Mission"> | string
    content?: StringFilter<"Mission"> | string
    deadline?: DateTimeFilter<"Mission"> | Date | string
    createdAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
    storeId?: IntFilter<"Mission"> | number
    point?: IntFilter<"Mission"> | number
    userId?: IntNullableFilter<"Mission"> | number | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    text?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    userId?: IntNullableFilter<"Review"> | number | null
    storeId?: IntNullableFilter<"Review"> | number | null
    createdAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
  }

  export type UserFoodDbUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFoodDbWhereUniqueInput
    update: XOR<UserFoodDbUpdateWithoutUserInput, UserFoodDbUncheckedUpdateWithoutUserInput>
    create: XOR<UserFoodDbCreateWithoutUserInput, UserFoodDbUncheckedCreateWithoutUserInput>
  }

  export type UserFoodDbUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFoodDbWhereUniqueInput
    data: XOR<UserFoodDbUpdateWithoutUserInput, UserFoodDbUncheckedUpdateWithoutUserInput>
  }

  export type UserFoodDbUpdateManyWithWhereWithoutUserInput = {
    where: UserFoodDbScalarWhereInput
    data: XOR<UserFoodDbUpdateManyMutationInput, UserFoodDbUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFoodDbScalarWhereInput = {
    AND?: UserFoodDbScalarWhereInput | UserFoodDbScalarWhereInput[]
    OR?: UserFoodDbScalarWhereInput[]
    NOT?: UserFoodDbScalarWhereInput | UserFoodDbScalarWhereInput[]
    userId?: IntFilter<"UserFoodDb"> | number
    foodId?: IntFilter<"UserFoodDb"> | number
  }

  export type FoodTypeCreateWithoutStoreInput = {
    type: string
    userFoodDbs?: UserFoodDbCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeUncheckedCreateWithoutStoreInput = {
    id?: number
    type: string
    userFoodDbs?: UserFoodDbUncheckedCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeCreateOrConnectWithoutStoreInput = {
    where: FoodTypeWhereUniqueInput
    create: XOR<FoodTypeCreateWithoutStoreInput, FoodTypeUncheckedCreateWithoutStoreInput>
  }

  export type MissionCreateWithoutStoreInput = {
    status?: string
    content: string
    deadline: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    point: number
    user?: UserCreateNestedOneWithoutMissionsInput
  }

  export type MissionUncheckedCreateWithoutStoreInput = {
    id?: number
    status?: string
    content: string
    deadline: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    point: number
    userId?: number | null
  }

  export type MissionCreateOrConnectWithoutStoreInput = {
    where: MissionWhereUniqueInput
    create: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput>
  }

  export type MissionCreateManyStoreInputEnvelope = {
    data: MissionCreateManyStoreInput | MissionCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutStoreInput = {
    text: string
    rating: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutStoreInput = {
    id?: number
    text: string
    rating: number
    userId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ReviewCreateOrConnectWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewCreateManyStoreInputEnvelope = {
    data: ReviewCreateManyStoreInput | ReviewCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type FoodCreateWithoutStoreInput = {
    price: number
    name: string
  }

  export type FoodUncheckedCreateWithoutStoreInput = {
    id?: number
    price: number
    name: string
  }

  export type FoodCreateOrConnectWithoutStoreInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput>
  }

  export type FoodCreateManyStoreInputEnvelope = {
    data: FoodCreateManyStoreInput | FoodCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type FoodTypeUpsertWithoutStoreInput = {
    update: XOR<FoodTypeUpdateWithoutStoreInput, FoodTypeUncheckedUpdateWithoutStoreInput>
    create: XOR<FoodTypeCreateWithoutStoreInput, FoodTypeUncheckedCreateWithoutStoreInput>
    where?: FoodTypeWhereInput
  }

  export type FoodTypeUpdateToOneWithWhereWithoutStoreInput = {
    where?: FoodTypeWhereInput
    data: XOR<FoodTypeUpdateWithoutStoreInput, FoodTypeUncheckedUpdateWithoutStoreInput>
  }

  export type FoodTypeUpdateWithoutStoreInput = {
    type?: StringFieldUpdateOperationsInput | string
    userFoodDbs?: UserFoodDbUpdateManyWithoutFoodTypeNestedInput
  }

  export type FoodTypeUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    userFoodDbs?: UserFoodDbUncheckedUpdateManyWithoutFoodTypeNestedInput
  }

  export type MissionUpsertWithWhereUniqueWithoutStoreInput = {
    where: MissionWhereUniqueInput
    update: XOR<MissionUpdateWithoutStoreInput, MissionUncheckedUpdateWithoutStoreInput>
    create: XOR<MissionCreateWithoutStoreInput, MissionUncheckedCreateWithoutStoreInput>
  }

  export type MissionUpdateWithWhereUniqueWithoutStoreInput = {
    where: MissionWhereUniqueInput
    data: XOR<MissionUpdateWithoutStoreInput, MissionUncheckedUpdateWithoutStoreInput>
  }

  export type MissionUpdateManyWithWhereWithoutStoreInput = {
    where: MissionScalarWhereInput
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyWithoutStoreInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
  }

  export type ReviewUpdateManyWithWhereWithoutStoreInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutStoreInput>
  }

  export type FoodUpsertWithWhereUniqueWithoutStoreInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutStoreInput, FoodUncheckedUpdateWithoutStoreInput>
    create: XOR<FoodCreateWithoutStoreInput, FoodUncheckedCreateWithoutStoreInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutStoreInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutStoreInput, FoodUncheckedUpdateWithoutStoreInput>
  }

  export type FoodUpdateManyWithWhereWithoutStoreInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutStoreInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: IntFilter<"Food"> | number
    storeId?: IntFilter<"Food"> | number
    price?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
  }

  export type StoreCreateWithoutFoodTypeInput = {
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    missions?: MissionCreateNestedManyWithoutStoreInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    foods?: FoodCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutFoodTypeInput = {
    id?: number
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    missions?: MissionUncheckedCreateNestedManyWithoutStoreInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    foods?: FoodUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutFoodTypeInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput>
  }

  export type UserFoodDbCreateWithoutFoodTypeInput = {
    user: UserCreateNestedOneWithoutUserFoodsInput
  }

  export type UserFoodDbUncheckedCreateWithoutFoodTypeInput = {
    userId: number
  }

  export type UserFoodDbCreateOrConnectWithoutFoodTypeInput = {
    where: UserFoodDbWhereUniqueInput
    create: XOR<UserFoodDbCreateWithoutFoodTypeInput, UserFoodDbUncheckedCreateWithoutFoodTypeInput>
  }

  export type UserFoodDbCreateManyFoodTypeInputEnvelope = {
    data: UserFoodDbCreateManyFoodTypeInput | UserFoodDbCreateManyFoodTypeInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutFoodTypeInput = {
    update: XOR<StoreUpdateWithoutFoodTypeInput, StoreUncheckedUpdateWithoutFoodTypeInput>
    create: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutFoodTypeInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutFoodTypeInput, StoreUncheckedUpdateWithoutFoodTypeInput>
  }

  export type StoreUpdateWithoutFoodTypeInput = {
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    missions?: MissionUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    foods?: FoodUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutFoodTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    missions?: MissionUncheckedUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    foods?: FoodUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type UserFoodDbUpsertWithWhereUniqueWithoutFoodTypeInput = {
    where: UserFoodDbWhereUniqueInput
    update: XOR<UserFoodDbUpdateWithoutFoodTypeInput, UserFoodDbUncheckedUpdateWithoutFoodTypeInput>
    create: XOR<UserFoodDbCreateWithoutFoodTypeInput, UserFoodDbUncheckedCreateWithoutFoodTypeInput>
  }

  export type UserFoodDbUpdateWithWhereUniqueWithoutFoodTypeInput = {
    where: UserFoodDbWhereUniqueInput
    data: XOR<UserFoodDbUpdateWithoutFoodTypeInput, UserFoodDbUncheckedUpdateWithoutFoodTypeInput>
  }

  export type UserFoodDbUpdateManyWithWhereWithoutFoodTypeInput = {
    where: UserFoodDbScalarWhereInput
    data: XOR<UserFoodDbUpdateManyMutationInput, UserFoodDbUncheckedUpdateManyWithoutFoodTypeInput>
  }

  export type StoreCreateWithoutFoodsInput = {
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    foodType?: FoodTypeCreateNestedOneWithoutStoreInput
    missions?: MissionCreateNestedManyWithoutStoreInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutFoodsInput = {
    id?: number
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    foodTypeId?: number | null
    missions?: MissionUncheckedCreateNestedManyWithoutStoreInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutFoodsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutFoodsInput, StoreUncheckedCreateWithoutFoodsInput>
  }

  export type StoreUpsertWithoutFoodsInput = {
    update: XOR<StoreUpdateWithoutFoodsInput, StoreUncheckedUpdateWithoutFoodsInput>
    create: XOR<StoreCreateWithoutFoodsInput, StoreUncheckedCreateWithoutFoodsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutFoodsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutFoodsInput, StoreUncheckedUpdateWithoutFoodsInput>
  }

  export type StoreUpdateWithoutFoodsInput = {
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    foodType?: FoodTypeUpdateOneWithoutStoreNestedInput
    missions?: MissionUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    foodTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    missions?: MissionUncheckedUpdateManyWithoutStoreNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type UserCreateWithoutUserFoodsInput = {
    name: string
    email: string
    gender: string
    birthDate: Date | string
    region: string
    address: string
    totalPoint?: number | null
    phoneNumber: string
    missions?: MissionCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserFoodsInput = {
    id?: number
    name: string
    email: string
    gender: string
    birthDate: Date | string
    region: string
    address: string
    totalPoint?: number | null
    phoneNumber: string
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserFoodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFoodsInput, UserUncheckedCreateWithoutUserFoodsInput>
  }

  export type FoodTypeCreateWithoutUserFoodDbsInput = {
    type: string
    store?: StoreCreateNestedOneWithoutFoodTypeInput
  }

  export type FoodTypeUncheckedCreateWithoutUserFoodDbsInput = {
    id?: number
    type: string
    store?: StoreUncheckedCreateNestedOneWithoutFoodTypeInput
  }

  export type FoodTypeCreateOrConnectWithoutUserFoodDbsInput = {
    where: FoodTypeWhereUniqueInput
    create: XOR<FoodTypeCreateWithoutUserFoodDbsInput, FoodTypeUncheckedCreateWithoutUserFoodDbsInput>
  }

  export type UserUpsertWithoutUserFoodsInput = {
    update: XOR<UserUpdateWithoutUserFoodsInput, UserUncheckedUpdateWithoutUserFoodsInput>
    create: XOR<UserCreateWithoutUserFoodsInput, UserUncheckedCreateWithoutUserFoodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFoodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFoodsInput, UserUncheckedUpdateWithoutUserFoodsInput>
  }

  export type UserUpdateWithoutUserFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    missions?: MissionUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodTypeUpsertWithoutUserFoodDbsInput = {
    update: XOR<FoodTypeUpdateWithoutUserFoodDbsInput, FoodTypeUncheckedUpdateWithoutUserFoodDbsInput>
    create: XOR<FoodTypeCreateWithoutUserFoodDbsInput, FoodTypeUncheckedCreateWithoutUserFoodDbsInput>
    where?: FoodTypeWhereInput
  }

  export type FoodTypeUpdateToOneWithWhereWithoutUserFoodDbsInput = {
    where?: FoodTypeWhereInput
    data: XOR<FoodTypeUpdateWithoutUserFoodDbsInput, FoodTypeUncheckedUpdateWithoutUserFoodDbsInput>
  }

  export type FoodTypeUpdateWithoutUserFoodDbsInput = {
    type?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateOneWithoutFoodTypeNestedInput
  }

  export type FoodTypeUncheckedUpdateWithoutUserFoodDbsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    store?: StoreUncheckedUpdateOneWithoutFoodTypeNestedInput
  }

  export type StoreCreateWithoutMissionsInput = {
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    foodType?: FoodTypeCreateNestedOneWithoutStoreInput
    reviews?: ReviewCreateNestedManyWithoutStoreInput
    foods?: FoodCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutMissionsInput = {
    id?: number
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    foodTypeId?: number | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    foods?: FoodUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutMissionsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
  }

  export type UserCreateWithoutMissionsInput = {
    name: string
    email: string
    gender: string
    birthDate: Date | string
    region: string
    address: string
    totalPoint?: number | null
    phoneNumber: string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    userFoods?: UserFoodDbCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMissionsInput = {
    id?: number
    name: string
    email: string
    gender: string
    birthDate: Date | string
    region: string
    address: string
    totalPoint?: number | null
    phoneNumber: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    userFoods?: UserFoodDbUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
  }

  export type StoreUpsertWithoutMissionsInput = {
    update: XOR<StoreUpdateWithoutMissionsInput, StoreUncheckedUpdateWithoutMissionsInput>
    create: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutMissionsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutMissionsInput, StoreUncheckedUpdateWithoutMissionsInput>
  }

  export type StoreUpdateWithoutMissionsInput = {
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    foodType?: FoodTypeUpdateOneWithoutStoreNestedInput
    reviews?: ReviewUpdateManyWithoutStoreNestedInput
    foods?: FoodUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    foodTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    reviews?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    foods?: FoodUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type UserUpsertWithoutMissionsInput = {
    update: XOR<UserUpdateWithoutMissionsInput, UserUncheckedUpdateWithoutMissionsInput>
    create: XOR<UserCreateWithoutMissionsInput, UserUncheckedCreateWithoutMissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMissionsInput, UserUncheckedUpdateWithoutMissionsInput>
  }

  export type UserUpdateWithoutMissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    userFoods?: UserFoodDbUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    userFoods?: UserFoodDbUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    name: string
    email: string
    gender: string
    birthDate: Date | string
    region: string
    address: string
    totalPoint?: number | null
    phoneNumber: string
    missions?: MissionCreateNestedManyWithoutUserInput
    userFoods?: UserFoodDbCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    email: string
    gender: string
    birthDate: Date | string
    region: string
    address: string
    totalPoint?: number | null
    phoneNumber: string
    missions?: MissionUncheckedCreateNestedManyWithoutUserInput
    userFoods?: UserFoodDbUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type StoreCreateWithoutReviewsInput = {
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    foodType?: FoodTypeCreateNestedOneWithoutStoreInput
    missions?: MissionCreateNestedManyWithoutStoreInput
    foods?: FoodCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutReviewsInput = {
    id?: number
    storeName: string
    verifcationId: number
    openTime?: Date | string | null
    closeTime?: Date | string | null
    address: string
    foodTypeId?: number | null
    missions?: MissionUncheckedCreateNestedManyWithoutStoreInput
    foods?: FoodUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutReviewsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    missions?: MissionUpdateManyWithoutUserNestedInput
    userFoods?: UserFoodDbUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalPoint?: NullableIntFieldUpdateOperationsInput | number | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    missions?: MissionUncheckedUpdateManyWithoutUserNestedInput
    userFoods?: UserFoodDbUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreUpsertWithoutReviewsInput = {
    update: XOR<StoreUpdateWithoutReviewsInput, StoreUncheckedUpdateWithoutReviewsInput>
    create: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutReviewsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutReviewsInput, StoreUncheckedUpdateWithoutReviewsInput>
  }

  export type StoreUpdateWithoutReviewsInput = {
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    foodType?: FoodTypeUpdateOneWithoutStoreNestedInput
    missions?: MissionUpdateManyWithoutStoreNestedInput
    foods?: FoodUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    verifcationId?: IntFieldUpdateOperationsInput | number
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: StringFieldUpdateOperationsInput | string
    foodTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    missions?: MissionUncheckedUpdateManyWithoutStoreNestedInput
    foods?: FoodUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type MissionCreateManyUserInput = {
    id?: number
    status?: string
    content: string
    deadline: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    storeId: number
    point: number
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    text: string
    rating: number
    storeId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserFoodDbCreateManyUserInput = {
    foodId: number
  }

  export type MissionUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    point?: IntFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutMissionsNestedInput
  }

  export type MissionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
  }

  export type MissionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store?: StoreUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserFoodDbUpdateWithoutUserInput = {
    foodType?: FoodTypeUpdateOneRequiredWithoutUserFoodDbsNestedInput
  }

  export type UserFoodDbUncheckedUpdateWithoutUserInput = {
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFoodDbUncheckedUpdateManyWithoutUserInput = {
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type MissionCreateManyStoreInput = {
    id?: number
    status?: string
    content: string
    deadline: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    point: number
    userId?: number | null
  }

  export type ReviewCreateManyStoreInput = {
    id?: number
    text: string
    rating: number
    userId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type FoodCreateManyStoreInput = {
    id?: number
    price: number
    name: string
  }

  export type MissionUpdateWithoutStoreInput = {
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    point?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutMissionsNestedInput
  }

  export type MissionUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    point?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MissionUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    point?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReviewUpdateWithoutStoreInput = {
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FoodUpdateWithoutStoreInput = {
    price?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserFoodDbCreateManyFoodTypeInput = {
    userId: number
  }

  export type UserFoodDbUpdateWithoutFoodTypeInput = {
    user?: UserUpdateOneRequiredWithoutUserFoodsNestedInput
  }

  export type UserFoodDbUncheckedUpdateWithoutFoodTypeInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFoodDbUncheckedUpdateManyWithoutFoodTypeInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}